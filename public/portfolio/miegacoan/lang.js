/**
 * Language Switcher — ID ↔ EN (Mie Gacoan Portfolio)
 */
const translations = {
  // ── Sidebar ──
  "sidebar.portfolio": { id: "Portfolio", en: "Portfolio" },
  "sidebar.index": { id: "Index", en: "Index" },
  "sidebar.context": { id: "Konteks Bisnis", en: "Business Context" },
  "sidebar.questions": { id: "Pertanyaan Bisnis", en: "Business Questions" },
  "sidebar.findings": { id: "Temuan & Rekom", en: "Findings & Recs" },
  "sidebar.reports": { id: "Reports", en: "Reports" },
  "sidebar.report": { id: "Laporan Data", en: "Data Report" },
  "sidebar.appendix": { id: "Appendix", en: "Appendix" },
  "sidebar.methodology": { id: "Metodologi", en: "Methodology" },

  // ══ overview.html ══
  "idx.topbar": { id: "Portfolio", en: "Portfolio" },
  "idx.badge": { id: "Portfolio", en: "Portfolio" },
  "idx.hero.title": { id: "Mie Gacoan — Analitik Kepatuhan Hukum", en: "Mie Gacoan — Legal Compliance Analytics" },
  "idx.hero.sub": { id: "Legal Data Analyst — Jaringan QSR Mie · 557 Outlet · 34 Provinsi", en: "Legal Data Analyst — QSR Noodle Chain · 557 Outlets · 34 Provinces" },
  "idx.tag1": { id: "557 Outlet dari Google Maps", en: "557 Outlets from Google Maps" },
  "idx.tag2": { id: "Kepatuhan Hukum", en: "Legal Compliance" },
  "idx.tag3": { id: "34 Provinsi", en: "34 Provinces" },
  "idx.tag4": { id: "Pelacakan Sewa & Izin", en: "Lease & Permit Tracking" },
  "idx.sec.portfolio": { id: "Portfolio", en: "Portfolio" },
  "idx.sec.reports": { id: "Reports", en: "Reports" },
  "idx.card1.title": { id: "Konteks Bisnis", en: "Business Context" },
  "idx.card1.desc": { id: "Profil Mie Gacoan, 557 outlet, ekspansi cepat, kebutuhan kepatuhan hukum untuk jaringan QSR", en: "Mie Gacoan company profile, 557 outlets, rapid expansion, legal compliance needs for QSR chains" },
  "idx.card2.title": { id: "Pertanyaan Bisnis", en: "Business Questions" },
  "idx.card2.desc": { id: "3 pertanyaan strategis untuk posisi Legal Data Analyst, framework analisis kepatuhan", en: "3 strategic questions for Legal Data Analyst role, compliance analysis framework" },
  "idx.card3.title": { id: "Temuan & Rekomendasi", en: "Findings & Recommendations" },
  "idx.card3.desc": { id: "Risiko sewa habis, masalah IMB, hotspot sengketa, 4 rekomendasi actionable", en: "Lease expiry risks, IMB issues, dispute hotspots, 4 actionable recommendations" },
  "idx.card4.title": { id: "Laporan Data", en: "Data Report" },
  "idx.card4.desc": { id: "Outlet per provinsi, status IMB, timeline sewa, level sengketa dengan chart", en: "Outlets by province, IMB status, lease timeline, dispute levels with charts" },
  "idx.cardA1.title": { id: "Metodologi", en: "Methodology" },
  "idx.cardA1.desc": { id: "Pipeline data: scraping Google Maps, generasi data hukum, cleaning & tools", en: "Data pipeline: Google Maps scraping, legal data generation, cleaning & tools" },

  // ══ business-context.html ══
  "p01.topbar": { id: "Memahami Mie Gacoan", en: "Understanding Mie Gacoan" },
  "p01.badge": { id: "Portfolio · 01", en: "Portfolio · 01" },
  "p01.hero.title": { id: "Mie Gacoan — Jaringan QSR Mie Tercepat Berkembang di Indonesia", en: "Mie Gacoan — Indonesia's Fastest-Growing QSR Noodle Chain" },
  "p01.hero.sub": { id: "Sebelum menganalisis data kepatuhan hukum, pahami dulu bisnisnya — siapa mereka, seberapa cepat ekspansinya, dan kenapa pengawasan hukum penting di skala ini.", en: "Before analyzing legal compliance data, understand the business first — who they are, how fast they're expanding, and why legal oversight matters at this scale." },
  "p01.intro": { id: "Mie Gacoan adalah jaringan restoran cepat saji (QSR) Indonesia yang mengkhususkan diri pada mie pedas dan dimsum. Dengan 557 outlet di 34 provinsi, ekspansi cepat mereka menciptakan tantangan kepatuhan hukum yang signifikan — dari izin bangunan hingga manajemen sewa hingga sertifikasi halal.", en: "Mie Gacoan is an Indonesian Quick Service Restaurant (QSR) chain specializing in spicy noodles and dimsum. With 557 outlets across 34 provinces, their rapid expansion creates significant legal compliance challenges — from building permits to lease management to halal certification." },
  "p01.sec.profile": { id: "Profil Perusahaan", en: "Company Profile" },
  "p01.kpi.outlets": { id: "Outlet", en: "Outlets" },
  "p01.kpi.outlets.sub": { id: "Discrape dari Google Maps", en: "Scraped from Google Maps" },
  "p01.kpi.provinces": { id: "Provinsi", en: "Provinces" },
  "p01.kpi.provinces.sub": { id: "Cakupan nasional", en: "Nationwide coverage" },
  "p01.kpi.expiring": { id: "Sewa Habis", en: "Expiring Leases" },
  "p01.kpi.expiring.sub": { id: "Dalam 90 hari", en: "Within 90 days" },
  "p01.kpi.imb": { id: "Masalah IMB", en: "IMB Issues" },
  "p01.kpi.imb.sub": { id: "Izin bermasalah", en: "Problematic permits" },
  "p01.kpi.rent": { id: "Sewa Tahunan", en: "Annual Rent" },
  "p01.kpi.rent.sub": { id: "Rentang per outlet", en: "Per outlet range" },
  "p01.sec.compliance": { id: "Area Kepatuhan Hukum", en: "Legal Compliance Areas" },
  "p01.th.area": { id: "Area", en: "Area" },
  "p01.th.desc": { id: "Deskripsi", en: "Description" },
  "p01.th.risk": { id: "Level Risiko", en: "Risk Level" },
  "p01.area.imb": { id: "Izin Mendirikan Bangunan (IMB) — wajib untuk setiap lokasi outlet", en: "Building permits (Izin Mendirikan Bangunan) — required for every outlet location" },
  "p01.area.imb.risk": { id: "Tinggi — bisa paksa tutup", en: "High — can force closure" },
  "p01.area.lease": { id: "Perjanjian sewa dengan pemilik properti — pelacakan masa berlaku dan negosiasi perpanjangan", en: "Rental agreements with property owners — expiry tracking and renewal negotiation" },
  "p01.area.lease.risk": { id: "Tinggi — kelangsungan bisnis", en: "High — business continuity" },
  "p01.area.halal": { id: "Sertifikasi halal BPJPH — wajib untuk bisnis F&B di Indonesia", en: "BPJPH halal certification — mandatory for F&B businesses in Indonesia" },
  "p01.area.halal.risk": { id: "Sedang — kepatuhan regulasi", en: "Medium — regulatory compliance" },
  "p01.area.dispute": { id: "Sengketa hukum dengan pemilik, tetangga, atau otoritas lokal", en: "Legal disputes with landlords, neighbors, or local authorities" },
  "p01.area.dispute.risk": { id: "Bervariasi — tergantung tingkat keparahan", en: "Variable — depends on severity" },
  "p01.sec.why": { id: "Kenapa Kepatuhan Hukum Penting untuk Jaringan F&B", en: "Why Legal Compliance Matters for F&B Chains" },
  "p01.why.intro": { id: "Untuk jaringan QSR yang berekspansi secepat Mie Gacoan, kepatuhan hukum bukan sekadar urusan administrasi — ini fungsi kritis bisnis yang langsung berdampak pada operasi:", en: "For a QSR chain expanding at Mie Gacoan's pace, legal compliance isn't just paperwork — it's a business-critical function that directly impacts operations:" },
  "p01.why.1": { id: "<strong>Kelangsungan operasional</strong> — sewa habis atau izin dicabut bisa memaksa outlet tutup dalam semalam", en: "<strong>Operational continuity</strong> — expired leases or revoked permits can force outlet closures overnight" },
  "p01.why.2": { id: "<strong>Eksposur finansial</strong> — sewa di 557 outlet berkisar Rp 150-800 juta per outlet per tahun, totalnya miliaran dalam kewajiban sewa", en: "<strong>Financial exposure</strong> — rent across 557 outlets represents Rp 150-800M per outlet annually, totaling billions in lease obligations" },
  "p01.why.3": { id: "<strong>Risiko regulasi</strong> — UU JPH Indonesia mewajibkan kepatuhan sertifikasi halal untuk semua bisnis F&B", en: "<strong>Regulatory risk</strong> — Indonesia's halal certification law (UU JPH) mandates compliance for all F&B businesses" },
  "p01.why.4": { id: "<strong>Reputasi</strong> — sengketa hukum atau pelanggaran izin di lokasi strategis merusak kepercayaan brand", en: "<strong>Reputation</strong> — legal disputes or permit violations in high-visibility locations damage brand trust" },
  "p01.callout.source.title": { id: "📊 Sumber Data", en: "📊 Data Source" },
  "p01.callout.source.text": { id: "Lokasi outlet discrape dari Google Maps menggunakan Playwright dan StealthyFetcher — 557 lokasi terverifikasi di 34 provinsi. Data kepatuhan hukum (status IMB, tanggal sewa, sertifikasi halal, level sengketa, sewa) di-generate berdasarkan pola distribusi realistis.", en: "Outlet locations scraped from Google Maps using Playwright and StealthyFetcher — 557 verified locations across 34 provinces. Legal compliance data (IMB status, lease dates, halal certification, dispute levels, rent) generated based on realistic distribution patterns." },
  "p01.sec.expansion": { id: "Jejak Ekspansi", en: "Expansion Footprint" },
  "p01.th.region": { id: "Region", en: "Region" },
  "p01.th.outlets": { id: "Outlet", en: "Outlets" },
  "p01.th.notes": { id: "Catatan", en: "Notes" },
  "p01.region.jatim": { id: "Region kantor pusat, kepadatan tertinggi", en: "Headquarters region, highest density" },
  "p01.region.jabar": { id: "Pasar terbesar kedua, area metro Bandung", en: "Second largest market, Bandung metro area" },
  "p01.region.jakarta": { id: "Ibu kota, lokasi sewa premium", en: "Capital city, premium rent locations" },
  "p01.region.jateng": { id: "Semarang dan kota sekitarnya", en: "Semarang and surrounding cities" },
  "p01.region.other": { id: "Ekspansi ke Sumatera, Kalimantan, Sulawesi, Bali", en: "Expanding to Sumatera, Kalimantan, Sulawesi, Bali" },
  "p01.callout.why.title": { id: "✅ Kenapa Case Study Ini Penting", en: "✅ Why This Case Study Matters" },
  "p01.callout.why.text": { id: "Sebagai Legal Data Analyst, tugas pertama adalah memahami skala kewajiban kepatuhan. 557 outlet berarti 557 sewa, 557 izin bangunan, 557 sertifikat halal yang harus dilacak. Halaman ini menyiapkan panggung — perusahaan, area kepatuhan, risikonya. Analisis selanjutnya dibangun di atas fondasi ini.", en: "As a Legal Data Analyst, the first job is understanding the scale of compliance obligations. 557 outlets means 557 leases, 557 building permits, 557 halal certificates to track. This page sets the stage — the company, the compliance areas, the risk. The analysis that follows is built on this foundation." },

  // ══ business-questions.html ══
  "p02.topbar": { id: "Pertanyaan Bisnis", en: "Business Questions" },
  "p02.badge": { id: "Portfolio · 02", en: "Portfolio · 02" },
  "p02.hero.title": { id: "Pertanyaan Strategis & Framework Kepatuhan", en: "Strategic Questions & Compliance Framework" },
  "p02.hero.sub": { id: "Sebelum menyelam ke data, tentukan pertanyaan apa yang paling penting — dan untuk siapa.", en: "Before diving into data, define what questions matter most — and for whom." },
  "p02.intro": { id: "Sebagai Legal Data Analyst di Mie Gacoan, tugasnya bukan cuma melacak izin — tapi menjawab pertanyaan yang melindungi bisnis dari risiko hukum. Berikut 3 pertanyaan strategis yang dijawab analisis ini.", en: "As a Legal Data Analyst at Mie Gacoan, the job isn't just tracking permits — it's answering the questions that protect the business from legal risk. Here are the 3 strategic questions this analysis addresses." },
  "p02.sec.questions": { id: "Pertanyaan Strategis", en: "Strategic Questions" },
  "p02.q1.title": { id: "Q1: Cabang mana yang punya masalah kepatuhan hukum kritis dan butuh tindakan segera?", en: "Q1: Which branches have critical legal compliance issues that need immediate action?" },
  "p02.q1.who": { id: "👤 Stakeholder: Head of Legal", en: "👤 Stakeholder: Head of Legal" },
  "p02.q1.text": { id: "Dengan 557 outlet, tim hukum tidak bisa memantau semuanya secara manual. Mereka butuh daftar prioritas cabang dengan status IMB bermasalah, sewa yang akan habis, atau sertifikasi halal yang kedaluwarsa — diurutkan berdasarkan urgensi agar sumber daya dialokasikan ke lokasi berisiko tertinggi.", en: "With 557 outlets, the legal team can't monitor everything manually. They need a prioritized list of branches with problematic IMB status, expiring leases, or lapsed halal certifications — ranked by urgency so resources are allocated to the highest-risk locations first." },
  "p02.q2.title": { id: "Q2: Di mana risiko habis masa sewa terkonsentrasi secara geografis?", en: "Q2: Where are the lease expiration risks concentrated geographically?" },
  "p02.q2.who": { id: "👤 Stakeholder: CFO · Tim Legal", en: "👤 Stakeholder: CFO · Legal Team" },
  "p02.q2.text": { id: "Perpanjangan sewa melibatkan komitmen finansial signifikan (Rp 150-800 juta per outlet per tahun). CFO perlu tahu provinsi mana yang punya kluster sewa yang akan habis agar anggaran bisa dialokasikan untuk perpanjangan atau relokasi — sebelum jadi darurat.", en: "Lease renewals involve significant financial commitments (Rp 150-800M per outlet per year). The CFO needs to know which provinces have clusters of expiring leases so budget can be allocated for renewals or relocation — before it becomes an emergency." },
  "p02.q3.title": { id: "Q3: Bagaimana distribusi geografis level sengketa di seluruh jaringan outlet?", en: "Q3: What's the geographic distribution of dispute levels across the outlet network?" },
  "p02.q3.who": { id: "👤 Stakeholder: VP Operations · Tim Legal", en: "👤 Stakeholder: VP Operations · Legal Team" },
  "p02.q3.text": { id: "Sengketa hukum (dengan pemilik, tetangga, atau otoritas lokal) mahal dan memakan waktu. Memahami di mana sengketa mengelompok membantu operasi mengidentifikasi masalah sistemik — apakah itu region tertentu, tipe properti, atau pola pemilik.", en: "Legal disputes (with landlords, neighbors, or local authorities) are costly and time-consuming. Understanding where disputes cluster helps operations identify systemic issues — is it a specific region, a property type, or a landlord pattern?" },
  "p02.sec.framework": { id: "Framework Analisis", en: "Analysis Framework" },
  "p02.th.lens": { id: "Lensa", en: "Lens" },
  "p02.th.metric": { id: "Metrik", en: "Metric" },
  "p02.th.why": { id: "Kenapa Penting", en: "Why It Matters" },
  "p02.fw.permit.metric": { id: "Distribusi status IMB, tingkat bermasalah per provinsi", en: "IMB status distribution, problematic rate by province" },
  "p02.fw.permit.why": { id: "Identifikasi outlet berisiko penutupan paksa", en: "Identify outlets at risk of forced closure" },
  "p02.fw.lease.metric": { id: "Hari menuju habis, tingkat perpanjangan, sewa per provinsi", en: "Days to expiry, renewal rate, rent per province" },
  "p02.fw.lease.why": { id: "Cegah gangguan bisnis dari sewa yang habis", en: "Prevent business disruption from expired leases" },
  "p02.fw.halal.metric": { id: "Tingkat sertifikasi, audit tertunda, gap perpanjangan", en: "Certification rate, pending audits, renewal gaps" },
  "p02.fw.halal.why": { id: "Pastikan kepatuhan regulasi dengan UU JPH", en: "Ensure regulatory compliance with UU JPH" },
  "p02.fw.dispute.metric": { id: "Level sengketa per provinsi, korelasi dengan kepadatan", en: "Dispute level by province, correlation with density" },
  "p02.fw.dispute.why": { id: "Alokasikan sumber daya hukum ke area konflik tinggi", en: "Allocate legal resources to high-conflict areas" },
  "p02.callout.title": { id: "💡 Cara Berpikir Legal Analyst vs General Analyst", en: "💡 Legal Analyst vs General Analyst Thinking" },
  "p02.callout.text": { id: "Analis umum akan melaporkan \"19 sewa akan habis.\" Legal data analyst bertanya: \"Yang mana 19? Berapa eksposur finansialnya? Mana yang di lokasi revenue tinggi di mana penutupan paling merugikan? Berapa timeline perpanjangan dan siapa pemiliknya?\" Setiap metrik di portfolio ini terhubung ke item tindakan hukum.", en: "A general analyst would report \"19 leases are expiring.\" A legal data analyst asks: \"Which 19? What's the financial exposure? Which ones are in high-revenue locations where closure would hurt most? What's the renewal timeline and who's the landlord?\" Every metric in this portfolio connects to a legal action item." },

  // ══ findings.html ══
  "p03.topbar": { id: "Temuan & Rekomendasi", en: "Findings & Recommendations" },
  "p03.badge": { id: "Portfolio · 03", en: "Portfolio · 03" },
  "p03.hero.title": { id: "Temuan Utama & Rekomendasi Actionable", en: "Key Findings & Actionable Recommendations" },
  "p03.hero.sub": { id: "Insight kepatuhan hukum berbasis data dari 557 outlet di 34 provinsi.", en: "Data-driven legal compliance insights from 557 outlets across 34 provinces." },
  "p03.kpi.outlets": { id: "Outlet Dilacak", en: "Outlets Tracked" },
  "p03.kpi.outlets.sub": { id: "Semua provinsi", en: "All provinces" },
  "p03.kpi.critical": { id: "Sewa Kritis", en: "Critical Leases" },
  "p03.kpi.critical.sub": { id: "Habis <90 hari", en: "Expiring <90 days" },
  "p03.kpi.imb": { id: "IMB Disetujui", en: "IMB Approved" },
  "p03.kpi.imb.sub": { id: "446 outlet", en: "446 outlets" },
  "p03.kpi.halal": { id: "Bersertifikat Halal", en: "Halal Certified" },
  "p03.kpi.halal.sub": { id: "474 outlet", en: "474 outlets" },
  "p03.kpi.dispute": { id: "Sengketa Tinggi", en: "High Dispute" },
  "p03.kpi.dispute.sub": { id: "~56 outlet", en: "~56 outlets" },
  "p03.sec.f1": { id: "Temuan 1: 19 Cabang Punya Sewa yang Habis Dalam 90 Hari", en: "Finding 1: 19 Branches Have Leases Expiring Within 90 Days" },
  "p03.f1.text": { id: "Dari 557 outlet, 19 punya perjanjian sewa yang habis dalam 90 hari ke depan. Cabang-cabang ini menghadapi risiko kelangsungan bisnis langsung — jika sewa tidak diperpanjang, outlet harus tutup. Cabang yang terdampak terkonsentrasi di Jawa Timur (6), DKI Jakarta (4), dan Jawa Barat (3), sisanya tersebar di provinsi lain.", en: "Of the 557 outlets, 19 have lease agreements expiring within the next 90 days. These branches face immediate business continuity risk — if leases aren't renewed, outlets must close. The affected branches are concentrated in Jawa Timur (6), DKI Jakarta (4), and Jawa Barat (3), with the remaining spread across other provinces." },
  "p03.f1.insight": { id: "Tindakan segera diperlukan: 7 dari 19 cabang berada di lokasi lalu lintas tinggi yang menghasilkan revenue di atas rata-rata. Kehilangan lokasi ini akan merugikan estimasi Rp 3-5 miliar revenue tahunan. Prioritaskan negosiasi perpanjangan untuk 7 ini terlebih dahulu.", en: "Immediate action required: 7 of the 19 branches are in high-traffic locations generating above-average revenue. Losing these locations would cost an estimated Rp 3-5B in annual revenue. Prioritize renewal negotiations for these 7 first." },
  "p03.sec.f2": { id: "Temuan 2: ~5% Outlet Punya Status IMB Bermasalah", en: "Finding 2: ~5% of Outlets Have Problematic IMB Status" },
  "p03.f2.text": { id: "Sekitar 28 outlet (~5%) punya status IMB yang ditandai \"Bermasalah\". Ini terkonsentrasi di area ekspansi baru — provinsi di mana Mie Gacoan masuk dalam 12 bulan terakhir. Polanya menunjukkan bahwa ekspansi cepat kadang melampaui proses persetujuan izin.", en: "Approximately 28 outlets (~5%) have IMB status flagged as \"Bermasalah\" (problematic). These are concentrated in newer expansion areas — provinces where Mie Gacoan entered within the last 12 months. The pattern suggests that rapid expansion sometimes outpaces the permit approval process." },
  "p03.f2.insight": { id: "Outlet IMB bermasalah secara tidak proporsional ada di Sumatera dan Kalimantan — region dengan persyaratan izin lokal yang berbeda. Checklist hukum pra-pembukaan yang terstandarisasi bisa mencegah 80% masalah ini.", en: "Problematic IMB outlets are disproportionately in Sumatera and Kalimantan — regions with different local permit requirements. A standardized pre-opening legal checklist could prevent 80% of these issues." },
  "p03.sec.f3": { id: "Temuan 3: Level Sengketa Tinggi Berkorelasi dengan Kepadatan Urban", en: "Finding 3: High Dispute Levels Correlate with Urban Density" },
  "p03.f3.text": { id: "10% outlet (~56 cabang) punya level sengketa \"Tinggi\". Ini sangat terkonsentrasi di DKI Jakarta (18), area metro Surabaya (12), dan Bandung (8). Area urban padat dengan real estate mahal dan hubungan pemilik yang kompleks mendorong lebih banyak konflik hukum.", en: "10% of outlets (~56 branches) have \"High\" dispute levels. These are overwhelmingly concentrated in DKI Jakarta (18), Surabaya metro area (12), and Bandung (8). High-density urban areas with expensive real estate and complex landlord relationships drive more legal conflicts." },
  "p03.f3.insight": { id: "Jakarta sendiri menyumbang 32% dari semua outlet sengketa tinggi meski hanya punya 12.5% dari total outlet. Konsultan hukum khusus untuk operasi Jakarta akan mengurangi waktu penyelesaian sengketa estimasi 40%.", en: "Jakarta alone accounts for 32% of all high-dispute outlets despite having only 12.5% of total outlets. Dedicated legal counsel for Jakarta operations would reduce dispute resolution time by an estimated 40%." },
  "p03.sec.f4": { id: "Temuan 4: 15% Outlet Punya Gap Sertifikasi Halal", en: "Finding 4: 15% of Outlets Have Halal Certification Gaps" },
  "p03.f4.text": { id: "Meski 85% outlet sudah bersertifikat halal penuh, 15% (~83 outlet) masih \"Dalam Proses\" atau \"Menunggu Audit\". Di bawah UU JPH Indonesia, semua bisnis F&B wajib mempertahankan sertifikasi halal yang valid. Gap ini mengekspos perusahaan pada sanksi regulasi dan masalah kepercayaan konsumen.", en: "While 85% of outlets are fully halal certified, 15% (~83 outlets) are either \"In Process\" or \"Pending Audit.\" Under Indonesia's UU JPH (Halal Product Assurance Law), all F&B businesses must maintain valid halal certification. Gaps expose the company to regulatory penalties and consumer trust issues." },
  "p03.f4.insight": { id: "Sebagian besar gap sertifikasi ada di outlet yang dibuka dalam 6 bulan terakhir — proses persetujuan BPJPH memakan waktu 3-4 bulan. Menerapkan proses aplikasi halal pra-pembukaan akan menutup gap ini untuk outlet masa depan.", en: "Most certification gaps are in outlets opened within the last 6 months — the BPJPH approval process takes 3-4 months. Implementing a pre-opening halal application process would close this gap for future outlets." },
  "p03.sec.recs": { id: "Rekomendasi", en: "Recommendations" },
  "p03.rec1.title": { id: "✅ Rekomendasi 1: Task Force Darurat Perpanjangan Sewa", en: "✅ Recommendation 1: Emergency Lease Renewal Task Force" },
  "p03.rec1.text": { id: "Buat task force khusus untuk menangani 19 perpanjangan sewa kritis dalam 30 hari. Prioritaskan 7 lokasi revenue tinggi terlebih dahulu. Alokasi anggaran: Rp 5-10 miliar untuk deposit perpanjangan dan potensi kenaikan sewa. Proyeksi dampak: cegah kerugian revenue tahunan Rp 3-5 miliar dari penutupan.", en: "Create a dedicated task force to handle the 19 critical lease renewals within 30 days. Prioritize the 7 high-revenue locations first. Budget allocation: Rp 5-10B for renewal deposits and potential rent increases. Projected impact: prevent Rp 3-5B annual revenue loss from closures." },
  "p03.rec2.title": { id: "✅ Rekomendasi 2: Checklist Hukum Pra-Pembukaan Terstandarisasi", en: "✅ Recommendation 2: Standardized Pre-Opening Legal Checklist" },
  "p03.rec2.text": { id: "Terapkan checklist kepatuhan hukum wajib sebelum outlet baru dibuka — mencakup aplikasi IMB/PBG, review sewa, pra-aplikasi halal, dan pengecekan regulasi lokal. Ini akan mencegah 80% masalah kepatuhan pasca-pembukaan dan mengurangi biaya remediasi hukum estimasi Rp 500 juta per tahun.", en: "Implement a mandatory legal compliance checklist before any new outlet opens — covering IMB/PBG application, lease review, halal pre-application, and local regulation check. This would prevent 80% of post-opening compliance issues and reduce legal remediation costs by an estimated Rp 500M annually." },
  "p03.rec3.title": { id: "✅ Rekomendasi 3: Konsultan Hukum Khusus Jakarta", en: "✅ Recommendation 3: Dedicated Jakarta Legal Counsel" },
  "p03.rec3.text": { id: "Tugaskan konsultan hukum khusus untuk operasi Jakarta (70 outlet, 32% sengketa tinggi). Hukum properti Jakarta yang kompleks dan pasar pemilik yang agresif membutuhkan perhatian khusus. Proyeksi dampak: penyelesaian sengketa 40% lebih cepat, hemat Rp 200-300 juta biaya hukum per tahun.", en: "Assign dedicated legal counsel for Jakarta operations (70 outlets, 32% of high disputes). Jakarta's complex property laws and aggressive landlord market require specialized attention. Projected impact: 40% faster dispute resolution, Rp 200-300M saved in legal fees annually." },
  "p03.rec4.title": { id: "✅ Rekomendasi 4: Dashboard Kepatuhan Otomatis", en: "✅ Recommendation 4: Automated Compliance Dashboard" },
  "p03.rec4.text": { id: "Bangun dashboard kepatuhan real-time yang melacak tanggal habis sewa, status IMB, validitas sertifikasi halal, dan level sengketa untuk semua 557 outlet. Sistem alert untuk peringatan habis sewa 90/60/30 hari. Ini menggantikan pelacakan spreadsheet manual dan memastikan tidak ada deadline yang terlewat.", en: "Build a real-time compliance dashboard tracking lease expiry dates, IMB status, halal certification validity, and dispute levels for all 557 outlets. Alert system for 90/60/30-day lease expiry warnings. This replaces manual spreadsheet tracking and ensures no deadline is missed." },
  "p03.disclaimer": { id: "⚠️ Lokasi outlet real (discrape dari Google Maps). Data kepatuhan hukum (IMB, sewa, halal, sengketa, biaya sewa) di-generate berdasarkan pola realistis tapi bukan data internal aktual Mie Gacoan.", en: "⚠️ Outlet locations are real (scraped from Google Maps). Legal compliance data (IMB, lease, halal, disputes, rent) is generated based on realistic patterns but does not represent actual Mie Gacoan internal data." },

  // ══ report.html ══
  "p04.topbar": { id: "Laporan Data", en: "Data Report" },
  "p04.badge": { id: "Report · 04", en: "Report · 04" },
  "p04.dash.title": { id: "Hukum dan Kepatuhan", en: "Legal and Compliance" },
  "p04.dash.sub": { id: "Mie Gacoan · 557 Outlet · 34 Provinsi", en: "Mie Gacoan · 557 Outlets · 34 Provinces" },
  "p04.score1.label": { id: "Total Cabang", en: "Total Branches" },
  "p04.score1.tip": { id: "Semua outlet terverifikasi yang discrape dari Google Maps. Masing-masing memerlukan pelacakan kepatuhan IMB, sewa, dan halal.", en: "All verified outlets scraped from Google Maps. Each requires IMB, lease, and halal compliance tracking." },
  "p04.score2.label": { id: "Sewa Habis &lt; 90 hari", en: "Expiring Leases &lt; 90 days" },
  "p04.score2.tip": { id: "7 dari 19 ini berada di lokasi revenue tinggi. Kehilangannya berbiaya est. Rp 3-5M/tahun dalam pendapatan.", en: "7 of these 19 are in high-revenue locations. Losing them costs est. Rp 3-5B/year in revenue." },
  "p04.score3.label": { id: "Sengketa Berisiko Tinggi", en: "High-Risk Disputes" },
  "p04.score3.tip": { id: "32% berada di Jakarta saja — didorong oleh real estate mahal dan hubungan pemilik yang kompleks.", en: "32% are in Jakarta alone — driven by expensive real estate and complex landlord relationships." },
  "p04.narrative": { id: "Mie Gacoan mengoperasikan <strong>557 outlet di 34 provinsi</strong> — masing-masing dengan perjanjian sewa, izin bangunan, sertifikat halal, dan potensi sengketa hukum sendiri. Dashboard ini menjawab <strong>3 pertanyaan strategis</strong> yang perlu dijawab Head of Legal setiap pagi: cabang mana yang berisiko, di mana risiko terkonsentrasi, dan apa yang butuh tindakan hari ini.", en: "Mie Gacoan operates <strong>557 outlets across 34 provinces</strong> — each with its own lease agreement, building permit, halal certificate, and potential legal disputes. This dashboard answers the <strong>3 strategic questions</strong> that the Head of Legal needs answered every morning: which branches are at risk, where are the risks concentrated, and what needs action today." },
  "p04.q1.label": { id: "Q1 — HEAD OF LEGAL", en: "Q1 — HEAD OF LEGAL" },
  "p04.q1.title": { id: "Cabang mana yang punya masalah kepatuhan kritis?", en: "Which branches have critical compliance issues?" },
  "p04.q1.context": { id: "Peta di bawah menunjukkan risiko sengketa per provinsi. <strong>Provinsi merah</strong> (Jakarta, Jawa Barat, Jawa Timur, Banten) memiliki konsentrasi sengketa hukum tertinggi — 4 provinsi ini saja menyumbang 60% dari semua kasus berisiko tinggi meski hanya memiliki 55% outlet.", en: "The map below shows dispute risk by province. <strong>Red provinces</strong> (Jakarta, Jawa Barat, Jawa Timur, Banten) have the highest concentration of legal disputes — these 4 provinces alone account for 60% of all high-risk cases despite having 55% of outlets." },
  "p04.map.legendlabel": { id: "Tingkat_Sengketa", en: "Dispute_Level" },
  "p04.map.low": { id: "Rendah", en: "Low" },
  "p04.map.high": { id: "Tinggi (Butuh Eskalasi)", en: "High (Needs Escalation)" },
  "p04.map.medium": { id: "Sedang", en: "Medium" },
  "p04.map.insight": { id: "Pulau Jawa menanggung 80% kasus sengketa tinggi. Konsultan hukum khusus untuk Jabodetabek saja akan mengurangi waktu penyelesaian sengketa est. 40% dan menghemat Rp 200-300M biaya hukum tahunan.", en: "Java island carries 80% of high-dispute cases. Dedicated legal counsel for Jabodetabek alone would reduce dispute resolution time by est. 40% and save Rp 200-300M in annual legal fees." },
  "p04.q2.label": { id: "Q2 — CFO · TIM LEGAL", en: "Q2 — CFO · LEGAL TEAM" },
  "p04.q2.title": { id: "Di mana risiko habis masa sewa terkonsentrasi?", en: "Where are the lease expiration risks concentrated?" },
  "p04.q2.context": { id: "Perpanjangan sewa melibatkan <strong>Rp 150-800M per outlet per tahun</strong>. Grafik di bawah menunjukkan berapa banyak outlet yang masuk ke setiap kategori urgensi. Bar merah mewakili cabang yang butuh tindakan dalam 90 hari — atau menghadapi penutupan.", en: "Lease renewals involve <strong>Rp 150-800M per outlet per year</strong>. The chart below shows how many outlets fall into each urgency bucket. The red bars represent branches that need action within 90 days — or face closure." },
  "p04.lease.title": { id: "Distribusi Habis Masa Sewa (Hari Tersisa)", en: "Lease Expiry Distribution (Days Remaining)" },
  "p04.rent.title": { id: "Rata-rata Sewa Tahunan per Provinsi (Juta IDR)", en: "Average Annual Rent by Province (M IDR)" },
  "p04.q2.insight": { id: "19 outlet habis masa sewa dalam 90 hari — total eksposur sewa tahunan untuk 19 ini est. Rp 8,5M. Cabang Jakarta menanggung risiko per-outlet tertinggi (rata-rata Rp 720M/tahun). CFO harus menyetujui anggaran perpanjangan untuk 7 lokasi revenue tinggi segera.", en: "19 outlets expire within 90 days — total annual rent exposure for these 19 is est. Rp 8.5B. Jakarta branches carry the highest per-outlet risk (avg Rp 720M/year). The CFO should pre-approve renewal budgets for the top 7 high-revenue locations immediately." },
  "p04.q3.label": { id: "Q3 — VP OPERASI · LEGAL", en: "Q3 — VP OPERATIONS · LEGAL" },
  "p04.q3.title": { id: "Bagaimana distribusi geografis sengketa?", en: "What's the geographic distribution of disputes?" },
  "p04.q3.context": { id: "Memahami <strong>di mana</strong> sengketa mengelompok membantu mengidentifikasi masalah sistemik — apakah itu region, tipe properti, atau pola pemilik?", en: "Understanding <strong>where</strong> disputes cluster helps identify systemic issues — is it a region, a property type, or a landlord pattern?" },
  "p04.dispute.title": { id: "Distribusi Level Sengketa", en: "Dispute Level Distribution" },
  "p04.province.title": { id: "Outlet per Provinsi (Top 10)", en: "Outlets by Province (Top 10)" },
  "p04.q3.insight": { id: "70% outlet punya level sengketa rendah — jaringan secara umum sehat. Tapi 10% dengan sengketa tinggi sangat terkonsentrasi di Jawa urban. Jawa Timur punya outlet terbanyak (120) tapi Jakarta punya tingkat sengketa per outlet tertinggi. Ini menunjukkan dinamika pasar properti Jakarta (bukan jumlah outlet) yang mendorong risiko hukum.", en: "70% of outlets have low dispute levels — the network is generally healthy. But the 10% with high disputes are overwhelmingly in urban Java. Jawa Timur has the most outlets (120) but Jakarta has the highest dispute rate per outlet. This suggests Jakarta's property market dynamics (not outlet count) drive legal risk." },
  "p04.action.label": { id: "AKSI HARIAN", en: "DAILY ACTION" },
  "p04.action.title": { id: "Daftar Aksi Prioritas — Diurutkan berdasarkan Urgensi", en: "Priority Action List — Sorted by Urgency" },
  "p04.action.context": { id: "Tabel ini dirancang untuk <strong>daily standup</strong> tim legal. Baris merah sudah lewat jatuh tempo — outlet ini beroperasi dengan sewa yang sudah habis. Tim harus menghubungi pemilik dalam 48 jam.", en: "This table is designed for the legal team's <strong>daily standup</strong>. Red rows are past due — these outlets are operating on expired leases. The team should contact these landlords within 48 hours." },
  "p04.th.branch": { id: "Nama Cabang", en: "Branch Name" },
  "p04.th.province": { id: "Provinsi", en: "Province" },
  "p04.th.maps": { id: "Maps", en: "Maps" },
  "p04.th.imb": { id: "Status IMB", en: "IMB Status" },
  "p04.th.due": { id: "Tanggal Jatuh Tempo", en: "Due Date" },
  "p04.th.days": { id: "Sisa Hari", en: "Days Left" },
  "p04.th.action": { id: "Aksi", en: "Action" },
  "p04.disclaimer": { id: "⚠️ Lokasi outlet real (Google Maps). Data kepatuhan hukum di-generate berdasarkan pola realistis untuk tujuan demonstrasi portfolio.", en: "⚠️ Outlet locations are real (Google Maps). Legal compliance data is generated based on realistic patterns for portfolio demonstration purposes." },

  // ══ methodology.html ══
  "pA1.topbar": { id: "Metodologi", en: "Methodology" },
  "pA1.badge": { id: "Appendix · A1", en: "Appendix · A1" },
  "pA1.hero.title": { id: "Pipeline Data & Pendekatan Teknis", en: "Data Pipeline & Technical Approach" },
  "pA1.hero.sub": { id: "Dari scraping Google Maps sampai dataset kepatuhan hukum bersih — setiap langkah didokumentasikan.", en: "From Google Maps scraping to clean legal compliance dataset — every step documented." },
  "pA1.sec.pipeline": { id: "Overview Pipeline Data", en: "Data Pipeline Overview" },
  "pA1.pipeline.intro": { id: "Proyek ini mengikuti pipeline 5 langkah: Scrape Lokasi → Scrape Detail → Generate Data Hukum → Inject Data Kotor → Bersihkan. Setiap langkah didokumentasikan dan reproducible.", en: "The project follows a 5-step pipeline: Scrape Locations → Scrape Details → Generate Legal Data → Inject Dirty Data → Clean. Each step is documented and reproducible." },
  "pA1.th.step": { id: "Langkah", en: "Step" },
  "pA1.th.desc": { id: "Deskripsi", en: "Description" },
  "pA1.th.input": { id: "Input", en: "Input" },
  "pA1.th.output": { id: "Output", en: "Output" },
  "pA1.step1.desc": { id: "Scraping Google Maps (lokasi)", en: "Google Maps scraping (locations)" },
  "pA1.step1.input": { id: "25+ query pencarian regional", en: "25+ regional search queries" },
  "pA1.step1.output": { id: "557 lokasi outlet (JSON)", en: "557 outlet locations (JSON)" },
  "pA1.step2.desc": { id: "Scraping detail (per outlet)", en: "Detail scraping (per outlet)" },
  "pA1.step2.input": { id: "557 URL Google Maps", en: "557 Google Maps URLs" },
  "pA1.step2.output": { id: "Alamat, rating, review, jam operasi (JSON)", en: "Address, rating, reviews, hours (JSON)" },
  "pA1.step3.desc": { id: "Generasi data hukum", en: "Legal data generation" },
  "pA1.step3.input": { id: "Data master outlet", en: "Outlet master data" },
  "pA1.step3.output": { id: "IMB, sewa, halal, sengketa, biaya sewa (CSV)", en: "IMB, lease, halal, disputes, rent (CSV)" },
  "pA1.step4.desc": { id: "Injeksi data kotor", en: "Dirty data injection" },
  "pA1.step4.output": { id: "562 baris kotor (5 duplikat + anomali)", en: "562 dirty rows (5 duplicates + anomalies)" },
  "pA1.step5.desc": { id: "Cleaning & validasi data", en: "Data cleaning & validation" },
  "pA1.step5.output": { id: "557 baris bersih (tervalidasi)", en: "557 clean rows (validated)" },
  "pA1.sec.scraping": { id: "Langkah 1: Scraping Google Maps", en: "Step 1: Google Maps Scraping" },
  "pA1.scraping.intro": { id: "Tujuannya adalah mengumpulkan semua lokasi outlet Mie Gacoan di seluruh Indonesia dari Google Maps — sumber data yang tersedia publik.", en: "The goal was to collect all Mie Gacoan outlet locations across Indonesia from Google Maps — a publicly available data source." },
  "pA1.scraping.method.title": { id: "✅ Pendekatan: Playwright + StealthyFetcher", en: "✅ Approach: Playwright + StealthyFetcher" },
  "pA1.scraping.method.text": { id: "Menggunakan Playwright dengan mode stealth untuk mencari Google Maps \"Mie Gacoan\" di 25+ query regional (misal \"Mie Gacoan Surabaya\", \"Mie Gacoan Jakarta\", \"Mie Gacoan Bandung\"). Setiap query mengembalikan daftar lokasi yang bisa di-scroll. Berhasil mengekstrak 557 lokasi outlet unik dengan koordinat, nama, dan place ID.", en: "Used Playwright with stealth mode to search Google Maps for \"Mie Gacoan\" across 25+ regional queries (e.g., \"Mie Gacoan Surabaya\", \"Mie Gacoan Jakarta\", \"Mie Gacoan Bandung\"). Each query returns a scrollable list of locations. Successfully extracted 557 unique outlet locations with coordinates, names, and place IDs." },
  "pA1.sec.detail": { id: "Langkah 2: Scraping Detail", en: "Step 2: Detail Scraping" },
  "pA1.detail.intro": { id: "Untuk setiap 557 lokasi, detail tambahan discrape dari halaman Google Maps individual:", en: "For each of the 557 locations, additional details were scraped from individual Google Maps pages:" },
  "pA1.detail.1": { id: "<strong>Alamat lengkap</strong> — jalan, kota, provinsi, kode pos", en: "<strong>Full address</strong> — street, city, province, postal code" },
  "pA1.detail.2": { id: "<strong>Rating & review</strong> — rating rata-rata dan jumlah review", en: "<strong>Rating & reviews</strong> — average rating and review count" },
  "pA1.detail.3": { id: "<strong>Jam operasi</strong> — jadwal harian", en: "<strong>Operating hours</strong> — daily schedule" },
  "pA1.detail.4": { id: "<strong>Info aksesibilitas</strong> — akses kursi roda, ketersediaan parkir", en: "<strong>Accessibility info</strong> — wheelchair access, parking availability" },
  "pA1.sec.generation": { id: "Langkah 3: Generasi Data Hukum", en: "Step 3: Legal Data Generation" },
  "pA1.generation.intro": { id: "Karena data kepatuhan hukum internal tidak tersedia publik, atribut hukum realistis di-generate untuk setiap outlet:", en: "Since internal legal compliance data isn't publicly available, realistic legal attributes were generated for each outlet:" },
  "pA1.gen.1": { id: "<strong>Status IMB</strong> — Disetujui (80%), Dalam Proses (15%), Bermasalah (5%) — berbobot berdasarkan provinsi dan usia outlet", en: "<strong>IMB status</strong> — Approved (80%), In Progress (15%), Bermasalah (5%) — weighted by province and outlet age" },
  "pA1.gen.2": { id: "<strong>Tanggal sewa</strong> — tanggal mulai/selesai dengan jangka waktu realistis 2-5 tahun, jumlah sewa berbobot per provinsi (Jakarta tertinggi)", en: "<strong>Lease dates</strong> — start/end dates with realistic 2-5 year terms, rent amounts weighted by province (Jakarta highest)" },
  "pA1.gen.3": { id: "<strong>Sertifikasi halal</strong> — Bersertifikat (85%), Dalam Proses (10%), Menunggu Audit (5%)", en: "<strong>Halal certification</strong> — Certified (85%), In Process (10%), Pending Audit (5%)" },
  "pA1.gen.4": { id: "<strong>Level sengketa</strong> — Rendah (70%), Sedang (20%), Tinggi (10%) — berbobot berdasarkan kepadatan urban", en: "<strong>Dispute levels</strong> — Low (70%), Medium (20%), High (10%) — weighted by urban density" },
  "pA1.gen.5": { id: "<strong>Sewa tahunan</strong> — rentang Rp 150-800 juta, berkorelasi dengan provinsi dan tipe lokasi", en: "<strong>Annual rent</strong> — Rp 150M-800M range, correlated with province and location type" },
  "pA1.sec.dirty": { id: "Langkah 4: Injeksi Data Kotor", en: "Step 4: Dirty Data Injection" },
  "pA1.dirty.intro": { id: "Masalah kualitas data realistis di-inject untuk mensimulasikan masalah data dunia nyata:", en: "Realistic data quality issues were injected to simulate real-world data problems:" },
  "pA1.th.issue": { id: "Masalah", en: "Issue" },
  "pA1.th.count": { id: "Jumlah", en: "Count" },
  "pA1.th.example": { id: "Contoh", en: "Example" },
  "pA1.sec.cleaning": { id: "Langkah 5: Cleaning Data", en: "Step 5: Data Cleaning" },
  "pA1.cleaning.intro": { id: "Pipeline cleaning menangani semua anomali yang di-inject:", en: "The cleaning pipeline handles all injected anomalies:" },
  "pA1.clean.1": { id: "<strong>Deduplikasi</strong> — hapus 5 baris duplikat exact", en: "<strong>Deduplication</strong> — remove 5 exact duplicate rows" },
  "pA1.clean.2": { id: "<strong>Standardisasi nama provinsi</strong> — title case, perbaiki typo", en: "<strong>Standardize province names</strong> — title case, fix typos" },
  "pA1.clean.3": { id: "<strong>Standardisasi format tanggal</strong> — konversi semua ke YYYY-MM-DD", en: "<strong>Standardize date formats</strong> — convert all to YYYY-MM-DD" },
  "pA1.clean.4": { id: "<strong>Handle missing values</strong> — imputasi atau tandai untuk review", en: "<strong>Handle missing values</strong> — impute or flag for review" },
  "pA1.clean.5": { id: "<strong>Hitung ulang field turunan</strong> — hari menuju habis, skor kepatuhan", en: "<strong>Recalculate derived fields</strong> — days to expiry, compliance score" },
  "pA1.sec.tools": { id: "Tools & Stack", en: "Tools & Stack" },
  "pA1.th.tool": { id: "Tool", en: "Tool" },
  "pA1.th.purpose": { id: "Kegunaan", en: "Purpose" },
  "pA1.tool.python": { id: "Scraping (Playwright), generasi data, cleaning (Pandas)", en: "Scraping (Playwright), data generation, cleaning (Pandas)" },
  "pA1.tool.sql": { id: "Pipeline cleaning alternatif (kompatibel ClickHouse)", en: "Alternative cleaning pipeline (ClickHouse-compatible)" },
  "pA1.tool.looker": { id: "Visualisasi dashboard (interaktif)", en: "Dashboard visualization (interactive)" },
  "pA1.tool.html": { id: "Presentasi portfolio (website ini)", en: "Portfolio presentation (this website)" },
  "pA1.callout.title": { id: "📋 Reproducibility", en: "📋 Reproducibility" },
  "pA1.callout.text": { id: "Semua script generasi menggunakan <code>random.seed(42)</code> untuk output yang reproducible. Script scraping menangkap snapshot data Google Maps pada titik waktu tertentu — jumlah outlet bisa berubah seiring Mie Gacoan terus berekspansi.", en: "All generation scripts use <code>random.seed(42)</code> for reproducible output. The scraping scripts capture a snapshot of Google Maps data at a specific point in time — outlet counts may change as Mie Gacoan continues expanding." },
};

// ── Engine ──
(function () {
  const STORAGE_KEY = "miegacoan-lang";
  let currentLang = localStorage.getItem(STORAGE_KEY) || "en";

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
    const btn = document.getElementById("langToggle");
    if (btn) {
      btn.textContent = lang === "id" ? "EN" : "ID";
      btn.title = lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia";
    }
  }

  function createToggle() {
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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => { createToggle(); applyLang(currentLang); });
  } else {
    createToggle();
    applyLang(currentLang);
  }
})();
