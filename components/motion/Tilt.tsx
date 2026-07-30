"use client";

import { useRef, type ReactNode } from "react";

import { useFinePointer, useReducedMotion } from "@/lib/hooks";

/**
 * 3D card tilt with a light sheen that tracks the cursor. The sheen is drawn
 * by a CSS custom property so no extra React renders happen while moving.
 */
export default function Tilt({
  children,
  max = 7,
  className = "",
  sheen = true,
}: {
  children: ReactNode;
  max?: number;
  className?: string;
  sheen?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const enabled = fine && !reduced;

  function move(event: React.MouseEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node || !enabled) return;
    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    node.style.transform = `perspective(900px) rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max}deg) translateY(-4px)`;
    node.style.setProperty("--sheen-x", `${px * 100}%`);
    node.style.setProperty("--sheen-y", `${py * 100}%`);
    node.style.setProperty("--sheen-o", "1");
  }

  function reset() {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "";
    node.style.setProperty("--sheen-o", "0");
  }

  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={reset}
      className={`relative transition-transform duration-500 ease-out will-change-transform ${
        sheen ? "tilt-sheen" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
