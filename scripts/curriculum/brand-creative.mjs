import { dmLesson } from "./dm-lesson-builder.mjs";
import { applyAllDeepOverrides } from "./deep-content/merge.mjs";
import { BRAND_CREATIVE_GENERATED } from "./deep-content/generated/brand-creative.mjs";
import { BRAND_CREATIVE_DEEP } from "./brand-creative-deep/index.mjs";

const specs = [
  {
    "slug": "brand-identity-intro",
    "title": "Brand Identity Intro",
    "level": "base",
    "order": 1,
    "minutes": 28,
    "summary": "Logo, colors, typography, voice — consistent recognizable presence.",
    "definition": "**Brand Identity Intro** is essential for modern marketers. Logo, colors, typography, voice — consistent recognizable presence.\n\nIn real campaigns, teams use brand identity intro to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align brand identity intro with business goals and audience research first.",
    "why": "Brand Identity Intro improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use brand identity intro when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Brand Identity Intro means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Brand Identity Intro\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Audit brand colors/fonts on website + social.",
    "quiz": [
      {
        "question": "Brand identity is…",
        "options": [
          "Visual + verbal system",
          "Logo only",
          "DNS",
          "Payroll"
        ],
        "answer": 0
      },
      {
        "question": "Consistency…",
        "options": [
          "Builds recognition",
          "Random daily",
          "CSS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Guidelines help…",
        "options": [
          "Teams stay aligned",
          "Skip strategy",
          "Tax",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "brand-voice",
    "title": "Brand Voice & Tone",
    "level": "base",
    "order": 2,
    "minutes": 28,
    "summary": "Voice = personality; tone adapts to situation — formal vs playful.",
    "definition": "**Brand Voice & Tone** is essential for modern marketers. Voice = personality; tone adapts to situation — formal vs playful.\n\nIn real campaigns, teams use brand voice & tone to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align brand voice & tone with business goals and audience research first.",
    "why": "Brand Voice & Tone improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use brand voice & tone when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Brand Voice & Tone means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Brand Voice & Tone\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Write same CTA in formal vs friendly tone.",
    "quiz": [
      {
        "question": "Voice is…",
        "options": [
          "Brand personality",
          "Font size",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Tone changes for…",
        "options": [
          "Context",
          "Never",
          "Payroll",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Document in…",
        "options": [
          "Style guide",
          "Hidden",
          "Spam",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "color-typography",
    "title": "Color & Typography Basics",
    "level": "base",
    "order": 3,
    "minutes": 28,
    "summary": "Contrast, readability, 2-3 brand colors, web-safe font pairings.",
    "definition": "**Color & Typography Basics** is essential for modern marketers. Contrast, readability, 2-3 brand colors, web-safe font pairings.\n\nIn real campaigns, teams use color & typography basics to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align color & typography basics with business goals and audience research first.",
    "why": "Color & Typography Basics improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use color & typography basics when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Color & Typography Basics means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Color & Typography Basics\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Pick primary + accent color with contrast check.",
    "quiz": [
      {
        "question": "Contrast helps…",
        "options": [
          "Readability",
          "Spam filters",
          "DNS",
          "Payroll"
        ],
        "answer": 0
      },
      {
        "question": "Too many fonts…",
        "options": [
          "Looks messy",
          "Always pro",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Accessibility…",
        "options": [
          "WCAG contrast",
          "Ignore",
          "Fonts only",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "canva-workflow",
    "title": "Canva for Marketers",
    "level": "base",
    "order": 4,
    "minutes": 28,
    "summary": "Templates, brand kit, resize for platforms, export formats.",
    "definition": "**Canva for Marketers** is essential for modern marketers. Templates, brand kit, resize for platforms, export formats.\n\nIn real campaigns, teams use canva for marketers to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align canva for marketers with business goals and audience research first.",
    "why": "Canva for Marketers improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use canva for marketers when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Canva for Marketers means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Canva for Marketers\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Create branded Instagram post in Canva.",
    "quiz": [
      {
        "question": "Brand kit stores…",
        "options": [
          "Colors and logos",
          "Payroll",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Resize for…",
        "options": [
          "Each platform",
          "One size all",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Export PNG for…",
        "options": [
          "Social",
          "Print billboard only",
          "Spam",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "ad-creative-visual",
    "title": "Visual Ad Creative",
    "level": "intermediate",
    "order": 5,
    "minutes": 30,
    "summary": "Hierarchy, focal point, legible text on mobile, brand consistency.",
    "definition": "**Visual Ad Creative** is essential for modern marketers. Hierarchy, focal point, legible text on mobile, brand consistency.\n\nIn real campaigns, teams use visual ad creative to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align visual ad creative with business goals and audience research first.",
    "why": "Visual Ad Creative improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use visual ad creative when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Visual Ad Creative means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Visual Ad Creative\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Critique one ad: focal point, CTA, text size.",
    "quiz": [
      {
        "question": "Focal point…",
        "options": [
          "Draws eye first",
          "Hidden",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Text on image…",
        "options": [
          "Large legible",
          "Tiny",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Test on…",
        "options": [
          "Mobile preview",
          "Desktop only",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "photo-video-assets",
    "title": "Photo & Video Assets",
    "level": "intermediate",
    "order": 6,
    "minutes": 28,
    "summary": "Stock vs custom, licensing, aspect ratios, compression.",
    "definition": "**Photo & Video Assets** is essential for modern marketers. Stock vs custom, licensing, aspect ratios, compression.\n\nIn real campaigns, teams use photo & video assets to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align photo & video assets with business goals and audience research first.",
    "why": "Photo & Video Assets improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use photo & video assets when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Photo & Video Assets means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Photo & Video Assets\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "License checklist for stock photo use.",
    "quiz": [
      {
        "question": "License matters for…",
        "options": [
          "Legal use",
          "Fonts",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Custom photos…",
        "options": [
          "Unique brand",
          "Always free",
          "Tax",
          "Payroll"
        ],
        "answer": 0
      },
      {
        "question": "Compress to…",
        "options": [
          "Faster load",
          "Huge files",
          "Spam",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "creative-brief",
    "title": "Creative Brief",
    "level": "intermediate",
    "order": 7,
    "minutes": 28,
    "summary": "Objective, audience, message, mandatories, deliverables for designers.",
    "definition": "**Creative Brief** is essential for modern marketers. Objective, audience, message, mandatories, deliverables for designers.\n\nIn real campaigns, teams use creative brief to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align creative brief with business goals and audience research first.",
    "why": "Creative Brief improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use creative brief when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Creative Brief means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Creative Brief\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Write brief for Black Friday banner.",
    "quiz": [
      {
        "question": "Brief includes…",
        "options": [
          "Objective and audience",
          "Only colors",
          "DNS",
          "Payroll"
        ],
        "answer": 0
      },
      {
        "question": "Mandatories…",
        "options": [
          "Legal/logo rules",
          "Optional",
          "CSS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Share with…",
        "options": [
          "Designer/agency",
          "Nobody",
          "Tax",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "brand-guidelines-doc",
    "title": "Brand Guidelines Doc",
    "level": "advanced",
    "order": 8,
    "minutes": 32,
    "summary": "One doc: logo usage, colors, type, voice, examples.",
    "definition": "**Brand Guidelines Doc** is essential for modern marketers. One doc: logo usage, colors, type, voice, examples.\n\nIn real campaigns, teams use brand guidelines doc to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align brand guidelines doc with business goals and audience research first.",
    "why": "Brand Guidelines Doc improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use brand guidelines doc when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Brand Guidelines Doc means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Brand Guidelines Doc\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Outline brand guide table of contents.",
    "quiz": [
      {
        "question": "Guidelines prevent…",
        "options": [
          "Off-brand assets",
          "Better SEO auto",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Include…",
        "options": [
          "Do and don't examples",
          "Secrets",
          "Payroll",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Update when…",
        "options": [
          "Rebrand",
          "Never",
          "Daily random",
          "Tax"
        ],
        "answer": 0
      }
    ]
  }
];

export const _brand_creativeLessons = specs.map((spec) => dmLesson("brand-creative", spec));

export const brand_creativeLessons = applyAllDeepOverrides(_brand_creativeLessons, BRAND_CREATIVE_GENERATED, BRAND_CREATIVE_DEEP);
