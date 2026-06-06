import { richDM, qq } from "../dm-deep-builder.mjs";

export const LINKEDIN_MARKETING_PART1 = {
  "why-linkedin-is-the-top-b2b-platform": richDM(
    38,
    "80% of B2B social leads come from LinkedIn; personal profiles get 6–8x company page reach.",
    [
      "Explain personal vs company page reach difference",
      "List 4 content formats that work on LinkedIn",
      "Audit one founder profile for ICP alignment",
    ],
    {
      whatIs: `### LinkedIn by the numbers

- **1B+ members** — largest professional graph
- **4 of 5 members** influence business decisions (LinkedIn marketing data)
- **Personal profiles** outperform company pages **6–8x** on organic reach
- **Organic still works** in 2025 for text posts, carousels, newsletters

### When LinkedIn is wrong

B2C impulse products for teens, local-only restaurants, pure entertainment brands — use Instagram/TikTok instead.`,
      whyUse: "B2B deals start with trust. LinkedIn is where buyers expect expertise, not memes.",
      whenToUse: "SaaS, agencies, consultants, recruiting, enterprise, high-ticket services.",
      steps: [
        { title: "Compare profiles", body: "Open 3 founder profiles + 3 company pages — note reach difference on similar posts." },
        { title: "ICP check", body: "Are your buyers active on LinkedIn weekly?" },
      ],
      example: `### **PostHog** founder-led pattern

Founders post product insights → engineers engage → inbound demos.

Company page amplifies with Thought Leader Ads on top posts.

**Metric to watch:** Profile views/week + inbound DMs mentioning content.`,
      realWorld: "HubSpot, Gong, and most B2B unicorns run founder + employee advocacy programs.",
      commonMistakes: "Only company page, pitch-slapping in DMs, no comments strategy.",
      tryIt: "Audit your profile or a mentor's — 5 improvements with MMS checklist.",
      quiz: [
        qq("Personal profiles vs company pages…", "Personal gets 6–8x more reach", "Equal", "Company always wins", "Neither works"),
        qq("LinkedIn best for…", "B2B trust and authority", "Teen fashion only", "Local pizza only", "No marketing"),
        qq("Key algorithm signal…", "Comments", "Only likes from bots", "Hashtags only", "PDF attachments"),
        qq("Thought Leader Ads…", "Boost personal posts as ads", "Replace organic", "Only for B2C", "Free always"),
        qq("Buyer mindset on LinkedIn…", "Professional", "Pure entertainment", "Anonymous only", "No decisions"),
      ],
    }
  ),

  "linkedin-profile-optimization": richDM(
    40,
    "Headline = who you help; banner = CTA; Featured = lead magnet; Creator Mode on.",
    [
      "Rewrite headline using value + ICP formula",
      "Plan Featured section with one lead asset",
      "Enable Creator Mode and document why",
    ],
    {
      whatIs: `### Profile = landing page

| Section | Bad | Good |
|---------|-----|------|
| **Headline** | "CEO at Acme" | "Helping SaaS founders hit $1M ARR with content-led marketing \| Building @Acme" |
| **Banner** | Stock photo | Visual CTA: free guide, webinar, product |
| **About** | Resume dump | Hook in line 1–3, story, who you help |
| **Featured** | Empty | Lead magnet, case study, newsletter |

**Creator Mode:** Follow button, topic tags, newsletter access.`,
      whyUse: "Profile visitors decide in 5 seconds whether to follow or leave.",
      whenToUse: "Before posting consistently; before outbound DMs.",
      steps: [
        { title: "Headline rewrite", body: "Use template: Help [ICP] achieve [outcome] | [credential]" },
        { title: "Banner", body: "Canva 1584×396 — one promise + URL" },
        { title: "Featured pin", body: "Link to best asset." },
      ],
      example: `### Before / After headline

**Before:** Marketing Manager at TechCo

**After:** I help B2B SaaS teams turn LinkedIn into a pipeline channel (without cold spam) \| Marketing @TechCo

**Result pattern:** Profile views up 40–100% in 30 days when headline speaks to ICP.`,
      realWorld: "Taplio and Shield analytics users track profile view spikes after headline tests.",
      commonMistakes: "Job title only, no Featured, generic About, Creator Mode off.",
      tryIt: "Rewrite full profile sections. **Deliverable:** before/after screenshot or text.",
      quiz: [
        qq("Headline should emphasize…", "Who you help and outcome", "Only job title", "Emoji spam", "Nothing"),
        qq("Featured section should…", "Pin lead magnet or proof", "Stay empty", "Hide product", "Random memes"),
        qq("Creator Mode gives…", "Follow button + newsletter tools", "Less reach", "Auto spam", "Paid only"),
        qq("About section line 1…", "Hook before see more", "Lorem ipsum", "Legal only", "Blank"),
        qq("Banner should…", "Visual CTA", "Be blank", "Low resolution only", "Ignore mobile"),
      ],
    }
  ),

  "growing-from-0-to-10k-followers": richDM(
    45,
    "MMS playbook: 5 posts/week × 90 days, 20 comments/day, reply within 2 hours, carousels + stories.",
    [
      "Build 90-day posting calendar",
      "Define comment strategy on 10 target accounts",
      "Set weekly metrics: impressions, followers, profile views",
    ],
    {
      whatIs: `### The 90-day LinkedIn growth system

1. **Post 5x/week** — Mon–Fri same time slots
2. **20 substantive comments/day** on ICP accounts
3. **Reply to every comment** within 2 hours on your posts
4. **Mix formats** — text, carousel, poll, video, newsletter
5. **End with question** — comments beat likes for reach
6. **Repurpose winners** — new angle on top monthly post

### Format week rotation (MMS)

| Week | Mon | Wed | Fri |
|------|-----|-----|-----|
| 1 | Story post | Carousel | Contrarian take |
| 2 | How-to | Poll | Case study numbers |`,
      whyUse: "Most quit at week 3. Consistency is the unfair advantage.",
      whenToUse: "Founders, consultants, marketers building inbound pipeline.",
      steps: [
        { title: "Calendar", body: "Batch 2 weeks content in Notion." },
        { title: "Comment list", body: "10 accounts to engage daily." },
        { title: "Metrics sheet", body: "Weekly impressions + follower delta." },
      ],
      example: `### Sample week results (illustrative founder)

| Week | Posts | Comments left | New followers | Profile views |
|------|-------|---------------|---------------|---------------|
| 1 | 5 | 100 | +42 | 180 |
| 4 | 5 | 100 | +95 | 410 |
| 12 | 5 | 100 | +280 | 1,200 |

**Compound effect:** Comments put you in feeds of ICP before they follow.`,
      realWorld: "Common path for B2B creators using Taplio scheduling + manual comments.",
      commonMistakes: "Posting with zero engagement, external links in every post, inconsistent schedule.",
      tryIt: "Start 90-day tracker today. **Deliverable:** calendar + account comment list.",
      quiz: [
        qq("Comments matter because…", "Algorithm favors conversation", "They don't", "Only DMs count", "Spam works"),
        qq("Reply window…", "Within ~2 hours of posting", "Next month", "Never", "Only Sundays"),
        qq("Minimum posting cadence in MMS…", "5x/week for 90 days", "Once/year", "50x/day spam", "Never"),
        qq("Carousel posts often…", "High saves and shares", "Banned", "Lower reach always", "Only for B2C"),
        qq("Repurpose means…", "New angle on proven post", "Copy exact text daily", "Delete old posts", "Stop posting"),
      ],
    }
  ),
};
