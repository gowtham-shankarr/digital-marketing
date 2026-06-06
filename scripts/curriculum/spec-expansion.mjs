/**
 * Spec P2 — new tracks from marketlearn-change-spec.md
 */
import { lessonsFromRows } from "./dm-lesson-builder.mjs";

function mod(id, title, description, icon, color, rows) {
  return {
    id,
    title,
    description,
    icon,
    color,
    order: 0,
    lessons: lessonsFromRows(
      id,
      rows.map((r) => {
        const [t, level, summary, sections, practice] = r;
        return [t, level, summary, sections, practice, []];
      })
    ),
  };
}

export const SPEC_EXPANSION_TRACKS = [
  mod(
    "marketing-psychology",
    "Marketing Psychology & Persuasion",
    "Cialdini principles, cognitive biases, behavioral triggers, and ethical persuasion.",
    "Brain",
    "bg-violet-600",
    [
      ["Cialdini's 6 Principles of Influence", "base", "Reciprocity, commitment, social proof, authority, liking, scarcity — ethical use in campaigns.", ["Reciprocity: give value before ask", "Social proof: reviews, numbers, logos", "Scarcity must be real", "Authority via credentials and data"], "Pick one landing page; label which Cialdini principles it uses."],
      ["Cognitive Biases in Marketing", "base", "Anchoring, loss aversion, bandwagon, framing — how buyers decide irrationally.", ["Loss aversion > equivalent gain", "Anchoring on original price", "Default option bias in forms", "Framing same stat two ways"], "Rewrite one offer using loss aversion vs gain framing."],
      ["Behavioral Triggers and Microcopy", "base", "Urgency, curiosity gaps, specificity, and power words that move clicks.", ["Specific numbers beat vague claims", "Curiosity without clickbait", "You-focused copy", "One CTA per screen"], "Improve 3 CTAs on a real site using behavioral triggers."],
      ["Ethical Persuasion vs Dark Patterns", "base", "Build trust long-term; avoid manipulative UX that damages brand.", ["Real scarcity only", "Easy cancel and unsubscribe", "No fake countdown timers", "Transparent pricing"], "Audit one checkout flow for dark patterns; list fixes."],
      ["Emotion and Story in Brand Messaging", "base", "People buy feelings and identity; stories make messages memorable.", ["Hero's journey in case studies", "Before/after emotional arc", "Customer as hero not brand", "Sensory language sparingly"], "Write 150-word brand story for a product you know."],
      ["Applying Psychology Across the Funnel", "base", "TOFU education, MOFU proof, BOFU urgency — match psychology to stage.", ["TOFU: curiosity + authority", "MOFU: social proof + comparison", "BOFU: risk reversal + scarcity", "Retention: belonging + reciprocity"], "Map one Cialdini principle to each funnel stage for a SaaS."],
    ]
  ),
  mod(
    "customer-research",
    "Customer & Market Research",
    "Interviews, surveys, review mining, Jobs-to-be-Done, and research-to-copy workflows.",
    "MessageSquare",
    "bg-blue-600",
    [
      ["Voice of Customer (VoC) Basics", "base", "Systematically capture what customers say, feel, and need — not what you assume.", ["Support tickets and sales calls", "Reviews on G2, Amazon, app stores", "Social comments and forums", "Organize quotes by theme"], "Collect 20 customer quotes for one product category."],
      ["Customer Interview Guide", "base", "Open questions reveal jobs, pains, and language for copy.", ["Ask about last purchase not hypotheticals", "Probe with 'tell me more'", "Record with permission", "5–10 interviews minimum"], "Write 8 interview questions for a B2B software ICP."],
      ["Surveys That Get Useful Data", "base", "Short, focused surveys; avoid leading questions.", ["One goal per survey", "Max 7 questions", "Mix NPS + open text", "Incentivize thoughtfully"], "Draft a 5-question post-purchase survey."],
      ["Jobs-to-be-Done (JTBD) Framework", "base", "Customers hire products to make progress — functional, emotional, social jobs.", ["Job story: When… I want… so I…", "Compete with alternatives not categories", "Outcome-driven segmentation", "Interview for struggling moments"], "Write 3 job stories for a meal-kit brand."],
      ["Review Mining and Social Listening", "base", "Amazon, Reddit, Trustpilot — goldmine for objections and phrases.", ["Sort by 3-star reviews (nuanced)", "Extract repeated phrases verbatim", "Tag objection themes", "Feed copy and FAQ"], "Mine 50 reviews; list top 5 pains in customer words."],
      ["From Research to Personas and Copy", "base", "Turn research into persona docs, messaging matrix, and landing page bullets.", ["Verbatim quotes in persona", "Message map: pain → agitate → solve", "Share doc with sales", "Update quarterly"], "Build one-page persona from real quotes."],
    ]
  ),
  mod(
    "offer-pricing",
    "Offer Creation & Pricing Strategy",
    "Value proposition, offer stacking, guarantees, urgency, and packaging for conversion.",
    "Tag",
    "bg-rose-600",
    [
      ["Crafting a Compelling Offer", "base", "Clear outcome, timeframe, mechanism, and proof — the offer is the marketing.", ["Specific transformation promised", "Who it's for / not for", "Delivery format clear", "Risk reversal included"], "Write one offer stack for a coaching program."],
      ["Value Stacking and Bonuses", "base", "Core offer + bonuses that overcome objections without discounting.", ["Bonus addresses one objection each", "Name bonuses specifically", "Show retail value honestly", "Order bump on checkout"], "Design core + 3 bonuses for an online course."],
      ["Guarantees and Risk Reversal", "base", "Money-back, results-based, or hybrid — reduces BOFU friction.", ["Match guarantee to delivery model", "Clear terms and timeline", "Prominent near CTA", "Track refund rate"], "Write guarantee copy for a $500 product."],
      ["Pricing Psychology and Packaging", "base", "Anchoring, decoy tiers, charm pricing, annual vs monthly.", ["3-tier good-better-best", "Middle tier often wins", "Annual discount 15–20%", "Show per-day cost for subscriptions"], "Sketch 3 pricing tiers for a SaaS tool."],
      ["Urgency and Scarcity (Ethical)", "base", "Real deadlines, cohort caps, seasonal offers — no fake timers.", ["Cart close dates documented", "Cohort size limits real", "Evergreen vs launch cycles", "Email + retargeting aligned"], "Plan one ethical urgency mechanic for a launch."],
      ["Offer Testing and Iteration", "base", "A/B price, bundle, guarantee; measure conversion and LTV not just clicks.", ["One variable per test", "Sample size before decision", "Survey non-buyers", "Document winning offer"], "Hypothesize one offer test with success metric."],
    ]
  ),
  mod(
    "retention-lifecycle",
    "Retention, Loyalty & Lifecycle Marketing",
    "Onboarding, activation, churn reduction, win-back, loyalty, and expansion revenue.",
    "Heart",
    "bg-pink-600",
    [
      ["Lifecycle Marketing Overview", "base", "Acquire → activate → retain → expand → win-back — different messages per stage.", ["Map lifecycle to email/CRM", "Cohort by signup month", "NRR and churn for SaaS", "Repeat rate for e-commerce"], "Draw lifecycle stages for one business model."],
      ["Onboarding and Activation", "base", "First 7–14 days determine retention; define activation event.", ["Activation = first value moment", "Onboarding email series", "In-app checklist", "Measure time-to-activation"], "Define activation event + 3 onboarding emails for an app."],
      ["Churn Reduction Tactics", "base", "Exit surveys, save offers, usage alerts, success check-ins.", ["Predict churn from usage drop", "Proactive outreach before cancel", "Pause plan vs cancel", "Fix product not just email"], "List 5 churn signals for a subscription product."],
      ["Win-Back and Re-Engagement", "base", "Lapsed users and cancelled subs — cheaper than new acquisition.", ["Segment by tenure and reason", "Win-back offer sequence", "Sunset inactive emails", "Test timing 30/60/90 days"], "Write 3-email win-back sequence outline."],
      ["Loyalty Programs and Advocacy", "base", "Points, tiers, referrals, UGC — turn customers into promoters.", ["Referral double-sided reward", "VIP early access", "NPS → review ask flow", "Community for power users"], "Design simple referral program for D2C brand."],
      ["Expansion Revenue (NRR)", "base", "Upsell, cross-sell, seat expansion — grow revenue from existing base.", ["Usage-based upgrade triggers", "Account expansion plays B2B", "Bundle adjacent products", "Track expansion MRR"], "Identify 3 expansion triggers for a SaaS account."],
    ]
  ),
  mod(
    "creative-design",
    "Creative & Design Skills",
    "Canva basics, layout and color, visual content, and AI image/video tools for marketers.",
    "Palette",
    "bg-amber-600",
    [
      ["Design Fundamentals for Marketers", "base", "Hierarchy, whitespace, contrast, alignment — no design degree required.", ["One focal point per asset", "F-pattern for landing pages", "Contrast for readability", "Consistent grid"], "Critique one ad: hierarchy, contrast, CTA visibility."],
      ["Color and Typography Basics", "base", "Brand palette, 2 fonts max, readable sizes for mobile.", ["60-30-10 color rule", "Sans for UI, serif optional for luxury", "16px+ body on mobile", "WCAG contrast check"], "Document color + font rules for a fictional brand."],
      ["Canva and Quick Visual Production", "base", "Templates, brand kit, resize for platforms, export specs.", ["Brand kit: logo, colors, fonts", "Platform size presets", "PNG for social, PDF for print", "Template library for team"], "Create 3 social sizes from one Canva template."],
      ["Creating Scroll-Stopping Social Creative", "base", "Thumb-stopping hooks, text on image, carousel flow.", ["Face + text overlay tests", "First slide = hook", "Carousel tells one story", "Safe zones for Reels UI"], "Storyboard a 5-slide carousel for a product launch."],
      ["AI Image and Video Tools for Marketing", "base", "Midjourney, DALL·E, Runway, CapCut — speed vs brand control.", ["Human review all AI output", "Style guide for prompts", "Disclose AI where required", "B-roll and variants fast"], "List 3 approved AI uses and 3 risks for client work."],
      ["Creative Testing and Brand Consistency", "base", "Test hooks and layouts; maintain brand across channels.", ["Creative matrix: hook × visual", "Document winners in playbook", "Version control in DAM", "Weekly creative retro"], "Plan A/B test: 2 hooks × 2 visuals for Meta ad."],
    ]
  ),
  mod(
    "youtube-video",
    "YouTube & Video Marketing",
    "Channel strategy, YouTube SEO, Shorts, scripts, thumbnails, and video funnel integration.",
    "Youtube",
    "bg-red-600",
    [
      ["YouTube as a Marketing Channel", "base", "Second-largest search engine; long-form trust + Shorts discovery.", ["Search + suggested traffic", "Evergreen vs timely content", "Funnel: video → email → offer", "Repurpose to Shorts/Reels"], "Audit one competitor YouTube channel: uploads, views, CTAs."],
      ["YouTube SEO: Titles, Tags, Descriptions", "base", "Keyword research, compelling titles, chapters, and metadata.", ["Primary keyword in title front", "Description first 2 lines hook", "Chapters for retention", "Custom thumbnail every video"], "Optimize one video title + description for a target keyword."],
      ["Thumbnails and Hooks That Retain", "base", "CTR from thumbnail; retention from first 30 seconds.", ["Face + emotion + contrast", "3–5 words max on thumb", "Hook promise in first 10 sec", "Pattern interrupt open"], "Sketch thumbnail + 15-second hook script."],
      ["Video Script Structure for Marketing", "base", "Hook → problem → solution → proof → CTA — works for tutorials and VSLs.", ["One idea per section", "B-roll list alongside script", "CTA verbal + end screen", "Keep density high"], "Outline 5-minute explainer script for your niche."],
      ["YouTube Shorts and Cross-Platform Clips", "base", "Shorts for reach; repurpose to TikTok, Reels, LinkedIn.", ["Vertical safe zones", "Loop-friendly endings", "One takeaway per Short", "Batch 10 Shorts from long video"], "Plan 5 Shorts from one long-form topic."],
      ["Video Production Workflow on a Budget", "base", "Phone + lav mic + natural light; edit in CapCut or DaVinci.", ["Batch film 4 videos in one session", "Teleprompter optional", "Template intro/outro", "Publish consistency > perfection"], "Document minimal gear list + weekly upload cadence."],
      ["YouTube Analytics and Funnel Attribution", "base", "Watch time, CTR, traffic sources, end-screen clicks to site.", ["UTM on description links", "Track assisted conversions", "Compare Shorts vs long-form ROI", "Double down on top traffic source"], "Set 4 KPIs for a new channel's first 90 days."],
      ["YouTube Ads and Promoted Content", "base", "In-stream skippable, bumper, Video Action Campaigns.", ["Hook before skip button", "Landing page message match", "Remarketing viewers 7–30 days", "Test 3 thumbnails as ad creatives"], "Outline one YouTube ad campaign: audience, offer, KPI."],
    ]
  ),
];
