import { richDM, qq } from "../dm-deep-builder.mjs";

export const DISTRIBUTION_GROWTH_PART1 = {
  "distribution-as-a-moat-in-an-ai-world": richDM(
    45,
    "When AI clones features overnight, distribution — audience, trust, and owned channels — is what competitors cannot copy.",
    [
      "Explain why distribution beats product differentiation in AI era",
      "Apply 3 of the 20 distribution principles to a real brand",
      "Design audience-to-ownership pipeline (social → email)",
      "Pick one primary channel for 90-day focus",
    ],
    {
      whatIs: `### Distribution is the moat

**The problem:** ChatGPT, Cursor, and no-code tools let anyone ship a "good enough" product in weeks. Features converge. Pricing races to the bottom.

**The answer:** **Distribution** — the system that gets the right message to the right people repeatedly — is slower to copy than code.

### The 20 principles (from modern growth playbooks)

| # | Principle | One-line meaning |
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
| 20 | Distribution attractant | Reach pulls talent & partners |

### Real example: **Notion**

Product is copyable conceptually. Distribution moat = templates community, YouTube educators, startup word-of-mouth, and brand synonymous with "organized work."`,
      whyUse: "Founders who only build product get crushed by better-funded clones. Distribution-first founders (Gumroad, Beehiiv) survive AI commoditization.",
      whenToUse: "Positioning, channel strategy, investor narrative, and when CAC rises on paid ads.",
      steps: [
        { title: "Audit your moat", body: "List what a competitor could copy in 30 days vs what takes 12+ months (email list, community, SEO, brand search)." },
        { title: "Pick 3 principles", body: "From the table, choose 3 you'll execute this quarter with weekly metrics." },
        { title: "Map ownership pipeline", body: "Draw: social → landing page → email → product. Where is the leak?" },
        { title: "90-day one-channel commit", body: "Write public commitment: one channel, one metric, review date." },
      ],
      example: `### **Beehiiv** — distribution as product

| Asset | Moat type |
|-------|-----------|
| Newsletter OS + referrals built-in | Product + viral loop |
| Founder Twitter/LinkedIn presence | Founder-led distribution |
| Creator success stories | Social proof engine |
| Free tier → paid upgrades | PLG |

**Result pattern:** Newsletter creators choose Beehiiv partly because **distribution tools are the product** — not just sending email.`,
      realWorld: "**Gumroad** — Sahil Lavingia's audience IS the business.\n\n**HubSpot** — free tools + content = decade-long distribution compounding.\n\n**Duolingo** — TikTok personality + product = distribution moat.",
      commonMistakes: "1. **Spreading on 5 channels at 20% effort**\n2. **No email capture on social**\n3. **Vanity followers without engagement**\n4. **Ignoring replies/comments**\n5. **Product launch without distribution seed list**",
      tryIt: "### Practice\n\nChoose **one** brand you admire. Map their distribution moat using the table (which of the 20 principles they use).\n\nThen apply 3 principles to **your** project or a fictional startup.\n\n**Deliverable:** 1-page distribution moat brief.",
      quiz: [
        qq("In AI era, moat is primarily…", "Distribution and trust", "More features", "Lower price only", "Patents only"),
        qq("Zero-to-one rule means…", "Master one channel before adding others", "Use zero budget", "One customer only", "No paid ads ever"),
        qq("1,000 true fans beats…", "100k passive followers for monetization", "Email list", "SEO", "Nothing"),
        qq("Audience-to-ownership means…", "Move people to email/community you control", "Buy followers", "Only use TikTok", "Avoid websites"),
        qq("Beehiiv wins partly because…", "Distribution tools are built into product", "No competition", "Only enterprise", "No content needed"),
      ],
    }
  ),

  "nine-growth-engines-that-work": richDM(
    42,
    "PLG, reverse trial, content compounding, founder-led, free tool SEO, community, referral, integrations, email — pick your engine.",
    [
      "Name all 9 growth engines with one example company each",
      "Select primary + secondary engine for a product",
      "Define one metric per engine",
    ],
    {
      whatIs: `### The 9 engines (MMS Growth Systems)

1. **Product-Led Growth** — Slack invites, Figma share links
2. **Reverse trial** — Full features 14 days → free tier (Loom, Linear)
3. **Content compounding** — 2–3 SEO posts/week × 12 months
4. **Founder-led distribution** — LinkedIn, X, podcasts (PostHog founders)
5. **Free tool SEO trap** — HubSpot Website Grader, Ahrefs backlink checker
6. **Community-led** — Webflow, Figma communities
7. **Referral engineering** — Dropbox 100K → 4M in 15 months
8. **Integration GTM** — Zapier marketplace listings
9. **Email flywheel** — Morning Brew, owned list from day 1

### How to choose

| Stage | Often works first |
|-------|-------------------|
| Pre-PMF | Founder-led + community |
| Early SaaS | PLG or free tool |
| B2B | Content + outbound |
| DTC | Meta + email + UGC |`,
      whyUse: "Random tactic hopping kills startups. Engines give repeatable systems.",
      whenToUse: "Quarterly planning, investor updates, hiring marketing roles.",
      steps: [
        { title: "Score fit 1–5", body: "Rate each engine for your product; justify top 2." },
        { title: "One metric each", body: "K-factor, organic %, referral rate, list growth, etc." },
        { title: "90-day experiment", body: "Design one test for primary engine." },
      ],
      example: `### Dropbox referral engine

| Metric | Before | After program |
|--------|--------|---------------|
| Users | 100K | 4M (15 months) |
| Paid ads | Minimal | Referral drove growth |

**Mechanism:** Extra storage for referrer + friend — selfish value on both sides (Referral Physics).`,
      realWorld: "See engines in **Calendly** (PLG links), **Ahrefs** (free tools), **Zapier** (integrations).",
      commonMistakes: "Choosing engine that doesn't match buyer (PLG for enterprise-only).",
      tryIt: "ICE score top 3 engines for your idea. **Deliverable:** table with Impact, Confidence, Ease.",
      quiz: [
        qq("Dropbox classic engine was…", "Referral", "TV ads", "Billboards", "Affiliate only"),
        qq("Free tool SEO trap example…", "HubSpot Website Grader", "Random blog", "Print mail", "Cold call"),
        qq("PLG means…", "Product drives acquisition/activation", "Print-led growth", "Payroll", "PR only"),
        qq("Pick engines by…", "Product stage and ICP", "Random", "Competitor only", "One size fits all"),
        qq("Email flywheel emphasizes…", "Owned list from day 1", "No list", "Buy lists", "Spam"),
      ],
    }
  ),
};
