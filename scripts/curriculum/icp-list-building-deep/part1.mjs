import { richDM, qq } from "../dm-deep-builder.mjs";

export const ICP_LIST_BUILDING_PART1 = {
  "icp-list-building-protocol-overview": richDM(
    40,
    "RevGrowth 7-step protocol: TAM → ICP research → client feedback → scrape → multi-provider → waterfall enrich → AI score.",
    [
      "Draw full 7-step workflow with tools at each step",
      "Explain why waterfall beats single data vendor",
      "Define ICP vs TAM vs persona for B2B",
    ],
    {
      whatIs: `### The 7-step ICP list building protocol

| Step | Name | What you do | Example tools |
|------|------|-------------|---------------|
| 1 | **TAM assessment** | Size market | GPT research, DiscoLike, Apollo |
| 2 | **ICP research (AI)** | Segments + personas | GPT-4, Claude, Claygent |
| 3 | **Client feedback** | Validate with buyers | Interviews, CRM notes |
| 4 | **Scrape TAM data** | Firmographics, tech, people | Crunchbase, BuiltWith, Apify |
| 5 | **Multi-provider** | No single source has 100% | Apollo + PandaMatch + PitchBook |
| 6 | **Waterfall enrichment** | Email until verified | Apollo → Prospeo → Icypeas → LeadMagic |
| 7 | **Score TAM** | AI fit scoring | Clay Claygent, intent signals |

### Why this matters

Bad lists → spam complaints → burned domains → fired SDRs. **ICP discipline + verified data** is the foundation of B2B outbound that actually books meetings.`,
      whyUse: "Sales and marketing alignment starts with the same ICP and the same list quality standards.",
      whenToUse: "Launching outbound, hiring SDRs, buying data tools, ABM campaigns.",
      steps: [
        { title: "Flowchart", body: "Draw 7 boxes with your chosen tools (even free tiers)." },
        { title: "ICP one-pager", body: "Industry, size, title, tech, disqualifiers." },
        { title: "Cost model", body: "Estimate cost per verified lead through waterfall." },
      ],
      example: `### Sample ICP (B2B SaaS)

**ICP:** US marketing agencies, 10–50 employees, running Meta ads, no marketing automation yet.

**TAM (Apollo filter):** ~8,400 companies

**SOM year 1:** 200 customers → need ~2,000 qualified contacts in CRM`,
      realWorld: "RevGrowth.ai protocol used by B2B agencies. Similar flows in **Clay.com** university content.",
      commonMistakes: "1. **Buying 50k emails day 1**\n2. **No verification**\n3. **ICP from imagination**\n4. **One tool only**\n5. **No scoring — SDRs call random accounts**",
      tryIt: "Define ICP for a product you know. Run free Apollo count. **Deliverable:** ICP doc + TAM number.",
      quiz: [
        qq("Waterfall enrichment means…", "Sequential tools until email verified", "One bulk buy", "Guess emails", "LinkedIn only"),
        qq("TAM is…", "Total addressable market size", "One lead", "Email template", "Ad budget"),
        qq("Step 3 client feedback…", "Validates ICP with real buyers", "Optional forever", "Only for B2C", "Illegal"),
        qq("Claygent used for…", "AI web research/scrape in workflows", "Email sending only", "Graphic design", "Hosting"),
        qq("Multi-provider because…", "No vendor has 100% coverage", "Duplicates are good", "One is always enough", "GDPR"),
      ],
    }
  ),

  "waterfall-enrichment-workflow": richDM(
    42,
    "Apollo → Prospeo → Icypeas → LeadMagic — stop when email verifies; track yield per step.",
    [
      "Document waterfall order with fallback rules",
      "Calculate yield % per enrichment step",
      "Set verification standard before scaling sends",
    ],
    {
      whatIs: `### Waterfall enrichment explained

Instead of paying one vendor and accepting 40% missing emails, you **chain tools**:

\`\`\`
Account list (1000 companies)
    → Apollo (find contacts + emails)     yield: ~55%
    → Prospeo (gap fill)                  +15%
    → Icypeas (verify + find)             +10%
    → LeadMagic (hard contacts)           +8%
    → LeadMagic verify (final)            bounce <2%
\`\`\`

**Rule:** Stop at first **valid** email per contact. Dedupe by domain + name.

### Data points to collect (step 4)

Employee count, location, industry, technologies, decision makers, departments, sub-industry, **intent signals** (hiring, funding, ad spend).`,
      whyUse: "Improves reply rates and protects domain reputation — unverified blasts kill outbound programs.",
      whenToUse: "Any cold email or SDR motion above 50 contacts/week.",
      steps: [
        { title: "Test 20 rows", body: "Run waterfall manually on sample; record yield per step." },
        { title: "Cost per lead", body: "Sum tool credits / verified emails." },
        { title: "Verification policy", body: "Document: never send if verification fails." },
      ],
      example: `### Yield tracking sheet

| Step | Tool | Emails found | Cumulative % | Cost |
|------|------|--------------|--------------|------|
| 1 | Apollo | 550/1000 | 55% | $49 |
| 2 | Prospeo | +150 | 70% | $30 |
| 3 | Icypeas | +100 | 80% | $25 |
| Final | Verified sendable | 780 | 78% | — |

**Decision:** 78% at $0.13/lead — acceptable to scale SDR cadence.`,
      realWorld: "Common stack in Clay workflows and RevGrowth B2B outbound community.",
      commonMistakes: "Skipping verification, duplicate contacts across steps, scaling before test batch.",
      tryIt: "Design waterfall with tools available to you (even manual LinkedIn + Hunter). Test 10 accounts.",
      quiz: [
        qq("Waterfall stops when…", "Valid email found or stack exhausted", "First guess", "Never", "Random"),
        qq("Bounce rate should stay…", "Under ~2% for cold", "At 20%", "Ignored", "100%"),
        qq("Intent signals include…", "Hiring, funding, running ads", "Logo color", "Office plants", "DNS"),
        qq("Dedupe by…", "Domain + person name", "Random", "Never", "ZIP only"),
        qq("Scale sends only after…", "Test batch verified", "Buying 100k list", "Friday", "No CRM"),
      ],
    }
  ),

  "ai-lead-scoring-and-tam-scoring": richDM(
    40,
    "Score accounts with Claygent: Meta ads active, pricing page, industries served, intent signals.",
    [
      "Build 10-rule lead score model",
      "Define MQL threshold for SDR routing",
      "List intent signals to automate",
    ],
    {
      whatIs: `### Scoring after enrichment

**Fit score:** Matches ICP firmographics (industry, size, tech).

**Behavior score:** Intent — running Meta ads, recent hires, pricing page structure, content engagement.

**Example rules:**

| Signal | Points |
|--------|--------|
| Industry = target | +20 |
| 10–50 employees | +15 |
| Uses competitor X | +10 |
| Meta ads active (Claygent check) | +25 |
| No marketing hire yet | +10 |
| **Threshold SQL** | **70+** |

Route 70+ to SDR within 24 hours.`,
      whyUse: "SDRs stop wasting time on bad fits; marketing proves quality to sales.",
      whenToUse: "After waterfall list built; before sequences go live.",
      steps: [
        { title: "10 rules", body: "Write scoring table with points." },
        { title: "Threshold", body: "Agree MQL/SQL scores with sales." },
        { title: "Test 50 accounts", body: "Manual score vs AI score — calibrate." },
      ],
      example: `### Claygent prompt pattern

"Visit [domain]. Return: (1) Do they run Meta ads? (2) Pricing on site? (3) Industries listed? (4) Main service one line."

Aggregate into score column → sort desc → export top 200 for outreach.`,
      realWorld: "Used in modern B2B outbound stacks (Clay, Apollo workflows, HubSpot scoring).",
      commonMistakes: "Scores without sales input, never revising model, scoring before ICP clear.",
      tryIt: "Score 20 companies manually using 10 rules. **Deliverable:** spreadsheet with scores.",
      quiz: [
        qq("Fit score measures…", "ICP match", "Random", "Email length", "Logo"),
        qq("Intent signal example…", "Running Meta ads", "Office address", "Font", "Year founded only"),
        qq("SQL threshold should be…", "Agreed with sales", "Secret", "Zero", "Random"),
        qq("Claygent helps…", "AI research at scale", "Send spam", "Design ads", "Host site"),
        qq("Review scoring model…", "Quarterly", "Never", "Once per decade", "Daily only"),
      ],
    }
  ),
};
