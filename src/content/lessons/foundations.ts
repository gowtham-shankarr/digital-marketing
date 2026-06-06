import type { Lesson } from "@/lib/types";

export const foundationsLessons: Lesson[] = [
  {
    "slug": "digital-marketing-vs-traditional-marketing",
    "title": "Digital Marketing vs Traditional Marketing",
    "track": "foundations",
    "level": "base",
    "order": 1,
    "estimatedMinutes": 40,
    "summary": "See how Nike, Coca-Cola, and local businesses split budget between TV/print and search/social — and why digital wins on measurement.",
    "objectives": [
      "Name 5+ digital channels and 4+ traditional channels with real brand examples",
      "Explain why digital attribution is easier (and where it still breaks)",
      "Compare cost, speed, and targeting: billboard vs. Meta ad",
      "Recommend a channel mix for a $5k/month local business budget"
    ],
    "whatIs": "### Digital vs traditional — the split every marketer must know\n\n**Digital marketing** = promoting through online channels where you can usually measure clicks, views, signups, and sales.\n\n**Traditional marketing** = offline channels: TV, radio, print, billboards, direct mail, events.\n\n### Side-by-side comparison\n\n| | **Traditional** | **Digital** |\n|---|----------------|-------------|\n| **Examples** | Super Bowl ad, subway poster, radio spot | Google Search, Instagram Reels, email newsletter |\n| **Targeting** | Broad (everyone watching the game) | Narrow (women 25–34 in Chicago interested in yoga) |\n| **Cost entry** | Often high ($5k–$500k+) | Can start at $50/day on ads |\n| **Speed** | Weeks to produce TV; slow to change | Launch ad in hours; pause instantly |\n| **Measurement** | Estimates, surveys, brand lift studies | Clicks, conversions, ROAS in near real-time |\n\n### Real brand: **Coca-Cola**\n\n- **Traditional:** Holiday TV commercials worldwide — builds emotion and brand memory; hard to tie one ad to one soda purchase.\n- **Digital:** Instagram, TikTok challenges, app promotions — tracks engagement, redemptions, and app downloads.\n\nThey need **both**: TV for mass culture; digital for daily engagement and measurable activations.\n\n### Real brand: **Joe's local gym** (traditional + digital)\n\n- **Traditional:** Flyers at coffee shops, sponsor a 5K race ($500)\n- **Digital:** Instagram Reels of workouts, Google \"gym near me\" ads, email trial offers\n\n**Result pattern:** Digital drives **trial signups with known CPA**; traditional builds **neighborhood name recognition** digital alone misses.",
    "whyUse": "Clients and bosses ask 'Why spend on Instagram instead of radio?' You answer with targeting, cost, and metrics — not 'because it's trendy.'",
    "whenToUse": "Budget planning, pitch decks, comparing agency proposals, and explaining why a billboard alone won't fix a leaky website.",
    "steps": [
      {
        "title": "List channels you saw today",
        "body": "Before leaving home: did you see a billboard, Instagram ad, Google result, or email? Write 4 examples — label each digital or traditional."
      },
      {
        "title": "Compare one pair",
        "body": "Pick TV ad vs. YouTube pre-roll. Who sees it? Can you pause it? How would the brand measure success?"
      },
      {
        "title": "Study Coca-Cola + local gym",
        "body": "Copy the comparison table into notes. Add a third brand you use (Spotify, Nike, etc.)."
      },
      {
        "title": "Budget exercise",
        "body": "Split $5,000/month for a dental clinic: what goes digital vs traditional? Write % and why."
      },
      {
        "title": "Practice + quiz",
        "body": "Complete Practice with a real local business you know."
      }
    ],
    "example": "### Worked example: $5,000/month — **Planet Fitness**-style local gym\n\n| Channel | Spend | Tactic | Measurable outcome |\n|---------|-------|--------|-------------------|\n| Google Search | $1,800 | \"gym near [city]\" | 120 trial signups, CPA $15 |\n| Instagram | $1,200 | Reels + $1 promo ad | 80K views, 40 signups |\n| Flyers / local | $500 | Apartment complex drop | Unknown — coupon code \"APT10\" tracks 12 signups |\n| Radio (traditional) | $1,500 | Morning drive spot | Brand awareness only — ask \"how did you hear?\" at signup |\n\n**Insight:** Digital = **72% of signups trackable**. Radio might help but requires **asking every new member** how they found you — many gyms skip this and waste radio spend.",
    "realWorld": "**Nike** Super Bowl ads (traditional emotion) + Nike app and SNKRS drops (digital conversion).\n\n**Political campaigns** still spend heavily on TV (traditional) but fundraise via email/SMS (digital) with dollar-per-click tracked to the penny.\n\n**DTC brands** often skip TV until Series B; they live on Meta/TikTok where ROAS is daily breakfast.",
    "commonMistakes": "1. **Digital-only snobbery** — local services still win with signage and events\n2. **Traditional without tracking** — use unique URLs or codes on print\n3. **Expecting TV to drive instant sales** — awareness lag is real\n4. **Ignoring brand** — performance digital still needs consistent message\n5. **No landing page** — digital ads that send to homepage waste money",
    "tryIt": "### Practice\n\nPick a **real local business** (restaurant, salon, gym). Interview their site or visit in person.\n\n1. List 3 traditional tactics they use (or could)\n2. List 3 digital tactics with **one metric each** (followers, reviews, ad library, email signup)\n3. Recommend budget split for $2k/month\n\n**Deliverable:** Half-page brief with business name and numbers.",
    "quiz": [
      {
        "question": "Google Search ads for 'plumber near me' are primarily…",
        "options": [
          "Digital and high-intent",
          "Traditional print",
          "Earned only",
          "Not measurable"
        ],
        "answer": 0
      },
      {
        "question": "Main advantage of digital over billboard is…",
        "options": [
          "Granular targeting + measurement",
          "Always cheaper",
          "No creative needed",
          "Works without website"
        ],
        "answer": 0
      },
      {
        "question": "Coca-Cola uses TV mainly for…",
        "options": [
          "Mass brand emotion",
          "Click tracking",
          "Email capture",
          "Local SEO"
        ],
        "answer": 0
      },
      {
        "question": "Best practice for traditional spend is…",
        "options": [
          "Use tracking codes or 'how did you hear us?'",
          "Never measure",
          "Replace all digital",
          "Skip local"
        ],
        "answer": 0
      },
      {
        "question": "A $5k local gym should…",
        "options": [
          "Blend digital performance + some local traditional",
          "TV only",
          "Ignore Google",
          "No metrics"
        ],
        "answer": 0
      }
    ],
    "playground": "none"
  },
  {
    "slug": "owned-earned-and-paid-media",
    "title": "Owned, Earned, and Paid Media",
    "track": "foundations",
    "level": "base",
    "order": 2,
    "estimatedMinutes": 38,
    "summary": "Learn the Glossier and Red Bull media models — owned (your site), earned (others talk), paid (you buy reach).",
    "objectives": [
      "Define owned, earned, and paid with 2 examples each from real brands",
      "Audit any brand's mix across the three types",
      "Explain why over-reliance on paid is risky",
      "Design a starter mix for a new product launch"
    ],
    "whatIs": "### The three types of media\n\n| Type | You control? | You pay platform? | Example |\n|------|-------------|-------------------|---------|\n| **Owned** | Yes | Hosting/tools only | Website, blog, email list, app |\n| **Earned** | No (others choose to share) | No | Press, reviews, shares, word of mouth |\n| **Paid** | Partial (ad + targeting) | Yes | Google Ads, Meta ads, influencers (paid posts) |\n\n### **Glossier** (beauty D2C)\n\n- **Owned:** glossier.com, blog, email — owns customer relationship\n- **Earned:** Customers post #glossier on Instagram; Into The Gloss editorial credibility\n- **Paid:** Boosts best UGC, prospecting ads on Meta\n\n**Flywheel:** Earned UGC → paid amplification → owned email capture → repeat purchase.\n\n### **Red Bull** (extreme content)\n\n- **Owned:** redbull.com, Red Bull TV, events\n- **Earned:** Athletes and fans share jumps/races globally\n- **Paid:** Sponsorships, some paid social\n\nRed Bull is a **media company that sells cans** — content drives earned at scale.",
    "whyUse": "When Meta ad costs rise 30%, brands with strong **owned email** and **earned community** survive. Paid-only brands panic.",
    "whenToUse": "Annual planning, content strategy, crisis (bad earned review), and explaining why you need a blog — not only ads.",
    "steps": [
      {
        "title": "Audit your favorite brand",
        "body": "Open website (owned), Google reviews (earned), Meta Ad Library (paid). 10 minutes, three columns."
      },
      {
        "title": "Classify 9 touchpoints",
        "body": "3 owned, 3 earned, 3 paid from brands you use daily."
      },
      {
        "title": "Find the flywheel",
        "body": "How does earned feed paid or owned for Glossier or Nike?"
      },
      {
        "title": "Practice mix",
        "body": "Design launch mix for fictional product."
      }
    ],
    "example": "### 90-day launch mix — fictional skincare brand\n\n| Week | Owned | Earned | Paid |\n|------|-------|--------|------|\n| 1–4 | Landing page + waitlist | Seed 20 micro-influencers (free product) | $0 — build list |\n| 5–8 | Blog: ingredient science | Reviews on r/SkincareAddiction | $2k Meta retargeting waitlist |\n| 9–12 | Email launch sequence | PR pitch to 5 beauty editors | $5k prospecting + UGC ads |\n\n**KPIs:** Email list size (owned), mention sentiment (earned), CPA (paid).",
    "realWorld": "**Apple** keynotes (owned/earned hybrid) + App Store (owned) + search ads for competitors' keywords (paid).\n\n**Tesla** Elon tweets = earned (volatile!); minimal traditional paid for years.\n\n**SMB mistake:** Only boosted Facebook posts — no site SEO, no email — **rented audience** on Meta.",
    "commonMistakes": "1. **Calling boosted posts 'owned'** — it's paid\n2. **Buying fake earned** (fake reviews) — platform bans\n3. **No owned capture** — 100% paid traffic with no email\n4. **Ignoring negative earned** — respond to reviews\n5. **Same message on all three** — adapt format per type",
    "tryIt": "### Practice\n\nFor **Spotify**, **a local café**, or **HubSpot**, fill a table: 2 owned, 2 earned, 2 paid touchpoints each with URLs or descriptions.\n\n**Deliverable:** Screenshot or links + one sentence on which type drives most trust for that brand.",
    "quiz": [
      {
        "question": "Email subscriber list is…",
        "options": [
          "Owned media",
          "Earned only",
          "Paid media",
          "Not marketing"
        ],
        "answer": 0
      },
      {
        "question": "A viral TikTok from a customer is…",
        "options": [
          "Earned media",
          "Owned",
          "Always paid",
          "Illegal"
        ],
        "answer": 0
      },
      {
        "question": "Glossier's flywheel uses earned UGC to…",
        "options": [
          "Fuel paid ads and owned email",
          "Replace product",
          "Avoid website",
          "Skip metrics"
        ],
        "answer": 0
      },
      {
        "question": "Risk of paid-only strategy is…",
        "options": [
          "Rising CPMs with no owned audience",
          "Free forever",
          "Better than SEO",
          "No tracking"
        ],
        "answer": 0
      },
      {
        "question": "Company blog on your domain is…",
        "options": [
          "Owned",
          "Earned",
          "Paid",
          "Outbound only"
        ],
        "answer": 0
      }
    ],
    "playground": "none"
  },
  {
    "slug": "inbound-vs-outbound-marketing",
    "title": "Inbound vs Outbound Marketing",
    "track": "foundations",
    "level": "base",
    "order": 3,
    "estimatedMinutes": 38,
    "summary": "HubSpot built a billion-dollar brand on inbound; SDR cold email is outbound — see when each wins with real CPL patterns.",
    "objectives": [
      "Define inbound and outbound with 3 tactics each",
      "Compare HubSpot inbound vs enterprise outbound",
      "Design one inbound asset + one outbound touch for same product",
      "Estimate relative CPL for mature inbound vs cold outbound"
    ],
    "whatIs": "### Inbound = they come to you | Outbound = you reach out\n\n**Inbound:** Blog, SEO, podcasts, free tools, webinars — buyer opts in when ready.\n\n**Outbound:** Cold email, cold calls, display ads to cold lists, LinkedIn DMs — you interrupt.\n\n### **HubSpot** inbound machine\n\n- Blog: \"What is inbound marketing?\" ranks for years\n- Free CRM captures emails\n- Certifications nurture trust\n- **CPL drops over time** as content compounds\n\n### Outbound still wins when\n\n- Enterprise $100k+ deals (named accounts)\n- New market with zero search volume\n- Speed test before content ranks (90-day inbound lag)",
    "whyUse": "Founders say 'just run ads.' You explain why a blog + lead magnet reduces CAC over 12 months.",
    "whenToUse": "B2B planning, content calendar justification, and avoiding spammy outbound that burns domain reputation.",
    "steps": [
      {
        "title": "Find HubSpot inbound examples",
        "body": "Google one question you have about marketing — see if HubSpot ranks. That's inbound."
      },
      {
        "title": "Spot outbound",
        "body": "Check LinkedIn — sponsored InMail and cold SDR messages are outbound."
      },
      {
        "title": "Same product, two tactics",
        "body": "Pick a CRM — one inbound lead magnet idea, one outbound email subject line."
      }
    ],
    "example": "### B2B software — 6-month comparison (illustrative)\n\n| Channel | Month 1 CPL | Month 6 CPL | Notes |\n|---------|-------------|-------------|-------|\n| Inbound (SEO + ebook) | $180 | $45 | Content ranks, compounds |\n| Outbound (SDR email) | $120 | $110 | Linear labor cost |\n\n**Hybrid:** Outbound books demos; inbound nurtures those not ready — **HubSpot does both.**",
    "realWorld": "**Intercom** early blog + docs (inbound). **Oracle** enterprise outbound armies.\n\n**Newsletters** (inbound permission) vs **purchased lists** (outbound spam — illegal in many cases).",
    "commonMistakes": "1. Cold email without targeting\n2. Inbound without CTA capture\n3. Expecting inbound in 2 weeks\n4. Outbound without personalization\n5. No CRM to track source",
    "tryIt": "### Programming task (~15 min)\n\n**Goal:** Prove you understand Inbound vs Outbound Marketing by writing code, not just reading.\n\n**Part A — Run** — Open DevTools Console (F12). Type the example from the lesson manually.\n\n**Part B — Modify** — Change one value, name, or class in the Inbound vs Outbound Marketing example. Observe what breaks or improves.\n\n**Part C — Extend** — Add one feature related to Inbound vs Outbound Marketing: extra element, log line, validation, or UI state.\n\n**Done when:** You can explain Inbound vs Outbound Marketing to a friend while pointing at your code.\n\n**Bonus:** Comment each new line with why you added it.",
    "quiz": [
      {
        "question": "SEO blog post is…",
        "options": [
          "Inbound",
          "Outbound",
          "Paid only",
          "Not marketing"
        ],
        "answer": 0
      },
      {
        "question": "Cold LinkedIn pitch is…",
        "options": [
          "Outbound",
          "Inbound",
          "Owned",
          "Earned"
        ],
        "answer": 0
      },
      {
        "question": "Inbound CPL often…",
        "options": [
          "Falls over time as content ranks",
          "Always higher",
          "Is not measurable",
          "Replaces product"
        ],
        "answer": 0
      },
      {
        "question": "HubSpot's model centers on…",
        "options": [
          "Content + free tools capturing leads",
          "TV only",
          "Cold call only",
          "Print mail"
        ],
        "answer": 0
      },
      {
        "question": "Best modern approach is often…",
        "options": [
          "Blend inbound nurture + targeted outbound",
          "Outbound only",
          "No measurement",
          "Skip email"
        ],
        "answer": 0
      }
    ],
    "playground": "none"
  },
  {
    "slug": "b2b-b2c-b2b2c-and-d2c-models",
    "title": "B2B, B2C, B2B2C, and D2C Models",
    "track": "foundations",
    "level": "base",
    "order": 4,
    "estimatedMinutes": 36,
    "summary": "Classify Nike (B2C), Salesforce (B2B), Apple Card (B2B2C), and Warby Parker (D2C) — channel and message change completely.",
    "objectives": [
      "Define B2B, B2C, B2B2C, D2C",
      "Match channels to model",
      "Classify 5 brands correctly",
      "Explain why LinkedIn fits B2B not impulse lipstick"
    ],
    "whatIs": "| Model | Sells to | Cycle | Message | Channels |\n|-------|----------|-------|---------|----------|\n| **B2C** | Consumers | Short | Emotion, speed | Instagram, TikTok |\n| **B2B** | Companies | Long | ROI, proof | LinkedIn, demos |\n| **D2C** | Consumers direct | Medium | Brand + offer | Meta, email, site |\n| **B2B2C** | Via partner | Varies | Partner + user needs | Co-marketing |\n\n**Salesforce (B2B):** 6-month cycle, multiple stakeholders, case studies with ROI.\n\n**Nike (B2C):** Lifestyle creative, athletes, SNKRS urgency.\n\n**Warby Parker (D2C):** Bypasses opticians; home try-on; heavy performance social.",
    "whyUse": "Wrong model = wrong channel. B2B meme TikTok rarely works; B2C whitepapers bore consumers.",
    "whenToUse": "Job interviews ('who's the buyer?'), persona work, and ad platform selection.",
    "steps": [
      {
        "title": "Classify 5 apps on your phone",
        "body": "B2B, B2C, or D2C? Who pays?"
      },
      {
        "title": "Compare messages",
        "body": "Read Salesforce vs Nike homepage headline — tone difference is the lesson."
      }
    ],
    "example": "### Same product idea, different model\n\n**Project management tool:**\n- **B2B:** Sell to IT director — security, SSO, ROI deck\n- **B2C:** Personal todo — habit, mobile UX, $5/mo impulse\n- **D2C:** Direct from vendor site — free trial ads to individuals who expense later",
    "realWorld": "**Slack** bottom-up B2C-style adoption inside B2B.\n\n**Apple + Goldman Sachs** Apple Card = B2B2C.\n\n**Amazon** B2C marketplace + AWS B2B.",
    "commonMistakes": "1. B2B without sales alignment\n2. B2C without mobile checkout\n3. Calling marketplace B2C when you're the seller B2B2C\n4. D2C without retention email\n5. Same creative for CFO and teenager",
    "tryIt": "### Programming task (~15 min)\n\n**Goal:** Prove you understand B2B, B2C, B2B2C, and D2C Models by writing code, not just reading.\n\n**Part A — Run** — Open DevTools Console (F12). Type the example from the lesson manually.\n\n**Part B — Modify** — Change one value, name, or class in the B2B, B2C, B2B2C, and D2C Models example. Observe what breaks or improves.\n\n**Part C — Extend** — Add one feature related to B2B, B2C, B2B2C, and D2C Models: extra element, log line, validation, or UI state.\n\n**Done when:** You can explain B2B, B2C, B2B2C, and D2C Models to a friend while pointing at your code.\n\n**Bonus:** Comment each new line with why you added it.",
    "quiz": [
      {
        "question": "Salesforce primarily…",
        "options": [
          "B2B",
          "B2C only",
          "Nonprofit",
          "Government only"
        ],
        "answer": 0
      },
      {
        "question": "Warby Parker is classic…",
        "options": [
          "D2C",
          "B2B enterprise",
          "Franchise B2B2C",
          "Wholesale only"
        ],
        "answer": 0
      },
      {
        "question": "B2B cycles are usually…",
        "options": [
          "Longer with multiple stakeholders",
          "One-click impulse",
          "Illegal",
          "No demos"
        ],
        "answer": 0
      },
      {
        "question": "LinkedIn ads fit best for…",
        "options": [
          "B2B job title targeting",
          "Toddler products only",
          "Local pizza only",
          "No targeting"
        ],
        "answer": 0
      },
      {
        "question": "B2B2C means…",
        "options": [
          "Partner reaches end customer",
          "No consumer involved",
          "Only wholesale",
          "B2B only"
        ],
        "answer": 0
      }
    ],
    "playground": "none"
  },
  {
    "slug": "core-marketing-metrics-glossary",
    "title": "Core Marketing Metrics Glossary",
    "track": "foundations",
    "level": "base",
    "order": 5,
    "estimatedMinutes": 45,
    "summary": "Master CPC, CPA, ROAS, LTV, and CAC with a real $5,000 ad spend worked example — the math clients expect you to know.",
    "objectives": [
      "State the formula for CPC, CTR, CPA, ROAS, ROI, LTV, CAC, conversion rate",
      "Calculate all metrics from one sample campaign dataset",
      "Tell a client which metric matters at TOFU vs BOFU",
      "Spot when a 'good' CTR hides a bad CPA"
    ],
    "whatIs": "### The metrics dictionary (memorize formulas)\n\n| Metric | Formula | Plain English |\n|--------|---------|---------------|\n| **CTR** | Clicks ÷ Impressions | Ad creative relevance |\n| **CPC** | Spend ÷ Clicks | Cost per visit |\n| **CPM** | (Spend ÷ Impressions) × 1000 | Cost per 1,000 views |\n| **Conversion rate** | Conversions ÷ Clicks (or sessions) | Site/offer effectiveness |\n| **CPA / CPL** | Spend ÷ Conversions (or leads) | Cost per result |\n| **ROAS** | Revenue ÷ Ad spend | E-commerce return |\n| **ROI** | (Gain − Cost) ÷ Cost | Overall profitability |\n| **CAC** | Total sales+marketing cost ÷ New customers | Blended acquisition |\n| **LTV** | Avg revenue per customer × lifespan | Long-term value |\n\n### Which metric when?\n\n- **TOFU brand video:** CPM, video view rate, reach\n- **Search ads:** CPC, CTR, conversion rate, CPA\n- **E-commerce:** ROAS, AOV, cart abandonment\n- **SaaS:** CAC, LTV, LTV:CAC ratio (aim 3:1+)",
    "whyUse": "Misusing metrics loses trust. Saying 'CTR is 5%!' while CPA is $400 on a $50 product signals junior level.",
    "whenToUse": "Weekly reports, ad optimization, board updates, and interview case questions.",
    "steps": [
      {
        "title": "Copy the formula table",
        "body": "Flashcard each formula without peeking."
      },
      {
        "title": "Do the math by hand",
        "body": "Use Example tab numbers — no calculator app until you try manually."
      },
      {
        "title": "Label funnel stage",
        "body": "For each metric, write TOFU/MOFU/BOFU where it's primary."
      },
      {
        "title": "Find a bad tradeoff",
        "body": "When is high CTR misleading? (Hint: wrong audience clicks.)"
      }
    ],
    "example": "### Full calculation — **Allbirds**-style shoe campaign\n\n**Inputs:** $5,000 spend | 250,000 impressions | 7,500 clicks | 150 orders | $12,750 revenue | AOV $85\n\n| Step | Calculation | Result |\n|------|-------------|--------|\n| CTR | 7,500 ÷ 250,000 | **3%** |\n| CPC | $5,000 ÷ 7,500 | **$0.67** |\n| CPM | ($5,000 ÷ 250,000) × 1000 | **$20** |\n| Conv. rate (click→order) | 150 ÷ 7,500 | **2%** |\n| CPA | $5,000 ÷ 150 | **$33.33** |\n| ROAS | $12,750 ÷ $5,000 | **2.55x** |\n\n**Margin check:** If gross margin is 50% ($42.50 per $85 order), profit per order ≈ $9.17 before ops — **CPA $33 may be unprofitable** unless LTV includes repeat buys. That's why D2C tracks **LTV:CAC**, not ROAS alone.",
    "realWorld": "**Meta Ads Manager** shows CPC, CPM, CTR daily.\n\n**Google Ads** adds Quality Score affecting CPC.\n\n**Investors** ask SaaS startups LTV:CAC — marketing and product both matter.",
    "commonMistakes": "1. **ROAS without margin** — 4x ROAS can still lose money\n2. **Clicks as success** — junk traffic inflates CTR\n3. **Mixing attribution windows** — 1-day vs 7-day ROAS differs\n4. **Ignoring organic** — blended CAC includes content labor\n5. **Vanity metrics on dashboards** — followers without revenue",
    "tryIt": "### Practice\n\nUse **Meta Ad Library** or a case online. Estimate or find: spend, impressions, clicks (or invent realistic numbers for a café promo).\n\nCalculate CTR, CPC, and CPA. Write 3 sentences: profitable or not? Why?\n\n**Deliverable:** Table + recommendation.",
    "quiz": [
      {
        "question": "ROAS 4x with $10k spend means revenue…",
        "options": [
          "$40,000",
          "$4,000",
          "$2,500",
          "$10,000"
        ],
        "answer": 0
      },
      {
        "question": "CPA is…",
        "options": [
          "Spend ÷ conversions",
          "Clicks ÷ impressions",
          "Revenue × spend",
          "Impressions ÷ spend"
        ],
        "answer": 0
      },
      {
        "question": "High CTR but high CPA often means…",
        "options": [
          "Wrong audience clicks but doesn't buy",
          "Perfect campaign",
          "Low budget",
          "SEO issue"
        ],
        "answer": 0
      },
      {
        "question": "LTV:CAC of 3:1 generally suggests…",
        "options": [
          "Healthy unit economics for SaaS",
          "Shut down ads",
          "Ignore retention",
          "CTR only"
        ],
        "answer": 0
      },
      {
        "question": "TOFU video campaign primary metric is often…",
        "options": [
          "CPM / view rate",
          "CPA only",
          "Cart abandonment",
          "Email unsubscribes"
        ],
        "answer": 0
      }
    ],
    "playground": "none"
  },
  {
    "slug": "the-marketing-mix-4ps-and-7ps",
    "title": "The Marketing Mix: 4Ps and 7Ps",
    "track": "foundations",
    "level": "base",
    "order": 6,
    "estimatedMinutes": 38,
    "summary": "Product, Price, Place, Promotion — extended to People, Process, Physical evidence for services.",
    "objectives": [
      "Explain The Marketing Mix: 4Ps and 7Ps in plain English with a real brand example",
      "Apply The Marketing Mix: 4Ps and 7Ps to a funnel stage and name the right KPI",
      "Work through numeric or scenario examples (not theory only)",
      "Complete the practice deliverable with documented results"
    ],
    "whatIs": "### What is The Marketing Mix: 4Ps and 7Ps?\n\n**The Marketing Mix: 4Ps and 7Ps** — Product, Price, Place, Promotion — extended to People, Process, Physical evidence for services.\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.\n\n#### 1. 4Ps: what you sell, for how much, where distributed, how promoted\n\nThis point matters because it connects directly to **The Marketing Mix: 4Ps and 7Ps** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 2. 7Ps add service delivery: staff, systems, environment\n\nThis point matters because it connects directly to **The Marketing Mix: 4Ps and 7Ps** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 3. Digital changes Place (e-commerce) and Promotion (ads, content)\n\nThis point matters because it connects directly to **The Marketing Mix: 4Ps and 7Ps** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 4. Misaligned Ps confuse customers\n\nThis point matters because it connects directly to **The Marketing Mix: 4Ps and 7Ps** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n### Quick reference\n\n| Question | Answer |\n|----------|--------|\n| **One-line summary** | Product, Price, Place, Promotion — extended to People, Process, Physical evidence for services. |\n| **Level** | base — foundational for all marketers |\n| **Proof you learned it** | Practice deliverable + quiz + real brand notes |",
    "whyUse": "**The Marketing Mix: 4Ps and 7Ps** turns vague \"we should market more\" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.",
    "whenToUse": "Use **The Marketing Mix: 4Ps and 7Ps** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.",
    "steps": [
      {
        "title": "Read with a real brand in mind",
        "body": "Open **Nike's** website or ads in another tab. As you read, note one place they already apply (or violate) **The Marketing Mix: 4Ps and 7Ps**. Screenshot optional."
      },
      {
        "title": "Write the definition in your own words",
        "body": "Without looking, explain The Marketing Mix: 4Ps and 7Ps in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline."
      },
      {
        "title": "Map to funnel stage",
        "body": "Label this topic: primarily TOFU, MOFU, BOFU, or retention? One sentence why. Example: 'BOFU — removes checkout friction.'"
      },
      {
        "title": "Study the worked example",
        "body": "Copy the numbers table from the Examples tab into your notes. Recalculate one metric manually (CTR, CPA, ROAS, or conversion rate)."
      },
      {
        "title": "Complete the practice task",
        "body": "Analyze one SaaS product across all 7Ps in bullet form."
      },
      {
        "title": "Self-check before quiz",
        "body": "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections."
      }
    ],
    "example": "### Real-world scenario: **Nike**\n\n**Context:** Product, Price, Place, Promotion — extended to People, Process, Physical evidence for services.\n\n**What the marketing team did:**\n1. Audited current performance (baseline metrics documented)\n2. Applied **The Marketing Mix: 4Ps and 7Ps** to the highest-impact customer segment first\n3. Ran a 2-week test with $500–$2,000 or equivalent time budget\n4. Measured results weekly against one primary KPI\n\n**Sample results pattern (illustrative):**\n\n| Metric | Before | After |\n|--------|--------|-------|\n| Primary KPI | Baseline | +15–30% improvement |\n| Cost efficiency | Unknown | Clear CPA/ROAS |\n| Learning | — | Documented in retrospective |\n\n**Your job in the Practice tab:** Recreate this thinking for a brand you choose — real or fictional — with numbers you research or estimate realistically.",
    "realWorld": "### Where you see **The Marketing Mix: 4Ps and 7Ps** in the real world\n\n**Nike** blends TV spots (traditional) with Nike Training Club app and Instagram (digital) — same brand story, different measurement.\n\n**Starbucks** uses its app (owned), viral seasonal drinks (earned social), and geo-targeted Meta ads (paid) to drive store visits.\n\n**Stripe** publishes docs and podcasts (inbound) while running targeted LinkedIn ads to CFOs and developers (outbound + paid).\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.",
    "commonMistakes": "1. **Only reading definitions** — The Marketing Mix: 4Ps and 7Ps clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write \"before\" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo",
    "tryIt": "### Practice — The Marketing Mix: 4Ps and 7Ps\n\nAnalyze one SaaS product across all 7Ps in bullet form.\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week",
    "quiz": [
      {
        "question": "Which is the best real-world reference for The Marketing Mix: 4Ps and 7Ps?",
        "options": [
          "Nike — study their live marketing",
          "A random meme page",
          "Ignore all brands",
          "Only textbook definitions"
        ],
        "answer": 0
      },
      {
        "question": "\"4Ps\" in practice means…",
        "options": [
          "4Ps: what you sell, for how much, where distributed, how promoted",
          "Memorize without using",
          "Only for enterprise",
          "Not measurable"
        ],
        "answer": 0
      },
      {
        "question": "After this lesson you should be able to…",
        "options": [
          "Explain with a real example + numbers",
          "Only recite the title",
          "Skip practice",
          "Avoid all tools"
        ],
        "answer": 0
      },
      {
        "question": "A portfolio-ready note includes…",
        "options": [
          "Brand, action, metric, result",
          "Copied text only",
          "No numbers",
          "Only definitions"
        ],
        "answer": 0
      },
      {
        "question": "Best next step after reading?",
        "options": [
          "Complete Practice + quiz",
          "Skip to Module 14",
          "Ignore examples",
          "Never apply to a brand"
        ],
        "answer": 0
      }
    ],
    "playground": "none"
  },
  {
    "slug": "stp-segmentation-targeting-positioning",
    "title": "STP: Segmentation, Targeting, Positioning",
    "track": "foundations",
    "level": "base",
    "order": 7,
    "estimatedMinutes": 38,
    "summary": "STP is the strategic sequence: divide the market, choose segments, own a position in the mind.",
    "objectives": [
      "Explain STP: Segmentation, Targeting, Positioning in plain English with a real brand example",
      "Apply STP: Segmentation, Targeting, Positioning to a funnel stage and name the right KPI",
      "Work through numeric or scenario examples (not theory only)",
      "Complete the practice deliverable with documented results"
    ],
    "whatIs": "### What is STP: Segmentation, Targeting, Positioning?\n\n**STP: Segmentation, Targeting, Positioning** — STP is the strategic sequence: divide the market, choose segments, own a position in the mind.\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.\n\n#### 1. Segmentation: group customers by needs, behavior, or firmographics\n\nThis point matters because it connects directly to **STP: Segmentation, Targeting, Positioning** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 2. Targeting: pick segments you can serve profitably\n\nThis point matters because it connects directly to **STP: Segmentation, Targeting, Positioning** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 3. Positioning: distinct promise vs alternatives\n\nThis point matters because it connects directly to **STP: Segmentation, Targeting, Positioning** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 4. STP precedes channel and creative choices\n\nThis point matters because it connects directly to **STP: Segmentation, Targeting, Positioning** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n### Quick reference\n\n| Question | Answer |\n|----------|--------|\n| **One-line summary** | STP is the strategic sequence: divide the market, choose segments, own a position in the mind. |\n| **Level** | base — foundational for all marketers |\n| **Proof you learned it** | Practice deliverable + quiz + real brand notes |",
    "whyUse": "**STP: Segmentation, Targeting, Positioning** turns vague \"we should market more\" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.",
    "whenToUse": "Use **STP: Segmentation, Targeting, Positioning** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.",
    "steps": [
      {
        "title": "Read with a real brand in mind",
        "body": "Open **Nike's** website or ads in another tab. As you read, note one place they already apply (or violate) **STP: Segmentation, Targeting, Positioning**. Screenshot optional."
      },
      {
        "title": "Write the definition in your own words",
        "body": "Without looking, explain STP: Segmentation, Targeting, Positioning in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline."
      },
      {
        "title": "Map to funnel stage",
        "body": "Label this topic: primarily TOFU, MOFU, BOFU, or retention? One sentence why. Example: 'BOFU — removes checkout friction.'"
      },
      {
        "title": "Study the worked example",
        "body": "Copy the numbers table from the Examples tab into your notes. Recalculate one metric manually (CTR, CPA, ROAS, or conversion rate)."
      },
      {
        "title": "Complete the practice task",
        "body": "Segment a meal-delivery market into 3 groups; pick one target; write a positioning line."
      },
      {
        "title": "Self-check before quiz",
        "body": "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections."
      }
    ],
    "example": "### Real persona + ICP: **Notion** (B2B side)\n\n**ICP:** 50–500 employee tech companies, already using Slack, no unified wiki.\n\n**Persona — \"Operations lead Olivia\":**\n- **Goal:** One source of truth for team docs\n- **Pain:** Docs scattered in Drive, Confluence, Notion trials that failed\n- **Objection:** \"Another tool nobody will use\"\n- **Channel:** LinkedIn ads, productivity podcasts, template gallery SEO\n\n**Positioning line:** \"One workspace. Every doc, task, and wiki.\"\n\nMessaging came from **interviews**, not a conference room guess.",
    "realWorld": "### Where you see **STP: Segmentation, Targeting, Positioning** in the real world\n\n**Nike** blends TV spots (traditional) with Nike Training Club app and Instagram (digital) — same brand story, different measurement.\n\n**Starbucks** uses its app (owned), viral seasonal drinks (earned social), and geo-targeted Meta ads (paid) to drive store visits.\n\n**Stripe** publishes docs and podcasts (inbound) while running targeted LinkedIn ads to CFOs and developers (outbound + paid).\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.",
    "commonMistakes": "1. **Only reading definitions** — STP: Segmentation, Targeting, Positioning clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write \"before\" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo",
    "tryIt": "### Practice — STP: Segmentation, Targeting, Positioning\n\nSegment a meal-delivery market into 3 groups; pick one target; write a positioning line.\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week",
    "quiz": [
      {
        "question": "Which is the best real-world reference for STP: Segmentation, Targeting, Positioning?",
        "options": [
          "Nike — study their live marketing",
          "A random meme page",
          "Ignore all brands",
          "Only textbook definitions"
        ],
        "answer": 0
      },
      {
        "question": "\"Segmentation\" in practice means…",
        "options": [
          "Segmentation: group customers by needs, behavior, or firmographics",
          "Memorize without using",
          "Only for enterprise",
          "Not measurable"
        ],
        "answer": 0
      },
      {
        "question": "After this lesson you should be able to…",
        "options": [
          "Explain with a real example + numbers",
          "Only recite the title",
          "Skip practice",
          "Avoid all tools"
        ],
        "answer": 0
      },
      {
        "question": "A portfolio-ready note includes…",
        "options": [
          "Brand, action, metric, result",
          "Copied text only",
          "No numbers",
          "Only definitions"
        ],
        "answer": 0
      },
      {
        "question": "Best next step after reading?",
        "options": [
          "Complete Practice + quiz",
          "Skip to Module 14",
          "Ignore examples",
          "Never apply to a brand"
        ],
        "answer": 0
      }
    ],
    "playground": "none"
  },
  {
    "slug": "buyer-personas-and-ideal-customer-profile-icp",
    "title": "Buyer Personas and Ideal Customer Profile (ICP)",
    "track": "foundations",
    "level": "base",
    "order": 8,
    "estimatedMinutes": 38,
    "summary": "Personas humanize B2C segments; ICP defines firm traits for B2B sales and marketing alignment.",
    "objectives": [
      "Explain Buyer Personas and Ideal Customer Profile (ICP) in plain English with a real brand example",
      "Apply Buyer Personas and Ideal Customer Profile (ICP) to a funnel stage and name the right KPI",
      "Work through numeric or scenario examples (not theory only)",
      "Complete the practice deliverable with documented results"
    ],
    "whatIs": "### What is Buyer Personas and Ideal Customer Profile (ICP)?\n\n**Buyer Personas and Ideal Customer Profile (ICP)** — Personas humanize B2C segments; ICP defines firm traits for B2B sales and marketing alignment.\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.\n\n#### 1. Persona: name, goals, pains, objections, channels\n\nThis point matters because it connects directly to **Buyer Personas and Ideal Customer Profile (ICP)** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 2. ICP: industry, company size, tech stack, buying triggers\n\nThis point matters because it connects directly to **Buyer Personas and Ideal Customer Profile (ICP)** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 3. Built from interviews, CRM data, support tickets\n\nThis point matters because it connects directly to **Buyer Personas and Ideal Customer Profile (ICP)** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 4. Shared doc prevents generic messaging\n\nThis point matters because it connects directly to **Buyer Personas and Ideal Customer Profile (ICP)** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n### Quick reference\n\n| Question | Answer |\n|----------|--------|\n| **One-line summary** | Personas humanize B2C segments; ICP defines firm traits for B2B sales and marketing alignment. |\n| **Level** | base — foundational for all marketers |\n| **Proof you learned it** | Practice deliverable + quiz + real brand notes |",
    "whyUse": "**Buyer Personas and Ideal Customer Profile (ICP)** turns vague \"we should market more\" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.",
    "whenToUse": "Use **Buyer Personas and Ideal Customer Profile (ICP)** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.",
    "steps": [
      {
        "title": "Read with a real brand in mind",
        "body": "Open **Nike's** website or ads in another tab. As you read, note one place they already apply (or violate) **Buyer Personas and Ideal Customer Profile (ICP)**. Screenshot optional."
      },
      {
        "title": "Write the definition in your own words",
        "body": "Without looking, explain Buyer Personas and Ideal Customer Profile (ICP) in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline."
      },
      {
        "title": "Map to funnel stage",
        "body": "Label this topic: primarily TOFU, MOFU, BOFU, or retention? One sentence why. Example: 'BOFU — removes checkout friction.'"
      },
      {
        "title": "Study the worked example",
        "body": "Copy the numbers table from the Examples tab into your notes. Recalculate one metric manually (CTR, CPA, ROAS, or conversion rate)."
      },
      {
        "title": "Complete the practice task",
        "body": "Write one B2C persona and one B2B ICP for brands you invent."
      },
      {
        "title": "Self-check before quiz",
        "body": "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections."
      }
    ],
    "example": "### Real persona + ICP: **Notion** (B2B side)\n\n**ICP:** 50–500 employee tech companies, already using Slack, no unified wiki.\n\n**Persona — \"Operations lead Olivia\":**\n- **Goal:** One source of truth for team docs\n- **Pain:** Docs scattered in Drive, Confluence, Notion trials that failed\n- **Objection:** \"Another tool nobody will use\"\n- **Channel:** LinkedIn ads, productivity podcasts, template gallery SEO\n\n**Positioning line:** \"One workspace. Every doc, task, and wiki.\"\n\nMessaging came from **interviews**, not a conference room guess.",
    "realWorld": "### Where you see **Buyer Personas and Ideal Customer Profile (ICP)** in the real world\n\n**Nike** blends TV spots (traditional) with Nike Training Club app and Instagram (digital) — same brand story, different measurement.\n\n**Starbucks** uses its app (owned), viral seasonal drinks (earned social), and geo-targeted Meta ads (paid) to drive store visits.\n\n**Stripe** publishes docs and podcasts (inbound) while running targeted LinkedIn ads to CFOs and developers (outbound + paid).\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.",
    "commonMistakes": "1. **Only reading definitions** — Buyer Personas and Ideal Customer Profile (ICP) clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write \"before\" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo",
    "tryIt": "### Practice — Buyer Personas and Ideal Customer Profile (ICP)\n\nWrite one B2C persona and one B2B ICP for brands you invent.\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week",
    "quiz": [
      {
        "question": "Which is the best real-world reference for Buyer Personas and Ideal Customer Profile (ICP)?",
        "options": [
          "Nike — study their live marketing",
          "A random meme page",
          "Ignore all brands",
          "Only textbook definitions"
        ],
        "answer": 0
      },
      {
        "question": "\"Persona\" in practice means…",
        "options": [
          "Persona: name, goals, pains, objections, channels",
          "Memorize without using",
          "Only for enterprise",
          "Not measurable"
        ],
        "answer": 0
      },
      {
        "question": "After this lesson you should be able to…",
        "options": [
          "Explain with a real example + numbers",
          "Only recite the title",
          "Skip practice",
          "Avoid all tools"
        ],
        "answer": 0
      },
      {
        "question": "A portfolio-ready note includes…",
        "options": [
          "Brand, action, metric, result",
          "Copied text only",
          "No numbers",
          "Only definitions"
        ],
        "answer": 0
      },
      {
        "question": "Best next step after reading?",
        "options": [
          "Complete Practice + quiz",
          "Skip to Module 14",
          "Ignore examples",
          "Never apply to a brand"
        ],
        "answer": 0
      }
    ],
    "playground": "none"
  },
  {
    "slug": "the-customer-and-buyer-journey",
    "title": "The Customer and Buyer Journey",
    "track": "foundations",
    "level": "base",
    "order": 9,
    "estimatedMinutes": 38,
    "summary": "Journey maps track awareness → consideration → decision → retention across touchpoints.",
    "objectives": [
      "Explain The Customer and Buyer Journey in plain English with a real brand example",
      "Apply The Customer and Buyer Journey to a funnel stage and name the right KPI",
      "Work through numeric or scenario examples (not theory only)",
      "Complete the practice deliverable with documented results"
    ],
    "whatIs": "### What is The Customer and Buyer Journey?\n\n**The Customer and Buyer Journey** — Journey maps track awareness → consideration → decision → retention across touchpoints.\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.\n\n#### 1. Awareness: problem recognized\n\nAt this stage the buyer often does not know your brand yet. Content should educate and earn attention — not push a hard sale on first touch.\n\n#### 2. Consideration: comparing solutions\n\nThis point matters because it connects directly to **The Customer and Buyer Journey** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 3. Decision: purchase or sign-up\n\nThis point matters because it connects directly to **The Customer and Buyer Journey** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 4. Retention: repeat use, advocacy\n\nThis point matters because it connects directly to **The Customer and Buyer Journey** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 5. Map emotions and friction at each step\n\nThis point matters because it connects directly to **The Customer and Buyer Journey** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n### Quick reference\n\n| Question | Answer |\n|----------|--------|\n| **One-line summary** | Journey maps track awareness → consideration → decision → retention across touchpoints. |\n| **Level** | base — foundational for all marketers |\n| **Proof you learned it** | Practice deliverable + quiz + real brand notes |",
    "whyUse": "**The Customer and Buyer Journey** turns vague \"we should market more\" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.",
    "whenToUse": "Use **The Customer and Buyer Journey** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.",
    "steps": [
      {
        "title": "Read with a real brand in mind",
        "body": "Open **Spotify's** website or ads in another tab. As you read, note one place they already apply (or violate) **The Customer and Buyer Journey**. Screenshot optional."
      },
      {
        "title": "Write the definition in your own words",
        "body": "Without looking, explain The Customer and Buyer Journey in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline."
      },
      {
        "title": "Map to funnel stage",
        "body": "Label this topic: primarily TOFU, MOFU, BOFU, or retention? One sentence why. Example: 'BOFU — removes checkout friction.'"
      },
      {
        "title": "Study the worked example",
        "body": "Copy the numbers table from the Examples tab into your notes. Recalculate one metric manually (CTR, CPA, ROAS, or conversion rate)."
      },
      {
        "title": "Complete the practice task",
        "body": "Map a 6-step journey for buying a laptop online; note one friction point per step."
      },
      {
        "title": "Self-check before quiz",
        "body": "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections."
      }
    ],
    "example": "### Real-world scenario: **Spotify**\n\n**Context:** Journey maps track awareness → consideration → decision → retention across touchpoints.\n\n**What the marketing team did:**\n1. Audited current performance (baseline metrics documented)\n2. Applied **The Customer and Buyer Journey** to the highest-impact customer segment first\n3. Ran a 2-week test with $500–$2,000 or equivalent time budget\n4. Measured results weekly against one primary KPI\n\n**Sample results pattern (illustrative):**\n\n| Metric | Before | After |\n|--------|--------|-------|\n| Primary KPI | Baseline | +15–30% improvement |\n| Cost efficiency | Unknown | Clear CPA/ROAS |\n| Learning | — | Documented in retrospective |\n\n**Your job in the Practice tab:** Recreate this thinking for a brand you choose — real or fictional — with numbers you research or estimate realistically.",
    "realWorld": "### Where you see **The Customer and Buyer Journey** in the real world\n\n**Nike** blends TV spots (traditional) with Nike Training Club app and Instagram (digital) — same brand story, different measurement.\n\n**Starbucks** uses its app (owned), viral seasonal drinks (earned social), and geo-targeted Meta ads (paid) to drive store visits.\n\n**Stripe** publishes docs and podcasts (inbound) while running targeted LinkedIn ads to CFOs and developers (outbound + paid).\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.",
    "commonMistakes": "1. **Only reading definitions** — The Customer and Buyer Journey clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write \"before\" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo",
    "tryIt": "### Practice — The Customer and Buyer Journey\n\nMap a 6-step journey for buying a laptop online; note one friction point per step.\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week",
    "quiz": [
      {
        "question": "Which is the best real-world reference for The Customer and Buyer Journey?",
        "options": [
          "Spotify — study their live marketing",
          "A random meme page",
          "Ignore all brands",
          "Only textbook definitions"
        ],
        "answer": 0
      },
      {
        "question": "\"Awareness\" in practice means…",
        "options": [
          "Awareness: problem recognized",
          "Memorize without using",
          "Only for enterprise",
          "Not measurable"
        ],
        "answer": 0
      },
      {
        "question": "After this lesson you should be able to…",
        "options": [
          "Explain with a real example + numbers",
          "Only recite the title",
          "Skip practice",
          "Avoid all tools"
        ],
        "answer": 0
      },
      {
        "question": "A portfolio-ready note includes…",
        "options": [
          "Brand, action, metric, result",
          "Copied text only",
          "No numbers",
          "Only definitions"
        ],
        "answer": 0
      },
      {
        "question": "Best next step after reading?",
        "options": [
          "Complete Practice + quiz",
          "Skip to Module 14",
          "Ignore examples",
          "Never apply to a brand"
        ],
        "answer": 0
      }
    ],
    "playground": "none"
  },
  {
    "slug": "value-proposition-and-unique-selling-proposition-usp",
    "title": "Value Proposition and Unique Selling Proposition (USP)",
    "track": "foundations",
    "level": "base",
    "order": 10,
    "estimatedMinutes": 38,
    "summary": "Value proposition states customer benefit; USP is the single clearest reason to choose you.",
    "objectives": [
      "Explain Value Proposition and Unique Selling Proposition (USP) in plain English with a real brand example",
      "Apply Value Proposition and Unique Selling Proposition (USP) to a funnel stage and name the right KPI",
      "Work through numeric or scenario examples (not theory only)",
      "Complete the practice deliverable with documented results"
    ],
    "whatIs": "### What is Value Proposition and Unique Selling Proposition (USP)?\n\n**Value Proposition and Unique Selling Proposition (USP)** — Value proposition states customer benefit; USP is the single clearest reason to choose you.\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.\n\n#### 1. Value prop: who, problem, solution, outcome\n\nThis point matters because it connects directly to **Value Proposition and Unique Selling Proposition (USP)** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 2. USP must be specific and defensible\n\nThis point matters because it connects directly to **Value Proposition and Unique Selling Proposition (USP)** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 3. Test with customers\n\nnot internal opinion\n\n#### 4. Appears in headlines, ads, sales decks\n\nThis point matters because it connects directly to **Value Proposition and Unique Selling Proposition (USP)** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n### Quick reference\n\n| Question | Answer |\n|----------|--------|\n| **One-line summary** | Value proposition states customer benefit; USP is the single clearest reason to choose you. |\n| **Level** | base — foundational for all marketers |\n| **Proof you learned it** | Practice deliverable + quiz + real brand notes |",
    "whyUse": "**Value Proposition and Unique Selling Proposition (USP)** turns vague \"we should market more\" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.",
    "whenToUse": "Use **Value Proposition and Unique Selling Proposition (USP)** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.",
    "steps": [
      {
        "title": "Read with a real brand in mind",
        "body": "Open **McDonald's's** website or ads in another tab. As you read, note one place they already apply (or violate) **Value Proposition and Unique Selling Proposition (USP)**. Screenshot optional."
      },
      {
        "title": "Write the definition in your own words",
        "body": "Without looking, explain Value Proposition and Unique Selling Proposition (USP) in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline."
      },
      {
        "title": "Map to funnel stage",
        "body": "Label this topic: primarily TOFU, MOFU, BOFU, or retention? One sentence why. Example: 'BOFU — removes checkout friction.'"
      },
      {
        "title": "Study the worked example",
        "body": "Copy the numbers table from the Examples tab into your notes. Recalculate one metric manually (CTR, CPA, ROAS, or conversion rate)."
      },
      {
        "title": "Complete the practice task",
        "body": "Write value prop + USP for an eco-friendly laundry brand in under 100 words total."
      },
      {
        "title": "Self-check before quiz",
        "body": "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections."
      }
    ],
    "example": "### Real-world scenario: **McDonald's**\n\n**Context:** Value proposition states customer benefit; USP is the single clearest reason to choose you.\n\n**What the marketing team did:**\n1. Audited current performance (baseline metrics documented)\n2. Applied **Value Proposition and Unique Selling Proposition (USP)** to the highest-impact customer segment first\n3. Ran a 2-week test with $500–$2,000 or equivalent time budget\n4. Measured results weekly against one primary KPI\n\n**Sample results pattern (illustrative):**\n\n| Metric | Before | After |\n|--------|--------|-------|\n| Primary KPI | Baseline | +15–30% improvement |\n| Cost efficiency | Unknown | Clear CPA/ROAS |\n| Learning | — | Documented in retrospective |\n\n**Your job in the Practice tab:** Recreate this thinking for a brand you choose — real or fictional — with numbers you research or estimate realistically.",
    "realWorld": "### Where you see **Value Proposition and Unique Selling Proposition (USP)** in the real world\n\n**Nike** blends TV spots (traditional) with Nike Training Club app and Instagram (digital) — same brand story, different measurement.\n\n**Starbucks** uses its app (owned), viral seasonal drinks (earned social), and geo-targeted Meta ads (paid) to drive store visits.\n\n**Stripe** publishes docs and podcasts (inbound) while running targeted LinkedIn ads to CFOs and developers (outbound + paid).\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.",
    "commonMistakes": "1. **Only reading definitions** — Value Proposition and Unique Selling Proposition (USP) clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write \"before\" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo",
    "tryIt": "### Practice — Value Proposition and Unique Selling Proposition (USP)\n\nWrite value prop + USP for an eco-friendly laundry brand in under 100 words total.\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week",
    "quiz": [
      {
        "question": "Which is the best real-world reference for Value Proposition and Unique Selling Proposition (USP)?",
        "options": [
          "McDonald's — study their live marketing",
          "A random meme page",
          "Ignore all brands",
          "Only textbook definitions"
        ],
        "answer": 0
      },
      {
        "question": "\"Value prop\" in practice means…",
        "options": [
          "Value prop: who, problem, solution, outcome",
          "Memorize without using",
          "Only for enterprise",
          "Not measurable"
        ],
        "answer": 0
      },
      {
        "question": "After this lesson you should be able to…",
        "options": [
          "Explain with a real example + numbers",
          "Only recite the title",
          "Skip practice",
          "Avoid all tools"
        ],
        "answer": 0
      },
      {
        "question": "A portfolio-ready note includes…",
        "options": [
          "Brand, action, metric, result",
          "Copied text only",
          "No numbers",
          "Only definitions"
        ],
        "answer": 0
      },
      {
        "question": "Best next step after reading?",
        "options": [
          "Complete Practice + quiz",
          "Skip to Module 14",
          "Ignore examples",
          "Never apply to a brand"
        ],
        "answer": 0
      }
    ],
    "playground": "none"
  },
  {
    "slug": "smart-goals-kpis-and-okrs",
    "title": "SMART Goals, KPIs, and OKRs",
    "track": "foundations",
    "level": "base",
    "order": 11,
    "estimatedMinutes": 40,
    "summary": "Turn vague 'grow Instagram' into SMART goals, weekly KPIs, and quarterly OKRs — template used at Google and startups.",
    "objectives": [
      "Write SMART goal with all 5 letters explicit",
      "List 3 KPIs vs 1 OKR for same initiative",
      "Tie marketing metric to revenue",
      "Avoid vanity KPI trap"
    ],
    "whatIs": "### SMART goals\n\n**S**pecific **M**easurable **A**chievable **R**elevant **T**ime-bound\n\n**Bad:** \"Get more traffic.\"\n**SMART:** \"Grow organic blog sessions from 2,000 to 3,500/month by Dec 31 via 8 new SEO cluster posts.\"\n\n### KPIs vs OKRs\n\n- **KPIs:** Ongoing health (email open rate, CPA, NPS)\n- **OKRs:** Ambitious quarter push — Objective + 3 Key Results\n\n**Example OKR (e-commerce):**\n- **O:** Become top-3 organic skincare brand in UK\n- **KR1:** Organic revenue £40k/mo (from £22k)\n- **KR2:** 15 keywords in top 3\n- **KR3:** Email list 50k (from 28k)",
    "whyUse": "Managers reject vague plans. SMART + OKRs show you think in outcomes.",
    "whenToUse": "Quarterly planning, client proposals, performance reviews.",
    "steps": [
      {
        "title": "Fix a vague goal",
        "body": "Take 'improve social' and rewrite SMART with numbers + date."
      },
      {
        "title": "Separate KPI vs OKR",
        "body": "One KPI you watch weekly; one OKR for the quarter."
      }
    ],
    "example": "### New blog launch — complete goal stack\n\n**SMART:** Publish 24 posts in 6 months averaging 1,500 words; reach 10k monthly organic sessions by month 6.\n\n**Weekly KPIs:** Sessions, avg position top 10 keywords, email signups from blog.\n\n**Q OKR:** Objective — Blog becomes #1 lead source | KR — 200 MQLs from organic.",
    "realWorld": "**Google** popularized OKRs internally.\n\n**Startups** tie KR to ARR growth.\n\n**Agencies** tie SMART to client contract renewals.",
    "commonMistakes": "1. KPIs without owners\n2. OKRs too easy (100% hit always)\n3. Vanity followers as KR\n4. No baseline\n5. Changing goal mid-quarter without note",
    "tryIt": "### Programming task (~15 min)\n\n**Goal:** Prove you understand SMART Goals, KPIs, and OKRs by writing code, not just reading.\n\n**Part A — Run** — Open DevTools Console (F12). Type the example from the lesson manually.\n\n**Part B — Modify** — Change one value, name, or class in the SMART Goals, KPIs, and OKRs example. Observe what breaks or improves.\n\n**Part C — Extend** — Add one feature related to SMART Goals, KPIs, and OKRs: extra element, log line, validation, or UI state.\n\n**Done when:** You can explain SMART Goals, KPIs, and OKRs to a friend while pointing at your code.\n\n**Bonus:** Comment each new line with why you added it.",
    "quiz": [
      {
        "question": "SMART 'T' means…",
        "options": [
          "Time-bound deadline",
          "Twitter",
          "Technical",
          "Team only"
        ],
        "answer": 0
      },
      {
        "question": "OKRs differ from KPIs because…",
        "options": [
          "OKRs are ambitious quarterly outcomes",
          "OKRs are daily only",
          "KPIs are never measured",
          "Same thing"
        ],
        "answer": 0
      },
      {
        "question": "Bad goal example…",
        "options": [
          "'Do more marketing'",
          "Increase leads 20% by Q3",
          "Reduce CPA to $18 by June",
          "Grow list 5k in 90 days"
        ],
        "answer": 0
      },
      {
        "question": "KR should be…",
        "options": [
          "Measurable",
          "Vague",
          "Secret",
          "Unrelated"
        ],
        "answer": 0
      },
      {
        "question": "Weekly KPI for paid ads often includes…",
        "options": [
          "CPA and spend pacing",
          "Logo color",
          "Office rent",
          "HR count"
        ],
        "answer": 0
      }
    ],
    "playground": "none"
  }
];
