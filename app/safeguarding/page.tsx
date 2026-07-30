import type { Metadata } from "next";

import Reveal from "@/components/Reveal";
import { PageHero, SafeguardingSection } from "@/components/sections";
import { Container, Section, SectionHeading } from "@/components/ui";
import { safeguardingIntro, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Child safeguarding policy",
  description:
    "The Plethora Literacy Club is committed to protecting every child who participates in our programmes. Our safeguarding approach is built on prevention, accountability, dignity, and prompt action.",
};

const commitments = [
  {
    heading: "Who this policy covers",
    body: "Every child who takes part in a Plethora Literacy Club programme — in school clubs, bootcamps, workshops, and any activity we run or co-deliver with a partner. It applies to all staff, volunteers, facilitators, and partner personnel working with our participants.",
  },
  {
    heading: "How concerns are raised",
    body: "Any child, parent, teacher, staff member, or partner can raise a safeguarding concern directly with the club. Concerns can be raised in person to a club facilitator or in writing to the club's official email address. All reports are treated seriously and confidentially.",
  },
  {
    heading: "How we respond",
    body: "Reported concerns are acknowledged promptly, assessed by the club's leadership, and acted on according to our incident response protocol. Where a concern indicates a risk of harm, we act immediately and involve the appropriate authorities and the child's guardians.",
  },
  {
    heading: "Images and stories",
    body: "We collect consent before photographing or writing about a child. We do not publish identifying details alongside images of children, and we never present a child's circumstances as a fundraising device. Consent can be withdrawn at any time and we will remove the material.",
  },
];

export default function SafeguardingPage() {
  return (
    <>
      <PageHero
        eyebrow="Child safeguarding policy"
        title="Protecting every child who takes part in our programmes."
        lead={safeguardingIntro}
        bullets={["Prevention", "Accountability", "Dignity", "Prompt action"]}
      />

      <SafeguardingSection tone="sand" standalone />

      <Section tone="cream">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="In practice"
              title="How the policy works day to day."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {commitments.map((item, i) => (
              <Reveal key={item.heading} delay={i * 80}>
                <article className="h-full rounded-3xl border border-navy-900/8 bg-white p-7">
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    {item.heading}
                  </h3>
                  <p className="text-pretty mt-3 text-sm leading-relaxed text-navy-800/70">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-10 rounded-3xl bg-navy-900 p-8 text-white sm:p-10">
              <h3 className="font-display text-xl font-semibold sm:text-2xl">
                Raise a safeguarding concern
              </h3>
              <p className="text-pretty mt-3 max-w-2xl text-sm leading-relaxed text-navy-100/75">
                If you have a concern about the safety or wellbeing of a child
                in any of our programmes, contact the club directly. Reports are
                reviewed by the club&apos;s leadership and acted on swiftly.
              </p>
              <a
                href={`mailto:${site.email}?subject=Safeguarding%20concern`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-950 transition hover:-translate-y-0.5 hover:bg-gold-400"
              >
                {site.email}
              </a>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
