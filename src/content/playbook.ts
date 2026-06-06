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
    category: "cold-outreach",
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
  {
    slug: "google-ads-campaign-structure",
    title: "Google Ads Campaign Structure",
    summary: "Account hierarchy for brand, non-brand, and remarketing campaigns.",
    category: "ppc",
    type: "template",
    template: `| Level | Name | Objective | Budget note |
|-------|------|-----------|-------------|
| Campaign | Brand — Exact | Search | Protect brand terms |
| Campaign | Non-brand — Themes | Search | Themed ad groups |
| Campaign | Remarketing | Display/Demand Gen | Past site visitors |
| Ad group | [Theme or keyword cluster] | | 5–15 keywords |
| Ad | RSA variants | | 3+ headlines to test |`,
    checklist: [
      "Separate brand and non-brand campaigns",
      "Add negative keyword lists",
      "One conversion goal per campaign",
      "Label experiments in account",
    ],
    relatedLesson: { track: "sem-ppc", slug: "account-structure-and-budgets" },
    source: "MarketLearn",
  },
  {
    slug: "rsa-ad-copy-template",
    title: "Responsive Search Ad (RSA) Copy",
    summary: "Headline and description slots for high-intent search ads.",
    category: "ppc",
    type: "template",
    template: `**Headlines (pin H1 with keyword when natural):**
1. [Keyword] + [Primary benefit]
2. [USP / proof point]
3. [CTA] — Free quote / Book demo / Shop now

**Descriptions:**
1. Benefit + feature proof + CTA
2. Risk reversal or offer detail`,
    checklist: [
      "Match landing page message",
      "Include keyword in at least 2 headlines",
      "Test urgency vs clarity variants",
      "Add all relevant ad extensions",
    ],
    relatedLesson: { track: "sem-ppc", slug: "ad-copywriting-and-ad-extensions" },
    source: "MarketLearn",
  },
  {
    slug: "ga4-kpi-dashboard",
    title: "GA4 KPI Dashboard Layout",
    summary: "Weekly marketing dashboard widgets executives actually read.",
    category: "analytics",
    type: "template",
    template: `| Widget | Metric | Source |
|--------|--------|--------|
| Traffic trend | Sessions vs prior period | GA4 |
| Conversions | Key events / purchases | GA4 |
| Channel mix | Sessions by source/medium | GA4 |
| Paid efficiency | CPA or ROAS | Ads + GA4 |
| Top landing pages | Sessions + conversion rate | GA4 |
| Email / social assist | UTM-tagged sessions | GA4 |`,
    checklist: [
      "Define one primary conversion event",
      "Set week-over-week comparison",
      "Add annotation for campaign launches",
      "Share link with read-only access",
    ],
    relatedLesson: { track: "analytics", slug: "kpis-and-marketing-dashboards" },
    source: "MarketLearn",
  },
  {
    slug: "utm-naming-convention",
    title: "UTM Naming Convention Sheet",
    summary: "Consistent utm_source, medium, campaign, and content tags.",
    category: "analytics",
    type: "template",
    template: `**Convention (lowercase, hyphens):**
- utm_source: platform (google, meta, newsletter)
- utm_medium: channel (cpc, email, social)
- utm_campaign: launch or theme (spring-sale-2026)
- utm_content: creative variant (carousel-a)

**Example:**
?utm_source=meta&utm_medium=paid-social&utm_campaign=lead-magnet&utm_content=video-hook-1`,
    checklist: [
      "Document convention in shared doc",
      "Use spreadsheet builder for team",
      "Audit last month's links for consistency",
      "Enable auto-tagging for Google Ads",
    ],
    relatedLesson: { track: "analytics", slug: "utm-parameters-and-campaign-tracking" },
    source: "MarketLearn",
  },
  {
    slug: "cart-abandonment-flow",
    title: "Cart Abandonment Email Flow",
    summary: "Three-touch recovery sequence for ecommerce checkout drop-offs.",
    category: "ecommerce",
    type: "template",
    template: `**Email 1 (1 hour):** Reminder + product image + single CTA
**Email 2 (24 hours):** Social proof + FAQ objection handler
**Email 3 (72 hours):** Small incentive or free shipping if margin allows`,
    checklist: [
      "Trigger on add-to-cart without purchase",
      "Exclude recent purchasers",
      "Mobile-first template",
      "Track recovered revenue per email",
    ],
    relatedLesson: { track: "ecommerce-dtc", slug: "cart-abandonment-flows" },
    source: "MarketLearn",
  },
  {
    slug: "product-page-checklist",
    title: "Ecommerce Product Page Checklist",
    summary: "Conversion elements every DTC product detail page needs.",
    category: "ecommerce",
    type: "checklist",
    checklist: [
      "Hero image + gallery with zoom",
      "Clear price and variant selector",
      "Reviews above the fold on mobile",
      "Shipping/returns policy visible",
      "Sticky add-to-cart on scroll",
      "Schema product markup",
      "Cross-sell or bundle module",
    ],
    relatedLesson: { track: "ecommerce-dtc", slug: "product-page-optimization" },
    source: "MarketLearn",
  },
  {
    slug: "haro-pitch-template",
    title: "HARO / Journalist Pitch Template",
    summary: "Reply format that gets quoted in digital PR placements.",
    category: "pr",
    type: "template",
    template: `**Subject:** Re: [Query headline] — [Your credential one-liner]

Hi [Name],

**Direct answer (2–3 sentences):**

**Supporting detail or mini case study:**

**Bio (1 sentence + link):**

Available for follow-up today.`,
    checklist: [
      "Respond within 2 hours when possible",
      "Answer the exact question first",
      "Include data or specific example",
      "Track placements and links earned",
    ],
    relatedLesson: { track: "pr-digital-pr", slug: "haro-and-connectively-for-free-links" },
    source: "MarketLearn",
  },
  {
    slug: "competitor-swot-gap",
    title: "Competitor SWOT + Gap Analysis",
    summary: "Compare rivals on messaging, channels, and positioning gaps.",
    category: "competitor",
    type: "template",
    template: `| Competitor | Strengths | Weaknesses | Channels | Our gap/opportunity |
|------------|-------------|------------|----------|---------------------|
| | | | | |

**SWOT (your brand):**
- Strengths:
- Weaknesses:
- Opportunities:
- Threats:`,
    checklist: [
      "Pick 5 direct competitors",
      "Audit homepage + ads + email signup",
      "Note one white-space opportunity",
      "Update quarterly",
    ],
    relatedLesson: { track: "competitor-intel", slug: "swot-analysis-for-marketing" },
    source: "MarketLearn",
  },
  {
    slug: "social-content-pillars-calendar",
    title: "Social Content Pillars + Calendar",
    summary: "Non-LinkedIn social planning with pillars and weekly slots.",
    category: "social",
    type: "template",
    template: `**Pillars (3–5):** Educate | Entertain | Proof | Promo (max 20%)

| Week | Mon | Wed | Fri |
|------|-----|-----|-----|
| 1 | Pillar post | Carousel | UGC/repost |
| 2 | Trend tie-in | How-to | Story poll |`,
    checklist: [
      "Define 4 pillars with 3 ideas each",
      "Batch content Sunday for the week",
      "UTM link posts",
      "Leave 2 slots for reactive news",
    ],
    relatedLesson: { track: "social-media", slug: "organic-social-strategy-and-content-pillars" },
    source: "MarketLearn",
  },
  {
    slug: "lead-scoring-model",
    title: "Lead Scoring Model",
    summary: "Fit + behavior points to flag sales-ready leads.",
    category: "automation",
    type: "template",
    template: `| Rule | Type | Points |
|------|------|--------|
| Title = target persona | Fit | +15 |
| Company size in ICP range | Fit | +20 |
| Visited pricing page | Behavior | +25 |
| Downloaded case study | Behavior | +15 |
| Wrong industry | Fit | -30 |

**MQL threshold:** 50 points`,
    checklist: [
      "Align threshold with sales",
      "Review scores monthly",
      "Negative score bad-fit signals",
      "Trigger nurture vs sales task",
    ],
    relatedLesson: { track: "automation-crm", slug: "lead-scoring-and-qualification" },
    source: "MarketLearn",
  },
  {
    slug: "nurture-sequence-map",
    title: "Nurture Sequence Map",
    summary: "Branching email workflow from opt-in to sales-ready.",
    category: "automation",
    type: "framework",
    template: `Opt-in → Welcome (Day 0)
  → Value email (Day 2)
  → Case study (Day 5)
  → Branch: clicked pricing? → Demo invite
  → Else: FAQ + soft CTA (Day 10)
  → Score ≥ MQL → Sales notification`,
    checklist: [
      "Map triggers in CRM/automation tool",
      "Pause on purchase or reply",
      "Suppression for existing customers",
      "Measure influenced pipeline",
    ],
    relatedLesson: { track: "automation-crm", slug: "workflows-and-triggered-campaigns" },
    source: "MarketLearn",
  },
  {
    slug: "community-launch-checklist",
    title: "Community Launch Checklist",
    summary: "Steps to launch a Slack, Discord, or Circle community.",
    category: "community",
    type: "checklist",
    checklist: [
      "Define community promise and rules",
      "Seed 10 founding members manually",
      "Weekly ritual (AMA, wins thread)",
      "Moderator escalation path",
      "Welcome DM or bot flow",
      "Metric: weekly active members",
      "Monetization path documented",
    ],
    relatedLesson: { track: "community-marketing", slug: "community-onboarding-and-rituals" },
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
