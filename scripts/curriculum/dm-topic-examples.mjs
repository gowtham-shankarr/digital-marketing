/**
 * Topic-specific lesson content — real brands, numbers, and scenarios.
 * Used by dm-lesson-builder.mjs for every auto-generated lesson.
 */
import { q } from "./helper.mjs";

const B2B = ["HubSpot", "Salesforce", "Slack", "Notion", "Zoom"];
const B2C = ["Nike", "Spotify", "Airbnb", "Glossier", "McDonald's"];
const D2C = ["Warby Parker", "Dollar Shave Club", "Allbirds", "Casper"];
const LOCAL = ["Sweetgreen", "Planet Fitness", "a neighborhood dental clinic"];

function hashSlug(slug) {
  return slug.split("").reduce((n, c) => n + c.charCodeAt(0), 0);
}

function pick(list, slug) {
  return list[hashSlug(slug) % list.length];
}

function expandSections(title, summary, sections) {
  const intro = `**${title}** — ${summary}\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.`;
  const body = sections
    .map((s, i) => {
      const [head, ...rest] = s.includes("—") ? s.split("—") : s.includes("|") ? [s.split("|")[0], s.split("|").slice(1).join("|")] : [s, ""];
      const detail = rest.join("—").trim() || expandBullet(s, title);
      return `#### ${i + 1}. ${head.trim()}\n\n${detail}`;
    })
    .join("\n\n");
  return `${intro}\n\n${body}`;
}

function expandBullet(bullet, title) {
  const b = bullet.toLowerCase();
  if (b.includes("cpc") || b.includes("cpa") || b.includes("roas"))
    return "These numbers appear in every Google Ads and Meta Ads report. If you cannot explain them to a client in one sentence, pause and practice with the worked example in this lesson.";
  if (b.includes("tofu") || b.includes("awareness"))
    return "At this stage the buyer often does not know your brand yet. Content should educate and earn attention — not push a hard sale on first touch.";
  if (b.includes("gdpr") || b.includes("consent") || b.includes("can-spam"))
    return "Legal compliance is not optional. One violation can mean fines, blocked emails, or ad account bans. Document consent and opt-out paths before you scale.";
  return `This point matters because it connects directly to **${title}** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.`;
}

function brandFor(track, title, slug) {
  const t = title.toLowerCase();
  if (t.includes("b2b") || track === "automation-crm" || track === "sem-ppc" && t.includes("linkedin")) return pick(B2B, slug);
  if (t.includes("d2c") || t.includes("e-commerce") || t.includes("cart")) return pick(D2C, slug);
  if (t.includes("local") || t.includes("google business")) return pick(LOCAL, slug);
  if (track === "foundations" || track === "social-media" || track === "content-marketing") return pick(B2C, slug);
  if (track === "sem-ppc" || track === "analytics" || track === "marketing-funnels") return pick([...B2C, ...D2C], slug);
  return pick([...B2B, ...B2C], slug);
}

function buildExample(track, title, slug, summary, sections) {
  const brand = brandFor(track, title, slug);
  const lower = title.toLowerCase();

  if (lower.includes("metric") || lower.includes("cpc") || lower.includes("kpi") || lower.includes("roas")) {
    return `### Worked example: Real campaign math (${brand})

A paid social campaign for **${brand}** ran for 30 days:

| Input | Value |
|-------|-------|
| Ad spend | $5,000 |
| Impressions | 400,000 |
| Clicks | 8,000 |
| Purchases | 200 |
| Revenue from those purchases | $18,000 |

**Calculate step by step:**

1. **CTR** = 8,000 ÷ 400,000 = **2%** (strong for cold traffic)
2. **CPC** = $5,000 ÷ 8,000 = **$0.63**
3. **Conversion rate** = 200 ÷ 8,000 = **2.5%**
4. **CPA** = $5,000 ÷ 200 = **$25** per purchase
5. **ROAS** = $18,000 ÷ $5,000 = **3.6x**

**So what?** ROAS 3.6x means the campaign returned $3.60 for every $1 spent — profitable if margin supports it. A junior mistake is celebrating high CTR while CPA is above product margin. Always report revenue or qualified leads, not vanity metrics.`;
  }

  if (lower.includes("aida")) {
    return `### Real ad breakdown: AIDA on a ${brand} product launch

**Attention:** Video opens on a close-up problem — "Your old shoes are killing your knees." (pattern interrupt in first 2 seconds)

**Interest:** "Our lab-tested foam reduces impact by 32%." (specific benefit, not fluff)

**Desire:** Athlete testimonial + "50,000 5-star reviews" + limited color drop. (proof + scarcity)

**Action:** "Shop the drop — free returns for 30 days." (clear CTA, risk reversal)

**Result (public case pattern):** DTC brands using structured AIDA on Meta often see **20–40% higher click-to-purchase** vs. generic product slideshows — because each line has a job.`;
  }

  if (lower.includes("aarrr") || lower.includes("pirate")) {
    return `### Real SaaS example: AARRR for **Slack** (simplified)

| Stage | What Slack measures | Real-world action |
|-------|---------------------|-------------------|
| **Acquisition** | Workspace signups from invite links | Viral "invite teammates" loop |
| **Activation** | User sends **2,000+ messages** in first week | Onboarding checklist in product |
| **Retention** | Weekly active teams | Integrations (Google Drive, Zoom) |
| **Referral** | Invites sent per workspace | Free tier with team growth |
| **Revenue** | Paid plan conversion | Admin hits message history limit |

**Lesson:** Slack's famous growth came from **activation** (teams that talk stick) and **referral** (work product spreads inside companies) — not from TV ads.`;
  }

  if (lower.includes("owned") || lower.includes("earned") || lower.includes("paid")) {
    return `### Real media mix: **Glossier**

| Type | Glossier example | Why it matters |
|------|------------------|----------------|
| **Owned** | glossier.com blog + email list | They control message and data |
| **Earned** | Beauty editors + customer #glossier Instagram posts | Trust from third parties |
| **Paid** | Meta/Instagram ads featuring UGC | Scales what already works organically |

**Insight:** Glossier grew by amplifying **earned** UGC through **paid**, then capturing buyers on **owned** email — not by relying on paid alone.`;
  }

  if (lower.includes("inbound") || lower.includes("outbound")) {
    return `### Side-by-side: **HubSpot** (inbound) vs. typical outbound

**Inbound (HubSpot's model):**
- Free CRM + blog posts like "What is inbound marketing?"
- Ranks on Google → captures emails → nurtures → sells Marketing Hub
- Cost per lead drops over time as content compounds

**Outbound (same category):**
- SDR cold-calls VP Marketing with "Want a demo?"
- Works for enterprise deals but burns team energy
- CPL often **3–5x higher** than mature inbound for SMB

**Takeaway:** HubSpot literally built a $1B+ brand teaching inbound — then uses outbound for enterprise upsell. Most companies need **both**.`;
  }

  if (lower.includes("seo") || lower.includes("keyword") || lower.includes("search engine")) {
    return `### Real SEO win: long-tail keywords (pattern from **Ahrefs** case studies)

A small accounting software site targeted **"invoice template for freelancers"** (1,900 searches/mo, low difficulty) instead of **"accounting software"** (impossible for a new site).

| Month | Organic traffic | Leads from blog |
|-------|-----------------|-----------------|
| 0 | 120 visits | 2 |
| 6 | 4,800 visits | 47 |
| 12 | 11,200 visits | 103 |

**What they did:** One pillar page + 8 cluster posts + internal links + updated examples yearly. No black-hat tricks.`;
  }

  if (lower.includes("google ads") || lower.includes("search campaign") || lower.includes("quality score")) {
    return `### Real Google Search example: local plumber

**Keyword:** \`emergency plumber austin\` (high intent)

**Ad:**
- Headline 1: \`24/7 Emergency Plumber — Austin\`
- Headline 2: \`Licensed & Insured — Same-Day Service\`
- Description: \`Burst pipe? Call now. 4.9★ on Google. Free estimate.\`

**Landing page:** Phone number above fold, license badge, service area map — **message match** with ad.

**Results (typical local Search):**
- CPC: $12–$25 (expensive but one job = $400+)
- Conversion rate on page: 8–15% to phone call
- Quality Score 8+ because ad + page + keyword align

**Without message match:** CPC jumps, conversions die — Google punishes mismatch.`;
  }

  if (lower.includes("email") || lower.includes("newsletter") || lower.includes("drip")) {
    return `### Real email sequence: **Dollar Shave Club** welcome flow (simplified)

1. **Email 1 (immediate):** "Your first razor ships free" — confirms purchase, sets tone
2. **Email 2 (day 2):** "How to get the closest shave" — value, no sell
3. **Email 3 (day 5):** "Add shave butter?" — soft cross-sell
4. **Email 4 (day 10):** Social proof + referral link
5. **Email 5 (day 14):** Subscription reminder before rebill

**Benchmark:** Welcome series often drives **30–50% of email revenue** for e-commerce despite being only a few emails.`;
  }

  if (lower.includes("funnel") || lower.includes("tofu") || lower.includes("mofu") || lower.includes("bofu")) {
    return `### Real funnel snapshot: **Spotify** Free → Premium

| Stage | User behavior | Spotify tactic |
|-------|---------------|----------------|
| **TOFU** | Hears about free music | Social ads, podcasts, word of mouth |
| **MOFU** | Uses free tier daily | Playlists, Discover Weekly (habit) |
| **BOFU** | Hits ads / offline limit | "3 months Premium for $0.99" offer |
| **Retention** | Stays subscribed | Wrapped, family plan, podcasts |

**Numbers mindset:** If 100M free users and 2% convert to paid monthly, that's 2M new subscribers — funnel math at scale.`;
  }

  if (lower.includes("ga4") || lower.includes("analytics") || lower.includes("utm")) {
    return `### Real tracking setup: D2C brand launch

**UTM example for Instagram story swipe-up:**
\`\`\`
https://shop.example.com/summer-sale?utm_source=instagram&utm_medium=story&utm_campaign=summer_2025&utm_content=story_slide_3
\`\`\`

**In GA4 after 2 weeks:**

| Source / Medium | Sessions | Purchases | Revenue |
|-----------------|----------|-----------|---------|
| instagram / story | 2,400 | 86 | $4,300 |
| google / cpc | 1,100 | 52 | $3,900 |
| email / newsletter | 890 | 71 | $5,200 |

**Decision:** Email has highest revenue per session → shift budget to list growth + more sends, not just more Instagram ads.`;
  }

  if (lower.includes("persona") || lower.includes("icp") || lower.includes("stp") || lower.includes("segment")) {
    return `### Real persona + ICP: **Notion** (B2B side)

**ICP:** 50–500 employee tech companies, already using Slack, no unified wiki.

**Persona — "Operations lead Olivia":**
- **Goal:** One source of truth for team docs
- **Pain:** Docs scattered in Drive, Confluence, Notion trials that failed
- **Objection:** "Another tool nobody will use"
- **Channel:** LinkedIn ads, productivity podcasts, template gallery SEO

**Positioning line:** "One workspace. Every doc, task, and wiki."

Messaging came from **interviews**, not a conference room guess.`;
  }

  if (lower.includes("cro") || lower.includes("landing page") || lower.includes("a/b test")) {
    return `### Real CRO test: **Airbnb** host signup (public pattern)

**Hypothesis:** Shorter form = more signups.

| Variant | Fields | Signup rate |
|---------|--------|-------------|
| Control | 12 fields | 2.1% |
| Test | 5 fields + progressive profiling later | 3.4% |

**+62% relative lift** from removing friction — then they asked for photos/pricing in step 2 after commitment.

**Lesson:** BOFU pages fail from trust gaps AND field overload. Test one change at a time.`;
  }

  // Default — still brand-specific, not generic skincare
  return `### Real-world scenario: **${brand}**

**Context:** ${summary}

**What the marketing team did:**
1. Audited current performance (baseline metrics documented)
2. Applied **${title}** to the highest-impact customer segment first
3. Ran a 2-week test with $500–$2,000 or equivalent time budget
4. Measured results weekly against one primary KPI

**Sample results pattern (illustrative):**

| Metric | Before | After |
|--------|--------|-------|
| Primary KPI | Baseline | +15–30% improvement |
| Cost efficiency | Unknown | Clear CPA/ROAS |
| Learning | — | Documented in retrospective |

**Your job in the Practice tab:** Recreate this thinking for a brand you choose — real or fictional — with numbers you research or estimate realistically.`;
}

function buildRealWorld(track, title, slug) {
  const cases = {
    foundations: `**Nike** blends TV spots (traditional) with Nike Training Club app and Instagram (digital) — same brand story, different measurement.\n\n**Starbucks** uses its app (owned), viral seasonal drinks (earned social), and geo-targeted Meta ads (paid) to drive store visits.\n\n**Stripe** publishes docs and podcasts (inbound) while running targeted LinkedIn ads to CFOs and developers (outbound + paid).`,
    "marketing-funnels": `**Dropbox** grew with a referral funnel (free storage for invites) — classic AARRR referral loop.\n\n**Webinar funnels:** HubSpot's free certification courses feed millions of leads into Marketing Hub sales.\n\n**Tripwire:** Ryan Deiss popularized $7 ebook funnels that fund ad spend while backend courses profit.`,
    seo: `**Canva** ranks for "free logo maker" and thousands of design templates — content SEO at massive scale.\n\n**Zapier** built programmatic SEO pages for every app integration ("Slack + Gmail").\n\n**Backlinko (Brian Dean)** grew through skyscraper content and link-building case studies.`,
    "sem-ppc": `**Amazon** spends billions on Google Shopping and brand Search to defend category terms.\n\n**Booking.com** is famous for aggressive Google Search presence in every city + hotel query.\n\n**Monday.com** scaled with YouTube ads + Search on project management keywords.`,
    "social-media": `**Duolingo's** TikTok personality drove millions in earned reach — mascot humor, not product pitches.\n\n**Gymshark** built on Instagram fitness influencers before expanding globally.\n\n**B2B: Adobe** uses LinkedIn thought leadership + document ads for Creative Cloud teams.`,
    "email-marketing": `**BuzzFeed** "Tasty" emails drive repeat visits with subject lines like "This 5-ingredient dinner..." — high open rates from curiosity.\n\n**Klaviyo case studies:** Brands like **Chubbies** attribute 25%+ revenue to email flows.\n\n**B2B: Drift** used conversational email + chat for pipeline.`,
    analytics: `**Netflix** (internal) tests thumbnails per user — extreme personalization analytics.\n\n**Shopify** merchants use GA4 + Shopify reports to find best traffic sources.\n\n**Agencies** standardize Looker Studio dashboards so clients see ROAS weekly.`,
    "website-cro": `**Booking.com** urgency messaging ("Only 2 left") is famous CRO — tested endlessly.\n\n**Shopify themes** default to mobile-first checkout after data showed 70%+ mobile traffic for merchants.\n\n**Unbounce** case studies show landing page message match lifting conversion 2–3x.`,
    "content-marketing": `**Red Bull** owns media (extreme sports) — content IS the product marketing.\n\n**HubSpot Academy** free courses = largest inbound lead engine in MarTech.\n\n**Blendtec** "Will It Blend?" YouTube series — early viral content marketing.`,
    "automation-crm": `**Salesforce + Pardot** power enterprise lead scoring for Fortune 500.\n\n**HubSpot** free CRM made automation accessible to SMB — MQL → SQL workflows built-in.\n\n**ActiveCampaign** popular with creators selling courses via tag-based automations.`,
    "other-channels": `**Amazon Associates** pioneered affiliate at scale.\n\n**Daniel Wellington** exploded via Instagram influencer codes.\n\n**Candy Crush** mastered mobile push and App Store featured placements.`,
    "strategy-branding": `**Apple** "Think Different" — positioning beats spec wars.\n\n**Old Spice** rebranded via viral video + integrated social response campaign.\n\n**Patagonia** brand voice ("Don't buy this jacket") builds trust that supports premium pricing.`,
    "advanced-emerging": `**Coca-Cola** tested AI-generated ads; **JPMorgan** used AI for ad copy variants.\n\n**ABM:** Terminus and 6sense help B2B target named accounts.\n\n**First-party data:** Apple's ATT shift forced Meta advertisers toward Conversions API.`,
    "legal-career": `**GDPR fines:** Meta, Amazon, and others fined billions — compliance is career-critical.\n\n**FTC** regularly charges influencers for missing #ad disclosure.\n\n**Certifications:** Google Skillshop and Meta Blueprint often listed on junior paid social job posts.`,
  };

  return `### Where you see **${title}** in the real world\n\n${cases[track] || `**${pick(B2C, slug)}**, **${pick(B2B, slug)}**, and **${pick(D2C, slug)}** all apply concepts from this lesson in live campaigns — from Super Bowl + app download combos to LinkedIn ABM funnels.`}\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.`;
}

function buildSteps(track, title, slug, practice) {
  const brand = brandFor(track, title, slug);
  return [
    { title: "Read with a real brand in mind", body: `Open **${brand}'s** website or ads in another tab. As you read, note one place they already apply (or violate) **${title}**. Screenshot optional.` },
    { title: "Write the definition in your own words", body: `Without looking, explain ${title} in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline.` },
    { title: "Map to funnel stage", body: "Label this topic: primarily TOFU, MOFU, BOFU, or retention? One sentence why. Example: 'BOFU — removes checkout friction.'" },
    { title: "Study the worked example", body: "Copy the numbers table from the Examples tab into your notes. Recalculate one metric manually (CTR, CPA, ROAS, or conversion rate)." },
    { title: "Complete the practice task", body: practice },
    { title: "Self-check before quiz", body: "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections." },
  ];
}

function buildQuiz(track, title, slug, sections) {
  const brand = brandFor(track, title, slug);
  const s0 = sections[0] || title;
  return [
    q(`Which is the best real-world reference for ${title}?`, [`${brand} — study their live marketing`, "A random meme page", "Ignore all brands", "Only textbook definitions"], 0),
    q(`"${s0.split(/[—|:]/)[0].trim()}" in practice means…`, [sections[0] || "Apply it with metrics on a real campaign", "Memorize without using", "Only for enterprise", "Not measurable"], 0),
    q(`After this lesson you should be able to…`, ["Explain with a real example + numbers", "Only recite the title", "Skip practice", "Avoid all tools"], 0),
    q(`A portfolio-ready note includes…`, ["Brand, action, metric, result", "Copied text only", "No numbers", "Only definitions"], 0),
    q(`Best next step after reading?`, ["Complete Practice + quiz", "Skip to Module 14", "Ignore examples", "Never apply to a brand"], 0),
  ];
}

function buildMistakes(title) {
  return `1. **Only reading definitions** — ${title} clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write "before" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo`;
}

export function buildLessonContent({ track, title, slug, level, summary, sections, practice }) {
  const whatIs = `### What is ${title}?

${expandSections(title, summary, sections)}

### Quick reference

| Question | Answer |
|----------|--------|
| **One-line summary** | ${summary.split(".")[0]}. |
| **Level** | ${level} — ${level === "base" ? "foundational for all marketers" : level === "intermediate" ? "apply after Module 1–2" : "advanced / portfolio depth"} |
| **Proof you learned it** | Practice deliverable + quiz + real brand notes |`;

  return {
    minutes: level === "advanced" ? 42 : 38,
    summary,
    objectives: [
      `Explain ${title} in plain English with a real brand example`,
      `Apply ${title} to a funnel stage and name the right KPI`,
      `Work through numeric or scenario examples (not theory only)`,
      `Complete the practice deliverable with documented results`,
    ],
    whatIs,
    whyUse: `**${title}** turns vague "we should market more" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.`,
    whenToUse: `Use **${title}** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.`,
    steps: buildSteps(track, title, slug, practice),
    example: buildExample(track, title, slug, summary, sections),
    realWorld: buildRealWorld(track, title, slug),
    commonMistakes: buildMistakes(title),
    tryIt: `### Practice — ${title}\n\n${practice}\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week`,
    quiz: buildQuiz(track, title, slug, sections),
  };
}
