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

## Motion

Hand-written client components in `components/motion` — no animation library.
Scroll progress, split-text headline reveal, magnetic buttons, tilting cards,
a ticker, a cursor spotlight, parallax, a scrollspy rail, and back-to-top.
`components/LiteracyExplorer.tsx` is a WAI-ARIA tabs implementation (arrow
keys, Home/End).

Primitives live in `lib/hooks.ts`. Pointer effects are off on touch devices,
and everything degrades to a static layout under `prefers-reduced-motion`.
Cursor and scroll positions are written to CSS custom properties and refs
rather than React state, so tracking costs no re-renders.

## Contact form

The site is statically hosted, so the enquiry form composes a pre-filled email
to the club's official address rather than posting to a server. Swapping in a
form backend means replacing the `handleSubmit` body in
`components/ContactForm.tsx`.

## Deployment

The Vercel project `plethora-literacy-club` is **not** connected to this
repository — it was created by direct upload. Connect it once (Vercel →
project → Settings → Git → Connect Git Repository) and every push deploys
automatically.

## Open items

Things that need information we do not have, rather than code:

| Item | What is needed |
|---|---|
| Social profile URLs | `site.socials` in `lib/content.ts` has `href: null`, so the chips render as plain text. Add the real Facebook / LinkedIn / TikTok URLs to turn them back into links. |
| `site.url` | Points at `plethora-literacy-club.vercel.app`. Update if a custom domain is added — it drives canonical and Open Graph URLs. |
| Open Graph image | No `opengraph-image` yet, so link previews show text only. |
| Favicon | Still the Next.js default in `app/favicon.ico`. |
| Impact figures | `stats` and `heroFacts` carry the 2024–25 pilot numbers from the previous site. Refresh when newer figures exist. |
| Student work imagery | The impact page quotes the student-made wallet but has no photograph of it. |
| Safeguarding policy PDF | The page invites readers to request the full document by email; there is no file to download. |
