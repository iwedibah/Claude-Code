import Image from "next/image";

import Reveal from "@/components/Reveal";
import Tilt from "@/components/motion/Tilt";
import { board } from "@/lib/content";

/**
 * Impact & Innovation Board. Photos sit directly above each profile and are
 * rendered unretouched — only resized and compressed — with a per-person
 * focal point so faces stay naturally framed at every breakpoint.
 */
export default function BoardGrid({
  detailed = false,
  /** "h2" on the standalone board page, where the grid follows the page h1
   *  directly; "h3" when the grid sits under a section heading. */
  headingLevel: Heading = "h3",
}: {
  detailed?: boolean;
  headingLevel?: "h2" | "h3";
}) {
  return (
    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {board.map((member, i) => (
        <Reveal as="li" key={member.slug} delay={i * 70} className="h-full">
          <Tilt className="h-full rounded-3xl">
            <article
              id={member.slug}
              className="group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-navy-900/8 bg-white shadow-[0_1px_2px_rgba(10,32,56,0.04),0_20px_45px_-30px_rgba(10,32,56,0.4)] transition-shadow duration-300 hover:shadow-[0_1px_2px_rgba(10,32,56,0.05),0_30px_60px_-32px_rgba(10,32,56,0.5)]"
            >
              <div className="relative aspect-4/5 overflow-hidden bg-navy-50">
                <Image
                  src={member.photo}
                  alt={`${member.name}, ${member.role}`}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                  style={{ objectPosition: member.focus }}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-semibold tracking-wide text-navy-800 backdrop-blur-sm">
                  {member.country}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <Heading className="font-display text-xl leading-snug font-semibold text-navy-900">
                  {member.name}
                </Heading>
                <p className="mt-1.5 text-sm font-semibold text-gold-600">
                  {member.role}
                </p>
                <p
                  className={`text-pretty mt-4 text-sm leading-relaxed text-navy-800/70 ${
                    detailed ? "" : "line-clamp-4"
                  }`}
                >
                  {member.bio}
                </p>
              </div>
            </article>
          </Tilt>
        </Reveal>
      ))}
    </ul>
  );
}
