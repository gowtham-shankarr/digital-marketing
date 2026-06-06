import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
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
import { distribution_growthLessons } from "./curriculum/distribution-growth.mjs";
import { icp_list_buildingLessons } from "./curriculum/icp-list-building.mjs";
import { aeo_geoLessons } from "./curriculum/aeo-geo.mjs";
import { linkedin_marketingLessons } from "./curriculum/linkedin-marketing.mjs";
import { cold_outreachLessons } from "./curriculum/cold-outreach.mjs";
import { pr_digital_prLessons } from "./curriculum/pr-digital-pr.mjs";
import { community_marketingLessons } from "./curriculum/community-marketing.mjs";
import { ecommerce_dtcLessons } from "./curriculum/ecommerce-dtc.mjs";
import { technical_seoLessons } from "./curriculum/technical-seo.mjs";
import { competitor_intelLessons } from "./curriculum/competitor-intel.mjs";
import { podcast_marketingLessons } from "./curriculum/podcast-marketing.mjs";
import { pinterest_marketingLessons } from "./curriculum/pinterest-marketing.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../src/content/lessons");
mkdirSync(outDir, { recursive: true });

const tracks = {
  "website-cro": { lessons: website_croLessons, title: "Website, Landing Pages & CRO", description: "Domains, CMS, UX, landing pages, CRO, testing, speed, mobile, forms, and trust signals.", icon: "Layout", color: "bg-cyan-500" },
  "seo": { lessons: seoLessons, title: "SEO", description: "Crawling, keywords, on-page, technical, links, local, E-E-A-T, tools, and AI search.", icon: "Search", color: "bg-green-500" },
  "sem-ppc": { lessons: sem_ppcLessons, title: "SEM / PPC", description: "Google Ads, campaign types, Bing, bidding, Quality Score, structure, tracking, remarketing.", icon: "DollarSign", color: "bg-orange-500" },
  "content-marketing": { lessons: content_marketingLessons, title: "Content Marketing", description: "Strategy, formats, copywriting, calendar, distribution, repurposing, and measurement.", icon: "FileText", color: "bg-amber-500" },
  "social-media": { lessons: social_mediaLessons, title: "Social Media Marketing", description: "Platforms, organic, paid social, calendar, community, listening, UGC, and social commerce.", icon: "Share2", color: "bg-sky-500" },
  "email-marketing": { lessons: email_marketingLessons, title: "Email Marketing", description: "List building, segmentation, email types, automation, deliverability, metrics, tools, compliance.", icon: "Mail", color: "bg-indigo-500" },
  "automation-crm": { lessons: automation_crmLessons, title: "Marketing Automation & CRM", description: "Automation, lead scoring, MQL/SQL, workflows, CRM integration, nurture campaigns, platforms.", icon: "Workflow", color: "bg-purple-500" },
  "analytics": { lessons: analyticsLessons, title: "Analytics & Measurement", description: "GA4, GTM, UTMs, dashboards, attribution, reporting, conversion tracking, data decisions.", icon: "BarChart3", color: "bg-emerald-500" },
  "other-channels": { lessons: other_channelsLessons, title: "Other Channels & Specializations", description: "Affiliate, influencer, video, mobile, SMS, push, e-commerce, programmatic, native ads.", icon: "Radio", color: "bg-pink-500" },
  "strategy-branding": { lessons: strategy_brandingLessons, title: "Strategy, Branding & Planning", description: "End-to-end strategy, brand voice, competitive analysis, budgeting, integrated campaigns.", icon: "Compass", color: "bg-rose-500" },
  "advanced-emerging": { lessons: advanced_emergingLessons, title: "Advanced & Emerging Topics", description: "AI in marketing, ABM, growth hacking, chatbots, personalization, privacy, Web3.", icon: "Sparkles", color: "bg-yellow-500" },
  "legal-career": { lessons: legal_careerLessons, title: "Legal, Ethics & Career", description: "Privacy laws, ad standards, ethics, certifications, portfolio, career paths.", icon: "GraduationCap", color: "bg-slate-500" },
  "distribution-growth": { lessons: distribution_growthLessons, title: "Distribution & Growth Moat", description: "20 distribution principles, 9 growth engines, PLG, referrals, and platform arbitrage.", icon: "TrendingUp", color: "bg-lime-600" },
  "icp-list-building": { lessons: icp_list_buildingLessons, title: "B2B ICP & List Building", description: "RevGrowth 7-step protocol: TAM, AI research, scraping, waterfall enrichment, lead scoring.", icon: "Users", color: "bg-teal-600" },
  "aeo-geo": { lessons: aeo_geoLessons, title: "AEO + GEO (AI Search)", description: "Answer Engine and Generative Engine Optimization for snippets, AI Overviews, and citations.", icon: "Bot", color: "bg-blue-600" },
  "linkedin-marketing": { lessons: linkedin_marketingLessons, title: "LinkedIn Marketing", description: "Personal brand, company page, newsletters, DMs, and LinkedIn Ads for B2B.", icon: "Linkedin", color: "bg-sky-700" },
  "cold-outreach": { lessons: cold_outreachLessons, title: "Cold Outreach", description: "B2B cold email, LinkedIn sequences, personalization, deliverability, reply handling.", icon: "Send", color: "bg-orange-600" },
  "pr-digital-pr": { lessons: pr_digital_prLessons, title: "PR & Digital PR", description: "Press, HARO, journalist outreach, digital PR for links and authority.", icon: "Newspaper", color: "bg-stone-600" },
  "community-marketing": { lessons: community_marketingLessons, title: "Community Marketing", description: "Build Slack, Discord, Circle communities — engagement loops and monetization.", icon: "UsersRound", color: "bg-violet-600" },
  "ecommerce-dtc": { lessons: ecommerce_dtcLessons, title: "Ecommerce & DTC Marketing", description: "DTC stack, product pages, ROAS, email flows, cart abandonment.", icon: "ShoppingCart", color: "bg-red-600" },
  "technical-seo": { lessons: technical_seoLessons, title: "Technical SEO", description: "Core Web Vitals, crawlability, schema, site architecture — standalone deep module.", icon: "Wrench", color: "bg-green-700" },
  "competitor-intel": { lessons: competitor_intelLessons, title: "Competitor Intelligence", description: "5-step research, SWOT, gap analysis, tool stack.", icon: "Search", color: "bg-amber-700" },
  "podcast-marketing": { lessons: podcast_marketingLessons, title: "Podcast Marketing", description: "Launch, grow, guest strategy, SEO, brand building with audio.", icon: "Mic", color: "bg-purple-600" },
  "pinterest-marketing": { lessons: pinterest_marketingLessons, title: "Pinterest Marketing", description: "Pins, boards, SEO, shopping, evergreen traffic for DTC and content.", icon: "Pin", color: "bg-rose-600" },
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
import { distribution_growthLessons } from "./lessons/distribution-growth";
import { icp_list_buildingLessons } from "./lessons/icp-list-building";
import { aeo_geoLessons } from "./lessons/aeo-geo";
import { linkedin_marketingLessons } from "./lessons/linkedin-marketing";
import { cold_outreachLessons } from "./lessons/cold-outreach";
import { pr_digital_prLessons } from "./lessons/pr-digital-pr";
import { community_marketingLessons } from "./lessons/community-marketing";
import { ecommerce_dtcLessons } from "./lessons/ecommerce-dtc";
import { technical_seoLessons } from "./lessons/technical-seo";
import { competitor_intelLessons } from "./lessons/competitor-intel";
import { podcast_marketingLessons } from "./lessons/podcast-marketing";
import { pinterest_marketingLessons } from "./lessons/pinterest-marketing";

export const trackMeta = ${JSON.stringify(trackMeta, null, 2)} as const;

export const tracks: Track[] = [
  { id: "website-cro", title: "Website, Landing Pages & CRO", description: "Domains, CMS, UX, landing pages, CRO, testing, speed, mobile, forms, and trust signals.", icon: "Layout", color: "bg-cyan-500", order: 0, lessons: website_croLessons },
  { id: "seo", title: "SEO", description: "Crawling, keywords, on-page, technical, links, local, E-E-A-T, tools, and AI search.", icon: "Search", color: "bg-green-500", order: 1, lessons: seoLessons },
  { id: "sem-ppc", title: "SEM / PPC", description: "Google Ads, campaign types, Bing, bidding, Quality Score, structure, tracking, remarketing.", icon: "DollarSign", color: "bg-orange-500", order: 2, lessons: sem_ppcLessons },
  { id: "content-marketing", title: "Content Marketing", description: "Strategy, formats, copywriting, calendar, distribution, repurposing, and measurement.", icon: "FileText", color: "bg-amber-500", order: 3, lessons: content_marketingLessons },
  { id: "social-media", title: "Social Media Marketing", description: "Platforms, organic, paid social, calendar, community, listening, UGC, and social commerce.", icon: "Share2", color: "bg-sky-500", order: 4, lessons: social_mediaLessons },
  { id: "email-marketing", title: "Email Marketing", description: "List building, segmentation, email types, automation, deliverability, metrics, tools, compliance.", icon: "Mail", color: "bg-indigo-500", order: 5, lessons: email_marketingLessons },
  { id: "automation-crm", title: "Marketing Automation & CRM", description: "Automation, lead scoring, MQL/SQL, workflows, CRM integration, nurture campaigns, platforms.", icon: "Workflow", color: "bg-purple-500", order: 6, lessons: automation_crmLessons },
  { id: "analytics", title: "Analytics & Measurement", description: "GA4, GTM, UTMs, dashboards, attribution, reporting, conversion tracking, data decisions.", icon: "BarChart3", color: "bg-emerald-500", order: 7, lessons: analyticsLessons },
  { id: "other-channels", title: "Other Channels & Specializations", description: "Affiliate, influencer, video, mobile, SMS, push, e-commerce, programmatic, native ads.", icon: "Radio", color: "bg-pink-500", order: 8, lessons: other_channelsLessons },
  { id: "strategy-branding", title: "Strategy, Branding & Planning", description: "End-to-end strategy, brand voice, competitive analysis, budgeting, integrated campaigns.", icon: "Compass", color: "bg-rose-500", order: 9, lessons: strategy_brandingLessons },
  { id: "advanced-emerging", title: "Advanced & Emerging Topics", description: "AI in marketing, ABM, growth hacking, chatbots, personalization, privacy, Web3.", icon: "Sparkles", color: "bg-yellow-500", order: 10, lessons: advanced_emergingLessons },
  { id: "legal-career", title: "Legal, Ethics & Career", description: "Privacy laws, ad standards, ethics, certifications, portfolio, career paths.", icon: "GraduationCap", color: "bg-slate-500", order: 11, lessons: legal_careerLessons },
  { id: "distribution-growth", title: "Distribution & Growth Moat", description: "20 distribution principles, 9 growth engines, PLG, referrals, and platform arbitrage.", icon: "TrendingUp", color: "bg-lime-600", order: 12, lessons: distribution_growthLessons },
  { id: "icp-list-building", title: "B2B ICP & List Building", description: "RevGrowth 7-step protocol: TAM, AI research, scraping, waterfall enrichment, lead scoring.", icon: "Users", color: "bg-teal-600", order: 13, lessons: icp_list_buildingLessons },
  { id: "aeo-geo", title: "AEO + GEO (AI Search)", description: "Answer Engine and Generative Engine Optimization for snippets, AI Overviews, and citations.", icon: "Bot", color: "bg-blue-600", order: 14, lessons: aeo_geoLessons },
  { id: "linkedin-marketing", title: "LinkedIn Marketing", description: "Personal brand, company page, newsletters, DMs, and LinkedIn Ads for B2B.", icon: "Linkedin", color: "bg-sky-700", order: 15, lessons: linkedin_marketingLessons },
  { id: "cold-outreach", title: "Cold Outreach", description: "B2B cold email, LinkedIn sequences, personalization, deliverability, reply handling.", icon: "Send", color: "bg-orange-600", order: 16, lessons: cold_outreachLessons },
  { id: "pr-digital-pr", title: "PR & Digital PR", description: "Press, HARO, journalist outreach, digital PR for links and authority.", icon: "Newspaper", color: "bg-stone-600", order: 17, lessons: pr_digital_prLessons },
  { id: "community-marketing", title: "Community Marketing", description: "Build Slack, Discord, Circle communities — engagement loops and monetization.", icon: "UsersRound", color: "bg-violet-600", order: 18, lessons: community_marketingLessons },
  { id: "ecommerce-dtc", title: "Ecommerce & DTC Marketing", description: "DTC stack, product pages, ROAS, email flows, cart abandonment.", icon: "ShoppingCart", color: "bg-red-600", order: 19, lessons: ecommerce_dtcLessons },
  { id: "technical-seo", title: "Technical SEO", description: "Core Web Vitals, crawlability, schema, site architecture — standalone deep module.", icon: "Wrench", color: "bg-green-700", order: 20, lessons: technical_seoLessons },
  { id: "competitor-intel", title: "Competitor Intelligence", description: "5-step research, SWOT, gap analysis, tool stack.", icon: "Search", color: "bg-amber-700", order: 21, lessons: competitor_intelLessons },
  { id: "podcast-marketing", title: "Podcast Marketing", description: "Launch, grow, guest strategy, SEO, brand building with audio.", icon: "Mic", color: "bg-purple-600", order: 22, lessons: podcast_marketingLessons },
  { id: "pinterest-marketing", title: "Pinterest Marketing", description: "Pins, boards, SEO, shopping, evergreen traffic for DTC and content.", icon: "Pin", color: "bg-rose-600", order: 23, lessons: pinterest_marketingLessons },
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
