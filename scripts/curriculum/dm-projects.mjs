import { dmLesson } from "./dm-lesson-builder.mjs";
import { applyAllDeepOverrides } from "./deep-content/merge.mjs";
import { DM_PROJECTS_GENERATED } from "./deep-content/generated/dm-projects.mjs";
import { DM_PROJECTS_DEEP } from "./dm-projects-deep/index.mjs";

const specs = [
  {
    "slug": "portfolio-intro",
    "title": "Marketing Portfolio Intro",
    "level": "base",
    "order": 1,
    "minutes": 28,
    "summary": "Case studies with situation, action, result — proof for employers/clients.",
    "definition": "**Marketing Portfolio Intro** is essential for modern marketers. Case studies with situation, action, result — proof for employers/clients.\n\nIn real campaigns, teams use marketing portfolio intro to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align marketing portfolio intro with business goals and audience research first.",
    "why": "Marketing Portfolio Intro improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use marketing portfolio intro when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Marketing Portfolio Intro means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Marketing Portfolio Intro\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Outline one case study STAR format.",
    "quiz": [
      {
        "question": "Portfolio proves…",
        "options": [
          "You can execute",
          "Only certificates",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "STAR is…",
        "options": [
          "Situation task action result",
          "Random",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Include metrics…",
        "options": [
          "When possible",
          "Never",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "project-seo-audit",
    "title": "Project: SEO Audit",
    "level": "base",
    "order": 2,
    "minutes": 35,
    "summary": "Deliverable: technical + on-page audit with prioritized fixes.",
    "definition": "**Project: SEO Audit** is essential for modern marketers. Deliverable: technical + on-page audit with prioritized fixes.\n\nIn real campaigns, teams use project: seo audit to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align project: seo audit with business goals and audience research first.",
    "why": "Project: SEO Audit improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use project: seo audit when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Project: SEO Audit means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Project: SEO Audit\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Complete mini SEO audit for small business site.",
    "quiz": [
      {
        "question": "Audit deliverable lists…",
        "options": [
          "Prioritized fixes",
          "Only colors",
          "DNS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Include screenshots…",
        "options": [
          "Evidence",
          "Never",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Present to…",
        "options": [
          "Client/stakeholder",
          "Nobody",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "project-content-calendar",
    "title": "Project: Content Calendar",
    "level": "base",
    "order": 3,
    "minutes": 32,
    "summary": "30-day calendar with pillars, channels, KPIs.",
    "definition": "**Project: Content Calendar** is essential for modern marketers. 30-day calendar with pillars, channels, KPIs.\n\nIn real campaigns, teams use project: content calendar to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align project: content calendar with business goals and audience research first.",
    "why": "Project: Content Calendar improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use project: content calendar when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Project: Content Calendar means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Project: Content Calendar\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Build 30-day calendar for niche you choose.",
    "quiz": [
      {
        "question": "Calendar shows…",
        "options": [
          "Dates and topics",
          "Random",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Align to…",
        "options": [
          "Strategy pillars",
          "Nothing",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Metric per post…",
        "options": [
          "Optional goal",
          "Never",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "project-social-campaign",
    "title": "Project: Social Campaign",
    "level": "intermediate",
    "order": 4,
    "minutes": 35,
    "summary": "2-week campaign: creatives, copy, schedule, results spreadsheet.",
    "definition": "**Project: Social Campaign** is essential for modern marketers. 2-week campaign: creatives, copy, schedule, results spreadsheet.\n\nIn real campaigns, teams use project: social campaign to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align project: social campaign with business goals and audience research first.",
    "why": "Project: Social Campaign improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use project: social campaign when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Project: Social Campaign means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Project: Social Campaign\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Run small organic campaign; track metrics.",
    "quiz": [
      {
        "question": "Campaign doc includes…",
        "options": [
          "Creatives + KPIs",
          "Memes only",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Track weekly…",
        "options": [
          "Engagement",
          "Ignore",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Retrospective…",
        "options": [
          "Learnings",
          "Skip",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "project-email-sequence",
    "title": "Project: Email Sequence",
    "level": "intermediate",
    "order": 5,
    "minutes": 32,
    "summary": "Welcome or nurture 5-email sequence with goals per email.",
    "definition": "**Project: Email Sequence** is essential for modern marketers. Welcome or nurture 5-email sequence with goals per email.\n\nIn real campaigns, teams use project: email sequence to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align project: email sequence with business goals and audience research first.",
    "why": "Project: Email Sequence improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use project: email sequence when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Project: Email Sequence means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Project: Email Sequence\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Write 5-email welcome sequence outlines.",
    "quiz": [
      {
        "question": "Each email has…",
        "options": [
          "Single goal",
          "Ten goals",
          "DNS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Sequence maps to…",
        "options": [
          "Funnel",
          "Random",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Measure…",
        "options": [
          "Opens and clicks",
          "Fonts",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "project-google-ads",
    "title": "Project: Search Campaign",
    "level": "intermediate",
    "order": 6,
    "minutes": 35,
    "summary": "Keyword list, ad copy, landing page critique, budget plan.",
    "definition": "**Project: Search Campaign** is essential for modern marketers. Keyword list, ad copy, landing page critique, budget plan.\n\nIn real campaigns, teams use project: search campaign to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align project: search campaign with business goals and audience research first.",
    "why": "Project: Search Campaign improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use project: search campaign when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Project: Search Campaign means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Project: Search Campaign\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Plan Google Search campaign (no spend required).",
    "quiz": [
      {
        "question": "Deliverable includes…",
        "options": [
          "Keywords + ads",
          "Only logo",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Landing page…",
        "options": [
          "Message match",
          "Random",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Budget justified by…",
        "options": [
          "Goal math",
          "Guess",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "project-meta-ads",
    "title": "Project: Meta Campaign",
    "level": "intermediate",
    "order": 7,
    "minutes": 35,
    "summary": "Objective, audiences, 3 creatives, measurement plan.",
    "definition": "**Project: Meta Campaign** is essential for modern marketers. Objective, audiences, 3 creatives, measurement plan.\n\nIn real campaigns, teams use project: meta campaign to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align project: meta campaign with business goals and audience research first.",
    "why": "Project: Meta Campaign improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use project: meta campaign when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Project: Meta Campaign means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Project: Meta Campaign\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Design Meta campaign structure on paper.",
    "quiz": [
      {
        "question": "Three ad variants…",
        "options": [
          "Test creative",
          "One only",
          "DNS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Audience doc…",
        "options": [
          "Targeting rationale",
          "Random",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Pixel events…",
        "options": [
          "Listed",
          "Ignored",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "project-analytics-dashboard",
    "title": "Project: Analytics Dashboard",
    "level": "intermediate",
    "order": 8,
    "minutes": 32,
    "summary": "Looker Studio or Sheets dashboard wired to sample data.",
    "definition": "**Project: Analytics Dashboard** is essential for modern marketers. Looker Studio or Sheets dashboard wired to sample data.\n\nIn real campaigns, teams use project: analytics dashboard to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align project: analytics dashboard with business goals and audience research first.",
    "why": "Project: Analytics Dashboard improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use project: analytics dashboard when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Project: Analytics Dashboard means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Project: Analytics Dashboard\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Build dashboard with 5 KPIs.",
    "quiz": [
      {
        "question": "Dashboard uses…",
        "options": [
          "Real or sample data",
          "Fake forever",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Filters by…",
        "options": [
          "Date/channel",
          "Nothing",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Share link…",
        "options": [
          "Portfolio",
          "Hidden",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "project-full-campaign",
    "title": "Project: Full Campaign Plan",
    "level": "advanced",
    "order": 9,
    "minutes": 40,
    "summary": "Integrated plan: research, strategy, channel mix, budget, timeline.",
    "definition": "**Project: Full Campaign Plan** is essential for modern marketers. Integrated plan: research, strategy, channel mix, budget, timeline.\n\nIn real campaigns, teams use project: full campaign plan to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align project: full campaign plan with business goals and audience research first.",
    "why": "Project: Full Campaign Plan improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use project: full campaign plan when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Project: Full Campaign Plan means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Project: Full Campaign Plan\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Write full campaign plan for fictional startup.",
    "quiz": [
      {
        "question": "Full plan merges…",
        "options": [
          "All channel skills",
          "One tweet",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Budget table…",
        "options": [
          "Included",
          "Skipped",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Timeline…",
        "options": [
          "Gantt or calendar",
          "None",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "project-case-study",
    "title": "Project: Case Study Portfolio",
    "level": "advanced",
    "order": 10,
    "minutes": 38,
    "summary": "Publish 2 case studies with metrics and screenshots.",
    "definition": "**Project: Case Study Portfolio** is essential for modern marketers. Publish 2 case studies with metrics and screenshots.\n\nIn real campaigns, teams use project: case study portfolio to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align project: case study portfolio with business goals and audience research first.",
    "why": "Project: Case Study Portfolio improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use project: case study portfolio when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Project: Case Study Portfolio means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Project: Case Study Portfolio\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Publish case study PDF or Notion page.",
    "quiz": [
      {
        "question": "Case study shows…",
        "options": [
          "Before/after metrics",
          "Only theory",
          "DNS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Honest about…",
        "options": [
          "Constraints",
          "Fake numbers",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Share on…",
        "options": [
          "LinkedIn/portfolio",
          "Nowhere",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  }
];

export const _dm_projectsLessons = specs.map((spec) => dmLesson("dm-projects", spec));

export const dm_projectsLessons = applyAllDeepOverrides(_dm_projectsLessons, DM_PROJECTS_GENERATED, DM_PROJECTS_DEEP);
