"use client";

import { useRef, type ReactNode } from "react";

import { useFinePointer, useReducedMotion } from "@/lib/hooks";

/**
 * Warm light that follows the cursor across a section. Position is written to
 * CSS custom properties, so tracking costs no React renders.
 */
export default function Spotlight({
  children,
  className = "",
  color = "rgba(226,154,44,0.16)",
  size = 520,
}: {
  children: ReactNode;
  className?: string;
  color?: string;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const enabled = fine && !reduced;

  function move(event: React.MouseEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node || !enabled) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    node.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
    node.style.setProperty("--spot-o", "1");
  }

  function reset() {
    ref.current?.style.setProperty("--spot-o", "0");
  }

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={reset}
      className={`relative ${className}`}
    >
      {enabled ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
          style={{
            opacity: "var(--spot-o, 0)",
            background: `radial-gradient(${size}px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${color}, transparent 65%)`,
          }}
        />
      ) : null}
      {children}
    </div>
  );
}
