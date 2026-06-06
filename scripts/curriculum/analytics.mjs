import { dmLesson } from "./dm-lesson-builder.mjs";
import { applyAllDeepOverrides } from "./deep-content/merge.mjs";
import { ANALYTICS_GENERATED } from "./deep-content/generated/analytics.mjs";
import { ANALYTICS_DEEP } from "./analytics-deep/index.mjs";

const specs = [
  {
    "slug": "analytics-intro",
    "title": "Marketing Analytics Intro",
    "level": "base",
    "order": 1,
    "minutes": 28,
    "summary": "Collect and interpret data to improve campaigns and prove ROI.",
    "definition": "**Marketing Analytics Intro** is essential for modern marketers. Collect and interpret data to improve campaigns and prove ROI.\n\nIn real campaigns, teams use marketing analytics intro to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align marketing analytics intro with business goals and audience research first.",
    "why": "Marketing Analytics Intro improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use marketing analytics intro when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Marketing Analytics Intro means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Marketing Analytics Intro\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "List 5 marketing metrics a CEO cares about.",
    "quiz": [
      {
        "question": "Analytics helps…",
        "options": [
          "Decide with data",
          "Guess only",
          "DNS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Without data…",
        "options": [
          "Wasted budget",
          "Perfect ads",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Start with…",
        "options": [
          "One primary KPI",
          "Fifty dashboards",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "ga4-setup",
    "title": "GA4 Setup",
    "level": "base",
    "order": 2,
    "minutes": 30,
    "summary": "Install tag, data streams, events, conversions, DebugView.",
    "definition": "**GA4 Setup** is essential for modern marketers. Install tag, data streams, events, conversions, DebugView.\n\nIn real campaigns, teams use ga4 setup to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align ga4 setup with business goals and audience research first.",
    "why": "GA4 Setup improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use ga4 setup when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what GA4 Setup means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying GA4 Setup\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "List steps to install GA4 on a website.",
    "quiz": [
      {
        "question": "GA4 measures…",
        "options": [
          "Web and app events",
          "Payroll",
          "DNS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Conversion event…",
        "options": [
          "Key business action",
          "Page color",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "DebugView…",
        "options": [
          "Tests firing",
          "Deletes data",
          "Spam",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "utm-parameters",
    "title": "UTM Parameters",
    "level": "base",
    "order": 3,
    "minutes": 28,
    "summary": "utm_source, medium, campaign, content — track campaigns in analytics.",
    "definition": "**UTM Parameters** is essential for modern marketers. utm_source, medium, campaign, content — track campaigns in analytics.\n\nIn real campaigns, teams use utm parameters to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align utm parameters with business goals and audience research first.",
    "why": "UTM Parameters improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use utm parameters when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what UTM Parameters means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying UTM Parameters\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Build UTM URL for newsletter January promo.",
    "quiz": [
      {
        "question": "utm_source is…",
        "options": [
          "Traffic source",
          "Font size",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Consistent naming…",
        "options": [
          "Clean reports",
          "Random chaos",
          "Payroll",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Use UTMs on…",
        "options": [
          "External links",
          "Internal nav only",
          "Fonts",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "traffic-sources",
    "title": "Traffic Sources",
    "level": "base",
    "order": 4,
    "minutes": 28,
    "summary": "Organic, direct, referral, paid, social — acquisition report reading.",
    "definition": "**Traffic Sources** is essential for modern marketers. Organic, direct, referral, paid, social — acquisition report reading.\n\nIn real campaigns, teams use traffic sources to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align traffic sources with business goals and audience research first.",
    "why": "Traffic Sources improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use traffic sources when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Traffic Sources means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Traffic Sources\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Open acquisition report; name top 3 channels.",
    "quiz": [
      {
        "question": "Organic is…",
        "options": [
          "Unpaid search",
          "Email only",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Direct often…",
        "options": [
          "Typed URL/bookmarks",
          "Always social",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Referral is…",
        "options": [
          "Other websites",
          "Print",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "engagement-metrics",
    "title": "Engagement Metrics",
    "level": "intermediate",
    "order": 5,
    "minutes": 28,
    "summary": "Sessions, engagement rate, average engagement time, bounce nuances.",
    "definition": "**Engagement Metrics** is essential for modern marketers. Sessions, engagement rate, average engagement time, bounce nuances.\n\nIn real campaigns, teams use engagement metrics to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align engagement metrics with business goals and audience research first.",
    "why": "Engagement Metrics improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use engagement metrics when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Engagement Metrics means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Engagement Metrics\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Define engagement rate in plain English.",
    "quiz": [
      {
        "question": "Engagement rate in GA4…",
        "options": [
          "Engaged sessions ratio",
          "Email opens",
          "DNS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "High time on page may mean…",
        "options": [
          "Interest or confusion",
          "Always bad",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Compare…",
        "options": [
          "Segments and dates",
          "Never",
          "Random",
          "Payroll"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "conversion-tracking",
    "title": "Conversion Tracking",
    "level": "intermediate",
    "order": 6,
    "minutes": 30,
    "summary": "Micro vs macro conversions, thank-you pages, enhanced measurement.",
    "definition": "**Conversion Tracking** is essential for modern marketers. Micro vs macro conversions, thank-you pages, enhanced measurement.\n\nIn real campaigns, teams use conversion tracking to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align conversion tracking with business goals and audience research first.",
    "why": "Conversion Tracking improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use conversion tracking when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Conversion Tracking means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Conversion Tracking\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Define 2 micro + 1 macro conversion for SaaS.",
    "quiz": [
      {
        "question": "Macro conversion…",
        "options": [
          "Primary business goal",
          "Font change",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Micro conversion…",
        "options": [
          "Leading indicator",
          "Revenue always",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Track…",
        "options": [
          "Key funnel steps",
          "Nothing",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "marketing-dashboards",
    "title": "Marketing Dashboards",
    "level": "intermediate",
    "order": 7,
    "minutes": 28,
    "summary": "Looker Studio / Sheets dashboards — weekly KPIs at a glance.",
    "definition": "**Marketing Dashboards** is essential for modern marketers. Looker Studio / Sheets dashboards — weekly KPIs at a glance.\n\nIn real campaigns, teams use marketing dashboards to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align marketing dashboards with business goals and audience research first.",
    "why": "Marketing Dashboards improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use marketing dashboards when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Marketing Dashboards means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Marketing Dashboards\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Sketch dashboard with 6 widgets for ecommerce.",
    "quiz": [
      {
        "question": "Dashboards show…",
        "options": [
          "KPIs at glance",
          "Raw logs only",
          "DNS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Update…",
        "options": [
          "Automatically when possible",
          "Never",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Share with…",
        "options": [
          "Stakeholders",
          "Nobody",
          "Bots",
          "Payroll"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "attribution-basics",
    "title": "Attribution Basics",
    "level": "intermediate",
    "order": 8,
    "minutes": 28,
    "summary": "First-click, last-click, data-driven — no perfect model.",
    "definition": "**Attribution Basics** is essential for modern marketers. First-click, last-click, data-driven — no perfect model.\n\nIn real campaigns, teams use attribution basics to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align attribution basics with business goals and audience research first.",
    "why": "Attribution Basics improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use attribution basics when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Attribution Basics means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Attribution Basics\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Explain last-click bias to a marketer.",
    "quiz": [
      {
        "question": "Attribution assigns…",
        "options": [
          "Credit to touchpoints",
          "Fonts",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Last-click…",
        "options": [
          "Overweights final touch",
          "Perfect truth",
          "Tax",
          "Payroll"
        ],
        "answer": 0
      },
      {
        "question": "Use multiple…",
        "options": [
          "Models for insight",
          "Ignore",
          "Spam",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "ab-testing-analytics",
    "title": "Experiment Analysis",
    "level": "intermediate",
    "order": 9,
    "minutes": 28,
    "summary": "Sample size, significance, don't peek early, document results.",
    "definition": "**Experiment Analysis** is essential for modern marketers. Sample size, significance, don't peek early, document results.\n\nIn real campaigns, teams use experiment analysis to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align experiment analysis with business goals and audience research first.",
    "why": "Experiment Analysis improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use experiment analysis when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Experiment Analysis means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Experiment Analysis\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Checklist before calling A/B winner.",
    "quiz": [
      {
        "question": "Significance means…",
        "options": [
          "Unlikely due to chance",
          "Guaranteed win",
          "DNS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Peeking early…",
        "options": [
          "Misleading",
          "Best practice",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Document…",
        "options": [
          "Hypothesis and outcome",
          "Nothing",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "analytics-reporting",
    "title": "Monthly Marketing Report",
    "level": "advanced",
    "order": 10,
    "minutes": 32,
    "summary": "Executive summary, channel performance, insights, next month plan.",
    "definition": "**Monthly Marketing Report** is essential for modern marketers. Executive summary, channel performance, insights, next month plan.\n\nIn real campaigns, teams use monthly marketing report to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align monthly marketing report with business goals and audience research first.",
    "why": "Monthly Marketing Report improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use monthly marketing report when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Monthly Marketing Report means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Monthly Marketing Report\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Write executive summary paragraph from sample metrics.",
    "quiz": [
      {
        "question": "Exec summary…",
        "options": [
          "Bottom line first",
          "Raw data dump",
          "DNS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Insights explain…",
        "options": [
          "Why metrics moved",
          "Nothing",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Next month…",
        "options": [
          "Action plan",
          "Same as always",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  }
];

export const _analyticsLessons = specs.map((spec) => dmLesson("analytics", spec));

export const analyticsLessons = applyAllDeepOverrides(_analyticsLessons, ANALYTICS_GENERATED, ANALYTICS_DEEP);
