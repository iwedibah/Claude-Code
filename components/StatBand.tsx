"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { value: number; suffix?: string; label: string };

/** Counts from 0 to `value` once the band scrolls into view. */
function useCountUp(target: number, active: boolean, duration = 1400) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!active) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || target <= 0) {
      const id = requestAnimationFrame(() => setN(target));
      return () => cancelAnimationFrame(id);
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(eased * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return n;
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const n = useCountUp(stat.value, active);

  return (
    <div className="relative">
      <div className="font-display text-4xl leading-none font-semibold text-gold-400 sm:text-5xl">
        {n}
        {stat.suffix}
      </div>
      <p className="text-pretty mt-3 text-sm leading-relaxed text-navy-100/70">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatBand({
  stats,
  className = "",
}: {
  stats: readonly Stat[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      const frame = requestAnimationFrame(() => setActive(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`grid gap-10 sm:grid-cols-2 lg:grid-cols-4 ${className}`}
    >
      {stats.map((stat) => (
        <StatItem key={stat.label} stat={stat} active={active} />
      ))}
    </div>
  );
}
