"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface Metric {
  label: string;
  value: string;
}

interface CaseStudy {
  slug: string;
  brand: string;
  logo: string;
  role: string;
  description: string;
  tags: string[];
  gradient: string;
  metrics: Metric[];
}

function AnimatedNumber({ value, visible }: { value: string; visible: boolean }) {
  const [display, setDisplay] = useState("0");
  const numericPart = value.replace(/[^0-9]/g, "");
  const target = parseInt(numericPart, 10);
  const prefix = value.match(/^[^0-9]*/)?.[0] || "";
  const suffix = value.match(/[^0-9]*$/)?.[0] || "";
  // Preserve comma formatting
  const hasComma = value.includes(",");

  useEffect(() => {
    if (!visible || isNaN(target)) {
      setDisplay(value);
      return;
    }

    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);

      let formatted = start.toString();
      if (hasComma) {
        formatted = start.toLocaleString("en-US");
      }
      setDisplay(prefix + formatted + suffix);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [visible, target, value, prefix, suffix, hasComma]);

  return <>{display}</>;
}

export default function CaseStudyCard({ cs }: { cs: CaseStudy }) {
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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
    >
      <Link
        href={`/portfolio/${cs.slug}`}
        className="group block rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-1"
      >
        {/* Brand banner */}
        <div
          className="px-10 py-8 flex items-center gap-5 transition-all duration-300 group-hover:py-9"
          style={{ background: cs.gradient }}
        >
          <img
            src={cs.logo}
            alt={cs.brand}
            className="w-12 h-auto brightness-0 invert flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{ display: cs.logo ? "block" : "none" }}
          />
          {!cs.logo && (
            <span className="text-3xl flex-shrink-0">🌿</span>
          )}
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-1">
              {cs.role}
            </p>
            <h3 className="text-2xl font-extrabold text-white">
              {cs.brand}
            </h3>
          </div>
          <span className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 text-2xl">
            →
          </span>
        </div>

        {/* Content */}
        <div className="px-10 py-8">
          <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-3xl font-medium">
            {cs.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {cs.tags.map((tag, i) => (
              <span
                key={tag}
                className={`px-3 py-1 text-xs font-semibold rounded-full bg-slate-50 text-slate-600 border border-slate-100 transition-all duration-500 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-6">
            {cs.metrics.map((m) => (
              <div key={m.label}>
                <div className="text-2xl font-extrabold text-slate-800">
                  <AnimatedNumber value={m.value} visible={visible} />
                </div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
