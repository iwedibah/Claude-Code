"use client";

import { useRef } from "react";

import { useReducedMotion, useScrollCallback } from "@/lib/hooks";

/** Appears past the first screen; the ring traces reading progress. */
export default function BackToTop() {
  const wrap = useRef<HTMLDivElement>(null);
  const ring = useRef<SVGCircleElement>(null);
  const reduced = useReducedMotion();

  const CIRCUMFERENCE = 2 * Math.PI * 20;

  useScrollCallback((scrollY) => {
    const node = wrap.current;
    if (!node) return;

    const shown = scrollY > window.innerHeight * 0.9;
    node.style.opacity = shown ? "1" : "0";
    node.style.transform = shown
      ? "translateY(0) scale(1)"
      : "translateY(16px) scale(0.9)";
    node.style.pointerEvents = shown ? "auto" : "none";

    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? Math.min(scrollY / max, 1) : 0;
    if (ring.current) {
      ring.current.style.strokeDashoffset = `${CIRCUMFERENCE * (1 - pct)}`;
    }
  });

  return (
    <div
      ref={wrap}
      className="fixed right-5 bottom-5 z-50 opacity-0 transition-all duration-300 ease-out sm:right-8 sm:bottom-8"
    >
      <button
        type="button"
        aria-label="Back to top"
        onClick={() =>
          window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })
        }
        className="group relative grid h-12 w-12 place-items-center rounded-full bg-navy-900 text-white shadow-[0_14px_30px_-12px_rgba(10,32,56,0.8)] transition hover:bg-navy-700"
      >
        <svg
          viewBox="0 0 44 44"
          className="absolute inset-0 h-full w-full -rotate-90"
        >
          <circle
            ref={ring}
            cx="22"
            cy="22"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gold-400"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE}
          />
        </svg>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
          className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
        >
          <path
            d="M12 19V5m0 0-6 6m6-6 6 6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
