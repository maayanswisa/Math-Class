# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with Turbopack at localhost:3000
npm run build     # Production build
npm run lint      # Run ESLint
```

## Architecture

This is a **Next.js 15 App Router** single-page landing site for Maayan's math tutoring classes (Hebrew, RTL). There are no routes beyond the root — the entire site lives in `src/app/page.tsx`.

**Key files:**
- `src/app/page.tsx` — all content and components (single file, ~500 lines). Content arrays (`groupAdvantages`, `howItWorks`, `registrationSteps`, `credentials`, `testimonials`, `faqs`) are defined at module scope and mapped into sections.
- `src/app/layout.tsx` — sets `lang="he" dir="rtl"`, loads Rubik + Assistant fonts via `next/font/google`.
- `src/app/globals.css` — Tailwind v4 with `@theme` CSS variable tokens (colors, spacing). Custom animation classes: `animate-rise`, `animate-rise-delay-{1-3}`, `animate-drift`, `animate-soft-zoom`. The `.hero-grid` utility draws the decorative grid overlay.

**Design tokens** (CSS variables defined in `globals.css`):
- `--color-ink` / `--color-ink-soft` — body text
- `--color-foam` / `--color-mist` — alternating section backgrounds
- `--color-sea` / `--color-sea-deep` / `--color-leaf` — brand greens
- `--color-sand` — borders/dividers
- `--color-whatsapp` / `--color-whatsapp-hover` — CTA button

**WhatsApp CTA** — the phone number and pre-filled message are constants at the top of `page.tsx` (`WHATSAPP_NUMBER`, `WHATSAPP_MESSAGE`). All CTAs link to the same `WHATSAPP_URL`.

**Static assets** expected in `/public`: `hero-classroom.jpg`, `maayan.jpg`.

**Fonts:** Rubik (headings, via `--font-rubik`) and Assistant (body, via `--font-assistant`). Both include Hebrew + Latin subsets.
