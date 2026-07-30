import Link from "next/link";

import BoardGrid from "@/components/BoardGrid";
import LiteracyExplorer from "@/components/LiteracyExplorer";
import Reveal from "@/components/Reveal";
import StatBand from "@/components/StatBand";
import { Icon } from "@/components/Icons";
import Magnetic from "@/components/motion/Magnetic";
import Marquee from "@/components/motion/Marquee";
import Parallax from "@/components/motion/Parallax";
import SectionNav from "@/components/motion/SectionNav";
import SplitText from "@/components/motion/SplitText";
import Spotlight from "@/components/motion/Spotlight";
import {
  PartnerSection,
  ProgrammesSection,
  SafeguardingSection,
  SdgSection,
} from "@/components/sections";
import {
  ArrowRight,
  ButtonLink,
  Container,
  Eyebrow,
  Section,
  SectionHeading,
} from "@/components/ui";
import {
  about,
  boardIntro,
  heroFacts,
  literacies,
  programmes,
  stats,
} from "@/lib/content";

const sectionNav = [
  { id: "about", label: "About" },
  { id: "literacies", label: "Literacies" },
  { id: "programmes", label: "Programmes" },
  { id: "sdgs", label: "SDGs" },
  { id: "board", label: "Board" },
  { id: "safeguarding", label: "Safeguarding" },
  { id: "partner", label: "Partner" },
];

export default function HomePage() {
  return (
    <>
      <SectionNav items={sectionNav} />
      <Hero />
      <TickerBand />
      <PilotBand />
      <AboutSection />
      <LiteraciesSection />
      <ProgrammesSection tone="sand" />
      <SdgSection />
      <BoardSection />
      <SafeguardingSection />
      <PartnerSection />
    </>
  );
}

/* ---------------------------------------------------------------- Hero */

function Hero() {
  return (
    <Spotlight className="overflow-hidden">
      <section className="relative pt-10 pb-20 sm:pt-16 sm:pb-28">
        {/* Ambient colour wash */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-gold-200/50 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-teal-100/70 blur-3xl"
        />

        <Container className="relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>
                  Nigeria&apos;s first · school-embedded · multi-literacy club
                </Eyebrow>
              </Reveal>

              <h1 className="font-display text-balance text-[2.6rem] leading-[1.05] font-semibold text-navy-900 sm:text-6xl lg:text-[4.1rem]">
                <SplitText
                  text="The Plethora"
                  as="span"
                  className="block"
                  delay={100}
                />
                <span className="relative inline-block">
                  <SplitText text="Literacy Club" as="span" delay={280} />
                  <svg
                    aria-hidden
                    viewBox="0 0 300 12"
                    preserveAspectRatio="none"
                    className="absolute -bottom-1 left-0 h-2.5 w-full text-gold-400"
                  >
                    <path
                      d="M2 8.5C60 3 120 2.5 180 5s90 4 118 1.5"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                      strokeDasharray="320"
                      style={{
                        animation:
                          "draw-underline 1.1s cubic-bezier(.22,1,.36,1) .75s both",
                      }}
                    />
                  </svg>
                </span>
              </h1>

              <Reveal delay={520}>
                <p className="text-pretty mt-7 max-w-xl text-base leading-relaxed text-navy-800/75 sm:text-lg">
                  A learning and empowerment initiative committed to helping
                  children build practical life skills early — financial
                  literacy, digital literacy, entrepreneurship, leadership,
                  communication, and hands-on creative skills.
                </p>
              </Reveal>

              <Reveal delay={600}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Magnetic>
                    <ButtonLink
                      href="/contact"
                      variant="primary"
                      className="group"
                    >
                      Partner with your school
                      <ArrowRight />
                    </ButtonLink>
                  </Magnetic>
                  <Magnetic strength={0.22}>
                    <ButtonLink href="/programmes" variant="ghost">
                      See the programme
                    </ButtonLink>
                  </Magnetic>
                </div>
              </Reveal>

              <Reveal delay={680}>
                <dl className="mt-14 grid max-w-lg grid-cols-2 gap-x-8 gap-y-7 border-t border-navy-900/10 pt-8 sm:grid-cols-4 sm:gap-x-4">
                  {heroFacts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="sr-only">{fact.label}</dt>
                      <dd>
                        <span className="font-display block text-2xl leading-none font-semibold text-navy-900">
                          {fact.value}
                        </span>
                        <span className="mt-2 block text-xs leading-snug text-navy-800/70">
                          {fact.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            {/* Programme card cluster */}
            <Reveal delay={300} className="relative">
              <Parallax speed={0.05}>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Extra bottom padding leaves room for the floating stat
                      card to overlap without covering the last pillar. */}
                  <div className="dotted relative overflow-hidden rounded-[2rem] bg-navy-900 p-7 pb-24 text-white shadow-[0_40px_80px_-40px_rgba(10,32,56,0.6)] sm:p-9 sm:pb-28">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -top-16 -right-12 h-56 w-56 rounded-full bg-gold-500/25 blur-3xl"
                    />
                    <div className="relative">
                      <p className="text-xs font-semibold tracking-[0.18em] text-gold-400 uppercase">
                        Every term, every club
                      </p>
                      <h2 className="font-display mt-3 text-2xl leading-snug font-semibold">
                        The five literacies
                      </h2>

                      <ul className="mt-7 space-y-3">
                        {literacies.map((pillar, i) => (
                          <li
                            key={pillar.slug}
                            className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 transition duration-300 hover:translate-x-1 hover:border-gold-400/40 hover:bg-white/10"
                            style={{
                              animation: `panel-in .6s cubic-bezier(.22,1,.36,1) ${420 + i * 90}ms both`,
                            }}
                          >
                            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gold-500/15 text-gold-400">
                              <Icon
                                name={pillar.icon}
                                className="h-4.5 w-4.5"
                              />
                            </span>
                            <span className="text-sm font-medium">
                              {pillar.title}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Floating proof card */}
                  <div className="animate-float absolute right-4 -bottom-7 w-56 rounded-2xl border border-navy-900/8 bg-white p-5 shadow-[0_24px_50px_-24px_rgba(10,32,56,0.45)] sm:-right-6">
                    <p className="font-display text-3xl leading-none font-semibold text-navy-900">
                      300+
                    </p>
                    <p className="mt-2 text-xs leading-snug text-navy-800/70">
                      Students currently enrolled across Abuja schools
                    </p>
                  </div>
                </div>
              </Parallax>
            </Reveal>
          </div>
        </Container>
      </section>
    </Spotlight>
  );
}

/* ------------------------------------------------------------- Ticker */

function TickerBand() {
  const items = [
    ...literacies.map((l) => l.title),
    ...programmes.slice(0, 5).map((p) => p.title),
    "Ages 5–17",
    "Abuja, Nigeria",
  ];

  return (
    <div className="border-y border-white/5 bg-navy-950 py-5">
      <Marquee items={items} />
    </div>
  );
}

/* ------------------------------------------------------------ Pilot band */

function PilotBand() {
  return (
    <Section tone="navy" className="overflow-hidden py-16 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-teal-500/12 blur-3xl"
      />
      <Container className="relative">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow tone="light">Pilot results · 2024–2025</Eyebrow>
              <h2 className="font-display text-balance text-2xl leading-tight font-semibold text-white sm:text-3xl">
                Early results. Real students. Real change.
              </h2>
            </div>
            <Link
              href="/impact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-gold-400"
            >
              See the full impact report
              <ArrowRight />
            </Link>
          </div>
        </Reveal>

        <StatBand stats={stats} className="mt-12" />
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- About */

function AboutSection() {
  return (
    <Section id="about" tone="cream">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow={about.eyebrow} title={about.heading} />
            <p className="text-pretty mt-6 text-base leading-relaxed text-navy-800/75">
              {about.intro}
            </p>
            <Magnetic strength={0.2} className="mt-8">
              <ButtonLink href="/about" variant="ghost" className="group">
                More about the club
                <ArrowRight />
              </ButtonLink>
            </Magnetic>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-navy-900/8 bg-white p-7 shadow-[0_1px_2px_rgba(10,32,56,0.04),0_28px_60px_-40px_rgba(10,32,56,0.45)] sm:p-9">
              <h3 className="text-xs font-semibold tracking-[0.18em] text-gold-600 uppercase">
                Our mission
              </h3>
              <p className="text-pretty font-display mt-4 text-xl leading-relaxed font-medium text-navy-900 sm:text-[1.4rem]">
                To raise a generation of thinkers, leaders, and problem solvers
                by giving children the knowledge, confidence, and practical
                tools they need to thrive.
              </p>
              <p className="text-pretty mt-5 text-sm leading-relaxed text-navy-800/70">
                We work through school clubs, bootcamps, trainings, workshops,
                tailored learning materials, and collaborative programmes that
                make learning practical, engaging, and future-focused.
              </p>

              <ul className="mt-7 flex flex-wrap gap-2">
                {about.channels.map((channel) => (
                  <li
                    key={channel}
                    className="rounded-full bg-sand px-3.5 py-1.5 text-xs font-medium text-navy-800/80 transition hover:bg-sand-dark"
                  >
                    {channel}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/* ----------------------------------------------------------- Literacies */

function LiteraciesSection() {
  return (
    <Section id="literacies" tone="white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we teach"
            title="Five literacies. One programme. Built for life."
            lead="Every term, children move through five connected pillars — each one practical, hands-on, and designed to be used long before adulthood makes it urgent. Pick a pillar to explore it."
          />
        </Reveal>

        <Reveal delay={120} className="mt-14">
          <LiteracyExplorer />
        </Reveal>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- Board */

function BoardSection() {
  return (
    <Section id="board" tone="sand">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Impact & Innovation Board"
            title="The people who make the club work."
            lead={boardIntro}
          />
        </Reveal>

        <div className="mt-14">
          <BoardGrid />
        </div>
      </Container>
    </Section>
  );
}
