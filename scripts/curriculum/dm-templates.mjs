/**
 * MMS-style templates and execution checklists appended to lessons.
 */
const CHECKLIST = (items) =>
  items.map((t) => `- [ ] ${t}`).join("\n");

const TEMPLATE = (title, body) => `#### ${title}\n\n${body}`;

export function getExecutionPack(track, slug, title) {
  const key = `${track}/${slug}`;
  const packs = EXECUTION_PACKS[key] || EXECUTION_PACKS[track] || null;
  if (!packs) return "";
  return `\n\n---\n\n### Templates (from MMS)\n\n${packs.templates}\n\n### Execution checklist\n\n${CHECKLIST(packs.checklist)}`;
}

const EXECUTION_PACKS = {
  "distribution-growth": {
    templates: TEMPLATE(
      "Distribution audit",
      `| Channel | Owned? | Weekly effort | Primary metric |\n|---------|--------|---------------|----------------|\n| Email list | Yes | | List growth % |\n| Primary social | Partial | | Engagement rate |\n| SEO/blog | Yes | | Organic sessions |`
    ),
    checklist: [
      "Pick ONE primary distribution channel for 90 days",
      "Define audience-to-ownership path (social → email)",
      "Document hook formula for next 10 posts",
      "Set content velocity target (posts/week)",
      "Track referral or share metric weekly",
    ],
  },
  "icp-list-building": {
    templates: TEMPLATE(
      "ICP definition sheet",
      `**Firmographics:** Industry, company size, geography, tech stack\n**Triggers:** Recent funding, hiring, tech change\n**Persona:** Title, pains, objections\n**Disqualifiers:** Who we do NOT sell to`
    ),
    checklist: [
      "Run TAM estimate in Apollo or similar",
      "Document ICP in shared Notion page",
      "Build waterfall enrichment order",
      "Verify 10 sample emails before scaling",
      "Score 50 accounts against ICP criteria",
    ],
  },
  "linkedin-marketing": {
    templates: TEMPLATE(
      "LinkedIn post skeleton",
      `**Hook (line 1):** Pattern interrupt or bold claim\n**Body:** 3 short paragraphs, one idea each\n**Close:** Question to drive comments\n**CTA:** Soft — newsletter, DM, or link in comments`
    ),
    checklist: [
      "Rewrite headline for value + ICP",
      "Turn on Creator Mode",
      "Post 5x/week for 4 weeks minimum",
      "20 substantive comments/day on niche accounts",
      "Reply to every comment within 2 hours of posting",
    ],
  },
  seo: {
    templates: TEMPLATE("Keyword row", `| Keyword | Intent | Volume | Difficulty | Target URL |`),
    checklist: [
      "Submit sitemap in Search Console",
      "Fix critical crawl errors",
      "Publish 1 cluster post linked to pillar",
      "Track top 10 keyword positions weekly",
    ],
  },
  "marketing-funnels": {
    templates: TEMPLATE("Funnel stage map", `| Stage | Asset | CTA | Metric | Owner |`),
    checklist: [
      "Map all touchpoints on one page",
      "Define conversion event per stage in GA4",
      "Identify single biggest leak",
      "Run one A/B test on leak stage",
    ],
  },
  "email-marketing": {
    templates: TEMPLATE(
      "Welcome email 1",
      `Subject: [Name], here's your [lead magnet]\n\nDeliver link immediately. Set expectation for next emails. One personal line. No pitch.`
    ),
    checklist: [
      "SPF, DKIM, DMARC configured",
      "Welcome sequence live before driving traffic",
      "Segment by acquisition source",
      "A/B test subject lines each send",
    ],
  },
};

// Per-lesson overrides
EXECUTION_PACKS["distribution-growth/distribution-as-a-moat-in-an-ai-world"] = {
  templates: TEMPLATE(
    "20 distribution principles — pick your top 3",
    `1. Distribution moat\n2. One channel focus\n3. 1,000 true fans\n4. Content velocity\n5. Platform arbitrage\n… (rank which 3 you'll execute this quarter)`
  ),
  checklist: [
    "List 3 channels you could own — pick ONE for 90 days",
    "Write why competitors cannot copy your distribution",
    "Move one social CTA to email capture this week",
    "Document one real brand that wins on distribution not product",
  ],
};

EXECUTION_PACKS["icp-list-building/waterfall-enrichment-workflow"] = {
  templates: TEMPLATE(
    "Waterfall order (customize tools)",
    `1. Apollo — initial list + emails\n2. Prospeo.io — fill gaps\n3. Icypeas — verify\n4. LeadMagic — hard-to-find contacts\n5. LeadMagic verify — final send check`
  ),
  checklist: [
    "Export 100 accounts from primary provider",
    "Run waterfall on 20 test rows",
    "Measure % emails found per step",
    "Document cost per verified lead",
    "Only scale after >70% verify rate on sample",
  ],
};

EXECUTION_PACKS["linkedin-marketing/growing-from-0-to-10k-followers"] = {
  templates: TEMPLATE(
    "90-day LinkedIn cadence",
    `Mon: Text post (story)\nTue: Carousel\nWed: Text post (how-to)\nThu: Comment sprint (20)\nFri: Text post (contrarian take)`
  ),
  checklist: [
    "Batch 2 weeks of posts in advance",
    "Track impressions weekly in spreadsheet",
    "Repurpose top post into carousel",
    "Connect with 20 ICP accounts/week",
  ],
};
