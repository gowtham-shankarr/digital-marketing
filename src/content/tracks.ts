import type { Track } from "@/lib/types";
import { foundationsLessons } from "./lessons/foundations";
import { marketing_psychologyLessons } from "./lessons/marketing-psychology";
import { marketing_funnelsLessons } from "./lessons/marketing-funnels";
import { customer_researchLessons } from "./lessons/customer-research";
import { offer_pricingLessons } from "./lessons/offer-pricing";
import { website_croLessons } from "./lessons/website-cro";
import { seoLessons } from "./lessons/seo";
import { technical_seoLessons } from "./lessons/technical-seo";
import { aeo_geoLessons } from "./lessons/aeo-geo";
import { sem_ppcLessons } from "./lessons/sem-ppc";
import { content_marketingLessons } from "./lessons/content-marketing";
import { youtube_videoLessons } from "./lessons/youtube-video";
import { social_mediaLessons } from "./lessons/social-media";
import { linkedin_marketingLessons } from "./lessons/linkedin-marketing";
import { email_marketingLessons } from "./lessons/email-marketing";
import { automation_crmLessons } from "./lessons/automation-crm";
import { retention_lifecycleLessons } from "./lessons/retention-lifecycle";
import { cold_outreachLessons } from "./lessons/cold-outreach";
import { icp_list_buildingLessons } from "./lessons/icp-list-building";
import { analyticsLessons } from "./lessons/analytics";
import { distribution_growthLessons } from "./lessons/distribution-growth";
import { pr_digital_prLessons } from "./lessons/pr-digital-pr";
import { community_marketingLessons } from "./lessons/community-marketing";
import { ecommerce_dtcLessons } from "./lessons/ecommerce-dtc";
import { podcast_marketingLessons } from "./lessons/podcast-marketing";
import { pinterest_marketingLessons } from "./lessons/pinterest-marketing";
import { creative_designLessons } from "./lessons/creative-design";
import { other_channelsLessons } from "./lessons/other-channels";
import { competitor_intelLessons } from "./lessons/competitor-intel";
import { strategy_brandingLessons } from "./lessons/strategy-branding";
import { advanced_emergingLessons } from "./lessons/advanced-emerging";
import { legal_careerLessons } from "./lessons/legal-career";

export const trackMeta = [
  {
    "id": "foundations",
    "title": "Foundations",
    "description": "Digital marketing basics, media types, metrics, STP, personas, journey, goals, and OKRs.",
    "icon": "Rocket",
    "color": "bg-violet-500",
    "order": 0,
    "lessonCount": 11,
    "estimatedMinutes": 418
  },
  {
    "id": "marketing-psychology",
    "title": "Marketing Psychology & Persuasion",
    "description": "Cialdini principles, cognitive biases, behavioral triggers, and ethical persuasion.",
    "icon": "Brain",
    "color": "bg-violet-600",
    "order": 1,
    "lessonCount": 6,
    "estimatedMinutes": 228
  },
  {
    "id": "marketing-funnels",
    "title": "Marketing Funnels",
    "description": "Funnel stages, AIDA, AARRR, funnel types, lead magnets, nurturing, metrics, and optimization.",
    "icon": "Filter",
    "color": "bg-fuchsia-500",
    "order": 2,
    "lessonCount": 21,
    "estimatedMinutes": 798
  },
  {
    "id": "customer-research",
    "title": "Customer & Market Research",
    "description": "Interviews, surveys, review mining, Jobs-to-be-Done, and research-to-copy workflows.",
    "icon": "MessageSquare",
    "color": "bg-blue-600",
    "order": 3,
    "lessonCount": 6,
    "estimatedMinutes": 228
  },
  {
    "id": "offer-pricing",
    "title": "Offer Creation & Pricing Strategy",
    "description": "Value proposition, offer stacking, guarantees, urgency, and packaging for conversion.",
    "icon": "Tag",
    "color": "bg-rose-600",
    "order": 4,
    "lessonCount": 6,
    "estimatedMinutes": 228
  },
  {
    "id": "website-cro",
    "title": "Website, Landing Pages & CRO",
    "description": "Domains, CMS, UX, landing pages, CRO, testing, speed, mobile, forms, and trust signals.",
    "icon": "Layout",
    "color": "bg-cyan-500",
    "order": 5,
    "lessonCount": 10,
    "estimatedMinutes": 380
  },
  {
    "id": "seo",
    "title": "SEO",
    "description": "Crawling, keywords, on-page, technical, links, local, E-E-A-T, tools, and AI search.",
    "icon": "Search",
    "color": "bg-green-500",
    "order": 6,
    "lessonCount": 13,
    "estimatedMinutes": 494
  },
  {
    "id": "technical-seo",
    "title": "Technical SEO",
    "description": "Core Web Vitals, crawlability, schema, site architecture — standalone deep module.",
    "icon": "Wrench",
    "color": "bg-green-700",
    "order": 7,
    "lessonCount": 7,
    "estimatedMinutes": 266
  },
  {
    "id": "aeo-geo",
    "title": "AEO + GEO (AI Search)",
    "description": "Answer Engine and Generative Engine Optimization for snippets, AI Overviews, and citations.",
    "icon": "Bot",
    "color": "bg-blue-600",
    "order": 8,
    "lessonCount": 6,
    "estimatedMinutes": 228
  },
  {
    "id": "sem-ppc",
    "title": "SEM / PPC",
    "description": "Google Ads, campaign types, Bing, bidding, Quality Score, structure, tracking, remarketing.",
    "icon": "DollarSign",
    "color": "bg-orange-500",
    "order": 9,
    "lessonCount": 14,
    "estimatedMinutes": 532
  },
  {
    "id": "content-marketing",
    "title": "Content Marketing",
    "description": "Strategy, formats, copywriting, calendar, distribution, repurposing, and measurement.",
    "icon": "FileText",
    "color": "bg-amber-500",
    "order": 10,
    "lessonCount": 11,
    "estimatedMinutes": 418
  },
  {
    "id": "youtube-video",
    "title": "YouTube & Video Marketing",
    "description": "Channel strategy, YouTube SEO, Shorts, scripts, thumbnails, and video funnel integration.",
    "icon": "Youtube",
    "color": "bg-red-600",
    "order": 11,
    "lessonCount": 8,
    "estimatedMinutes": 304
  },
  {
    "id": "social-media",
    "title": "Social Media Marketing",
    "description": "Platforms, organic, paid social, calendar, community, listening, UGC, and social commerce.",
    "icon": "Share2",
    "color": "bg-sky-500",
    "order": 12,
    "lessonCount": 19,
    "estimatedMinutes": 722
  },
  {
    "id": "linkedin-marketing",
    "title": "LinkedIn Marketing",
    "description": "Personal brand, company page, newsletters, DMs, and LinkedIn Ads for B2B.",
    "icon": "Linkedin",
    "color": "bg-sky-700",
    "order": 13,
    "lessonCount": 9,
    "estimatedMinutes": 355
  },
  {
    "id": "email-marketing",
    "title": "Email Marketing",
    "description": "List building, segmentation, email types, automation, deliverability, metrics, tools, compliance.",
    "icon": "Mail",
    "color": "bg-indigo-500",
    "order": 14,
    "lessonCount": 11,
    "estimatedMinutes": 418
  },
  {
    "id": "automation-crm",
    "title": "Marketing Automation & CRM",
    "description": "Automation, lead scoring, MQL/SQL, workflows, CRM integration, nurture campaigns, platforms.",
    "icon": "Workflow",
    "color": "bg-purple-500",
    "order": 15,
    "lessonCount": 7,
    "estimatedMinutes": 266
  },
  {
    "id": "retention-lifecycle",
    "title": "Retention, Loyalty & Lifecycle Marketing",
    "description": "Onboarding, activation, churn reduction, win-back, loyalty, and expansion revenue.",
    "icon": "Heart",
    "color": "bg-pink-600",
    "order": 16,
    "lessonCount": 6,
    "estimatedMinutes": 228
  },
  {
    "id": "cold-outreach",
    "title": "Cold Outreach",
    "description": "B2B cold email, LinkedIn sequences, personalization, deliverability, reply handling.",
    "icon": "Send",
    "color": "bg-orange-600",
    "order": 17,
    "lessonCount": 8,
    "estimatedMinutes": 304
  },
  {
    "id": "icp-list-building",
    "title": "B2B ICP & List Building",
    "description": "RevGrowth 7-step protocol: TAM, AI research, scraping, waterfall enrichment, lead scoring.",
    "icon": "Users",
    "color": "bg-teal-600",
    "order": 18,
    "lessonCount": 8,
    "estimatedMinutes": 312
  },
  {
    "id": "analytics",
    "title": "Analytics & Measurement",
    "description": "GA4, GTM, UTMs, dashboards, attribution, reporting, conversion tracking, data decisions.",
    "icon": "BarChart3",
    "color": "bg-emerald-500",
    "order": 19,
    "lessonCount": 8,
    "estimatedMinutes": 304
  },
  {
    "id": "distribution-growth",
    "title": "Distribution & Growth Moat",
    "description": "20 distribution principles, 9 growth engines, PLG, referrals, and platform arbitrage.",
    "icon": "TrendingUp",
    "color": "bg-lime-600",
    "order": 20,
    "lessonCount": 14,
    "estimatedMinutes": 543
  },
  {
    "id": "pr-digital-pr",
    "title": "PR & Digital PR",
    "description": "Press, HARO, journalist outreach, digital PR for links and authority.",
    "icon": "Newspaper",
    "color": "bg-stone-600",
    "order": 21,
    "lessonCount": 7,
    "estimatedMinutes": 266
  },
  {
    "id": "community-marketing",
    "title": "Community Marketing",
    "description": "Build Slack, Discord, Circle communities — engagement loops and monetization.",
    "icon": "UsersRound",
    "color": "bg-violet-600",
    "order": 22,
    "lessonCount": 7,
    "estimatedMinutes": 266
  },
  {
    "id": "ecommerce-dtc",
    "title": "Ecommerce & DTC Marketing",
    "description": "DTC stack, product pages, ROAS, email flows, cart abandonment.",
    "icon": "ShoppingCart",
    "color": "bg-red-600",
    "order": 23,
    "lessonCount": 9,
    "estimatedMinutes": 342
  },
  {
    "id": "podcast-marketing",
    "title": "Podcast Marketing",
    "description": "Launch, grow, guest strategy, SEO, brand building with audio.",
    "icon": "Mic",
    "color": "bg-purple-600",
    "order": 24,
    "lessonCount": 8,
    "estimatedMinutes": 304
  },
  {
    "id": "pinterest-marketing",
    "title": "Pinterest Marketing",
    "description": "Pins, boards, SEO, shopping, evergreen traffic for DTC and content.",
    "icon": "Pin",
    "color": "bg-rose-600",
    "order": 25,
    "lessonCount": 6,
    "estimatedMinutes": 228
  },
  {
    "id": "creative-design",
    "title": "Creative & Design Skills",
    "description": "Canva basics, layout and color, visual content, and AI image/video tools for marketers.",
    "icon": "Palette",
    "color": "bg-amber-600",
    "order": 26,
    "lessonCount": 6,
    "estimatedMinutes": 228
  },
  {
    "id": "other-channels",
    "title": "Other Channels & Specializations",
    "description": "Affiliate, influencer, video, mobile, SMS, push, e-commerce, programmatic, native ads.",
    "icon": "Radio",
    "color": "bg-pink-500",
    "order": 27,
    "lessonCount": 10,
    "estimatedMinutes": 380
  },
  {
    "id": "competitor-intel",
    "title": "Competitor Intelligence",
    "description": "5-step research, SWOT, gap analysis, tool stack.",
    "icon": "Search",
    "color": "bg-amber-700",
    "order": 28,
    "lessonCount": 5,
    "estimatedMinutes": 190
  },
  {
    "id": "strategy-branding",
    "title": "Strategy, Branding & Planning",
    "description": "End-to-end strategy, brand voice, competitive analysis, budgeting, integrated campaigns.",
    "icon": "Compass",
    "color": "bg-rose-500",
    "order": 29,
    "lessonCount": 8,
    "estimatedMinutes": 304
  },
  {
    "id": "advanced-emerging",
    "title": "Advanced & Emerging Topics",
    "description": "AI in marketing, ABM, growth hacking, chatbots, personalization, privacy, Web3.",
    "icon": "Sparkles",
    "color": "bg-yellow-500",
    "order": 30,
    "lessonCount": 8,
    "estimatedMinutes": 304
  },
  {
    "id": "legal-career",
    "title": "Legal, Ethics & Career",
    "description": "Privacy laws, ad standards, ethics, certifications, portfolio, career paths.",
    "icon": "GraduationCap",
    "color": "bg-slate-500",
    "order": 31,
    "lessonCount": 7,
    "estimatedMinutes": 270
  }
] as const;

export const tracks: Track[] = [
  { id: "foundations", title: "Foundations", description: "Digital marketing basics, media types, metrics, STP, personas, journey, goals, and OKRs.", icon: "Rocket", color: "bg-violet-500", order: 0, lessons: foundationsLessons },
  { id: "marketing-psychology", title: "Marketing Psychology & Persuasion", description: "Cialdini principles, cognitive biases, behavioral triggers, and ethical persuasion.", icon: "Brain", color: "bg-violet-600", order: 1, lessons: marketing_psychologyLessons },
  { id: "marketing-funnels", title: "Marketing Funnels", description: "Funnel stages, AIDA, AARRR, funnel types, lead magnets, nurturing, metrics, and optimization.", icon: "Filter", color: "bg-fuchsia-500", order: 2, lessons: marketing_funnelsLessons },
  { id: "customer-research", title: "Customer & Market Research", description: "Interviews, surveys, review mining, Jobs-to-be-Done, and research-to-copy workflows.", icon: "MessageSquare", color: "bg-blue-600", order: 3, lessons: customer_researchLessons },
  { id: "offer-pricing", title: "Offer Creation & Pricing Strategy", description: "Value proposition, offer stacking, guarantees, urgency, and packaging for conversion.", icon: "Tag", color: "bg-rose-600", order: 4, lessons: offer_pricingLessons },
  { id: "website-cro", title: "Website, Landing Pages & CRO", description: "Domains, CMS, UX, landing pages, CRO, testing, speed, mobile, forms, and trust signals.", icon: "Layout", color: "bg-cyan-500", order: 5, lessons: website_croLessons },
  { id: "seo", title: "SEO", description: "Crawling, keywords, on-page, technical, links, local, E-E-A-T, tools, and AI search.", icon: "Search", color: "bg-green-500", order: 6, lessons: seoLessons },
  { id: "technical-seo", title: "Technical SEO", description: "Core Web Vitals, crawlability, schema, site architecture — standalone deep module.", icon: "Wrench", color: "bg-green-700", order: 7, lessons: technical_seoLessons },
  { id: "aeo-geo", title: "AEO + GEO (AI Search)", description: "Answer Engine and Generative Engine Optimization for snippets, AI Overviews, and citations.", icon: "Bot", color: "bg-blue-600", order: 8, lessons: aeo_geoLessons },
  { id: "sem-ppc", title: "SEM / PPC", description: "Google Ads, campaign types, Bing, bidding, Quality Score, structure, tracking, remarketing.", icon: "DollarSign", color: "bg-orange-500", order: 9, lessons: sem_ppcLessons },
  { id: "content-marketing", title: "Content Marketing", description: "Strategy, formats, copywriting, calendar, distribution, repurposing, and measurement.", icon: "FileText", color: "bg-amber-500", order: 10, lessons: content_marketingLessons },
  { id: "youtube-video", title: "YouTube & Video Marketing", description: "Channel strategy, YouTube SEO, Shorts, scripts, thumbnails, and video funnel integration.", icon: "Youtube", color: "bg-red-600", order: 11, lessons: youtube_videoLessons },
  { id: "social-media", title: "Social Media Marketing", description: "Platforms, organic, paid social, calendar, community, listening, UGC, and social commerce.", icon: "Share2", color: "bg-sky-500", order: 12, lessons: social_mediaLessons },
  { id: "linkedin-marketing", title: "LinkedIn Marketing", description: "Personal brand, company page, newsletters, DMs, and LinkedIn Ads for B2B.", icon: "Linkedin", color: "bg-sky-700", order: 13, lessons: linkedin_marketingLessons },
  { id: "email-marketing", title: "Email Marketing", description: "List building, segmentation, email types, automation, deliverability, metrics, tools, compliance.", icon: "Mail", color: "bg-indigo-500", order: 14, lessons: email_marketingLessons },
  { id: "automation-crm", title: "Marketing Automation & CRM", description: "Automation, lead scoring, MQL/SQL, workflows, CRM integration, nurture campaigns, platforms.", icon: "Workflow", color: "bg-purple-500", order: 15, lessons: automation_crmLessons },
  { id: "retention-lifecycle", title: "Retention, Loyalty & Lifecycle Marketing", description: "Onboarding, activation, churn reduction, win-back, loyalty, and expansion revenue.", icon: "Heart", color: "bg-pink-600", order: 16, lessons: retention_lifecycleLessons },
  { id: "cold-outreach", title: "Cold Outreach", description: "B2B cold email, LinkedIn sequences, personalization, deliverability, reply handling.", icon: "Send", color: "bg-orange-600", order: 17, lessons: cold_outreachLessons },
  { id: "icp-list-building", title: "B2B ICP & List Building", description: "RevGrowth 7-step protocol: TAM, AI research, scraping, waterfall enrichment, lead scoring.", icon: "Users", color: "bg-teal-600", order: 18, lessons: icp_list_buildingLessons },
  { id: "analytics", title: "Analytics & Measurement", description: "GA4, GTM, UTMs, dashboards, attribution, reporting, conversion tracking, data decisions.", icon: "BarChart3", color: "bg-emerald-500", order: 19, lessons: analyticsLessons },
  { id: "distribution-growth", title: "Distribution & Growth Moat", description: "20 distribution principles, 9 growth engines, PLG, referrals, and platform arbitrage.", icon: "TrendingUp", color: "bg-lime-600", order: 20, lessons: distribution_growthLessons },
  { id: "pr-digital-pr", title: "PR & Digital PR", description: "Press, HARO, journalist outreach, digital PR for links and authority.", icon: "Newspaper", color: "bg-stone-600", order: 21, lessons: pr_digital_prLessons },
  { id: "community-marketing", title: "Community Marketing", description: "Build Slack, Discord, Circle communities — engagement loops and monetization.", icon: "UsersRound", color: "bg-violet-600", order: 22, lessons: community_marketingLessons },
  { id: "ecommerce-dtc", title: "Ecommerce & DTC Marketing", description: "DTC stack, product pages, ROAS, email flows, cart abandonment.", icon: "ShoppingCart", color: "bg-red-600", order: 23, lessons: ecommerce_dtcLessons },
  { id: "podcast-marketing", title: "Podcast Marketing", description: "Launch, grow, guest strategy, SEO, brand building with audio.", icon: "Mic", color: "bg-purple-600", order: 24, lessons: podcast_marketingLessons },
  { id: "pinterest-marketing", title: "Pinterest Marketing", description: "Pins, boards, SEO, shopping, evergreen traffic for DTC and content.", icon: "Pin", color: "bg-rose-600", order: 25, lessons: pinterest_marketingLessons },
  { id: "creative-design", title: "Creative & Design Skills", description: "Canva basics, layout and color, visual content, and AI image/video tools for marketers.", icon: "Palette", color: "bg-amber-600", order: 26, lessons: creative_designLessons },
  { id: "other-channels", title: "Other Channels & Specializations", description: "Affiliate, influencer, video, mobile, SMS, push, e-commerce, programmatic, native ads.", icon: "Radio", color: "bg-pink-500", order: 27, lessons: other_channelsLessons },
  { id: "competitor-intel", title: "Competitor Intelligence", description: "5-step research, SWOT, gap analysis, tool stack.", icon: "Search", color: "bg-amber-700", order: 28, lessons: competitor_intelLessons },
  { id: "strategy-branding", title: "Strategy, Branding & Planning", description: "End-to-end strategy, brand voice, competitive analysis, budgeting, integrated campaigns.", icon: "Compass", color: "bg-rose-500", order: 29, lessons: strategy_brandingLessons },
  { id: "advanced-emerging", title: "Advanced & Emerging Topics", description: "AI in marketing, ABM, growth hacking, chatbots, personalization, privacy, Web3.", icon: "Sparkles", color: "bg-yellow-500", order: 30, lessons: advanced_emergingLessons },
  { id: "legal-career", title: "Legal, Ethics & Career", description: "Privacy laws, ad standards, ethics, certifications, portfolio, career paths.", icon: "GraduationCap", color: "bg-slate-500", order: 31, lessons: legal_careerLessons },
];

export function getTrack(id: string) { return tracks.find((t) => t.id === id); }
export function getLesson(trackId: string, slug: string) { return getTrack(trackId)?.lessons.find((l) => l.slug === slug); }
export function getAllLessons() { return tracks.flatMap((t) => t.lessons.map((l) => ({ ...l, trackTitle: t.title }))); }
export { getPathAdjacentLessons as getAdjacentLessons } from "./learning-path-nav";
