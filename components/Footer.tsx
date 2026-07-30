import Link from "next/link";

import Logo from "@/components/Logo";
import { Mail, Phone, Pin } from "@/components/Icons";
import { Container } from "@/components/ui";
import { literacies, site } from "@/lib/content";

const explore = [
  { label: "About the club", href: "/about" },
  { label: "Our programmes", href: "/programmes" },
  { label: "Impact & SDGs", href: "/impact" },
  { label: "Impact & Innovation Board", href: "/board" },
  { label: "Child safeguarding", href: "/safeguarding" },
  { label: "Contact the club", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-100">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl"
      />

      <Container className="relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo tone="light" />
            <p className="text-pretty mt-5 max-w-xs text-sm leading-relaxed text-navy-100/65">
              {site.tagline} — building financial literacy, entrepreneurship,
              digital skills, upcycling, and environmental resilience in
              children aged 5 to 17.
            </p>
          </div>

          <nav aria-label="Programme">
            <h2 className="text-xs font-semibold tracking-[0.18em] text-gold-400 uppercase">
              Programme
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {literacies.map((pillar) => (
                <li key={pillar.slug}>
                  <Link
                    href={`/programmes#${pillar.slug}`}
                    className="text-navy-100/70 transition hover:text-white"
                  >
                    {pillar.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Explore">
            <h2 className="text-xs font-semibold tracking-[0.18em] text-gold-400 uppercase">
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-navy-100/70 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold tracking-[0.18em] text-gold-400 uppercase">
              Connect
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-2.5 text-navy-100/70 transition hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  <span className="break-all">{site.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="flex items-center gap-2.5 text-navy-100/70 transition hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-navy-100/70">
                <Pin className="h-4 w-4 shrink-0 text-gold-400" />
                {site.location}
              </li>
            </ul>

            <ul className="mt-6 flex flex-wrap gap-2">
              {site.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-navy-100/75 transition hover:border-gold-400/60 hover:text-white"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
              <li>
                <span className="inline-flex rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-navy-100/75">
                  {site.handle}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-navy-100/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name} · {site.location}
          </p>
          <p>A learning and empowerment initiative for children aged 5–17.</p>
        </div>
      </Container>
    </footer>
  );
}
