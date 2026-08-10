import type { Metadata } from "next";

import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { Mail, Phone, Pin } from "@/components/Icons";
import { PageHero } from "@/components/sections";
import { Container, Section, SectionHeading } from "@/components/ui";
import { partnerPaths, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact the club",
  description: `Contact The Plethora Literacy Club about school partnerships, funding, volunteering, learning materials, and consultation. Email ${site.email}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to the club."
        lead="Whether you run a school, want to fund a cohort, or have a skill to offer children, The Plethora Literacy Club would like to hear from you. We reply to every genuine enquiry."
      />

      <Section tone="cream">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* Club contact details — organisation-facing */}
            <Reveal>
              <SectionHeading
                eyebrow="Club details"
                title="How to reach us."
                lead="The club is the point of contact for all enquiries, partnerships, and safeguarding matters."
              />

              <ul className="mt-9 space-y-3">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-start gap-4 rounded-2xl border border-navy-900/8 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-30px_rgba(10,32,56,0.45)]"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold-100 text-gold-600">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold tracking-wide text-navy-800/65 uppercase">
                        Official email
                      </span>
                      <span className="mt-1 block text-sm font-medium break-all text-navy-900">
                        {site.email}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="flex items-start gap-4 rounded-2xl border border-navy-900/8 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-30px_rgba(10,32,56,0.45)]"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-100 text-teal-700">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold tracking-wide text-navy-800/65 uppercase">
                        Phone
                      </span>
                      <span className="mt-1 block text-sm font-medium text-navy-900">
                        {site.phone}
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-4 rounded-2xl border border-navy-900/8 bg-white p-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy-100 text-navy-700">
                    <Pin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold tracking-wide text-navy-800/65 uppercase">
                      Based in
                    </span>
                    <span className="mt-1 block text-sm font-medium text-navy-900">
                      {site.location}
                    </span>
                  </span>
                </li>
              </ul>

              <div className="mt-8 rounded-2xl bg-sand p-6">
                <h3 className="text-xs font-semibold tracking-[0.18em] text-gold-600 uppercase">
                  Follow the club
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {site.socials.map((social) => {
                    const chip =
                      "inline-flex rounded-full border border-navy-900/12 bg-white px-4 py-2 text-sm font-medium text-navy-800";
                    return (
                      <li key={social.label}>
                        {social.href ? (
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className={`${chip} transition hover:border-navy-900/30`}
                          >
                            {social.label}
                          </a>
                        ) : (
                          <span className={chip}>{social.label}</span>
                        )}
                      </li>
                    );
                  })}
                  <li>
                    <span className="inline-flex rounded-full border border-navy-900/12 bg-white px-4 py-2 text-sm font-medium text-navy-800">
                      {site.handle}
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Enquiry form */}
            <Reveal delay={120}>
              <div className="rounded-[2rem] border border-navy-900/8 bg-white p-7 shadow-[0_1px_2px_rgba(10,32,56,0.04),0_30px_60px_-42px_rgba(10,32,56,0.5)] sm:p-9">
                <h2 className="font-display text-2xl font-semibold text-navy-900">
                  Send the club a message
                </h2>
                <p className="text-pretty mt-2.5 text-sm leading-relaxed text-navy-800/70">
                  Tell us what you need and we will come back with next steps.
                </p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* What you can contact us about */}
      <Section tone="sand">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Ways to work with the club"
              title="What people usually write to us about."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {partnerPaths.map((path, i) => (
              <Reveal key={path.title} delay={i * 90}>
                <article className="h-full rounded-3xl border border-navy-900/8 bg-white p-7">
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    {path.title}
                  </h3>
                  <p className="text-pretty mt-3 text-sm leading-relaxed text-navy-800/70">
                    {path.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
