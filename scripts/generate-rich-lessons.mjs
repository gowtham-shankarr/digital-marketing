import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { dm_getting_startedLessons } from "./curriculum/dm-getting-started.mjs";
import { marketing_fundamentalsLessons } from "./curriculum/marketing-fundamentals.mjs";
import { content_marketingLessons } from "./curriculum/content-marketing.mjs";
import { seoLessons } from "./curriculum/seo.mjs";
import { social_mediaLessons } from "./curriculum/social-media.mjs";
import { email_marketingLessons } from "./curriculum/email-marketing.mjs";
import { paid_adsLessons } from "./curriculum/paid-ads.mjs";
import { analyticsLessons } from "./curriculum/analytics.mjs";
import { brand_creativeLessons } from "./curriculum/brand-creative.mjs";
import { conversionLessons } from "./curriculum/conversion.mjs";
import { strategyLessons } from "./curriculum/strategy.mjs";
import { dm_projectsLessons } from "./curriculum/dm-projects.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../src/content/lessons");
mkdirSync(outDir, { recursive: true });

const tracks = {
  "dm-getting-started": { lessons: dm_getting_startedLessons, title: "Getting Started", description: "Digital marketing foundations — funnel, journey, channels, goals, tools, audience, and ethics.", icon: "Rocket", color: "bg-violet-500" },
  "marketing-fundamentals": { lessons: marketing_fundamentalsLessons, title: "Marketing Fundamentals", description: "Personas, positioning, value proposition, competitors, SWOT, and messaging foundations.", icon: "Target", color: "bg-rose-500" },
  "content-marketing": { lessons: content_marketingLessons, title: "Content Marketing", description: "Strategy, blogging, copywriting, calendars, repurposing, and content distribution.", icon: "FileText", color: "bg-amber-500" },
  "seo": { lessons: seoLessons, title: "SEO", description: "Keywords, on-page, technical SEO, local SEO, links, and search performance.", icon: "Search", color: "bg-green-500" },
  "social-media": { lessons: social_mediaLessons, title: "Social Media Marketing", description: "Platform strategy, content types, scheduling, community, influencers, and social analytics.", icon: "Share2", color: "bg-sky-500" },
  "email-marketing": { lessons: email_marketingLessons, title: "Email Marketing", description: "Lists, segments, automation, newsletters, deliverability, and email metrics.", icon: "Mail", color: "bg-indigo-500" },
  "paid-ads": { lessons: paid_adsLessons, title: "Paid Advertising", description: "Google Ads, Meta Ads, targeting, budgets, creatives, ROAS, and optimization.", icon: "DollarSign", color: "bg-orange-500" },
  "analytics": { lessons: analyticsLessons, title: "Analytics & Reporting", description: "GA4, UTM parameters, KPIs, dashboards, attribution, and data-driven decisions.", icon: "BarChart3", color: "bg-teal-500" },
  "brand-creative": { lessons: brand_creativeLessons, title: "Brand & Creative Basics", description: "Brand voice, visual identity basics, ad creative, Canva workflows, and assets.", icon: "Sparkles", color: "bg-pink-500" },
  "conversion": { lessons: conversionLessons, title: "Conversion Optimization", description: "Landing pages, CRO, forms, heatmaps, A/B tests, and UX for conversions.", icon: "TrendingUp", color: "bg-lime-600" },
  "strategy": { lessons: strategyLessons, title: "Strategy & Campaigns", description: "Campaign planning, budgets, multi-channel plans, timelines, and execution.", icon: "Map", color: "bg-purple-500" },
  "dm-projects": { lessons: dm_projectsLessons, title: "Portfolio Projects", description: "Capstone projects: campaign plan, SEO audit, social calendar, case study portfolio.", icon: "Briefcase", color: "bg-slate-600" },
};

for (const [id, track] of Object.entries(tracks)) {
  const varName = id.replace(/-/g, "_") + "Lessons";
  writeFileSync(join(outDir, `${id}.ts`), `import type { Lesson } from "@/lib/types";\n\nexport const ${varName}: Lesson[] = ${JSON.stringify(track.lessons, null, 2)};\n`);
  console.log(`✓ ${id}: ${track.lessons.length} lessons`);
}

const trackMeta = Object.entries(tracks).map(([id, t], order) => ({
  id, title: t.title, description: t.description, icon: t.icon, color: t.color, order,
  lessonCount: t.lessons.length,
  estimatedMinutes: t.lessons.reduce((s, l) => s + l.estimatedMinutes, 0),
}));

writeFileSync(join(__dirname, "../src/content/tracks.ts"), `import type { Track } from "@/lib/types";
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

export const trackMeta = ${JSON.stringify(trackMeta, null, 2)} as const;

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
`);

console.log("Total lessons:", Object.values(tracks).reduce((s, t) => s + t.lessons.length, 0));
