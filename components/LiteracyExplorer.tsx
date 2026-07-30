"use client";

import { useRef, useState } from "react";

import { Icon } from "@/components/Icons";
import { ArrowRight } from "@/components/ui";
import { literacies } from "@/lib/content";
import { useReducedMotion } from "@/lib/hooks";

const accents = {
  gold: {
    chip: "bg-gold-500 text-navy-950",
    soft: "bg-gold-100 text-gold-600",
    bar: "bg-gold-500",
  },
  teal: {
    chip: "bg-teal-600 text-white",
    soft: "bg-teal-100 text-teal-700",
    bar: "bg-teal-600",
  },
  navy: {
    chip: "bg-navy-700 text-white",
    soft: "bg-navy-100 text-navy-700",
    bar: "bg-navy-700",
  },
  coral: {
    chip: "bg-coral-500 text-white",
    soft: "bg-coral-100 text-coral-600",
    bar: "bg-coral-500",
  },
} as const;

/**
 * Tabbed explorer for the five literacies. Implements the WAI-ARIA tabs
 * pattern — arrow keys move between pillars, Home/End jump to the ends.
 */
export default function LiteracyExplorer() {
  const [index, setIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduced = useReducedMotion();
  const active = literacies[index];

  function focusTab(next: number) {
    const clamped = (next + literacies.length) % literacies.length;
    setIndex(clamped);
    tabRefs.current[clamped]?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        focusTab(index + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        focusTab(index - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(literacies.length - 1);
        break;
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-12">
      {/* Pillar list */}
      <div
        role="tablist"
        aria-label="The five literacies"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
      >
        {literacies.map((pillar, i) => {
          const selected = i === index;
          return (
            <button
              key={pillar.slug}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              id={`pillar-tab-${pillar.slug}`}
              aria-selected={selected}
              aria-controls={`pillar-panel-${pillar.slug}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setIndex(i)}
              className={`group relative flex shrink-0 items-center gap-3.5 rounded-2xl border px-4 py-3.5 text-left transition duration-300 lg:w-full ${
                selected
                  ? "border-navy-900/15 bg-white shadow-[0_18px_40px_-30px_rgba(10,32,56,0.5)]"
                  : "border-transparent bg-white/50 hover:bg-white"
              }`}
            >
              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors duration-300 ${
                  selected
                    ? accents[pillar.accent].chip
                    : accents[pillar.accent].soft
                }`}
              >
                <Icon name={pillar.icon} className="h-5 w-5" />
              </span>
              <span
                className={`text-sm font-semibold whitespace-nowrap transition-colors lg:whitespace-normal ${
                  selected ? "text-navy-900" : "text-navy-800/70"
                }`}
              >
                {pillar.title}
              </span>
              {selected ? (
                <span
                  aria-hidden
                  className={`absolute inset-y-2 -left-px hidden w-0.5 rounded-full lg:block ${accents[pillar.accent].bar}`}
                />
              ) : null}
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div
        role="tabpanel"
        id={`pillar-panel-${active.slug}`}
        aria-labelledby={`pillar-tab-${active.slug}`}
        tabIndex={0}
        className="relative overflow-hidden rounded-[2rem] bg-navy-900 p-8 text-white sm:p-10"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-gold-500/15 blur-3xl"
        />

        {/* `key` restarts the entrance transition on every pillar change */}
        <div
          key={active.slug}
          className="relative"
          style={
            reduced
              ? undefined
              : { animation: "panel-in .55s cubic-bezier(.22,1,.36,1) both" }
          }
        >
          <div className="flex items-center gap-4">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-gold-400">
              <Icon name={active.icon} className="h-7 w-7" />
            </span>
            <span className="font-display text-5xl leading-none font-semibold text-white/10">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="font-display mt-7 text-2xl font-semibold sm:text-3xl">
            {active.title}
          </h3>
          <p className="font-display text-pretty mt-3 text-lg leading-relaxed text-gold-400 sm:text-xl">
            {active.summary}
          </p>
          <p className="text-pretty mt-5 max-w-2xl text-sm leading-relaxed text-navy-100/75 sm:text-base">
            {active.detail}
          </p>

          <div className="mt-9 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
            <span className="text-xs font-semibold tracking-[0.18em] text-navy-100/50 uppercase">
              Pillar {index + 1} of {literacies.length}
            </span>
            <button
              type="button"
              onClick={() => focusTab(index + 1)}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-gold-400"
            >
              Next pillar
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
