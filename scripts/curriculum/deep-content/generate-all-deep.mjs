#!/usr/bin/env node
import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { _foundationsLessons } from "../foundations.mjs";
import { _marketing_funnelsLessons } from "../marketing-funnels.mjs";
import { _website_croLessons } from "../website-cro.mjs";
import { _seoLessons } from "../seo.mjs";
import { _sem_ppcLessons } from "../sem-ppc.mjs";
import { _content_marketingLessons } from "../content-marketing.mjs";
import { _social_mediaLessons } from "../social-media.mjs";
import { _email_marketingLessons } from "../email-marketing.mjs";
import { _automation_crmLessons } from "../automation-crm.mjs";
import { _analyticsLessons } from "../analytics.mjs";
import { _other_channelsLessons } from "../other-channels.mjs";
import { _strategy_brandingLessons } from "../strategy-branding.mjs";
import { _advanced_emergingLessons } from "../advanced-emerging.mjs";
import { _legal_careerLessons } from "../legal-career.mjs";
import { FOUNDATIONS_DEEP } from "../foundations-deep/index.mjs";
import { MARKETING_FUNNELS_DEEP } from "../marketing-funnels-deep/index.mjs";
import { WEBSITE_CRO_DEEP } from "../website-cro-deep/index.mjs";
import { SEO_DEEP } from "../seo-deep/index.mjs";
import { SEM_PPC_DEEP } from "../sem-ppc-deep/index.mjs";
import { CONTENT_MARKETING_DEEP } from "../content-marketing-deep/index.mjs";
import { SOCIAL_MEDIA_DEEP } from "../social-media-deep/index.mjs";
import { EMAIL_MARKETING_DEEP } from "../email-marketing-deep/index.mjs";
import { AUTOMATION_CRM_DEEP } from "../automation-crm-deep/index.mjs";
import { ANALYTICS_DEEP } from "../analytics-deep/index.mjs";
import { OTHER_CHANNELS_DEEP } from "../other-channels-deep/index.mjs";
import { STRATEGY_BRANDING_DEEP } from "../strategy-branding-deep/index.mjs";
import { ADVANCED_EMERGING_DEEP } from "../advanced-emerging-deep/index.mjs";
import { LEGAL_CAREER_DEEP } from "../legal-career-deep/index.mjs";
import { buildGeneratedOverrides, isFullyDeep } from "./expand-lesson.mjs";
import { applyAllDeepOverrides } from "./merge.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "generated");
mkdirSync(outDir, { recursive: true });

const TRACKS = [
  { id: "foundations", lessons: _foundationsLessons, hand: FOUNDATIONS_DEEP },
  { id: "marketing-funnels", lessons: _marketing_funnelsLessons, hand: MARKETING_FUNNELS_DEEP },
  { id: "website-cro", lessons: _website_croLessons, hand: WEBSITE_CRO_DEEP },
  { id: "seo", lessons: _seoLessons, hand: SEO_DEEP },
  { id: "sem-ppc", lessons: _sem_ppcLessons, hand: SEM_PPC_DEEP },
  { id: "content-marketing", lessons: _content_marketingLessons, hand: CONTENT_MARKETING_DEEP },
  { id: "social-media", lessons: _social_mediaLessons, hand: SOCIAL_MEDIA_DEEP },
  { id: "email-marketing", lessons: _email_marketingLessons, hand: EMAIL_MARKETING_DEEP },
  { id: "automation-crm", lessons: _automation_crmLessons, hand: AUTOMATION_CRM_DEEP },
  { id: "analytics", lessons: _analyticsLessons, hand: ANALYTICS_DEEP },
  { id: "other-channels", lessons: _other_channelsLessons, hand: OTHER_CHANNELS_DEEP },
  { id: "strategy-branding", lessons: _strategy_brandingLessons, hand: STRATEGY_BRANDING_DEEP },
  { id: "advanced-emerging", lessons: _advanced_emergingLessons, hand: ADVANCED_EMERGING_DEEP },
  { id: "legal-career", lessons: _legal_careerLessons, hand: LEGAL_CAREER_DEEP },
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

writeFileSync(join(outDir, "index.mjs"), `export { FOUNDATIONS_GENERATED } from "./foundations.mjs";
export { MARKETING_FUNNELS_GENERATED } from "./marketing-funnels.mjs";
export { WEBSITE_CRO_GENERATED } from "./website-cro.mjs";
export { SEO_GENERATED } from "./seo.mjs";
export { SEM_PPC_GENERATED } from "./sem-ppc.mjs";
export { CONTENT_MARKETING_GENERATED } from "./content-marketing.mjs";
export { SOCIAL_MEDIA_GENERATED } from "./social-media.mjs";
export { EMAIL_MARKETING_GENERATED } from "./email-marketing.mjs";
export { AUTOMATION_CRM_GENERATED } from "./automation-crm.mjs";
export { ANALYTICS_GENERATED } from "./analytics.mjs";
export { OTHER_CHANNELS_GENERATED } from "./other-channels.mjs";
export { STRATEGY_BRANDING_GENERATED } from "./strategy-branding.mjs";
export { ADVANCED_EMERGING_GENERATED } from "./advanced-emerging.mjs";
export { LEGAL_CAREER_GENERATED } from "./legal-career.mjs";`);
console.log("DM deep generation done", stats);
