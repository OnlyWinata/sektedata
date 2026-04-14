"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: "🎯",
    title: "Business Context First",
    desc: "Understand the company, stakeholders, and what decisions need to be made — before touching any data.",
  },
  {
    icon: "🌐",
    title: "Real Data, Real Sources",
    desc: "Google Maps scraping, marketplace data, IDX financial reports. No toy datasets.",
  },
  {
    icon: "⚙️",
    title: "End-to-End Pipeline",
    desc: "Collection → Cleaning → Analysis → Visualization → Actionable Recommendations.",
  },
  {
    icon: "📊",
    title: "Quantified Impact",
    desc: "Every recommendation comes with projected numbers. Not just 'do X' but 'do X to save Rp Y billion'.",
  },
];

const brings = [
  "End-to-end analytics: collection → cleaning → analysis → recommendations",
  "Real data from real sources — not toy datasets",
  "Business context first, technical execution second",
  "Quantified recommendations with projected impact",
  "Portfolio-ready case studies with interactive HTML reports",
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="approach" className="py-24 px-6 border-t border-slate-100" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            How I work
          </h2>
          <p className="text-slate-600 mt-3 font-medium">
            Business-first mindset. Real data. Quantified outcomes.
          </p>
        </div>

        {/* Process steps — 4 cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 hover:-translate-y-1 transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              {/* Step number */}
              <div className="absolute top-5 right-5 text-xs font-extrabold text-slate-200">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-2xl mb-4">{step.icon}</div>
              <h3 className="text-sm font-extrabold text-slate-800 mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* What I bring — full width card */}
        <div
          className={`bg-slate-900 rounded-2xl p-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <h3 className="text-lg font-extrabold text-white mb-6">
            What I bring
          </h3>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
            {brings.map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 transition-all duration-500 ${
                  visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${900 + i * 100}ms` }}
              >
                <span className="text-emerald-400 mt-0.5 text-sm flex-shrink-0">✓</span>
                <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
