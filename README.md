# pedrolucaslco — Portfolio

Personal portfolio and blog built with Next.js 16, Tailwind CSS v4, and MDX.

## Sections

- **Hero** — bio, social links, and about
- **Why Hire Me** — capability cards
- **Projects** — filterable project grid
- **Blog** — latest posts preview
- **Support** — contribution links (Ko-fi, Buy Me a Coffee, PayPal)
- **Experience** — work timeline

## Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript 5.9 |
| Styling | Tailwind CSS v4 via `@tailwindcss/postcss` |
| Content | MDX via `next-mdx-remote/rsc` |
| Syntax Highlighting | `sugar-high` |
| Font | Geist |
| Analytics | Vercel Analytics + Speed Insights |

## Commands

```bash
npm run dev      # development server
npm run build    # production build + TypeScript check
npm run start    # start production server
```

## Project Structure

```
app/
├── blog/              # blog list + [slug] detail pages
│   └── posts/         # MDX blog posts
├── projects/          # project list + [slug] detail pages
│   └── list/          # MDX project entries
├── components/        # React components
│   ├── hero.tsx       # hero section
│   ├── nav.tsx        # sticky navbar
│   ├── timeline.tsx   # experience timeline
│   ├── contribute.tsx # contribution section
│   ├── support.tsx    # support placeholder
│   ├── project-cards.tsx
│   ├── blog-preview.tsx
│   ├── language-toggle.tsx
│   ├── theme-toggle.tsx
│   └── mdx.tsx        # MDX rendering (CustomMDX)
├── lib/
│   ├── i18n.tsx       # EN/PT-BR translations + context
│   └── utils.ts       # shared utilities
├── og/                # dynamic OG images
├── rss/               # RSS feed
├── sitemap.ts         # sitemap + robots
└── layout.tsx         # root layout
```

## Content

Blog posts and projects are written in MDX with custom-parsed frontmatter:

```mdx
---
title: My Title
publishedAt: 2024-01-01
summary: Description text
---
```

## Internationalization

EN and PT-BR via React context (`LanguageProvider`). Toggle in the navbar.

## Deploy

Designed for Vercel deployment.
