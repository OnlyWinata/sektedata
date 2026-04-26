// ============================================================
// CONFIG
// ============================================================
const API_URL = "https://script.google.com/macros/s/AKfycbz6CtXbnzTO1CXvqUcvd3EdeDPj_2CfCwvVj80cT1h5oqljC6MiKzVtKpinfJ0p4Jw/exec";
const MAIN_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScqFl85ZlJCnUChOcCrzP9oAHYG9MyGks4-2MFLbOr0I83KwA/viewform";
const STORAGE_KEY = "rv_ciledug_patient";

const PRESETS = {
  kaashifa: {
    nama: "Kaashifa Ilmi Samudra",
    tglLahir: "15 Maret 2024",
    usia: "1 tahun 1 bulan",
    rencanaVaksin: "Vaksin",
    noHp: "08176050546"
  }
};

// ============================================================
// STATE
// ============================================================
let api = null;         // raw API response
let dateLinks = null;   // date → formlimit/form URL mapping
let sel = {
  dokterTujuan: "",
  dokter: "",
  rencana: "",
  tanggal: "",
  tanggalFormUrl: "",
};
let currentStep = 0;

const $ = id => document.getElementById(id);

// ============================================================
// NAVIGATION
// ============================================================
function goStep(n) {
  currentStep = n;
  document.querySelectorAll('.page').forEach((p, i) => p.classList.toggle('active-page', i === n));
  document.querySelectorAll('.step').forEach((s, i) => {
    s.classList.remove('active', 'done');
    if (i === n) s.classList.add('active');
    else if (i < n) s.classList.add('done');
  });
  if (n === 4) buildReview();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.goStep = goStep;

// ============================================================
// RADIO BUILDER
// ============================================================
function buildRadios(containerId, options, name, onSelect) {
  const c = $(containerId);
  if (!options || !options.length) {
    c.innerHTML = '<div class="empty-state">Tidak ada pilihan tersedia.</div>';
    return;
  }
  c.innerHTML = options.map((o, i) => {
    let cls = 'radio-option';
    if (o.cuti) cls += ' cuti';
    if (o.wl) cls += ' wl';
    if (o.disabled) cls += ' disabled';
    const badge = o.badge ? `<span class="ro-badge ${o.badgeCls || ''}">${o.badge}</span>` : '';
    const sub = o.sub ? `<div class="ro-sub">${o.sub}</div>` : '';
    return `<label class="${cls}" data-val="${o.value}" data-idx="${i}">
      <input type="radio" name="${name}" value="${o.value}" ${o.disabled || o.cuti ? 'disabled' : ''}>
      <div style="flex:1"><span class="ro-text">${o.label}</span>${sub}</div>${badge}
    </label>`;
  }).join('');
  c.querySelectorAll('.radio-option').forEach(el => {
    el.addEventListener('click', () => {
      if (el.classList.contains('disabled') || el.classList.contains('cuti')) return;
      c.querySelectorAll('.radio-option').forEach(o => o.classList.remove('selected'));
      el.classList.add('selected');
      el.querySelector('input').checked = true;
      if (onSelect) onSelect(el.dataset.val, parseInt(el.dataset.idx));
    });
  });
}

// ============================================================
// REFRESH
// ============================================================
$('btnRefresh').addEventListener('click', doRefresh);

async function doRefresh() {
  const bar = $('refreshBar');
  const label = $('refreshLabel');
  const btn = $('btnRefresh');
  bar.className = 'refresh-bar loading';
  label.innerHTML = '<span class="spinner"></span> Mengambil data...';
  btn.disabled = true;

  try {
    // Fetch API data and date links in parallel
    const [apiRes, linksRes] = await Promise.all([
      fetch(API_URL),
      fetch('date-links.json').catch(() => null)
    ]);
    if (!apiRes.ok) throw new Error('HTTP ' + apiRes.status);
    api = await apiRes.json();
    if (api.error) throw new Error(api.error);

    // Load date links
    if (linksRes && linksRes.ok) {
      dateLinks = await linksRes.json();
    }

    bar.className = 'refresh-bar ok';
    label.textContent = '✅ ' + new Date().toLocaleTimeString('id-ID');
    populateStep0();
  } catch (err) {
    bar.className = 'refresh-bar err';
    label.textContent = '❌ ' + err.message;
  } finally {
    btn.disabled = false;
  }
}

// ============================================================
// STEP 0: DOKTER
// ============================================================
function populateStep0() {
  if (!api) return;
  buildRadios('dokterTujuanGroup', (api.dokterTujuan || []).map(c => ({ value: c, label: c })),
    'dokterTujuan', val => {
      sel.dokterTujuan = val;
      sel.dokter = "";
      showPilihDokter(val);
    });
  $('divPilihDokter').style.display = 'none';
  $('pilihDokterSection').style.display = 'none';
  $('btnNext0').disabled = true;
}

function showPilihDokter(tujuan) {
  const key = Object.keys(api.dokterPerKategori || {}).find(k =>
    k.toUpperCase().includes(tujuan.replace('DOKTER ', '').trim()));
  if (key && api.dokterPerKategori[key].length > 0) {
    $('divPilihDokter').style.display = '';
    $('pilihDokterSection').style.display = '';
    buildRadios('pilihDokterGroup', api.dokterPerKategori[key].map(d => ({
      value: d, label: d, sub: getJadwal(d)
    })), 'pilihDokter', val => { sel.dokter = val; $('btnNext0').disabled = false; });
  } else {
    $('divPilihDokter').style.display = 'none';
    $('pilihDokterSection').style.display = 'none';
    sel.dokter = singleDokter(tujuan);
    $('btnNext0').disabled = false;
  }
}

function singleDokter(t) {
  return { "DOKTER UMUM": "dr. Diyana", "DOKTER SPESIALIS GIZI": "dr. Yohan Samudra, Sp.GK, AIFO-K",
    "DOKTER KONSELOR LAKTASI": "dr. Fathtiara Inayati, CBS" }[t] || t;
}
function getJadwal(n) {
  return { "dr. Nunki Andria, Sp.A": "Sel, Rab, Jum, Sab, Min · 09-14",
    "dr. Indah Soleha, Sp.A": "Jadwal menyesuaikan",
    "dr. Diyana": "Rab & Jum 16-19, Sab 09-12",
    "dr. Yohan Samudra, Sp.GK, AIFO-K": "Rab & Jum 17-19, Sab 09-12",
    "dr. Fathtiara Inayati, CBS": "Sel & Rab 09-12" }[n] || "";
}

$('btnNext0').addEventListener('click', () => {
  if (!sel.dokterTujuan) return;
  populateStep1();
  goStep(1);
});

// ============================================================
// STEP 1: RENCANA
// ============================================================
function populateStep1() {
  const q = api.allQuestions || [];

  // Dokter Umum → skip rencana, has dates directly
  if (sel.dokterTujuan === "DOKTER UMUM") {
    const drQ = q.find(qq => qq.title.toUpperCase().includes("RENCANA KEDATANGAN") &&
      qq.choices.length > 0 && qq.choices.some(c => c.includes("202")));
    if (drQ) {
      sel.rencana = "KONSULTASI";
      populateStep2Direct(drQ.choices);
      goStep(2);
      return;
    }
  }

  // Konselor Laktasi → might not have rencana
  if (sel.dokterTujuan === "DOKTER KONSELOR LAKTASI") {
    sel.rencana = "KONSULTASI";
    populateStep2ForKonselor();
    goStep(2);
    return;
  }

  // Find rencana for selected dokter
  let choices = [];
  const dokterShort = sel.dokter.split(",")[0].trim().toLowerCase();
  const secIdx = q.findIndex(qq => qq.title.toLowerCase().includes("pendaftaran ke " + dokterShort));
  if (secIdx >= 0) {
    for (let i = secIdx + 1; i < q.length; i++) {
      if (q[i].choices.length > 0 && q[i].title.toUpperCase().includes("RENCANA")) {
        choices = q[i].choices; break;
      }
    }
  }
  if (!choices.length) choices = api.rencana || ["KONSULTASI", "VAKSINASI DAN KONSULTASI"];

  $('rencanaDesc').textContent = `Untuk ${sel.dokter}`;
  buildRadios('rencanaGroup', choices.map(c => {
    const icon = c.toUpperCase().includes("VAKSIN") ? "💉" : "🗣️";
    return { value: c, label: icon + " " + c };
  }), 'rencana', val => { sel.rencana = val; $('btnNext1').disabled = false; });
  $('btnNext1').disabled = true;
}

$('btnNext1').addEventListener('click', () => {
  if (!sel.rencana) return;
  populateStep2();
  goStep(2);
});

// ============================================================
// STEP 2: TANGGAL
// ============================================================
function populateStep2() {
  const q = api.allQuestions || [];
  const sectionTitle = sel.rencana.toUpperCase();
  const dokterShort = sel.dokter.split(",")[0].trim().toLowerCase();

  // Find dokter section → rencana section → dates
  let startIdx = q.findIndex(qq => qq.title.toLowerCase().includes("pendaftaran ke " + dokterShort));
  if (startIdx < 0) startIdx = 0;

  let sectionIdx = -1;
  for (let i = startIdx; i < q.length; i++) {
    if (q[i].title.toUpperCase() === sectionTitle || q[i].title.toUpperCase().startsWith(sectionTitle)) {
      if (q[i].type === 8) { sectionIdx = i; break; }
    }
  }

  let dates = [];
  let cutiNotice = "";
  if (sectionIdx >= 0) {
    for (let i = sectionIdx + 1; i < q.length; i++) {
      const t = q[i];
      if (t.type === 8 || t.type === 2) break; // next section
      const tu = t.title.toUpperCase();
      const isWL = tu.includes("WAITING LIST");
      const isCuti = tu.includes("CUTI") || t.description.toUpperCase().includes("CUTI");

      if (isCuti && !isWL) {
        cutiNotice = "⚠️ " + t.title + ": " + t.description;
        dates.push({ value: t.title, label: t.title, sub: t.description,
          cuti: true, badge: "CUTI", badgeCls: "badge-red" });
      } else if (isWL) {
        dates.push({ value: t.title, label: "⏳ WAITING LIST", sub: t.description,
          wl: false, badge: "WL", badgeCls: "badge-yellow",
          formUrl: findFormUrlForSlot(t.title) });
      } else {
        dates.push({ value: t.title, label: "📅 " + t.title, sub: t.description || "",
          badge: "TERSEDIA", badgeCls: "badge-green",
          formUrl: findFormUrlForSlot(t.title) });
      }
    }
  }

  $('cutiNotice').style.display = cutiNotice ? '' : 'none';
  if (cutiNotice) $('cutiNotice').textContent = cutiNotice;

  if (!dates.length) {
    $('tanggalGroup').innerHTML = '<div class="empty-state">Tidak ada tanggal tersedia.</div>';
    $('btnNext2').disabled = true;
    return;
  }

  buildRadios('tanggalGroup', dates, 'tanggal', (val, idx) => {
    sel.tanggal = val;
    sel.tanggalFormUrl = dates[idx].formUrl || "";
    $('btnNext2').disabled = false;
  });
  $('btnNext2').disabled = true;
}

function populateStep2Direct(choices) {
  $('cutiNotice').style.display = 'none';
  buildRadios('tanggalGroup', choices.map(c => ({
    value: c, label: "📅 " + c, badge: "TERSEDIA", badgeCls: "badge-green"
  })), 'tanggal', val => { sel.tanggal = val; $('btnNext2').disabled = false; });
  $('btnNext2').disabled = true;
}

function populateStep2ForKonselor() {
  const q = api.allQuestions || [];
  // Find "dr. Fathtiara" section → "FORM PENDAFTARAN"
  const secIdx = q.findIndex(qq => qq.title.includes("Fathtiara"));
  let dates = [];
  if (secIdx >= 0) {
    for (let i = secIdx + 1; i < q.length; i++) {
      if (q[i].type === 8 || q[i].type === 2) break;
      dates.push({ value: q[i].title, label: "📅 " + q[i].title, sub: q[i].description,
        badge: "TERSEDIA", badgeCls: "badge-green",
        formUrl: findFormUrlForSlot(q[i].title) });
    }
  }
  $('cutiNotice').style.display = 'none';
  if (!dates.length) {
    $('tanggalGroup').innerHTML = '<div class="empty-state">Tidak ada tanggal tersedia.</div>';
    $('btnNext2').disabled = true;
    return;
  }
  buildRadios('tanggalGroup', dates, 'tanggal', (val, idx) => {
    sel.tanggal = val; sel.tanggalFormUrl = dates[idx].formUrl || ""; $('btnNext2').disabled = false;
  });
  $('btnNext2').disabled = true;
}

function findFormUrlForSlot(title) {
  if (!dateLinks) return "";
  // Determine which rencana category to look in
  const rencanaKey = sel.rencana.toUpperCase().includes("VAKSIN") ? "vaksinasi" : "konsultasi";
  const links = dateLinks[rencanaKey] || {};
  // Try exact match first, then partial
  if (links[title]) return links[title];
  const titleTrim = title.trim();
  for (const [k, v] of Object.entries(links)) {
    if (k.trim() === titleTrim || titleTrim.toUpperCase().includes(k.trim().toUpperCase()) || k.trim().toUpperCase().includes(titleTrim.toUpperCase())) {
      return v;
    }
  }
  return "";
}

$('btnNext2').addEventListener('click', () => {
  if (!sel.tanggal) return;
  goStep(3);
});

// ============================================================
// STEP 3: DATA PASIEN
// ============================================================
$('btnNext3').addEventListener('click', () => {
  if (!$('nama').value || !$('tglLahir').value || !$('usia').value || !$('noHp').value) {
    alert('Isi semua field yang wajib (*)'); return;
  }
  savePatient();
  goStep(4);
});

document.querySelectorAll('.preset-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const key = btn.dataset.preset;
    if (key === 'custom') {
      ['nama','tglLahir','usia','rencanaVaksin','noHp'].forEach(id => $(id).value = '');
    } else if (PRESETS[key]) {
      const p = PRESETS[key];
      $('nama').value = p.nama; $('tglLahir').value = p.tglLahir;
      $('usia').value = p.usia; $('rencanaVaksin').value = p.rencanaVaksin;
      $('noHp').value = p.noHp;
    }
  });
});

// ============================================================
// STEP 4: REVIEW & SUBMIT
// ============================================================
function buildReview() {
  const rows = [
    ['Dokter Tujuan', sel.dokterTujuan],
    ['Dokter', sel.dokter],
    ['Rencana', sel.rencana],
    ['Tanggal', sel.tanggal],
    ['Nama Pasien', $('nama').value],
    ['Tanggal Lahir', $('tglLahir').value],
    ['Usia', $('usia').value],
    ['Rencana Vaksinasi', $('rencanaVaksin').value || '—'],
    ['No HP', $('noHp').value],
  ];
  $('reviewContent').innerHTML = '<table class="review-table">' +
    rows.map(([k, v]) => `<tr><td>${k}</td><td>${v || '—'}</td></tr>`).join('') + '</table>';

  const targetInfo = $('targetFormInfo');
  targetInfo.innerHTML = '<span style="color:var(--primary)">Config akan disimpan → jalankan Python script via terminal</span>';
}

// ============================================================
// SAVE CONFIG → generates config.json content + terminal command
// ============================================================
$('btnSaveConfig').addEventListener('click', async () => {
  const config = {
    DOKTER_TUJUAN: sel.dokterTujuan,
    PILIH_DOKTER: sel.dokter,
    RENCANA_KEDATANGAN: sel.rencana,
    TANGGAL_KUNJUNGAN: sel.tanggal,
    NAMA_LENGKAP_PASIEN: $('nama').value,
    TANGGAL_LAHIR_PASIEN: $('tglLahir').value,
    USIA_PASIEN: $('usia').value,
    RENCANA_DETAIL: $('rencanaVaksin').value || sel.rencana,
    NO_HANDPHONE: $('noHp').value,
    JADWAL_MULAI: "08:00:00",
    PRE_LOAD_MENIT: 2
  };

  // Download config.json
  const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'config.json';
  a.click();
  URL.revokeObjectURL(url);

  // Show command
  const cmd = 'python3 google_form_filler.py --config config.json';
  $('commandText').textContent = cmd;
  $('commandBox').style.display = 'block';

  // Copy command to clipboard
  await navigator.clipboard.writeText(cmd).catch(() => {});
  showStatus($('submitStatus'), 'success', '💾 Config downloaded! Command copied to clipboard.');
});

$('btnCopyCmd').addEventListener('click', () => {
  navigator.clipboard.writeText($('commandText').textContent).then(() => {
    $('btnCopyCmd').textContent = '✓';
    setTimeout(() => { $('btnCopyCmd').textContent = 'Copy'; }, 1500);
  });
});

// ============================================================
// PRE-FILL & SUBMIT LOGIC
// ============================================================
// Google Forms has TWO types of IDs:
//   - Question ID (from FB_PUBLIC_LOAD_DATA_): e.g. 589041279
//   - Input/Answer ID (from data-params [[inputId,...): e.g. 281593572
// Pre-fill URLs use INPUT IDs!
const INPUT_IDS = {
  nama: 281593572,
  tglLahir: 1222754963,
  usia: 641600353,
  rencana: 1913622837,
  tanggalWL: 605243980,
  noHp: 1085668742
};

const WL_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSd5vD1u07vBHqnAioYO0aSuXOZ7YeJNMXvHEQuAsGTBLuechA/viewform";

function buildPrefilledUrl(baseUrl) {
  const params = new URLSearchParams();
  params.set('entry.' + INPUT_IDS.nama, $('nama').value);
  params.set('entry.' + INPUT_IDS.tglLahir, $('tglLahir').value);
  params.set('entry.' + INPUT_IDS.usia, $('usia').value);
  params.set('entry.' + INPUT_IDS.rencana, $('rencanaVaksin').value || sel.rencana);
  params.set('entry.' + INPUT_IDS.noHp, $('noHp').value);
  if (sel.tanggal && sel.tanggal.toUpperCase().includes('WAITING')) {
    params.set('entry.' + INPUT_IDS.tanggalWL, sel.tanggal);
  }
  return (baseUrl || WL_FORM) + '?' + params.toString();
}

function copyPatientData() {
  const text = [
    $('nama').value,
    $('tglLahir').value,
    $('usia').value,
    ($('rencanaVaksin').value || sel.rencana),
    $('noHp').value,
  ].join('\n');
  return navigator.clipboard.writeText(text);
}

$('btnOpenPrefilled').addEventListener('click', async () => {
  // Copy data to clipboard first
  await copyPatientData().catch(() => {});

  if (sel.tanggalFormUrl && sel.tanggalFormUrl.includes('formlimit')) {
    // Formlimit URL — can't pre-fill, but data is copied to clipboard
    window.open(sel.tanggalFormUrl, '_blank');
    showStatus($('submitStatus'), 'success',
      '📋 Data di-copy ke clipboard! Form dibuka via formlimit.\nPaste data satu-satu di form.');
  } else if (sel.tanggalFormUrl && sel.tanggalFormUrl.includes('forms.g')) {
    // Direct Google Form link (e.g. forms.gle shortlink) — pre-fill works
    const url = buildPrefilledUrl(sel.tanggalFormUrl);
    window.open(url, '_blank');
    showStatus($('submitStatus'), 'success', '✅ Form dibuka dengan data pre-filled!');
  } else {
    // Fallback: open waiting list form with pre-fill
    const url = buildPrefilledUrl(WL_FORM);
    window.open(url, '_blank');
    showStatus($('submitStatus'), 'success', '✅ Form Waiting List dibuka dengan data pre-filled!');
  }
});

$('btnCopyAll').addEventListener('click', () => {
  const text = [
    `Dokter Tujuan: ${sel.dokterTujuan}`,
    `Dokter: ${sel.dokter}`,
    `Rencana: ${sel.rencana}`,
    `Tanggal: ${sel.tanggal}`,
    `---`,
    `Nama: ${$('nama').value}`,
    `Tanggal Lahir: ${$('tglLahir').value}`,
    `Usia: ${$('usia').value}`,
    `Rencana Vaksinasi: ${$('rencanaVaksin').value}`,
    `No HP: ${$('noHp').value}`,
  ].join('\n');
  navigator.clipboard.writeText(text).then(() => {
    showStatus($('submitStatus'), 'success', '📋 Copied!');
  }).catch(() => {
    showStatus($('submitStatus'), 'error', '❌ Gagal copy');
  });
});

function showStatus(el, type, msg) {
  el.className = 'status ' + type;
  el.textContent = msg;
  setTimeout(() => { el.className = 'status'; }, 4000);
}

// ============================================================
// LOCAL STORAGE
// ============================================================
function savePatient() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    nama: $('nama').value, tglLahir: $('tglLahir').value,
    usia: $('usia').value, rencanaVaksin: $('rencanaVaksin').value, noHp: $('noHp').value
  }));
}
function loadPatient() {
  try {
    const d = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (d && d.nama) {
      $('nama').value = d.nama; $('tglLahir').value = d.tglLahir;
      $('usia').value = d.usia; $('rencanaVaksin').value = d.rencanaVaksin || '';
      $('noHp').value = d.noHp; return true;
    }
  } catch {}
  return false;
}

// ============================================================
// INIT
// ============================================================
(function init() {
  if (!loadPatient()) {
    const p = PRESETS.kaashifa;
    $('nama').value = p.nama; $('tglLahir').value = p.tglLahir;
    $('usia').value = p.usia; $('rencanaVaksin').value = p.rencanaVaksin; $('noHp').value = p.noHp;
  }
  ['nama','tglLahir','usia','rencanaVaksin','noHp'].forEach(id => {
    $(id).addEventListener('input', savePatient);
  });
  doRefresh();
})();