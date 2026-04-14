/**
 * Language Switcher — ID ↔ EN
 * Stores translations, toggles text, persists choice in localStorage.
 */

const translations = {
  // ── Sidebar (shared across all pages) ──
  "sidebar.portfolio": { id: "Portfolio", en: "Portfolio" },
  "sidebar.index": { id: "Index", en: "Index" },
  "sidebar.riset": { id: "Riset Bisnis", en: "Business Research" },
  "sidebar.pertanyaan": { id: "Pertanyaan Bisnis", en: "Business Questions" },
  "sidebar.temuan": { id: "Temuan & Rekom", en: "Findings & Recs" },
  "sidebar.reports": { id: "Reports", en: "Reports" },
  "sidebar.overview": { id: "Overview", en: "Overview" },
  "sidebar.deepdive": { id: "Deep Dive", en: "Deep Dive" },
  "sidebar.appendix": { id: "Appendix", en: "Appendix" },
  "sidebar.carakerja": { id: "Cara Kerja", en: "How It Works" },
  "sidebar.loker": { id: "Perihal Loker", en: "About the Job" },

  // ══════════════════════════════════════
  // index.html
  // ══════════════════════════════════════
  "idx.topbar": { id: "Portfolio", en: "Portfolio" },
  "idx.badge": { id: "Portfolio", en: "Portfolio" },
  "idx.hero.title": { id: "Pizza Hut Indonesia", en: "Pizza Hut Indonesia" },
  "idx.hero.sub": { id: "Outlet Performance & Channel Mix Optimization", en: "Outlet Performance & Channel Mix Optimization" },
  "idx.tag1": { id: "552 Outlet Real", en: "552 Real Outlets" },
  "idx.tag2": { id: "Data Keuangan IDX", en: "IDX Financial Data" },
  "idx.tag3": { id: "Menu dari GrabFood", en: "Menu from GrabFood" },
  "idx.tag4": { id: "Google Maps Scraping", en: "Google Maps Scraping" },
  "idx.sec.portfolio": { id: "Portfolio", en: "Portfolio" },
  "idx.card1.title": { id: "Memahami Pizza Hut Indonesia", en: "Understanding Pizza Hut Indonesia" },
  "idx.card1.desc": { id: "Kondisi keuangan, skala operasi, cost structure, 4 channel, masalah utama", en: "Financial condition, operational scale, cost structure, 4 channels, key issues" },
  "idx.card2.title": { id: "Pertanyaan Bisnis", en: "Business Questions" },
  "idx.card2.desc": { id: "3 pertanyaan strategis, framework analisis, mapping ke job posting", en: "3 strategic questions, analytical framework, mapping to job posting" },
  "idx.card3.title": { id: "Temuan & Rekomendasi", en: "Findings & Recommendations" },
  "idx.card3.desc": { id: "Key findings, peta cannibalization, 4 rekomendasi quantified", en: "Key findings, cannibalization map, 4 quantified recommendations" },
  "idx.sec.reports": { id: "Reports", en: "Reports" },
  "idx.card4.title": { id: "Report: Q1 2026 Overview", en: "Report: Q1 2026 Overview" },
  "idx.card4.desc": { id: "Revenue trend, channel breakdown, region comparison, aggregator commission", en: "Revenue trend, channel breakdown, region comparison, aggregator commission" },
  "idx.card5.title": { id: "Deep Dive: Segmentation", en: "Deep Dive: Segmentation" },
  "idx.card5.desc": { id: "Scatter plot 552 outlet, BCG segmentasi, age/mall/promo patterns", en: "Scatter plot of 552 outlets, BCG segmentation, age/mall/promo patterns" },
  "idx.sec.appendix": { id: "Appendix", en: "Appendix" },
  "idx.card6.title": { id: "Cara Kerja (Teknis)", en: "How It Works (Technical)" },
  "idx.card6.desc": { id: "Data pipeline, scraping, Haversine, tools & stack", en: "Data pipeline, scraping, Haversine, tools & stack" },
  "idx.card7.title": { id: "Perihal Loker", en: "About the Job" },
  "idx.card7.desc": { id: "Job posting Senior Data Analytics, 12 responsibilities, mapping ke portfolio", en: "Senior Data Analytics job posting, 12 responsibilities, mapping to portfolio" },

  // ══════════════════════════════════════
  // 01_memahami_pizza_hut.html
  // ══════════════════════════════════════
  "p01.topbar": { id: "Memahami Pizza Hut Indonesia", en: "Understanding Pizza Hut Indonesia" },
  "p01.badge": { id: "Portfolio · 01", en: "Portfolio · 01" },
  "p01.hero.title": { id: "Riset Bisnis: Pizza Hut Indonesia", en: "Business Research: Pizza Hut Indonesia" },
  "p01.hero.sub": { id: "Sebelum menyentuh data, penting untuk memahami bisnisnya terlebih dahulu. Siapa mereka, bagaimana kondisinya, dan masalah apa yang sedang dihadapi.", en: "Before touching the data, it's important to understand the business first. Who they are, their current condition, and what problems they're facing." },
  "p01.intro": { id: "Pizza Hut Indonesia dioperasikan oleh PT Sarimelati Kencana Tbk — perusahaan publik di BEI dengan kode saham <code>PZZA</code>. Laporan keuangan mereka bisa diakses siapa saja.", en: "Pizza Hut Indonesia is operated by PT Sarimelati Kencana Tbk — a publicly listed company on the IDX with ticker <code>PZZA</code>. Their financial reports are publicly accessible." },
  "p01.sec.keuangan": { id: "Kondisi Keuangan: 3 Tahun Rugi, Baru Recovery", en: "Financial Condition: 3 Years of Losses, Just Recovering" },
  "p01.th.tahun": { id: "Tahun", en: "Year" },
  "p01.th.catatan": { id: "Catatan", en: "Notes" },
  "p01.note.2019": { id: "Peak — pre-COVID", en: "Peak — pre-COVID" },
  "p01.note.2020": { id: "COVID hit", en: "COVID hit" },
  "p01.note.2021": { id: "Slight recovery", en: "Slight recovery" },
  "p01.note.2022": { id: "Rugi lagi", en: "Loss again" },
  "p01.note.2023": { id: "Makin rugi", en: "Deeper loss" },
  "p01.note.2024": { id: "Revenue drop 21%", en: "Revenue drop 21%" },
  "p01.note.2025": { id: "Recovery — tipis", en: "Recovery — thin" },
  "p01.callout.sumber.title": { id: "Sumber data", en: "Data source" },
  "p01.callout.sumber.text": { id: "Semua angka dari laporan keuangan publik PZZA di IDX, diakses via stockanalysis.com dan simplywall.st. Ini angka audited, bukan estimasi.", en: "All figures from PZZA's public financial reports on IDX, accessed via stockanalysis.com and simplywall.st. These are audited numbers, not estimates." },
  "p01.sec.skala": { id: "Skala Operasi", en: "Operational Scale" },
  "p01.kpi.outlet": { id: "Outlet (official)", en: "Outlets (official)" },
  "p01.kpi.outlet.sub": { id: "per Sep 2024", en: "as of Sep 2024" },
  "p01.kpi.gmaps": { id: "Ditemukan di GMaps", en: "Found on GMaps" },
  "p01.kpi.gmaps.sub": { id: "selisih 43", en: "43 difference" },
  "p01.kpi.dinein": { id: "Dine-in", en: "Dine-in" },
  "p01.kpi.dinein.sub": { id: "Pizza Hut Restoran", en: "Pizza Hut Restaurant" },
  "p01.kpi.phd.sub": { id: "Delivery only", en: "Delivery only" },
  "p01.kpi.phd": { id: "PHD", en: "PHD" },
  "p01.kpi.kota": { id: "Kota", en: "Cities" },
  "p01.kpi.kota.sub": { id: "seluruh Indonesia", en: "across Indonesia" },
  "p01.skala.text": { id: "Official statement PZZA menyebutkan 595 outlet per September 2024. Dari Google Maps, ditemukan 552. Selisih 43 kemungkinan karena outlet baru tutup, baru buka, atau tidak terlisting.", en: "PZZA's official statement mentions 595 outlets as of September 2024. From Google Maps, 552 were found. The 43 difference is likely due to recently closed, newly opened, or unlisted outlets." },
  "p01.sec.cost": { id: "Cost Structure: Mengapa Margin Tipis", en: "Cost Structure: Why Margins Are Thin" },
  "p01.cost.intro": { id: "Berikut income statement Pizza Hut Indonesia FY 2025 dalam format waterfall — setiap baris mengurangi baris sebelumnya. Semua angka dari laporan keuangan publik PZZA di IDX:", en: "Below is Pizza Hut Indonesia's FY 2025 income statement in waterfall format — each row reduces the previous one. All figures from PZZA's public financial reports on IDX:" },
  "p01.cost.th.item": { id: "Item", en: "Item" },
  "p01.cost.th.angka": { id: "Angka", en: "Amount" },
  "p01.cost.th.sumber": { id: "Sumber", en: "Source" },
  "p01.cost.foodcost": { id: "Food Cost (COGS / bahan baku)", en: "Food Cost (COGS / raw materials)" },
  "p01.cost.sga": { id: "SG&A (gaji, sewa, listrik, marketing)", en: "SG&A (salary, rent, utilities, marketing)" },
  "p01.cost.othrev": { id: "Pendapatan operasional lain", en: "Other operating income" },
  "p01.cost.interest": { id: "Bunga & pajak", en: "Interest & taxes" },
  "p01.cost.netincome": { id: "Net Income (laba bersih)", en: "Net Income" },
  "p01.cost.lk": { id: "Laporan keuangan PZZA", en: "PZZA financial report" },
  "p01.cost.explain": { id: "Cara membaca: Revenue Rp 3.05T dikurangi food cost (31.9%) = gross profit Rp 2.08T. Gross profit dikurangi SG&A (67%) + pendapatan lain = operating income Rp 95.5M (3.1%). Setelah bunga dan pajak, tersisa net income Rp 24.8M (0.8%). Margin sangat tipis — hampir tidak ada buffer.", en: "How to read: Revenue Rp 3.05T minus food cost (31.9%) = gross profit Rp 2.08T. Gross profit minus SG&A (67%) + other income = operating income Rp 95.5M (3.1%). After interest and taxes, net income is Rp 24.8M (0.8%). Margins are razor-thin — almost no buffer." },
  "p01.callout.limit.title": { id: "⚠️ Keterbatasan", en: "⚠️ Limitations" },
  "p01.callout.limit.text": { id: "SG&A sebesar 67% dilaporkan sebagai satu line item di laporan keuangan PZZA — tidak di-breakdown per komponen secara publik. Estimasi breakdown berikut berdasarkan industry benchmark QSR Indonesia dan data advertising expense PZZA (Rp 112M = 3.7% revenue) yang memang dilaporkan terpisah:", en: "SG&A of 67% is reported as a single line item in PZZA's financial reports — not broken down by component publicly. The following breakdown estimates are based on Indonesian QSR industry benchmarks and PZZA's advertising expense data (Rp 112B = 3.7% revenue) which is reported separately:" },
  "p01.callout.limit.sub": { id: "Dengan data internal, breakdown ini bisa jauh lebih akurat.", en: "With internal data, this breakdown could be much more accurate." },
  "p01.sec.channel": { id: "4 Channel Penjualan", en: "4 Sales Channels" },
  "p01.ch.th.channel": { id: "Channel", en: "Channel" },
  "p01.ch.th.desc": { id: "Deskripsi", en: "Description" },
  "p01.ch.dinein.desc": { id: "Makan di tempat, full service", en: "Dine-in, full service" },
  "p01.ch.dinein.margin": { id: "Revenue tinggi, cost tinggi (sewa, staff)", en: "High revenue, high cost (rent, staff)" },
  "p01.ch.delivery.desc": { id: "Delivery fleet sendiri (PHD)", en: "Own delivery fleet (PHD)" },
  "p01.ch.delivery.margin": { id: "Margin lebih baik dari aggregator", en: "Better margin than aggregator" },
  "p01.ch.agg.desc": { id: "GoFood, GrabFood, ShopeeFood", en: "GoFood, GrabFood, ShopeeFood" },
  "p01.ch.agg.margin": { id: "Reach luas, komisi 20-30%", en: "Wide reach, 20-30% commission" },
  "p01.ch.takeaway.desc": { id: "Beli bawa pulang", en: "Buy and take home" },
  "p01.ch.takeaway.margin": { id: "Margin terbaik — no commission", en: "Best margin — no commission" },
  "p01.sec.masalah": { id: "Masalah Utama", en: "Key Issues" },
  "p01.masalah.1": { id: "<strong>Tidak semua outlet profitable</strong> — operating margin 3.1% company-wide, pasti ada yang 15% dan ada yang -20%", en: "<strong>Not all outlets are profitable</strong> — operating margin 3.1% company-wide, some are at 15% and others at -20%" },
  "p01.masalah.2": { id: "<strong>Channel mix belum optimal</strong> — aggregator growing tapi margin tipis", en: "<strong>Channel mix not yet optimal</strong> — aggregator growing but thin margins" },
  "p01.masalah.3": { id: "<strong>Cannibalization</strong> — 33 outlet punya 3+ neighbors dalam 2km", en: "<strong>Cannibalization</strong> — 33 outlets have 3+ neighbors within 2km" },
  "p01.masalah.4": { id: "<strong>Fixed cost trap</strong> — sewa mall tidak turun meski revenue turun", en: "<strong>Fixed cost trap</strong> — mall rent doesn't decrease even when revenue drops" },
  "p01.callout.framework.title": { id: "✅ Framework tetap applicable", en: "✅ Framework remains applicable" },
  "p01.callout.framework.text": { id: "Semua insight berdasarkan data publik dan proxy. Namun framework analisis yang dibangun — scoring model, segmentasi, channel profitability — tetap applicable. Dengan data internal, tinggal plug in.", en: "All insights are based on public data and proxies. However, the analytical framework built — scoring model, segmentation, channel profitability — remains applicable. With internal data, just plug in." },

  // ══════════════════════════════════════
  // 02_pertanyaan_bisnis.html
  // ══════════════════════════════════════
  "p02.topbar": { id: "Pertanyaan Bisnis", en: "Business Questions" },
  "p02.badge": { id: "Portfolio · 02", en: "Portfolio · 02" },
  "p02.hero.title": { id: "Pertanyaan Bisnis & Framework", en: "Business Questions & Framework" },
  "p02.hero.sub": { id: "Tidak langsung membuat pivot table. Dimulai dari pertanyaan bisnis, siapa stakeholder-nya, dan framework apa yang tepat.", en: "Not jumping straight to pivot tables. Starting from business questions, who the stakeholders are, and what framework fits." },
  "p02.intro": { id: "Dari riset bisnis, teridentifikasi 3 pertanyaan utama:", en: "From the business research, 3 key questions were identified:" },
  "p02.q1.title": { id: "Pertanyaan 1: Outlet mana yang harus ditutup, mana yang diinvestasi?", en: "Question 1: Which outlets should be closed, which should be invested in?" },
  "p02.q1.who": { id: "Stakeholder: VP Operations + CFO + Board", en: "Stakeholder: VP Operations + CFO + Board" },
  "p02.q1.text": { id: "552 outlet tidak bisa di-evaluate satu-satu. Dibutuhkan scoring framework yang sistematis — mempertimbangkan trend, area, dan lease expiry, bukan hanya profitabilitas saat ini.", en: "552 outlets can't be evaluated one by one. A systematic scoring framework is needed — considering trends, area, and lease expiry, not just current profitability." },
  "p02.q2.title": { id: "Pertanyaan 2: Channel mana yang benar-benar profitable?", en: "Question 2: Which channel is truly profitable?" },
  "p02.q2.who": { id: "Stakeholder: CMO + VP Operations", en: "Stakeholder: CMO + VP Operations" },
  "p02.q2.text": { id: "Revenue aggregator naik, tapi setelah komisi 20-30%, masih profitable? Apakah aggregator cannibalize own delivery?", en: "Aggregator revenue is rising, but after 20-30% commission, is it still profitable? Does aggregator cannibalize own delivery?" },
  "p02.q3.title": { id: "Pertanyaan 3: Apa yang di-present ke board?", en: "Question 3: What to present to the board?" },
  "p02.q3.who": { id: "Stakeholder: Board of Directors", en: "Stakeholder: Board of Directors" },
  "p02.q3.text": { id: "1 halaman. Berapa outlet profitable vs unprofitable? Projected savings? 1 biggest risk, 1 biggest opportunity.", en: "1 page. How many outlets profitable vs unprofitable? Projected savings? 1 biggest risk, 1 biggest opportunity." },
  "p02.sec.seg": { id: "Framework: Outlet Segmentation", en: "Framework: Outlet Segmentation" },
  "p02.seg.star": { id: "Stars — High Rev + High Margin", en: "Stars — High Rev + High Margin" },
  "p02.seg.star.desc": { id: "Invest & expand", en: "Invest & expand" },
  "p02.seg.cow": { id: "Cash Cows — Low Rev + High Margin", en: "Cash Cows — Low Rev + High Margin" },
  "p02.seg.cow.desc": { id: "Maintain, efficient", en: "Maintain, efficient" },
  "p02.seg.q": { id: "Question Marks — High Rev + Low Margin", en: "Question Marks — High Rev + Low Margin" },
  "p02.seg.q.desc": { id: "Investigate, fix or close", en: "Investigate, fix or close" },
  "p02.seg.dog": { id: "Dogs — Low Rev + Low Margin", en: "Dogs — Low Rev + Low Margin" },
  "p02.seg.dog.desc": { id: "Closure candidates", en: "Closure candidates" },
  "p02.sec.channel": { id: "Framework: Channel Profitability", en: "Framework: Channel Profitability" },
  "p02.ch.th.deductions": { id: "Deductions", en: "Deductions" },
  "p02.ch.dinein.ded": { id: "Food + labor + rent", en: "Food + labor + rent" },
  "p02.ch.delivery.ded": { id: "Food + delivery cost (~7%)", en: "Food + delivery cost (~7%)" },
  "p02.ch.agg.ded": { id: "Food + commission (20-30%)", en: "Food + commission (20-30%)" },
  "p02.ch.takeaway.ded": { id: "Food cost only", en: "Food cost only" },
  "p02.sec.mapping": { id: "Mapping ke Job Posting", en: "Mapping to Job Posting" },
  "p02.map.1": { id: "<strong>Data Engineering</strong> (R1-3, R10-11) — collect, validate, transform → data cleaning & profiling", en: "<strong>Data Engineering</strong> (R1-3, R10-11) — collect, validate, transform → data cleaning & profiling" },
  "p02.map.2": { id: "<strong>Analysis & Modeling</strong> (R4-6) — patterns, scoring model → outlet segmentation & channel analysis", en: "<strong>Analysis & Modeling</strong> (R4-6) — patterns, scoring model → outlet segmentation & channel analysis" },
  "p02.map.3": { id: "<strong>Strategic Thinking</strong> (R8) — propose solutions → rekomendasi ke board", en: "<strong>Strategic Thinking</strong> (R8) — propose solutions → recommendations to board" },
  "p02.map.4": { id: "<strong>Communication</strong> (R7, R12) — present to stakeholders → executive summary & report", en: "<strong>Communication</strong> (R7, R12) — present to stakeholders → executive summary & report" },
  "p02.callout.senior.title": { id: "Senior vs Junior", en: "Senior vs Junior" },
  "p02.callout.senior.text": { id: "Level Junior: mengeksekusi report yang diminta. Level Senior: menentukan pertanyaan yang tepat, merancang framework, dan meng-communicate ke stakeholder yang berbeda.", en: "Junior level: executes requested reports. Senior level: determines the right questions, designs frameworks, and communicates to different stakeholders." },

  // ══════════════════════════════════════
  // 03_temuan_dan_rekomendasi.html
  // ══════════════════════════════════════
  "p03.topbar": { id: "Temuan & Rekomendasi", en: "Findings & Recommendations" },
  "p03.badge": { id: "Portfolio · 03", en: "Portfolio · 03" },
  "p03.hero.title": { id: "Key Findings & Actionable Recommendations", en: "Key Findings & Actionable Recommendations" },
  "p03.hero.sub": { id: "Dari data publik — dan ini yang layak dipresentasikan ke board sebagai Senior DA.", en: "From public data — and this is what's worth presenting to the board as a Senior DA." },
  "p03.disclaimer": { id: "⚠️ Temuan berdasarkan data publik (IDX, Google Maps, GrabFood) dan proxy. Revenue per outlet adalah estimasi. Pattern dan framework tetap applicable dengan data internal.", en: "⚠️ Findings based on public data (IDX, Google Maps, GrabFood) and proxies. Revenue per outlet is estimated. Patterns and framework remain applicable with internal data." },
  "p03.sec.findings": { id: "Key Findings", en: "Key Findings" },
  "p03.f1.title": { id: "Finding 1: Ramadan = Delivery Surge", en: "Finding 1: Ramadan = Delivery Surge" },
  "p03.f1.text": { id: "Delivery revenue Maret vs Januari. Dine-in flat. Total +24%. Predictable — prepare staffing & inventory.", en: "Delivery revenue March vs January. Dine-in flat. Total +24%. Predictable — prepare staffing & inventory." },
  "p03.f2.title": { id: "Finding 2: Aggregator Commission Varies", en: "Finding 2: Aggregator Commission Varies" },
  "p03.f2.text": { id: "Selisih 4.4% = Rp 52.8M/tahun per outlet dengan Rp 100M agg revenue.", en: "4.4% gap = Rp 52.8B/year per outlet with Rp 100B agg revenue." },
  "p03.f3.title": { id: "Finding 3: 33 Outlet Cannibalization Risk", en: "Finding 3: 33 Outlets Cannibalization Risk" },
  "p03.f3.text": { id: "33 outlet punya ≥3 outlet Pizza Hut lain dalam radius 2km. Terutama di Jakarta.", en: "33 outlets have ≥3 other Pizza Hut outlets within a 2km radius. Mainly in Jakarta." },
  "p03.f3.map": { id: "Jakarta — outlet dengan ≥3 neighbors (orange border, 2km radius)", en: "Jakarta — outlets with ≥3 neighbors (orange border, 2km radius)" },
  "p03.f4.title": { id: "Finding 4: Takeaway = Hidden Gem", en: "Finding 4: Takeaway = Hidden Gem" },
  "p03.f4.text": { id: "Share of revenue, tapi margin 2-3x aggregator. Under-promoted.", en: "Share of revenue, but margin 2-3x aggregator. Under-promoted." },
  "p03.f5.title": { id: "Finding 5: ~20% Outlet-Months Unprofitable", en: "Finding 5: ~20% Outlet-Months Unprofitable" },
  "p03.f5.text": { id: "Driven by fixed rent tinggi + revenue rendah. Outlet tua & high cannibalization area.", en: "Driven by high fixed rent + low revenue. Old outlets & high cannibalization areas." },
  "p03.sec.rekom": { id: "Rekomendasi (Quantified)", en: "Recommendations (Quantified)" },
  "p03.exec.title": { id: "Executive Summary — 1 Page untuk Board", en: "Executive Summary — 1 Page for the Board" },
  "p03.exec.1": { id: "~20% outlet-months unprofitable — driven by fixed cost + low revenue", en: "~20% outlet-months unprofitable — driven by fixed cost + low revenue" },
  "p03.exec.2": { id: "Aggregator margin 2-3x lebih tipis dari takeaway", en: "Aggregator margin 2-3x thinner than takeaway" },
  "p03.exec.3": { id: "Maret (Ramadan) = delivery surge +44% — opportunity untuk optimize", en: "March (Ramadan) = delivery surge +44% — opportunity to optimize" },
  "p03.exec.4": { id: "33 outlet cannibalization risk (≥3 neighbors / 2km)", en: "33 outlets cannibalization risk (≥3 neighbors / 2km)" },
  "p03.exec.5": { id: "Takeaway 18.4% share, margin terbaik — under-promoted", en: "Takeaway 18.4% share, best margin — under-promoted" },
  "p03.r1.title": { id: "Rekom 1: Evaluate Closure Candidates", en: "Rec 1: Evaluate Closure Candidates" },
  "p03.r1.text": { id: "Identifikasi outlet \"Dogs\" yang juga memiliki: cannibalization risk, outlet age tua, lease expiring. Bukan semua yang rugi — tapi yang rugi dan tidak ada prospek membaik.", en: "Identify \"Dogs\" outlets that also have: cannibalization risk, old outlet age, expiring lease. Not all loss-making ones — but those with losses and no prospect of improvement." },
  "p03.r2.title": { id: "Rekom 2: Shift Aggregator → Own Delivery + Takeaway", en: "Rec 2: Shift Aggregator → Own Delivery + Takeaway" },
  "p03.r2.text": { id: "Setiap 1% shift = ~Rp 15-20M margin improvement/bulan company-wide. Push promo di app PHD, takeaway deals, loyalty program.", en: "Every 1% shift = ~Rp 15-20B margin improvement/month company-wide. Push promos on PHD app, takeaway deals, loyalty program." },
  "p03.r3.title": { id: "Rekom 3: Ramadan Preparation Playbook", en: "Rec 3: Ramadan Preparation Playbook" },
  "p03.r3.text": { id: "Delivery +44% itu predictable. Pre-hire riders, pre-stock ingredients, adjust kitchen shift.", en: "Delivery +44% is predictable. Pre-hire riders, pre-stock ingredients, adjust kitchen shifts." },
  "p03.r4.title": { id: "Rekom 4: Negotiate Aggregator Commission", en: "Rec 4: Negotiate Aggregator Commission" },
  "p03.r4.text": { id: "Dengan 552 outlet, ada leverage. Atau shift volume ke platform dengan commission terendah (ShopeeFood 21.5%).", en: "With 552 outlets, there's leverage. Or shift volume to the platform with the lowest commission (ShopeeFood 21.5%)." },
  "p03.callout.framework.title": { id: "✅ Framework applicable dengan data real", en: "✅ Framework applicable with real data" },
  "p03.callout.framework.text": { id: "Scoring model, segmentasi, channel profitability — tidak bergantung pada data proxy. Dengan data internal, tinggal plug in. Hasilnya lebih tajam, approach-nya sama.", en: "Scoring model, segmentation, channel profitability — not dependent on proxy data. With internal data, just plug in. Results sharper, approach the same." },

  // ══════════════════════════════════════
  // 04_cara_kerja.html
  // ══════════════════════════════════════
  "p04.topbar": { id: "Cara Kerja (Teknis)", en: "How It Works (Technical)" },
  "p04.badge": { id: "Appendix · A1", en: "Appendix · A1" },
  "p04.hero.title": { id: "Data Pipeline & Methods", en: "Data Pipeline & Methods" },
  "p04.hero.sub": { id: "Bagian ini menjelaskan bagaimana data dikumpulkan dan diolah. Bisnis di depan, teknis di sini.", en: "This section explains how data was collected and processed. Business up front, technical here." },
  "p04.sec.pipeline": { id: "Pipeline", en: "Pipeline" },
  "p04.sec.scraping": { id: "Scraping: Google Maps", en: "Scraping: Google Maps" },
  "p04.scraping.text": { id: "99 search queries (\"Pizza Hut [kota]\" + \"PHD [kota]\"), scroll feed, extract nama + URL + koordinat. Dedup by URL. Detail per outlet: alamat, rating, kategori, jam, telepon, foto.", en: "99 search queries (\"Pizza Hut [city]\" + \"PHD [city]\"), scroll feed, extract name + URL + coordinates. Dedup by URL. Detail per outlet: address, rating, category, hours, phone, photo." },
  "p04.sec.haversine": { id: "Haversine: Jarak Antar Outlet", en: "Haversine: Distance Between Outlets" },
  "p04.sec.menu": { id: "Menu: GrabFood", en: "Menu: GrabFood" },
  "p04.menu.text": { id: "Website pizzahut.co.id = SPA dengan protected API. Setelah beberapa percobaan gagal, data didapat dari GrabFood web (functional web version). 60+ items dengan harga real.", en: "Website pizzahut.co.id = SPA with protected API. After several failed attempts, data was obtained from GrabFood web (functional web version). 60+ items with real prices." },
  "p04.sec.keuangan": { id: "Keuangan: IDX", en: "Financials: IDX" },
  "p04.keuangan.text": { id: "Quarterly revenue di-derive dari TTM data. Method: <code>single_Q(t) = single_Q(t-4) + [TTM(t) - TTM(t-1)]</code>", en: "Quarterly revenue derived from TTM data. Method: <code>single_Q(t) = single_Q(t-4) + [TTM(t) - TTM(t-1)]</code>" },
  "p04.sec.tools": { id: "Tools", en: "Tools" },
  "p04.tools.th.tool": { id: "Tool", en: "Tool" },
  "p04.tools.th.untuk": { id: "Untuk", en: "For" },
  "p04.tools.scraping": { id: "Scraping (headless Playwright)", en: "Scraping (headless Playwright)" },
  "p04.tools.chart": { id: "Visualisasi chart", en: "Chart visualization" },
  "p04.tools.leaflet": { id: "Peta interaktif", en: "Interactive maps" },
  "p04.tools.html": { id: "Dokumentasi & report", en: "Documentation & reports" },
  "p04.callout.title": { id: "Reproducible", en: "Reproducible" },
  "p04.callout.text": { id: "Semua code di folder <code>scripts/</code>. Run 4 scripts berurutan = full pipeline dari scraping sampai data generation.", en: "All code in the <code>scripts/</code> folder. Run 4 scripts sequentially = full pipeline from scraping to data generation." },

  // ══════════════════════════════════════
  // 05_report_data.html
  // ══════════════════════════════════════
  "p05.topbar": { id: "Q1 2026 Performance Report", en: "Q1 2026 Performance Report" },
  "p05.badge": { id: "Report · 04", en: "Report · 04" },
  "p05.hero.title": { id: "Pizza Hut Indonesia — Q1 2026 Overview", en: "Pizza Hut Indonesia — Q1 2026 Overview" },
  "p05.hero.sub": { id: "552 outlet · 4 channel · Anchored ke laporan keuangan PZZA (IDX)", en: "552 outlets · 4 channels · Anchored to PZZA financial reports (IDX)" },
  "p05.kpi.revenue": { id: "Total Revenue Q1", en: "Total Revenue Q1" },
  "p05.kpi.profitable": { id: "Profitable", en: "Profitable" },
  "p05.kpi.profitable.sub": { id: "22% unprofitable", en: "22% unprofitable" },
  "p05.kpi.growth.sub": { id: "Ramadan", en: "Ramadan" },
  "p05.kpi.cannibal": { id: "Cannibal Risk", en: "Cannibal Risk" },
  "p05.sec.revenue": { id: "Revenue Trend", en: "Revenue Trend" },
  "p05.chart.monthly": { id: "Monthly Revenue by Channel (Miliar IDR)", en: "Monthly Revenue by Channel (Billion IDR)" },
  "p05.insight.monthly": { id: "Maret (Ramadan): delivery +44%, dine-in flat, total +24%.", en: "March (Ramadan): delivery +44%, dine-in flat, total +24%." },
  "p05.sec.channel": { id: "Channel Analysis", en: "Channel Analysis" },
  "p05.chart.share": { id: "Revenue Share", en: "Revenue Share" },
  "p05.chart.margin": { id: "Estimated Net Margin", en: "Estimated Net Margin" },
  "p05.insight.margin": { id: "Takeaway margin 2-3x aggregator.", en: "Takeaway margin 2-3x aggregator." },
  "p05.sec.agg": { id: "Aggregator Commission", en: "Aggregator Commission" },
  "p05.chart.agg": { id: "Commission Rate by Platform", en: "Commission Rate by Platform" },
  "p05.chart.impact": { id: "Impact Analysis", en: "Impact Analysis" },
  "p05.insight.agg": { id: "4.4% gap = Rp 52.8M/tahun per outlet.", en: "4.4% gap = Rp 52.8B/year per outlet." },
  "p05.sec.region": { id: "Regional Performance", en: "Regional Performance" },
  "p05.chart.region": { id: "Revenue by Region", en: "Revenue by Region" },
  "p05.chart.profit": { id: "Profitability Rate", en: "Profitability Rate" },
  "p05.insight.region": { id: "Jawa Timur (88%) paling profitable. Jabodetabek (77%) bukan tertinggi meski revenue terbesar.", en: "East Java (88%) most profitable. Jabodetabek (77%) not the highest despite largest revenue." },
  "p05.sec.type": { id: "Dine-in vs PHD", en: "Dine-in vs PHD" },
  "p05.chart.type": { id: "Revenue & Margin", en: "Revenue & Margin" },
  "p05.insight.type": { id: "Dine-in: Rp 506M avg, 21.6% margin. PHD: Rp 382M, 18.5% — tertekan aggregator commission.", en: "Dine-in: Rp 506M avg, 21.6% margin. PHD: Rp 382M, 18.5% — pressured by aggregator commission." },
  "p05.disclaimer": { id: "⚠️ Revenue per outlet = estimasi. Pattern applicable dengan data internal.", en: "⚠️ Revenue per outlet = estimated. Patterns applicable with internal data." },

  // ══════════════════════════════════════
  // 06_deep_dive.html
  // ══════════════════════════════════════
  "p06.topbar": { id: "Deep Dive: Outlet Segmentation & Patterns", en: "Deep Dive: Outlet Segmentation & Patterns" },
  "p06.badge": { id: "Report · 05", en: "Report · 05" },
  "p06.hero.title": { id: "Scatter Plot 552 Outlet + Pattern Analysis", en: "Scatter Plot of 552 Outlets + Pattern Analysis" },
  "p06.hero.sub": { id: "Segmentasi BCG, outlet age, mall vs standalone, revenue distribution, promo impact", en: "BCG segmentation, outlet age, mall vs standalone, revenue distribution, promo impact" },
  "p06.sec.seg": { id: "Outlet Segmentation (BCG-Style)", en: "Outlet Segmentation (BCG-Style)" },
  "p06.seg.intro": { id: "Median revenue = Rp 431M/bulan, median margin = 20.6%.", en: "Median revenue = Rp 431M/month, median margin = 20.6%." },
  "p06.chart.scatter": { id: "Revenue vs Margin — 552 Outlets", en: "Revenue vs Margin — 552 Outlets" },
  "p06.insight.scatter": { id: "244 \"Dogs\" (kiri bawah) = closure candidates. Tapi perlu per-outlet evaluation: trend, lease, area growth.", en: "244 \"Dogs\" (bottom left) = closure candidates. But need per-outlet evaluation: trend, lease, area growth." },
  "p06.sec.patterns": { id: "Patterns", en: "Patterns" },
  "p06.chart.age": { id: "Outlet Age vs Avg Margin", en: "Outlet Age vs Avg Margin" },
  "p06.insight.age": { id: "16+ tahun = margin 7.9%. Butuh renovasi atau re-evaluation.", en: "16+ years = margin 7.9%. Needs renovation or re-evaluation." },
  "p06.chart.mall": { id: "Mall vs Standalone", en: "Mall vs Standalone" },
  "p06.insight.mall": { id: "Mall revenue +25% tapi margin hampir sama. Rent \"makan\" premium.", en: "Mall revenue +25% but margin nearly the same. Rent \"eats\" the premium." },
  "p06.chart.hist": { id: "Revenue Distribution (Outlet Count)", en: "Revenue Distribution (Outlet Count)" },
  "p06.chart.promo": { id: "Promo Impact (Maret 2026)", en: "Promo Impact (March 2026)" },
  "p06.insight.promo": { id: "30% orders pakai promo, discount 20%, tapi ticket size sama. Promo potong margin tanpa drive larger orders.", en: "30% orders use promo, 20% discount, but ticket size unchanged. Promo cuts margin without driving larger orders." },
  "p06.disclaimer": { id: "⚠️ Semua angka estimasi. Segmentasi dan pattern applicable dengan data real — threshold mungkin bergeser, framework sama.", en: "⚠️ All figures are estimates. Segmentation and patterns applicable with real data — thresholds may shift, framework stays the same." },
  "p06.narrative": { id: "Deep dive ini melampaui overview Q1 — mensegmentasi seluruh <strong>552 outlet berdasarkan revenue dan margin</strong> untuk mengidentifikasi outlet mana yang layak diinvestasikan, mana yang perlu diperbaiki, dan mana yang harus ditutup.", en: "This deep dive goes beyond the Q1 overview — segmenting all <strong>552 outlets by revenue and margin</strong> to identify which outlets to invest in, which to fix, and which to close." },
  "p06.q1.label": { id: "PORTFOLIO STRATEGY — VP OPERATIONS", en: "PORTFOLIO STRATEGY — VP OPERATIONS" },
  "p06.q1.title": { id: "Outlet mana yang harus diinvestasikan, diperbaiki, atau ditutup?", en: "Which outlets should be invested in, fixed, or closed?" },
  "p06.q1.context": { id: "Framework BCG membagi 552 outlet ke 4 kuadran berdasarkan median revenue (Rp 431M) dan median margin (20.6%). Scatter plot di bawah memvisualisasikan setiap outlet — posisi menentukan strategi: invest (Stars), maintain (Cash Cows), fix (Question Marks), atau evaluate for closure (Dogs).", en: "The BCG framework segments 552 outlets into 4 quadrants based on median revenue (Rp 431M) and median margin (20.6%). The scatter plot below visualizes every outlet — position determines strategy: invest (Stars), maintain (Cash Cows), fix (Question Marks), or evaluate for closure (Dogs)." },
  "p06.bcg.insight": { id: "245 Stars (44%) menunjukkan inti bisnis masih sehat. Tapi 244 Dogs (44%) — hampir setara jumlahnya — menjadi beban margin. Prioritas: audit 244 Dogs per-outlet, identifikasi mana yang bisa di-turnaround (lokasi strategis, lease baru) vs mana yang harus ditutup. 31 Question Marks punya revenue tinggi tapi margin rendah — kemungkinan besar outlet mall dengan sewa mahal.", en: "245 Stars (44%) show the core business is healthy. But 244 Dogs (44%) — nearly equal in count — are dragging down margins. Priority: audit 244 Dogs per-outlet, identify which can be turned around (strategic location, new lease) vs which should close. 31 Question Marks have high revenue but low margin — likely mall outlets with expensive rent." },
  "p06.q2.label": { id: "OPERATIONAL PATTERNS", en: "OPERATIONAL PATTERNS" },
  "p06.q2.title": { id: "Faktor apa yang mempengaruhi performa outlet?", en: "What factors drive outlet performance?" },
  "p06.q2.context": { id: "Setelah mengetahui distribusi outlet di 4 kuadran, pertanyaan berikutnya: <strong>apa yang membedakan outlet profitable dari yang tidak?</strong> Empat chart di bawah mengeksplorasi faktor usia outlet, lokasi (mall vs standalone), distribusi revenue, dan dampak promo terhadap margin.", en: "After seeing the outlet distribution across 4 quadrants, the next question: <strong>what separates profitable outlets from unprofitable ones?</strong> The four charts below explore outlet age, location (mall vs standalone), revenue distribution, and promo impact on margins." },
  "p06.patterns.insight": { id: "Tiga pola kunci: (1) Outlet 16+ tahun margin hanya 7.9% — renovasi atau tutup. (2) Mall revenue +25% tapi margin hampir sama dengan standalone karena sewa tinggi — ekspansi baru harus prioritaskan standalone. (3) Promo 30% orders tapi tidak menaikkan ticket size — promo menggerus margin tanpa mendorong upsell. VP Operations harus mengevaluasi ulang strategi promo dan alokasi capex renovasi.", en: "Three key patterns: (1) Outlets 16+ years old have only 7.9% margin — renovate or close. (2) Mall revenue is +25% but margin is nearly the same as standalone due to high rent — new expansion should prioritize standalone. (3) Promos account for 30% of orders but don't increase ticket size — promos erode margin without driving upsell. VP Operations should reassess promo strategy and renovation capex allocation." },

  // ══════════════════════════════════════
  // 07_job_posting.html
  // ══════════════════════════════════════
  "p07.topbar": { id: "Perihal Loker", en: "About the Job" },
  "p07.badge": { id: "Appendix · A2", en: "Appendix · A2" },
  "p07.hero.title": { id: "Job Posting: Senior Data Analytics — Pizza Hut Indonesia", en: "Job Posting: Senior Data Analytics — Pizza Hut Indonesia" },
  "p07.hero.sub": { id: "Breakdown lengkap dari lowongan kerja yang dilamar, dan bagaimana portfolio ini menjawab setiap responsibility yang diminta.", en: "Complete breakdown of the job posting applied for, and how this portfolio addresses every responsibility listed." },
  "p07.sec.posisi": { id: "Posisi", en: "Position" },
  "p07.posisi.perusahaan": { id: "Perusahaan", en: "Company" },
  "p07.posisi.saham": { id: "Kode Saham", en: "Ticker" },
  "p07.posisi.lokasi": { id: "Lokasi", en: "Location" },
  "p07.posisi.level.desc": { id: "Senior — influence strategic decisions, communicate ke C-level", en: "Senior — influence strategic decisions, communicate to C-level" },
  "p07.sec.resp": { id: "12 Responsibilities & Yang Dikerjakan", en: "12 Responsibilities & What Was Done" },
  "p07.resp.intro": { id: "Setiap responsibility dari job posting di-mapping ke bagian portfolio yang relevan, untuk memastikan semua aspek yang diminta ter-cover.", en: "Each responsibility from the job posting is mapped to the relevant portfolio section, ensuring all requested aspects are covered." },
  "p07.r1.done": { id: "merge 4 data sources — Google Maps, IDX, GrabFood, generated", en: "merge 4 data sources — Google Maps, IDX, GrabFood, generated" },
  "p07.r2.done": { id: "handle anomali, missing values, duplicates", en: "handle anomalies, missing values, duplicates" },
  "p07.r3.done": { id: "anomaly detection, consistency check antar source", en: "anomaly detection, consistency check across sources" },
  "p07.r4.done": { id: "outlet segmentation, channel patterns, Ramadan surge", en: "outlet segmentation, channel patterns, Ramadan surge" },
  "p07.r5.done": { id: "multi-factor scoring model untuk 552 outlet", en: "multi-factor scoring model for 552 outlets" },
  "p07.r6.done": { id: "BCG segmentation — Stars, Cash Cows, Question Marks, Dogs", en: "BCG segmentation — Stars, Cash Cows, Question Marks, Dogs" },
  "p07.r7.done": { id: "interactive charts, peta outlet, scatter plot", en: "interactive charts, outlet map, scatter plot" },
  "p07.r8.done": { id: "4 rekomendasi quantified untuk board", en: "4 quantified recommendations for the board" },
  "p07.r9.done": { id: "data pipeline yang reproducible", en: "reproducible data pipeline" },
  "p07.r10.done": { id: "unified outlet profile dari multiple sources", en: "unified outlet profile from multiple sources" },
  "p07.r11.done": { id: "reusable scraping & scoring framework", en: "reusable scraping & scoring framework" },
  "p07.r12.done": { id: "executive summary + full report", en: "executive summary + full report" },
  "p07.sec.pilar": { id: "4 Pilar Kompetensi", en: "4 Competency Pillars" },
  "p07.pilar.intro": { id: "Dari 12 responsibilities di atas, dapat dikelompokkan ke 4 pilar utama — dan semuanya ter-cover di portfolio ini:", en: "The 12 responsibilities above can be grouped into 4 main pillars — all covered in this portfolio:" },
  "p07.sec.level": { id: "Senior vs Junior vs Mid", en: "Senior vs Junior vs Mid" },
  "p07.level.intro": { id: "Posisi ini mensyaratkan level Senior — perbedaannya terletak pada pendekatan analisis.", en: "This position requires Senior level — the difference lies in the analytical approach." },
  "p07.level.th.scope": { id: "Scope", en: "Scope" },
  "p07.level.th.output": { id: "Output", en: "Output" },
  "p07.level.junior.scope": { id: "Membuat report, clean data, basic visualization", en: "Create reports, clean data, basic visualization" },
  "p07.level.junior.output": { id: "\"Outlet X revenue-nya turun\"", en: "\"Outlet X revenue is declining\"" },
  "p07.level.mid.scope": { id: "Identify patterns, build dashboards, present insights", en: "Identify patterns, build dashboards, present insights" },
  "p07.level.mid.output": { id: "\"20% outlet unprofitable, mostly di area X\"", en: "\"20% outlets unprofitable, mostly in area X\"" },
  "p07.level.senior.scope": { id: "Frame business problems, design analytical framework, influence strategic decisions, communicate ke C-level", en: "Frame business problems, design analytical framework, influence strategic decisions, communicate to C-level" },
  "p07.level.senior.output": { id: "\"Tutup 15 outlet Dogs → save Rp 2.8M/bulan. Shift 5% aggregator ke takeaway → margin +Rp 15M/bulan. Here's the scoring model.\"", en: "\"Close 15 Dogs outlets → save Rp 2.8B/month. Shift 5% aggregator to takeaway → margin +Rp 15B/month. Here's the scoring model.\"" },
  "p07.callout.teknis.title": { id: "⚠️ Lebih dari Teknis", en: "⚠️ More Than Technical" },
  "p07.callout.teknis.text": { id: "Posisi ini menuntut framework berpikir yang logis, rekomendasi yang quantified dan actionable, serta kemampuan komunikasi yang efektif ke board. Portfolio ini mencakup framework segmentasi yang dirancang dari awal, bukan sekadar pivot table.", en: "This position demands a logical thinking framework, quantified and actionable recommendations, and effective communication skills to the board. This portfolio includes a segmentation framework designed from scratch, not just pivot tables." },
  "p07.sec.why": { id: "Mengapa Pizza Hut", en: "Why Pizza Hut" },
  "p07.why.intro": { id: "Pizza Hut dipilih karena semua data dapat di-verify — ini perusahaan publik:", en: "Pizza Hut was chosen because all data can be verified — it's a public company:" },
  "p07.why.1": { id: "Data outlet <strong>real dari Google Maps</strong> — 552 lokasi yang bisa di-verify", en: "Outlet data <strong>real from Google Maps</strong> — 552 verifiable locations" },
  "p07.why.2": { id: "Data keuangan <strong>real dari IDX</strong> — revenue, cost structure, margin dari laporan publik PZZA", en: "Financial data <strong>real from IDX</strong> — revenue, cost structure, margin from PZZA public reports" },
  "p07.why.3": { id: "Masalah bisnis <strong>real</strong> — 3 tahun rugi berturut-turut, 17 outlet ditutup di 2024", en: "Business problems <strong>are real</strong> — 3 consecutive years of losses, 17 outlets closed in 2024" },
  "p07.why.4": { id: "Pertanyaan yang dijawab <strong>persis seperti yang akan ditanyakan VP Operations dan CFO</strong>", en: "Questions answered <strong>exactly as VP Operations and CFO would ask</strong>" },
  "p07.callout.approach.title": { id: "✅ Approach", en: "✅ Approach" },
  "p07.callout.approach.text": { id: "Memahami bisnis (halaman 01) → Merumuskan pertanyaan (halaman 02) → Menganalisis dan menemukan insight (halaman 03) → Mempresentasikan ke board dengan rekomendasi yang quantified.", en: "Understand the business (page 01) → Formulate questions (page 02) → Analyze and discover insights (page 03) → Present to the board with quantified recommendations." },

  // ══ report.html (p05) ══
  "p05.narrative": { id: "Pizza Hut Indonesia mengoperasikan <strong>552 outlet di 8 region</strong> dengan 4 channel penjualan — dine-in, delivery (PHD), aggregator, dan takeaway. Laporan ini menjawab <strong>3 pertanyaan strategis</strong> yang dibutuhkan leadership untuk mengevaluasi performa Q1 2026: bagaimana performa channel, region mana yang tertinggal, dan apakah komisi aggregator menggerus margin.", en: "Pizza Hut Indonesia operates <strong>552 outlets across 8 regions</strong> with 4 sales channels — dine-in, delivery (PHD), aggregator, and takeaway. This report answers the <strong>3 strategic questions</strong> that leadership needs to evaluate Q1 2026 performance: how channels are performing, which regions lag behind, and whether aggregator commissions are eroding margins." },
  "p05.q1.label": { id: "Q1 — VP SALES", en: "Q1 — VP SALES" },
  "p05.q1.title": { id: "Bagaimana performa outlet di setiap channel?", en: "How are outlets performing across channels?" },
  "p05.q1.context": { id: "Dengan 4 channel penjualan aktif, VP Sales perlu tahu channel mana yang mendorong pertumbuhan — terutama saat Ramadan. Bar chart di bawah menunjukkan revenue bulanan per channel, sementara pie chart menunjukkan share masing-masing channel dari total Rp 744M Q1.", en: "With 4 active sales channels, the VP Sales needs to know which channels drive growth — especially during Ramadan. The stacked bar below shows monthly revenue by channel, while the pie reveals each channel's share of the Rp 744M Q1 total." },
  "p05.q1.insight": { id: "Ramadan mendorong lonjakan revenue +24% di Maret — tapi hampir seluruhnya dari delivery (+44%) dan aggregator (+37%). Dine-in stagnan. Takeaway punya margin tertinggi (15%) di 2-3× margin aggregator, tapi hanya menyumbang 18% revenue. VP Sales harus mengeksplorasi pengalihan volume aggregator ke takeaway via promosi in-app.", en: "Ramadan drove a +24% revenue spike in March — but almost entirely from delivery (+44%) and aggregator (+37%). Dine-in stayed flat. Takeaway has the highest margin (15%) at 2-3× aggregator margin, yet only contributes 18% of revenue. The VP Sales should explore shifting aggregator volume to takeaway via in-app promotions." },
  "p05.q2.label": { id: "Q2 — REGIONAL MANAGERS", en: "Q2 — REGIONAL MANAGERS" },
  "p05.q2.title": { id: "Region mana yang underperform?", en: "Which regions are underperforming?" },
  "p05.q2.context": { id: "Jabodetabek menghasilkan 40% total revenue — tapi ukuran revenue bukan berarti efisiensi. Regional Managers perlu melihat <strong>tingkat profitabilitas</strong> bersamaan dengan revenue untuk mengidentifikasi di mana biaya operasional menggerus margin.", en: "Jabodetabek generates 40% of total revenue — but revenue size doesn't equal efficiency. Regional Managers need to see <strong>profitability rate</strong> alongside revenue to identify where operational costs are eating into margins." },
  "p05.q2.insight": { id: "Jawa Timur memimpin profitabilitas di 88% meski peringkat 4 dalam revenue — operasi lean dan sewa lebih rendah mendorong ini. Jabodetabek (77%) dan Sulawesi (73%) paling lemah meski punya banyak outlet. Regional Managers di area ini harus mengaudit 22-27% outlet yang tidak profitable untuk penutupan atau konversi format.", en: "Jawa Timur leads profitability at 88% despite being 4th in revenue — lean operations and lower rent drive this. Jabodetabek (77%) and Sulawesi (73%) are the weakest despite high outlet counts. Regional Managers in these areas should audit the 22-27% unprofitable outlets for closure or format conversion." },
  "p05.q3.label": { id: "Q3 — CFO", en: "Q3 — CFO" },
  "p05.q3.title": { id: "Apa dampak komisi aggregator?", en: "What's the aggregator commission impact?" },
  "p05.q3.context": { id: "Channel aggregator (GrabFood, GoFood, ShopeeFood) mengenakan <strong>komisi 21-26%</strong> per pesanan. Bagi CFO, pertanyaannya bukan apakah harus pakai aggregator — tapi berapa banyak margin yang hilang dan apakah renegosiasi atau pengalihan channel bisa memulihkannya.", en: "Aggregator channels (GrabFood, GoFood, ShopeeFood) charge <strong>21-26% commission</strong> per order. For the CFO, the question isn't whether to use aggregators — it's how much margin they're costing and whether renegotiation or channel shifting can recover it." },
  "p05.q3.insight": { id: "Gap 4.4% antara ShopeeFood (21.5%) dan GrabFood (25.9%) setara Rp 52.8M/tahun per outlet. Di 265 outlet PHD, mengalihkan 10% volume GrabFood ke ShopeeFood menghemat est. Rp 1.4M/tahun. CFO harus memprioritaskan renegosiasi tarif GrabFood atau menginsentifkan pesanan ShopeeFood.", en: "The 4.4% gap between ShopeeFood (21.5%) and GrabFood (25.9%) translates to Rp 52.8M/year per outlet. Across 265 PHD outlets, shifting just 10% of GrabFood volume to ShopeeFood saves est. Rp 1.4B/year. The CFO should prioritize renegotiating GrabFood rates or incentivizing ShopeeFood orders." },
  "p05.type.label": { id: "PERBANDINGAN FORMAT", en: "FORMAT COMPARISON" },
  "p05.type.title": { id: "Dine-in vs PHD: Gap Revenue & Margin", en: "Dine-in vs PHD: Revenue & Margin Gap" },
  "p05.type.context": { id: "Pizza Hut mengoperasikan dua format outlet — 287 restoran dine-in dan 265 toko PHD (Pizza Hut Delivery). Memahami gap revenue dan margin antar format membantu leadership memutuskan <strong>di mana investasi selanjutnya</strong>.", en: "Pizza Hut operates two outlet formats — 287 dine-in restaurants and 265 PHD (Pizza Hut Delivery) stores. Understanding the revenue and margin gap between formats helps leadership decide <strong>where to invest next</strong>." },
  "p05.type.insight": { id: "Outlet dine-in rata-rata Rp 506M revenue dengan margin 21.6%. PHD rata-rata Rp 382M di 18.5% — gap margin 3.1pp didorong oleh komisi aggregator yang menggerus profitabilitas PHD. Outlet PHD baru harus memprioritaskan channel own-delivery dan takeaway untuk melindungi margin.", en: "Dine-in outlets average Rp 506M revenue with 21.6% margin. PHD averages Rp 382M at 18.5% — the 3.1pp margin gap is driven by aggregator commissions eating into PHD profitability. New PHD outlets should prioritize own-delivery and takeaway channels to protect margins." },
};

// ── Engine ──
(function () {
  const STORAGE_KEY = "pizzahut-lang";
  let currentLang = localStorage.getItem(STORAGE_KEY) || "id";

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const t = translations[key];
      if (t && t[lang] !== undefined) {
        el.innerHTML = t[lang];
      }
    });

    // Update toggle button text
    const btn = document.getElementById("langToggle");
    if (btn) {
      btn.textContent = lang === "id" ? "EN" : "ID";
      btn.title = lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia";
    }
  }

  function createToggle() {
    // Insert toggle into topbar
    const topbar = document.querySelector(".topbar");
    if (!topbar) return;

    const btn = document.createElement("button");
    btn.id = "langToggle";
    btn.className = "lang-toggle";
    btn.addEventListener("click", () => {
      applyLang(currentLang === "id" ? "en" : "id");
    });
    topbar.appendChild(btn);
  }

  // Init on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => { createToggle(); applyLang(currentLang); });
  } else {
    createToggle();
    applyLang(currentLang);
  }
})();
