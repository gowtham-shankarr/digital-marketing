import type { Lesson } from "@/lib/types";

export const icp_list_buildingLessons: Lesson[] = [
  {
    "slug": "icp-list-building-protocol-overview",
    "title": "ICP List Building Protocol Overview",
    "track": "icp-list-building",
    "level": "base",
    "order": 1,
    "estimatedMinutes": 40,
    "summary": "RevGrowth 7-step protocol: TAM → ICP research → client feedback → scrape → multi-provider → waterfall enrich → AI score.",
    "objectives": [
      "Draw full 7-step workflow with tools at each step",
      "Explain why waterfall beats single data vendor",
      "Define ICP vs TAM vs persona for B2B"
    ],
    "whatIs": "### The 7-step ICP list building protocol\n\n| Step | Name | What you do | Example tools |\n|------|------|-------------|---------------|\n| 1 | **TAM assessment** | Size market | GPT research, DiscoLike, Apollo |\n| 2 | **ICP research (AI)** | Segments + personas | GPT-4, Claude, Claygent |\n| 3 | **Client feedback** | Validate with buyers | Interviews, CRM notes |\n| 4 | **Scrape TAM data** | Firmographics, tech, people | Crunchbase, BuiltWith, Apify |\n| 5 | **Multi-provider** | No single source has 100% | Apollo + PandaMatch + PitchBook |\n| 6 | **Waterfall enrichment** | Email until verified | Apollo → Prospeo → Icypeas → LeadMagic |\n| 7 | **Score TAM** | AI fit scoring | Clay Claygent, intent signals |\n\n### Why this matters\n\nBad lists → spam complaints → burned domains → fired SDRs. **ICP discipline + verified data** is the foundation of B2B outbound that actually books meetings.",
    "whyUse": "Sales and marketing alignment starts with the same ICP and the same list quality standards.",
    "whenToUse": "Launching outbound, hiring SDRs, buying data tools, ABM campaigns.",
    "steps": [
      {
        "title": "Flowchart",
        "body": "Draw 7 boxes with your chosen tools (even free tiers)."
      },
      {
        "title": "ICP one-pager",
        "body": "Industry, size, title, tech, disqualifiers."
      },
      {
        "title": "Cost model",
        "body": "Estimate cost per verified lead through waterfall."
      }
    ],
    "example": "### Sample ICP (B2B SaaS)\n\n**ICP:** US marketing agencies, 10–50 employees, running Meta ads, no marketing automation yet.\n\n**TAM (Apollo filter):** ~8,400 companies\n\n**SOM year 1:** 200 customers → need ~2,000 qualified contacts in CRM",
    "realWorld": "RevGrowth.ai protocol used by B2B agencies. Similar flows in **Clay.com** university content.",
    "commonMistakes": "1. **Buying 50k emails day 1**\n2. **No verification**\n3. **ICP from imagination**\n4. **One tool only**\n5. **No scoring — SDRs call random accounts**",
    "tryIt": "### Programming task (~15 min)\n\n**Goal:** Prove you understand ICP List Building Protocol Overview by writing code, not just reading.\n\n**Part A — Run** — Open DevTools Console (F12). Type the example from the lesson manually.\n\n**Part B — Modify** — Change one value, name, or class in the ICP List Building Protocol Overview example. Observe what breaks or improves.\n\n**Part C — Extend** — Add one feature related to ICP List Building Protocol Overview: extra element, log line, validation, or UI state.\n\n**Done when:** You can explain ICP List Building Protocol Overview to a friend while pointing at your code.\n\n**Bonus:** Comment each new line with why you added it.",
    "quiz": [
      {
        "question": "Waterfall enrichment means…",
        "options": [
          "Sequential tools until email verified",
          "One bulk buy",
          "Guess emails",
          "LinkedIn only"
        ],
        "answer": 0
      },
      {
        "question": "TAM is…",
        "options": [
          "Total addressable market size",
          "One lead",
          "Email template",
          "Ad budget"
        ],
        "answer": 0
      },
      {
        "question": "Step 3 client feedback…",
        "options": [
          "Validates ICP with real buyers",
          "Optional forever",
          "Only for B2C",
          "Illegal"
        ],
        "answer": 0
      },
      {
        "question": "Claygent used for…",
        "options": [
          "AI web research/scrape in workflows",
          "Email sending only",
          "Graphic design",
          "Hosting"
        ],
        "answer": 0
      },
      {
        "question": "Multi-provider because…",
        "options": [
          "No vendor has 100% coverage",
          "Duplicates are good",
          "One is always enough",
          "GDPR"
        ],
        "answer": 0
      }
    ],
    "playground": "none"
  },
  {
    "slug": "tam-assessment-with-ai-and-data-tools",
    "title": "TAM Assessment with AI and Data Tools",
    "track": "icp-list-building",
    "level": "base",
    "order": 2,
    "estimatedMinutes": 38,
    "summary": "Size the market with GPT research, DiscoLike lookalikes, Apollo filters.",
    "objectives": [
      "Explain TAM Assessment with AI and Data Tools in plain English with a real brand example",
      "Apply TAM Assessment with AI and Data Tools to a funnel stage and name the right KPI",
      "Work through numeric or scenario examples (not theory only)",
      "Complete the practice deliverable with documented results"
    ],
    "whatIs": "### What is TAM Assessment with AI and Data Tools?\n\n**TAM Assessment with AI and Data Tools** — Size the market with GPT research, DiscoLike lookalikes, Apollo filters.\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.\n\n#### 1. TAM = total companies fitting filters\n\nThis point matters because it connects directly to **TAM Assessment with AI and Data Tools** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 2. SAM = serviceable slice\n\nThis point matters because it connects directly to **TAM Assessment with AI and Data Tools** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 3. SOM = realistic first-year target\n\nThis point matters because it connects directly to **TAM Assessment with AI and Data Tools** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 4. Apollo comprehensive filters\n\nThis point matters because it connects directly to **TAM Assessment with AI and Data Tools** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n### Quick reference\n\n| Question | Answer |\n|----------|--------|\n| **One-line summary** | Size the market with GPT research, DiscoLike lookalikes, Apollo filters. |\n| **Level** | base — foundational for all marketers |\n| **Proof you learned it** | Practice deliverable + quiz + real brand notes |",
    "whyUse": "**TAM Assessment with AI and Data Tools** turns vague \"we should market more\" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.",
    "whenToUse": "Use **TAM Assessment with AI and Data Tools** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.",
    "steps": [
      {
        "title": "Read with a real brand in mind",
        "body": "Open **HubSpot's** website or ads in another tab. As you read, note one place they already apply (or violate) **TAM Assessment with AI and Data Tools**. Screenshot optional."
      },
      {
        "title": "Write the definition in your own words",
        "body": "Without looking, explain TAM Assessment with AI and Data Tools in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline."
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
        "body": "Estimate TAM for one ICP in Apollo; export count."
      },
      {
        "title": "Self-check before quiz",
        "body": "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections."
      }
    ],
    "example": "### Real-world scenario: **HubSpot**\n\n**Context:** Size the market with GPT research, DiscoLike lookalikes, Apollo filters.\n\n**What the marketing team did:**\n1. Audited current performance (baseline metrics documented)\n2. Applied **TAM Assessment with AI and Data Tools** to the highest-impact customer segment first\n3. Ran a 2-week test with $500–$2,000 or equivalent time budget\n4. Measured results weekly against one primary KPI\n\n**Sample results pattern (illustrative):**\n\n| Metric | Before | After |\n|--------|--------|-------|\n| Primary KPI | Baseline | +15–30% improvement |\n| Cost efficiency | Unknown | Clear CPA/ROAS |\n| Learning | — | Documented in retrospective |\n\n**Your job in the Practice tab:** Recreate this thinking for a brand you choose — real or fictional — with numbers you research or estimate realistically.",
    "realWorld": "### Where you see **TAM Assessment with AI and Data Tools** in the real world\n\n**Nike**, **HubSpot**, and **Allbirds** all apply concepts from this lesson in live campaigns — from Super Bowl + app download combos to LinkedIn ABM funnels.\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.",
    "commonMistakes": "1. **Only reading definitions** — TAM Assessment with AI and Data Tools clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write \"before\" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo",
    "tryIt": "### Practice — TAM Assessment with AI and Data Tools\n\nEstimate TAM for one ICP in Apollo; export count.\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week\n\n---\n\n### Templates (from MMS)\n\n#### ICP definition sheet\n\n**Firmographics:** Industry, company size, geography, tech stack\n**Triggers:** Recent funding, hiring, tech change\n**Persona:** Title, pains, objections\n**Disqualifiers:** Who we do NOT sell to\n\n### Execution checklist\n\n- [ ] Run TAM estimate in Apollo or similar\n- [ ] Document ICP in shared Notion page\n- [ ] Build waterfall enrichment order\n- [ ] Verify 10 sample emails before scaling\n- [ ] Score 50 accounts against ICP criteria",
    "quiz": [
      {
        "question": "Which is the best real-world reference for TAM Assessment with AI and Data Tools?",
        "options": [
          "HubSpot — study their live marketing",
          "A random meme page",
          "Ignore all brands",
          "Only textbook definitions"
        ],
        "answer": 0
      },
      {
        "question": "\"TAM = total companies fitting filters\" in practice means…",
        "options": [
          "TAM = total companies fitting filters",
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
    "slug": "icp-research-with-ai-gpt-4-claude-claygent",
    "title": "ICP Research with AI (GPT-4, Claude, Claygent)",
    "track": "icp-list-building",
    "level": "base",
    "order": 3,
    "estimatedMinutes": 38,
    "summary": "AI web research for segments, personas, and messaging angles.",
    "objectives": [
      "Explain ICP Research with AI (GPT-4, Claude, Claygent) in plain English with a real brand example",
      "Apply ICP Research with AI (GPT-4, Claude, Claygent) to a funnel stage and name the right KPI",
      "Work through numeric or scenario examples (not theory only)",
      "Complete the practice deliverable with documented results"
    ],
    "whatIs": "### What is ICP Research with AI (GPT-4, Claude, Claygent)?\n\n**ICP Research with AI (GPT-4, Claude, Claygent)** — AI web research for segments, personas, and messaging angles.\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.\n\n#### 1. GPT-4 for broad research\n\nThis point matters because it connects directly to **ICP Research with AI (GPT-4, Claude, Claygent)** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 2. Claude for strategy narrative\n\nThis point matters because it connects directly to **ICP Research with AI (GPT-4, Claude, Claygent)** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 3. Claygent for structured web scrape\n\nThis point matters because it connects directly to **ICP Research with AI (GPT-4, Claude, Claygent)** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 4. Validate AI output with 5 customer calls\n\nThis point matters because it connects directly to **ICP Research with AI (GPT-4, Claude, Claygent)** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n### Quick reference\n\n| Question | Answer |\n|----------|--------|\n| **One-line summary** | AI web research for segments, personas, and messaging angles. |\n| **Level** | base — foundational for all marketers |\n| **Proof you learned it** | Practice deliverable + quiz + real brand notes |",
    "whyUse": "**ICP Research with AI (GPT-4, Claude, Claygent)** turns vague \"we should market more\" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.",
    "whenToUse": "Use **ICP Research with AI (GPT-4, Claude, Claygent)** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.",
    "steps": [
      {
        "title": "Read with a real brand in mind",
        "body": "Open **Slack's** website or ads in another tab. As you read, note one place they already apply (or violate) **ICP Research with AI (GPT-4, Claude, Claygent)**. Screenshot optional."
      },
      {
        "title": "Write the definition in your own words",
        "body": "Without looking, explain ICP Research with AI (GPT-4, Claude, Claygent) in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline."
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
        "body": "Prompt AI for 3 segments; verify one with real company example."
      },
      {
        "title": "Self-check before quiz",
        "body": "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections."
      }
    ],
    "example": "### Real persona + ICP: **Notion** (B2B side)\n\n**ICP:** 50–500 employee tech companies, already using Slack, no unified wiki.\n\n**Persona — \"Operations lead Olivia\":**\n- **Goal:** One source of truth for team docs\n- **Pain:** Docs scattered in Drive, Confluence, Notion trials that failed\n- **Objection:** \"Another tool nobody will use\"\n- **Channel:** LinkedIn ads, productivity podcasts, template gallery SEO\n\n**Positioning line:** \"One workspace. Every doc, task, and wiki.\"\n\nMessaging came from **interviews**, not a conference room guess.",
    "realWorld": "### Where you see **ICP Research with AI (GPT-4, Claude, Claygent)** in the real world\n\n**Airbnb**, **Slack**, and **Allbirds** all apply concepts from this lesson in live campaigns — from Super Bowl + app download combos to LinkedIn ABM funnels.\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.",
    "commonMistakes": "1. **Only reading definitions** — ICP Research with AI (GPT-4, Claude, Claygent) clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write \"before\" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo",
    "tryIt": "### Practice — ICP Research with AI (GPT-4, Claude, Claygent)\n\nPrompt AI for 3 segments; verify one with real company example.\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week\n\n---\n\n### Templates (from MMS)\n\n#### ICP definition sheet\n\n**Firmographics:** Industry, company size, geography, tech stack\n**Triggers:** Recent funding, hiring, tech change\n**Persona:** Title, pains, objections\n**Disqualifiers:** Who we do NOT sell to\n\n### Execution checklist\n\n- [ ] Run TAM estimate in Apollo or similar\n- [ ] Document ICP in shared Notion page\n- [ ] Build waterfall enrichment order\n- [ ] Verify 10 sample emails before scaling\n- [ ] Score 50 accounts against ICP criteria",
    "quiz": [
      {
        "question": "Which is the best real-world reference for ICP Research with AI (GPT-4, Claude, Claygent)?",
        "options": [
          "Slack — study their live marketing",
          "A random meme page",
          "Ignore all brands",
          "Only textbook definitions"
        ],
        "answer": 0
      },
      {
        "question": "\"GPT-4 for broad research\" in practice means…",
        "options": [
          "GPT-4 for broad research",
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
    "slug": "client-feedback-for-icp-refinement",
    "title": "Client Feedback for ICP Refinement",
    "track": "icp-list-building",
    "level": "base",
    "order": 4,
    "estimatedMinutes": 38,
    "summary": "Ask customers why they bought — refine ICP from reality not assumptions.",
    "objectives": [
      "Explain Client Feedback for ICP Refinement in plain English with a real brand example",
      "Apply Client Feedback for ICP Refinement to a funnel stage and name the right KPI",
      "Work through numeric or scenario examples (not theory only)",
      "Complete the practice deliverable with documented results"
    ],
    "whatIs": "### What is Client Feedback for ICP Refinement?\n\n**Client Feedback for ICP Refinement** — Ask customers why they bought — refine ICP from reality not assumptions.\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.\n\n#### 1. Win/loss interviews\n\nThis point matters because it connects directly to **Client Feedback for ICP Refinement** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 2. Sales call recordings\n\nThis point matters because it connects directly to **Client Feedback for ICP Refinement** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 3. Support ticket themes\n\nThis point matters because it connects directly to **Client Feedback for ICP Refinement** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 4. Update ICP doc quarterly\n\nThis point matters because it connects directly to **Client Feedback for ICP Refinement** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n### Quick reference\n\n| Question | Answer |\n|----------|--------|\n| **One-line summary** | Ask customers why they bought — refine ICP from reality not assumptions. |\n| **Level** | base — foundational for all marketers |\n| **Proof you learned it** | Practice deliverable + quiz + real brand notes |",
    "whyUse": "**Client Feedback for ICP Refinement** turns vague \"we should market more\" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.",
    "whenToUse": "Use **Client Feedback for ICP Refinement** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.",
    "steps": [
      {
        "title": "Read with a real brand in mind",
        "body": "Open **Spotify's** website or ads in another tab. As you read, note one place they already apply (or violate) **Client Feedback for ICP Refinement**. Screenshot optional."
      },
      {
        "title": "Write the definition in your own words",
        "body": "Without looking, explain Client Feedback for ICP Refinement in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline."
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
        "body": "Write 5 interview questions for recent customers."
      },
      {
        "title": "Self-check before quiz",
        "body": "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections."
      }
    ],
    "example": "### Real persona + ICP: **Notion** (B2B side)\n\n**ICP:** 50–500 employee tech companies, already using Slack, no unified wiki.\n\n**Persona — \"Operations lead Olivia\":**\n- **Goal:** One source of truth for team docs\n- **Pain:** Docs scattered in Drive, Confluence, Notion trials that failed\n- **Objection:** \"Another tool nobody will use\"\n- **Channel:** LinkedIn ads, productivity podcasts, template gallery SEO\n\n**Positioning line:** \"One workspace. Every doc, task, and wiki.\"\n\nMessaging came from **interviews**, not a conference room guess.",
    "realWorld": "### Where you see **Client Feedback for ICP Refinement** in the real world\n\n**Spotify**, **Salesforce**, and **Warby Parker** all apply concepts from this lesson in live campaigns — from Super Bowl + app download combos to LinkedIn ABM funnels.\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.",
    "commonMistakes": "1. **Only reading definitions** — Client Feedback for ICP Refinement clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write \"before\" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo",
    "tryIt": "### Practice — Client Feedback for ICP Refinement\n\nWrite 5 interview questions for recent customers.\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week\n\n---\n\n### Templates (from MMS)\n\n#### ICP definition sheet\n\n**Firmographics:** Industry, company size, geography, tech stack\n**Triggers:** Recent funding, hiring, tech change\n**Persona:** Title, pains, objections\n**Disqualifiers:** Who we do NOT sell to\n\n### Execution checklist\n\n- [ ] Run TAM estimate in Apollo or similar\n- [ ] Document ICP in shared Notion page\n- [ ] Build waterfall enrichment order\n- [ ] Verify 10 sample emails before scaling\n- [ ] Score 50 accounts against ICP criteria",
    "quiz": [
      {
        "question": "Which is the best real-world reference for Client Feedback for ICP Refinement?",
        "options": [
          "Spotify — study their live marketing",
          "A random meme page",
          "Ignore all brands",
          "Only textbook definitions"
        ],
        "answer": 0
      },
      {
        "question": "\"Win/loss interviews\" in practice means…",
        "options": [
          "Win/loss interviews",
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
    "slug": "scraping-tam-data-at-scale",
    "title": "Scraping TAM Data at Scale",
    "track": "icp-list-building",
    "level": "base",
    "order": 5,
    "estimatedMinutes": 38,
    "summary": "Crunchbase, BuiltWith, Apify, Store Leads — collect firmographics and tech stack.",
    "objectives": [
      "Explain Scraping TAM Data at Scale in plain English with a real brand example",
      "Apply Scraping TAM Data at Scale to a funnel stage and name the right KPI",
      "Work through numeric or scenario examples (not theory only)",
      "Complete the practice deliverable with documented results"
    ],
    "whatIs": "### What is Scraping TAM Data at Scale?\n\n**Scraping TAM Data at Scale** — Crunchbase, BuiltWith, Apify, Store Leads — collect firmographics and tech stack.\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.\n\n#### 1. Employee count, location, industry\n\nThis point matters because it connects directly to **Scraping TAM Data at Scale** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 2. Technologies used = intent\n\nThis point matters because it connects directly to **Scraping TAM Data at Scale** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 3. Decision makers and departments\n\nThis point matters because it connects directly to **Scraping TAM Data at Scale** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 4. Apify community scrapers\n\nThis point matters because it connects directly to **Scraping TAM Data at Scale** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n### Quick reference\n\n| Question | Answer |\n|----------|--------|\n| **One-line summary** | Crunchbase, BuiltWith, Apify, Store Leads — collect firmographics and tech stack. |\n| **Level** | base — foundational for all marketers |\n| **Proof you learned it** | Practice deliverable + quiz + real brand notes |",
    "whyUse": "**Scraping TAM Data at Scale** turns vague \"we should market more\" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.",
    "whenToUse": "Use **Scraping TAM Data at Scale** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.",
    "steps": [
      {
        "title": "Read with a real brand in mind",
        "body": "Open **HubSpot's** website or ads in another tab. As you read, note one place they already apply (or violate) **Scraping TAM Data at Scale**. Screenshot optional."
      },
      {
        "title": "Write the definition in your own words",
        "body": "Without looking, explain Scraping TAM Data at Scale in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline."
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
        "body": "List 8 data fields you need per account; source each."
      },
      {
        "title": "Self-check before quiz",
        "body": "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections."
      }
    ],
    "example": "### Real-world scenario: **HubSpot**\n\n**Context:** Crunchbase, BuiltWith, Apify, Store Leads — collect firmographics and tech stack.\n\n**What the marketing team did:**\n1. Audited current performance (baseline metrics documented)\n2. Applied **Scraping TAM Data at Scale** to the highest-impact customer segment first\n3. Ran a 2-week test with $500–$2,000 or equivalent time budget\n4. Measured results weekly against one primary KPI\n\n**Sample results pattern (illustrative):**\n\n| Metric | Before | After |\n|--------|--------|-------|\n| Primary KPI | Baseline | +15–30% improvement |\n| Cost efficiency | Unknown | Clear CPA/ROAS |\n| Learning | — | Documented in retrospective |\n\n**Your job in the Practice tab:** Recreate this thinking for a brand you choose — real or fictional — with numbers you research or estimate realistically.",
    "realWorld": "### Where you see **Scraping TAM Data at Scale** in the real world\n\n**Nike**, **HubSpot**, and **Warby Parker** all apply concepts from this lesson in live campaigns — from Super Bowl + app download combos to LinkedIn ABM funnels.\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.",
    "commonMistakes": "1. **Only reading definitions** — Scraping TAM Data at Scale clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write \"before\" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo",
    "tryIt": "### Practice — Scraping TAM Data at Scale\n\nList 8 data fields you need per account; source each.\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week\n\n---\n\n### Templates (from MMS)\n\n#### ICP definition sheet\n\n**Firmographics:** Industry, company size, geography, tech stack\n**Triggers:** Recent funding, hiring, tech change\n**Persona:** Title, pains, objections\n**Disqualifiers:** Who we do NOT sell to\n\n### Execution checklist\n\n- [ ] Run TAM estimate in Apollo or similar\n- [ ] Document ICP in shared Notion page\n- [ ] Build waterfall enrichment order\n- [ ] Verify 10 sample emails before scaling\n- [ ] Score 50 accounts against ICP criteria",
    "quiz": [
      {
        "question": "Which is the best real-world reference for Scraping TAM Data at Scale?",
        "options": [
          "HubSpot — study their live marketing",
          "A random meme page",
          "Ignore all brands",
          "Only textbook definitions"
        ],
        "answer": 0
      },
      {
        "question": "\"Employee count, location, industry\" in practice means…",
        "options": [
          "Employee count, location, industry",
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
    "slug": "multi-provider-data-strategy",
    "title": "Multi-Provider Data Strategy",
    "track": "icp-list-building",
    "level": "base",
    "order": 6,
    "estimatedMinutes": 38,
    "summary": "No vendor has 100% coverage — stack Apollo, PandaMatch, PitchBook, etc.",
    "objectives": [
      "Explain Multi-Provider Data Strategy in plain English with a real brand example",
      "Apply Multi-Provider Data Strategy to a funnel stage and name the right KPI",
      "Work through numeric or scenario examples (not theory only)",
      "Complete the practice deliverable with documented results"
    ],
    "whatIs": "### What is Multi-Provider Data Strategy?\n\n**Multi-Provider Data Strategy** — No vendor has 100% coverage — stack Apollo, PandaMatch, PitchBook, etc.\n\nRead this section fully. Below, each idea is explained in plain English with enough detail to use on a real client or job interview — not just memorize a definition.\n\n#### 1. Overlap dedupe rules\n\nThis point matters because it connects directly to **Multi-Provider Data Strategy** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 2. Cost per field vs accuracy\n\nThis point matters because it connects directly to **Multi-Provider Data Strategy** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 3. Document provider strengths\n\nThis point matters because it connects directly to **Multi-Provider Data Strategy** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n#### 4. Refresh cadence monthly\n\nThis point matters because it connects directly to **Multi-Provider Data Strategy** in live campaigns. When you audit a brand, look for evidence of this principle in their website, ads, or emails — then note what they do well and what you would fix.\n\n### Quick reference\n\n| Question | Answer |\n|----------|--------|\n| **One-line summary** | No vendor has 100% coverage — stack Apollo, PandaMatch, PitchBook, etc. |\n| **Level** | base — foundational for all marketers |\n| **Proof you learned it** | Practice deliverable + quiz + real brand notes |",
    "whyUse": "**Multi-Provider Data Strategy** turns vague \"we should market more\" into decisions you can defend. Managers and clients ask *why this channel, why this budget, why this message* — this topic gives you the vocabulary and logic to answer with evidence, not opinions.",
    "whenToUse": "Use **Multi-Provider Data Strategy** when writing a marketing plan, auditing a live campaign, preparing for Google/Meta/HubSpot interviews, or building a case study. Skip deep dives here only after you can teach the basics to someone else using a real example.",
    "steps": [
      {
        "title": "Read with a real brand in mind",
        "body": "Open **Glossier's** website or ads in another tab. As you read, note one place they already apply (or violate) **Multi-Provider Data Strategy**. Screenshot optional."
      },
      {
        "title": "Write the definition in your own words",
        "body": "Without looking, explain Multi-Provider Data Strategy in 2–3 sentences a friend would understand. If you use jargon (CPC, TOFU, etc.), define it inline."
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
        "body": "Compare 3 providers in table: coverage, price, best for."
      },
      {
        "title": "Self-check before quiz",
        "body": "Can you name one real company example, one metric, and one common mistake? If not, re-read Deep dive sections."
      }
    ],
    "example": "### Real-world scenario: **Glossier**\n\n**Context:** No vendor has 100% coverage — stack Apollo, PandaMatch, PitchBook, etc.\n\n**What the marketing team did:**\n1. Audited current performance (baseline metrics documented)\n2. Applied **Multi-Provider Data Strategy** to the highest-impact customer segment first\n3. Ran a 2-week test with $500–$2,000 or equivalent time budget\n4. Measured results weekly against one primary KPI\n\n**Sample results pattern (illustrative):**\n\n| Metric | Before | After |\n|--------|--------|-------|\n| Primary KPI | Baseline | +15–30% improvement |\n| Cost efficiency | Unknown | Clear CPA/ROAS |\n| Learning | — | Documented in retrospective |\n\n**Your job in the Practice tab:** Recreate this thinking for a brand you choose — real or fictional — with numbers you research or estimate realistically.",
    "realWorld": "### Where you see **Multi-Provider Data Strategy** in the real world\n\n**Glossier**, **Notion**, and **Allbirds** all apply concepts from this lesson in live campaigns — from Super Bowl + app download combos to LinkedIn ABM funnels.\n\n**Portfolio tip:** Pick one case above and write 5 bullets: situation, tactic, metric, result, what you'd test next.",
    "commonMistakes": "1. **Only reading definitions** — Multi-Provider Data Strategy clicks when you apply it to a named brand with numbers\n2. **Same example for every topic** — compare Nike vs. HubSpot vs. a local shop; context changes tactics\n3. **No baseline metric** — write \"before\" numbers or you cannot prove improvement\n4. **Tool obsession** — software does not replace strategy; learn the why first\n5. **Isolated channel thinking** — tie this lesson to email + ads + site together, not one silo",
    "tryIt": "### Practice — Multi-Provider Data Strategy\n\nCompare 3 providers in table: coverage, price, best for.\n\n**Use a REAL brand** (e.g. one you shop from, a local business, or a site you admire). **Deliverable:**\n- Brand name\n- What you observed or changed\n- At least **one number** (traffic, followers, price, CTR estimate, etc.)\n- One sentence: what you'd test next week\n\n---\n\n### Templates (from MMS)\n\n#### ICP definition sheet\n\n**Firmographics:** Industry, company size, geography, tech stack\n**Triggers:** Recent funding, hiring, tech change\n**Persona:** Title, pains, objections\n**Disqualifiers:** Who we do NOT sell to\n\n### Execution checklist\n\n- [ ] Run TAM estimate in Apollo or similar\n- [ ] Document ICP in shared Notion page\n- [ ] Build waterfall enrichment order\n- [ ] Verify 10 sample emails before scaling\n- [ ] Score 50 accounts against ICP criteria",
    "quiz": [
      {
        "question": "Which is the best real-world reference for Multi-Provider Data Strategy?",
        "options": [
          "Glossier — study their live marketing",
          "A random meme page",
          "Ignore all brands",
          "Only textbook definitions"
        ],
        "answer": 0
      },
      {
        "question": "\"Overlap dedupe rules\" in practice means…",
        "options": [
          "Overlap dedupe rules",
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
    "slug": "waterfall-enrichment-workflow",
    "title": "Waterfall Enrichment Workflow",
    "track": "icp-list-building",
    "level": "intermediate",
    "order": 7,
    "estimatedMinutes": 42,
    "summary": "Apollo → Prospeo → Icypeas → LeadMagic — stop when email verifies; track yield per step.",
    "objectives": [
      "Document waterfall order with fallback rules",
      "Calculate yield % per enrichment step",
      "Set verification standard before scaling sends"
    ],
    "whatIs": "### Waterfall enrichment explained\n\nInstead of paying one vendor and accepting 40% missing emails, you **chain tools**:\n\n```\nAccount list (1000 companies)\n    → Apollo (find contacts + emails)     yield: ~55%\n    → Prospeo (gap fill)                  +15%\n    → Icypeas (verify + find)             +10%\n    → LeadMagic (hard contacts)           +8%\n    → LeadMagic verify (final)            bounce <2%\n```\n\n**Rule:** Stop at first **valid** email per contact. Dedupe by domain + name.\n\n### Data points to collect (step 4)\n\nEmployee count, location, industry, technologies, decision makers, departments, sub-industry, **intent signals** (hiring, funding, ad spend).",
    "whyUse": "Improves reply rates and protects domain reputation — unverified blasts kill outbound programs.",
    "whenToUse": "Any cold email or SDR motion above 50 contacts/week.",
    "steps": [
      {
        "title": "Test 20 rows",
        "body": "Run waterfall manually on sample; record yield per step."
      },
      {
        "title": "Cost per lead",
        "body": "Sum tool credits / verified emails."
      },
      {
        "title": "Verification policy",
        "body": "Document: never send if verification fails."
      }
    ],
    "example": "### Yield tracking sheet\n\n| Step | Tool | Emails found | Cumulative % | Cost |\n|------|------|--------------|--------------|------|\n| 1 | Apollo | 550/1000 | 55% | $49 |\n| 2 | Prospeo | +150 | 70% | $30 |\n| 3 | Icypeas | +100 | 80% | $25 |\n| Final | Verified sendable | 780 | 78% | — |\n\n**Decision:** 78% at $0.13/lead — acceptable to scale SDR cadence.",
    "realWorld": "Common stack in Clay workflows and RevGrowth B2B outbound community.",
    "commonMistakes": "Skipping verification, duplicate contacts across steps, scaling before test batch.",
    "tryIt": "### Programming task (~15 min)\n\n**Goal:** Prove you understand Waterfall Enrichment Workflow by writing code, not just reading.\n\n**Part A — Run** — Open DevTools Console (F12). Type the example from the lesson manually.\n\n**Part B — Modify** — Change one value, name, or class in the Waterfall Enrichment Workflow example. Observe what breaks or improves.\n\n**Part C — Extend** — Add one feature related to Waterfall Enrichment Workflow: extra element, log line, validation, or UI state.\n\n**Done when:** You can explain Waterfall Enrichment Workflow to a friend while pointing at your code.\n\n**Bonus:** Comment each new line with why you added it.",
    "quiz": [
      {
        "question": "Waterfall stops when…",
        "options": [
          "Valid email found or stack exhausted",
          "First guess",
          "Never",
          "Random"
        ],
        "answer": 0
      },
      {
        "question": "Bounce rate should stay…",
        "options": [
          "Under ~2% for cold",
          "At 20%",
          "Ignored",
          "100%"
        ],
        "answer": 0
      },
      {
        "question": "Intent signals include…",
        "options": [
          "Hiring, funding, running ads",
          "Logo color",
          "Office plants",
          "DNS"
        ],
        "answer": 0
      },
      {
        "question": "Dedupe by…",
        "options": [
          "Domain + person name",
          "Random",
          "Never",
          "ZIP only"
        ],
        "answer": 0
      },
      {
        "question": "Scale sends only after…",
        "options": [
          "Test batch verified",
          "Buying 100k list",
          "Friday",
          "No CRM"
        ],
        "answer": 0
      }
    ],
    "playground": "none"
  },
  {
    "slug": "ai-lead-scoring-and-tam-scoring",
    "title": "AI Lead Scoring and TAM Scoring",
    "track": "icp-list-building",
    "level": "advanced",
    "order": 8,
    "estimatedMinutes": 40,
    "summary": "Score accounts with Claygent: Meta ads active, pricing page, industries served, intent signals.",
    "objectives": [
      "Build 10-rule lead score model",
      "Define MQL threshold for SDR routing",
      "List intent signals to automate"
    ],
    "whatIs": "### Scoring after enrichment\n\n**Fit score:** Matches ICP firmographics (industry, size, tech).\n\n**Behavior score:** Intent — running Meta ads, recent hires, pricing page structure, content engagement.\n\n**Example rules:**\n\n| Signal | Points |\n|--------|--------|\n| Industry = target | +20 |\n| 10–50 employees | +15 |\n| Uses competitor X | +10 |\n| Meta ads active (Claygent check) | +25 |\n| No marketing hire yet | +10 |\n| **Threshold SQL** | **70+** |\n\nRoute 70+ to SDR within 24 hours.",
    "whyUse": "SDRs stop wasting time on bad fits; marketing proves quality to sales.",
    "whenToUse": "After waterfall list built; before sequences go live.",
    "steps": [
      {
        "title": "10 rules",
        "body": "Write scoring table with points."
      },
      {
        "title": "Threshold",
        "body": "Agree MQL/SQL scores with sales."
      },
      {
        "title": "Test 50 accounts",
        "body": "Manual score vs AI score — calibrate."
      }
    ],
    "example": "### Claygent prompt pattern\n\n\"Visit [domain]. Return: (1) Do they run Meta ads? (2) Pricing on site? (3) Industries listed? (4) Main service one line.\"\n\nAggregate into score column → sort desc → export top 200 for outreach.",
    "realWorld": "Used in modern B2B outbound stacks (Clay, Apollo workflows, HubSpot scoring).",
    "commonMistakes": "Scores without sales input, never revising model, scoring before ICP clear.",
    "tryIt": "### Programming task (~15 min)\n\n**Goal:** Prove you understand AI Lead Scoring and TAM Scoring by writing code, not just reading.\n\n**Part A — Run** — Open DevTools Console (F12). Type the example from the lesson manually.\n\n**Part B — Modify** — Change one value, name, or class in the AI Lead Scoring and TAM Scoring example. Observe what breaks or improves.\n\n**Part C — Extend** — Add one feature related to AI Lead Scoring and TAM Scoring: extra element, log line, validation, or UI state.\n\n**Done when:** You can explain AI Lead Scoring and TAM Scoring to a friend while pointing at your code.\n\n**Bonus:** Comment each new line with why you added it.",
    "quiz": [
      {
        "question": "Fit score measures…",
        "options": [
          "ICP match",
          "Random",
          "Email length",
          "Logo"
        ],
        "answer": 0
      },
      {
        "question": "Intent signal example…",
        "options": [
          "Running Meta ads",
          "Office address",
          "Font",
          "Year founded only"
        ],
        "answer": 0
      },
      {
        "question": "SQL threshold should be…",
        "options": [
          "Agreed with sales",
          "Secret",
          "Zero",
          "Random"
        ],
        "answer": 0
      },
      {
        "question": "Claygent helps…",
        "options": [
          "AI research at scale",
          "Send spam",
          "Design ads",
          "Host site"
        ],
        "answer": 0
      },
      {
        "question": "Review scoring model…",
        "options": [
          "Quarterly",
          "Never",
          "Once per decade",
          "Daily only"
        ],
        "answer": 0
      }
    ],
    "playground": "none"
  }
];
