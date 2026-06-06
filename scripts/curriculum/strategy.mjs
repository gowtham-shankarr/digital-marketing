import { dmLesson } from "./dm-lesson-builder.mjs";
import { applyAllDeepOverrides } from "./deep-content/merge.mjs";
import { STRATEGY_GENERATED } from "./deep-content/generated/strategy.mjs";
import { STRATEGY_DEEP } from "./strategy-deep/index.mjs";

const specs = [
  {
    "slug": "marketing-plan",
    "title": "Marketing Plan Overview",
    "level": "base",
    "order": 1,
    "minutes": 30,
    "summary": "Situation analysis, goals, strategy, tactics, budget, metrics.",
    "definition": "**Marketing Plan Overview** is essential for modern marketers. Situation analysis, goals, strategy, tactics, budget, metrics.\n\nIn real campaigns, teams use marketing plan overview to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align marketing plan overview with business goals and audience research first.",
    "why": "Marketing Plan Overview improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use marketing plan overview when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
    "tools": [
      {
        "name": "Spreadsheet",
        "use": "Plan and track work"
      },
      {
        "name": "GA4",
        "use": "Measure web results"
      }
    ],
    "stepTitles": [
      "Understand what Marketing Plan Overview means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Marketing Plan Overview\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "One-page plan outline for product launch.",
    "quiz": [
      {
        "question": "Plan includes…",
        "options": [
          "Goals and tactics",
          "Only logos",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Situation analysis…",
        "options": [
          "SWOT/market",
          "Random",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Review plan…",
        "options": [
          "Quarterly",
          "Never",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "campaign-brief",
    "title": "Campaign Brief",
    "level": "base",
    "order": 2,
    "minutes": 28,
    "summary": "Background, objective, audience, offer, channels, KPIs, timeline.",
    "definition": "**Campaign Brief** is essential for modern marketers. Background, objective, audience, offer, channels, KPIs, timeline.\n\nIn real campaigns, teams use campaign brief to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align campaign brief with business goals and audience research first.",
    "why": "Campaign Brief improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use campaign brief when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
    "tools": [
      {
        "name": "Spreadsheet",
        "use": "Plan and track work"
      },
      {
        "name": "GA4",
        "use": "Measure web results"
      }
    ],
    "stepTitles": [
      "Understand what Campaign Brief means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Campaign Brief\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Fill campaign brief for back-to-school sale.",
    "quiz": [
      {
        "question": "Brief aligns…",
        "options": [
          "Team on goals",
          "Nobody",
          "DNS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "KPIs in brief…",
        "options": [
          "Measurable",
          "Vague",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Timeline shows…",
        "options": [
          "Milestones",
          "Secrets",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "budget-allocation",
    "title": "Budget Allocation",
    "level": "base",
    "order": 3,
    "minutes": 28,
    "summary": "Split across channels by funnel stage, test budget, contingency.",
    "definition": "**Budget Allocation** is essential for modern marketers. Split across channels by funnel stage, test budget, contingency.\n\nIn real campaigns, teams use budget allocation to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align budget allocation with business goals and audience research first.",
    "why": "Budget Allocation improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use budget allocation when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
    "tools": [
      {
        "name": "Spreadsheet",
        "use": "Plan and track work"
      },
      {
        "name": "GA4",
        "use": "Measure web results"
      }
    ],
    "stepTitles": [
      "Understand what Budget Allocation means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Budget Allocation\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Allocate $5k monthly across 4 channels %.",
    "quiz": [
      {
        "question": "Test budget…",
        "options": [
          "Experiments",
          "Waste",
          "DNS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Contingency for…",
        "options": [
          "Unknowns",
          "Nothing",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Reallocate based on…",
        "options": [
          "Performance data",
          "Gut only",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "integrated-campaigns",
    "title": "Integrated Campaigns",
    "level": "intermediate",
    "order": 4,
    "minutes": 30,
    "summary": "Same message across email, social, ads, PR — consistent timeline.",
    "definition": "**Integrated Campaigns** is essential for modern marketers. Same message across email, social, ads, PR — consistent timeline.\n\nIn real campaigns, teams use integrated campaigns to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align integrated campaigns with business goals and audience research first.",
    "why": "Integrated Campaigns improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use integrated campaigns when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
    "tools": [
      {
        "name": "Spreadsheet",
        "use": "Plan and track work"
      },
      {
        "name": "GA4",
        "use": "Measure web results"
      }
    ],
    "stepTitles": [
      "Understand what Integrated Campaigns means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Integrated Campaigns\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Map 2-week launch across 4 channels.",
    "quiz": [
      {
        "question": "Integrated means…",
        "options": [
          "Coordinated channels",
          "Random posts",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Same core message…",
        "options": [
          "Different formats",
          "Identical spam",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Timeline sync…",
        "options": [
          "Amplifies impact",
          "Confuses",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "launch-checklist",
    "title": "Launch Checklist",
    "level": "intermediate",
    "order": 5,
    "minutes": 28,
    "summary": "Tracking live, pixels, UTMs, emails scheduled, support ready.",
    "definition": "**Launch Checklist** is essential for modern marketers. Tracking live, pixels, UTMs, emails scheduled, support ready.\n\nIn real campaigns, teams use launch checklist to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align launch checklist with business goals and audience research first.",
    "why": "Launch Checklist improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use launch checklist when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
    "tools": [
      {
        "name": "Spreadsheet",
        "use": "Plan and track work"
      },
      {
        "name": "GA4",
        "use": "Measure web results"
      }
    ],
    "stepTitles": [
      "Understand what Launch Checklist means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Launch Checklist\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "20-item checklist for webinar launch.",
    "quiz": [
      {
        "question": "Before launch verify…",
        "options": [
          "Tracking works",
          "Nothing",
          "DNS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Support team…",
        "options": [
          "Knows offer/FAQ",
          "Uninformed",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Rollback plan…",
        "options": [
          "If issues",
          "Never",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "agency-vs-inhouse",
    "title": "Agency vs In-House",
    "level": "intermediate",
    "order": 6,
    "minutes": 28,
    "summary": "When to hire agency, scopes, SLAs, briefing, measuring partners.",
    "definition": "**Agency vs In-House** is essential for modern marketers. When to hire agency, scopes, SLAs, briefing, measuring partners.\n\nIn real campaigns, teams use agency vs in-house to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align agency vs in-house with business goals and audience research first.",
    "why": "Agency vs In-House improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use agency vs in-house when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
    "tools": [
      {
        "name": "Spreadsheet",
        "use": "Plan and track work"
      },
      {
        "name": "GA4",
        "use": "Measure web results"
      }
    ],
    "stepTitles": [
      "Understand what Agency vs In-House means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Agency vs In-House\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "RACI matrix for agency + internal team.",
    "quiz": [
      {
        "question": "Agency helps…",
        "options": [
          "Specialized scale",
          "Replace strategy",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Brief clearly…",
        "options": [
          "Reduces rework",
          "Vague",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Measure agency by…",
        "options": [
          "KPIs in contract",
          "Vibes",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "seasonal-campaigns",
    "title": "Seasonal Campaigns",
    "level": "intermediate",
    "order": 7,
    "minutes": 28,
    "summary": "Holiday calendars, prep lead time, inventory, ad auction spikes.",
    "definition": "**Seasonal Campaigns** is essential for modern marketers. Holiday calendars, prep lead time, inventory, ad auction spikes.\n\nIn real campaigns, teams use seasonal campaigns to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align seasonal campaigns with business goals and audience research first.",
    "why": "Seasonal Campaigns improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use seasonal campaigns when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
    "tools": [
      {
        "name": "Spreadsheet",
        "use": "Plan and track work"
      },
      {
        "name": "GA4",
        "use": "Measure web results"
      }
    ],
    "stepTitles": [
      "Understand what Seasonal Campaigns means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Seasonal Campaigns\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Plan Q4 calendar for retail brand.",
    "quiz": [
      {
        "question": "Start seasonal prep…",
        "options": [
          "Weeks/months early",
          "Day before",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Auctions spike…",
        "options": [
          "Holidays",
          "Never",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Align with…",
        "options": [
          "Inventory/ops",
          "Random",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "b2b-marketing",
    "title": "B2B Marketing Basics",
    "level": "intermediate",
    "order": 8,
    "minutes": 30,
    "summary": "Longer cycles, LinkedIn, webinars, lead scoring, sales alignment.",
    "definition": "**B2B Marketing Basics** is essential for modern marketers. Longer cycles, LinkedIn, webinars, lead scoring, sales alignment.\n\nIn real campaigns, teams use b2b marketing basics to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align b2b marketing basics with business goals and audience research first.",
    "why": "B2B Marketing Basics improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use b2b marketing basics when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
    "tools": [
      {
        "name": "Spreadsheet",
        "use": "Plan and track work"
      },
      {
        "name": "GA4",
        "use": "Measure web results"
      }
    ],
    "stepTitles": [
      "Understand what B2B Marketing Basics means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying B2B Marketing Basics\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Define MQL for B2B software product.",
    "quiz": [
      {
        "question": "B2B cycles are…",
        "options": [
          "Often longer",
          "Always instant",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "MQL is…",
        "options": [
          "Marketing qualified lead",
          "Random click",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Align with sales on…",
        "options": [
          "Lead definition",
          "Nothing",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "b2c-marketing",
    "title": "B2C Marketing Basics",
    "level": "intermediate",
    "order": 9,
    "minutes": 28,
    "summary": "Shorter cycles, emotional triggers, impulse, retention programs.",
    "definition": "**B2C Marketing Basics** is essential for modern marketers. Shorter cycles, emotional triggers, impulse, retention programs.\n\nIn real campaigns, teams use b2c marketing basics to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align b2c marketing basics with business goals and audience research first.",
    "why": "B2C Marketing Basics improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use b2c marketing basics when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
    "tools": [
      {
        "name": "Spreadsheet",
        "use": "Plan and track work"
      },
      {
        "name": "GA4",
        "use": "Measure web results"
      }
    ],
    "stepTitles": [
      "Understand what B2C Marketing Basics means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying B2C Marketing Basics\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Retention email idea for skincare D2C.",
    "quiz": [
      {
        "question": "B2C often…",
        "options": [
          "Shorter decision",
          "Year-long RFP",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Emotion…",
        "options": [
          "Drives purchase",
          "Never",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Retention cheaper than…",
        "options": [
          "Acquisition",
          "Nothing",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "post-campaign-review",
    "title": "Post-Campaign Review",
    "level": "advanced",
    "order": 10,
    "minutes": 32,
    "summary": "ROI recap, what worked, failures, learnings, next tests.",
    "definition": "**Post-Campaign Review** is essential for modern marketers. ROI recap, what worked, failures, learnings, next tests.\n\nIn real campaigns, teams use post-campaign review to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align post-campaign review with business goals and audience research first.",
    "why": "Post-Campaign Review improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use post-campaign review when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
    "tools": [
      {
        "name": "Spreadsheet",
        "use": "Plan and track work"
      },
      {
        "name": "GA4",
        "use": "Measure web results"
      }
    ],
    "stepTitles": [
      "Understand what Post-Campaign Review means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Post-Campaign Review\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Post-campaign report template with 5 sections.",
    "quiz": [
      {
        "question": "Review includes…",
        "options": [
          "Learnings",
          "Blame only",
          "DNS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Compare to…",
        "options": [
          "Original KPIs",
          "Random",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Document for…",
        "options": [
          "Future campaigns",
          "Delete",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  }
];

export const _strategyLessons = specs.map((spec) => dmLesson("strategy", spec));

export const strategyLessons = applyAllDeepOverrides(_strategyLessons, STRATEGY_GENERATED, STRATEGY_DEEP);
