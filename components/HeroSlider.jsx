"use client";
import { useState, useEffect, useCallback } from "react";

const slides = [
  { src: "/hero/01-alpine.jpg", alt: "Alpine ILX-W670E — 7-inch Digital Multimedia Receiver" },
  { src: "/hero/02-audio-technica.jpg", alt: "Audio-Technica — High Quality Transmission Car Audio Cable" },
  { src: "/hero/03-dominations.jpg", alt: "Dominations Audio — Upgrade Berkelas Tanpa Naik Budget" },
  { src: "/hero/04-hertz.jpg", alt: "Hertz — Small Body, Big Power amplifiers" },
  { src: "/hero/05-bullshit-cable.jpg", alt: "Bullshit Cable — premium audio cables by Pitch & Timbre" },
  { src: "/hero/06-z3ro.jpg", alt: "Z3RO Solutions — eco-friendly sound damping" },
  { src: "/hero/07-focal.jpg", alt: "Focal Slatefiber — a new range is coming" },
  { src: "/hero/08-audison.jpg", alt: "Audison Voce II — Hi-Res Audio, a new standard" },
];

const Chevron = ({ dir }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
  </svg>
);

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = slides.length;
  const go = useCallback((k) => setI((p) => (((k) % n) + n) % n), [n]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI((p) => (p + 1) % n), 5500);
    return () => clearTimeout(t);
  }, [i, paused, n]);

  return (
    <section className="pt-16" style={{ background: "#0C0C0E" }}>
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "1900 / 650" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {slides.map((s, idx) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            loading={idx === 0 ? "eager" : "lazy"}
            aria-hidden={idx === i ? undefined : "true"}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out"
            style={{ opacity: idx === i ? 1 : 0 }}
          />
        ))}

        {/* Arrows */}
        <button
          onClick={() => go(i - 1)}
          aria-label="Previous slide"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/35 hover:bg-[#C9A84C] text-white hover:text-[#0C0C0E] backdrop-blur-sm flex items-center justify-center transition-colors"
        >
          <Chevron dir="left" />
        </button>
        <button
          onClick={() => go(i + 1)}
          aria-label="Next slide"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/35 hover:bg-[#C9A84C] text-white hover:text-[#0C0C0E] backdrop-blur-sm flex items-center justify-center transition-colors"
        >
          <Chevron dir="right" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((s, idx) => (
            <button
              key={s.src}
              onClick={() => setI(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{ width: idx === i ? 28 : 8, background: idx === i ? "#C9A84C" : "rgba(255,255,255,0.55)" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
