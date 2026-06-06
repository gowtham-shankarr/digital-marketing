import type { Track } from "@/lib/types";
import { foundationsLessons } from "./lessons/foundations";
import { marketing_funnelsLessons } from "./lessons/marketing-funnels";
import { website_croLessons } from "./lessons/website-cro";
import { seoLessons } from "./lessons/seo";
import { sem_ppcLessons } from "./lessons/sem-ppc";
import { content_marketingLessons } from "./lessons/content-marketing";
import { social_mediaLessons } from "./lessons/social-media";
import { email_marketingLessons } from "./lessons/email-marketing";
import { automation_crmLessons } from "./lessons/automation-crm";
import { analyticsLessons } from "./lessons/analytics";
import { other_channelsLessons } from "./lessons/other-channels";
import { strategy_brandingLessons } from "./lessons/strategy-branding";
import { advanced_emergingLessons } from "./lessons/advanced-emerging";
import { legal_careerLessons } from "./lessons/legal-career";

export const trackMeta = [
  {
    "id": "foundations",
    "title": "Module 1 — Foundations",
    "description": "Digital marketing basics, media types, metrics, STP, personas, journey, goals, and OKRs.",
    "icon": "Rocket",
    "color": "bg-violet-500",
    "order": 0,
    "lessonCount": 11,
    "estimatedMinutes": 427
  },
  {
    "id": "marketing-funnels",
    "title": "Module 2 — Marketing Funnels",
    "description": "Funnel stages, AIDA, AARRR, funnel types, lead magnets, nurturing, metrics, and optimization.",
    "icon": "Filter",
    "color": "bg-fuchsia-500",
    "order": 1,
    "lessonCount": 19,
    "estimatedMinutes": 722
  },
  {
    "id": "website-cro",
    "title": "Module 3 — Website, Landing Pages & CRO",
    "description": "Domains, CMS, UX, landing pages, CRO, testing, speed, mobile, forms, and trust signals.",
    "icon": "Layout",
    "color": "bg-cyan-500",
    "order": 2,
    "lessonCount": 10,
    "estimatedMinutes": 380
  },
  {
    "id": "seo",
    "title": "Module 4 — SEO",
    "description": "Crawling, keywords, on-page, technical, links, local, E-E-A-T, tools, and AI search.",
    "icon": "Search",
    "color": "bg-green-500",
    "order": 3,
    "lessonCount": 13,
    "estimatedMinutes": 494
  },
  {
    "id": "sem-ppc",
    "title": "Module 5 — SEM / PPC",
    "description": "Google Ads, campaign types, Bing, bidding, Quality Score, structure, tracking, remarketing.",
    "icon": "DollarSign",
    "color": "bg-orange-500",
    "order": 4,
    "lessonCount": 14,
    "estimatedMinutes": 532
  },
  {
    "id": "content-marketing",
    "title": "Module 6 — Content Marketing",
    "description": "Strategy, formats, copywriting, calendar, distribution, repurposing, and measurement.",
    "icon": "FileText",
    "color": "bg-amber-500",
    "order": 5,
    "lessonCount": 10,
    "estimatedMinutes": 380
  },
  {
    "id": "social-media",
    "title": "Module 7 — Social Media Marketing",
    "description": "Platforms, organic, paid social, calendar, community, listening, UGC, and social commerce.",
    "icon": "Share2",
    "color": "bg-sky-500",
    "order": 6,
    "lessonCount": 14,
    "estimatedMinutes": 532
  },
  {
    "id": "email-marketing",
    "title": "Module 8 — Email Marketing",
    "description": "List building, segmentation, email types, automation, deliverability, metrics, tools, compliance.",
    "icon": "Mail",
    "color": "bg-indigo-500",
    "order": 7,
    "lessonCount": 11,
    "estimatedMinutes": 418
  },
  {
    "id": "automation-crm",
    "title": "Module 9 — Marketing Automation & CRM",
    "description": "Automation, lead scoring, MQL/SQL, workflows, CRM integration, nurture campaigns, platforms.",
    "icon": "Workflow",
    "color": "bg-purple-500",
    "order": 8,
    "lessonCount": 7,
    "estimatedMinutes": 266
  },
  {
    "id": "analytics",
    "title": "Module 10 — Analytics & Measurement",
    "description": "GA4, GTM, UTMs, dashboards, attribution, reporting, conversion tracking, data decisions.",
    "icon": "BarChart3",
    "color": "bg-emerald-500",
    "order": 9,
    "lessonCount": 8,
    "estimatedMinutes": 304
  },
  {
    "id": "other-channels",
    "title": "Module 11 — Other Channels & Specializations",
    "description": "Affiliate, influencer, video, mobile, SMS, push, e-commerce, programmatic, native ads.",
    "icon": "Radio",
    "color": "bg-pink-500",
    "order": 10,
    "lessonCount": 10,
    "estimatedMinutes": 380
  },
  {
    "id": "strategy-branding",
    "title": "Module 12 — Strategy, Branding & Planning",
    "description": "End-to-end strategy, brand voice, competitive analysis, budgeting, integrated campaigns.",
    "icon": "Compass",
    "color": "bg-rose-500",
    "order": 11,
    "lessonCount": 6,
    "estimatedMinutes": 228
  },
  {
    "id": "advanced-emerging",
    "title": "Module 13 — Advanced & Emerging Topics",
    "description": "AI in marketing, ABM, growth hacking, chatbots, personalization, privacy, Web3.",
    "icon": "Sparkles",
    "color": "bg-yellow-500",
    "order": 12,
    "lessonCount": 7,
    "estimatedMinutes": 266
  },
  {
    "id": "legal-career",
    "title": "Module 14 — Legal, Ethics & Career",
    "description": "Privacy laws, ad standards, ethics, certifications, portfolio, career paths.",
    "icon": "GraduationCap",
    "color": "bg-slate-500",
    "order": 13,
    "lessonCount": 7,
    "estimatedMinutes": 270
  }
] as const;

export const tracks: Track[] = [
  { id: "foundations", title: "Module 1 — Foundations", description: "Digital marketing basics, media types, metrics, STP, personas, journey, goals, and OKRs.", icon: "Rocket", color: "bg-violet-500", order: 0, lessons: foundationsLessons },
  { id: "marketing-funnels", title: "Module 2 — Marketing Funnels", description: "Funnel stages, AIDA, AARRR, funnel types, lead magnets, nurturing, metrics, and optimization.", icon: "Filter", color: "bg-fuchsia-500", order: 1, lessons: marketing_funnelsLessons },
  { id: "website-cro", title: "Module 3 — Website, Landing Pages & CRO", description: "Domains, CMS, UX, landing pages, CRO, testing, speed, mobile, forms, and trust signals.", icon: "Layout", color: "bg-cyan-500", order: 2, lessons: website_croLessons },
  { id: "seo", title: "Module 4 — SEO", description: "Crawling, keywords, on-page, technical, links, local, E-E-A-T, tools, and AI search.", icon: "Search", color: "bg-green-500", order: 3, lessons: seoLessons },
  { id: "sem-ppc", title: "Module 5 — SEM / PPC", description: "Google Ads, campaign types, Bing, bidding, Quality Score, structure, tracking, remarketing.", icon: "DollarSign", color: "bg-orange-500", order: 4, lessons: sem_ppcLessons },
  { id: "content-marketing", title: "Module 6 — Content Marketing", description: "Strategy, formats, copywriting, calendar, distribution, repurposing, and measurement.", icon: "FileText", color: "bg-amber-500", order: 5, lessons: content_marketingLessons },
  { id: "social-media", title: "Module 7 — Social Media Marketing", description: "Platforms, organic, paid social, calendar, community, listening, UGC, and social commerce.", icon: "Share2", color: "bg-sky-500", order: 6, lessons: social_mediaLessons },
  { id: "email-marketing", title: "Module 8 — Email Marketing", description: "List building, segmentation, email types, automation, deliverability, metrics, tools, compliance.", icon: "Mail", color: "bg-indigo-500", order: 7, lessons: email_marketingLessons },
  { id: "automation-crm", title: "Module 9 — Marketing Automation & CRM", description: "Automation, lead scoring, MQL/SQL, workflows, CRM integration, nurture campaigns, platforms.", icon: "Workflow", color: "bg-purple-500", order: 8, lessons: automation_crmLessons },
  { id: "analytics", title: "Module 10 — Analytics & Measurement", description: "GA4, GTM, UTMs, dashboards, attribution, reporting, conversion tracking, data decisions.", icon: "BarChart3", color: "bg-emerald-500", order: 9, lessons: analyticsLessons },
  { id: "other-channels", title: "Module 11 — Other Channels & Specializations", description: "Affiliate, influencer, video, mobile, SMS, push, e-commerce, programmatic, native ads.", icon: "Radio", color: "bg-pink-500", order: 10, lessons: other_channelsLessons },
  { id: "strategy-branding", title: "Module 12 — Strategy, Branding & Planning", description: "End-to-end strategy, brand voice, competitive analysis, budgeting, integrated campaigns.", icon: "Compass", color: "bg-rose-500", order: 11, lessons: strategy_brandingLessons },
  { id: "advanced-emerging", title: "Module 13 — Advanced & Emerging Topics", description: "AI in marketing, ABM, growth hacking, chatbots, personalization, privacy, Web3.", icon: "Sparkles", color: "bg-yellow-500", order: 12, lessons: advanced_emergingLessons },
  { id: "legal-career", title: "Module 14 — Legal, Ethics & Career", description: "Privacy laws, ad standards, ethics, certifications, portfolio, career paths.", icon: "GraduationCap", color: "bg-slate-500", order: 13, lessons: legal_careerLessons },
];

export function getTrack(id: string) { return tracks.find((t) => t.id === id); }
export function getLesson(trackId: string, slug: string) { return getTrack(trackId)?.lessons.find((l) => l.slug === slug); }
export function getAllLessons() { return tracks.flatMap((t) => t.lessons.map((l) => ({ ...l, trackTitle: t.title }))); }
export function getAdjacentLessons(trackId: string, slug: string) {
  const track = getTrack(trackId);
  if (!track) return { prev: null, next: null };
  const idx = track.lessons.findIndex((l) => l.slug === slug);
  let prev = idx > 0 ? { track: trackId, lesson: track.lessons[idx - 1] } : null;
  let next = idx < track.lessons.length - 1 ? { track: trackId, lesson: track.lessons[idx + 1] } : null;
  if (!prev && track.order > 0) { const pt = tracks[track.order - 1]; prev = { track: pt.id, lesson: pt.lessons[pt.lessons.length - 1] }; }
  if (!next && track.order < tracks.length - 1) { const nt = tracks[track.order + 1]; next = { track: nt.id, lesson: nt.lessons[0] }; }
  return { prev, next };
}
