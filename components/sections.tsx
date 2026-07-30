import Link from "next/link";

import Reveal from "@/components/Reveal";
import { Check, Icon } from "@/components/Icons";
import {
  ArrowRight,
  ButtonLink,
  Card,
  Container,
  Section,
  SectionHeading,
} from "@/components/ui";
import {
  literacies,
  partnerPaths,
  programmes,
  safeguarding,
  safeguardingIntro,
  sdgTiers,
  sdgs,
  site,
} from "@/lib/content";

/* ------------------------------------------------------ Five literacies */

const accentStyles = {
  gold: "bg-gold-100 text-gold-600 group-hover:bg-gold-500 group-hover:text-white",
  teal: "bg-teal-100 text-teal-700 group-hover:bg-teal-600 group-hover:text-white",
  navy: "bg-navy-100 text-navy-700 group-hover:bg-navy-700 group-hover:text-white",
  coral:
    "bg-coral-100 text-coral-600 group-hover:bg-coral-500 group-hover:text-white",
} as const;

export function LiteraciesSection({
  showDetail = false,
}: {
  showDetail?: boolean;
}) {
  return (
    <Section id="literacies" tone="white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we teach"
            title="Five literacies. One programme. Built for life."
            lead="Every term, children move through five connected pillars — each one practical, hands-on, and designed to be used long before adulthood makes it urgent."
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {literacies.map((pillar, i) => (
            <Reveal as="li" key={pillar.slug} delay={i * 80}>
              <article
                id={pillar.slug}
                className="group flex h-full scroll-mt-28 flex-col rounded-3xl border border-navy-900/8 bg-cream p-7 transition duration-300 hover:-translate-y-1 hover:border-navy-900/15 hover:shadow-[0_24px_50px_-32px_rgba(10,32,56,0.45)]"
              >
                <span
                  className={`grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 ${accentStyles[pillar.accent]}`}
                >
                  <Icon name={pillar.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-display mt-5 text-xl font-semibold text-navy-900">
                  {pillar.title}
                </h3>
                <p className="text-pretty mt-2.5 text-sm leading-relaxed text-navy-800/70">
                  {pillar.summary}
                </p>
                {showDetail ? (
                  <p className="text-pretty mt-3 border-t border-navy-900/8 pt-3 text-sm leading-relaxed text-navy-800/70">
                    {pillar.detail}
                  </p>
                ) : null}
              </article>
            </Reveal>
          ))}

          <Reveal as="li" delay={literacies.length * 80}>
            <Link
              href="/programmes"
              className="group flex h-full flex-col justify-between rounded-3xl bg-navy-900 p-7 text-white transition duration-300 hover:-translate-y-1 hover:bg-navy-800"
            >
              <div>
                <h3 className="font-display text-xl font-semibold">
                  See the full programme
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy-100/70">
                  Explore all five pillars and the eight ways we deliver them to
                  schools and communities.
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-400">
                Explore programmes
                <ArrowRight />
              </span>
            </Link>
          </Reveal>
        </ul>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------- Programmes */

export function ProgrammesSection({
  tone = "cream",
}: {
  tone?: "cream" | "sand";
}) {
  return (
    <Section id="programmes" tone={tone}>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our programmes"
            title="Eight ways we work with schools and communities."
            lead="From setting up a club to training the teachers who run it, each programme is a complete piece of work a school or partner can commission on its own."
          />
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {programmes.map((programme, i) => (
            <Reveal as="li" key={programme.title} delay={i * 60}>
              <article className="group flex h-full gap-5 rounded-3xl border border-navy-900/8 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-navy-900/15 hover:shadow-[0_24px_50px_-32px_rgba(10,32,56,0.4)] sm:p-7">
                <span className="font-display grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-navy-900 text-sm font-semibold text-gold-400 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-950">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg leading-snug font-semibold text-navy-900">
                    {programme.title}
                  </h3>
                  <p className="text-pretty mt-2 text-sm leading-relaxed text-navy-800/70">
                    {programme.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ---------------------------------------------------------------- SDGs */

export function SdgSection() {
  return (
    <Section id="sdgs" tone="white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our work and priority SDGs"
            title="Aligned to the Global Goals — and honest about which ones."
            lead="We name the goals our programmes move directly, the ones our outcomes contribute to, and the ones we advance through how we deliver."
          />
        </Reveal>

        <div className="mt-14 space-y-10">
          {sdgTiers.map((tier, tierIndex) => {
            const goals = sdgs.filter((g) => g.tier === tier.tier);
            return (
              <Reveal key={tier.tier} delay={tierIndex * 90}>
                <div className="rounded-3xl border border-navy-900/8 bg-cream p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="font-display text-lg font-semibold text-navy-900">
                      {tier.tier} SDGs
                    </h3>
                    <p className="text-sm text-navy-800/70">{tier.note}</p>
                  </div>

                  <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {goals.map((goal) => (
                      <li key={goal.number}>
                        <div
                          className="flex h-full items-center gap-4 rounded-2xl p-4 text-white transition duration-300 hover:-translate-y-0.5"
                          style={{ backgroundColor: goal.color }}
                        >
                          <span className="font-display grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/15 text-lg font-semibold">
                            {goal.number}
                          </span>
                          <span className="text-sm leading-snug font-semibold">
                            {goal.title}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------- Safeguarding */

export function SafeguardingSection({
  tone = "navy",
  /** The dedicated policy page states the intro and the contact CTA itself. */
  standalone = false,
}: {
  tone?: "navy" | "sand";
  standalone?: boolean;
}) {
  const isNavy = tone === "navy";

  return (
    <Section id="safeguarding" tone={tone} className="overflow-hidden">
      {isNavy ? (
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"
        />
      ) : null}

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Child safeguarding policy"
            title="Every child in our programmes is protected by design."
            lead={
              standalone
                ? "Six principles govern how we plan, staff, and run every activity involving a child."
                : safeguardingIntro
            }
            tone={isNavy ? "light" : "dark"}
          />
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {safeguarding.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 70}>
              <article
                className={`flex h-full flex-col rounded-3xl p-6 transition duration-300 hover:-translate-y-1 ${
                  isNavy
                    ? "border border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
                    : "border border-navy-900/8 bg-white hover:shadow-[0_24px_50px_-32px_rgba(10,32,56,0.4)]"
                }`}
              >
                <span
                  className={`grid h-11 w-11 place-items-center rounded-2xl ${
                    isNavy
                      ? "bg-gold-500/15 text-gold-400"
                      : "bg-teal-100 text-teal-700"
                  }`}
                >
                  <Icon name={item.icon} className="h-5.5 w-5.5" />
                </span>
                <h3
                  className={`font-display mt-5 text-lg font-semibold ${
                    isNavy ? "text-white" : "text-navy-900"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-pretty mt-2.5 text-sm leading-relaxed ${
                    isNavy ? "text-navy-100/70" : "text-navy-800/70"
                  }`}
                >
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>

        {standalone ? null : (
          <Reveal delay={200}>
            <div
              className={`mt-10 flex flex-col gap-4 rounded-3xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7 ${
                isNavy ? "bg-white/[0.06]" : "bg-navy-900 text-white"
              }`}
            >
              <p className="text-pretty max-w-2xl text-sm leading-relaxed text-navy-100/80">
                To raise a safeguarding concern, or to request our full policy
                document, write to the club at{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold text-gold-400 underline underline-offset-4"
                >
                  {site.email}
                </a>
                .
              </p>
              <ButtonLink
                href="/safeguarding"
                variant="secondary"
                className="group shrink-0"
              >
                Read the policy
                <ArrowRight />
              </ButtonLink>
            </div>
          </Reveal>
        )}
      </Container>
    </Section>
  );
}

/* ----------------------------------------------------------------- CTA */

export function PartnerSection() {
  return (
    <Section id="partner" tone="sand">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Get involved"
            title="Three ways to be part of this."
            lead="Whether you run a school, fund impact, or want to volunteer your skills — there is a place for you in the club."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {partnerPaths.map((path, i) => (
            <Reveal key={path.title} delay={i * 90}>
              <Card className="flex h-full flex-col transition duration-300 hover:-translate-y-1">
                <h3 className="font-display text-xl font-semibold text-navy-900">
                  {path.title}
                </h3>
                <p className="text-pretty mt-3 flex-1 text-sm leading-relaxed text-navy-800/70">
                  {path.body}
                </p>
                <Link
                  href="/contact"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900"
                >
                  {path.action}
                  <ArrowRight />
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220}>
          <div className="dotted relative mt-12 overflow-hidden rounded-[2rem] bg-navy-900 p-8 text-white sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -bottom-20 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl"
            />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h3 className="font-display text-balance text-2xl leading-tight font-semibold sm:text-3xl">
                  Bring the Plethora Literacy Club to your school this term.
                </h3>
                <p className="text-pretty mt-4 text-sm leading-relaxed text-navy-100/75 sm:text-base">
                  Tell us about your learners and we will come back with a
                  delivery plan, a schedule, and what it takes to run the club
                  well.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0 lg:flex-col xl:flex-row">
                <ButtonLink
                  href="/contact"
                  variant="secondary"
                  className="group"
                >
                  Partner with your school
                  <ArrowRight />
                </ButtonLink>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/5"
                >
                  Email the club
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/* --------------------------------------------------------- Page header */

export function PageHero({
  eyebrow,
  title,
  lead,
  bullets,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  bullets?: readonly string[];
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 pt-16 pb-20 text-white sm:pt-20 sm:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 -right-20 h-96 w-96 rounded-full bg-gold-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-teal-500/12 blur-3xl"
      />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            as="h1"
            eyebrow={eyebrow}
            title={title}
            lead={lead}
            tone="light"
          />
        </Reveal>

        {bullets?.length ? (
          <Reveal delay={140}>
            <ul className="mt-9 flex flex-wrap gap-2.5">
              {bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-sm text-navy-100/85"
                >
                  <Check className="h-4 w-4 text-gold-400" />
                  {bullet}
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
