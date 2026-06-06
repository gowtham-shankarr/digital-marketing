import { richDM, qq } from "../dm-deep-builder.mjs";

/** Module 1 — Foundations: hand-authored depth with real examples */
export const FOUNDATIONS_PART1 = {
  "digital-marketing-vs-traditional-marketing": richDM(
    40,
    "See how Nike, Coca-Cola, and local businesses split budget between TV/print and search/social — and why digital wins on measurement.",
    [
      "Name 5+ digital channels and 4+ traditional channels with real brand examples",
      "Explain why digital attribution is easier (and where it still breaks)",
      "Compare cost, speed, and targeting: billboard vs. Meta ad",
      "Recommend a channel mix for a $5k/month local business budget",
    ],
    {
      whatIs: `### Digital vs traditional — the split every marketer must know

**Digital marketing** = promoting through online channels where you can usually measure clicks, views, signups, and sales.

**Traditional marketing** = offline channels: TV, radio, print, billboards, direct mail, events.

### Side-by-side comparison

| | **Traditional** | **Digital** |
|---|----------------|-------------|
| **Examples** | Super Bowl ad, subway poster, radio spot | Google Search, Instagram Reels, email newsletter |
| **Targeting** | Broad (everyone watching the game) | Narrow (women 25–34 in Chicago interested in yoga) |
| **Cost entry** | Often high ($5k–$500k+) | Can start at $50/day on ads |
| **Speed** | Weeks to produce TV; slow to change | Launch ad in hours; pause instantly |
| **Measurement** | Estimates, surveys, brand lift studies | Clicks, conversions, ROAS in near real-time |

### Real brand: **Coca-Cola**

- **Traditional:** Holiday TV commercials worldwide — builds emotion and brand memory; hard to tie one ad to one soda purchase.
- **Digital:** Instagram, TikTok challenges, app promotions — tracks engagement, redemptions, and app downloads.

They need **both**: TV for mass culture; digital for daily engagement and measurable activations.

### Real brand: **Joe's local gym** (traditional + digital)

- **Traditional:** Flyers at coffee shops, sponsor a 5K race ($500)
- **Digital:** Instagram Reels of workouts, Google "gym near me" ads, email trial offers

**Result pattern:** Digital drives **trial signups with known CPA**; traditional builds **neighborhood name recognition** digital alone misses.`,
      whyUse: "Clients and bosses ask 'Why spend on Instagram instead of radio?' You answer with targeting, cost, and metrics — not 'because it's trendy.'",
      whenToUse: "Budget planning, pitch decks, comparing agency proposals, and explaining why a billboard alone won't fix a leaky website.",
      steps: [
        { title: "List channels you saw today", body: "Before leaving home: did you see a billboard, Instagram ad, Google result, or email? Write 4 examples — label each digital or traditional." },
        { title: "Compare one pair", body: "Pick TV ad vs. YouTube pre-roll. Who sees it? Can you pause it? How would the brand measure success?" },
        { title: "Study Coca-Cola + local gym", body: "Copy the comparison table into notes. Add a third brand you use (Spotify, Nike, etc.)." },
        { title: "Budget exercise", body: "Split $5,000/month for a dental clinic: what goes digital vs traditional? Write % and why." },
        { title: "Practice + quiz", body: "Complete Practice with a real local business you know." },
      ],
      example: `### Worked example: $5,000/month — **Planet Fitness**-style local gym

| Channel | Spend | Tactic | Measurable outcome |
|---------|-------|--------|-------------------|
| Google Search | $1,800 | "gym near [city]" | 120 trial signups, CPA $15 |
| Instagram | $1,200 | Reels + $1 promo ad | 80K views, 40 signups |
| Flyers / local | $500 | Apartment complex drop | Unknown — coupon code "APT10" tracks 12 signups |
| Radio (traditional) | $1,500 | Morning drive spot | Brand awareness only — ask "how did you hear?" at signup |

**Insight:** Digital = **72% of signups trackable**. Radio might help but requires **asking every new member** how they found you — many gyms skip this and waste radio spend.`,
      realWorld: "**Nike** Super Bowl ads (traditional emotion) + Nike app and SNKRS drops (digital conversion).\n\n**Political campaigns** still spend heavily on TV (traditional) but fundraise via email/SMS (digital) with dollar-per-click tracked to the penny.\n\n**DTC brands** often skip TV until Series B; they live on Meta/TikTok where ROAS is daily breakfast.",
      commonMistakes: "1. **Digital-only snobbery** — local services still win with signage and events\n2. **Traditional without tracking** — use unique URLs or codes on print\n3. **Expecting TV to drive instant sales** — awareness lag is real\n4. **Ignoring brand** — performance digital still needs consistent message\n5. **No landing page** — digital ads that send to homepage waste money",
      tryIt: `### Practice\n\nPick a **real local business** (restaurant, salon, gym). Interview their site or visit in person.\n\n1. List 3 traditional tactics they use (or could)\n2. List 3 digital tactics with **one metric each** (followers, reviews, ad library, email signup)\n3. Recommend budget split for $2k/month\n\n**Deliverable:** Half-page brief with business name and numbers.`,
      quiz: [
        qq("Google Search ads for 'plumber near me' are primarily…", "Digital and high-intent", "Traditional print", "Earned only", "Not measurable"),
        qq("Main advantage of digital over billboard is…", "Granular targeting + measurement", "Always cheaper", "No creative needed", "Works without website"),
        qq("Coca-Cola uses TV mainly for…", "Mass brand emotion", "Click tracking", "Email capture", "Local SEO"),
        qq("Best practice for traditional spend is…", "Use tracking codes or 'how did you hear us?'", "Never measure", "Replace all digital", "Skip local"),
        qq("A $5k local gym should…", "Blend digital performance + some local traditional", "TV only", "Ignore Google", "No metrics"),
      ],
    }
  ),

  "owned-earned-and-paid-media": richDM(
    38,
    "Learn the Glossier and Red Bull media models — owned (your site), earned (others talk), paid (you buy reach).",
    [
      "Define owned, earned, and paid with 2 examples each from real brands",
      "Audit any brand's mix across the three types",
      "Explain why over-reliance on paid is risky",
      "Design a starter mix for a new product launch",
    ],
    {
      whatIs: `### The three types of media

| Type | You control? | You pay platform? | Example |
|------|-------------|-------------------|---------|
| **Owned** | Yes | Hosting/tools only | Website, blog, email list, app |
| **Earned** | No (others choose to share) | No | Press, reviews, shares, word of mouth |
| **Paid** | Partial (ad + targeting) | Yes | Google Ads, Meta ads, influencers (paid posts) |

### **Glossier** (beauty D2C)

- **Owned:** glossier.com, blog, email — owns customer relationship
- **Earned:** Customers post #glossier on Instagram; Into The Gloss editorial credibility
- **Paid:** Boosts best UGC, prospecting ads on Meta

**Flywheel:** Earned UGC → paid amplification → owned email capture → repeat purchase.

### **Red Bull** (extreme content)

- **Owned:** redbull.com, Red Bull TV, events
- **Earned:** Athletes and fans share jumps/races globally
- **Paid:** Sponsorships, some paid social

Red Bull is a **media company that sells cans** — content drives earned at scale.`,
      whyUse: "When Meta ad costs rise 30%, brands with strong **owned email** and **earned community** survive. Paid-only brands panic.",
      whenToUse: "Annual planning, content strategy, crisis (bad earned review), and explaining why you need a blog — not only ads.",
      steps: [
        { title: "Audit your favorite brand", body: "Open website (owned), Google reviews (earned), Meta Ad Library (paid). 10 minutes, three columns." },
        { title: "Classify 9 touchpoints", body: "3 owned, 3 earned, 3 paid from brands you use daily." },
        { title: "Find the flywheel", body: "How does earned feed paid or owned for Glossier or Nike?" },
        { title: "Practice mix", body: "Design launch mix for fictional product." },
      ],
      example: `### 90-day launch mix — fictional skincare brand

| Week | Owned | Earned | Paid |
|------|-------|--------|------|
| 1–4 | Landing page + waitlist | Seed 20 micro-influencers (free product) | $0 — build list |
| 5–8 | Blog: ingredient science | Reviews on r/SkincareAddiction | $2k Meta retargeting waitlist |
| 9–12 | Email launch sequence | PR pitch to 5 beauty editors | $5k prospecting + UGC ads |

**KPIs:** Email list size (owned), mention sentiment (earned), CPA (paid).`,
      realWorld: "**Apple** keynotes (owned/earned hybrid) + App Store (owned) + search ads for competitors' keywords (paid).\n\n**Tesla** Elon tweets = earned (volatile!); minimal traditional paid for years.\n\n**SMB mistake:** Only boosted Facebook posts — no site SEO, no email — **rented audience** on Meta.",
      commonMistakes: "1. **Calling boosted posts 'owned'** — it's paid\n2. **Buying fake earned** (fake reviews) — platform bans\n3. **No owned capture** — 100% paid traffic with no email\n4. **Ignoring negative earned** — respond to reviews\n5. **Same message on all three** — adapt format per type",
      tryIt: "### Practice\n\nFor **Spotify**, **a local café**, or **HubSpot**, fill a table: 2 owned, 2 earned, 2 paid touchpoints each with URLs or descriptions.\n\n**Deliverable:** Screenshot or links + one sentence on which type drives most trust for that brand.",
      quiz: [
        qq("Email subscriber list is…", "Owned media", "Earned only", "Paid media", "Not marketing"),
        qq("A viral TikTok from a customer is…", "Earned media", "Owned", "Always paid", "Illegal"),
        qq("Glossier's flywheel uses earned UGC to…", "Fuel paid ads and owned email", "Replace product", "Avoid website", "Skip metrics"),
        qq("Risk of paid-only strategy is…", "Rising CPMs with no owned audience", "Free forever", "Better than SEO", "No tracking"),
        qq("Company blog on your domain is…", "Owned", "Earned", "Paid", "Outbound only"),
      ],
    }
  ),

  "core-marketing-metrics-glossary": richDM(
    45,
    "Master CPC, CPA, ROAS, LTV, and CAC with a real $5,000 ad spend worked example — the math clients expect you to know.",
    [
      "State the formula for CPC, CTR, CPA, ROAS, ROI, LTV, CAC, conversion rate",
      "Calculate all metrics from one sample campaign dataset",
      "Tell a client which metric matters at TOFU vs BOFU",
      "Spot when a 'good' CTR hides a bad CPA",
    ],
    {
      whatIs: `### The metrics dictionary (memorize formulas)

| Metric | Formula | Plain English |
|--------|---------|---------------|
| **CTR** | Clicks ÷ Impressions | Ad creative relevance |
| **CPC** | Spend ÷ Clicks | Cost per visit |
| **CPM** | (Spend ÷ Impressions) × 1000 | Cost per 1,000 views |
| **Conversion rate** | Conversions ÷ Clicks (or sessions) | Site/offer effectiveness |
| **CPA / CPL** | Spend ÷ Conversions (or leads) | Cost per result |
| **ROAS** | Revenue ÷ Ad spend | E-commerce return |
| **ROI** | (Gain − Cost) ÷ Cost | Overall profitability |
| **CAC** | Total sales+marketing cost ÷ New customers | Blended acquisition |
| **LTV** | Avg revenue per customer × lifespan | Long-term value |

### Which metric when?

- **TOFU brand video:** CPM, video view rate, reach
- **Search ads:** CPC, CTR, conversion rate, CPA
- **E-commerce:** ROAS, AOV, cart abandonment
- **SaaS:** CAC, LTV, LTV:CAC ratio (aim 3:1+)`,
      whyUse: "Misusing metrics loses trust. Saying 'CTR is 5%!' while CPA is $400 on a $50 product signals junior level.",
      whenToUse: "Weekly reports, ad optimization, board updates, and interview case questions.",
      steps: [
        { title: "Copy the formula table", body: "Flashcard each formula without peeking." },
        { title: "Do the math by hand", body: "Use Example tab numbers — no calculator app until you try manually." },
        { title: "Label funnel stage", body: "For each metric, write TOFU/MOFU/BOFU where it's primary." },
        { title: "Find a bad tradeoff", body: "When is high CTR misleading? (Hint: wrong audience clicks.)" },
      ],
      example: `### Full calculation — **Allbirds**-style shoe campaign

**Inputs:** $5,000 spend | 250,000 impressions | 7,500 clicks | 150 orders | $12,750 revenue | AOV $85

| Step | Calculation | Result |
|------|-------------|--------|
| CTR | 7,500 ÷ 250,000 | **3%** |
| CPC | $5,000 ÷ 7,500 | **$0.67** |
| CPM | ($5,000 ÷ 250,000) × 1000 | **$20** |
| Conv. rate (click→order) | 150 ÷ 7,500 | **2%** |
| CPA | $5,000 ÷ 150 | **$33.33** |
| ROAS | $12,750 ÷ $5,000 | **2.55x** |

**Margin check:** If gross margin is 50% ($42.50 per $85 order), profit per order ≈ $9.17 before ops — **CPA $33 may be unprofitable** unless LTV includes repeat buys. That's why D2C tracks **LTV:CAC**, not ROAS alone.`,
      realWorld: "**Meta Ads Manager** shows CPC, CPM, CTR daily.\n\n**Google Ads** adds Quality Score affecting CPC.\n\n**Investors** ask SaaS startups LTV:CAC — marketing and product both matter.",
      commonMistakes: "1. **ROAS without margin** — 4x ROAS can still lose money\n2. **Clicks as success** — junk traffic inflates CTR\n3. **Mixing attribution windows** — 1-day vs 7-day ROAS differs\n4. **Ignoring organic** — blended CAC includes content labor\n5. **Vanity metrics on dashboards** — followers without revenue",
      tryIt: "### Practice\n\nUse **Meta Ad Library** or a case online. Estimate or find: spend, impressions, clicks (or invent realistic numbers for a café promo).\n\nCalculate CTR, CPC, and CPA. Write 3 sentences: profitable or not? Why?\n\n**Deliverable:** Table + recommendation.",
      quiz: [
        qq("ROAS 4x with $10k spend means revenue…", "$40,000", "$4,000", "$2,500", "$10,000"),
        qq("CPA is…", "Spend ÷ conversions", "Clicks ÷ impressions", "Revenue × spend", "Impressions ÷ spend"),
        qq("High CTR but high CPA often means…", "Wrong audience clicks but doesn't buy", "Perfect campaign", "Low budget", "SEO issue"),
        qq("LTV:CAC of 3:1 generally suggests…", "Healthy unit economics for SaaS", "Shut down ads", "Ignore retention", "CTR only"),
        qq("TOFU video campaign primary metric is often…", "CPM / view rate", "CPA only", "Cart abandonment", "Email unsubscribes"),
      ],
    }
  ),

  "inbound-vs-outbound-marketing": richDM(
    38,
    "HubSpot built a billion-dollar brand on inbound; SDR cold email is outbound — see when each wins with real CPL patterns.",
    ["Define inbound and outbound with 3 tactics each", "Compare HubSpot inbound vs enterprise outbound", "Design one inbound asset + one outbound touch for same product", "Estimate relative CPL for mature inbound vs cold outbound"],
    {
      whatIs: `### Inbound = they come to you | Outbound = you reach out

**Inbound:** Blog, SEO, podcasts, free tools, webinars — buyer opts in when ready.

**Outbound:** Cold email, cold calls, display ads to cold lists, LinkedIn DMs — you interrupt.

### **HubSpot** inbound machine

- Blog: "What is inbound marketing?" ranks for years
- Free CRM captures emails
- Certifications nurture trust
- **CPL drops over time** as content compounds

### Outbound still wins when

- Enterprise $100k+ deals (named accounts)
- New market with zero search volume
- Speed test before content ranks (90-day inbound lag)`,
      whyUse: "Founders say 'just run ads.' You explain why a blog + lead magnet reduces CAC over 12 months.",
      whenToUse: "B2B planning, content calendar justification, and avoiding spammy outbound that burns domain reputation.",
      steps: [
        { title: "Find HubSpot inbound examples", body: "Google one question you have about marketing — see if HubSpot ranks. That's inbound." },
        { title: "Spot outbound", body: "Check LinkedIn — sponsored InMail and cold SDR messages are outbound." },
        { title: "Same product, two tactics", body: "Pick a CRM — one inbound lead magnet idea, one outbound email subject line." },
      ],
      example: `### B2B software — 6-month comparison (illustrative)

| Channel | Month 1 CPL | Month 6 CPL | Notes |
|---------|-------------|-------------|-------|
| Inbound (SEO + ebook) | $180 | $45 | Content ranks, compounds |
| Outbound (SDR email) | $120 | $110 | Linear labor cost |

**Hybrid:** Outbound books demos; inbound nurtures those not ready — **HubSpot does both.**`,
      realWorld: "**Intercom** early blog + docs (inbound). **Oracle** enterprise outbound armies.\n\n**Newsletters** (inbound permission) vs **purchased lists** (outbound spam — illegal in many cases).",
      commonMistakes: "1. Cold email without targeting\n2. Inbound without CTA capture\n3. Expecting inbound in 2 weeks\n4. Outbound without personalization\n5. No CRM to track source",
      tryIt: "Design inbound checklist PDF + outbound LinkedIn message for **Notion**-style productivity app. **Deliverable:** Title of magnet + 3-sentence outbound message.",
      quiz: [
        qq("SEO blog post is…", "Inbound", "Outbound", "Paid only", "Not marketing"),
        qq("Cold LinkedIn pitch is…", "Outbound", "Inbound", "Owned", "Earned"),
        qq("Inbound CPL often…", "Falls over time as content ranks", "Always higher", "Is not measurable", "Replaces product"),
        qq("HubSpot's model centers on…", "Content + free tools capturing leads", "TV only", "Cold call only", "Print mail"),
        qq("Best modern approach is often…", "Blend inbound nurture + targeted outbound", "Outbound only", "No measurement", "Skip email"),
      ],
    }
  ),

  "b2b-b2c-b2b2c-and-d2c-models": richDM(
    36,
    "Classify Nike (B2C), Salesforce (B2B), Apple Card (B2B2C), and Warby Parker (D2C) — channel and message change completely.",
    ["Define B2B, B2C, B2B2C, D2C", "Match channels to model", "Classify 5 brands correctly", "Explain why LinkedIn fits B2B not impulse lipstick"],
    {
      whatIs: `| Model | Sells to | Cycle | Message | Channels |
|-------|----------|-------|---------|----------|
| **B2C** | Consumers | Short | Emotion, speed | Instagram, TikTok |
| **B2B** | Companies | Long | ROI, proof | LinkedIn, demos |
| **D2C** | Consumers direct | Medium | Brand + offer | Meta, email, site |
| **B2B2C** | Via partner | Varies | Partner + user needs | Co-marketing |

**Salesforce (B2B):** 6-month cycle, multiple stakeholders, case studies with ROI.

**Nike (B2C):** Lifestyle creative, athletes, SNKRS urgency.

**Warby Parker (D2C):** Bypasses opticians; home try-on; heavy performance social.`,
      whyUse: "Wrong model = wrong channel. B2B meme TikTok rarely works; B2C whitepapers bore consumers.",
      whenToUse: "Job interviews ('who's the buyer?'), persona work, and ad platform selection.",
      steps: [
        { title: "Classify 5 apps on your phone", body: "B2B, B2C, or D2C? Who pays?" },
        { title: "Compare messages", body: "Read Salesforce vs Nike homepage headline — tone difference is the lesson." },
      ],
      example: `### Same product idea, different model

**Project management tool:**
- **B2B:** Sell to IT director — security, SSO, ROI deck
- **B2C:** Personal todo — habit, mobile UX, $5/mo impulse
- **D2C:** Direct from vendor site — free trial ads to individuals who expense later`,
      realWorld: "**Slack** bottom-up B2C-style adoption inside B2B.\n\n**Apple + Goldman Sachs** Apple Card = B2B2C.\n\n**Amazon** B2C marketplace + AWS B2B.",
      commonMistakes: "1. B2B without sales alignment\n2. B2C without mobile checkout\n3. Calling marketplace B2C when you're the seller B2B2C\n4. D2C without retention email\n5. Same creative for CFO and teenager",
      tryIt: "Classify **Spotify**, **Stripe**, **Glossier**, **local pizza shop**, **Microsoft Teams** — model + primary channel each.",
      quiz: [
        qq("Salesforce primarily…", "B2B", "B2C only", "Nonprofit", "Government only"),
        qq("Warby Parker is classic…", "D2C", "B2B enterprise", "Franchise B2B2C", "Wholesale only"),
        qq("B2B cycles are usually…", "Longer with multiple stakeholders", "One-click impulse", "Illegal", "No demos"),
        qq("LinkedIn ads fit best for…", "B2B job title targeting", "Toddler products only", "Local pizza only", "No targeting"),
        qq("B2B2C means…", "Partner reaches end customer", "No consumer involved", "Only wholesale", "B2B only"),
      ],
    }
  ),

  "smart-goals-kpis-and-okrs": richDM(
    40,
    "Turn vague 'grow Instagram' into SMART goals, weekly KPIs, and quarterly OKRs — template used at Google and startups.",
    ["Write SMART goal with all 5 letters explicit", "List 3 KPIs vs 1 OKR for same initiative", "Tie marketing metric to revenue", "Avoid vanity KPI trap"],
    {
      whatIs: `### SMART goals

**S**pecific **M**easurable **A**chievable **R**elevant **T**ime-bound

**Bad:** "Get more traffic."
**SMART:** "Grow organic blog sessions from 2,000 to 3,500/month by Dec 31 via 8 new SEO cluster posts."

### KPIs vs OKRs

- **KPIs:** Ongoing health (email open rate, CPA, NPS)
- **OKRs:** Ambitious quarter push — Objective + 3 Key Results

**Example OKR (e-commerce):**
- **O:** Become top-3 organic skincare brand in UK
- **KR1:** Organic revenue £40k/mo (from £22k)
- **KR2:** 15 keywords in top 3
- **KR3:** Email list 50k (from 28k)`,
      whyUse: "Managers reject vague plans. SMART + OKRs show you think in outcomes.",
      whenToUse: "Quarterly planning, client proposals, performance reviews.",
      steps: [
        { title: "Fix a vague goal", body: "Take 'improve social' and rewrite SMART with numbers + date." },
        { title: "Separate KPI vs OKR", body: "One KPI you watch weekly; one OKR for the quarter." },
      ],
      example: `### New blog launch — complete goal stack

**SMART:** Publish 24 posts in 6 months averaging 1,500 words; reach 10k monthly organic sessions by month 6.

**Weekly KPIs:** Sessions, avg position top 10 keywords, email signups from blog.

**Q OKR:** Objective — Blog becomes #1 lead source | KR — 200 MQLs from organic.`,
      realWorld: "**Google** popularized OKRs internally.\n\n**Startups** tie KR to ARR growth.\n\n**Agencies** tie SMART to client contract renewals.",
      commonMistakes: "1. KPIs without owners\n2. OKRs too easy (100% hit always)\n3. Vanity followers as KR\n4. No baseline\n5. Changing goal mid-quarter without note",
      tryIt: "Write SMART + 3 KPIs + 1 OKR for a **real** YouTube channel or blog you follow. Use estimated real numbers.",
      quiz: [
        qq("SMART 'T' means…", "Time-bound deadline", "Twitter", "Technical", "Team only"),
        qq("OKRs differ from KPIs because…", "OKRs are ambitious quarterly outcomes", "OKRs are daily only", "KPIs are never measured", "Same thing"),
        qq("Bad goal example…", "'Do more marketing'", "Increase leads 20% by Q3", "Reduce CPA to $18 by June", "Grow list 5k in 90 days"),
        qq("KR should be…", "Measurable", "Vague", "Secret", "Unrelated"),
        qq("Weekly KPI for paid ads often includes…", "CPA and spend pacing", "Logo color", "Office rent", "HR count"),
      ],
    }
  ),
};
