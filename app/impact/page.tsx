import type { Metadata } from "next";

import Reveal from "@/components/Reveal";
import StatBand from "@/components/StatBand";
import { Check } from "@/components/Icons";
import { PageHero, PartnerSection, SdgSection } from "@/components/sections";
import { Container, Section, SectionHeading } from "@/components/ui";
import { stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "Impact & SDGs",
  description:
    "Pilot results from The Plethora Literacy Club, and the Sustainable Development Goals our programmes advance — SDG 4 and SDG 8 as primary goals.",
};

const pilotHighlights = [
  "Two full academic terms delivered inside Abuja schools",
  "A complete curriculum book written, tested in class, and print-ready",
  "Four of the five programme pillars delivered across the pilot",
  "Student-made products, including wallets built in upcycling sessions",
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="Early results. Real students. Real change."
        lead="Our pilot ran across two academic terms in Abuja schools. These are the numbers behind it, and the Global Goals our work is aligned to."
      />

      <Section tone="navy" className="py-16 sm:py-20">
        <Container>
          <StatBand stats={stats} />
        </Container>
      </Section>

      <Section tone="cream">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Pilot results · 2024–2025"
                title="What the first two terms produced."
                lead="The pilot was designed to answer one question: can five literacies be taught inside an ordinary school term, and will children use them? The answer was yes."
              />
            </Reveal>

            <Reveal delay={120}>
              <ul className="space-y-4">
                {pilotHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3.5 rounded-2xl border border-navy-900/8 bg-white p-5"
                  >
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal-100 text-teal-700">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-pretty text-sm leading-relaxed text-navy-800/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-3xl bg-navy-900 p-7 text-white">
                <p className="font-display text-pretty text-xl leading-relaxed font-medium">
                  &ldquo;This wallet was made by a Plethora student.&rdquo;
                </p>
                <p className="mt-3 text-sm text-navy-100/70">
                  Student work from the upcycling and crafts pillar — designed,
                  built, and finished in club sessions.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <SdgSection />
      <PartnerSection />
    </>
  );
}
