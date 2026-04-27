# Xiting Zhuang — Personal Website

Source for <https://xiting-zhuang.github.io>.

Built with **Next.js 14** (App Router) + Tailwind + TypeScript, statically exported and deployed to GitHub Pages via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
npm run lint
```

Node 20.

## Editing content

Content lives in [`src/data/*.ts`](src/data/) (publications, experiences, grants, projects, teaching, news, etc.). Pages in [`src/app/<route>/page.tsx`](src/app/) read from those files.

See [CLAUDE.md](CLAUDE.md) for the full architecture and the live-vs-legacy file map.

## Acknowledgements

This site started as a Jekyll fork of [GuangLun2000/GuangLun2000.github.io](https://github.com/GuangLun2000/GuangLun2000.github.io) by Hanlin Cai, and was later rewritten in Next.js.
