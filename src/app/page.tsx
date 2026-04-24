import Link from "next/link";
import CaseStudyCard from "./components/CaseStudyCard";
import AboutSection from "./components/AboutSection";
import ParticleHero from "./components/ParticleHero";

const skills = [
  "Python",
  "SQL",
  "Excel",
  "Google Sheets",
  "Data Visualization",
  "Business Intelligence",
  "Web Scraping",
  "Data Cleaning",
  "Statistical Analysis",
  "Dashboard Design",
];

const caseStudies = [
  {
    slug: "pizzahut",
    brand: "Pizza Hut Indonesia",
    logo: "/portfolio/pizzahut/logo.svg",
    role: "Senior Data Analytics",
    description:
      "Outlet performance analysis & channel mix optimization across 552 real outlets scraped from Google Maps. Anchored to IDX financial reports and GrabFood menu data.",
    tags: [
      "552 Real Outlets",
      "IDX Financial Data",
      "Google Maps Scraping",
      "Channel Optimization",
    ],
    color: "#ba2529",
    gradient: "linear-gradient(135deg, #7a1a1d, #ba2529)",
    metrics: [
      { label: "Outlets Analyzed", value: "552" },
      { label: "Data Sources", value: "4" },
      { label: "Transaction Rows", value: "5,145" },
      { label: "Recommendations", value: "4" },
    ],
  },
  {
    slug: "gondowangi",
    brand: "PT Gondowangi",
    logo: "/portfolio/gondowangi/logo.png",
    role: "Sales Data Analyst",
    description:
      "Competitive sales analysis for an Indonesian FMCG company with 4 brands across 8 categories. Product catalog scraped from Blibli, 12-month sales data simulated across 10 regions and 6 channels.",
    tags: [
      "113 SKUs from Blibli",
      "12-Month Sales Data",
      "49 Brands Tracked",
      "Competitive Analysis",
    ],
    color: "#16a34a",
    gradient: "linear-gradient(135deg, #0f5132, #16a34a)",
    metrics: [
      { label: "SKUs Tracked", value: "113" },
      { label: "Transactions", value: "12,172" },
      { label: "Brands", value: "49" },
      { label: "Recommendations", value: "4" },
    ],
  },
  {
    slug: "miegacoan",
    brand: "Mie Gacoan",
    logo: "/portfolio/miegacoan/logo.png",
    role: "Legal Data Analyst",
    description:
      "Legal compliance monitoring across 557 outlets scraped from Google Maps. Tracked building permits, lease expirations, halal certifications, and dispute levels across 34 provinces.",
    tags: [
      "557 Outlets from Google Maps",
      "Legal Compliance",
      "34 Provinces",
      "Lease & Permit Tracking",
    ],
    color: "#e63946",
    gradient: "linear-gradient(135deg, #8b1a1a, #e63946)",
    metrics: [
      { label: "Outlets Tracked", value: "557" },
      { label: "Provinces", value: "34" },
      { label: "Critical Leases", value: "19" },
      { label: "Recommendations", value: "4" },
    ],
  },
  {
    slug: "bocorocco",
    brand: "Bocorocco",
    logo: "/portfolio/bocorocco/logo.png",
    role: "Sales Support & Analyst",
    description:
      "Q1 2026 sales performance analysis for a premium Indonesian-Italian footwear brand. Multi-channel reconciliation across Dept Store, IBO Network, Marketplace, and Events. Customer feedback analysis validating Pillow Concept Technology™ claims.",
    tags: [
      "4 Sales Channels",
      "Q1 2026 Data",
      "899 Customer Feedbacks",
      "150+ IBO Network",
    ],
    color: "#003E4D",
    gradient: "linear-gradient(135deg, #002a35, #003E4D)",
    metrics: [
      { label: "Revenue Q1", value: "12.8B" },
      { label: "Achievement", value: "236%" },
      { label: "Customer Feedbacks", value: "899" },
      { label: "Recommendations", value: "4" },
    ],
  },
  {
    slug: "forecoffee",
    brand: "Fore Coffee",
    logo: "https://fore.coffee/wp-content/uploads/2018/12/FORe-Pin-300x300.png",
    role: "Operation Analyst Officer",
    description:
      "Store performance analytics across 350 real outlets scraped from Fore Coffee API. Transaction analysis, menu performance, channel mix optimization, and proximity analysis using Haversine distance. Anchored to IDX: FORE financial reports.",
    tags: [
      "350 Real Outlets (API)",
      "IDX: FORE Financial Data",
      "Haversine Proximity",
      "6 Order Channels",
    ],
    color: "#00754a",
    gradient: "linear-gradient(135deg, #064e3b, #00754a)",
    metrics: [
      { label: "Outlets Analyzed", value: "350" },
      { label: "Clean Transactions", value: "16,229" },
      { label: "Menu Items", value: "34" },
      { label: "Recommendations", value: "4" },
    ],
  },
];

const approach = [
  {
    num: "01",
    title: "Business Context First",
    desc: "Understand the company, stakeholders, and what decisions need to be made before touching any data.",
  },
  {
    num: "02",
    title: "Real Data, Real Sources",
    desc: "Google Maps scraping, marketplace data, IDX financial reports. No toy datasets.",
  },
  {
    num: "03",
    title: "End-to-End Pipeline",
    desc: "Collection → Cleaning → Analysis → Visualization → Actionable Recommendations.",
  },
  {
    num: "04",
    title: "Quantified Impact",
    desc: "Every recommendation comes with projected numbers. Not just 'do X' but 'do X to save Rp Y billion'.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-extrabold text-base tracking-tight text-slate-900">
            Winata Syahputra
          </span>
          <div className="flex items-center gap-8">
            <a href="#work" className="text-sm text-slate-500 hover:text-slate-800 transition-colors font-semibold">
              Work
            </a>
            <a href="#approach" className="text-sm text-slate-500 hover:text-slate-800 transition-colors font-semibold">
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-700 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 relative">
        <ParticleHero />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 mb-8">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm text-slate-600 font-medium">Open to opportunities</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Winata Syahputra
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
            Data Professional who turns messy data into business decisions.
            I build end-to-end analytics — from data collection and cleaning
            to insights that drive action.
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {[
              "Business Intelligence",
              "Data Analysis",
              "Python",
              "SQL",
              "Excel",
              "Data Visualization",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-xs font-semibold rounded-full border border-slate-200 text-slate-600 bg-slate-50"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="#work"
              className="px-6 py-3 bg-slate-900 text-white font-semibold text-sm rounded-lg hover:bg-slate-700 transition-colors"
            >
              View Case Studies
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-slate-200 text-slate-700 text-sm font-semibold rounded-lg hover:bg-slate-50 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Skills marquee */}
      <section className="py-6 border-y border-slate-100 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...skills, ...skills].map((skill, i) => (
            <span
              key={i}
              className="mx-6 text-sm text-slate-300 font-semibold uppercase tracking-widest flex-shrink-0"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Real companies. Real data. Real insights.
            </h2>
            <p className="text-slate-600 mt-3 font-medium">
              Case studies that simulate actual work at real companies.
            </p>
          </div>

          <div className="space-y-6">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.slug} cs={cs} />
            ))}
          </div>

          {/* Coming soon */}
          <div className="mt-6 border-2 border-dashed border-slate-200 rounded-2xl py-12 text-center">
            <p className="text-slate-300 text-sm font-medium">More case studies coming soon</p>
          </div>
        </div>
      </section>

      {/* About */}
      <AboutSection />

      {/* Contact */}
      <section id="contact" className="py-24 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-slate-800 mb-2">
            Let&apos;s connect
          </h2>
          <p className="text-slate-600 mb-8 text-sm font-medium">
            Open to data analytics roles worldwide.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:winatasyahputra@gmail.com"
              className="px-6 py-3 bg-slate-900 text-white font-semibold text-sm rounded-lg hover:bg-slate-700 transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/winata-syahputra/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-200 text-slate-700 text-sm font-semibold rounded-lg hover:bg-slate-50 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-xs text-slate-300 font-medium">
          <span>© 2026 Winata Syahputra</span>
          <span>Built with Next.js</span>
        </div>
      </footer>
    </main>
  );
}
