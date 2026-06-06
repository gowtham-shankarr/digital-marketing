# MarketLearn — Digital Marketing Learning Platform

A standalone learning app for digital marketing — from fundamentals to portfolio-ready campaigns.

## Topics Covered (12 tracks · 120 lessons)

- **Getting Started** — Funnel, journey, channels, goals, tools, ethics
- **Marketing Fundamentals** — Personas, positioning, SWOT, messaging
- **Content Marketing** — Strategy, blogging, copy, calendars
- **SEO** — Keywords, on-page, technical, local, links
- **Social Media** — Platforms, content, community, influencers
- **Email Marketing** — Lists, automation, deliverability
- **Paid Advertising** — Google Ads, Meta Ads, ROAS, retargeting
- **Analytics** — GA4, UTM, KPIs, dashboards
- **Brand & Creative** — Voice, Canva, ad creative
- **Conversion Optimization** — Landing pages, CRO, A/B tests
- **Strategy & Campaigns** — Planning, budgets, integrated launches
- **Portfolio Projects** — SEO audits, campaign plans, case studies

## Tech Stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui
- Browser localStorage progress (`dm-learning-progress`)
- Curriculum pipeline in `scripts/curriculum/`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Curriculum Commands

```bash
npm run curriculum:deep      # Regenerate deep content overrides
npm run curriculum:generate  # Write src/content/lessons/*.ts + tracks.ts
npm run build                # Full production build
```

## Deploy to Vercel

1. Push this folder to its own GitHub repository
2. Import at [vercel.com/new](https://vercel.com/new)
3. Framework: **Next.js** (auto-detected)
4. Deploy — no environment variables required

## Project Structure

```
digital-marketing/
├── src/app/           # Routes: /, /learn, /learn/[track]/[lesson]
├── src/components/    # UI + learning components
├── src/content/       # Generated tracks + lessons
└── scripts/curriculum/  # Source curriculum (12 track .mjs files)
```

## Features

- 120 lessons with tutorial, examples, practice, quiz, and notes
- Progress, bookmarks, streaks, export/import
- Command palette search (⌘K)
- Dark/light mode
