import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { foundationsLessons } from "./curriculum/foundations.mjs";
import { marketing_funnelsLessons } from "./curriculum/marketing-funnels.mjs";
import { website_croLessons } from "./curriculum/website-cro.mjs";
import { seoLessons } from "./curriculum/seo.mjs";
import { sem_ppcLessons } from "./curriculum/sem-ppc.mjs";
import { content_marketingLessons } from "./curriculum/content-marketing.mjs";
import { social_mediaLessons } from "./curriculum/social-media.mjs";
import { email_marketingLessons } from "./curriculum/email-marketing.mjs";
import { automation_crmLessons } from "./curriculum/automation-crm.mjs";
import { analyticsLessons } from "./curriculum/analytics.mjs";
import { other_channelsLessons } from "./curriculum/other-channels.mjs";
import { strategy_brandingLessons } from "./curriculum/strategy-branding.mjs";
import { advanced_emergingLessons } from "./curriculum/advanced-emerging.mjs";
import { legal_careerLessons } from "./curriculum/legal-career.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../src/content/lessons");
mkdirSync(outDir, { recursive: true });

const tracks = {
  "foundations": { lessons: foundationsLessons, title: "Module 1 — Foundations", description: "Digital marketing basics, media types, metrics, STP, personas, journey, goals, and OKRs.", icon: "Rocket", color: "bg-violet-500" },
  "marketing-funnels": { lessons: marketing_funnelsLessons, title: "Module 2 — Marketing Funnels", description: "Funnel stages, AIDA, AARRR, funnel types, lead magnets, nurturing, metrics, and optimization.", icon: "Filter", color: "bg-fuchsia-500" },
  "website-cro": { lessons: website_croLessons, title: "Module 3 — Website, Landing Pages & CRO", description: "Domains, CMS, UX, landing pages, CRO, testing, speed, mobile, forms, and trust signals.", icon: "Layout", color: "bg-cyan-500" },
  "seo": { lessons: seoLessons, title: "Module 4 — SEO", description: "Crawling, keywords, on-page, technical, links, local, E-E-A-T, tools, and AI search.", icon: "Search", color: "bg-green-500" },
  "sem-ppc": { lessons: sem_ppcLessons, title: "Module 5 — SEM / PPC", description: "Google Ads, campaign types, Bing, bidding, Quality Score, structure, tracking, remarketing.", icon: "DollarSign", color: "bg-orange-500" },
  "content-marketing": { lessons: content_marketingLessons, title: "Module 6 — Content Marketing", description: "Strategy, formats, copywriting, calendar, distribution, repurposing, and measurement.", icon: "FileText", color: "bg-amber-500" },
  "social-media": { lessons: social_mediaLessons, title: "Module 7 — Social Media Marketing", description: "Platforms, organic, paid social, calendar, community, listening, UGC, and social commerce.", icon: "Share2", color: "bg-sky-500" },
  "email-marketing": { lessons: email_marketingLessons, title: "Module 8 — Email Marketing", description: "List building, segmentation, email types, automation, deliverability, metrics, tools, compliance.", icon: "Mail", color: "bg-indigo-500" },
  "automation-crm": { lessons: automation_crmLessons, title: "Module 9 — Marketing Automation & CRM", description: "Automation, lead scoring, MQL/SQL, workflows, CRM integration, nurture campaigns, platforms.", icon: "Workflow", color: "bg-purple-500" },
  "analytics": { lessons: analyticsLessons, title: "Module 10 — Analytics & Measurement", description: "GA4, GTM, UTMs, dashboards, attribution, reporting, conversion tracking, data decisions.", icon: "BarChart3", color: "bg-emerald-500" },
  "other-channels": { lessons: other_channelsLessons, title: "Module 11 — Other Channels & Specializations", description: "Affiliate, influencer, video, mobile, SMS, push, e-commerce, programmatic, native ads.", icon: "Radio", color: "bg-pink-500" },
  "strategy-branding": { lessons: strategy_brandingLessons, title: "Module 12 — Strategy, Branding & Planning", description: "End-to-end strategy, brand voice, competitive analysis, budgeting, integrated campaigns.", icon: "Compass", color: "bg-rose-500" },
  "advanced-emerging": { lessons: advanced_emergingLessons, title: "Module 13 — Advanced & Emerging Topics", description: "AI in marketing, ABM, growth hacking, chatbots, personalization, privacy, Web3.", icon: "Sparkles", color: "bg-yellow-500" },
  "legal-career": { lessons: legal_careerLessons, title: "Module 14 — Legal, Ethics & Career", description: "Privacy laws, ad standards, ethics, certifications, portfolio, career paths.", icon: "GraduationCap", color: "bg-slate-500" },
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

export const trackMeta = ${JSON.stringify(trackMeta, null, 2)} as const;

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
`);

console.log("Total lessons:", Object.values(tracks).reduce((s, t) => s + t.lessons.length, 0));
