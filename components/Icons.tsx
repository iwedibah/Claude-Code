import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

/* ---- Literacy pillars ------------------------------------------------- */

export const Coins = (p: IconProps) => (
  <svg {...base(p)}>
    <ellipse cx="9" cy="6.5" rx="6" ry="2.8" />
    <path d="M3 6.5v4c0 1.55 2.69 2.8 6 2.8s6-1.25 6-2.8v-4" />
    <path d="M3 10.5v4c0 1.55 2.69 2.8 6 2.8 .78 0 1.53-.07 2.2-.2" />
    <circle cx="16.5" cy="16.5" r="4.5" />
    <path d="M16.5 14.6v3.8M15.2 15.6h2M15.2 17.4h2" />
  </svg>
);

export const Sprout = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21v-8" />
    <path d="M12 13C12 9.7 9.5 7 6 7c0 3.3 2.5 6 6 6Z" />
    <path d="M12 13c0-3 2.2-5.5 5.5-5.5 0 3-2.2 5.5-5.5 5.5Z" />
    <path d="M6.5 21h11" />
  </svg>
);

export const Laptop = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="5" width="16" height="10.5" rx="1.6" />
    <path d="M2.5 19h19" />
    <path d="M10 15.5h4" />
  </svg>
);

export const Recycle = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7.6 6.9 9.9 3.4a1.9 1.9 0 0 1 3.2 0l1.7 2.6" />
    <path d="m5 12.6-1.6 2.8a1.9 1.9 0 0 0 1.6 2.9h3.1" />
    <path d="M17.4 10.4 19 13.2" />
    <path d="M15.9 18.3H19a1.9 1.9 0 0 0 1.6-2.9l-1-1.7" />
    <path d="m9.6 20.4-1.9-2.1 2.2-1.9" />
    <path d="M5.4 9.8 4.6 7l2.9-.6" />
    <path d="m18.9 9.2-2.9.5-.5-2.9" />
  </svg>
);

export const Globe = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17" />
    <path d="M12 3.5c2.2 2.4 3.4 5.4 3.4 8.5S14.2 18.1 12 20.5c-2.2-2.4-3.4-5.4-3.4-8.5S9.8 5.9 12 3.5Z" />
  </svg>
);

/* ---- Safeguarding ----------------------------------------------------- */

export const Shield = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3 5 5.8v5.4c0 4.2 2.8 7.6 7 9.3 4.2-1.7 7-5.1 7-9.3V5.8L12 3Z" />
    <path d="m9.2 12 2 2 3.6-3.8" />
  </svg>
);

export const Badge = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="9.5" r="5" />
    <path d="m8.4 13.6-1.2 7 4.8-2.6 4.8 2.6-1.2-7" />
  </svg>
);

export const Home = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m4 10.5 8-6.2 8 6.2" />
    <path d="M6 9.6V20h12V9.6" />
    <path d="M10.2 20v-5.2h3.6V20" />
  </svg>
);

export const Eye = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M2.6 12S6 6 12 6s9.4 6 9.4 6-3.4 6-9.4 6-9.4-6-9.4-6Z" />
    <circle cx="12" cy="12" r="2.8" />
  </svg>
);

export const Heart = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 20s-7.4-4.4-7.4-9.3A4.1 4.1 0 0 1 12 8.2a4.1 4.1 0 0 1 7.4 2.5C19.4 15.6 12 20 12 20Z" />
  </svg>
);

export const Alert = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 4.5 2.8 20h18.4L12 4.5Z" />
    <path d="M12 10v4M12 17.1v.05" />
  </svg>
);

/* ---- UI --------------------------------------------------------------- */

export const Menu = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const Mail = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="5.5" width="18" height="13" rx="2" />
    <path d="m3.8 7 8.2 6 8.2-6" />
  </svg>
);

export const Phone = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M8.4 3.8 10 7.3l-1.9 1.6a11 11 0 0 0 5 5l1.6-1.9 3.5 1.6v3.1a1.7 1.7 0 0 1-1.9 1.7C9.7 17.8 6.2 14.3 4.6 5.7A1.7 1.7 0 0 1 6.3 3.8h2.1Z" />
  </svg>
);

export const Pin = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

const iconMap = {
  coins: Coins,
  sprout: Sprout,
  laptop: Laptop,
  recycle: Recycle,
  globe: Globe,
  shield: Shield,
  badge: Badge,
  home: Home,
  eye: Eye,
  heart: Heart,
  alert: Alert,
} as const;

export type IconName = keyof typeof iconMap;

export function Icon({ name, ...props }: { name: IconName } & IconProps) {
  const Cmp = iconMap[name];
  return <Cmp {...props} />;
}
