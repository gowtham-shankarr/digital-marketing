import { dmLesson } from "./dm-lesson-builder.mjs";
import { applyAllDeepOverrides } from "./deep-content/merge.mjs";
import { SEO_GENERATED } from "./deep-content/generated/seo.mjs";
import { SEO_DEEP } from "./seo-deep/index.mjs";

const specs = [
  {
    "slug": "seo-intro",
    "title": "What is SEO?",
    "level": "base",
    "order": 1,
    "minutes": 28,
    "summary": "Search Engine Optimization improves visibility in organic search results.",
    "definition": "**What is SEO?** is essential for modern marketers. Search Engine Optimization improves visibility in organic search results.\n\nIn real campaigns, teams use what is seo? to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align what is seo? with business goals and audience research first.",
    "why": "What is SEO? improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use what is seo? when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what What is SEO? means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying What is SEO?\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Google a problem you solve; note top 3 result types (blog, tool, video).",
    "quiz": [
      {
        "question": "SEO is…",
        "options": [
          "Organic search optimization",
          "Paid ads only",
          "Email",
          "Print"
        ],
        "answer": 0
      },
      {
        "question": "Organic means…",
        "options": [
          "Unpaid clicks",
          "Always instant",
          "No content",
          "Social only"
        ],
        "answer": 0
      },
      {
        "question": "SEO takes…",
        "options": [
          "Time and consistency",
          "One day only",
          "No research",
          "Hidden site"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "how-search-works",
    "title": "How Search Works",
    "level": "base",
    "order": 2,
    "minutes": 28,
    "summary": "Crawl, index, rank — Google discovers pages and scores relevance.",
    "definition": "**How Search Works** is essential for modern marketers. Crawl, index, rank — Google discovers pages and scores relevance.\n\nIn real campaigns, teams use how search works to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align how search works with business goals and audience research first.",
    "why": "How Search Works improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use how search works when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what How Search Works means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying How Search Works\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Check Search Console coverage report terminology.",
    "quiz": [
      {
        "question": "Crawling is…",
        "options": [
          "Discovering pages",
          "Paying ads",
          "Email blast",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Indexing means…",
        "options": [
          "Stored in search index",
          "Deleted site",
          "DNS only",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Ranking depends on…",
        "options": [
          "Relevance and quality",
          "Random",
          "Payroll",
          "Logo"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "keyword-research",
    "title": "Keyword Research",
    "level": "base",
    "order": 3,
    "minutes": 30,
    "summary": "Find terms people search — volume, intent, difficulty — with free/paid tools.",
    "definition": "**Keyword Research** is essential for modern marketers. Find terms people search — volume, intent, difficulty — with free/paid tools.\n\nIn real campaigns, teams use keyword research to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align keyword research with business goals and audience research first.",
    "why": "Keyword Research improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use keyword research when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Keyword Research means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Keyword Research\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "List 10 keywords for yoga studio with intent label.",
    "quiz": [
      {
        "question": "Keywords reflect…",
        "options": [
          "User searches",
          "Payroll",
          "CSS bugs",
          "DNS"
        ],
        "answer": 0
      },
      {
        "question": "Intent types…",
        "options": [
          "Info, commercial, transactional",
          "Only memes",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Long-tail keywords…",
        "options": [
          "More specific",
          "Always useless",
          "Paid only",
          "Hidden"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "on-page-seo",
    "title": "On-Page SEO",
    "level": "base",
    "order": 4,
    "minutes": 30,
    "summary": "Title tags, headings, internal links, and helpful content on each page.",
    "definition": "**On-Page SEO** is essential for modern marketers. Title tags, headings, internal links, and helpful content on each page.\n\nIn real campaigns, teams use on-page seo to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align on-page seo with business goals and audience research first.",
    "why": "On-Page SEO improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use on-page seo when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what On-Page SEO means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying On-Page SEO\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Audit one page: title length, H1, 2 internal links.",
    "quiz": [
      {
        "question": "Title tag appears in…",
        "options": [
          "Search results",
          "Payroll",
          "DNS panel",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "One page should have…",
        "options": [
          "One clear H1",
          "Ten H1s",
          "No headings",
          "Hidden text"
        ],
        "answer": 0
      },
      {
        "question": "Internal links…",
        "options": [
          "Help navigation and SEO",
          "Spam only",
          "Remove UX",
          "Stop crawl"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "technical-seo-basics",
    "title": "Technical SEO Basics",
    "level": "intermediate",
    "order": 5,
    "minutes": 30,
    "summary": "Site speed, mobile-friendly, HTTPS, sitemaps, and crawlability.",
    "definition": "**Technical SEO Basics** is essential for modern marketers. Site speed, mobile-friendly, HTTPS, sitemaps, and crawlability.\n\nIn real campaigns, teams use technical seo basics to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align technical seo basics with business goals and audience research first.",
    "why": "Technical SEO Basics improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use technical seo basics when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Technical SEO Basics means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Technical SEO Basics\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Run PageSpeed Insights; note 2 opportunities.",
    "quiz": [
      {
        "question": "HTTPS signals…",
        "options": [
          "Security",
          "Print ads",
          "Payroll",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Sitemap helps…",
        "options": [
          "Discovery",
          "Email",
          "Social only",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Mobile-friendly is…",
        "options": [
          "Ranking factor",
          "Optional forever",
          "DNS",
          "Tax"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "local-seo",
    "title": "Local SEO",
    "level": "intermediate",
    "order": 6,
    "minutes": 28,
    "summary": "Google Business Profile, NAP consistency, local keywords, reviews.",
    "definition": "**Local SEO** is essential for modern marketers. Google Business Profile, NAP consistency, local keywords, reviews.\n\nIn real campaigns, teams use local seo to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align local seo with business goals and audience research first.",
    "why": "Local SEO improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use local seo when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Local SEO means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Local SEO\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Audit local business GBP: photos, hours, reviews.",
    "quiz": [
      {
        "question": "GBP helps…",
        "options": [
          "Local map pack",
          "Email only",
          "Print TV",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "NAP means…",
        "options": [
          "Name address phone",
          "New ad plan",
          "DNS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Reviews affect…",
        "options": [
          "Trust and rankings",
          "Payroll",
          "Server",
          "Tax"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "link-building-basics",
    "title": "Link Building Basics",
    "level": "intermediate",
    "order": 7,
    "minutes": 30,
    "summary": "Earn backlinks via quality content, outreach, and digital PR.",
    "definition": "**Link Building Basics** is essential for modern marketers. Earn backlinks via quality content, outreach, and digital PR.\n\nIn real campaigns, teams use link building basics to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align link building basics with business goals and audience research first.",
    "why": "Link Building Basics improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use link building basics when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Link Building Basics means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Link Building Basics\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "List 5 link ideas for nonprofit blog.",
    "quiz": [
      {
        "question": "Backlinks are…",
        "options": [
          "Links from other sites",
          "Internal only",
          "Payroll",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Quality beats…",
        "options": [
          "Quantity spam",
          "Nothing",
          "Fonts",
          "DNS"
        ],
        "answer": 0
      },
      {
        "question": "Earning links needs…",
        "options": [
          "Valuable content",
          "Buying only",
          "Hidden text",
          "Cloaking"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "seo-content-clusters",
    "title": "Topic Clusters",
    "level": "intermediate",
    "order": 8,
    "minutes": 28,
    "summary": "Pillar page + cluster posts internal linking for topical authority.",
    "definition": "**Topic Clusters** is essential for modern marketers. Pillar page + cluster posts internal linking for topical authority.\n\nIn real campaigns, teams use topic clusters to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align topic clusters with business goals and audience research first.",
    "why": "Topic Clusters improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use topic clusters when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Topic Clusters means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Topic Clusters\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Sketch pillar + 4 cluster titles for email marketing topic.",
    "quiz": [
      {
        "question": "Pillar page covers…",
        "options": [
          "Broad topic",
          "Random meme",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      },
      {
        "question": "Clusters link…",
        "options": [
          "To pillar",
          "Nowhere",
          "Offsite only",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Goal is…",
        "options": [
          "Topical authority",
          "Hide site",
          "Stop blog",
          "Remove CTA"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "search-console",
    "title": "Google Search Console",
    "level": "intermediate",
    "order": 9,
    "minutes": 28,
    "summary": "Monitor queries, clicks, indexing issues, and sitemaps.",
    "definition": "**Google Search Console** is essential for modern marketers. Monitor queries, clicks, indexing issues, and sitemaps.\n\nIn real campaigns, teams use google search console to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align google search console with business goals and audience research first.",
    "why": "Google Search Console improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use google search console when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Google Search Console means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Google Search Console\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Find top query in Performance report.",
    "quiz": [
      {
        "question": "Search Console shows…",
        "options": [
          "Queries and clicks",
          "Payroll",
          "Video edits",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Coverage report…",
        "options": [
          "Indexing status",
          "Ad spend",
          "Email",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Use it to…",
        "options": [
          "Fix SEO issues",
          "Replace analytics",
          "Skip content",
          "Hide site"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "seo-audit",
    "title": "SEO Site Audit",
    "level": "advanced",
    "order": 10,
    "minutes": 32,
    "summary": "Checklist audit: technical, on-page, content gaps, links.",
    "definition": "**SEO Site Audit** is essential for modern marketers. Checklist audit: technical, on-page, content gaps, links.\n\nIn real campaigns, teams use seo site audit to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align seo site audit with business goals and audience research first.",
    "why": "SEO Site Audit improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use seo site audit when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what SEO Site Audit means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying SEO Site Audit\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Mini audit: 5 issues + priority fix.",
    "quiz": [
      {
        "question": "Audits find…",
        "options": [
          "Improvement areas",
          "Payroll",
          "DNS only",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Prioritize by…",
        "options": [
          "Impact and effort",
          "Random",
          "Logo color",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Re-audit…",
        "options": [
          "Quarterly",
          "Never",
          "Once per decade",
          "After deleting site"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "core-web-vitals",
    "title": "Core Web Vitals",
    "level": "advanced",
    "order": 11,
    "minutes": 30,
    "summary": "LCP, INP, CLS — user experience signals for search.",
    "definition": "**Core Web Vitals** is essential for modern marketers. LCP, INP, CLS — user experience signals for search.\n\nIn real campaigns, teams use core web vitals to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align core web vitals with business goals and audience research first.",
    "why": "Core Web Vitals improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use core web vitals when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Core Web Vitals means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Core Web Vitals\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Explain LCP in plain English for a client.",
    "quiz": [
      {
        "question": "LCP measures…",
        "options": [
          "Loading performance",
          "Email opens",
          "Payroll",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "CLS is…",
        "options": [
          "Layout shift",
          "Click rate",
          "DNS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Improve by…",
        "options": [
          "Optimizing images and JS",
          "Adding popups",
          "Huge videos",
          "Hidden text"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "seo-reporting",
    "title": "SEO Reporting",
    "level": "advanced",
    "order": 12,
    "minutes": 28,
    "summary": "Report rankings, traffic, conversions, and actions monthly.",
    "definition": "**SEO Reporting** is essential for modern marketers. Report rankings, traffic, conversions, and actions monthly.\n\nIn real campaigns, teams use seo reporting to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align seo reporting with business goals and audience research first.",
    "why": "SEO Reporting improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use seo reporting when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what SEO Reporting means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying SEO Reporting\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Draft SEO report outline with 4 sections.",
    "quiz": [
      {
        "question": "Reports should tie to…",
        "options": [
          "Business goals",
          "Random metrics",
          "Payroll",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Include…",
        "options": [
          "Actions next month",
          "Data only no plan",
          "Secrets",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Share with…",
        "options": [
          "Stakeholders",
          "Nobody",
          "Bots only",
          "DNS"
        ],
        "answer": 0
      }
    ]
  }
];

export const _seoLessons = specs.map((spec) => dmLesson("seo", spec));

export const seoLessons = applyAllDeepOverrides(_seoLessons, SEO_GENERATED, SEO_DEEP);
