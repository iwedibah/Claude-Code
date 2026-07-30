# The Plethora Literacy Club — website

Redesign of the Plethora Literacy Club site, rebuilt to the *PLC Website Update
Brief*. Nigeria's first school-embedded multi-literacy club, working with
children aged 5–17.

## Stack

- **Next.js 16** (App Router, Turbopack) with TypeScript
- **Tailwind CSS v4** — design tokens defined in `app/globals.css` under `@theme`
- **next/font** — Fraunces (display) + Plus Jakarta Sans (body)
- Statically prerendered; no backend required

## Structure

```
app/
  page.tsx           Homepage — hero, pilot stats, about, literacies,
                     programmes, SDGs, board, safeguarding, partner CTA
  about/             The club as an organisation, mission, how we work
  programmes/        Five literacies + eight programme formats
  impact/            Pilot results and priority SDGs
  board/             Impact & Innovation Board, full profiles
  safeguarding/      Child safeguarding policy
  contact/           Club contact details and enquiry form
components/          Header, Footer, section blocks, UI primitives, icons
lib/content.ts       Single source of truth for all site copy
public/board/        Board member photographs (jpg + webp)
```

**All copy lives in `lib/content.ts`.** Change the email address, a board
member's bio, or a programme description there and it updates everywhere on the
site — nothing is hardcoded into a page.

## Brief compliance

| Brief item | Where |
|---|---|
| About page describes the organisation, not an individual | `app/about/page.tsx`, `lib/content.ts` → `about` |
| Contact section speaks for the club | `app/contact/page.tsx` |
| Official email `plethoraentworld@gmail.com` used site-wide | `lib/content.ts` → `site.email` |
| Team section titled "Impact & Innovation Board" | `components/BoardGrid.tsx`, `/board` |
| Member photos shown with each profile, faces unaltered | `public/board/` — resized and compressed only |
| Our Programmes (8 items) | `lib/content.ts` → `programmes` |
| Priority SDGs (primary / secondary / additional) | `lib/content.ts` → `sdgs` |
| Child Safeguarding Policy (6 principles) | `/safeguarding` |
| Institution-focused tone throughout | all copy |

Board photographs were only resized and re-encoded — no retouching, filtering,
or facial alteration was applied. Each has a per-person `focus` value in
`lib/content.ts` so the crop keeps the face well framed at every breakpoint.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Accessibility & motion

- Scroll reveals and stat count-ups are disabled under
  `prefers-reduced-motion: reduce`.
- Skip-to-content link, visible focus rings, labelled form controls, and
  `aria-current` on the active nav item.
- Body text is kept at or above a 4.5:1 contrast ratio.

## Contact form

The site is statically hosted, so the enquiry form composes a pre-filled email
to the club's official address rather than posting to a server. Swapping in a
form backend means replacing the `handleSubmit` body in
`components/ContactForm.tsx`.
