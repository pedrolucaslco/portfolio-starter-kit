# AGENTS.md

## Stack

- Next.js 16 + React 18 + TypeScript 5.9, App Router
- Tailwind CSS v4 via `@tailwindcss/postcss` — CSS-first config (`@import 'tailwindcss'`), no `tailwind.config.js`
- Content: MDX via `next-mdx-remote/rsc`, syntax highlighting via `sugar-high`
- Package manager: **npm** (lockfile: `package-lock.json`)

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | dev server (Turbopack by default) |
| `npm run build` | production build (also validates TypeScript) |
| `npm run start` | start production server |

No lint, typecheck, or test scripts exist. Use `npm run build` to verify changes.

## Content structure

- Blog posts: `app/blog/posts/*.mdx`
- Projects: `app/projects/list/*.mdx`
- Frontmatter is **custom-parsed** (no gray-matter). Format in MDX files:
  ```mdx
  ---
  title: My Title
  publishedAt: 2024-01-01
  summary: Description text
  ---
  ```
- `app/blog/utils.ts` and `app/section-template/utils.ts` are near-duplicates — blogs use the former, projects use the latter

## Key entrypoints

- `app/sitemap.ts` — exports `baseUrl`, used by RSS, OG images, sitemap, robots
- `app/og/route.tsx` — dynamic OG images via `next/og`
- `app/rss/route` — RSS feed at `/rss`
- `app/layout.tsx` — root layout with Geist font, Vercel Analytics, Speed Insights
