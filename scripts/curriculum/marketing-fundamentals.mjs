import { dmLesson } from "./dm-lesson-builder.mjs";
import { applyAllDeepOverrides } from "./deep-content/merge.mjs";
import { MARKETING_FUNDAMENTALS_GENERATED } from "./deep-content/generated/marketing-fundamentals.mjs";
import { MARKETING_FUNDAMENTALS_DEEP } from "./marketing-fundamentals-deep/index.mjs";

const specs = [
  {
    "slug": "buyer-personas",
    "title": "Buyer Personas",
    "level": "base",
    "order": 1,
    "minutes": 28,
    "summary": "Personas are fictional profiles of ideal customers based on research.",
    "definition": "**Buyer Personas** is essential for modern marketers. Personas are fictional profiles of ideal customers based on research.\n\nIn real campaigns, teams use buyer personas to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align buyer personas with business goals and audience research first.",
    "why": "Buyer Personas improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use buyer personas when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Buyer Personas means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Buyer Personas\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Build persona 'Alex' for a B2B SaaS tool: role, goals, frustrations.",
    "quiz": [
      {
        "question": "Personas are based on…",
        "options": [
          "Research",
          "Guessing only",
          "Stock photos",
          "Random names"
        ],
        "answer": 0
      },
      {
        "question": "Good personas include…",
        "options": [
          "Goals and pain points",
          "Only age",
          "CEO salary",
          "Server logs"
        ],
        "answer": 0
      },
      {
        "question": "Personas help…",
        "options": [
          "Target messaging",
          "Skip SEO",
          "Avoid product",
          "Remove KPIs"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "value-proposition",
    "title": "Value Proposition",
    "level": "base",
    "order": 2,
    "minutes": 28,
    "summary": "A clear statement of the benefit you deliver and why buyers should care.",
    "definition": "**Value Proposition** is essential for modern marketers. A clear statement of the benefit you deliver and why buyers should care.\n\nIn real campaigns, teams use value proposition to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align value proposition with business goals and audience research first.",
    "why": "Value Proposition improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use value proposition when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Value Proposition means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Value Proposition\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Write value prop for eco water bottle in one sentence + 3 proof points.",
    "quiz": [
      {
        "question": "Value prop explains…",
        "options": [
          "Benefit to customer",
          "Office address",
          "CSS version",
          "Tax code"
        ],
        "answer": 0
      },
      {
        "question": "It should be…",
        "options": [
          "Clear and specific",
          "Long jargon",
          "Hidden",
          "Identical for all"
        ],
        "answer": 0
      },
      {
        "question": "Proof points…",
        "options": [
          "Support the claim",
          "Replace product",
          "Stop ads",
          "Remove UX"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "positioning",
    "title": "Market Positioning",
    "level": "base",
    "order": 3,
    "minutes": 30,
    "summary": "Positioning is how you want to be perceived vs alternatives in the customer's mind.",
    "definition": "**Market Positioning** is essential for modern marketers. Positioning is how you want to be perceived vs alternatives in the customer's mind.\n\nIn real campaigns, teams use market positioning to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align market positioning with business goals and audience research first.",
    "why": "Market Positioning improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use market positioning when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Market Positioning means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Market Positioning\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Position a budget hotel vs luxury chain in 2 sentences each.",
    "quiz": [
      {
        "question": "Positioning is…",
        "options": [
          "Perception vs alternatives",
          "Font choice",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      },
      {
        "question": "Good positioning…",
        "options": [
          "Differentiates",
          "Copies everyone",
          "Hides price",
          "Ignores audience"
        ],
        "answer": 0
      },
      {
        "question": "Test positioning with…",
        "options": [
          "Customer interviews",
          "Random polls only",
          "No research",
          "Print TV"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "competitive-analysis",
    "title": "Competitive Analysis",
    "level": "base",
    "order": 4,
    "minutes": 30,
    "summary": "Systematic review of competitors' offers, messaging, channels, and strengths.",
    "definition": "**Competitive Analysis** is essential for modern marketers. Systematic review of competitors' offers, messaging, channels, and strengths.\n\nIn real campaigns, teams use competitive analysis to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align competitive analysis with business goals and audience research first.",
    "why": "Competitive Analysis improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use competitive analysis when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Competitive Analysis means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Competitive Analysis\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Compare 3 competitors' homepages: headline, CTA, social proof.",
    "quiz": [
      {
        "question": "Competitive analysis studies…",
        "options": [
          "Rivals' marketing",
          "Internal payroll",
          "CSS lint",
          "Git"
        ],
        "answer": 0
      },
      {
        "question": "Look at…",
        "options": [
          "Messaging and channels",
          "Only logos",
          "Employee birthdays",
          "Fonts only"
        ],
        "answer": 0
      },
      {
        "question": "Outcome is…",
        "options": [
          "Gaps and opportunities",
          "Copy everything",
          "Stop marketing",
          "No product"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "swot-analysis",
    "title": "SWOT Analysis",
    "level": "base",
    "order": 5,
    "minutes": 28,
    "summary": "Strengths, Weaknesses, Opportunities, Threats — strategic snapshot.",
    "definition": "**SWOT Analysis** is essential for modern marketers. Strengths, Weaknesses, Opportunities, Threats — strategic snapshot.\n\nIn real campaigns, teams use swot analysis to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align swot analysis with business goals and audience research first.",
    "why": "SWOT Analysis improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use swot analysis when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what SWOT Analysis means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying SWOT Analysis\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "SWOT for a local bakery going online: 2 bullets per quadrant.",
    "quiz": [
      {
        "question": "SWOT includes…",
        "options": [
          "Strengths and threats",
          "Only revenue",
          "HTML tags",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Opportunities are…",
        "options": [
          "External positives",
          "Internal flaws",
          "Bugs only",
          "Payroll"
        ],
        "answer": 0
      },
      {
        "question": "Use SWOT when…",
        "options": [
          "Planning strategy",
          "Choosing fonts",
          "Writing CSS",
          "Deploying code"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "unique-selling-point",
    "title": "Unique Selling Point (USP)",
    "level": "intermediate",
    "order": 6,
    "minutes": 28,
    "summary": "USP is the one reason customers choose you over substitutes.",
    "definition": "**Unique Selling Point (USP)** is essential for modern marketers. USP is the one reason customers choose you over substitutes.\n\nIn real campaigns, teams use unique selling point (usp) to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align unique selling point (usp) with business goals and audience research first.",
    "why": "Unique Selling Point (USP) improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use unique selling point (usp) when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Unique Selling Point (USP) means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Unique Selling Point (USP)\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Find USP of 3 brands you admire; explain in one line each.",
    "quiz": [
      {
        "question": "USP answers…",
        "options": [
          "Why choose you",
          "Office hours",
          "DNS TTL",
          "Build tool"
        ],
        "answer": 0
      },
      {
        "question": "USP must be…",
        "options": [
          "Credible",
          "Hidden",
          "Same as all",
          "Unmeasurable"
        ],
        "answer": 0
      },
      {
        "question": "Weak USP…",
        "options": [
          "Sounds generic",
          "Improves SEO auto",
          "Fixes email",
          "Removes ads"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "brand-messaging",
    "title": "Brand Messaging Framework",
    "level": "intermediate",
    "order": 7,
    "minutes": 30,
    "summary": "Mission, vision, voice, pillars — consistent story across channels.",
    "definition": "**Brand Messaging Framework** is essential for modern marketers. Mission, vision, voice, pillars — consistent story across channels.\n\nIn real campaigns, teams use brand messaging framework to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align brand messaging framework with business goals and audience research first.",
    "why": "Brand Messaging Framework improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use brand messaging framework when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Brand Messaging Framework means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Brand Messaging Framework\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Define 3 message pillars for a pet food brand.",
    "quiz": [
      {
        "question": "Message pillars…",
        "options": [
          "Repeatable themes",
          "Random posts",
          "Payroll",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Brand voice is…",
        "options": [
          "How you sound",
          "Logo color only",
          "Server region",
          "Tax ID"
        ],
        "answer": 0
      },
      {
        "question": "Framework helps…",
        "options": [
          "Consistency",
          "Skip audience",
          "Avoid goals",
          "Remove KPIs"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "market-segmentation",
    "title": "Market Segmentation",
    "level": "intermediate",
    "order": 8,
    "minutes": 28,
    "summary": "Split market by geography, behavior, needs, or firmographics for B2B.",
    "definition": "**Market Segmentation** is essential for modern marketers. Split market by geography, behavior, needs, or firmographics for B2B.\n\nIn real campaigns, teams use market segmentation to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align market segmentation with business goals and audience research first.",
    "why": "Market Segmentation improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use market segmentation when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Market Segmentation means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Market Segmentation\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Segment users for a language app: 3 segments + key message each.",
    "quiz": [
      {
        "question": "Segmentation divides…",
        "options": [
          "Market into groups",
          "CSS files",
          "Servers",
          "Invoices"
        ],
        "answer": 0
      },
      {
        "question": "B2B may use…",
        "options": [
          "Firmographics",
          "Only memes",
          "No data",
          "Print only"
        ],
        "answer": 0
      },
      {
        "question": "Segments enable…",
        "options": [
          "Targeted offers",
          "One message for all",
          "No testing",
          "Hidden prices"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "marketing-research-basics",
    "title": "Marketing Research Basics",
    "level": "intermediate",
    "order": 9,
    "minutes": 30,
    "summary": "Surveys, interviews, social listening, and secondary research for decisions.",
    "definition": "**Marketing Research Basics** is essential for modern marketers. Surveys, interviews, social listening, and secondary research for decisions.\n\nIn real campaigns, teams use marketing research basics to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align marketing research basics with business goals and audience research first.",
    "why": "Marketing Research Basics improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use marketing research basics when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Marketing Research Basics means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Marketing Research Basics\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Draft 5 survey questions for a new gym membership offer.",
    "quiz": [
      {
        "question": "Primary research is…",
        "options": [
          "Data you collect",
          "Only Google",
          "Guesswork",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Interviews reveal…",
        "options": [
          "Why behind behavior",
          "Server logs",
          "CSS bugs",
          "DNS"
        ],
        "answer": 0
      },
      {
        "question": "Research before…",
        "options": [
          "Big budget spend",
          "Ignoring audience",
          "Copying rivals blindly",
          "Skipping goals"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "messaging-testing",
    "title": "Message Testing",
    "level": "advanced",
    "order": 10,
    "minutes": 32,
    "summary": "A/B test headlines, offers, and CTAs with small audiences before scaling.",
    "definition": "**Message Testing** is essential for modern marketers. A/B test headlines, offers, and CTAs with small audiences before scaling.\n\nIn real campaigns, teams use message testing to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align message testing with business goals and audience research first.",
    "why": "Message Testing improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use message testing when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Message Testing means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Message Testing\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Propose 2 headline variants for landing page and what metric decides winner.",
    "quiz": [
      {
        "question": "A/B tests compare…",
        "options": [
          "Two variants",
          "Ten products",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      },
      {
        "question": "Pick winner by…",
        "options": [
          "Predefined metric",
          "Gut only",
          "Random",
          "Font size"
        ],
        "answer": 0
      },
      {
        "question": "Test before…",
        "options": [
          "Scaling spend",
          "Ignoring data",
          "Removing CTA",
          "Hiding price"
        ],
        "answer": 0
      }
    ]
  }
];

export const _marketing_fundamentalsLessons = specs.map((spec) => dmLesson("marketing-fundamentals", spec));

export const marketing_fundamentalsLessons = applyAllDeepOverrides(_marketing_fundamentalsLessons, MARKETING_FUNDAMENTALS_GENERATED, MARKETING_FUNDAMENTALS_DEEP);
