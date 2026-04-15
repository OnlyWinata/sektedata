"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function TutorialFormulaGate() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);
  const [loading, setLoading] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Check if already authenticated
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("tutorial_formula_auth") === "granted") {
        window.location.href = "/tutorial-formula/content.html";
      }
    }
  }, []);

  // Auto-focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(false);

    if (password === "windataxspreadsheet") {
      setLoading(true);
      setUnlocked(true);
      sessionStorage.setItem("tutorial_formula_auth", "granted");
      setTimeout(() => {
        window.location.href = "/tutorial-formula/content.html";
      }, 800);
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setPassword("");
      inputRef.current?.focus();
    }
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="/"
            className="font-extrabold text-base tracking-tight text-slate-900 hover:text-slate-600 transition-colors"
          >
            Winata Syahputra
          </a>
          <div className="flex items-center gap-8">
            <a
              href="/#work"
              className="text-sm text-slate-500 hover:text-slate-800 transition-colors font-semibold"
            >
              Work
            </a>
            <a
              href="/#contact"
              className="text-sm font-semibold px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-700 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Password Gate */}
      <div className="flex-1 flex items-center justify-center px-6 pt-16">
        <div
          className={`w-full max-w-md transition-all duration-500 ${
            unlocked ? "scale-95 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          {/* Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-slate-900 mb-6">
              <span className="text-3xl">📐</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
              Tutorial Formula Spreadsheet
            </h1>
            <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-sm mx-auto">
              Konten ini eksklusif untuk peserta{" "}
              <span className="font-bold text-slate-700">
                Windata 30 Case Studies
              </span>
              . Masukkan password untuk mengakses.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className={`${shake ? "animate-shake" : ""}`}>
              <label
                htmlFor="password"
                className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2"
              >
                Password
              </label>
              <input
                ref={inputRef}
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Masukkan password..."
                className={`w-full px-4 py-3.5 rounded-xl border-2 text-sm font-medium transition-all duration-200 outline-none ${
                  error
                    ? "border-red-300 bg-red-50 text-red-900 placeholder-red-300"
                    : "border-slate-200 bg-white text-slate-900 placeholder-slate-300 focus:border-slate-900 focus:ring-4 focus:ring-slate-100"
                }`}
                autoComplete="off"
                disabled={loading}
              />
              {error && (
                <p className="mt-2 text-xs font-semibold text-red-500 flex items-center gap-1">
                  <span>✕</span> Password salah. Coba lagi.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || !password}
              className={`w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                loading
                  ? "bg-emerald-500 text-white cursor-wait"
                  : !password
                  ? "bg-slate-100 text-slate-300 cursor-not-allowed"
                  : "bg-slate-900 text-white hover:bg-slate-700 active:scale-[0.98]"
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Membuka...
                </span>
              ) : (
                "Buka Tutorial →"
              )}
            </button>
          </form>

          {/* Hint */}
          <div className="mt-8 text-center">
            <p className="text-xs text-slate-300 font-medium">
              Belum punya password?{" "}
              <a
                href="https://www.windata.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-800 underline underline-offset-2 transition-colors"
              >
                Daftar di windata.id
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-xs text-slate-300 font-medium">
          <span>© 2026 Winata Syahputra</span>
          <a
            href="https://www.windata.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-500 transition-colors"
          >
            windata.id ↗
          </a>
        </div>
      </footer>

      {/* Shake animation */}
      <style jsx>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(-8px);
          }
          40% {
            transform: translateX(8px);
          }
          60% {
            transform: translateX(-6px);
          }
          80% {
            transform: translateX(6px);
          }
        }
        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
      `}</style>
    </main>
  );
}
