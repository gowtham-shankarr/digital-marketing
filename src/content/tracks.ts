import type { Track } from "@/lib/types";
import { dm_getting_startedLessons } from "./lessons/dm-getting-started";
import { marketing_fundamentalsLessons } from "./lessons/marketing-fundamentals";
import { content_marketingLessons } from "./lessons/content-marketing";
import { seoLessons } from "./lessons/seo";
import { social_mediaLessons } from "./lessons/social-media";
import { email_marketingLessons } from "./lessons/email-marketing";
import { paid_adsLessons } from "./lessons/paid-ads";
import { analyticsLessons } from "./lessons/analytics";
import { brand_creativeLessons } from "./lessons/brand-creative";
import { conversionLessons } from "./lessons/conversion";
import { strategyLessons } from "./lessons/strategy";
import { dm_projectsLessons } from "./lessons/dm-projects";

export const trackMeta = [
  {
    "id": "dm-getting-started",
    "title": "Getting Started",
    "description": "Digital marketing foundations — funnel, journey, channels, goals, tools, audience, and ethics.",
    "icon": "Rocket",
    "color": "bg-violet-500",
    "order": 0,
    "lessonCount": 8,
    "estimatedMinutes": 222
  },
  {
    "id": "marketing-fundamentals",
    "title": "Marketing Fundamentals",
    "description": "Personas, positioning, value proposition, competitors, SWOT, and messaging foundations.",
    "icon": "Target",
    "color": "bg-rose-500",
    "order": 1,
    "lessonCount": 10,
    "estimatedMinutes": 292
  },
  {
    "id": "content-marketing",
    "title": "Content Marketing",
    "description": "Strategy, blogging, copywriting, calendars, repurposing, and content distribution.",
    "icon": "FileText",
    "color": "bg-amber-500",
    "order": 2,
    "lessonCount": 10,
    "estimatedMinutes": 288
  },
  {
    "id": "seo",
    "title": "SEO",
    "description": "Keywords, on-page, technical SEO, local SEO, links, and search performance.",
    "icon": "Search",
    "color": "bg-green-500",
    "order": 3,
    "lessonCount": 12,
    "estimatedMinutes": 350
  },
  {
    "id": "social-media",
    "title": "Social Media Marketing",
    "description": "Platform strategy, content types, scheduling, community, influencers, and social analytics.",
    "icon": "Share2",
    "color": "bg-sky-500",
    "order": 4,
    "lessonCount": 12,
    "estimatedMinutes": 344
  },
  {
    "id": "email-marketing",
    "title": "Email Marketing",
    "description": "Lists, segments, automation, newsletters, deliverability, and email metrics.",
    "icon": "Mail",
    "color": "bg-indigo-500",
    "order": 5,
    "lessonCount": 10,
    "estimatedMinutes": 284
  },
  {
    "id": "paid-ads",
    "title": "Paid Advertising",
    "description": "Google Ads, Meta Ads, targeting, budgets, creatives, ROAS, and optimization.",
    "icon": "DollarSign",
    "color": "bg-orange-500",
    "order": 6,
    "lessonCount": 12,
    "estimatedMinutes": 344
  },
  {
    "id": "analytics",
    "title": "Analytics & Reporting",
    "description": "GA4, UTM parameters, KPIs, dashboards, attribution, and data-driven decisions.",
    "icon": "BarChart3",
    "color": "bg-teal-500",
    "order": 7,
    "lessonCount": 10,
    "estimatedMinutes": 288
  },
  {
    "id": "brand-creative",
    "title": "Brand & Creative Basics",
    "description": "Brand voice, visual identity basics, ad creative, Canva workflows, and assets.",
    "icon": "Sparkles",
    "color": "bg-pink-500",
    "order": 8,
    "lessonCount": 8,
    "estimatedMinutes": 230
  },
  {
    "id": "conversion",
    "title": "Conversion Optimization",
    "description": "Landing pages, CRO, forms, heatmaps, A/B tests, and UX for conversions.",
    "icon": "TrendingUp",
    "color": "bg-lime-600",
    "order": 9,
    "lessonCount": 8,
    "estimatedMinutes": 232
  },
  {
    "id": "strategy",
    "title": "Strategy & Campaigns",
    "description": "Campaign planning, budgets, multi-channel plans, timelines, and execution.",
    "icon": "Map",
    "color": "bg-purple-500",
    "order": 10,
    "lessonCount": 10,
    "estimatedMinutes": 290
  },
  {
    "id": "dm-projects",
    "title": "Portfolio Projects",
    "description": "Capstone projects: campaign plan, SEO audit, social calendar, case study portfolio.",
    "icon": "Briefcase",
    "color": "bg-slate-600",
    "order": 11,
    "lessonCount": 10,
    "estimatedMinutes": 342
  }
] as const;

export const tracks: Track[] = [
  { id: "dm-getting-started", title: "Getting Started", description: "Digital marketing foundations — funnel, journey, channels, goals, tools, audience, and ethics.", icon: "Rocket", color: "bg-violet-500", order: 0, lessons: dm_getting_startedLessons },
  { id: "marketing-fundamentals", title: "Marketing Fundamentals", description: "Personas, positioning, value proposition, competitors, SWOT, and messaging foundations.", icon: "Target", color: "bg-rose-500", order: 1, lessons: marketing_fundamentalsLessons },
  { id: "content-marketing", title: "Content Marketing", description: "Strategy, blogging, copywriting, calendars, repurposing, and content distribution.", icon: "FileText", color: "bg-amber-500", order: 2, lessons: content_marketingLessons },
  { id: "seo", title: "SEO", description: "Keywords, on-page, technical SEO, local SEO, links, and search performance.", icon: "Search", color: "bg-green-500", order: 3, lessons: seoLessons },
  { id: "social-media", title: "Social Media Marketing", description: "Platform strategy, content types, scheduling, community, influencers, and social analytics.", icon: "Share2", color: "bg-sky-500", order: 4, lessons: social_mediaLessons },
  { id: "email-marketing", title: "Email Marketing", description: "Lists, segments, automation, newsletters, deliverability, and email metrics.", icon: "Mail", color: "bg-indigo-500", order: 5, lessons: email_marketingLessons },
  { id: "paid-ads", title: "Paid Advertising", description: "Google Ads, Meta Ads, targeting, budgets, creatives, ROAS, and optimization.", icon: "DollarSign", color: "bg-orange-500", order: 6, lessons: paid_adsLessons },
  { id: "analytics", title: "Analytics & Reporting", description: "GA4, UTM parameters, KPIs, dashboards, attribution, and data-driven decisions.", icon: "BarChart3", color: "bg-teal-500", order: 7, lessons: analyticsLessons },
  { id: "brand-creative", title: "Brand & Creative Basics", description: "Brand voice, visual identity basics, ad creative, Canva workflows, and assets.", icon: "Sparkles", color: "bg-pink-500", order: 8, lessons: brand_creativeLessons },
  { id: "conversion", title: "Conversion Optimization", description: "Landing pages, CRO, forms, heatmaps, A/B tests, and UX for conversions.", icon: "TrendingUp", color: "bg-lime-600", order: 9, lessons: conversionLessons },
  { id: "strategy", title: "Strategy & Campaigns", description: "Campaign planning, budgets, multi-channel plans, timelines, and execution.", icon: "Map", color: "bg-purple-500", order: 10, lessons: strategyLessons },
  { id: "dm-projects", title: "Portfolio Projects", description: "Capstone projects: campaign plan, SEO audit, social calendar, case study portfolio.", icon: "Briefcase", color: "bg-slate-600", order: 11, lessons: dm_projectsLessons },
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
