/**
 * Google Apps Script — Proxy untuk fetch data dari Google Form RV Ciledug
 * v5 — Extract entry IDs from HTML input names (not FB_PUBLIC_LOAD_DATA_)
 */

var MAIN_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScqFl85ZlJCnUChOcCrzP9oAHYG9MyGks4-2MFLbOr0I83KwA/viewform";
var WL_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSd5vD1u07vBHqnAioYO0aSuXOZ7YeJNMXvHEQuAsGTBLuechA/viewform";

function doGet(e) {
  try {
    var action = (e && e.parameter && e.parameter.action) ? e.parameter.action : "full";
    var result;
    if (action === "entries") {
      // Scrape entry IDs from a specific form URL
      var url = e.parameter.url || WL_FORM_URL;
      result = scrapeEntryIds(url);
    } else {
      result = scrapeAll();
    }
    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ============================================================
// Scrape entry IDs from HTML — look for name="entry.XXXXX"
// This is the RELIABLE way to get pre-fill IDs
// ============================================================
function scrapeEntryIds(url) {
  var html = UrlFetchApp.fetch(url, { followRedirects: true }).getContentText();
  
  // Method 1: Find input/textarea with name="entry.XXXXX"
  var entryPattern = /name="entry\.(\d+)"/g;
  var entries = [];
  var seen = {};
  var m;
  while ((m = entryPattern.exec(html)) !== null) {
    if (!seen[m[1]]) {
      seen[m[1]] = true;
      entries.push(m[1]);
    }
  }
  
  // Method 2: Find data-params with entry IDs
  // data-params contains something like "%.@.[589041279,..."
  var dataParamsPattern = /data-params="([^"]+)"/g;
  var paramEntries = [];
  while ((m = dataParamsPattern.exec(html)) !== null) {
    var decoded = m[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&#39;/g, "'");
    // Find numbers that look like entry IDs (8-10 digits)
    var numPattern = /\[(\d{8,10}),/g;
    var nm;
    while ((nm = numPattern.exec(decoded)) !== null) {
      if (!seen[nm[1]]) {
        seen[nm[1]] = true;
        paramEntries.push(nm[1]);
      }
    }
  }
  
  // Method 3: From FB_PUBLIC_LOAD_DATA_ — get question titles mapped to IDs
  var fbMatch = html.match(/var\s+FB_PUBLIC_LOAD_DATA_\s*=\s*([\s\S]*?);\s*<\/script>/);
  var questions = [];
  if (fbMatch) {
    try {
      var raw = fbMatch[1].trim();
      var depth = 0, end = 0;
      for (var i = 0; i < raw.length; i++) {
        if (raw[i] === '[') depth++;
        if (raw[i] === ']') depth--;
        if (depth === 0) { end = i + 1; break; }
      }
      var fbData = JSON.parse(raw.substring(0, end));
      questions = findAllQuestions(fbData);
    } catch(e) {}
  }
  
  return {
    url: url,
    htmlEntryIds: entries,
    dataParamEntryIds: paramEntries,
    fbQuestions: questions.map(function(q) {
      return { entryId: q.entryId, title: q.title, type: q.type };
    }),
    htmlSnippets: extractInputSnippets(html)
  };
}

function extractInputSnippets(html) {
  // Find all input/textarea elements with their surrounding context
  var snippets = [];
  var inputPattern = /<(input|textarea)[^>]*>/gi;
  var m;
  while ((m = inputPattern.exec(html)) !== null) {
    var tag = m[0];
    if (tag.indexOf('entry.') >= 0 || tag.indexOf('name=') >= 0) {
      snippets.push(tag.substring(0, 200));
    }
  }
  return snippets.slice(0, 20); // limit
}

// ============================================================
// Deep-find questions from FB_PUBLIC_LOAD_DATA_
// ============================================================
function findAllQuestions(fbData) {
  var questions = [];
  function recurse(arr, path) {
    if (!Array.isArray(arr)) return;
    if (arr.length >= 4 && typeof arr[0] === 'number' && typeof arr[1] === 'string' && arr[1].length > 0 && typeof arr[3] === 'number') {
      questions.push({ entryId: arr[0], title: arr[1], description: arr[2] ? String(arr[2]).substring(0, 300) : "", type: arr[3], choices: [] });
      try {
        if (arr[4] && arr[4][0] && arr[4][0][1]) {
          for (var ci = 0; ci < arr[4][0][1].length; ci++) {
            if (arr[4][0][1][ci] && arr[4][0][1][ci][0]) questions[questions.length-1].choices.push(String(arr[4][0][1][ci][0]));
          }
        }
      } catch(e) {}
      return;
    }
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) recurse(arr[i], path + "[" + i + "]");
    }
  }
  recurse(fbData, "root");
  return questions;
}

// ============================================================
// FULL SCRAPE — main form + sub-form entry IDs
// ============================================================
function scrapeAll() {
  // 1. Parse main form
  var mainHtml = UrlFetchApp.fetch(MAIN_FORM_URL, { followRedirects: true }).getContentText();
  var fbMatch = mainHtml.match(/var\s+FB_PUBLIC_LOAD_DATA_\s*=\s*([\s\S]*?);\s*<\/script>/);
  var allQ = [];
  if (fbMatch) {
    try {
      var raw = fbMatch[1].trim();
      var depth = 0, end = 0;
      for (var i = 0; i < raw.length; i++) {
        if (raw[i] === '[') depth++;
        if (raw[i] === ']') depth--;
        if (depth === 0) { end = i + 1; break; }
      }
      allQ = findAllQuestions(JSON.parse(raw.substring(0, end)));
    } catch(e) {}
  }
  
  var result = {
    formTitle: "FORMULIR PENDAFTARAN PASIEN",
    dokterTujuan: [],
    dokterPerKategori: {},
    rencana: [],
    allQuestions: allQ.map(function(q) {
      return { entryId: q.entryId, title: q.title, description: q.description || "", type: q.type, choices: q.choices || [] };
    }),
    tanggalSlots: [],
    subFormFields: null
  };
  
  // Classify questions
  for (var i = 0; i < allQ.length; i++) {
    var q = allQ[i];
    if (q.choices && q.choices.length > 0) {
      if (q.choices.some(function(c) { return c.toUpperCase().indexOf("DOKTER") >= 0; })) {
        if (result.dokterTujuan.length === 0) result.dokterTujuan = q.choices;
      }
      if (q.choices.some(function(c) { return c.toLowerCase().indexOf("dr.") >= 0; })) {
        result.dokterPerKategori[q.title] = q.choices;
      }
      if (q.choices.some(function(c) { return c.toUpperCase().indexOf("KONSULTASI") >= 0 || c.toUpperCase().indexOf("VAKSINASI") >= 0; })) {
        if (result.rencana.length === 0) result.rencana = q.choices;
      }
    }
    // Tanggal slots
    var tu = q.title.toUpperCase();
    var desc = (q.description || "").toLowerCase();
    if (desc.indexOf("silakan isi form") >= 0 || desc.indexOf("silakan klik") >= 0 || tu.indexOf("WAITING LIST") >= 0) {
      var isCuti = tu.indexOf("CUTI") >= 0 || desc.indexOf("cuti") >= 0;
      var isWL = tu.indexOf("WAITING LIST") >= 0;
      result.tanggalSlots.push({
        entryId: q.entryId, title: q.title, description: q.description || "",
        isCuti: isCuti && !isWL, isWL: isWL
      });
    }
  }
  
  // 2. Scrape waiting list form for entry IDs
  try {
    var wlHtml = UrlFetchApp.fetch(WL_FORM_URL, { followRedirects: true }).getContentText();
    
    // Get entry IDs from data-params
    var wlFbMatch = wlHtml.match(/var\s+FB_PUBLIC_LOAD_DATA_\s*=\s*([\s\S]*?);\s*<\/script>/);
    var wlQuestions = [];
    if (wlFbMatch) {
      try {
        var wlRaw = wlFbMatch[1].trim();
        var wlDepth = 0, wlEnd = 0;
        for (var wi = 0; wi < wlRaw.length; wi++) {
          if (wlRaw[wi] === '[') wlDepth++;
          if (wlRaw[wi] === ']') wlDepth--;
          if (wlDepth === 0) { wlEnd = wi + 1; break; }
        }
        wlQuestions = findAllQuestions(JSON.parse(wlRaw.substring(0, wlEnd)));
      } catch(e) {}
    }
    
    // ALSO get entry IDs from HTML data-params attributes
    // These are the REAL entry IDs used in form submission
    var dpPattern = /data-params="([^"]+)"/g;
    var dpEntries = [];
    var dm;
    while ((dm = dpPattern.exec(wlHtml)) !== null) {
      var decoded = dm[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&');
      // Pattern: %.@.[ENTRY_ID, ...
      var idMatch = decoded.match(/\.\@\.\[(\d+)/);
      if (idMatch) {
        dpEntries.push(parseInt(idMatch[1]));
      }
    }
    
    // Also try: sentinel IDs from input names
    var namePattern = /name="entry\.(\d+)"/g;
    var nameEntries = [];
    var nm2;
    while ((nm2 = namePattern.exec(wlHtml)) !== null) {
      nameEntries.push(parseInt(nm2[1]));
    }
    
    // Build field mapping
    var fields = [];
    for (var qi = 0; qi < wlQuestions.length; qi++) {
      var wq = wlQuestions[qi];
      // The entry ID from FB data might be the same as data-params
      // Try to match by index
      var realEntryId = wq.entryId;
      if (qi < dpEntries.length) {
        realEntryId = dpEntries[qi];
      }
      if (qi < nameEntries.length) {
        realEntryId = nameEntries[qi]; // name= is most reliable
      }
      fields.push({
        title: wq.title,
        fbEntryId: wq.entryId,
        dataParamEntryId: qi < dpEntries.length ? dpEntries[qi] : null,
        nameEntryId: qi < nameEntries.length ? nameEntries[qi] : null,
        entryId: realEntryId
      });
    }
    
    result.subFormFields = {
      formUrl: WL_FORM_URL,
      formId: "1FAIpQLSd5vD1u07vBHqnAioYO0aSuXOZ7YeJNMXvHEQuAsGTBLuechA",
      fields: fields,
      rawHtmlEntries: nameEntries,
      rawDataParamEntries: dpEntries
    };
    
  } catch(e) {
    result.subFormError = e.toString();
  }
  
  return result;
}

function testScrape() {
  var result = scrapeAll();
  Logger.log(JSON.stringify(result, null, 2));
}

function testEntries() {
  var result = scrapeEntryIds(WL_FORM_URL);
  Logger.log(JSON.stringify(result, null, 2));
}
