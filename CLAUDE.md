# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Academic personal website for Xiting Zhuang (Research Assistant Professor, NDSU), deployed to GitHub Pages at <https://xiting-zhuang.github.io>.

The site was originally a Jekyll fork of [GuangLun2000/GuangLun2000.github.io](https://github.com/GuangLun2000/GuangLun2000.github.io), then migrated to **Next.js 14 (App Router) + Tailwind + TypeScript**, statically exported to `out/`.

## What is live vs. what is legacy

This is the most important thing to get right before editing.

**Live (Next.js — edits here change the deployed site):**

- `src/app/<route>/page.tsx` — pages (App Router)
- `src/components/*.tsx` — shared UI (Header, Footer, Timeline, etc.)
- `src/data/*.ts` — typed content (publications, experiences, grants, projects, teaching, news, citations, conferences, tradeflows)
- `src/app/globals.css`, `tailwind.config.ts` — styling
- `next.config.mjs`, `package.json`, `tsconfig.json`, `postcss.config.mjs`
- `.github/workflows/deploy.yml` — the actual deploy pipeline
- `public/` — static assets served at site root by Next
- `images/`, `file/`, `mypaper/` — referenced from Next pages, still served as-is

**Legacy (Jekyll — present in the repo but NOT deployed):**

- `_config.yml`, `Gemfile`, `Gemfile.lock`
- `_data/*.yml`, `_layouts/`, `_includes/`
- Root-level `*.md` pages (`index.md`, `publications.md`, `experiences.md`, `projects.md`, `teaching.md`, `fundings.md`, `contact.md`, `blogs.md`)
- `assets/css/style.scss`, `assets/css/modern.css`
- `archive/`, `backup/`

`.gitignore` explicitly labels the Jekyll outputs as "legacy". To update content (publications, experiences, grants, etc.), **edit `src/data/*.ts`, not `_data/*.yml`** — the YAML files are no longer wired to the deployed site. If a user asks for a content change, only touch the legacy files if they explicitly ask for the Jekyll version.

## Build & Development Commands

```bash
npm install             # Install JS dependencies (use `npm ci` in CI)
npm run dev             # Local dev server at http://localhost:3000
npm run build           # Static export to out/
npm run lint            # next lint
npm start               # Serve a built app (rarely needed — site is static-exported)
```

Node 20 in CI (see `deploy.yml`). No test suite exists.

## Architecture

**Static export, not SSR.** `next.config.mjs` sets `output: "export"` because GitHub Pages cannot run Node. Consequences:

- No `getServerSideProps`, no API routes, no middleware, no ISR.
- `images: { unoptimized: true }` — `next/image` works but does no optimization. Don't add features that depend on it.
- All routes must be statically resolvable. Dynamic routes need `generateStaticParams`.

**Content model.** Page components import typed arrays/objects from `src/data/*.ts` and render them. The data files export both an `interface` and the data itself (see [src/data/publications.ts](src/data/publications.ts) for the pattern). Adding content = appending an entry to the relevant `.ts` file; adding a new content type = new `.ts` file + new section in the corresponding `src/app/<route>/page.tsx`.

**Layout.** [src/app/layout.tsx](src/app/layout.tsx) is the root: it loads Inter + JetBrains Mono via `next/font/google`, wraps every page in `<Header />` and `<Footer />`, and forces dark mode (`<html lang="en" className="dark">`).

**Styling.** Tailwind only; the design tokens live in [tailwind.config.ts](tailwind.config.ts):

- Backgrounds: `bg-bg-primary` `#0a0a0a`, `bg-bg-surface` `#111`, `bg-bg-elevated` `#1a1a1a`
- Text: `text-text-primary` `#f0f0f0`, `text-text-secondary` `#888`, `text-text-muted` `#555`
- Accents: `accent-green` `#22c55e`, `accent-blue`, `accent-cyan`, `accent-orange`
- Custom animations: `fade-in`, `slide-up`, `slide-in-left`, `glow`, `typing-cursor`

Use these tokens instead of hard-coded hex; the SCSS palette in the legacy Jekyll files (`#2c3e50`/`#3498db`/`#e67e22`) is unrelated and should not leak into Next code.

**Path alias.** `@/*` → `src/*` (see `tsconfig.json`).

## Deployment

`git push origin main` triggers `.github/workflows/deploy.yml`:

1. `npm ci`
2. `npm run build` (writes `out/`)
3. Upload `out/` as a Pages artifact and deploy.

There is no Jekyll build in the pipeline. The `_site/` directory, if present, is stale local output.

## Conventions worth preserving

- Keep typed `interface` exports next to the data they describe in `src/data/`.
- Pages are server components by default; only mark `"use client"` when a component needs hooks/state (animations, theme toggle, etc.).
- Don't introduce server-only Next features — they will break the static export.
