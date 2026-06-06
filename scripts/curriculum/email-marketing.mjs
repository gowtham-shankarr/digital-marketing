import { dmLesson } from "./dm-lesson-builder.mjs";
import { applyAllDeepOverrides } from "./deep-content/merge.mjs";
import { EMAIL_MARKETING_GENERATED } from "./deep-content/generated/email-marketing.mjs";
import { EMAIL_MARKETING_DEEP } from "./email-marketing-deep/index.mjs";

const specs = [
  {
    "slug": "email-marketing-intro",
    "title": "What is Email Marketing?",
    "level": "base",
    "order": 1,
    "minutes": 28,
    "summary": "Direct owned channel — newsletters, promotions, nurture sequences.",
    "definition": "**What is Email Marketing?** is essential for modern marketers. Direct owned channel — newsletters, promotions, nurture sequences.\n\nIn real campaigns, teams use what is email marketing? to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align what is email marketing? with business goals and audience research first.",
    "why": "What is Email Marketing? improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use what is email marketing? when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what What is Email Marketing? means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying What is Email Marketing?\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Sign up for 2 brand emails; compare welcome emails.",
    "quiz": [
      {
        "question": "Email is…",
        "options": [
          "Owned channel",
          "Paid social only",
          "DNS",
          "Print"
        ],
        "answer": 0
      },
      {
        "question": "High ROI because…",
        "options": [
          "Permission-based",
          "Spam everyone",
          "No list",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Needs…",
        "options": [
          "Consent",
          "Hidden tracking only",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "list-building",
    "title": "Building Your List",
    "level": "base",
    "order": 2,
    "minutes": 28,
    "summary": "Lead magnets, signup forms, double opt-in, ethical growth.",
    "definition": "**Building Your List** is essential for modern marketers. Lead magnets, signup forms, double opt-in, ethical growth.\n\nIn real campaigns, teams use building your list to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align building your list with business goals and audience research first.",
    "why": "Building Your List improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use building your list when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Building Your List means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Building Your List\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Design lead magnet idea + landing headline.",
    "quiz": [
      {
        "question": "Lead magnet offers…",
        "options": [
          "Value for email",
          "Nothing",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      },
      {
        "question": "Double opt-in…",
        "options": [
          "Confirms consent",
          "Spam",
          "CSS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Never buy…",
        "options": [
          "Email lists",
          "Templates",
          "Tools",
          "Content"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "email-segmentation",
    "title": "Email Segmentation",
    "level": "base",
    "order": 3,
    "minutes": 28,
    "summary": "Split list by behavior, purchase history, interests for relevance.",
    "definition": "**Email Segmentation** is essential for modern marketers. Split list by behavior, purchase history, interests for relevance.\n\nIn real campaigns, teams use email segmentation to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align email segmentation with business goals and audience research first.",
    "why": "Email Segmentation improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use email segmentation when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Email Segmentation means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Email Segmentation\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Define 3 segments for online bookstore.",
    "quiz": [
      {
        "question": "Segments improve…",
        "options": [
          "Relevance",
          "Spam score",
          "DNS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Behavioral example…",
        "options": [
          "Clicked pricing",
          "Random",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Avoid…",
        "options": [
          "One blast to all always",
          "Testing",
          "Metrics",
          "Goals"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "newsletter-basics",
    "title": "Newsletter Basics",
    "level": "base",
    "order": 4,
    "minutes": 28,
    "summary": "Consistent format: intro, value, CTA, plain-text option.",
    "definition": "**Newsletter Basics** is essential for modern marketers. Consistent format: intro, value, CTA, plain-text option.\n\nIn real campaigns, teams use newsletter basics to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align newsletter basics with business goals and audience research first.",
    "why": "Newsletter Basics improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use newsletter basics when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Newsletter Basics means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Newsletter Basics\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Outline newsletter issue with 3 sections.",
    "quiz": [
      {
        "question": "Newsletters need…",
        "options": [
          "Consistent value",
          "Daily ads only",
          "DNS",
          "Payroll"
        ],
        "answer": 0
      },
      {
        "question": "Subject line…",
        "options": [
          "Drives opens",
          "Hidden",
          "CSS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "One clear CTA…",
        "options": [
          "Reduces confusion",
          "Twenty buttons",
          "Spam",
          "Tax"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "email-copy",
    "title": "Email Copywriting",
    "level": "intermediate",
    "order": 5,
    "minutes": 30,
    "summary": "Subject lines, preview text, skimmable body, personal tone.",
    "definition": "**Email Copywriting** is essential for modern marketers. Subject lines, preview text, skimmable body, personal tone.\n\nIn real campaigns, teams use email copywriting to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align email copywriting with business goals and audience research first.",
    "why": "Email Copywriting improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use email copywriting when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Email Copywriting means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Email Copywriting\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Write subject + preview for product launch.",
    "quiz": [
      {
        "question": "Preview text…",
        "options": [
          "Supports subject",
          "Replaces body",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Personalization…",
        "options": [
          "Increases opens",
          "Always creepy",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Body should be…",
        "options": [
          "Skimmable",
          "Wall of text",
          "Image only",
          "Hidden"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "email-automation",
    "title": "Marketing Automation",
    "level": "intermediate",
    "order": 6,
    "minutes": 30,
    "summary": "Welcome series, abandoned cart, re-engagement flows.",
    "definition": "**Marketing Automation** is essential for modern marketers. Welcome series, abandoned cart, re-engagement flows.\n\nIn real campaigns, teams use marketing automation to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align marketing automation with business goals and audience research first.",
    "why": "Marketing Automation improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use marketing automation when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Marketing Automation means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Marketing Automation\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Map 3-email welcome series goals.",
    "quiz": [
      {
        "question": "Automation sends…",
        "options": [
          "Triggered emails",
          "Random spam",
          "DNS",
          "Payroll"
        ],
        "answer": 0
      },
      {
        "question": "Welcome series…",
        "options": [
          "Onboards subscribers",
          "Unsubscribes all",
          "CSS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Cart abandon…",
        "options": [
          "Recovers revenue",
          "Illegal",
          "Tax",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "email-design",
    "title": "Email Design & HTML",
    "level": "intermediate",
    "order": 7,
    "minutes": 28,
    "summary": "Mobile-first layout, alt text, single column, dark mode aware.",
    "definition": "**Email Design & HTML** is essential for modern marketers. Mobile-first layout, alt text, single column, dark mode aware.\n\nIn real campaigns, teams use email design & html to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align email design & html with business goals and audience research first.",
    "why": "Email Design & HTML improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use email design & html when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Email Design & HTML means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Email Design & HTML\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Checklist 5 design rules for mobile email.",
    "quiz": [
      {
        "question": "Mobile-first because…",
        "options": [
          "Most opens mobile",
          "Desktop only",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Alt text…",
        "options": [
          "Accessibility",
          "Spam trick",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Too many images…",
        "options": [
          "Spam filters",
          "Better always",
          "SEO",
          "Payroll"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "deliverability",
    "title": "Deliverability Basics",
    "level": "intermediate",
    "order": 8,
    "minutes": 28,
    "summary": "SPF, DKIM, DMARC, bounce handling, spam complaints.",
    "definition": "**Deliverability Basics** is essential for modern marketers. SPF, DKIM, DMARC, bounce handling, spam complaints.\n\nIn real campaigns, teams use deliverability basics to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align deliverability basics with business goals and audience research first.",
    "why": "Deliverability Basics improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use deliverability basics when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Deliverability Basics means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Deliverability Basics\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Explain SPF in one sentence to a client.",
    "quiz": [
      {
        "question": "SPF helps…",
        "options": [
          "Sender authentication",
          "Design",
          "CSS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "High complaints…",
        "options": [
          "Hurt inbox placement",
          "Improve deliverability",
          "DNS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Clean list by…",
        "options": [
          "Removing bounces",
          "Buying emails",
          "Spam",
          "Hidden"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "email-metrics",
    "title": "Email Metrics",
    "level": "intermediate",
    "order": 9,
    "minutes": 28,
    "summary": "Open rate, CTR, unsubscribes, conversions — interpret benchmarks.",
    "definition": "**Email Metrics** is essential for modern marketers. Open rate, CTR, unsubscribes, conversions — interpret benchmarks.\n\nIn real campaigns, teams use email metrics to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align email metrics with business goals and audience research first.",
    "why": "Email Metrics improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use email metrics when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Email Metrics means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Email Metrics\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Calculate CTR from sample numbers in spreadsheet.",
    "quiz": [
      {
        "question": "CTR is…",
        "options": [
          "Clicks / delivered",
          "Opens only",
          "DNS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Unsubscribe spike means…",
        "options": [
          "Review content/frequency",
          "Success",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Ultimate metric…",
        "options": [
          "Conversions",
          "Font size",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "email-compliance",
    "title": "Email Compliance",
    "level": "advanced",
    "order": 10,
    "minutes": 28,
    "summary": "CAN-SPAM, GDPR, clear identity, physical address, opt-out.",
    "definition": "**Email Compliance** is essential for modern marketers. CAN-SPAM, GDPR, clear identity, physical address, opt-out.\n\nIn real campaigns, teams use email compliance to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align email compliance with business goals and audience research first.",
    "why": "Email Compliance improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use email compliance when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Email Compliance means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Email Compliance\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Audit marketing email for compliance checklist.",
    "quiz": [
      {
        "question": "CAN-SPAM needs…",
        "options": [
          "Unsubscribe",
          "Fake from",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "GDPR needs…",
        "options": [
          "Lawful basis",
          "Buy lists",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Physical address…",
        "options": [
          "Required in many regions",
          "Never",
          "Spam",
          "Hidden"
        ],
        "answer": 0
      }
    ]
  }
];

export const _email_marketingLessons = specs.map((spec) => dmLesson("email-marketing", spec));

export const email_marketingLessons = applyAllDeepOverrides(_email_marketingLessons, EMAIL_MARKETING_GENERATED, EMAIL_MARKETING_DEEP);
