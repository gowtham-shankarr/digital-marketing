import { dmLesson } from "./dm-lesson-builder.mjs";
import { applyAllDeepOverrides } from "./deep-content/merge.mjs";
import { SOCIAL_MEDIA_GENERATED } from "./deep-content/generated/social-media.mjs";
import { SOCIAL_MEDIA_DEEP } from "./social-media-deep/index.mjs";

const specs = [
  {
    "slug": "social-media-intro",
    "title": "Social Media Marketing Intro",
    "level": "base",
    "order": 1,
    "minutes": 28,
    "summary": "Build community and drive traffic/sales on platforms where audiences engage.",
    "definition": "**Social Media Marketing Intro** is essential for modern marketers. Build community and drive traffic/sales on platforms where audiences engage.\n\nIn real campaigns, teams use social media marketing intro to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align social media marketing intro with business goals and audience research first.",
    "why": "Social Media Marketing Intro improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use social media marketing intro when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Social Media Marketing Intro means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Social Media Marketing Intro\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Pick brand; list which 2 platforms fit and why.",
    "quiz": [
      {
        "question": "Social marketing is…",
        "options": [
          "Engaging on platforms",
          "Print only",
          "DNS",
          "Payroll"
        ],
        "answer": 0
      },
      {
        "question": "Pick platforms by…",
        "options": [
          "Audience presence",
          "Random",
          "Fonts",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Success needs…",
        "options": [
          "Consistent value",
          "Spam",
          "No plan",
          "Hidden CTA"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "platform-strategy",
    "title": "Platform Strategy",
    "level": "base",
    "order": 2,
    "minutes": 30,
    "summary": "Match content format to LinkedIn, Instagram, TikTok, X, YouTube strengths.",
    "definition": "**Platform Strategy** is essential for modern marketers. Match content format to LinkedIn, Instagram, TikTok, X, YouTube strengths.\n\nIn real campaigns, teams use platform strategy to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align platform strategy with business goals and audience research first.",
    "why": "Platform Strategy improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use platform strategy when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Platform Strategy means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Platform Strategy\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Map one content idea to 3 platforms differently.",
    "quiz": [
      {
        "question": "LinkedIn suits…",
        "options": [
          "B2B professional",
          "Only memes",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      },
      {
        "question": "TikTok favors…",
        "options": [
          "Short video",
          "Whitepapers",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Strategy avoids…",
        "options": [
          "Posting everywhere identical",
          "Goals",
          "Audience",
          "Metrics"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "social-content-types",
    "title": "Social Content Types",
    "level": "base",
    "order": 3,
    "minutes": 28,
    "summary": "Educational, entertaining, promotional mix — 80/20 value vs sell.",
    "definition": "**Social Content Types** is essential for modern marketers. Educational, entertaining, promotional mix — 80/20 value vs sell.\n\nIn real campaigns, teams use social content types to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align social content types with business goals and audience research first.",
    "why": "Social Content Types improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use social content types when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Social Content Types means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Social Content Types\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Plan 9 posts: 3 edu, 3 entertain, 3 promo.",
    "quiz": [
      {
        "question": "Too promotional…",
        "options": [
          "Loses followers",
          "Improves trust always",
          "Fixes SEO",
          "Removes email"
        ],
        "answer": 0
      },
      {
        "question": "Educational posts…",
        "options": [
          "Build authority",
          "Hide brand",
          "Spam",
          "DNS"
        ],
        "answer": 0
      },
      {
        "question": "Mix depends on…",
        "options": [
          "Audience and funnel",
          "Random",
          "Fonts",
          "CSS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "social-copy-hooks",
    "title": "Social Copy & Hooks",
    "level": "base",
    "order": 4,
    "minutes": 28,
    "summary": "First line hooks, concise captions, CTAs, hashtags strategically.",
    "definition": "**Social Copy & Hooks** is essential for modern marketers. First line hooks, concise captions, CTAs, hashtags strategically.\n\nIn real campaigns, teams use social copy & hooks to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align social copy & hooks with business goals and audience research first.",
    "why": "Social Copy & Hooks improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use social copy & hooks when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Social Copy & Hooks means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Social Copy & Hooks\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Write 5 hooks for productivity app.",
    "quiz": [
      {
        "question": "Hook should…",
        "options": [
          "Stop the scroll",
          "Hide message",
          "Use jargon only",
          "Skip mobile"
        ],
        "answer": 0
      },
      {
        "question": "Hashtags…",
        "options": [
          "Aid discovery when relevant",
          "Replace strategy",
          "Spam always",
          "DNS"
        ],
        "answer": 0
      },
      {
        "question": "CTA examples…",
        "options": [
          "Save, comment, link",
          "None",
          "Close account",
          "Payroll"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "social-scheduling",
    "title": "Scheduling & Planning",
    "level": "intermediate",
    "order": 5,
    "minutes": 28,
    "summary": "Batch create, schedule with Meta Suite/Buffer, best times to post.",
    "definition": "**Scheduling & Planning** is essential for modern marketers. Batch create, schedule with Meta Suite/Buffer, best times to post.\n\nIn real campaigns, teams use scheduling & planning to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align scheduling & planning with business goals and audience research first.",
    "why": "Scheduling & Planning improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use scheduling & planning when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Scheduling & Planning means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Scheduling & Planning\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Schedule 3 posts in free scheduler tool.",
    "quiz": [
      {
        "question": "Scheduling helps…",
        "options": [
          "Consistency",
          "Random chaos",
          "No goals",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Batching…",
        "options": [
          "Saves time",
          "Removes quality",
          "DNS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Review times using…",
        "options": [
          "Analytics",
          "Guessing only",
          "Fonts",
          "Payroll"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "community-management",
    "title": "Community Management",
    "level": "intermediate",
    "order": 6,
    "minutes": 28,
    "summary": "Reply guidelines, handling complaints, fostering discussion.",
    "definition": "**Community Management** is essential for modern marketers. Reply guidelines, handling complaints, fostering discussion.\n\nIn real campaigns, teams use community management to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align community management with business goals and audience research first.",
    "why": "Community Management improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use community management when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Community Management means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Community Management\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Write 3 reply templates: praise, complaint, question.",
    "quiz": [
      {
        "question": "Fast replies…",
        "options": [
          "Build trust",
          "Always ignore",
          "Spam",
          "DNS"
        ],
        "answer": 0
      },
      {
        "question": "Complaints need…",
        "options": [
          "Empathy and solution",
          "Arguments",
          "Delete all",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Community grows…",
        "options": [
          "With genuine engagement",
          "Buy bots",
          "Hide brand",
          "Tax"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "influencer-basics",
    "title": "Influencer Marketing Basics",
    "level": "intermediate",
    "order": 7,
    "minutes": 30,
    "summary": "Micro vs macro influencers, briefs, disclosure (#ad), ROI.",
    "definition": "**Influencer Marketing Basics** is essential for modern marketers. Micro vs macro influencers, briefs, disclosure (#ad), ROI.\n\nIn real campaigns, teams use influencer marketing basics to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align influencer marketing basics with business goals and audience research first.",
    "why": "Influencer Marketing Basics improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use influencer marketing basics when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Influencer Marketing Basics means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Influencer Marketing Basics\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Find 3 micro-influencers in niche; note fit.",
    "quiz": [
      {
        "question": "Micro-influencers…",
        "options": [
          "Niche engaged audiences",
          "Always cheaper junk",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Disclosure…",
        "options": [
          "Required ethically",
          "Optional always",
          "Hidden",
          "Payroll"
        ],
        "answer": 0
      },
      {
        "question": "Measure…",
        "options": [
          "Reach and conversions",
          "Likes only vanity",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "social-ads-intro",
    "title": "Social Paid Boost",
    "level": "intermediate",
    "order": 8,
    "minutes": 28,
    "summary": "Boost posts vs full ads manager campaigns — objectives and budgets.",
    "definition": "**Social Paid Boost** is essential for modern marketers. Boost posts vs full ads manager campaigns — objectives and budgets.\n\nIn real campaigns, teams use social paid boost to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align social paid boost with business goals and audience research first.",
    "why": "Social Paid Boost improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use social paid boost when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Social Paid Boost means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Social Paid Boost\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Outline $50 boost test: audience, goal, metric.",
    "quiz": [
      {
        "question": "Boost is…",
        "options": [
          "Paid reach on post",
          "Organic only",
          "Email",
          "DNS"
        ],
        "answer": 0
      },
      {
        "question": "Pick objective…",
        "options": [
          "Matches funnel stage",
          "Random",
          "Fonts",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Start small to…",
        "options": [
          "Test creative",
          "Spend all day one",
          "Hide CTA",
          "Tax"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "social-analytics",
    "title": "Social Analytics",
    "level": "intermediate",
    "order": 9,
    "minutes": 28,
    "summary": "Reach, engagement rate, saves, profile visits, attribution limits.",
    "definition": "**Social Analytics** is essential for modern marketers. Reach, engagement rate, saves, profile visits, attribution limits.\n\nIn real campaigns, teams use social analytics to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align social analytics with business goals and audience research first.",
    "why": "Social Analytics improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use social analytics when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Social Analytics means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Social Analytics\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Export 1-week insights; calculate engagement rate.",
    "quiz": [
      {
        "question": "Engagement rate uses…",
        "options": [
          "Interactions / reach",
          "Payroll",
          "DNS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Saves signal…",
        "options": [
          "High value content",
          "Spam",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Compare…",
        "options": [
          "Week over week",
          "Never",
          "To random brands only",
          "Hide data"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "ugc-campaigns",
    "title": "User-Generated Content",
    "level": "intermediate",
    "order": 10,
    "minutes": 28,
    "summary": "Encourage customers to create content — contests, hashtags, rights.",
    "definition": "**User-Generated Content** is essential for modern marketers. Encourage customers to create content — contests, hashtags, rights.\n\nIn real campaigns, teams use user-generated content to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align user-generated content with business goals and audience research first.",
    "why": "User-Generated Content improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use user-generated content when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what User-Generated Content means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying User-Generated Content\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Design UGC prompt for coffee brand hashtag.",
    "quiz": [
      {
        "question": "UGC is…",
        "options": [
          "Content from users",
          "Stock only",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      },
      {
        "question": "Get rights to…",
        "options": [
          "Repurpose legally",
          "Steal content",
          "CSS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "UGC builds…",
        "options": [
          "Trust",
          "No community",
          "Hidden brand",
          "Tax"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "social-crisis",
    "title": "Social Media Crisis",
    "level": "advanced",
    "order": 11,
    "minutes": 28,
    "summary": "Pause posts, acknowledge, move to private channel, post-mortem.",
    "definition": "**Social Media Crisis** is essential for modern marketers. Pause posts, acknowledge, move to private channel, post-mortem.\n\nIn real campaigns, teams use social media crisis to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align social media crisis with business goals and audience research first.",
    "why": "Social Media Crisis improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use social media crisis when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Social Media Crisis means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Social Media Crisis\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Crisis checklist for data leak rumor.",
    "quiz": [
      {
        "question": "First step often…",
        "options": [
          "Pause scheduled posts",
          "Post more memes",
          "Ignore",
          "DNS"
        ],
        "answer": 0
      },
      {
        "question": "Public reply should…",
        "options": [
          "Acknowledge and guide",
          "Blame customers",
          "CSS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "After crisis…",
        "options": [
          "Post-mortem learnings",
          "Delete brand",
          "Stop forever",
          "Tax"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "social-strategy-doc",
    "title": "Social Strategy Document",
    "level": "advanced",
    "order": 12,
    "minutes": 32,
    "summary": "One-page strategy: goals, personas, pillars, cadence, KPIs.",
    "definition": "**Social Strategy Document** is essential for modern marketers. One-page strategy: goals, personas, pillars, cadence, KPIs.\n\nIn real campaigns, teams use social strategy document to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align social strategy document with business goals and audience research first.",
    "why": "Social Strategy Document improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use social strategy document when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Social Strategy Document means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Social Strategy Document\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Write social strategy doc for fictional bakery.",
    "quiz": [
      {
        "question": "Strategy doc includes…",
        "options": [
          "Goals and KPIs",
          "Only memes",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      },
      {
        "question": "Review quarterly…",
        "options": [
          "Yes",
          "Never",
          "Daily only",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Share with…",
        "options": [
          "Team aligned",
          "Nobody",
          "Bots",
          "Fonts"
        ],
        "answer": 0
      }
    ]
  }
];

export const _social_mediaLessons = specs.map((spec) => dmLesson("social-media", spec));

export const social_mediaLessons = applyAllDeepOverrides(_social_mediaLessons, SOCIAL_MEDIA_GENERATED, SOCIAL_MEDIA_DEEP);
