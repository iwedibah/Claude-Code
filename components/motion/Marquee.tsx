"use client";

import { useReducedMotion } from "@/lib/hooks";

/**
 * Infinite ticker. The track holds two identical runs and translates by
 * exactly -50%, so the loop is seamless at any width.
 */
export default function Marquee({
  items,
  speed = 42,
  className = "",
}: {
  items: readonly string[];
  speed?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const run = [...items, ...items];

  return (
    <div
      className={`group relative flex overflow-hidden ${className}`}
      role="presentation"
    >
      {/* Fade the strip into the background at both ends */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy-950 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy-950 to-transparent"
      />

      <div
        className="flex w-max shrink-0 items-center gap-10 pr-10 group-hover:[animation-play-state:paused]"
        style={
          reduced
            ? undefined
            : { animation: `marquee ${speed}s linear infinite` }
        }
      >
        {run.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-10"
          >
            <span className="text-sm font-medium tracking-wide whitespace-nowrap text-navy-100/70">
              {item}
            </span>
            <span
              aria-hidden
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500/70"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
