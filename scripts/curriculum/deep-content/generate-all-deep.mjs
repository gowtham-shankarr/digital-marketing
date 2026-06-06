#!/usr/bin/env node
import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { _dm_getting_startedLessons } from "../dm-getting-started.mjs";
import { _marketing_fundamentalsLessons } from "../marketing-fundamentals.mjs";
import { _content_marketingLessons } from "../content-marketing.mjs";
import { _seoLessons } from "../seo.mjs";
import { _social_mediaLessons } from "../social-media.mjs";
import { _email_marketingLessons } from "../email-marketing.mjs";
import { _paid_adsLessons } from "../paid-ads.mjs";
import { _analyticsLessons } from "../analytics.mjs";
import { _brand_creativeLessons } from "../brand-creative.mjs";
import { _conversionLessons } from "../conversion.mjs";
import { _strategyLessons } from "../strategy.mjs";
import { _dm_projectsLessons } from "../dm-projects.mjs";
import { DM_GETTING_STARTED_DEEP } from "../dm-getting-started-deep/index.mjs";
import { MARKETING_FUNDAMENTALS_DEEP } from "../marketing-fundamentals-deep/index.mjs";
import { CONTENT_MARKETING_DEEP } from "../content-marketing-deep/index.mjs";
import { SEO_DEEP } from "../seo-deep/index.mjs";
import { SOCIAL_MEDIA_DEEP } from "../social-media-deep/index.mjs";
import { EMAIL_MARKETING_DEEP } from "../email-marketing-deep/index.mjs";
import { PAID_ADS_DEEP } from "../paid-ads-deep/index.mjs";
import { ANALYTICS_DEEP } from "../analytics-deep/index.mjs";
import { BRAND_CREATIVE_DEEP } from "../brand-creative-deep/index.mjs";
import { CONVERSION_DEEP } from "../conversion-deep/index.mjs";
import { STRATEGY_DEEP } from "../strategy-deep/index.mjs";
import { DM_PROJECTS_DEEP } from "../dm-projects-deep/index.mjs";
import { buildGeneratedOverrides, isFullyDeep } from "./expand-lesson.mjs";
import { applyAllDeepOverrides } from "./merge.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "generated");
mkdirSync(outDir, { recursive: true });

const TRACKS = [
  { id: "dm-getting-started", lessons: _dm_getting_startedLessons, hand: DM_GETTING_STARTED_DEEP },
  { id: "marketing-fundamentals", lessons: _marketing_fundamentalsLessons, hand: MARKETING_FUNDAMENTALS_DEEP },
  { id: "content-marketing", lessons: _content_marketingLessons, hand: CONTENT_MARKETING_DEEP },
  { id: "seo", lessons: _seoLessons, hand: SEO_DEEP },
  { id: "social-media", lessons: _social_mediaLessons, hand: SOCIAL_MEDIA_DEEP },
  { id: "email-marketing", lessons: _email_marketingLessons, hand: EMAIL_MARKETING_DEEP },
  { id: "paid-ads", lessons: _paid_adsLessons, hand: PAID_ADS_DEEP },
  { id: "analytics", lessons: _analyticsLessons, hand: ANALYTICS_DEEP },
  { id: "brand-creative", lessons: _brand_creativeLessons, hand: BRAND_CREATIVE_DEEP },
  { id: "conversion", lessons: _conversionLessons, hand: CONVERSION_DEEP },
  { id: "strategy", lessons: _strategyLessons, hand: STRATEGY_DEEP },
  { id: "dm-projects", lessons: _dm_projectsLessons, hand: DM_PROJECTS_DEEP },
];

function writeGeneratedFile(trackId, overrides) {
  const varName = trackId.replace(/-/g, "_").toUpperCase() + "_GENERATED";
  const content = "/** AUTO-GENERATED */\nexport const " + varName + " = " + JSON.stringify(overrides, null, 2) + ";\n";
  writeFileSync(join(outDir, trackId + ".mjs"), content);
}

const stats = [];
for (const track of TRACKS) {
  const generated = buildGeneratedOverrides(track.lessons);
  writeGeneratedFile(track.id, generated);
  const afterMerge = applyAllDeepOverrides(track.lessons, generated, track.hand);
  stats.push({ track: track.id, total: track.lessons.length, deepAfter: afterMerge.filter(isFullyDeep).length });
}

writeFileSync(join(outDir, "index.mjs"), `export { DM_GETTING_STARTED_GENERATED } from "./dm-getting-started.mjs";
export { MARKETING_FUNDAMENTALS_GENERATED } from "./marketing-fundamentals.mjs";
export { CONTENT_MARKETING_GENERATED } from "./content-marketing.mjs";
export { SEO_GENERATED } from "./seo.mjs";
export { SOCIAL_MEDIA_GENERATED } from "./social-media.mjs";
export { EMAIL_MARKETING_GENERATED } from "./email-marketing.mjs";
export { PAID_ADS_GENERATED } from "./paid-ads.mjs";
export { ANALYTICS_GENERATED } from "./analytics.mjs";
export { BRAND_CREATIVE_GENERATED } from "./brand-creative.mjs";
export { CONVERSION_GENERATED } from "./conversion.mjs";
export { STRATEGY_GENERATED } from "./strategy.mjs";
export { DM_PROJECTS_GENERATED } from "./dm-projects.mjs";`);
console.log("DM deep generation done", stats);
