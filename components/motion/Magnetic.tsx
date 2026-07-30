"use client";

import { useRef, type ReactNode } from "react";

import { useFinePointer, useReducedMotion } from "@/lib/hooks";

/**
 * Pulls its child gently toward the cursor. Mouse-only, and a no-op under
 * reduced motion — the wrapper stays in the tree so layout never shifts.
 */
export default function Magnetic({
  children,
  strength = 0.32,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const enabled = fine && !reduced;

  function move(event: React.MouseEvent<HTMLSpanElement>) {
    const node = ref.current;
    if (!node || !enabled) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    node.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }

  function reset() {
    const node = ref.current;
    if (node) node.style.transform = "translate(0px, 0px)";
  }

  return (
    <span
      ref={ref}
      onMouseMove={move}
      onMouseLeave={reset}
      className={`inline-block transition-transform duration-500 ease-out will-change-transform ${className}`}
    >
      {children}
    </span>
  );
}
