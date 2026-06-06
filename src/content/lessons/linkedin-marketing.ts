import type { Lesson } from "@/lib/types";

export const linkedin_marketingLessons: Lesson[] = [
  {
    "slug": "why-linkedin-is-the-top-b2b-platform",
    "title": "Why LinkedIn Is the Top B2B Platform",
    "track": "linkedin-marketing",
    "level": "base",
    "order": 1,
    "estimatedMinutes": 38,
    "summary": "80% of B2B social leads come from LinkedIn; personal profiles get 6–8x company page reach.",
    "objectives": [
      "Explain personal vs company page reach difference",
      "List 4 content formats that work on LinkedIn",
      "Audit one founder profile for ICP alignment"
    ],
    "whatIs": "### LinkedIn by the numbers\n\n- **1B+ members** — largest professional graph\n- **4 of 5 members** influence business decisions (LinkedIn marketing data)\n- **Personal profiles** outperform company pages **6–8x** on organic reach\n- **Organic still works** in 2025 for text posts, carousels, newsletters\n\n### When LinkedIn is wrong\n\nB2C impulse products for teens, local-only restaurants, pure entertainment brands — use Instagram/TikTok instead.",
    "whyUse": "B2B deals start with trust. LinkedIn is where buyers expect expertise, not memes.",
    "whenToUse": "SaaS, agencies, consultants, recruiting, enterprise, high-ticket services.",
    "steps": [
      {
        "title": "Compare profiles",
        "body": "Open 3 founder profiles + 3 company pages — note reach difference on similar posts."
      },
      {
        "title": "ICP check",
        "body": "Are your buyers active on LinkedIn weekly?"
      }
    ],
    "example": "### **PostHog** founder-led pattern\n\nFounders post product insights → engineers engage → inbound demos.\n\nCompany page amplifies with Thought Leader Ads on top posts.\n\n**Metric to watch:** Profile views/week + inbound DMs mentioning content.",
    "realWorld": "HubSpot, Gong, and most B2B unicorns run founder + employee advocacy programs.",
    "commonMistakes": "Only company page, pitch-slapping in DMs, no comments strategy.",
    "tryIt": "### Programming task (~15 min)\n\n**Goal:** Build and validate a form for Why LinkedIn Is the Top B2B Platform.\n\n**Part A — Markup** — Create form with label+input pairs (text, email). Use proper `for`/`id`.\n\n**Part B — Validate** — Add required, minlength, or pattern. Submit empty — read browser message.\n\n**Part C — JS hook** — preventDefault on submit. Log FormData entries to console.\n\n**Done when:** Invalid submit blocked; valid submit logs correct data.",
    "quiz": [
      {
        "question": "Personal profiles vs company pages…",
        "options": [
          "Personal gets 6–8x more reach",
          "Equal",
          "Company always wins",
          "Neither works"
        ],
        "answer": 0
      },
      {
        "question": "LinkedIn best for…",
        "options": [
          "B2B trust and authority",
          "Teen fashion only",
          "Local pizza only",
          "No marketing"
        ],
        "answer": 0
      },
      {
        "question": "Key algorithm signal…",
        "options": [
          "Comments",
          "Only likes from bots",
          "Hashtags only",
          "PDF attachments"
        ],
        "answer": 0
      },
      {
        "question": "Thought Leader Ads…",
        "options": [
          "Boost personal posts as ads",
          "Replace organic",
          "Only for B2C",
          "Free always"
        ],
        "answer": 0
      },
      {
        "question": "Buyer mindset on LinkedIn…",
        "options": [
          "Professional",
          "Pure entertainment",
          "Anonymous only",
          "No decisions"
        ],
        "answer": 0
      }
    ],
    "playground": "none"
  },
  {
    "slug": "linkedin-profile-optimization",
    "title": "LinkedIn Profile Optimization",
    "track": "linkedin-marketing",
    "level": "base",
    "order": 2,
    "estimatedMinutes": 40,
    "summary": "Headline = who you help; banner = CTA; Featured = lead magnet; Creator Mode on.",
    "objectives": [
      "Rewrite headline using value + ICP formula",
      "Plan Featured section with one lead asset",
      "Enable Creator Mode and document why"
    ],
    "whatIs": "### Profile = landing page\n\n| Section | Bad | Good |\n|---------|-----|------|\n| **Headline** | \"CEO at Acme\" | \"Helping SaaS founders hit $1M ARR with content-led marketing | Building @Acme\" |\n| **Banner** | Stock photo | Visual CTA: free guide, webinar, product |\n| **About** | Resume dump | Hook in line 1–3, story, who you help |\n| **Featured** | Empty | Lead magnet, case study, newsletter |\n\n**Creator Mode:** Follow button, topic tags, newsletter access.",
    "whyUse": "Profile visitors decide in 5 seconds whether to follow or leave.",
    "whenToUse": "Before posting consistently; before outbound DMs.",
    "steps": [
      {
        "title": "Headline rewrite",
        "body": "Use template: Help [ICP] achieve [outcome] | [credential]"
      },
      {
        "title": "Banner",
        "body": "Canva 1584×396 — one promise + URL"
      },
      {
        "title": "Featured pin",
        "body": "Link to best asset."
      }
    ],
    "example": "### Before / After headline\n\n**Before:** Marketing Manager at TechCo\n\n**After:** I help B2B SaaS teams turn LinkedIn into a pipeline channel (without cold spam) | Marketing @TechCo\n\n**Result pattern:** Profile views up 40–100% in 30 days when headline speaks to ICP.",
    "realWorld": "Taplio and Shield analytics users track profile view spikes after headline tests.",
    "commonMistakes": "Job title only, no Featured, generic About, Creator Mode off.",
    "tryIt": "### Programming task (~15 min)\n\n**Goal:** Prove you understand LinkedIn Profile Optimization by writing code, not just reading.\n\n**Part A — Run** — Open DevTools Console (F12). Type the example from the lesson manually.\n\n**Part B — Modify** — Change one value, name, or class in the LinkedIn Profile Optimization example. Observe what breaks or improves.\n\n**Part C — Extend** — Add one feature related to LinkedIn Profile Optimization: extra element, log line, validation, or UI state.\n\n**Done when:** You can explain LinkedIn Profile Optimization to a friend while pointing at your code.\n\n**Bonus:** Comment each new line with why you added it.",
    "quiz": [
      {
        "question": "Headline should emphasize…",
        "options": [
          "Who you help and outcome",
          "Only job title",
          "Emoji spam",
          "Nothing"
        ],
        "answer": 0
      },
      {
        "question": "Featured section should…",
        "options": [
          "Pin lead magnet or proof",
          "Stay empty",
          "Hide product",
          "Random memes"
        ],
        "answer": 0
      },
      {
        "question": "Creator Mode gives…",
        "options": [
          "Follow button + newsletter tools",
          "Less reach",
          "Auto spam",
          "Paid only"
        ],
        "answer": 0
      },
      {
        "question": "About section line 1…",
        "options": [
          "Hook before see more",
          "Lorem ipsum",
          "Legal only",
          "Blank"
        ],
        "answer": 0
      },
      {
        "question": "Banner should…",
        "options": [
          "Visual CTA",
          "Be blank",
          "Low resolution only",
          "Ignore mobile"
        ],
        "answer": 0
      }
    ],
    "playground": "none"
  },
  {
    "slug": "linkedin-content-strategy-and-formats",
    "title": "LinkedIn Content Strategy and Formats",
    "track": "linkedin-marketing",
    "level": "base",
    "order": 3,
    "estimatedMinutes": 38,
    "summary": "Text posts, carousels, video, newsletters, polls — each format different reach.",
    "objectives": [
      "Explain LinkedIn Content Strategy and Formats in plain English with a real brand example",
      "Apply LinkedIn Content Strategy and Formats to a funnel stage and name the right KPI",
      "Work through numeric or scenario examples (not theory only)",
      "Complete the practice deliverable with documented results"
    ],
    "whatIs": "### What is LinkedIn Content Strategy and Formats?\n\n**LinkedIn Content Strategy and Formats** — Text posts, carousels, video, newsletters, polls — each format different reach.\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.\n\n#### 1. Carousels high saves\n\nThis point matters because it connects directly to **LinkedIn Content Strategy and Formats** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 2. End posts with questions\n\nThis point matters because it connects directly to **LinkedIn Content Strategy and Formats** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 3. Document posts for B2B\n\nThis point matters because it connects directly to **LinkedIn Content Strategy and Formats** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 4. Thought leadership + story\n\nThis point matters because it connects directly to **LinkedIn Content Strategy and Formats** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n### Quick reference\n\n| Question | Answer |\n|----------|--------|\n| **One-line summary** | Text posts, carousels, video, newsletters, polls — each format different reach. |\n| **Level** | base — foundational for all marketers |\n| **Proof you learned it** | Practice deliverable + quiz + real brand notes |",
    "whyUse": "**LinkedIn Content Strategy and Formats** turns vague \"we should market more\" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.",
    "whenToUse": "Use **LinkedIn Content Strategy and Formats** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.",
    "steps": [
      {
        "title": "Read with a real brand in mind",
        "body": "Open **Notion's** website or ads in another tab. As you read, note one place they already apply (or violate) **LinkedIn Content Strategy and Formats**. Screenshot optional."
      },
      {
        "title": "Write the definition in your own words",
        "body": "Without looking, explain LinkedIn Content Strategy and Formats in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline."
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
        "body": "Plan 1 week: 3 text, 1 carousel, 1 poll."
      },
      {
        "title": "Self-check before quiz",
        "body": "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections."
      }
    ],
    "example": "### Real-world scenario: **Notion**\n\n**Context:** Text posts, carousels, video, newsletters, polls — each format different reach.\n\n**What the marketing team did:**\n1. Audited current performance (baseline metrics documented)\n2. Applied **LinkedIn Content Strategy and Formats** to the highest-impact customer segment first\n3. Ran a 2-week test with $500–$2,000 or equivalent time budget\n4. Measured results weekly against one primary KPI\n\n**Sample results pattern (illustrative):**\n\n| Metric | Before | After |\n|--------|--------|-------|\n| Primary KPI | Baseline | +15–30% improvement |\n| Cost efficiency | Unknown | Clear CPA/ROAS |\n| Learning | — | Documented in retrospective |\n\n**Your job in the Practice tab:** Recreate this thinking for a brand you choose — real or fictional — with numbers you research or estimate realistically.",
    "realWorld": "### Where you see **LinkedIn Content Strategy and Formats** in the real world\n\n**Glossier**, **Notion**, and **Casper** all apply concepts from this lesson in live campaigns — from Super Bowl + app download combos to LinkedIn ABM funnels.\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.",
    "commonMistakes": "1. **Only reading definitions** — LinkedIn Content Strategy and Formats clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write \"before\" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo",
    "tryIt": "### Practice — LinkedIn Content Strategy and Formats\n\nPlan 1 week: 3 text, 1 carousel, 1 poll.\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week\n\n---\n\n### Templates (from MMS)\n\n#### LinkedIn post skeleton\n\n**Hook (line 1):** Pattern interrupt or bold claim\n**Body:** 3 short paragraphs, one idea each\n**Close:** Question to drive comments\n**CTA:** Soft — newsletter, DM, or link in comments\n\n### Execution checklist\n\n- [ ] Rewrite headline for value + ICP\n- [ ] Turn on Creator Mode\n- [ ] Post 5x/week for 4 weeks minimum\n- [ ] 20 substantive comments/day on niche accounts\n- [ ] Reply to every comment within 2 hours of posting",
    "quiz": [
      {
        "question": "Which is the best real-world reference for LinkedIn Content Strategy and Formats?",
        "options": [
          "Notion — study their live marketing",
          "A random meme page",
          "Ignore all brands",
          "Only textbook definitions"
        ],
        "answer": 0
      },
      {
        "question": "\"Carousels high saves\" in practice means…",
        "options": [
          "Carousels high saves",
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
    "slug": "growing-from-0-to-10k-followers",
    "title": "Growing from 0 to 10K Followers",
    "track": "linkedin-marketing",
    "level": "intermediate",
    "order": 4,
    "estimatedMinutes": 45,
    "summary": "MMS playbook: 5 posts/week × 90 days, 20 comments/day, reply within 2 hours, carousels + stories.",
    "objectives": [
      "Build 90-day posting calendar",
      "Define comment strategy on 10 target accounts",
      "Set weekly metrics: impressions, followers, profile views"
    ],
    "whatIs": "### The 90-day LinkedIn growth system\n\n1. **Post 5x/week** — Mon–Fri same time slots\n2. **20 substantive comments/day** on ICP accounts\n3. **Reply to every comment** within 2 hours on your posts\n4. **Mix formats** — text, carousel, poll, video, newsletter\n5. **End with question** — comments beat likes for reach\n6. **Repurpose winners** — new angle on top monthly post\n\n### Format week rotation (MMS)\n\n| Week | Mon | Wed | Fri |\n|------|-----|-----|-----|\n| 1 | Story post | Carousel | Contrarian take |\n| 2 | How-to | Poll | Case study numbers |",
    "whyUse": "Most quit at week 3. Consistency is the unfair advantage.",
    "whenToUse": "Founders, consultants, marketers building inbound pipeline.",
    "steps": [
      {
        "title": "Calendar",
        "body": "Batch 2 weeks content in Notion."
      },
      {
        "title": "Comment list",
        "body": "10 accounts to engage daily."
      },
      {
        "title": "Metrics sheet",
        "body": "Weekly impressions + follower delta."
      }
    ],
    "example": "### Sample week results (illustrative founder)\n\n| Week | Posts | Comments left | New followers | Profile views |\n|------|-------|---------------|---------------|---------------|\n| 1 | 5 | 100 | +42 | 180 |\n| 4 | 5 | 100 | +95 | 410 |\n| 12 | 5 | 100 | +280 | 1,200 |\n\n**Compound effect:** Comments put you in feeds of ICP before they follow.",
    "realWorld": "Common path for B2B creators using Taplio scheduling + manual comments.",
    "commonMistakes": "Posting with zero engagement, external links in every post, inconsistent schedule.",
    "tryIt": "### Programming task (~15 min)\n\n**Goal:** Prove you understand Growing from 0 to 10K Followers by writing code, not just reading.\n\n**Part A — Run** — Open DevTools Console (F12). Type the example from the lesson manually.\n\n**Part B — Modify** — Change one value, name, or class in the Growing from 0 to 10K Followers example. Observe what breaks or improves.\n\n**Part C — Extend** — Add one feature related to Growing from 0 to 10K Followers: extra element, log line, validation, or UI state.\n\n**Done when:** You can explain Growing from 0 to 10K Followers to a friend while pointing at your code.\n\n**Bonus:** Comment each new line with why you added it.",
    "quiz": [
      {
        "question": "Comments matter because…",
        "options": [
          "Algorithm favors conversation",
          "They don't",
          "Only DMs count",
          "Spam works"
        ],
        "answer": 0
      },
      {
        "question": "Reply window…",
        "options": [
          "Within ~2 hours of posting",
          "Next month",
          "Never",
          "Only Sundays"
        ],
        "answer": 0
      },
      {
        "question": "Minimum posting cadence in MMS…",
        "options": [
          "5x/week for 90 days",
          "Once/year",
          "50x/day spam",
          "Never"
        ],
        "answer": 0
      },
      {
        "question": "Carousel posts often…",
        "options": [
          "High saves and shares",
          "Banned",
          "Lower reach always",
          "Only for B2C"
        ],
        "answer": 0
      },
      {
        "question": "Repurpose means…",
        "options": [
          "New angle on proven post",
          "Copy exact text daily",
          "Delete old posts",
          "Stop posting"
        ],
        "answer": 0
      }
    ],
    "playground": "none"
  },
  {
    "slug": "linkedin-newsletter-strategy",
    "title": "LinkedIn Newsletter Strategy",
    "track": "linkedin-marketing",
    "level": "intermediate",
    "order": 5,
    "estimatedMinutes": 38,
    "summary": "Subscribers get notified — owned reach inside LinkedIn.",
    "objectives": [
      "Explain LinkedIn Newsletter Strategy in plain English with a real brand example",
      "Apply LinkedIn Newsletter Strategy to a funnel stage and name the right KPI",
      "Work through numeric or scenario examples (not theory only)",
      "Complete the practice deliverable with documented results"
    ],
    "whatIs": "### What is LinkedIn Newsletter Strategy?\n\n**LinkedIn Newsletter Strategy** — Subscribers get notified — owned reach inside LinkedIn.\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.\n\n#### 1. Niche topic not generic\n\nThis point matters because it connects directly to **LinkedIn Newsletter Strategy** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 2. Biweekly minimum\n\nThis point matters because it connects directly to **LinkedIn Newsletter Strategy** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 3. Promote in Featured + posts\n\nThis point matters because it connects directly to **LinkedIn Newsletter Strategy** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 4. Repurpose to standalone posts\n\nThis point matters because it connects directly to **LinkedIn Newsletter Strategy** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n### Quick reference\n\n| Question | Answer |\n|----------|--------|\n| **One-line summary** | Subscribers get notified — owned reach inside LinkedIn. |\n| **Level** | intermediate — apply after Module 1–2 |\n| **Proof you learned it** | Practice deliverable + quiz + real brand notes |",
    "whyUse": "**LinkedIn Newsletter Strategy** turns vague \"we should market more\" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.",
    "whenToUse": "Use **LinkedIn Newsletter Strategy** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.",
    "steps": [
      {
        "title": "Read with a real brand in mind",
        "body": "Open **HubSpot's** website or ads in another tab. As you read, note one place they already apply (or violate) **LinkedIn Newsletter Strategy**. Screenshot optional."
      },
      {
        "title": "Write the definition in your own words",
        "body": "Without looking, explain LinkedIn Newsletter Strategy in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline."
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
        "body": "Draft newsletter name + 5 issue titles."
      },
      {
        "title": "Self-check before quiz",
        "body": "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections."
      }
    ],
    "example": "### Real email sequence: **Dollar Shave Club** welcome flow (simplified)\n\n1. **Email 1 (immediate):** \"Your first razor ships free\" — confirms purchase, sets tone\n2. **Email 2 (day 2):** \"How to get the closest shave\" — value, no sell\n3. **Email 3 (day 5):** \"Add shave butter?\" — soft cross-sell\n4. **Email 4 (day 10):** Social proof + referral link\n5. **Email 5 (day 14):** Subscription reminder before rebill\n\n**Benchmark:** Welcome series often drives **30–50% of email revenue** for e-commerce despite being only a few emails.",
    "realWorld": "### Where you see **LinkedIn Newsletter Strategy** in the real world\n\n**Nike**, **HubSpot**, and **Warby Parker** all apply concepts from this lesson in live campaigns — from Super Bowl + app download combos to LinkedIn ABM funnels.\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.",
    "commonMistakes": "1. **Only reading definitions** — LinkedIn Newsletter Strategy clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write \"before\" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo",
    "tryIt": "### Practice — LinkedIn Newsletter Strategy\n\nDraft newsletter name + 5 issue titles.\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week\n\n---\n\n### Templates (from MMS)\n\n#### LinkedIn post skeleton\n\n**Hook (line 1):** Pattern interrupt or bold claim\n**Body:** 3 short paragraphs, one idea each\n**Close:** Question to drive comments\n**CTA:** Soft — newsletter, DM, or link in comments\n\n### Execution checklist\n\n- [ ] Rewrite headline for value + ICP\n- [ ] Turn on Creator Mode\n- [ ] Post 5x/week for 4 weeks minimum\n- [ ] 20 substantive comments/day on niche accounts\n- [ ] Reply to every comment within 2 hours of posting",
    "quiz": [
      {
        "question": "Which is the best real-world reference for LinkedIn Newsletter Strategy?",
        "options": [
          "HubSpot — study their live marketing",
          "A random meme page",
          "Ignore all brands",
          "Only textbook definitions"
        ],
        "answer": 0
      },
      {
        "question": "\"Niche topic not generic\" in practice means…",
        "options": [
          "Niche topic not generic",
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
    "slug": "linkedin-company-page-strategy",
    "title": "LinkedIn Company Page Strategy",
    "track": "linkedin-marketing",
    "level": "intermediate",
    "order": 6,
    "estimatedMinutes": 38,
    "summary": "Thought Leader Ads, employee advocacy, events — support personal brands.",
    "objectives": [
      "Explain LinkedIn Company Page Strategy in plain English with a real brand example",
      "Apply LinkedIn Company Page Strategy to a funnel stage and name the right KPI",
      "Work through numeric or scenario examples (not theory only)",
      "Complete the practice deliverable with documented results"
    ],
    "whatIs": "### What is LinkedIn Company Page Strategy?\n\n**LinkedIn Company Page Strategy** — Thought Leader Ads, employee advocacy, events — support personal brands.\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.\n\n#### 1. Amplify founder posts\n\nThis point matters because it connects directly to **LinkedIn Company Page Strategy** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 2. Employee sharing program\n\nThis point matters because it connects directly to **LinkedIn Company Page Strategy** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 3. LinkedIn Events for webinars\n\nThis point matters because it connects directly to **LinkedIn Company Page Strategy** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 4. 20% product / 80% value mix\n\nThis point matters because it connects directly to **LinkedIn Company Page Strategy** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n### Quick reference\n\n| Question | Answer |\n|----------|--------|\n| **One-line summary** | Thought Leader Ads, employee advocacy, events — support personal brands. |\n| **Level** | intermediate — apply after Module 1–2 |\n| **Proof you learned it** | Practice deliverable + quiz + real brand notes |",
    "whyUse": "**LinkedIn Company Page Strategy** turns vague \"we should market more\" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.",
    "whenToUse": "Use **LinkedIn Company Page Strategy** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.",
    "steps": [
      {
        "title": "Read with a real brand in mind",
        "body": "Open **Spotify's** website or ads in another tab. As you read, note one place they already apply (or violate) **LinkedIn Company Page Strategy**. Screenshot optional."
      },
      {
        "title": "Write the definition in your own words",
        "body": "Without looking, explain LinkedIn Company Page Strategy in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline."
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
        "body": "Write company page content pillar mix %."
      },
      {
        "title": "Self-check before quiz",
        "body": "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections."
      }
    ],
    "example": "### Real-world scenario: **Spotify**\n\n**Context:** Thought Leader Ads, employee advocacy, events — support personal brands.\n\n**What the marketing team did:**\n1. Audited current performance (baseline metrics documented)\n2. Applied **LinkedIn Company Page Strategy** to the highest-impact customer segment first\n3. Ran a 2-week test with $500–$2,000 or equivalent time budget\n4. Measured results weekly against one primary KPI\n\n**Sample results pattern (illustrative):**\n\n| Metric | Before | After |\n|--------|--------|-------|\n| Primary KPI | Baseline | +15–30% improvement |\n| Cost efficiency | Unknown | Clear CPA/ROAS |\n| Learning | — | Documented in retrospective |\n\n**Your job in the Practice tab:** Recreate this thinking for a brand you choose — real or fictional — with numbers you research or estimate realistically.",
    "realWorld": "### Where you see **LinkedIn Company Page Strategy** in the real world\n\n**Spotify**, **Salesforce**, and **Warby Parker** all apply concepts from this lesson in live campaigns — from Super Bowl + app download combos to LinkedIn ABM funnels.\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.",
    "commonMistakes": "1. **Only reading definitions** — LinkedIn Company Page Strategy clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write \"before\" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo",
    "tryIt": "### Practice — LinkedIn Company Page Strategy\n\nWrite company page content pillar mix %.\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week\n\n---\n\n### Templates (from MMS)\n\n#### LinkedIn post skeleton\n\n**Hook (line 1):** Pattern interrupt or bold claim\n**Body:** 3 short paragraphs, one idea each\n**Close:** Question to drive comments\n**CTA:** Soft — newsletter, DM, or link in comments\n\n### Execution checklist\n\n- [ ] Rewrite headline for value + ICP\n- [ ] Turn on Creator Mode\n- [ ] Post 5x/week for 4 weeks minimum\n- [ ] 20 substantive comments/day on niche accounts\n- [ ] Reply to every comment within 2 hours of posting",
    "quiz": [
      {
        "question": "Which is the best real-world reference for LinkedIn Company Page Strategy?",
        "options": [
          "Spotify — study their live marketing",
          "A random meme page",
          "Ignore all brands",
          "Only textbook definitions"
        ],
        "answer": 0
      },
      {
        "question": "\"Amplify founder posts\" in practice means…",
        "options": [
          "Amplify founder posts",
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
    "slug": "linkedin-dm-outreach-done-right",
    "title": "LinkedIn DM Outreach Done Right",
    "track": "linkedin-marketing",
    "level": "intermediate",
    "order": 7,
    "estimatedMinutes": 38,
    "summary": "Never pitch first message; rapport then fit-based offer.",
    "objectives": [
      "Explain LinkedIn DM Outreach Done Right in plain English with a real brand example",
      "Apply LinkedIn DM Outreach Done Right to a funnel stage and name the right KPI",
      "Work through numeric or scenario examples (not theory only)",
      "Complete the practice deliverable with documented results"
    ],
    "whatIs": "### What is LinkedIn DM Outreach Done Right?\n\n**LinkedIn DM Outreach Done Right** — Never pitch first message; rapport then fit-based offer.\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.\n\n#### 1. Connect note 1 line personalized\n\nThis point matters because it connects directly to **LinkedIn DM Outreach Done Right** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 2. Value before ask\n\nThis point matters because it connects directly to **LinkedIn DM Outreach Done Right** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 3. Pitch after 2–3 exchanges\n\nThis point matters because it connects directly to **LinkedIn DM Outreach Done Right** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 4. Track in CRM\n\nThis point matters because it connects directly to **LinkedIn DM Outreach Done Right** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n### Quick reference\n\n| Question | Answer |\n|----------|--------|\n| **One-line summary** | Never pitch first message; rapport then fit-based offer. |\n| **Level** | intermediate — apply after Module 1–2 |\n| **Proof you learned it** | Practice deliverable + quiz + real brand notes |",
    "whyUse": "**LinkedIn DM Outreach Done Right** turns vague \"we should market more\" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.",
    "whenToUse": "Use **LinkedIn DM Outreach Done Right** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.",
    "steps": [
      {
        "title": "Read with a real brand in mind",
        "body": "Open **Glossier's** website or ads in another tab. As you read, note one place they already apply (or violate) **LinkedIn DM Outreach Done Right**. Screenshot optional."
      },
      {
        "title": "Write the definition in your own words",
        "body": "Without looking, explain LinkedIn DM Outreach Done Right in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline."
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
        "body": "Write 3-message DM sequence no pitch until message 3."
      },
      {
        "title": "Self-check before quiz",
        "body": "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections."
      }
    ],
    "example": "### Real-world scenario: **Glossier**\n\n**Context:** Never pitch first message; rapport then fit-based offer.\n\n**What the marketing team did:**\n1. Audited current performance (baseline metrics documented)\n2. Applied **LinkedIn DM Outreach Done Right** to the highest-impact customer segment first\n3. Ran a 2-week test with $500–$2,000 or equivalent time budget\n4. Measured results weekly against one primary KPI\n\n**Sample results pattern (illustrative):**\n\n| Metric | Before | After |\n|--------|--------|-------|\n| Primary KPI | Baseline | +15–30% improvement |\n| Cost efficiency | Unknown | Clear CPA/ROAS |\n| Learning | — | Documented in retrospective |\n\n**Your job in the Practice tab:** Recreate this thinking for a brand you choose — real or fictional — with numbers you research or estimate realistically.",
    "realWorld": "### Where you see **LinkedIn DM Outreach Done Right** in the real world\n\n**Glossier**, **Notion**, and **Allbirds** all apply concepts from this lesson in live campaigns — from Super Bowl + app download combos to LinkedIn ABM funnels.\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.",
    "commonMistakes": "1. **Only reading definitions** — LinkedIn DM Outreach Done Right clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write \"before\" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo",
    "tryIt": "### Practice — LinkedIn DM Outreach Done Right\n\nWrite 3-message DM sequence no pitch until message 3.\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week\n\n---\n\n### Templates (from MMS)\n\n#### LinkedIn post skeleton\n\n**Hook (line 1):** Pattern interrupt or bold claim\n**Body:** 3 short paragraphs, one idea each\n**Close:** Question to drive comments\n**CTA:** Soft — newsletter, DM, or link in comments\n\n### Execution checklist\n\n- [ ] Rewrite headline for value + ICP\n- [ ] Turn on Creator Mode\n- [ ] Post 5x/week for 4 weeks minimum\n- [ ] 20 substantive comments/day on niche accounts\n- [ ] Reply to every comment within 2 hours of posting",
    "quiz": [
      {
        "question": "Which is the best real-world reference for LinkedIn DM Outreach Done Right?",
        "options": [
          "Glossier — study their live marketing",
          "A random meme page",
          "Ignore all brands",
          "Only textbook definitions"
        ],
        "answer": 0
      },
      {
        "question": "\"Connect note 1 line personalized\" in practice means…",
        "options": [
          "Connect note 1 line personalized",
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
    "slug": "linkedin-ads-for-b2b",
    "title": "LinkedIn Ads for B2B",
    "track": "linkedin-marketing",
    "level": "advanced",
    "order": 8,
    "estimatedMinutes": 42,
    "summary": "Expensive CPC but high-quality leads; Thought Leader Ads, Lead Gen Forms.",
    "objectives": [
      "Explain LinkedIn Ads for B2B in plain English with a real brand example",
      "Apply LinkedIn Ads for B2B to a funnel stage and name the right KPI",
      "Work through numeric or scenario examples (not theory only)",
      "Complete the practice deliverable with documented results"
    ],
    "whatIs": "### What is LinkedIn Ads for B2B?\n\n**LinkedIn Ads for B2B** — Expensive CPC but high-quality leads; Thought Leader Ads, Lead Gen Forms.\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.\n\n#### 1. $5–15 CPC typical\n\nThese numbers appear in every Google Ads and Meta Ads report. If you cannot explain them to a client in one sentence, pause and practice with the worked example in this lesson.\n\n#### 2. $50/day minimum test\n\nThis point matters because it connects directly to **LinkedIn Ads for B2B** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 3. Retargeting most efficient\n\nThis point matters because it connects directly to **LinkedIn Ads for B2B** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 4. Job title + company size targeting\n\nThis point matters because it connects directly to **LinkedIn Ads for B2B** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n### Quick reference\n\n| Question | Answer |\n|----------|--------|\n| **One-line summary** | Expensive CPC but high-quality leads; Thought Leader Ads, Lead Gen Forms. |\n| **Level** | advanced — advanced / portfolio depth |\n| **Proof you learned it** | Practice deliverable + quiz + real brand notes |",
    "whyUse": "**LinkedIn Ads for B2B** turns vague \"we should market more\" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.",
    "whenToUse": "Use **LinkedIn Ads for B2B** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.",
    "steps": [
      {
        "title": "Read with a real brand in mind",
        "body": "Open **Salesforce's** website or ads in another tab. As you read, note one place they already apply (or violate) **LinkedIn Ads for B2B**. Screenshot optional."
      },
      {
        "title": "Write the definition in your own words",
        "body": "Without looking, explain LinkedIn Ads for B2B in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline."
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
        "body": "Design one campaign: objective, audience, format, KPI."
      },
      {
        "title": "Self-check before quiz",
        "body": "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections."
      }
    ],
    "example": "### Real-world scenario: **Salesforce**\n\n**Context:** Expensive CPC but high-quality leads; Thought Leader Ads, Lead Gen Forms.\n\n**What the marketing team did:**\n1. Audited current performance (baseline metrics documented)\n2. Applied **LinkedIn Ads for B2B** to the highest-impact customer segment first\n3. Ran a 2-week test with $500–$2,000 or equivalent time budget\n4. Measured results weekly against one primary KPI\n\n**Sample results pattern (illustrative):**\n\n| Metric | Before | After |\n|--------|--------|-------|\n| Primary KPI | Baseline | +15–30% improvement |\n| Cost efficiency | Unknown | Clear CPA/ROAS |\n| Learning | — | Documented in retrospective |\n\n**Your job in the Practice tab:** Recreate this thinking for a brand you choose — real or fictional — with numbers you research or estimate realistically.",
    "realWorld": "### Where you see **LinkedIn Ads for B2B** in the real world\n\n**Spotify**, **Salesforce**, and **Allbirds** all apply concepts from this lesson in live campaigns — from Super Bowl + app download combos to LinkedIn ABM funnels.\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.",
    "commonMistakes": "1. **Only reading definitions** — LinkedIn Ads for B2B clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write \"before\" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo",
    "tryIt": "### Practice — LinkedIn Ads for B2B\n\nDesign one campaign: objective, audience, format, KPI.\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week\n\n---\n\n### Templates (from MMS)\n\n#### LinkedIn post skeleton\n\n**Hook (line 1):** Pattern interrupt or bold claim\n**Body:** 3 short paragraphs, one idea each\n**Close:** Question to drive comments\n**CTA:** Soft — newsletter, DM, or link in comments\n\n### Execution checklist\n\n- [ ] Rewrite headline for value + ICP\n- [ ] Turn on Creator Mode\n- [ ] Post 5x/week for 4 weeks minimum\n- [ ] 20 substantive comments/day on niche accounts\n- [ ] Reply to every comment within 2 hours of posting",
    "quiz": [
      {
        "question": "Which is the best real-world reference for LinkedIn Ads for B2B?",
        "options": [
          "Salesforce — study their live marketing",
          "A random meme page",
          "Ignore all brands",
          "Only textbook definitions"
        ],
        "answer": 0
      },
      {
        "question": "\"$5–15 CPC typical\" in practice means…",
        "options": [
          "$5–15 CPC typical",
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
    "slug": "linkedin-marketing-execution-checklist",
    "title": "LinkedIn Marketing Execution Checklist",
    "track": "linkedin-marketing",
    "level": "base",
    "order": 9,
    "estimatedMinutes": 38,
    "summary": "Week-by-week launch checklist from MMS.",
    "objectives": [
      "Explain LinkedIn Marketing Execution Checklist in plain English with a real brand example",
      "Apply LinkedIn Marketing Execution Checklist to a funnel stage and name the right KPI",
      "Work through numeric or scenario examples (not theory only)",
      "Complete the practice deliverable with documented results"
    ],
    "whatIs": "### What is LinkedIn Marketing Execution Checklist?\n\n**LinkedIn Marketing Execution Checklist** — Week-by-week launch checklist from MMS.\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.\n\n#### 1. Profile optimized\n\nThis point matters because it connects directly to **LinkedIn Marketing Execution Checklist** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 2. Creator Mode\n\nThis point matters because it connects directly to **LinkedIn Marketing Execution Checklist** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 3. 5x/week posting\n\nThis point matters because it connects directly to **LinkedIn Marketing Execution Checklist** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 4. 20 comments/day\n\nThis point matters because it connects directly to **LinkedIn Marketing Execution Checklist** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 5. Newsletter launched\n\nThis point matters because it connects directly to **LinkedIn Marketing Execution Checklist** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n### Quick reference\n\n| Question | Answer |\n|----------|--------|\n| **One-line summary** | Week-by-week launch checklist from MMS. |\n| **Level** | base — foundational for all marketers |\n| **Proof you learned it** | Practice deliverable + quiz + real brand notes |",
    "whyUse": "**LinkedIn Marketing Execution Checklist** turns vague \"we should market more\" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.",
    "whenToUse": "Use **LinkedIn Marketing Execution Checklist** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.",
    "steps": [
      {
        "title": "Read with a real brand in mind",
        "body": "Open **Airbnb's** website or ads in another tab. As you read, note one place they already apply (or violate) **LinkedIn Marketing Execution Checklist**. Screenshot optional."
      },
      {
        "title": "Write the definition in your own words",
        "body": "Without looking, explain LinkedIn Marketing Execution Checklist in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline."
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
        "body": "Complete checklist; date your start day."
      },
      {
        "title": "Self-check before quiz",
        "body": "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections."
      }
    ],
    "example": "### Real-world scenario: **Airbnb**\n\n**Context:** Week-by-week launch checklist from MMS.\n\n**What the marketing team did:**\n1. Audited current performance (baseline metrics documented)\n2. Applied **LinkedIn Marketing Execution Checklist** to the highest-impact customer segment first\n3. Ran a 2-week test with $500–$2,000 or equivalent time budget\n4. Measured results weekly against one primary KPI\n\n**Sample results pattern (illustrative):**\n\n| Metric | Before | After |\n|--------|--------|-------|\n| Primary KPI | Baseline | +15–30% improvement |\n| Cost efficiency | Unknown | Clear CPA/ROAS |\n| Learning | — | Documented in retrospective |\n\n**Your job in the Practice tab:** Recreate this thinking for a brand you choose — real or fictional — with numbers you research or estimate realistically.",
    "realWorld": "### Where you see **LinkedIn Marketing Execution Checklist** in the real world\n\n**Airbnb**, **Slack**, and **Dollar Shave Club** all apply concepts from this lesson in live campaigns — from Super Bowl + app download combos to LinkedIn ABM funnels.\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.",
    "commonMistakes": "1. **Only reading definitions** — LinkedIn Marketing Execution Checklist clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write \"before\" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo",
    "tryIt": "### Practice — LinkedIn Marketing Execution Checklist\n\nComplete checklist; date your start day.\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week\n\n---\n\n### Templates (from MMS)\n\n#### LinkedIn post skeleton\n\n**Hook (line 1):** Pattern interrupt or bold claim\n**Body:** 3 short paragraphs, one idea each\n**Close:** Question to drive comments\n**CTA:** Soft — newsletter, DM, or link in comments\n\n### Execution checklist\n\n- [ ] Rewrite headline for value + ICP\n- [ ] Turn on Creator Mode\n- [ ] Post 5x/week for 4 weeks minimum\n- [ ] 20 substantive comments/day on niche accounts\n- [ ] Reply to every comment within 2 hours of posting",
    "quiz": [
      {
        "question": "Which is the best real-world reference for LinkedIn Marketing Execution Checklist?",
        "options": [
          "Airbnb — study their live marketing",
          "A random meme page",
          "Ignore all brands",
          "Only textbook definitions"
        ],
        "answer": 0
      },
      {
        "question": "\"Profile optimized\" in practice means…",
        "options": [
          "Profile optimized",
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
