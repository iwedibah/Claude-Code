import type { Metadata } from "next";

import {
  LiteraciesSection,
  PageHero,
  PartnerSection,
  ProgrammesSection,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Our programmes",
  description:
    "Club inauguration, digital and financial literacy trainings, skill bootcamps, entrepreneurship workshops, train-the-trainer, digital teachers training, tailored learning materials, and consultation.",
};

export default function ProgrammesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our programmes"
        title="Practical programmes schools and partners can commission."
        lead="The club delivers five literacies through eight programme formats — from setting up a club inside your school to training the teachers who will run it after us."
        bullets={[
          "School clubs",
          "Bootcamps",
          "Workshops",
          "Teacher training",
          "Learning materials",
          "Consultation",
        ]}
      />

      <LiteraciesSection showDetail />
      <ProgrammesSection tone="sand" />
      <PartnerSection />
    </>
  );
}
