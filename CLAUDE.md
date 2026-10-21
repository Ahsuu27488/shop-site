# CLAUDE.md — shop-site

Bilingual (Urdu/English) website for the family kiryana store in Bandhi,
Sindh. Portfolio piece #1 for track 1 of Agency HQ (business docs live in
`../../`). Read `docs/brief.md` first. Also read `AGENTS.md`: this is
Next.js 16 with Cache Components; check `node_modules/next/dist/docs/` before
using any Next.js API you are unsure of.

## Stack

Next.js 16 (App Router, Turbopack, Cache Components) · React 19 · TypeScript ·
Tailwind CSS v4 · Vitest · pnpm · deploy on Vercel.

## Commands

| Task | Command |
|---|---|
| Dev server | `pnpm dev` |
| Build | `pnpm build` |
| Unit tests | `pnpm test` |
| Lint | `pnpm lint` |

## Structure

- `src/content/shop.ts` — ALL shop details, product list and UI strings (ur + en).
  Values marked `TBC` are placeholders the owner must confirm.
- `src/lib/order.ts` — builds the WhatsApp order message (unit-tested).
- `src/components/shop-page.tsx` — the page (server component), rendered for both languages.
- `src/components/order-builder.tsx` — client component: pick items → WhatsApp link.
- `src/app/page.tsx` (Urdu, `/`) and `src/app/en/page.tsx` (English, `/en`) —
  both `ensureStatic = "navigation"` (fully static).
- `docs/screenshots/` — Playwright screenshots used in the README and portfolio.

## Rules

- Text changes go in `src/content/shop.ts`, never hardcoded in components.
- Urdu uses Noto Nastaliq (tall glyphs): keep generous line-height.
- No prices on the site (rates change daily) — orders go through WhatsApp.
- No `new Date()` / request APIs in server components (keeps pages static).
- Design work follows `../../docs/design/workflow-brief.md` (anti-slop rules,
  3-width screenshot check).
- After changes: update `CHANGELOG.md` and `docs/`; keep `pnpm test` and
  `pnpm build` green; refresh screenshots if the UI changed.
