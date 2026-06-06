import { dmLesson } from "./dm-lesson-builder.mjs";
import { applyAllDeepOverrides } from "./deep-content/merge.mjs";
import { CONTENT_MARKETING_GENERATED } from "./deep-content/generated/content-marketing.mjs";
import { CONTENT_MARKETING_DEEP } from "./content-marketing-deep/index.mjs";

const specs = [
  {
    "slug": "content-marketing-intro",
    "title": "What is Content Marketing?",
    "level": "base",
    "order": 1,
    "minutes": 28,
    "summary": "Creating valuable content to attract and retain audiences — blogs, video, guides.",
    "definition": "**What is Content Marketing?** is essential for modern marketers. Creating valuable content to attract and retain audiences — blogs, video, guides.\n\nIn real campaigns, teams use what is content marketing? to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align what is content marketing? with business goals and audience research first.",
    "why": "What is Content Marketing? improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use what is content marketing? when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what What is Content Marketing? means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying What is Content Marketing?\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "List 5 content ideas for a personal finance blog.",
    "quiz": [
      {
        "question": "Content marketing aims to…",
        "options": [
          "Provide value",
          "Spam users",
          "Hide product",
          "Skip SEO"
        ],
        "answer": 0
      },
      {
        "question": "Formats include…",
        "options": [
          "Blogs and video",
          "Only print",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      },
      {
        "question": "Success metric often…",
        "options": [
          "Engagement and leads",
          "Font size",
          "Server RAM",
          "Tax"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "content-strategy",
    "title": "Content Strategy",
    "level": "base",
    "order": 2,
    "minutes": 30,
    "summary": "Goals, audience, pillars, formats, and distribution plan aligned to funnel.",
    "definition": "**Content Strategy** is essential for modern marketers. Goals, audience, pillars, formats, and distribution plan aligned to funnel.\n\nIn real campaigns, teams use content strategy to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align content strategy with business goals and audience research first.",
    "why": "Content Strategy improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use content strategy when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Content Strategy means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Content Strategy\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "One-page strategy for SaaS blog: pillars, cadence, KPI.",
    "quiz": [
      {
        "question": "Strategy defines…",
        "options": [
          "What and why content",
          "Only fonts",
          "Payroll",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Align content to…",
        "options": [
          "Funnel stages",
          "Random trends",
          "No goals",
          "Hidden CTA"
        ],
        "answer": 0
      },
      {
        "question": "Pillars prevent…",
        "options": [
          "Random topics",
          "All SEO",
          "Email",
          "Analytics"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "blogging-basics",
    "title": "Blogging Basics",
    "level": "base",
    "order": 3,
    "minutes": 28,
    "summary": "Structure posts with hook, headings, scannable sections, and clear CTA.",
    "definition": "**Blogging Basics** is essential for modern marketers. Structure posts with hook, headings, scannable sections, and clear CTA.\n\nIn real campaigns, teams use blogging basics to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align blogging basics with business goals and audience research first.",
    "why": "Blogging Basics improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use blogging basics when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Blogging Basics means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Blogging Basics\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Outline 800-word post: title, 4 H2s, CTA.",
    "quiz": [
      {
        "question": "Good posts are…",
        "options": [
          "Scannable",
          "Wall of text",
          "No headings",
          "No CTA"
        ],
        "answer": 0
      },
      {
        "question": "Hook should…",
        "options": [
          "Grab attention",
          "Hide topic",
          "Skip intro",
          "Use jargon only"
        ],
        "answer": 0
      },
      {
        "question": "CTA encourages…",
        "options": [
          "Next step",
          "Close tab",
          "Unsubscribe",
          "Ignore brand"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "copywriting-fundamentals",
    "title": "Copywriting Fundamentals",
    "level": "base",
    "order": 4,
    "minutes": 30,
    "summary": "Benefits over features, clarity, active voice, and persuasive structure.",
    "definition": "**Copywriting Fundamentals** is essential for modern marketers. Benefits over features, clarity, active voice, and persuasive structure.\n\nIn real campaigns, teams use copywriting fundamentals to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align copywriting fundamentals with business goals and audience research first.",
    "why": "Copywriting Fundamentals improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use copywriting fundamentals when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Copywriting Fundamentals means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Copywriting Fundamentals\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Rewrite feature line as customer benefit for project tool.",
    "quiz": [
      {
        "question": "Copy focuses on…",
        "options": [
          "Customer benefits",
          "Internal jargon",
          "CSS",
          "DNS"
        ],
        "answer": 0
      },
      {
        "question": "Active voice is…",
        "options": [
          "Clearer",
          "Always wrong",
          "Illegal",
          "SEO only"
        ],
        "answer": 0
      },
      {
        "question": "Headlines should…",
        "options": [
          "Promise value",
          "Confuse",
          "Hide offer",
          "Skip mobile"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "storytelling-marketing",
    "title": "Storytelling in Marketing",
    "level": "intermediate",
    "order": 5,
    "minutes": 28,
    "summary": "Use narrative — character, conflict, resolution — to make brands memorable.",
    "definition": "**Storytelling in Marketing** is essential for modern marketers. Use narrative — character, conflict, resolution — to make brands memorable.\n\nIn real campaigns, teams use storytelling in marketing to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align storytelling in marketing with business goals and audience research first.",
    "why": "Storytelling in Marketing improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use storytelling in marketing when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Storytelling in Marketing means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Storytelling in Marketing\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Write 3-sentence brand story for handmade soap.",
    "quiz": [
      {
        "question": "Stories need…",
        "options": [
          "Conflict and resolution",
          "Only prices",
          "DNS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Customer is often…",
        "options": [
          "Hero",
          "Villain always",
          "Absent",
          "Payroll"
        ],
        "answer": 0
      },
      {
        "question": "Stories work because…",
        "options": [
          "Emotional connection",
          "Remove metrics",
          "Skip CTA",
          "Hide product"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "content-calendar",
    "title": "Content Calendar",
    "level": "intermediate",
    "order": 6,
    "minutes": 28,
    "summary": "Plan topics, formats, owners, and publish dates across channels.",
    "definition": "**Content Calendar** is essential for modern marketers. Plan topics, formats, owners, and publish dates across channels.\n\nIn real campaigns, teams use content calendar to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align content calendar with business goals and audience research first.",
    "why": "Content Calendar improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use content calendar when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Content Calendar means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Content Calendar\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Build 1-week calendar: 3 posts, 2 stories, 1 email.",
    "quiz": [
      {
        "question": "Calendars help…",
        "options": [
          "Consistency",
          "Random posting",
          "No goals",
          "Hide KPIs"
        ],
        "answer": 0
      },
      {
        "question": "Include…",
        "options": [
          "Date and channel",
          "Only emojis",
          "Payroll",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Review calendar…",
        "options": [
          "Monthly",
          "Never",
          "Once per decade",
          "After deleting blog"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "content-repurposing",
    "title": "Content Repurposing",
    "level": "intermediate",
    "order": 7,
    "minutes": 28,
    "summary": "Turn one pillar piece into clips, threads, emails, and carousels.",
    "definition": "**Content Repurposing** is essential for modern marketers. Turn one pillar piece into clips, threads, emails, and carousels.\n\nIn real campaigns, teams use content repurposing to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align content repurposing with business goals and audience research first.",
    "why": "Content Repurposing improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use content repurposing when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Content Repurposing means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Content Repurposing\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Plan repurposing blog into 4 social formats.",
    "quiz": [
      {
        "question": "Repurposing…",
        "options": [
          "Extends reach",
          "Duplicates spam",
          "Removes SEO",
          "Stops email"
        ],
        "answer": 0
      },
      {
        "question": "Start from…",
        "options": [
          "Pillar content",
          "Random meme",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      },
      {
        "question": "Adapt per…",
        "options": [
          "Channel norms",
          "One size all",
          "No audience",
          "Hidden CTA"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "seo-content-writing",
    "title": "SEO Content Writing",
    "level": "intermediate",
    "order": 8,
    "minutes": 30,
    "summary": "Write for humans first while satisfying search intent and on-page basics.",
    "definition": "**SEO Content Writing** is essential for modern marketers. Write for humans first while satisfying search intent and on-page basics.\n\nIn real campaigns, teams use seo content writing to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align seo content writing with business goals and audience research first.",
    "why": "SEO Content Writing improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use seo content writing when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what SEO Content Writing means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying SEO Content Writing\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Pick keyword; draft title + meta description + 3 H2s.",
    "quiz": [
      {
        "question": "Write for…",
        "options": [
          "Humans first",
          "Bots only",
          "Payroll",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Search intent means…",
        "options": [
          "What user wants",
          "Server IP",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Meta description…",
        "options": [
          "Summarizes page",
          "Replaces H1",
          "Hides content",
          "Is robots.txt"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "video-content-basics",
    "title": "Video Content Basics",
    "level": "intermediate",
    "order": 9,
    "minutes": 28,
    "summary": "Short-form hooks, captions, thumbnails, and YouTube/Reels basics.",
    "definition": "**Video Content Basics** is essential for modern marketers. Short-form hooks, captions, thumbnails, and YouTube/Reels basics.\n\nIn real campaigns, teams use video content basics to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align video content basics with business goals and audience research first.",
    "why": "Video Content Basics improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use video content basics when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Video Content Basics means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Video Content Basics\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Script 30-sec Reel: hook, value, CTA.",
    "quiz": [
      {
        "question": "First 3 seconds…",
        "options": [
          "Hook viewer",
          "Show credits",
          "Hide topic",
          "Skip audio"
        ],
        "answer": 0
      },
      {
        "question": "Captions help…",
        "options": [
          "Silent viewers",
          "DNS only",
          "Payroll",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Thumbnail should…",
        "options": [
          "Communicate topic",
          "Be blank",
          "Hide brand",
          "Remove CTA"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "content-distribution",
    "title": "Content Distribution",
    "level": "advanced",
    "order": 10,
    "minutes": 30,
    "summary": "Owned, earned, paid distribution — newsletters, partnerships, syndication.",
    "definition": "**Content Distribution** is essential for modern marketers. Owned, earned, paid distribution — newsletters, partnerships, syndication.\n\nIn real campaigns, teams use content distribution to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align content distribution with business goals and audience research first.",
    "why": "Content Distribution improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use content distribution when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Content Distribution means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Content Distribution\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Distribution plan for new guide: 5 channels + metric each.",
    "quiz": [
      {
        "question": "Distribution is…",
        "options": [
          "Getting content seen",
          "Writing only",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      },
      {
        "question": "Owned example…",
        "options": [
          "Email list",
          "Random billboard",
          "Internal memo",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Measure…",
        "options": [
          "Reach and conversions",
          "Font size",
          "Server RAM",
          "Tax"
        ],
        "answer": 0
      }
    ]
  }
];

export const _content_marketingLessons = specs.map((spec) => dmLesson("content-marketing", spec));

export const content_marketingLessons = applyAllDeepOverrides(_content_marketingLessons, CONTENT_MARKETING_GENERATED, CONTENT_MARKETING_DEEP);
