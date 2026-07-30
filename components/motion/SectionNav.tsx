"use client";

import { useScrollSpy } from "@/lib/hooks";

type Item = { id: string; label: string };

/**
 * Floating dot rail that tracks the homepage sections. Hidden below xl so it
 * never competes with content on smaller screens.
 */
export default function SectionNav({ items }: { items: readonly Item[] }) {
  const ids = items.map((i) => i.id);
  const active = useScrollSpy(ids);

  return (
    <nav
      aria-label="Section"
      className="fixed top-1/2 left-6 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ul className="flex flex-col gap-1">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-center gap-3 py-1.5"
              >
                <span
                  className={`h-px transition-all duration-300 ${
                    isActive
                      ? "w-7 bg-gold-500"
                      : "w-3 bg-navy-900/25 group-hover:w-6 group-hover:bg-navy-900/50"
                  }`}
                />
                <span
                  className={`text-[0.7rem] font-semibold tracking-wide uppercase transition-all duration-300 ${
                    isActive
                      ? "text-navy-900 opacity-100"
                      : "text-navy-800/60 opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
