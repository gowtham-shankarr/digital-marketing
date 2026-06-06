import { applyAllDeepOverrides } from "./deep-content/merge.mjs";
import { ANALYTICS_GENERATED } from "./deep-content/generated/analytics.mjs";
import { ANALYTICS_DEEP } from "./analytics-deep/index.mjs";

export const _analyticsLessons = [
  {
    "slug": "google-analytics-4-ga4-fundamentals",
    "title": "Google Analytics 4 (GA4) Fundamentals",
    "track": "analytics",
    "level": "base",
    "order": 1,
    "estimatedMinutes": 38,
    "summary": "Event-based analytics across web and app.",
    "objectives": [
      "Explain Google Analytics 4 (GA4) Fundamentals in plain English with a real brand example",
      "Apply Google Analytics 4 (GA4) Fundamentals to a funnel stage and name the right KPI",
      "Work through numeric or scenario examples (not theory only)",
      "Complete the practice deliverable with documented results"
    ],
    "whatIs": "### What is Google Analytics 4 (GA4) Fundamentals?\n\n**Google Analytics 4 (GA4) Fundamentals** — Event-based analytics across web and app.\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.\n\n#### 1. Events vs pageviews\n\nThis point matters because it connects directly to **Google Analytics 4 (GA4) Fundamentals** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 2. Explorations and funnels\n\nThis point matters because it connects directly to **Google Analytics 4 (GA4) Fundamentals** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 3. Conversions marked from events\n\nThis point matters because it connects directly to **Google Analytics 4 (GA4) Fundamentals** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 4. Privacy and consent mode\n\nLegal compliance is not optional. One violation can mean fines, blocked emails, or ad account bans. Document consent and opt-out paths before you scale.\n\n### Quick reference\n\n| Question | Answer |\n|----------|--------|\n| **One-line summary** | Event-based analytics across web and app. |\n| **Level** | base — foundational for all marketers |\n| **Proof you learned it** | Practice deliverable + quiz + real brand notes |",
    "whyUse": "**Google Analytics 4 (GA4) Fundamentals** turns vague \"we should market more\" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.",
    "whenToUse": "Use **Google Analytics 4 (GA4) Fundamentals** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.",
    "steps": [
      {
        "title": "Read with a real brand in mind",
        "body": "Open **Warby Parker's** website or ads in another tab. As you read, note one place they already apply (or violate) **Google Analytics 4 (GA4) Fundamentals**. Screenshot optional."
      },
      {
        "title": "Write the definition in your own words",
        "body": "Without looking, explain Google Analytics 4 (GA4) Fundamentals in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline."
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
        "body": "List 10 events to configure for lead gen site."
      },
      {
        "title": "Self-check before quiz",
        "body": "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections."
      }
    ],
    "example": "### Real tracking setup: D2C brand launch\n\n**UTM example for Instagram story swipe-up:**\n```\nhttps://shop.example.com/summer-sale?utm_source=instagram&utm_medium=story&utm_campaign=summer_2025&utm_content=story_slide_3\n```\n\n**In GA4 after 2 weeks:**\n\n| Source / Medium | Sessions | Purchases | Revenue |\n|-----------------|----------|-----------|---------|\n| instagram / story | 2,400 | 86 | $4,300 |\n| google / cpc | 1,100 | 52 | $3,900 |\n| email / newsletter | 890 | 71 | $5,200 |\n\n**Decision:** Email has highest revenue per session → shift budget to list growth + more sends, not just more Instagram ads.",
    "realWorld": "### Where you see **Google Analytics 4 (GA4) Fundamentals** in the real world\n\n**Netflix** (internal) tests thumbnails per user — extreme personalization analytics.\n\n**Shopify** merchants use GA4 + Shopify reports to find best traffic sources.\n\n**Agencies** standardize Looker Studio dashboards so clients see ROAS weekly.\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.",
    "commonMistakes": "1. **Only reading definitions** — Google Analytics 4 (GA4) Fundamentals clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write \"before\" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo",
    "tryIt": "### Practice — Google Analytics 4 (GA4) Fundamentals\n\nList 10 events to configure for lead gen site.\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week",
    "quiz": [
      {
        "question": "Which is the best real-world reference for Google Analytics 4 (GA4) Fundamentals?",
        "options": [
          "Warby Parker — study their live marketing",
          "A random meme page",
          "Ignore all brands",
          "Only textbook definitions"
        ],
        "answer": 0
      },
      {
        "question": "\"Events vs pageviews\" in practice means…",
        "options": [
          "Events vs pageviews",
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
    "slug": "google-tag-manager-gtm",
    "title": "Google Tag Manager (GTM)",
    "track": "analytics",
    "level": "base",
    "order": 2,
    "estimatedMinutes": 38,
    "summary": "Deploy tags without code deploys; triggers and variables.",
    "objectives": [
      "Explain Google Tag Manager (GTM) in plain English with a real brand example",
      "Apply Google Tag Manager (GTM) to a funnel stage and name the right KPI",
      "Work through numeric or scenario examples (not theory only)",
      "Complete the practice deliverable with documented results"
    ],
    "whatIs": "### What is Google Tag Manager (GTM)?\n\n**Google Tag Manager (GTM)** — Deploy tags without code deploys; triggers and variables.\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.\n\n#### 1. Container, tags, triggers\n\nThis point matters because it connects directly to **Google Tag Manager (GTM)** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 2. Preview mode debug\n\nThis point matters because it connects directly to **Google Tag Manager (GTM)** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 3. Data layer for ecommerce\n\nThis point matters because it connects directly to **Google Tag Manager (GTM)** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 4. Version and publish workflow\n\nThis point matters because it connects directly to **Google Tag Manager (GTM)** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n### Quick reference\n\n| Question | Answer |\n|----------|--------|\n| **One-line summary** | Deploy tags without code deploys; triggers and variables. |\n| **Level** | base — foundational for all marketers |\n| **Proof you learned it** | Practice deliverable + quiz + real brand notes |",
    "whyUse": "**Google Tag Manager (GTM)** turns vague \"we should market more\" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.",
    "whenToUse": "Use **Google Tag Manager (GTM)** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.",
    "steps": [
      {
        "title": "Read with a real brand in mind",
        "body": "Open **Warby Parker's** website or ads in another tab. As you read, note one place they already apply (or violate) **Google Tag Manager (GTM)**. Screenshot optional."
      },
      {
        "title": "Write the definition in your own words",
        "body": "Without looking, explain Google Tag Manager (GTM) in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline."
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
        "body": "Document GTM plan: 3 tags, 3 triggers for one site."
      },
      {
        "title": "Self-check before quiz",
        "body": "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections."
      }
    ],
    "example": "### Real-world scenario: **Warby Parker**\n\n**Context:** Deploy tags without code deploys; triggers and variables.\n\n**What the marketing team did:**\n1. Audited current performance (baseline metrics documented)\n2. Applied **Google Tag Manager (GTM)** to the highest-impact customer segment first\n3. Ran a 2-week test with $500–$2,000 or equivalent time budget\n4. Measured results weekly against one primary KPI\n\n**Sample results pattern (illustrative):**\n\n| Metric | Before | After |\n|--------|--------|-------|\n| Primary KPI | Baseline | +15–30% improvement |\n| Cost efficiency | Unknown | Clear CPA/ROAS |\n| Learning | — | Documented in retrospective |\n\n**Your job in the Practice tab:** Recreate this thinking for a brand you choose — real or fictional — with numbers you research or estimate realistically.",
    "realWorld": "### Where you see **Google Tag Manager (GTM)** in the real world\n\n**Netflix** (internal) tests thumbnails per user — extreme personalization analytics.\n\n**Shopify** merchants use GA4 + Shopify reports to find best traffic sources.\n\n**Agencies** standardize Looker Studio dashboards so clients see ROAS weekly.\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.",
    "commonMistakes": "1. **Only reading definitions** — Google Tag Manager (GTM) clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write \"before\" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo",
    "tryIt": "### Practice — Google Tag Manager (GTM)\n\nDocument GTM plan: 3 tags, 3 triggers for one site.\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week",
    "quiz": [
      {
        "question": "Which is the best real-world reference for Google Tag Manager (GTM)?",
        "options": [
          "Warby Parker — study their live marketing",
          "A random meme page",
          "Ignore all brands",
          "Only textbook definitions"
        ],
        "answer": 0
      },
      {
        "question": "\"Container, tags, triggers\" in practice means…",
        "options": [
          "Container, tags, triggers",
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
    "slug": "utm-parameters-and-campaign-tracking",
    "title": "UTM Parameters and Campaign Tracking",
    "track": "analytics",
    "level": "base",
    "order": 3,
    "estimatedMinutes": 38,
    "summary": "utm_source, medium, campaign, content, term for clean reports.",
    "objectives": [
      "Explain UTM Parameters and Campaign Tracking in plain English with a real brand example",
      "Apply UTM Parameters and Campaign Tracking to a funnel stage and name the right KPI",
      "Work through numeric or scenario examples (not theory only)",
      "Complete the practice deliverable with documented results"
    ],
    "whatIs": "### What is UTM Parameters and Campaign Tracking?\n\n**UTM Parameters and Campaign Tracking** — utm_source, medium, campaign, content, term for clean reports.\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.\n\n#### 1. Naming convention doc\n\nThis point matters because it connects directly to **UTM Parameters and Campaign Tracking** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 2. Lowercase consistency\n\nThis point matters because it connects directly to **UTM Parameters and Campaign Tracking** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 3. Auto-tagging for Google Ads\n\nThis point matters because it connects directly to **UTM Parameters and Campaign Tracking** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 4. Spreadsheet builder for team\n\nThis point matters because it connects directly to **UTM Parameters and Campaign Tracking** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n### Quick reference\n\n| Question | Answer |\n|----------|--------|\n| **One-line summary** | utm_source, medium, campaign, content, term for clean reports. |\n| **Level** | base — foundational for all marketers |\n| **Proof you learned it** | Practice deliverable + quiz + real brand notes |",
    "whyUse": "**UTM Parameters and Campaign Tracking** turns vague \"we should market more\" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.",
    "whenToUse": "Use **UTM Parameters and Campaign Tracking** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.",
    "steps": [
      {
        "title": "Read with a real brand in mind",
        "body": "Open **Dollar Shave Club's** website or ads in another tab. As you read, note one place they already apply (or violate) **UTM Parameters and Campaign Tracking**. Screenshot optional."
      },
      {
        "title": "Write the definition in your own words",
        "body": "Without looking, explain UTM Parameters and Campaign Tracking in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline."
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
        "body": "Create UTM convention doc + 3 example URLs."
      },
      {
        "title": "Self-check before quiz",
        "body": "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections."
      }
    ],
    "example": "### Real tracking setup: D2C brand launch\n\n**UTM example for Instagram story swipe-up:**\n```\nhttps://shop.example.com/summer-sale?utm_source=instagram&utm_medium=story&utm_campaign=summer_2025&utm_content=story_slide_3\n```\n\n**In GA4 after 2 weeks:**\n\n| Source / Medium | Sessions | Purchases | Revenue |\n|-----------------|----------|-----------|---------|\n| instagram / story | 2,400 | 86 | $4,300 |\n| google / cpc | 1,100 | 52 | $3,900 |\n| email / newsletter | 890 | 71 | $5,200 |\n\n**Decision:** Email has highest revenue per session → shift budget to list growth + more sends, not just more Instagram ads.",
    "realWorld": "### Where you see **UTM Parameters and Campaign Tracking** in the real world\n\n**Netflix** (internal) tests thumbnails per user — extreme personalization analytics.\n\n**Shopify** merchants use GA4 + Shopify reports to find best traffic sources.\n\n**Agencies** standardize Looker Studio dashboards so clients see ROAS weekly.\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.",
    "commonMistakes": "1. **Only reading definitions** — UTM Parameters and Campaign Tracking clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write \"before\" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo",
    "tryIt": "### Practice — UTM Parameters and Campaign Tracking\n\nCreate UTM convention doc + 3 example URLs.\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week",
    "quiz": [
      {
        "question": "Which is the best real-world reference for UTM Parameters and Campaign Tracking?",
        "options": [
          "Dollar Shave Club — study their live marketing",
          "A random meme page",
          "Ignore all brands",
          "Only textbook definitions"
        ],
        "answer": 0
      },
      {
        "question": "\"Naming convention doc\" in practice means…",
        "options": [
          "Naming convention doc",
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
    "slug": "kpis-and-marketing-dashboards",
    "title": "KPIs and Marketing Dashboards",
    "track": "analytics",
    "level": "base",
    "order": 4,
    "estimatedMinutes": 38,
    "summary": "One screen for executives: traffic, leads, CPA, ROAS.",
    "objectives": [
      "Explain KPIs and Marketing Dashboards in plain English with a real brand example",
      "Apply KPIs and Marketing Dashboards to a funnel stage and name the right KPI",
      "Work through numeric or scenario examples (not theory only)",
      "Complete the practice deliverable with documented results"
    ],
    "whatIs": "### What is KPIs and Marketing Dashboards?\n\n**KPIs and Marketing Dashboards** — One screen for executives: traffic, leads, CPA, ROAS.\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.\n\n#### 1. Looker Studio, GA4, HubSpot reports\n\nThis point matters because it connects directly to **KPIs and Marketing Dashboards** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 2. Weekly vs monthly views\n\nThis point matters because it connects directly to **KPIs and Marketing Dashboards** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 3. Red/yellow/green thresholds\n\nThis point matters because it connects directly to **KPIs and Marketing Dashboards** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 4. Action notes not just numbers\n\nThis point matters because it connects directly to **KPIs and Marketing Dashboards** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n### Quick reference\n\n| Question | Answer |\n|----------|--------|\n| **One-line summary** | One screen for executives: traffic, leads, CPA, ROAS. |\n| **Level** | base — foundational for all marketers |\n| **Proof you learned it** | Practice deliverable + quiz + real brand notes |",
    "whyUse": "**KPIs and Marketing Dashboards** turns vague \"we should market more\" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.",
    "whenToUse": "Use **KPIs and Marketing Dashboards** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.",
    "steps": [
      {
        "title": "Read with a real brand in mind",
        "body": "Open **Warby Parker's** website or ads in another tab. As you read, note one place they already apply (or violate) **KPIs and Marketing Dashboards**. Screenshot optional."
      },
      {
        "title": "Write the definition in your own words",
        "body": "Without looking, explain KPIs and Marketing Dashboards in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline."
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
        "body": "Sketch dashboard wireframe with 8 widgets."
      },
      {
        "title": "Self-check before quiz",
        "body": "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections."
      }
    ],
    "example": "### Worked example: Real campaign math (Warby Parker)\n\nA paid social campaign for **Warby Parker** ran for 30 days:\n\n| Input | Value |\n|-------|-------|\n| Ad spend | $5,000 |\n| Impressions | 400,000 |\n| Clicks | 8,000 |\n| Purchases | 200 |\n| Revenue from those purchases | $18,000 |\n\n**Calculate step by step:**\n\n1. **CTR** = 8,000 ÷ 400,000 = **2%** (strong for cold traffic)\n2. **CPC** = $5,000 ÷ 8,000 = **$0.63**\n3. **Conversion rate** = 200 ÷ 8,000 = **2.5%**\n4. **CPA** = $5,000 ÷ 200 = **$25** per purchase\n5. **ROAS** = $18,000 ÷ $5,000 = **3.6x**\n\n**So what?** ROAS 3.6x means the campaign returned $3.60 for every $1 spent — profitable if margin supports it. A junior mistake is celebrating high CTR while CPA is above product margin. Always report revenue or qualified leads, not vanity metrics.",
    "realWorld": "### Where you see **KPIs and Marketing Dashboards** in the real world\n\n**Netflix** (internal) tests thumbnails per user — extreme personalization analytics.\n\n**Shopify** merchants use GA4 + Shopify reports to find best traffic sources.\n\n**Agencies** standardize Looker Studio dashboards so clients see ROAS weekly.\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.",
    "commonMistakes": "1. **Only reading definitions** — KPIs and Marketing Dashboards clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write \"before\" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo",
    "tryIt": "### Practice — KPIs and Marketing Dashboards\n\nSketch dashboard wireframe with 8 widgets.\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week",
    "quiz": [
      {
        "question": "Which is the best real-world reference for KPIs and Marketing Dashboards?",
        "options": [
          "Warby Parker — study their live marketing",
          "A random meme page",
          "Ignore all brands",
          "Only textbook definitions"
        ],
        "answer": 0
      },
      {
        "question": "\"Looker Studio, GA4, HubSpot reports\" in practice means…",
        "options": [
          "Looker Studio, GA4, HubSpot reports",
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
    "slug": "attribution-models-explained",
    "title": "Attribution Models Explained",
    "track": "analytics",
    "level": "base",
    "order": 5,
    "estimatedMinutes": 38,
    "summary": "First-touch, last-touch, linear, time-decay, data-driven.",
    "objectives": [
      "Explain Attribution Models Explained in plain English with a real brand example",
      "Apply Attribution Models Explained to a funnel stage and name the right KPI",
      "Work through numeric or scenario examples (not theory only)",
      "Complete the practice deliverable with documented results"
    ],
    "whatIs": "### What is Attribution Models Explained?\n\n**Attribution Models Explained** — First-touch, last-touch, linear, time-decay, data-driven.\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.\n\n#### 1. No model is perfect\n\nThis point matters because it connects directly to **Attribution Models Explained** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 2. Long B2B cycles need multi-touch\n\nThis point matters because it connects directly to **Attribution Models Explained** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 3. GA4 attribution reports\n\nThis point matters because it connects directly to **Attribution Models Explained** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 4. Align with finance on definition\n\nThis point matters because it connects directly to **Attribution Models Explained** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n### Quick reference\n\n| Question | Answer |\n|----------|--------|\n| **One-line summary** | First-touch, last-touch, linear, time-decay, data-driven. |\n| **Level** | base — foundational for all marketers |\n| **Proof you learned it** | Practice deliverable + quiz + real brand notes |",
    "whyUse": "**Attribution Models Explained** turns vague \"we should market more\" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.",
    "whenToUse": "Use **Attribution Models Explained** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.",
    "steps": [
      {
        "title": "Read with a real brand in mind",
        "body": "Open **McDonald's's** website or ads in another tab. As you read, note one place they already apply (or violate) **Attribution Models Explained**. Screenshot optional."
      },
      {
        "title": "Write the definition in your own words",
        "body": "Without looking, explain Attribution Models Explained in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline."
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
        "body": "Compare first vs last touch for 3-channel journey example."
      },
      {
        "title": "Self-check before quiz",
        "body": "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections."
      }
    ],
    "example": "### Real-world scenario: **McDonald's**\n\n**Context:** First-touch, last-touch, linear, time-decay, data-driven.\n\n**What the marketing team did:**\n1. Audited current performance (baseline metrics documented)\n2. Applied **Attribution Models Explained** to the highest-impact customer segment first\n3. Ran a 2-week test with $500–$2,000 or equivalent time budget\n4. Measured results weekly against one primary KPI\n\n**Sample results pattern (illustrative):**\n\n| Metric | Before | After |\n|--------|--------|-------|\n| Primary KPI | Baseline | +15–30% improvement |\n| Cost efficiency | Unknown | Clear CPA/ROAS |\n| Learning | — | Documented in retrospective |\n\n**Your job in the Practice tab:** Recreate this thinking for a brand you choose — real or fictional — with numbers you research or estimate realistically.",
    "realWorld": "### Where you see **Attribution Models Explained** in the real world\n\n**Netflix** (internal) tests thumbnails per user — extreme personalization analytics.\n\n**Shopify** merchants use GA4 + Shopify reports to find best traffic sources.\n\n**Agencies** standardize Looker Studio dashboards so clients see ROAS weekly.\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.",
    "commonMistakes": "1. **Only reading definitions** — Attribution Models Explained clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write \"before\" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo",
    "tryIt": "### Practice — Attribution Models Explained\n\nCompare first vs last touch for 3-channel journey example.\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week",
    "quiz": [
      {
        "question": "Which is the best real-world reference for Attribution Models Explained?",
        "options": [
          "McDonald's — study their live marketing",
          "A random meme page",
          "Ignore all brands",
          "Only textbook definitions"
        ],
        "answer": 0
      },
      {
        "question": "\"No model is perfect\" in practice means…",
        "options": [
          "No model is perfect",
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
    "slug": "reporting-and-data-storytelling",
    "title": "Reporting and Data Storytelling",
    "track": "analytics",
    "level": "base",
    "order": 6,
    "estimatedMinutes": 38,
    "summary": "Insights → so what → now what for stakeholders.",
    "objectives": [
      "Explain Reporting and Data Storytelling in plain English with a real brand example",
      "Apply Reporting and Data Storytelling to a funnel stage and name the right KPI",
      "Work through numeric or scenario examples (not theory only)",
      "Complete the practice deliverable with documented results"
    ],
    "whatIs": "### What is Reporting and Data Storytelling?\n\n**Reporting and Data Storytelling** — Insights → so what → now what for stakeholders.\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.\n\n#### 1. Lead with recommendation\n\nThis point matters because it connects directly to **Reporting and Data Storytelling** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 2. Visualize trends not tables only\n\nThis point matters because it connects directly to **Reporting and Data Storytelling** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 3. Context vs prior period\n\nThis point matters because it connects directly to **Reporting and Data Storytelling** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 4. Honest about limitations\n\nThis point matters because it connects directly to **Reporting and Data Storytelling** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n### Quick reference\n\n| Question | Answer |\n|----------|--------|\n| **One-line summary** | Insights → so what → now what for stakeholders. |\n| **Level** | base — foundational for all marketers |\n| **Proof you learned it** | Practice deliverable + quiz + real brand notes |",
    "whyUse": "**Reporting and Data Storytelling** turns vague \"we should market more\" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.",
    "whenToUse": "Use **Reporting and Data Storytelling** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.",
    "steps": [
      {
        "title": "Read with a real brand in mind",
        "body": "Open **Allbirds's** website or ads in another tab. As you read, note one place they already apply (or violate) **Reporting and Data Storytelling**. Screenshot optional."
      },
      {
        "title": "Write the definition in your own words",
        "body": "Without looking, explain Reporting and Data Storytelling in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline."
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
        "body": "Write 1-page monthly report outline for client."
      },
      {
        "title": "Self-check before quiz",
        "body": "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections."
      }
    ],
    "example": "### Real-world scenario: **Allbirds**\n\n**Context:** Insights → so what → now what for stakeholders.\n\n**What the marketing team did:**\n1. Audited current performance (baseline metrics documented)\n2. Applied **Reporting and Data Storytelling** to the highest-impact customer segment first\n3. Ran a 2-week test with $500–$2,000 or equivalent time budget\n4. Measured results weekly against one primary KPI\n\n**Sample results pattern (illustrative):**\n\n| Metric | Before | After |\n|--------|--------|-------|\n| Primary KPI | Baseline | +15–30% improvement |\n| Cost efficiency | Unknown | Clear CPA/ROAS |\n| Learning | — | Documented in retrospective |\n\n**Your job in the Practice tab:** Recreate this thinking for a brand you choose — real or fictional — with numbers you research or estimate realistically.",
    "realWorld": "### Where you see **Reporting and Data Storytelling** in the real world\n\n**Netflix** (internal) tests thumbnails per user — extreme personalization analytics.\n\n**Shopify** merchants use GA4 + Shopify reports to find best traffic sources.\n\n**Agencies** standardize Looker Studio dashboards so clients see ROAS weekly.\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.",
    "commonMistakes": "1. **Only reading definitions** — Reporting and Data Storytelling clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write \"before\" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo",
    "tryIt": "### Practice — Reporting and Data Storytelling\n\nWrite 1-page monthly report outline for client.\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week",
    "quiz": [
      {
        "question": "Which is the best real-world reference for Reporting and Data Storytelling?",
        "options": [
          "Allbirds — study their live marketing",
          "A random meme page",
          "Ignore all brands",
          "Only textbook definitions"
        ],
        "answer": 0
      },
      {
        "question": "\"Lead with recommendation\" in practice means…",
        "options": [
          "Lead with recommendation",
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
    "slug": "cross-channel-conversion-tracking",
    "title": "Cross-Channel Conversion Tracking",
    "track": "analytics",
    "level": "base",
    "order": 7,
    "estimatedMinutes": 38,
    "summary": "Pixels, offline imports, CRM closed-loop.",
    "objectives": [
      "Explain Cross-Channel Conversion Tracking in plain English with a real brand example",
      "Apply Cross-Channel Conversion Tracking to a funnel stage and name the right KPI",
      "Work through numeric or scenario examples (not theory only)",
      "Complete the practice deliverable with documented results"
    ],
    "whatIs": "### What is Cross-Channel Conversion Tracking?\n\n**Cross-Channel Conversion Tracking** — Pixels, offline imports, CRM closed-loop.\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.\n\n#### 1. Meta CAPI + pixel\n\nThis point matters because it connects directly to **Cross-Channel Conversion Tracking** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 2. Google enhanced conversions\n\nThis point matters because it connects directly to **Cross-Channel Conversion Tracking** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 3. Import SQL from CRM\n\nThis point matters because it connects directly to **Cross-Channel Conversion Tracking** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 4. Dedupe rules\n\nThis point matters because it connects directly to **Cross-Channel Conversion Tracking** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n### Quick reference\n\n| Question | Answer |\n|----------|--------|\n| **One-line summary** | Pixels, offline imports, CRM closed-loop. |\n| **Level** | base — foundational for all marketers |\n| **Proof you learned it** | Practice deliverable + quiz + real brand notes |",
    "whyUse": "**Cross-Channel Conversion Tracking** turns vague \"we should market more\" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.",
    "whenToUse": "Use **Cross-Channel Conversion Tracking** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.",
    "steps": [
      {
        "title": "Read with a real brand in mind",
        "body": "Open **Dollar Shave Club's** website or ads in another tab. As you read, note one place they already apply (or violate) **Cross-Channel Conversion Tracking**. Screenshot optional."
      },
      {
        "title": "Write the definition in your own words",
        "body": "Without looking, explain Cross-Channel Conversion Tracking in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline."
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
        "body": "List tracking stack for D2C: web, ads, email, CRM."
      },
      {
        "title": "Self-check before quiz",
        "body": "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections."
      }
    ],
    "example": "### Real CRO test: **Airbnb** host signup (public pattern)\n\n**Hypothesis:** Shorter form = more signups.\n\n| Variant | Fields | Signup rate |\n|---------|--------|-------------|\n| Control | 12 fields | 2.1% |\n| Test | 5 fields + progressive profiling later | 3.4% |\n\n**+62% relative lift** from removing friction — then they asked for photos/pricing in step 2 after commitment.\n\n**Lesson:** BOFU pages fail from trust gaps AND field overload. Test one change at a time.",
    "realWorld": "### Where you see **Cross-Channel Conversion Tracking** in the real world\n\n**Netflix** (internal) tests thumbnails per user — extreme personalization analytics.\n\n**Shopify** merchants use GA4 + Shopify reports to find best traffic sources.\n\n**Agencies** standardize Looker Studio dashboards so clients see ROAS weekly.\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.",
    "commonMistakes": "1. **Only reading definitions** — Cross-Channel Conversion Tracking clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write \"before\" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo",
    "tryIt": "### Practice — Cross-Channel Conversion Tracking\n\nList tracking stack for D2C: web, ads, email, CRM.\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week",
    "quiz": [
      {
        "question": "Which is the best real-world reference for Cross-Channel Conversion Tracking?",
        "options": [
          "Dollar Shave Club — study their live marketing",
          "A random meme page",
          "Ignore all brands",
          "Only textbook definitions"
        ],
        "answer": 0
      },
      {
        "question": "\"Meta CAPI + pixel\" in practice means…",
        "options": [
          "Meta CAPI + pixel",
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
    "slug": "data-driven-decision-making",
    "title": "Data-Driven Decision Making",
    "track": "analytics",
    "level": "base",
    "order": 8,
    "estimatedMinutes": 38,
    "summary": "Hypothesis, test, measure, iterate culture.",
    "objectives": [
      "Explain Data-Driven Decision Making in plain English with a real brand example",
      "Apply Data-Driven Decision Making to a funnel stage and name the right KPI",
      "Work through numeric or scenario examples (not theory only)",
      "Complete the practice deliverable with documented results"
    ],
    "whatIs": "### What is Data-Driven Decision Making?\n\n**Data-Driven Decision Making** — Hypothesis, test, measure, iterate culture.\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.\n\n#### 1. Avoid vanity metrics\n\nThis point matters because it connects directly to **Data-Driven Decision Making** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 2. Statistical significance\n\nThis point matters because it connects directly to **Data-Driven Decision Making** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 3. Document experiments\n\nThis point matters because it connects directly to **Data-Driven Decision Making** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 4. Fail fast small bets\n\nThis point matters because it connects directly to **Data-Driven Decision Making** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n### Quick reference\n\n| Question | Answer |\n|----------|--------|\n| **One-line summary** | Hypothesis, test, measure, iterate culture. |\n| **Level** | base — foundational for all marketers |\n| **Proof you learned it** | Practice deliverable + quiz + real brand notes |",
    "whyUse": "**Data-Driven Decision Making** turns vague \"we should market more\" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.",
    "whenToUse": "Use **Data-Driven Decision Making** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.",
    "steps": [
      {
        "title": "Read with a real brand in mind",
        "body": "Open **Dollar Shave Club's** website or ads in another tab. As you read, note one place they already apply (or violate) **Data-Driven Decision Making**. Screenshot optional."
      },
      {
        "title": "Write the definition in your own words",
        "body": "Without looking, explain Data-Driven Decision Making in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline."
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
        "body": "Write decision memo: data, options, recommendation."
      },
      {
        "title": "Self-check before quiz",
        "body": "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections."
      }
    ],
    "example": "### Real-world scenario: **Dollar Shave Club**\n\n**Context:** Hypothesis, test, measure, iterate culture.\n\n**What the marketing team did:**\n1. Audited current performance (baseline metrics documented)\n2. Applied **Data-Driven Decision Making** to the highest-impact customer segment first\n3. Ran a 2-week test with $500–$2,000 or equivalent time budget\n4. Measured results weekly against one primary KPI\n\n**Sample results pattern (illustrative):**\n\n| Metric | Before | After |\n|--------|--------|-------|\n| Primary KPI | Baseline | +15–30% improvement |\n| Cost efficiency | Unknown | Clear CPA/ROAS |\n| Learning | — | Documented in retrospective |\n\n**Your job in the Practice tab:** Recreate this thinking for a brand you choose — real or fictional — with numbers you research or estimate realistically.",
    "realWorld": "### Where you see **Data-Driven Decision Making** in the real world\n\n**Netflix** (internal) tests thumbnails per user — extreme personalization analytics.\n\n**Shopify** merchants use GA4 + Shopify reports to find best traffic sources.\n\n**Agencies** standardize Looker Studio dashboards so clients see ROAS weekly.\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.",
    "commonMistakes": "1. **Only reading definitions** — Data-Driven Decision Making clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write \"before\" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo",
    "tryIt": "### Practice — Data-Driven Decision Making\n\nWrite decision memo: data, options, recommendation.\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week",
    "quiz": [
      {
        "question": "Which is the best real-world reference for Data-Driven Decision Making?",
        "options": [
          "Dollar Shave Club — study their live marketing",
          "A random meme page",
          "Ignore all brands",
          "Only textbook definitions"
        ],
        "answer": 0
      },
      {
        "question": "\"Avoid vanity metrics\" in practice means…",
        "options": [
          "Avoid vanity metrics",
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
  }
];

export const analyticsLessons = applyAllDeepOverrides(_analyticsLessons, ANALYTICS_GENERATED, ANALYTICS_DEEP);
