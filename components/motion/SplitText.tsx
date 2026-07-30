"use client";

import type { ElementType } from "react";

import { useInView, useReducedMotion } from "@/lib/hooks";

/**
 * Reveals a headline word by word on a rising blur.
 *
 * Words are split into inline spans separated by real non-breaking spaces, so
 * the heading still exposes one continuous text node to assistive tech and to
 * crawlers — no duplicated `sr-only` copy, no `aria-hidden` wrapper.
 */
export default function SplitText({
  text,
  as: Tag = "span",
  className = "",
  delay = 0,
  stagger = 55,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.25 });
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <span
            className="inline-block will-change-transform"
            style={{
              transform: inView ? "none" : "translateY(0.9em)",
              opacity: inView ? 1 : 0,
              filter: inView ? "blur(0)" : "blur(6px)",
              transition:
                "transform .8s cubic-bezier(.22,1,.36,1), opacity .8s cubic-bezier(.22,1,.36,1), filter .8s cubic-bezier(.22,1,.36,1)",
              transitionDelay: `${delay + i * stagger}ms`,
            }}
          >
            {word}
          </span>
          {i < words.length - 1 ? <span>&nbsp;</span> : null}
        </span>
      ))}
    </Tag>
  );
}
