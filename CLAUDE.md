@AGENTS.md

# Portfolio Website — Project Guide

## Purpose
Personal portfolio/resume site for job applications as a Software/Web Developer.
Showcases: About Me, Projects/Portfolio, Skills, Experience & Education, Contact.
Primary content language: English.

## Tech Stack
- Next.js 16 (App Router — `app/` directory, not `pages/`)
- React 19 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/postcss`)
- ESLint 9 (`eslint-config-next`)

## Design Direction
Minimal, clean aesthetic: black/white/gray palette, strong typography,
generous whitespace, subtle accents only. Mobile-first, responsive.

## Site Structure (planned sections/routes)
- `/` — Hero + About Me summary
- `/projects` (or in-page section) — Portfolio grid with case-study links
- Skills — technical skills, tools, proficiency, presented inline or as a section
- Experience/Education — timeline-style section
- Contact — email/social links, optionally a form

## Conventions
- Use the App Router (`app/layout.tsx`, `app/page.tsx`); no `pages/` directory.
- Prefer Server Components by default; add `"use client"` only where interactivity is needed.
- Keep components in a `components/` (or `src/components/`) folder as they're introduced — none exist yet.
- Content (bio, project list, skills) should live in typed data files
  (e.g. `data/projects.ts`) rather than hardcoded in JSX, so it's easy to update.
- Use Tailwind utility classes; avoid introducing a separate CSS framework.
- Images/assets go in `public/`.

## Build & Deploy
- Run `npm run build` regularly while developing (not just before deploy) to
  catch type errors, lint failures, and broken routes early.
- The project should always be in a state where `npm run build` passes, so
  deploys stay smooth and predictable.

## Responsive Design
- Every layout/UI change must be checked at both mobile and desktop widths
  before considering it done — use browser dev tools device toolbar or resize
  the window (e.g. ~375px and ~1280px) to verify.
- Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) for breakpoint-specific
  adjustments; default (unprefixed) styles should target mobile first.
- Watch for: text wrapping/overflow, nav/menu usability on small screens,
  grid columns collapsing appropriately, and touch target sizing on mobile.

## Notes
- No portfolio content (bio, project list, resume text) exists yet — will need
  to be gathered from the user before pages can be filled in.
- `node_modules/next/dist/docs/` does contain real Next.js 16 docs — consult
  it for API specifics if anything in Next 16 behaves unexpectedly vs. training data.
