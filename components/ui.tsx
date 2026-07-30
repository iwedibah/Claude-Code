import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/* ------------------------------------------------------------------ Layout */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
  );
}

export function Section({
  children,
  id,
  className = "",
  tone = "cream",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  tone?: "cream" | "sand" | "navy" | "white";
}) {
  const tones = {
    cream: "bg-cream text-navy-900",
    sand: "bg-sand text-navy-900",
    white: "bg-white text-navy-900",
    navy: "bg-navy-900 text-navy-50",
  } as const;

  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-20 sm:py-28 ${tones[tone]} ${className}`}
    >
      {children}
    </section>
  );
}

/* ------------------------------------------------------------------ Typography */

export function Eyebrow({
  children,
  tone = "gold",
}: {
  children: ReactNode;
  tone?: "gold" | "light" | "teal";
}) {
  const tones = {
    gold: "text-gold-600",
    teal: "text-teal-700",
    light: "text-gold-400",
  } as const;

  return (
    <p
      className={`mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] uppercase ${tones[tone]}`}
    >
      <span aria-hidden className="h-px w-8 bg-current opacity-60" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "dark",
  align = "left",
  className = "",
  /** Page heroes pass "h1" so every route has exactly one top-level heading. */
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
}) {
  const isLight = tone === "light";
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow ? (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Eyebrow tone={isLight ? "light" : "gold"}>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      <Heading
        className={`font-display text-balance text-3xl leading-[1.12] font-semibold sm:text-4xl lg:text-[2.75rem] ${
          isLight ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </Heading>
      {lead ? (
        <p
          className={`text-pretty mt-5 text-base leading-relaxed sm:text-lg ${
            isLight ? "text-navy-100/85" : "text-navy-800/75"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ Buttons */

type ButtonVariant = "primary" | "secondary" | "ghost" | "light";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200 ease-out";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-navy-900 text-white hover:bg-navy-700 hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(10,32,56,0.7)]",
  secondary:
    "bg-gold-500 text-navy-950 hover:bg-gold-400 hover:-translate-y-0.5 shadow-[0_10px_30px_-12px_rgba(226,154,44,0.8)]",
  ghost:
    "border border-navy-900/20 text-navy-900 hover:border-navy-900/45 hover:bg-navy-900/[0.04]",
  light: "bg-white text-navy-900 hover:bg-navy-50 hover:-translate-y-0.5",
};

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  return (
    <Link
      href={href}
      className={`${buttonBase} ${buttonVariants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      fill="none"
      className={`h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 ${className}`}
    >
      <path
        d="M4 10h11m0 0-4-4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ Surfaces */

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-navy-900/8 bg-white p-7 shadow-[0_1px_2px_rgba(10,32,56,0.04),0_18px_40px_-28px_rgba(10,32,56,0.35)] ${className}`}
    >
      {children}
    </div>
  );
}

/** Soft blurred colour wash used behind hero and CTA sections. */
export function Glow({
  className = "",
  color = "rgba(226,154,44,0.35)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{ background: color }}
    />
  );
}
