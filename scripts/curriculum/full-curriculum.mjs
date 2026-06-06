/**
 * Complete digital marketing curriculum + MMS expansion (modules 15–26).
 * Used by bootstrap-dm-curriculum.mjs
 */
import { lessonsFromRows } from "./dm-lesson-builder.mjs";
import { MMS_EXPANSION_TRACKS, MMS_EXISTING_TRACK_ADDITIONS } from "./mms-expansion.mjs";

function mod(id, title, description, icon, color, order, rows) {
  const baseRows = rows.map((r) => {
    const [t, level, summary, sections, practice] = r;
    return [t, level, summary, sections, practice, []];
  });
  const additions = MMS_EXISTING_TRACK_ADDITIONS[id] || [];
  const addRows = additions.map((r) => {
    const [t, level, summary, sections, practice] = r;
    return [t, level, summary, sections, practice, []];
  });
  const lessons = lessonsFromRows(id, [...baseRows, ...addRows]);
  return { id, title, description, icon, color, order, lessons };
}

const CORE_TRACKS = [
  mod(
    "website-cro",
    "Website, Landing Pages & CRO",
    "Domains, CMS, UX, landing pages, CRO, testing, speed, mobile, forms, and trust signals.",
    "Layout",
    "bg-cyan-500",
    2,
    [
      ["Website Fundamentals: Domain, Hosting, and CMS", "base", "Domain is your address; hosting serves files; CMS like WordPress manages content without code.", ["Domain registrars vs web host", "SSL HTTPS required for trust and SEO", "WordPress, Webflow, Shopify for different needs", "Subdomain vs subdirectory for blogs"], "Research hosting for a small business site; note cost, SSL, and CMS option."],
      ["UX and UI Basics for Marketers", "base", "UX is how it feels to use; UI is visual design — both affect conversion.", ["Clear hierarchy: headline → benefit → CTA", "Fewer choices often increase clicks", "Accessibility helps SEO and users", "Mobile thumb zones for buttons"], "Audit a homepage: list 3 UX wins and 3 friction points."],
      ["Information Architecture and Navigation", "base", "How pages are organized and linked affects findability and SEO.", ["Shallow nav: key pages within 2 clicks", "Logical URL structure", "Breadcrumbs and footer links", "Search box on large sites"], "Sketch sitemap with 8 pages for a dental clinic website."],
      ["Landing Page Design and Anatomy", "base", "Single goal, minimal nav, hero, benefits, proof, FAQ, CTA.", ["Message match from ad to page", "Above-fold CTA on mobile", "One primary conversion goal", "Remove distractions and extra links"], "Wireframe a landing page in bullets: 7 sections in order."],
      ["Conversion Rate Optimization (CRO)", "base", "Systematic improvement of % visitors who complete goal.", ["Research → hypothesize → test → learn", "CRO works on traffic you already have", "Micro-conversions (email signup) count", "Document wins in playbook"], "Pick one page; list 5 CRO ideas ranked by ease vs impact."],
      ["A/B Testing and Multivariate Testing", "base", "A/B compares two versions; multivariate tests multiple elements (needs more traffic).", ["Statistical significance before calling winner", "Run long enough for weekdays/weekends", "Test hypothesis not random tweaks", "Tools: VWO, Optimizely, Google Optimize successors"], "Propose an A/B test: control, variant, metric, minimum runtime."],
      ["Page Speed and Core Web Vitals", "base", "LCP, INP, CLS affect UX and SEO rankings.", ["Compress images, lazy load", "Minimize third-party scripts", "Use CDN for global speed", "Test with PageSpeed Insights"], "Run PageSpeed on a site; note 3 recommendations to implement."],
      ["Mobile-First and Responsive Design", "base", "Design for small screens first; most traffic is mobile.", ["Tap targets 44px+, readable font size", "Forms short on mobile", "Sticky CTA optional", "Test on real devices"], "Compare mobile vs desktop for a site — note 3 differences you'd fix."],
      ["Forms, CTAs, and Lead Capture", "base", "Forms balance data needed vs friction; CTAs use action verbs and contrast.", ["Fewer fields = higher completion", "Progressive profiling over time", "CTA color and placement tests", "GDPR consent where required"], "Rewrite 3 weak CTAs as strong action-oriented buttons."],
      ["Trust Signals: Reviews, Badges, and Social Proof", "base", "Testimonials, logos, ratings, guarantees reduce anxiety at decision.", ["Place proof near CTA", "Specific results beat vague praise", "Third-party reviews (G2, Trustpilot)", "Security badges on checkout"], "Collect 5 trust elements from 2 high-converting sites you admire."],
    ]
  ),

  mod(
    "seo",
    "SEO",
    "Crawling, keywords, on-page, technical, links, local, E-E-A-T, tools, and AI search.",
    "Search",
    "bg-green-500",
    3,
    [
      ["How Search Engines Work", "base", "Crawl → index → rank: bots discover pages, store them, algorithms order results.", ["Crawl budget on large sites", "Index = eligible to rank", "Ranking = relevance + authority + UX", "Google Search Console shows coverage"], "Submit sitemap in Search Console (or explore demo); list index status terms."],
      ["Keyword Research: Intent, Volume, Difficulty", "base", "Match content to search intent; balance volume vs competition.", ["Informational vs commercial vs transactional", "Long-tail = specific, often easier", "Keyword difficulty tools are estimates", "Topic clusters beat one-off posts"], "Find 10 keywords for a niche you like; tag intent for each."],
      ["On-Page SEO Deep Dive", "base", "Titles, meta descriptions, headers, internal links, and content quality.", ["One primary keyword per page", "Title ~60 chars, compelling", "H1 once; logical H2/H3", "Internal links distribute authority"], "Optimize a sample page outline: title, meta, H1–H3 list."],
      ["Technical SEO Essentials", "base", "Site structure, sitemaps, robots.txt, canonicals, speed, mobile-friendly.", ["Fix crawl errors first", "HTTPS everywhere", "Schema markup for rich results", "Avoid duplicate content"], "Run a technical checklist on a site: 10 yes/no items."],
      ["Off-Page SEO and Link Building", "base", "Backlinks signal authority; quality beats quantity.", ["Guest posts, digital PR, resources", "Avoid toxic link schemes", "Anchor text variety natural", "Competitor backlink analysis"], "List 5 link-building tactics safe for a new blog."],
      ["Local SEO and Google Business Profile", "base", "Maps pack and local pack for brick-and-mortar and service areas.", ["Complete GBP: hours, photos, categories", "Reviews and responses", "Local citations NAP consistency", "Location pages for multi-location"], "Audit a local business GBP listing; note 5 improvements."],
      ["Content SEO and Topic Clusters", "base", "Pillar page + cluster posts interlinked around one theme.", ["Pillar targets broad head term", "Clusters answer sub-questions", "Internal linking hub-and-spoke", "Update pillars quarterly"], "Design one pillar + 5 cluster titles for 'email marketing'."],
      ["E-E-A-T: Experience, Expertise, Authority, Trust", "base", "Google quality signals especially for YMYL (health, finance).", ["Author bios and credentials", "Cite sources; update dates", "About and contact transparency", "Real experience in content"], "Improve E-E-A-T on a sample article outline in 5 bullets."],
      ["Algorithm Updates and Recovery", "base", "Core updates reward helpful content; penalties need diagnosis.", ["Check Search Console traffic drops", "Content audit: merge, improve, remove", "Avoid thin affiliate pages", "Patience — recovery takes months"], "Write a recovery plan outline if traffic dropped 30% post-update."],
      ["SEO Tools: GSC, Ahrefs, SEMrush, Screaming Frog", "base", "Each tool covers research, audit, or tracking.", ["GSC: free, Google's data", "Ahrefs/SEMrush: keywords, competitors", "Screaming Frog: technical crawl desktop", "Pick stack by budget and role"], "Compare GSC vs one paid tool — 5 features each."],
      ["Voice Search Optimization", "base", "Conversational queries and featured snippets.", ["FAQ schema and natural Q&A headings", "Short direct answers at top", "Local 'near me' queries", "Mobile and fast pages"], "Write 5 voice-style questions + 2-sentence answers for a recipe site."],
      ["Visual Search and Image SEO", "base", "Google Lens, Pinterest — alt text, file names, structured data.", ["Descriptive alt text not keyword spam", "High-quality compressed images", "Image sitemaps for large catalogs", "Product images for e-commerce"], "Optimize 3 image filenames and alt texts for a product page."],
      ["AI Search and AI Overviews (SGE) Optimization", "base", "Answer engines summarize sources — clarity, citations, structured content win.", ["Definitive concise answers", "Original data and expertise", "Brand mentions across web", "Monitor AI referral traffic in analytics"], "Restructure one article section for AI citation: definition, steps, FAQ."],
    ]
  ),

  mod(
    "sem-ppc",
    "Module 5 — SEM / PPC",
    "Google Ads, campaign types, Bing, bidding, Quality Score, structure, tracking, remarketing.",
    "DollarSign",
    "bg-orange-500",
    4,
    [
      ["Google Ads Platform Overview", "base", "Auction-based ads on Search, Display, YouTube, and more.", ["Account → campaigns → ad groups → ads/keywords", "Billing and conversion goals setup", "Google Ads Editor for bulk work", "Policy compliance required"], "Explore Google Ads demo or skillshop; list 4 campaign types available."],
      ["Search Campaigns", "base", "Text ads on Google search results for high-intent keywords.", ["Match user query with ad and landing page", "SKAG vs themed ad groups", "RSA with multiple headlines", "Search partners optional"], "Draft one RSA with 3 headlines and 2 descriptions for a plumber."],
      ["Display and Demand Gen Campaigns", "base", "Visual ads across sites and apps; Demand Gen on YouTube, Discover, Gmail.", ["Awareness and remarketing use cases", "Responsive display ads", "Audience targeting critical", "Exclude poor placements"], "Define 3 custom audiences for a travel brand display campaign."],
      ["Shopping Campaigns", "base", "Product feed ads for e-commerce in Shopping tab.", ["Merchant Center feed quality", "Product title and image optimization", "Performance Max often includes Shopping", "Track ROAS per product"], "List Merchant Center feed attributes required for one SKU."],
      ["Video and YouTube Ads", "base", "Skippable in-stream, bumper, video action campaigns.", ["Hook in first 5 seconds", "Targeting: topics, placements, custom intent", "View-through conversions", "Link to video marketing module"], "Storyboard a 15-second bumper ad in 4 scenes."],
      ["Performance Max Campaigns", "base", "Automated cross-channel campaigns using assets and goals.", ["Asset groups: images, video, text", "Audience signals guide ML", "Less control, more reach", "Monitor search terms and brand"], "List assets needed to launch one PMax campaign."],
      ["Microsoft Bing Ads", "base", "Lower CPC often; imports from Google; older demographic skew.", ["Import Google campaigns", "LinkedIn profile targeting unique", "Smaller volume but incremental", "Same fundamentals as Google"], "Note 3 reasons to test Bing for a B2B advertiser."],
      ["Keyword Match Types and Bidding", "base", "Broad, phrase, exact; Smart Bidding uses ML.", ["Negative keywords essential", "Manual CPC for learning phase", "Target CPA/ROAS when data exists", "Bid adjustments by device/location"], "Build keyword list: 5 exact, 5 phrase, 5 negative for SaaS."],
      ["Ad Copywriting and Ad Extensions", "base", "Compelling copy plus sitelinks, callouts, structured snippets.", ["Include keyword in headline when natural", "USP in description", "Extensions improve CTR and Quality Score", "A/B test messaging"], "Write full search ad + 4 extensions for a gym membership."],
      ["Quality Score and Ad Rank", "base", "Expected CTR, ad relevance, landing page experience determine rank and CPC.", ["Higher QS lowers CPC", "Tight keyword-ad-landing alignment", "Improve page speed and relevance", "QS 7+ is healthy target"], "Diagnose low QS: list 3 fixes for keyword-ad-page mismatch."],
      ["Account Structure and Budgets", "base", "Clean structure enables reporting and scale.", ["Separate brand vs non-brand", "Campaign budget vs shared budgets", "Daily caps vs monthly pacing", "Label experiments"], "Draw campaign tree for ecommerce: brand, non-brand, remarketing."],
      ["Conversion Tracking and Google Tag", "base", "Tags fire on purchases, leads, calls — data feeds bidding.", ["Google tag via GTM or direct", "Enhanced conversions for accuracy", "Import offline conversions for CRM", "Test with Tag Assistant"], "List events to track for a lead gen site and how you'd verify firing."],
      ["Remarketing and Retargeting", "base", "Show ads to past visitors or customer lists.", ["Audience segments by page depth", "Frequency caps avoid annoyance", "Exclude converters", "Sequential messaging by funnel stage"], "Define 3 remarketing lists with rules and ad message each."],
      ["Negative Keywords and Search Term Mining", "base", "Review search terms report; add negatives to cut waste.", ["Weekly search term review habit", "Broad match needs more negatives", "Shared negative lists", "Mine winners for new exact keywords"], "From sample search terms, mark 5 as negative and 5 as keep."],
    ]
  ),

  mod(
    "content-marketing",
    "Module 6 — Content Marketing",
    "Strategy, formats, copywriting, calendar, distribution, repurposing, and measurement.",
    "FileText",
    "bg-amber-500",
    5,
    [
      ["Content Strategy and the Content Funnel", "base", "Plan content by audience, funnel stage, and business goal.", ["Content mission statement", "Audit existing content gaps", "Editorial themes per quarter", "Align with SEO keyword map"], "Write content mission in 2 sentences for a B2B fintech blog."],
      ["Blog Posts and Long-Form Articles", "base", "Workhorse of SEO and thought leadership.", ["Outline before writing", "Original insight beats rewrites", "Update old posts for freshness", "Internal links to money pages"], "Create detailed outline for 1500-word post with H2s."],
      ["Ebooks, Whitepapers, and Case Studies", "base", "Gated depth for leads; case studies prove ROI.", ["Ebook: one big problem solved", "Whitepaper: research and data", "Case study: challenge, solution, metrics", "Design matters for perceived value"], "Outline case study structure for fictional client + 3 metrics."],
      ["Infographics, Video, and Podcasts", "base", "Visual and audio formats extend reach and repurposing.", ["Infographic: one story, cite sources", "Video: hook, value, CTA", "Podcast: consistency and guests", "Transcripts help SEO"], "Pick one pillar article; plan 3 derivative formats."],
      ["Copywriting and Storytelling", "base", "Clear, benefit-led copy with narrative arc.", ["Features → benefits → outcomes", "Story: character, problem, guide, plan", "Active voice and short sentences", "One idea per paragraph"], "Rewrite 200 words of bland copy using story framework."],
      ["Editorial Calendar and Content Planning", "base", "Schedule production, owners, channels, and publish dates.", ["Monthly themes", "Buffer for timely news", "Template: title, stage, format, owner", "Tools: Notion, Airtable, CoSchedule"], "Build 4-week calendar with 8 pieces and dates."],
      ["Content Distribution and Amplification", "base", "Publish plus promote — email, social, partners, paid boost.", ["Rule of thumb: spend 20% create, 80% promote", "Employee advocacy", "Newsletter feature", "Repurpose per channel native format"], "Write distribution checklist for one new blog post (10 actions)."],
      ["Content Repurposing Workflows", "base", "One asset becomes many — efficiency and consistency.", ["Webinar → blog + clips + quotes", "Blog → thread + carousel + email", "Batch record short videos", "Maintain brand voice across cuts"], "Take one topic; list 7 repurposed assets with channel."],
      ["Content for Each Funnel Stage", "base", "TOFU educate, MOFU compare, BOFU convert.", ["TOFU: how-to, trends", "MOFU: comparisons, webinars", "BOFU: demos, testimonials, pricing pages", "Retention: onboarding content"], "Assign 3 existing pieces from web to funnel stages."],
      ["Measuring Content Performance", "base", "Traffic, engagement, assisted conversions, content ROI.", ["GA4 landing pages and events", "Time on page not sole metric", "Attribution to pipeline for B2B", "Content decay reports quarterly"], "Define 5 KPIs for blog and how to track in GA4."],
    ]
  ),

  mod(
    "social-media",
    "Module 7 — Social Media Marketing",
    "Platforms, organic, paid social, calendar, community, listening, UGC, and social commerce.",
    "Share2",
    "bg-sky-500",
    6,
    [
      ["Social Platform Landscape Overview", "base", "Facebook, Instagram, LinkedIn, X, TikTok, YouTube, Pinterest, Threads, Snapchat — different audiences.", ["B2B skews LinkedIn", "Gen Z: TikTok, Instagram Reels", "YouTube long-form + Shorts", "Pick 2–3 platforms max at start"], "Choose 2 platforms for a brand you like; justify with audience data."],
      ["Choosing the Right Platforms", "base", "Go where your ICP spends time; don't spread thin.", ["Research competitor presence", "Test 90 days before quitting", "Resource reality check", "Repurpose across chosen set"], "Write platform rationale doc: 1 page for fictional startup."],
      ["Organic Social Strategy and Content Pillars", "base", "Repeatable themes: educate, entertain, inspire, promote (80/20 rule).", ["3–5 pillars documented", "Brand voice guide", "Native formats per platform", "Consistency beats viral lottery"], "Define 4 content pillars + 3 post ideas each for a cafe."],
      ["Facebook and Instagram Marketing", "base", "Meta ecosystem: feed, Stories, Reels, Groups, Shops.", ["Business suite scheduling", "Reels for reach", "Community in Groups", "Shop and catalog for D2C"], "Plan 1 week of IG: 3 Reels, 2 carousels, 2 Stories themes."],
      ["LinkedIn Marketing Organic and Paid", "base", "B2B thought leadership and precise job targeting ads.", ["Personal + company page strategy", "Document posts and newsletters", "LinkedIn Ads: lead gen forms", "Employee advocacy"], "Draft LinkedIn post hook + 3 bullet value for SaaS CEO."],
      ["X (Twitter) and Threads", "base", "Real-time conversation and text-first communities.", ["Short punchy takes", "Engage in replies", "Threads for lighter Meta audience", "Avoid ratio without strategy"], "Write 5 tweet angles for product launch (no links yet)."],
      ["TikTok and Short-Form Video", "base", "Algorithm favors watch time and hooks; authenticity wins.", ["First 2 seconds critical", "Trends vs evergreen education", "TikTok Shop emerging", "Repurpose to Reels/Shorts"], "Script 30-second TikTok: hook, value, soft CTA."],
      ["YouTube and Pinterest Strategy", "base", "Searchable video and visual discovery engines.", ["YouTube SEO: title, thumb, chapters", "Playlists and consistency", "Pinterest pins as evergreen traffic", "Idea pins and shopping"], "Outline YouTube video: title, thumb idea, 5 chapter timestamps."],
      ["Paid Social: Meta, LinkedIn, TikTok Ads", "base", "Paid extends reach with targeting and retargeting.", ["Campaign objective matches funnel", "Creative testing 3–5 variants", "Pixel / CAPI tracking", "Lookalike and custom audiences"], "Define Meta campaign: objective, audience, 2 creatives, KPI."],
      ["Social Media Calendar and Scheduling", "base", "Plan posts; tools: Buffer, Hootsuite, Later, native schedulers.", ["Batch content weekly", "Timezone of audience", "Leave slots for reactive news", "UTM on link posts"], "Build 2-week calendar in spreadsheet with columns."],
      ["Community Management and Engagement", "base", "Reply, moderate, escalate — builds loyalty and algorithm favor.", ["Response time SLAs", "Saved replies for FAQs", "Crisis escalation path", "Highlight UGC"], "Write community guidelines + 5 saved replies."],
      ["Social Listening and Reputation", "base", "Monitor brand mentions and sentiment.", ["Tools: Brand24, Mention, native alerts", "Join conversations helpfully", "Address complaints publicly then DM", "Report trends to product"], "Set up free Google Alerts; list 5 keywords to monitor."],
      ["User-Generated Content (UGC)", "base", "Customers create proof — contests, hashtags, rights.", ["Ask permission before repost", "Campaign hashtag clear", "Incentives without fake reviews", "UGC in ads with whitelisting"], "Design UGC campaign brief for skincare brand."],
      ["Social Commerce", "base", "Shop in-app: Instagram Shop, TikTok Shop, Facebook Marketplace.", ["Product tagging in posts", "Live shopping events", "Sync inventory", "Trust and returns policy visible"], "List 5 steps to launch Instagram Shop for 10 SKUs."],
    ]
  ),

  mod(
    "email-marketing",
    "Module 8 — Email Marketing",
    "List building, segmentation, email types, automation, deliverability, metrics, tools, compliance.",
    "Mail",
    "bg-indigo-500",
    7,
    [
      ["Email List Building and Lead Capture", "base", "Permission-based lists via site forms, lead magnets, checkout.", ["Double opt-in in EU often", "Pop-ups timed not instant annoy", "List quality > size", "Sunset inactive subscribers"], "Sketch 3 list growth tactics with expected signup rate ideas."],
      ["Segmentation and Personalization", "base", "Send relevant emails by behavior, purchase, persona.", ["RFM for e-commerce", "B2B: industry, role, stage", "Dynamic content blocks", "Avoid creepy over-personalization"], "Define 4 segments for online bookstore and email theme each."],
      ["Newsletters and Promotional Emails", "base", "Newsletter = relationship; promo = offer with deadline.", ["Consistent send day", "One primary CTA per promo", "Balance value vs sell", "Preview text matters"], "Write newsletter outline: subject, 3 sections, CTA."],
      ["Transactional Email Basics", "base", "Order confirms, password reset — high open rates, don't waste.", ["Upsell related product subtly", "Brand tone consistent", "Deliverability separate IP sometimes", "Mobile-friendly templates"], "List 5 transactional touchpoints for SaaS and upsell idea each."],
      ["Drip Campaigns and Email Automation", "base", "Triggered series based on signup or behavior.", ["Welcome, abandoned cart, re-engagement", "If/then branches", "Delay timers between emails", "Goal: one conversion event"], "Map 5-email welcome automation with triggers."],
      ["Subject Lines, Copy, and Design", "base", "Subject drives opens; body drives clicks; design supports scanability.", ["40–50 char mobile subjects", "Curiosity vs clarity tests", "Single column mobile", "Alt text on images"], "Write 10 subject lines for same offer; pick top 3 and why."],
      ["Deliverability and Sender Reputation", "base", "ISP trust: authentication, complaints, bounces.", ["SPF, DKIM, DMARC setup", "Warm up new domains slowly", "Remove hard bounces", "Avoid spam trigger words excess"], "Checklist 8 deliverability fixes for new domain."],
      ["Email A/B Testing", "base", "Test subject, CTA, send time, content layout.", ["One variable", "Sample size sufficient", "Winner to remainder or next send", "Document learnings"], "Design A/B test: hypothesis, variants, success metric."],
      ["Email Metrics: Opens, CTR, Conversions", "base", "Open rate declining due to privacy; clicks and revenue matter more.", ["CTR = clicks ÷ delivered", "Conversion rate on email traffic", "Unsubscribe rate benchmark", "Revenue per recipient"], "Interpret sample email report; recommend 3 optimizations."],
      ["Email Tools: Mailchimp, Klaviyo, HubSpot", "base", "ESP choice by ecommerce vs B2B vs complexity.", ["Klaviyo: Shopify ecosystem", "HubSpot: CRM integrated", "Mailchimp: SMB friendly", "ActiveCampaign: automation power"], "Compare 2 ESPs for a D2C store in table format."],
      ["Email Compliance: GDPR and CAN-SPAM", "base", "Consent, unsubscribe, physical address, data rights.", ["CAN-SPAM: opt-out, address, no deception", "GDPR: lawful basis, records", "HIPAA etc. for regulated", "Preference center"], "Audit sample email for compliance checklist 10 items."],
    ]
  ),

  mod(
    "automation-crm",
    "Module 9 — Marketing Automation & CRM",
    "Automation, lead scoring, MQL/SQL, workflows, CRM integration, nurture campaigns, platforms.",
    "Workflow",
    "bg-purple-500",
    8,
    [
      ["What Is Marketing Automation", "base", "Software runs repetitive marketing tasks based on rules and behavior.", ["Saves time on nurture and handoffs", "Requires clean data", "Start simple then complex", "Aligns marketing and sales"], "List 5 tasks you'd automate for a B2B webinar funnel."],
      ["Lead Scoring and Qualification", "base", "Points for fit and behavior; threshold for sales-ready.", ["Fit: title, company size", "Behavior: pricing page, demo request", "Negative scores for bad fit", "Review model quarterly"], "Build simple lead score model with 10 rules."],
      ["MQL vs SQL Definitions", "base", "Marketing Qualified Lead ready for nurture/sales; Sales Qualified Lead accepted by sales.", ["SLA between teams", "Shared definitions documented", "Rejection feedback loop", "Different funnels per product"], "Write MQL and SQL criteria for $5k/mo software."],
      ["Workflows and Triggered Campaigns", "base", "If contact does X, send Y, notify sales, update field.", ["Delays and goal steps", "Suppression for customers", "Test with internal contacts", "Monitor enrollment caps"], "Draw workflow: form submit → 3 emails → sales task."],
      ["CRM Fundamentals and Integration", "base", "Single customer record: marketing, sales, support.", ["HubSpot, Salesforce, Pipedrive roles", "Sync forms and ads leads", "Duplicate management", "Pipeline stages mirror journey"], "Map CRM fields needed for lead from ad to close."],
      ["Drip and Nurture Campaigns in CRM", "base", "Long-term education until timing right.", ["Content tracks by persona", "Sales triggers on score", "Pause on reply", "Measure influenced revenue"], "Outline 90-day nurture for CFO persona."],
      ["Marketing Automation Platforms Compared", "base", "HubSpot, Marketo, ActiveCampaign, Salesforce Marketing Cloud.", ["SMB vs enterprise", "Native CRM vs integration", "Pricing models", "Certification paths"], "Pick platform for 50-person B2B and justify in 1 page."],
    ]
  ),

  mod(
    "analytics",
    "Module 10 — Analytics & Measurement",
    "GA4, GTM, UTMs, dashboards, attribution, reporting, conversion tracking, data decisions.",
    "BarChart3",
    "bg-emerald-500",
    9,
    [
      ["Google Analytics 4 (GA4) Fundamentals", "base", "Event-based analytics across web and app.", ["Events vs pageviews", "Explorations and funnels", "Conversions marked from events", "Privacy and consent mode"], "List 10 events to configure for lead gen site."],
      ["Google Tag Manager (GTM)", "base", "Deploy tags without code deploys; triggers and variables.", ["Container, tags, triggers", "Preview mode debug", "Data layer for ecommerce", "Version and publish workflow"], "Document GTM plan: 3 tags, 3 triggers for one site."],
      ["UTM Parameters and Campaign Tracking", "base", "utm_source, medium, campaign, content, term for clean reports.", ["Naming convention doc", "Lowercase consistency", "Auto-tagging for Google Ads", "Spreadsheet builder for team"], "Create UTM convention doc + 3 example URLs."],
      ["KPIs and Marketing Dashboards", "base", "One screen for executives: traffic, leads, CPA, ROAS.", ["Looker Studio, GA4, HubSpot reports", "Weekly vs monthly views", "Red/yellow/green thresholds", "Action notes not just numbers"], "Sketch dashboard wireframe with 8 widgets."],
      ["Attribution Models Explained", "base", "First-touch, last-touch, linear, time-decay, data-driven.", ["No model is perfect", "Long B2B cycles need multi-touch", "GA4 attribution reports", "Align with finance on definition"], "Compare first vs last touch for 3-channel journey example."],
      ["Reporting and Data Storytelling", "base", "Insights → so what → now what for stakeholders.", ["Lead with recommendation", "Visualize trends not tables only", "Context vs prior period", "Honest about limitations"], "Write 1-page monthly report outline for client."],
      ["Cross-Channel Conversion Tracking", "base", "Pixels, offline imports, CRM closed-loop.", ["Meta CAPI + pixel", "Google enhanced conversions", "Import SQL from CRM", "Dedupe rules"], "List tracking stack for D2C: web, ads, email, CRM."],
      ["Data-Driven Decision Making", "base", "Hypothesis, test, measure, iterate culture.", ["Avoid vanity metrics", "Statistical significance", "Document experiments", "Fail fast small bets"], "Write decision memo: data, options, recommendation."],
    ]
  ),

  mod(
    "other-channels",
    "Module 11 — Other Channels & Specializations",
    "Affiliate, influencer, video, mobile, SMS, push, e-commerce, programmatic, native ads.",
    "Radio",
    "bg-pink-500",
    10,
    [
      ["Affiliate Marketing", "base", "Partners earn commission for driving sales or leads.", ["Networks: ShareASale, Impact", "Commission and cookie window", "Fraud and brand bidding rules", "Creative and landing alignment"], "Outline affiliate program terms for 20% commission product."],
      ["Influencer Marketing", "base", "Creators promote to their audience — nano to mega tiers.", ["Brief clear deliverables", "Disclosure #ad required", "Whitelisting for ads", "Measure with codes and UTMs"], "Write influencer brief for skincare launch."],
      ["Video Marketing and YouTube SEO", "base", "Video builds trust; YouTube is second largest search engine.", ["Keyword in title; custom thumbnail", "Chapters and end screens", "Shorts for discovery", "Embed on site for dwell time"], "Plan YouTube content pyramid: 1 hero, 4 hub, 12 help videos."],
      ["Mobile Marketing and App Promotion", "base", "In-app messages, push, mobile ads, deep links.", ["App install campaigns", "Retention push not spam", "Deep link to screen", "Measure LTV by channel"], "List 5 mobile tactics for new food delivery app."],
      ["App Store Optimization (ASO)", "base", "Rank in App Store and Play Store search.", ["Title, subtitle, keywords", "Screenshots and preview video", "Ratings and reviews velocity", "A/B store listing tests"], "Optimize fictional app listing: title, 5 bullets, keywords."],
      ["SMS and WhatsApp Marketing", "base", "High open rates; strict opt-in and regulations.", ["TCPA compliance US", "WhatsApp Business API", "Short concise offers", "Opt-out STOP"], "Write 3 SMS messages for flash sale with compliance notes."],
      ["Push Notification Marketing", "base", "Web and app push for re-engagement.", ["Permission prompt timing", "Segment by behavior", "Rich notifications", "Don't over-send"], "Plan push strategy: 4 notification types with triggers."],
      ["E-commerce and Marketplace Marketing", "base", "Amazon ads, marketplace SEO, cart abandonment.", ["Amazon PPC basics", "Reviews and A+ content", "Cart abandonment email/SMS", "Unified inventory messaging"], "Compare DTC site vs Amazon strategy for one brand."],
      ["Programmatic Advertising", "base", "Automated RTB display/video across exchanges.", ["DSP, SSP, DMP vocabulary", "Brand safety blocklists", "Viewability metrics", "Agency-heavy channel"], "Explain programmatic in plain English to a CEO in 5 sentences."],
      ["Native Advertising", "base", "Paid content matching editorial feed — Taboola, Outbrain, in-feed social.", ["Label as sponsored", "Story-style landing", "Lower CTR than search sometimes", "Good for content promotion"], "Compare native vs display pros/cons table."],
    ]
  ),

  mod(
    "strategy-branding",
    "Module 12 — Strategy, Branding & Planning",
    "End-to-end strategy, brand voice, competitive analysis, budgeting, integrated campaigns.",
    "Compass",
    "bg-rose-500",
    11,
    [
      ["Building a Digital Marketing Strategy End-to-End", "base", "Research → goals → audience → channels → plan → measure → optimize.", ["Situation analysis first", "Channel mix from STP", "Quarterly roadmap", "Resource and budget realistic"], "Write 1-page strategy summary for fictional D2C brand."],
      ["Branding, Brand Voice, and Positioning", "base", "Brand is perception; voice is how you sound consistently.", ["Voice chart: formal/casual, funny/serious", "Visual identity basics", "Positioning statement template", "Internal brand guide"], "Create voice chart with 4 dimensions for tech startup."],
      ["Competitive and Market Analysis", "base", "Size market, map competitors, find white space.", ["TAM SAM SOM", "Competitor matrix features and price", "SWOT per major rival", "Trends PESTLE optional"], "Build competitor matrix with 5 rivals and 6 criteria."],
      ["Budgeting and Channel Allocation", "base", "Split budget by goal, CAC targets, and test reserve.", ["70/20/10 core/test/learn", "CAC payback period", "Seasonality", "Reforecast monthly"], "Allocate $10k/mo across 5 channels with %."],
      ["Campaign Planning and Project Management", "base", "Brief, timeline, assets, approvals, launch checklist.", ["Gantt or kanban", "RACI roles", "Creative rounds", "Post-mortem template"], "Write campaign brief: objective, audience, channels, KPIs, dates."],
      ["Integrated Multi-Channel Campaigns", "base", "Same story across email, social, ads, PR — unified measurement.", ["Hero message one line", "Channel-specific execution", "UTM and dashboard", "Retargeting ties it together"], "Design integrated launch for product: 6 touchpoints."],
    ]
  ),

  mod(
    "advanced-emerging",
    "Module 13 — Advanced & Emerging Topics",
    "AI in marketing, ABM, growth hacking, chatbots, personalization, privacy, Web3.",
    "Sparkles",
    "bg-yellow-500",
    12,
    [
      ["AI in Marketing and AI Tools", "base", "GenAI for copy, images, analysis — human review required.", ["Use AI for drafts and variants", "Fact-check and brand voice edit", "Don't publish raw hallucinations", "Disclose AI where policy requires"], "List 5 safe AI uses and 3 risks for client work."],
      ["Account-Based Marketing (ABM)", "base", "Target named accounts with personalized campaigns — B2B.", ["Tier 1 accounts custom", "LinkedIn + direct mail + SDR", "Measure engagement per account", "Sales alignment critical"], "Pick 10 dream accounts; outline ABM tactics for one."],
      ["Growth Marketing and Growth Hacking", "base", "Rapid experiment loops across product and marketing.", ["North star metric", "ICE score prioritization", "Viral loops and referrals", "Cross-functional squad"], "Generate 10 growth ideas; ICE score top 3."],
      ["Conversational Marketing and Chatbots", "base", "Live chat and bots qualify leads 24/7.", ["Qualify before human handoff", "Train on FAQs", "GDPR on chat data", "Measure booked meetings"], "Write chatbot flow: 5 questions to book demo."],
      ["Personalization at Scale", "base", "Dynamic web, email, ads using first-party data.", ["Segments not creepy 1:1 fake", "CDP unifies data", "Test lift vs control", "Cookie deprecation ready"], "Plan 3 personalization rules for returning visitors."],
      ["Privacy and the Cookieless Future", "base", "First-party data, server-side tracking, consent platforms.", ["Chrome third-party cookie changes", "Consent Management Platforms", "Server-side GTM", "Contextual ads return"], "Write first-party data collection plan post-cookies."],
      ["Web3, Metaverse, and Emerging Channels", "base", "Experimental — NFTs, virtual events, new platforms.", ["Evaluate hype vs audience fit", "Small pilots only", "Brand risk on unproven tech", "Measure like any campaign"], "Write go/no-go criteria for metaverse pilot."],
    ]
  ),

  mod(
    "legal-career",
    "Module 14 — Legal, Ethics & Career",
    "Privacy laws, ad standards, ethics, certifications, portfolio, career paths.",
    "GraduationCap",
    "bg-slate-500",
    13,
    [
      ["Data Privacy: GDPR and CCPA", "base", "EU GDPR and California CCPA/CPRA rights and business duties.", ["Lawful basis and consent", "Data subject requests", "Privacy policy and records", "Vendor DPAs"], "Checklist 12 GDPR items for marketing site."],
      ["Advertising Standards and Disclosure", "base", "FTC endorsements, #ad, truthful claims, comparative ads.", ["Influencer disclosure rules", "Substantiate health/wealth claims", "Native ad labeling", "Country-specific rules"], "Review 3 ads; note disclosure and claim issues."],
      ["Marketing Ethics", "base", "Honesty, respect, inclusivity, avoid dark patterns.", ["Dark patterns erode trust", "Inclusive imagery and language", "Children and sensitive targeting limits", "Long-term brand > short trick"], "Write ethics policy 8 bullets for agency."],
      ["Certifications: Google, Meta, HubSpot", "base", "Credentials prove baseline skills to employers.", ["Google Ads Search cert", "Meta Certified Digital Marketing", "HubSpot inbound", "Renew and apply to portfolio"], "Pick 2 certs; list study plan 4 weeks each."],
      ["Building a Marketing Portfolio and Case Studies", "base", "Show problem, your role, actions, metrics — even spec projects.", ["Before/after screenshots", "Anonymize client data OK", "Spec campaigns welcome", "PDF + live site"], "Outline one case study template you'll fill."],
      ["Freelance vs Agency vs In-House Careers", "base", "Paths differ in breadth, depth, pace, and income.", ["Freelance: variety, sales burden", "Agency: fast learning, clients", "In-house: deep brand, politics", "T-shaped skills win"], "Write 5-year career plan for your preferred path."],
      ["Capstone: Full Marketing Plan Project", "advanced", "Synthesize all modules into one documented plan for a brand.", ["STP, funnel, channel mix, calendar", "Budget and KPIs", "90-day roadmap", "Presentation ready"], "Complete capstone: 5-page marketing plan for chosen brand."],
    ]
  ),
];

/** Strip "Module N — " prefix and assign sequential order */
function finalizeTracks(tracks) {
  return tracks.map((track, order) => ({
    ...track,
    order,
    title: track.title.replace(/^Module \d+ — /, ""),
  }));
}

export const FULL_CURRICULUM_TRACKS = finalizeTracks([...CORE_TRACKS, ...MMS_EXPANSION_TRACKS]);
