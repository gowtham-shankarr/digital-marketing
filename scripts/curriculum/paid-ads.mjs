import { dmLesson } from "./dm-lesson-builder.mjs";
import { applyAllDeepOverrides } from "./deep-content/merge.mjs";
import { PAID_ADS_GENERATED } from "./deep-content/generated/paid-ads.mjs";
import { PAID_ADS_DEEP } from "./paid-ads-deep/index.mjs";

const specs = [
  {
    "slug": "paid-ads-intro",
    "title": "Introduction to Paid Ads",
    "level": "base",
    "order": 1,
    "minutes": 28,
    "summary": "Pay for placement — search, social, display — with targeting and measurement.",
    "definition": "**Introduction to Paid Ads** is essential for modern marketers. Pay for placement — search, social, display — with targeting and measurement.\n\nIn real campaigns, teams use introduction to paid ads to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align introduction to paid ads with business goals and audience research first.",
    "why": "Introduction to Paid Ads improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use introduction to paid ads when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Introduction to Paid Ads means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Introduction to Paid Ads\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "List 3 ad types you see daily and platform.",
    "quiz": [
      {
        "question": "Paid ads buy…",
        "options": [
          "Targeted reach",
          "Organic SEO",
          "Email only",
          "DNS"
        ],
        "answer": 0
      },
      {
        "question": "Main platforms…",
        "options": [
          "Google and Meta",
          "Print only",
          "CSS",
          "Payroll"
        ],
        "answer": 0
      },
      {
        "question": "Start with…",
        "options": [
          "Clear goal and landing page",
          "No budget cap",
          "Random",
          "Fonts"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "google-ads-search",
    "title": "Google Search Ads",
    "level": "base",
    "order": 2,
    "minutes": 30,
    "summary": "Keyword bidding, ad copy, extensions, Quality Score basics.",
    "definition": "**Google Search Ads** is essential for modern marketers. Keyword bidding, ad copy, extensions, Quality Score basics.\n\nIn real campaigns, teams use google search ads to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align google search ads with business goals and audience research first.",
    "why": "Google Search Ads improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use google search ads when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Google Search Ads means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Google Search Ads\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Draft RSA headlines for plumber local service.",
    "quiz": [
      {
        "question": "Search ads appear…",
        "options": [
          "On search results",
          "Only email",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Quality Score affects…",
        "options": [
          "Cost and position",
          "Fonts",
          "Tax",
          "Payroll"
        ],
        "answer": 0
      },
      {
        "question": "Extensions…",
        "options": [
          "Extra links/info",
          "Hide CTA",
          "Spam",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "google-ads-display",
    "title": "Google Display Ads",
    "level": "base",
    "order": 3,
    "minutes": 28,
    "summary": "Banner remarketing, audiences, brand awareness campaigns.",
    "definition": "**Google Display Ads** is essential for modern marketers. Banner remarketing, audiences, brand awareness campaigns.\n\nIn real campaigns, teams use google display ads to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align google display ads with business goals and audience research first.",
    "why": "Google Display Ads improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use google display ads when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Google Display Ads means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Google Display Ads\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Sketch display ad message for remarketing cart.",
    "quiz": [
      {
        "question": "Display is good for…",
        "options": [
          "Awareness/remarketing",
          "Only cold search",
          "DNS",
          "Payroll"
        ],
        "answer": 0
      },
      {
        "question": "Remarketing shows…",
        "options": [
          "Ads to past visitors",
          "Random",
          "CSS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Creative needs…",
        "options": [
          "Clear brand",
          "Tiny text",
          "Hidden",
          "Tax"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "meta-ads-basics",
    "title": "Meta Ads Manager Basics",
    "level": "base",
    "order": 4,
    "minutes": 30,
    "summary": "Campaign, ad set, ad hierarchy — objectives, audiences, placements.",
    "definition": "**Meta Ads Manager Basics** is essential for modern marketers. Campaign, ad set, ad hierarchy — objectives, audiences, placements.\n\nIn real campaigns, teams use meta ads manager basics to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align meta ads manager basics with business goals and audience research first.",
    "why": "Meta Ads Manager Basics improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use meta ads manager basics when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Meta Ads Manager Basics means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Meta Ads Manager Basics\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Outline campaign for webinar: objective, audience, budget.",
    "quiz": [
      {
        "question": "Meta hierarchy…",
        "options": [
          "Campaign > ad set > ad",
          "One button",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Ad set controls…",
        "options": [
          "Audience and budget",
          "Only fonts",
          "Payroll",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Objective picks…",
        "options": [
          "Optimization goal",
          "Random",
          "Hidden",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "ad-targeting",
    "title": "Audience Targeting",
    "level": "intermediate",
    "order": 5,
    "minutes": 30,
    "summary": "Demographics, interests, lookalikes, custom audiences from pixel.",
    "definition": "**Audience Targeting** is essential for modern marketers. Demographics, interests, lookalikes, custom audiences from pixel.\n\nIn real campaigns, teams use audience targeting to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align audience targeting with business goals and audience research first.",
    "why": "Audience Targeting improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use audience targeting when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Audience Targeting means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Audience Targeting\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Define custom audience for site visitors 30 days.",
    "quiz": [
      {
        "question": "Lookalike finds…",
        "options": [
          "Similar users",
          "Competitors staff",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Pixel tracks…",
        "options": [
          "Site behavior",
          "Email content",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Too narrow audience…",
        "options": [
          "Limits delivery",
          "Always best",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "ad-creative",
    "title": "Ad Creative Best Practices",
    "level": "intermediate",
    "order": 6,
    "minutes": 28,
    "summary": "Thumb-stopping visuals, clear offer, social proof, mobile safe zones.",
    "definition": "**Ad Creative Best Practices** is essential for modern marketers. Thumb-stopping visuals, clear offer, social proof, mobile safe zones.\n\nIn real campaigns, teams use ad creative best practices to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align ad creative best practices with business goals and audience research first.",
    "why": "Ad Creative Best Practices improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use ad creative best practices when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Ad Creative Best Practices means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Ad Creative Best Practices\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Storyboard 15-sec video ad: problem → solution → CTA.",
    "quiz": [
      {
        "question": "Creative tests…",
        "options": [
          "Multiple variants",
          "One forever",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Offer should be…",
        "options": [
          "Clear",
          "Hidden",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Social proof…",
        "options": [
          "Builds trust",
          "Spam",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "landing-pages-ads",
    "title": "Landing Pages for Ads",
    "level": "intermediate",
    "order": 7,
    "minutes": 28,
    "summary": "Message match, fast load, single CTA, trust signals.",
    "definition": "**Landing Pages for Ads** is essential for modern marketers. Message match, fast load, single CTA, trust signals.\n\nIn real campaigns, teams use landing pages for ads to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align landing pages for ads with business goals and audience research first.",
    "why": "Landing Pages for Ads improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use landing pages for ads when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Landing Pages for Ads means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Landing Pages for Ads\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Score landing page vs ad promise 1-5.",
    "quiz": [
      {
        "question": "Message match means…",
        "options": [
          "Ad promise on page",
          "Different offer",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Single CTA…",
        "options": [
          "Focuses conversion",
          "Twenty buttons",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Slow page…",
        "options": [
          "Wastes ad spend",
          "Improves ROAS",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "ad-budget-bidding",
    "title": "Budget & Bidding",
    "level": "intermediate",
    "order": 8,
    "minutes": 28,
    "summary": "Daily budget, lifetime, CPC, CPM, manual vs automated bidding.",
    "definition": "**Budget & Bidding** is essential for modern marketers. Daily budget, lifetime, CPC, CPM, manual vs automated bidding.\n\nIn real campaigns, teams use budget & bidding to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align budget & bidding with business goals and audience research first.",
    "why": "Budget & Bidding improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use budget & bidding when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Budget & Bidding means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Budget & Bidding\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Plan $300/month split across 2 campaigns.",
    "quiz": [
      {
        "question": "Daily budget caps…",
        "options": [
          "Spend per day",
          "Total forever",
          "DNS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "CPC is…",
        "options": [
          "Cost per click",
          "Cost per coffee",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Automated bidding…",
        "options": [
          "Uses platform ML",
          "Random",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "roas-cpa",
    "title": "ROAS & CPA",
    "level": "intermediate",
    "order": 9,
    "minutes": 28,
    "summary": "Return on ad spend and cost per acquisition — profitability math.",
    "definition": "**ROAS & CPA** is essential for modern marketers. Return on ad spend and cost per acquisition — profitability math.\n\nIn real campaigns, teams use roas & cpa to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align roas & cpa with business goals and audience research first.",
    "why": "ROAS & CPA improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use roas & cpa when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what ROAS & CPA means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying ROAS & CPA\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Calculate ROAS from $500 spend and $2000 revenue.",
    "quiz": [
      {
        "question": "ROAS formula…",
        "options": [
          "Revenue / ad spend",
          "Clicks / opens",
          "DNS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "CPA is…",
        "options": [
          "Cost per acquisition",
          "Cost per article",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Track conversions with…",
        "options": [
          "Pixel + events",
          "Guessing",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "ab-testing-ads",
    "title": "A/B Testing Ads",
    "level": "intermediate",
    "order": 10,
    "minutes": 28,
    "summary": "Test one variable, statistical patience, document winners.",
    "definition": "**A/B Testing Ads** is essential for modern marketers. Test one variable, statistical patience, document winners.\n\nIn real campaigns, teams use a/b testing ads to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align a/b testing ads with business goals and audience research first.",
    "why": "A/B Testing Ads improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use a/b testing ads when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what A/B Testing Ads means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying A/B Testing Ads\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Plan A/B test: hypothesis, variable, success metric.",
    "quiz": [
      {
        "question": "Test one…",
        "options": [
          "Variable at a time",
          "Everything",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Need enough…",
        "options": [
          "Data volume",
          "One click",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Document…",
        "options": [
          "Learnings",
          "Nothing",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "retargeting",
    "title": "Retargeting Campaigns",
    "level": "advanced",
    "order": 11,
    "minutes": 30,
    "summary": "Funnel retargeting — viewed product, abandoned cart, past purchasers.",
    "definition": "**Retargeting Campaigns** is essential for modern marketers. Funnel retargeting — viewed product, abandoned cart, past purchasers.\n\nIn real campaigns, teams use retargeting campaigns to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align retargeting campaigns with business goals and audience research first.",
    "why": "Retargeting Campaigns improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use retargeting campaigns when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Retargeting Campaigns means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Retargeting Campaigns\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "3-tier retargeting audiences with message each.",
    "quiz": [
      {
        "question": "Retargeting reaches…",
        "options": [
          "Past visitors",
          "Cold only",
          "DNS",
          "CSS"
        ],
        "answer": 0
      },
      {
        "question": "Frequency cap…",
        "options": [
          "Prevents fatigue",
          "Spam more",
          "Fonts",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Exclude…",
        "options": [
          "Recent converters when needed",
          "Everyone",
          "Payroll",
          "DNS"
        ],
        "answer": 0
      }
    ]
  },
  {
    "slug": "ads-reporting",
    "title": "Paid Ads Reporting",
    "level": "advanced",
    "order": 12,
    "minutes": 28,
    "summary": "Weekly report: spend, impressions, CTR, conversions, recommendations.",
    "definition": "**Paid Ads Reporting** is essential for modern marketers. Weekly report: spend, impressions, CTR, conversions, recommendations.\n\nIn real campaigns, teams use paid ads reporting to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align paid ads reporting with business goals and audience research first.",
    "why": "Paid Ads Reporting improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.",
    "when": "Use paid ads reporting when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.",
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
      "Understand what Paid Ads Reporting means in plain English",
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident"
    ],
    "mistakes": "1. **Skipping audience research** before applying Paid Ads Reporting\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration",
    "practice": "Sample weekly Google Ads report bullet list.",
    "quiz": [
      {
        "question": "Reports tie to…",
        "options": [
          "Business KPIs",
          "Vanity only",
          "DNS",
          "Fonts"
        ],
        "answer": 0
      },
      {
        "question": "Include…",
        "options": [
          "Next actions",
          "Data dump only",
          "CSS",
          "Tax"
        ],
        "answer": 0
      },
      {
        "question": "Compare…",
        "options": [
          "Period over period",
          "Never",
          "Random",
          "Payroll"
        ],
        "answer": 0
      }
    ]
  }
];

export const _paid_adsLessons = specs.map((spec) => dmLesson("paid-ads", spec));

export const paid_adsLessons = applyAllDeepOverrides(_paid_adsLessons, PAID_ADS_GENERATED, PAID_ADS_DEEP);
