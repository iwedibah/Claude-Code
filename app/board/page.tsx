import type { Metadata } from "next";

import BoardGrid from "@/components/BoardGrid";
import { PageHero, PartnerSection } from "@/components/sections";
import { Container, Section } from "@/components/ui";
import { board, boardIntro } from "@/lib/content";

export const metadata: Metadata = {
  title: "Impact & Innovation Board",
  description: boardIntro,
};

export default function BoardPage() {
  const countries = Array.from(new Set(board.map((m) => m.country)));

  return (
    <>
      <PageHero
        eyebrow="Impact & Innovation Board"
        title="Educators, strategists, mentors, and innovation leaders."
        lead={boardIntro}
        bullets={[`${board.length} members`, ...countries]}
      />

      <Section tone="cream">
        <Container>
          <BoardGrid detailed headingLevel="h2" />
        </Container>
      </Section>

      <PartnerSection />
    </>
  );
}
