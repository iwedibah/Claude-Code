import type { Metadata } from "next";

import Reveal from "@/components/Reveal";
import StatBand from "@/components/StatBand";
import { LiteraciesSection, PageHero, PartnerSection } from "@/components/sections";
import { Container, Section, SectionHeading } from "@/components/ui";
import { about, stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "About the club",
  description:
    "The Plethora Literacy Club is a learning and empowerment initiative committed to helping children build practical life skills early — financial literacy, digital literacy, entrepreneurship, leadership, communication, and creative skills.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the club"
        title="A learning and empowerment initiative built around children."
        lead={about.intro}
        bullets={[
          "Ages 5–17",
          "Embedded in the school week",
          "Five literacies every term",
          "Abuja, expanding nationally",
        ]}
      />

      {/* Mission */}
      <Section tone="cream">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <SectionHeading eyebrow="Our mission" title="What the club exists to do." />
            </Reveal>

            <Reveal delay={120}>
              <p className="text-pretty font-display text-xl leading-relaxed font-medium text-navy-900 sm:text-2xl">
                To raise a generation of thinkers, leaders, and problem solvers
                by giving children the knowledge, confidence, and practical
                tools they need to thrive.
              </p>
              <p className="text-pretty mt-6 text-base leading-relaxed text-navy-800/75">
                {about.mission}
              </p>

              <ul className="mt-8 flex flex-wrap gap-2.5">
                {about.channels.map((channel) => (
                  <li
                    key={channel}
                    className="rounded-full border border-navy-900/10 bg-white px-4 py-2 text-sm font-medium text-navy-800/80"
                  >
                    {channel}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* How we work */}
      <Section tone="sand">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="Four commitments that shape every session."
              lead="The club is designed as an organisation — a repeatable programme that a school, a partner, or a community can rely on term after term."
            />
          </Reveal>

          <ul className="mt-14 grid gap-6 md:grid-cols-2">
            {about.values.map((value, i) => (
              <Reveal as="li" key={value.title} delay={i * 90}>
                <article className="h-full rounded-3xl border border-navy-900/8 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-32px_rgba(10,32,56,0.4)]">
                  <span className="font-display text-sm font-semibold text-gold-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-3 text-xl font-semibold text-navy-900">
                    {value.title}
                  </h3>
                  <p className="text-pretty mt-3 text-sm leading-relaxed text-navy-800/70">
                    {value.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <LiteraciesSection showDetail />

      {/* Where we are */}
      <Section tone="navy">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Where the club is today"
              title="Two terms delivered. One curriculum tested. Hundreds of children reached."
              tone="light"
            />
          </Reveal>
          <StatBand stats={stats} className="mt-12" />
        </Container>
      </Section>

      <PartnerSection />
    </>
  );
}
