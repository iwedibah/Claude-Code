import Link from "next/link";

/**
 * Wordmark with a small book/spark monogram. Inherits colour from its parent
 * so it works on both the cream header and the navy footer.
 */
export default function Logo({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="The Plethora Literacy Club — home"
    >
      <span
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-transform duration-300 group-hover:-rotate-6 ${
          isLight ? "bg-gold-500 text-navy-950" : "bg-navy-900 text-gold-400"
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
          <path
            d="M4 5.5h5.2c1.4 0 2.5.9 2.8 2v11c-.4-1-1.4-1.7-2.8-1.7H4v-11Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M20 5.5h-5.2c-1.4 0-2.5.9-2.8 2v11c.4-1 1.4-1.7 2.8-1.7H20v-11Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M12 2.6v2.2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="leading-none">
        <span
          className={`font-display block text-[1.05rem] font-semibold tracking-tight ${
            isLight ? "text-white" : "text-navy-900"
          }`}
        >
          Plethora
        </span>
        <span
          className={`block text-[0.68rem] font-semibold tracking-[0.2em] uppercase ${
            isLight ? "text-gold-400" : "text-gold-600"
          }`}
        >
          Literacy Club
        </span>
      </span>
    </Link>
  );
}
