# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Jekyll-based academic personal website for Xiting Zhuang, hosted on GitHub Pages. Forked from [GuangLun2000/GuangLun2000.github.io](https://github.com/GuangLun2000/GuangLun2000.github.io).

## Build & Development Commands

```bash
bundle install          # Install Ruby dependencies
jekyll serve            # Local dev server (http://localhost:4000)
jekyll build            # Build static site to _site/
```

Ruby version: 3.1.6 (see `.ruby-version`).

## Architecture

**Data-driven content model**: Pages don't hardcode content. Instead, structured data lives in `_data/*.yml` files, and Markdown pages use Liquid templates to render them.

- `_data/publications.yml` → `publications.md`
- `_data/experiences.yml` → `experiences.md`
- `_data/projects.yml` → `projects.md`
- `_data/teaching.yml` → `teaching.md`
- `_data/grants.yml` → `fundings.md`
- `_data/news.yml` → rendered on homepage via `_layouts/home.html`
- `_data/navigation.yml` → site-wide nav bar

**To update site content** (publications, projects, etc.), edit the corresponding `_data/*.yml` file — not the Markdown page.

**Layout hierarchy**: `_layouts/default.html` is the base (includes nav, footer, head). Other layouts (`home.html`, `page.html`, `post.html`) extend it.

**Styling**: Dual CSS system — `assets/css/style.scss` (SCSS with variables/mixins) and `assets/css/modern.css` (CSS custom properties). Color palette: primary #2c3e50, secondary #3498db, accent #e67e22.

**Static files**: PDFs/documents in `file/`, research papers in `mypaper/`, images in `images/`.

**Blog posts**: Located in `blogs/` directory (primarily Chinese content).

## Deployment

Push to `main` branch → GitHub Pages auto-builds and deploys to https://xiting-zhuang.github.io.

## Key Config

- `_config.yml`: Site metadata, owner info, analytics (GA: G-T5N5JY1E21), Disqus comments, permalink structure
- `Gemfile`: Uses `github-pages` gem with `jekyll-sitemap`, `jekyll-seo-tag`, `jekyll-feed` plugins
