import type { PlaybookItem } from "@/lib/playbook-types";

export const playbookItems: PlaybookItem[] = [
  {
    slug: "distribution-audit",
    title: "Distribution Audit",
    summary: "Score every channel by ownership, effort, and primary metric.",
    category: "distribution",
    type: "template",
    template: `| Channel | Owned? | Weekly effort | Primary metric |
|---------|--------|---------------|----------------|
| Email list | Yes | | List growth % |
| Primary social | Partial | | Engagement rate |
| SEO/blog | Yes | | Organic sessions |`,
    checklist: [
      "Pick ONE primary distribution channel for 90 days",
      "Define audience-to-ownership path (social → email)",
      "Document hook formula for next 10 posts",
      "Set content velocity target (posts/week)",
      "Track referral or share metric weekly",
    ],
    relatedLesson: {
      track: "distribution-growth",
      slug: "distribution-as-a-moat-in-an-ai-world",
    },
    source: "MMS",
  },
  {
    slug: "20-distribution-principles",
    title: "20 Distribution Principles",
    summary: "Framework for building a distribution moat in an AI world.",
    category: "distribution",
    type: "framework",
    template: `| # | Principle | One-line meaning |
|---|-----------|------------------|
| 1 | AI-proof model | Trust + audience > tech |
| 2 | Zero-to-one channel | Crush ONE platform first |
| 3 | 1,000 true fans | Depth beats vanity followers |
| 4 | Content velocity | Ship often; perfect later |
| 5 | Write the playbook | Early channels = arbitrage |
| 6 | Referral physics | Sharing must reward both sides |
| 7 | Platform arbitrage | Ride platforms boosting creators |
| 8 | Micro-value bridges | Small posts between big pieces |
| 9 | Audience → ownership | Email/community > algorithm |
| 10 | Audience-talent stack | Your skill × their need |
| 11 | Feedback loops | Audience improves product |
| 12 | Response rate edge | Reply to grow (first 10K) |
| 13 | AI multiplication | One idea → many formats |
| 14 | Value-stack content | Idea + example + proof + CTA |
| 15 | First-principles sharing | Psychology > copycat tactics |
| 16 | Cross-pollination | Overlap 5–10 adjacent audiences |
| 17 | Distribution equity | Followers compound |
| 18 | Hook engineering | Hook → value → next step |
| 19 | Community ownership | Status for contributors |
| 20 | Distribution attractant | Reach pulls talent & partners |`,
    checklist: [
      "List 3 channels you could own — pick ONE for 90 days",
      "Write why competitors cannot copy your distribution",
      "Move one social CTA to email capture this week",
      "Rank your top 3 principles to execute this quarter",
    ],
    relatedLesson: {
      track: "distribution-growth",
      slug: "distribution-as-a-moat-in-an-ai-world",
    },
    source: "MMS",
  },
  {
    slug: "icp-definition-sheet",
    title: "ICP Definition Sheet",
    summary: "One-pager for firmographics, triggers, persona, and disqualifiers.",
    category: "icp",
    type: "template",
    template: `**Firmographics:** Industry, company size, geography, tech stack
**Triggers:** Recent funding, hiring, tech change
**Persona:** Title, pains, objections
**Disqualifiers:** Who we do NOT sell to`,
    checklist: [
      "Run TAM estimate in Apollo or similar",
      "Document ICP in shared Notion page",
      "Build waterfall enrichment order",
      "Verify 10 sample emails before scaling",
      "Score 50 accounts against ICP criteria",
    ],
    relatedLesson: {
      track: "icp-list-building",
      slug: "icp-list-building-protocol-overview",
    },
    source: "MMS",
  },
  {
    slug: "icp-7-step-protocol",
    title: "7-Step ICP List Building Protocol",
    summary: "RevGrowth workflow from TAM sizing to AI lead scoring.",
    category: "icp",
    type: "framework",
    template: `| Step | Name | What you do | Example tools |
|------|------|-------------|---------------|
| 1 | **TAM assessment** | Size market | GPT research, DiscoLike, Apollo |
| 2 | **ICP research (AI)** | Segments + personas | GPT-4, Claude, Claygent |
| 3 | **Client feedback** | Validate with buyers | Interviews, CRM notes |
| 4 | **Scrape TAM data** | Firmographics, tech, people | Crunchbase, BuiltWith, Apify |
| 5 | **Multi-provider** | No single source has 100% | Apollo + PandaMatch + PitchBook |
| 6 | **Waterfall enrichment** | Email until verified | Apollo → Prospeo → Icypeas → LeadMagic |
| 7 | **Score TAM** | AI fit scoring | Clay Claygent, intent signals |`,
    checklist: [
      "Draw 7-box flowchart with your chosen tools",
      "Write ICP one-pager (industry, size, title, tech, disqualifiers)",
      "Estimate cost per verified lead through waterfall",
    ],
    relatedLesson: {
      track: "icp-list-building",
      slug: "icp-list-building-protocol-overview",
    },
    source: "RevGrowth",
  },
  {
    slug: "waterfall-enrichment",
    title: "Waterfall Enrichment Order",
    summary: "Sequential data providers until every email is verified.",
    category: "icp",
    type: "template",
    template: `1. Apollo — initial list + emails
2. Prospeo.io — fill gaps
3. Icypeas — verify
4. LeadMagic — hard-to-find contacts
5. LeadMagic verify — final send check`,
    checklist: [
      "Export 100 accounts from primary provider",
      "Run waterfall on 20 test rows",
      "Measure % emails found per step",
      "Document cost per verified lead",
      "Only scale after >70% verify rate on sample",
    ],
    relatedLesson: {
      track: "icp-list-building",
      slug: "waterfall-enrichment-workflow",
    },
    source: "MMS",
  },
  {
    slug: "linkedin-post-skeleton",
    title: "LinkedIn Post Skeleton",
    summary: "Hook, body, close, and soft CTA structure for B2B posts.",
    category: "linkedin",
    type: "template",
    template: `**Hook (line 1):** Pattern interrupt or bold claim
**Body:** 3 short paragraphs, one idea each
**Close:** Question to drive comments
**CTA:** Soft — newsletter, DM, or link in comments`,
    checklist: [
      "Rewrite headline for value + ICP",
      "Turn on Creator Mode",
      "Post 5x/week for 4 weeks minimum",
      "20 substantive comments/day on niche accounts",
      "Reply to every comment within 2 hours of posting",
    ],
    relatedLesson: {
      track: "linkedin-marketing",
      slug: "why-linkedin-is-the-top-b2b-platform",
    },
    source: "MMS",
  },
  {
    slug: "linkedin-90-day-cadence",
    title: "90-Day LinkedIn Cadence",
    summary: "Weekly posting rhythm for growing from zero to 10K followers.",
    category: "linkedin",
    type: "template",
    template: `Mon: Text post (story)
Tue: Carousel
Wed: Text post (how-to)
Thu: Comment sprint (20)
Fri: Text post (contrarian take)`,
    checklist: [
      "Batch 2 weeks of posts in advance",
      "Track impressions weekly in spreadsheet",
      "Repurpose top post into carousel",
      "Connect with 20 ICP accounts/week",
    ],
    relatedLesson: {
      track: "linkedin-marketing",
      slug: "growing-from-0-to-10k-followers",
    },
    source: "MMS",
  },
  {
    slug: "seo-keyword-row",
    title: "SEO Keyword Planning Row",
    summary: "Track intent, volume, difficulty, and target URL per keyword.",
    category: "seo",
    type: "template",
    template: `| Keyword | Intent | Volume | Difficulty | Target URL |
|---------|--------|--------|------------|------------|`,
    checklist: [
      "Submit sitemap in Search Console",
      "Fix critical crawl errors",
      "Publish 1 cluster post linked to pillar",
      "Track top 10 keyword positions weekly",
    ],
    relatedLesson: { track: "seo", slug: "keyword-research-intent-volume-difficulty" },
    source: "MMS",
  },
  {
    slug: "welcome-email-1",
    title: "Welcome Email #1",
    summary: "First email after opt-in — deliver value, set expectations, no pitch.",
    category: "email",
    type: "template",
    template: `Subject: [Name], here's your [lead magnet]

Deliver link immediately. Set expectation for next emails. One personal line. No pitch.`,
    checklist: [
      "SPF, DKIM, DMARC configured",
      "Welcome sequence live before driving traffic",
      "Segment by acquisition source",
      "A/B test subject lines each send",
    ],
    relatedLesson: { track: "email-marketing", slug: "drip-campaigns-and-email-automation" },
    source: "MMS",
  },
  {
    slug: "funnel-stage-map",
    title: "Funnel Stage Map",
    summary: "Map every stage to asset, CTA, metric, and owner.",
    category: "funnels",
    type: "template",
    template: `| Stage | Asset | CTA | Metric | Owner |
|-------|-------|-----|--------|-------|`,
    checklist: [
      "Map all touchpoints on one page",
      "Define conversion event per stage in GA4",
      "Identify single biggest leak",
      "Run one A/B test on leak stage",
    ],
    relatedLesson: {
      track: "website-cro",
      slug: "conversion-rate-optimization-cro",
    },
    source: "MMS",
  },
  {
    slug: "content-repurposing-matrix",
    title: "Content Repurposing Matrix",
    summary: "Turn one pillar asset into seven channel-native pieces.",
    category: "content",
    type: "framework",
    template: `| Source asset | Derivative | Channel |
|--------------|------------|---------|
| Blog post | Twitter thread | X |
| Blog post | LinkedIn carousel | LinkedIn |
| Blog post | Email newsletter | Email |
| Webinar | 3 short clips | YouTube Shorts / Reels |
| Webinar | Transcript + blog | SEO |
| Case study | Sales deck slide | Sales |
| Podcast | Quote graphics | Instagram |`,
    checklist: [
      "Pick one pillar piece published this month",
      "List 5 derivatives with publish dates",
      "Reuse same hook across formats",
      "UTM each derivative link",
    ],
    relatedLesson: {
      track: "content-marketing",
      slug: "content-repurposing-workflows",
    },
    source: "MarketLearn",
  },
  {
    slug: "cold-outreach-sequence",
    title: "Cold Outreach 4-Touch Sequence",
    summary: "Email + LinkedIn touches with spacing and personalization hooks.",
    category: "icp",
    type: "template",
    template: `**Day 1 — Email:** Personalized opener + one specific observation + soft ask
**Day 3 — LinkedIn:** Connect with note referencing same observation
**Day 7 — Email:** Value add (article, insight) — no hard pitch
**Day 14 — Email:** Breakup or direct meeting ask`,
    checklist: [
      "Personalize first line for every contact",
      "Verify emails before send",
      "Track reply rate per touch",
      "Stop sequence on reply or unsubscribe",
    ],
    relatedLesson: {
      track: "cold-outreach",
      slug: "cold-email-structure-that-gets-replies",
    },
    source: "MarketLearn",
  },
];

export function getPlaybookItem(slug: string): PlaybookItem | undefined {
  return playbookItems.find((item) => item.slug === slug);
}

export function formatPlaybookForCopy(item: PlaybookItem): string {
  const parts: string[] = [`# ${item.title}`, "", item.summary, ""];

  if (item.template) {
    parts.push("## Template", "", item.template, "");
  }

  if (item.checklist?.length) {
    parts.push("## Checklist", "");
    item.checklist.forEach((line) => parts.push(`- [ ] ${line}`));
  }

  return parts.join("\n").trim();
}
