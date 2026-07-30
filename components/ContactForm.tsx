"use client";

import { useState, type FormEvent } from "react";

import { ArrowRight } from "@/components/ui";
import { site } from "@/lib/content";

const enquiryTypes = [
  "Bring the club to our school",
  "Fund a cohort",
  "Volunteer a skill",
  "Request learning materials",
  "Consultation",
  "Something else",
];

const fieldClass =
  "w-full rounded-2xl border border-navy-900/12 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-800/55 transition focus:border-gold-500 focus:outline-none";

/**
 * The site is statically hosted, so the form composes a pre-filled email to the
 * club's official address rather than posting to a backend that does not exist.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const name = String(data.get("name") ?? "");
    const organisation = String(data.get("organisation") ?? "");
    const enquiry = String(data.get("enquiry") ?? "");
    const message = String(data.get("message") ?? "");
    const replyTo = String(data.get("email") ?? "");

    const body = [
      `Name: ${name}`,
      organisation ? `Organisation / school: ${organisation}` : null,
      `Email: ${replyTo}`,
      `Enquiry: ${enquiry}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      `${enquiry} — ${name}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-navy-900"
          >
            Your name
          </label>
          <input
            id="name"
            name="name"
            required
            className={fieldClass}
            placeholder="Full name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-navy-900"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="organisation"
          className="mb-2 block text-sm font-medium text-navy-900"
        >
          School or organisation{" "}
          <span className="text-navy-800/65">(optional)</span>
        </label>
        <input
          id="organisation"
          name="organisation"
          className={fieldClass}
          placeholder="Where you are writing from"
        />
      </div>

      <div>
        <label
          htmlFor="enquiry"
          className="mb-2 block text-sm font-medium text-navy-900"
        >
          What is this about?
        </label>
        <select
          id="enquiry"
          name="enquiry"
          className={fieldClass}
          defaultValue={enquiryTypes[0]}
        >
          {enquiryTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-navy-900"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${fieldClass} resize-y`}
          placeholder="Tell the club about your learners, your term, and what you need."
        />
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-navy-700 sm:w-auto"
      >
        Send to the club
        <ArrowRight />
      </button>

      <p
        aria-live="polite"
        className="text-xs leading-relaxed text-navy-800/70"
      >
        {sent
          ? `Your email client should now be open with the message ready to send to ${site.email}. If nothing happened, write to us directly at that address.`
          : `This opens your email app with the message pre-filled to ${site.email}.`}
      </p>
    </form>
  );
}
