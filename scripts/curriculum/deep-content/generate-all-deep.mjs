#!/usr/bin/env node
import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
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
import { _distribution_growthLessons } from "../distribution-growth.mjs";
import { _icp_list_buildingLessons } from "../icp-list-building.mjs";
import { _aeo_geoLessons } from "../aeo-geo.mjs";
import { _linkedin_marketingLessons } from "../linkedin-marketing.mjs";
import { _cold_outreachLessons } from "../cold-outreach.mjs";
import { _pr_digital_prLessons } from "../pr-digital-pr.mjs";
import { _community_marketingLessons } from "../community-marketing.mjs";
import { _ecommerce_dtcLessons } from "../ecommerce-dtc.mjs";
import { _technical_seoLessons } from "../technical-seo.mjs";
import { _competitor_intelLessons } from "../competitor-intel.mjs";
import { _podcast_marketingLessons } from "../podcast-marketing.mjs";
import { _pinterest_marketingLessons } from "../pinterest-marketing.mjs";
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
import { DISTRIBUTION_GROWTH_DEEP } from "../distribution-growth-deep/index.mjs";
import { ICP_LIST_BUILDING_DEEP } from "../icp-list-building-deep/index.mjs";
import { AEO_GEO_DEEP } from "../aeo-geo-deep/index.mjs";
import { LINKEDIN_MARKETING_DEEP } from "../linkedin-marketing-deep/index.mjs";
import { COLD_OUTREACH_DEEP } from "../cold-outreach-deep/index.mjs";
import { PR_DIGITAL_PR_DEEP } from "../pr-digital-pr-deep/index.mjs";
import { COMMUNITY_MARKETING_DEEP } from "../community-marketing-deep/index.mjs";
import { ECOMMERCE_DTC_DEEP } from "../ecommerce-dtc-deep/index.mjs";
import { TECHNICAL_SEO_DEEP } from "../technical-seo-deep/index.mjs";
import { COMPETITOR_INTEL_DEEP } from "../competitor-intel-deep/index.mjs";
import { PODCAST_MARKETING_DEEP } from "../podcast-marketing-deep/index.mjs";
import { PINTEREST_MARKETING_DEEP } from "../pinterest-marketing-deep/index.mjs";
import { buildGeneratedOverrides, isFullyDeep } from "./expand-lesson.mjs";
import { applyAllDeepOverrides } from "./merge.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "generated");
mkdirSync(outDir, { recursive: true });

const TRACKS = [
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
  { id: "distribution-growth", lessons: _distribution_growthLessons, hand: DISTRIBUTION_GROWTH_DEEP },
  { id: "icp-list-building", lessons: _icp_list_buildingLessons, hand: ICP_LIST_BUILDING_DEEP },
  { id: "aeo-geo", lessons: _aeo_geoLessons, hand: AEO_GEO_DEEP },
  { id: "linkedin-marketing", lessons: _linkedin_marketingLessons, hand: LINKEDIN_MARKETING_DEEP },
  { id: "cold-outreach", lessons: _cold_outreachLessons, hand: COLD_OUTREACH_DEEP },
  { id: "pr-digital-pr", lessons: _pr_digital_prLessons, hand: PR_DIGITAL_PR_DEEP },
  { id: "community-marketing", lessons: _community_marketingLessons, hand: COMMUNITY_MARKETING_DEEP },
  { id: "ecommerce-dtc", lessons: _ecommerce_dtcLessons, hand: ECOMMERCE_DTC_DEEP },
  { id: "technical-seo", lessons: _technical_seoLessons, hand: TECHNICAL_SEO_DEEP },
  { id: "competitor-intel", lessons: _competitor_intelLessons, hand: COMPETITOR_INTEL_DEEP },
  { id: "podcast-marketing", lessons: _podcast_marketingLessons, hand: PODCAST_MARKETING_DEEP },
  { id: "pinterest-marketing", lessons: _pinterest_marketingLessons, hand: PINTEREST_MARKETING_DEEP },
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

writeFileSync(join(outDir, "index.mjs"), `export { WEBSITE_CRO_GENERATED } from "./website-cro.mjs";
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
export { LEGAL_CAREER_GENERATED } from "./legal-career.mjs";
export { DISTRIBUTION_GROWTH_GENERATED } from "./distribution-growth.mjs";
export { ICP_LIST_BUILDING_GENERATED } from "./icp-list-building.mjs";
export { AEO_GEO_GENERATED } from "./aeo-geo.mjs";
export { LINKEDIN_MARKETING_GENERATED } from "./linkedin-marketing.mjs";
export { COLD_OUTREACH_GENERATED } from "./cold-outreach.mjs";
export { PR_DIGITAL_PR_GENERATED } from "./pr-digital-pr.mjs";
export { COMMUNITY_MARKETING_GENERATED } from "./community-marketing.mjs";
export { ECOMMERCE_DTC_GENERATED } from "./ecommerce-dtc.mjs";
export { TECHNICAL_SEO_GENERATED } from "./technical-seo.mjs";
export { COMPETITOR_INTEL_GENERATED } from "./competitor-intel.mjs";
export { PODCAST_MARKETING_GENERATED } from "./podcast-marketing.mjs";
export { PINTEREST_MARKETING_GENERATED } from "./pinterest-marketing.mjs";`);
console.log("DM deep generation done", stats);
