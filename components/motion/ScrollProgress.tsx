"use client";

import { useRef } from "react";

import { useScrollCallback } from "@/lib/hooks";

/** Thin gold reading-progress bar pinned under the header. */
export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useScrollCallback((scrollY) => {
    const node = bar.current;
    if (!node) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? Math.min(scrollY / max, 1) : 0;
    node.style.transform = `scaleX(${pct})`;
  });

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-60 h-[3px] bg-transparent"
    >
      <div
        ref={bar}
        className="h-full origin-left bg-gradient-to-r from-gold-500 via-gold-400 to-teal-500"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
