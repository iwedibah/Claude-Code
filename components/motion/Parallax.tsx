"use client";

import { useRef, type ReactNode } from "react";

import { useReducedMotion, useScrollCallback } from "@/lib/hooks";

/**
 * Shifts its child against the scroll direction. `speed` is the fraction of
 * scroll distance travelled — 0.1 is subtle, 0.3 is pronounced.
 */
export default function Parallax({
  children,
  speed = 0.12,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useScrollCallback(() => {
    const node = ref.current;
    if (!node || reduced) return;

    const rect = node.getBoundingClientRect();
    // Distance of the element's centre from the viewport centre.
    const offset = rect.top + rect.height / 2 - window.innerHeight / 2;
    node.style.transform = `translate3d(0, ${(-offset * speed).toFixed(2)}px, 0)`;
  });

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
