import { dmLesson } from "./dm-lesson-builder.mjs";
import { applyAllDeepOverrides } from "./deep-content/merge.mjs";
import { CONVERSION_GENERATED } from "./deep-content/generated/conversion.mjs";
import { CONVERSION_DEEP } from "./conversion-deep/index.mjs";

const specs = [
  {
    "slug": "cro-intro",
    "title": "Conversion Rate Optimization",
    "level": "base",
    "order": 1,
    "minutes": 28,
    "summary": "Improve percentage of visitors who complete goal — test and iterate.",
    "definition": "**Conversion Rate Optimization** is essential for modern marketers. Improve percentage of visitors who complete goal — test and iterate.\n\nIn real campaigns, teams use conversion rate optimization to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align conversion rate optimization with business goals and audience research first.",
    "why": "Conversion Rate Optimization improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use conversion rate optimization when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Conversion Rate Optimization means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Conversion Rate Optimization\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Calculate conversion rate: 50 sales / 2000 visits.",
    "quiz": [
      {
        "question": "CRO improves…",
        "options": [
          "Conversion rate",
          "Server RAM",
          "DNS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Conversion rate…",
        "options": [
          "Conversions / visits",
          "Clicks only",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "CRO needs…",
        "options": [
          "Data and hypotheses",
          "Random changes",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "landing-page-anatomy",
    "title": "Landing Page Anatomy",
    "level": "base",
    "order": 2,
    "minutes": 30,
    "summary": "Hero, benefits, proof, FAQ, CTA — above the fold clarity.",
    "definition": "**Landing Page Anatomy** is essential for modern marketers. Hero, benefits, proof, FAQ, CTA — above the fold clarity.\n\nIn real campaigns, teams use landing page anatomy to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align landing page anatomy with business goals and audience research first.",
    "why": "Landing Page Anatomy improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use landing page anatomy when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Landing Page Anatomy means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Landing Page Anatomy\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Wireframe landing page sections on paper.",
    "quiz": [
      {
        "question": "Hero should…",
        "options": [
          "Explain offer fast",
          "Hide product",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Social proof…",
        "options": [
          "Builds trust",
          "Spam",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "One primary CTA…",
        "options": [
          "Focuses action",
          "Ten buttons",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "persuasion-principles",
    "title": "Persuasion Principles",
    "level": "base",
    "order": 3,
    "minutes": 28,
    "summary": "Cialdini basics: social proof, scarcity, authority, reciprocity ethically.",
    "definition": "**Persuasion Principles** is essential for modern marketers. Cialdini basics: social proof, scarcity, authority, reciprocity ethically.\n\nIn real campaigns, teams use persuasion principles to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align persuasion principles with business goals and audience research first.",
    "why": "Persuasion Principles improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use persuasion principles when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Persuasion Principles means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Persuasion Principles\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Find 2 principles on a landing page you visit.",
    "quiz": [
      {
        "question": "Social proof is…",
        "options": [
          "Others trust this",
          "Hidden",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Scarcity must be…",
        "options": [
          "Honest",
          "Fake always",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Authority uses…",
        "options": [
          "Expertise signals",
          "Spam",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "form-optimization",
    "title": "Form Optimization",
    "level": "base",
    "order": 4,
    "minutes": 28,
    "summary": "Fewer fields, inline validation, clear labels, mobile keyboards.",
    "definition": "**Form Optimization** is essential for modern marketers. Fewer fields, inline validation, clear labels, mobile keyboards.\n\nIn real campaigns, teams use form optimization to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align form optimization with business goals and audience research first.",
    "why": "Form Optimization improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use form optimization when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Form Optimization means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Form Optimization\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Reduce form from 8 to 4 fields — justify.",
    "quiz": [
      {
        "question": "Fewer fields…",
        "options": [
          "Higher completion",
          "Always worse",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Inline validation…",
        "options": [
          "Reduces errors",
          "Spam",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Label clarity…",
        "options": [
          "Improves UX",
          "Hide labels",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "heatmap-session-recording",
    "title": "Heatmaps & Recordings",
    "level": "intermediate",
    "order": 5,
    "minutes": 28,
    "summary": "Hotjar/Clarity — scroll maps, rage clicks, form abandonment.",
    "definition": "**Heatmaps & Recordings** is essential for modern marketers. Hotjar/Clarity — scroll maps, rage clicks, form abandonment.\n\nIn real campaigns, teams use heatmaps & recordings to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align heatmaps & recordings with business goals and audience research first.",
    "why": "Heatmaps & Recordings improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use heatmaps & recordings when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Heatmaps & Recordings means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Heatmaps & Recordings\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Watch 3 session recordings; note one UX issue.",
    "quiz": [
      {
        "question": "Heatmaps show…",
        "options": [
          "Click/scroll patterns",
          "Payroll",
          "DNS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Rage clicks suggest…",
        "options": [
          "Frustration",
          "Success",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Use insights to…",
        "options": [
          "Prioritize fixes",
          "Ignore",
          "Spam",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "ab-testing-landing",
    "title": "Landing Page A/B Tests",
    "level": "intermediate",
    "order": 6,
    "minutes": 30,
    "summary": "Hypothesis, variant, sample size, run full business cycle.",
    "definition": "**Landing Page A/B Tests** is essential for modern marketers. Hypothesis, variant, sample size, run full business cycle.\n\nIn real campaigns, teams use landing page a/b tests to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align landing page a/b tests with business goals and audience research first.",
    "why": "Landing Page A/B Tests improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use landing page a/b tests when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Landing Page A/B Tests means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Landing Page A/B Tests\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Hypothesis: shorter form increases signups — design test.",
    "quiz": [
      {
        "question": "Hypothesis states…",
        "options": [
          "Expected change",
          "Random",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "One change…",
        "options": [
          "Isolates cause",
          "Ten at once",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Winner implementation…",
        "options": [
          "Ship to 100%",
          "Forget",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "mobile-cro",
    "title": "Mobile CRO",
    "level": "intermediate",
    "order": 7,
    "minutes": 28,
    "summary": "Thumb zones, tap targets, speed, sticky CTAs.",
    "definition": "**Mobile CRO** is essential for modern marketers. Thumb zones, tap targets, speed, sticky CTAs.\n\nIn real campaigns, teams use mobile cro to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align mobile cro with business goals and audience research first.",
    "why": "Mobile CRO improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use mobile cro when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Mobile CRO means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Mobile CRO\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Audit mobile site: tap target size + sticky CTA.",
    "quiz": [
      {
        "question": "Mobile traffic often…",
        "options": [
          "Majority",
          "Zero",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Sticky CTA…",
        "options": [
          "Keeps action visible",
          "Hides content",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Speed on mobile…",
        "options": [
          "Critical",
          "Optional",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "checkout-optimization",
    "title": "Checkout Optimization",
    "level": "advanced",
    "order": 8,
    "minutes": 32,
    "summary": "Guest checkout, progress indicator, trust badges, surprise costs.",
    "definition": "**Checkout Optimization** is essential for modern marketers. Guest checkout, progress indicator, trust badges, surprise costs.\n\nIn real campaigns, teams use checkout optimization to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align checkout optimization with business goals and audience research first.",
    "why": "Checkout Optimization improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use checkout optimization when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Checkout Optimization means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Checkout Optimization\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "List 5 checkout friction fixes for ecommerce.",
    "quiz": [
      {
        "question": "Guest checkout…",
        "options": [
          "Reduces drop-off",
          "Always bad",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Hidden shipping…",
        "options": [
          "Increases abandon",
          "Helps trust",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Trust badges…",
        "options": [
          "Payment security",
          "Spam",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  }
];

export const _conversionLessons = specs.map((spec) => dmLesson("conversion", spec));

export const conversionLessons = applyAllDeepOverrides(_conversionLessons, CONVERSION_GENERATED, CONVERSION_DEEP);
