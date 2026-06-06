import { dmLesson } from "./dm-lesson-builder.mjs";
import { applyAllDeepOverrides } from "./deep-content/merge.mjs";
import { DM_GETTING_STARTED_GENERATED } from "./deep-content/generated/dm-getting-started.mjs";
import { DM_GETTING_STARTED_DEEP } from "./dm-getting-started-deep/index.mjs";

const specs = [
  {
    "slug": "what-is-digital-marketing",
    "title": "What is Digital Marketing?",
    "level": "base",
    "order": 1,
    "minutes": 25,
    "summary": "Digital marketing promotes products online using measurable channels like search, social, email, and paid ads.",
    "definition": "**What is Digital Marketing?** is essential for modern marketers. Digital marketing promotes products online using measurable channels like search, social, email, and paid ads.\n\nIn real campaigns, teams use what is digital marketing? to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align what is digital marketing? with business goals and audience research first.",
    "why": "What is Digital Marketing? improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use what is digital marketing? when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what What is Digital Marketing? means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying What is Digital Marketing?\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "List 3 digital touchpoints of a local business and how each helps sales.",
    "quiz": [
      {
        "question": "Digital marketing happens primarily…",
        "options": [
          "On online channels",
          "Only in print",
          "Without data",
          "Offline only"
        ],
        "answer": 0
      },
      {
        "question": "Main advantage vs traditional ads…",
        "options": [
          "Measurable results",
          "No audience",
          "Fixed message",
          "No testing"
        ],
        "answer": 0
      },
      {
        "question": "First step for small business…",
        "options": [
          "Web + search presence",
          "TV only",
          "Ignore metrics",
          "No goals"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "marketing-funnel-basics",
    "title": "The Marketing Funnel",
    "level": "base",
    "order": 2,
    "minutes": 28,
    "summary": "The funnel models awareness → consideration → conversion (TOFU, MOFU, BOFU).",
    "definition": "**The Marketing Funnel** is essential for modern marketers. The funnel models awareness → consideration → conversion (TOFU, MOFU, BOFU).\n\nIn real campaigns, teams use the marketing funnel to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align the marketing funnel with business goals and audience research first.",
    "why": "The Marketing Funnel improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use the marketing funnel when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what The Marketing Funnel means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying The Marketing Funnel\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Draw a funnel for a coffee shop app with one tactic per stage.",
    "quiz": [
      {
        "question": "TOFU focuses on…",
        "options": [
          "Awareness",
          "Payroll",
          "Packaging",
          "Refunds"
        ],
        "answer": 0
      },
      {
        "question": "MOFU is when users…",
        "options": [
          "Compare options",
          "Always buy",
          "Unsubscribe",
          "Leave"
        ],
        "answer": 0
      },
      {
        "question": "BOFU often uses…",
        "options": [
          "Strong CTA / offer",
          "Random memes",
          "No pricing",
          "Hidden product"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "customer-journey",
    "title": "Customer Journey Mapping",
    "level": "base",
    "order": 3,
    "minutes": 28,
    "summary": "Journey maps show touchpoints, emotions, and drop-offs from discovery to loyalty.",
    "definition": "**Customer Journey Mapping** is essential for modern marketers. Journey maps show touchpoints, emotions, and drop-offs from discovery to loyalty.\n\nIn real campaigns, teams use customer journey mapping to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align customer journey mapping with business goals and audience research first.",
    "why": "Customer Journey Mapping improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use customer journey mapping when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Customer Journey Mapping means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Customer Journey Mapping\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Map 5 steps for buying shoes online; note one pain point per step.",
    "quiz": [
      {
        "question": "Journey maps show…",
        "options": [
          "Touchpoints over time",
          "Logo fonts",
          "Server code",
          "Tax forms"
        ],
        "answer": 0
      },
      {
        "question": "Drop-off means…",
        "options": [
          "Users leave without converting",
          "Revenue doubles",
          "Ads pause",
          "SEO ends"
        ],
        "answer": 0
      },
      {
        "question": "Fixing friction…",
        "options": [
          "Improves conversion",
          "Removes product",
          "Stops email",
          "Blocks mobile"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "digital-marketing-channels",
    "title": "Marketing Channels Overview",
    "level": "base",
    "order": 4,
    "minutes": 30,
    "summary": "Owned, earned, and paid channels — SEO, social, email, ads, partnerships.",
    "definition": "**Marketing Channels Overview** is essential for modern marketers. Owned, earned, and paid channels — SEO, social, email, ads, partnerships.\n\nIn real campaigns, teams use marketing channels overview to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align marketing channels overview with business goals and audience research first.",
    "why": "Marketing Channels Overview improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use marketing channels overview when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Marketing Channels Overview means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Marketing Channels Overview\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Assign owned, earned, paid tactics for a fitness coach.",
    "quiz": [
      {
        "question": "Email list is…",
        "options": [
          "Owned",
          "Earned only",
          "Print",
          "Radio"
        ],
        "answer": 0
      },
      {
        "question": "Earned media includes…",
        "options": [
          "Reviews and shares",
          "Private payroll",
          "CSS",
          "Invoices"
        ],
        "answer": 0
      },
      {
        "question": "Paid ads help when…",
        "options": [
          "You need fast reach",
          "Budget is zero",
          "No landing page",
          "No goal"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "marketing-goals-kpis",
    "title": "Goals & KPIs",
    "level": "base",
    "order": 5,
    "minutes": 28,
    "summary": "SMART goals and KPIs like traffic, CTR, CPA, and ROAS prove marketing progress.",
    "definition": "**Goals & KPIs** is essential for modern marketers. SMART goals and KPIs like traffic, CTR, CPA, and ROAS prove marketing progress.\n\nIn real campaigns, teams use goals & kpis to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align goals & kpis with business goals and audience research first.",
    "why": "Goals & KPIs improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use goals & kpis when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Goals & KPIs means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Goals & KPIs\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Write one SMART goal for a blog with 3 weekly KPIs.",
    "quiz": [
      {
        "question": "SMART includes…",
        "options": [
          "Measurable",
          "Secret",
          "Vague",
          "Infinite"
        ],
        "answer": 0
      },
      {
        "question": "CTR is…",
        "options": [
          "Click-through rate",
          "Cost tax",
          "Creative tool",
          "Channel ID"
        ],
        "answer": 0
      },
      {
        "question": "ROAS measures…",
        "options": [
          "Revenue per ad spend",
          "Bounces only",
          "Fonts",
          "Uptime"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "dm-tools-landscape",
    "title": "Essential Marketing Tools",
    "level": "base",
    "order": 6,
    "minutes": 30,
    "summary": "Starter stack: GA4, Search Console, Canva, social scheduler, email platform.",
    "definition": "**Essential Marketing Tools** is essential for modern marketers. Starter stack: GA4, Search Console, Canva, social scheduler, email platform.\n\nIn real campaigns, teams use essential marketing tools to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align essential marketing tools with business goals and audience research first.",
    "why": "Essential Marketing Tools improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use essential marketing tools when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
    "tools": [
      {
        "name": "GA4",
        "use": "Analytics"
      },
      {
        "name": "Canva",
        "use": "Design"
      }
    ],
    "stepTitles": [
      "Understand what Essential Marketing Tools means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Essential Marketing Tools\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Sign up for Search Console or GA4 demo; list 5 menu items you see.",
    "quiz": [
      {
        "question": "Search Console shows…",
        "options": [
          "Search performance",
          "Payroll",
          "Video edits",
          "DNS only"
        ],
        "answer": 0
      },
      {
        "question": "Canva is for…",
        "options": [
          "Design",
          "Hosting",
          "Deploy",
          "Legal"
        ],
        "answer": 0
      },
      {
        "question": "Start with…",
        "options": [
          "Analytics + one channel tool",
          "50 tools",
          "No data",
          "Print"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "audience-basics",
    "title": "Understanding Your Audience",
    "level": "base",
    "order": 7,
    "minutes": 28,
    "summary": "Demographics, psychographics, jobs-to-be-done, and pain points define who you target.",
    "definition": "**Understanding Your Audience** is essential for modern marketers. Demographics, psychographics, jobs-to-be-done, and pain points define who you target.\n\nIn real campaigns, teams use understanding your audience to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align understanding your audience with business goals and audience research first.",
    "why": "Understanding Your Audience improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use understanding your audience when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Understanding Your Audience means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Understanding Your Audience\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Create audience profile for meal-prep service: 3 pains, 3 motivations.",
    "quiz": [
      {
        "question": "Psychographics are…",
        "options": [
          "Values/motivations",
          "Server IPs",
          "HTML",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Jobs-to-be-done is…",
        "options": [
          "Outcome users want",
          "HR listing",
          "CSS job",
          "Log file"
        ],
        "answer": 0
      },
      {
        "question": "Targeting everyone…",
        "options": [
          "Dilutes message",
          "Always best",
          "Fixes SEO",
          "Removes product"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "dm-ethics-legal-basics",
    "title": "Ethics & Privacy Basics",
    "level": "base",
    "order": 8,
    "minutes": 25,
    "summary": "GDPR, CAN-SPAM, truthful ads, consent, and cookie notices.",
    "definition": "**Ethics & Privacy Basics** is essential for modern marketers. GDPR, CAN-SPAM, truthful ads, consent, and cookie notices.\n\nIn real campaigns, teams use ethics & privacy basics to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align ethics & privacy basics with business goals and audience research first.",
    "why": "Ethics & Privacy Basics improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use ethics & privacy basics when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Ethics & Privacy Basics means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Ethics & Privacy Basics\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Audit a site for privacy policy, cookies, email unsubscribe.",
    "quiz": [
      {
        "question": "CAN-SPAM needs…",
        "options": [
          "Unsubscribe",
          "Hidden sender",
          "No opt-out",
          "Paper mail"
        ],
        "answer": 0
      },
      {
        "question": "GDPR focuses on…",
        "options": [
          "Consent",
          "Unlimited tracking",
          "No records",
          "Secret data"
        ],
        "answer": 0
      },
      {
        "question": "Deceptive ads…",
        "options": [
          "Harm trust and risk fines",
          "Improve SEO",
          "Free ads",
          "More email"
        ],
        "answer": 0
      }
    ]
  }
];

export const _dm_getting_startedLessons = specs.map((spec) => dmLesson("dm-getting-started", spec));

export const dm_getting_startedLessons = applyAllDeepOverrides(_dm_getting_startedLessons, DM_GETTING_STARTED_GENERATED, DM_GETTING_STARTED_DEEP);
