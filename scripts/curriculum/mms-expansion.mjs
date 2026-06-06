/**
 * MMS HTML + image gaps — modules 15–26 and social/funnel additions.
 */
import { lessonsFromRows } from "./dm-lesson-builder.mjs";

function mod(id, title, description, icon, color, order, rows) {
  return { id, title, description, icon, color, order, lessons: lessonsFromRows(id, rows.map(([t, level, summary, sections, practice]) => [t, level, summary, sections, practice, []])) };
}

export const MMS_EXPANSION_TRACKS = [
  mod("distribution-growth", "Module 15 — Distribution & Growth Moat", "20 distribution principles, 9 growth engines, PLG, referrals, and platform arbitrage.", "TrendingUp", "bg-lime-600", 14, [
    ["Distribution as a Moat in an AI World", "base", "When AI makes products similar, distribution — who knows and trusts you — becomes the defensible advantage.", ["AI commoditizes features fast", "Audience and trust are harder to copy", "Owned channels beat rented algorithms", "Founders must be distribution-led"], "Pick 3 brands winning on distribution not tech; explain moat in 5 bullets each."],
    ["The AI-Proof Business Model", "base", "People buy from who they know; distribution compounds while features get cloned.", ["Brand + community + email = owned", "Product parity is normal in SaaS", "Speed of distribution tests wins", "Document your unfair distribution channel"], "Write your business one-liner: product + unique distribution angle."],
    ["Zero-to-One Distribution Rule", "base", "Own ONE channel before spreading thin — depth beats mediocre presence on five platforms.", ["One channel to proficiency first", "90-day focus minimum", "Measure one primary metric", "Expand only after repeatability"], "Commit to one channel for 90 days; define success metric."],
    ["The 1,000 True Fans Multiplier", "base", "Kevin Kelly model — 1,000 people who buy anything beats 100,000 passive followers.", ["True fans refer and defend brand", "Niche depth > broad vanity", "Monetize smallest viable audience", "Email captures true fans"], "Define who your 1,000 true fans are; list 5 traits."],
    ["Content Velocity Beats Perfection", "base", "Three good pieces weekly beats one monthly masterpiece for momentum and algorithm favor.", ["Consistency trains audience habit", "Iteration improves faster than polishing", "Repurpose one idea seven ways", "Ship then refine from data"], "Plan 3 content pieces this week same topic, different formats."],
    ["Write the Playbook, Don't Follow It", "base", "Best ROI often on newer platforms before playbooks exist — early mover advantage.", ["Crowded channel = higher CAC", "Test emerging surfaces small", "Document your own playbook", "Sunset what stops working"], "Name one underused channel in your niche; draft 2-week test."],
    ["Referral Physics", "base", "Sharing must feel selfishly valuable — both parties gain from referral.", ["Double-sided incentives work", "Ask at aha moment not signup", "Track K-factor or referral %", "Dropbox 100K→4M case study"], "Design referral offer: what referrer gets, what friend gets."],
    ["Platform Arbitrage Strategy", "base", "Ride platforms that boost creators to grow their own network (TikTok early, LinkedIn video).", ["Watch platform policy changes", "Batch content for new features", "Exit before arbitrage closes", "Don't build only on rented land"], "List 2 platforms currently boosting new formats; one test post idea each."],
    ["Audience-to-Ownership Pipeline", "base", "Move followers to email list or community fast — algorithm-independent reach.", ["Every post needs ownership CTA", "Lead magnet specificity drives opt-in", "10K email > 100K passive social", "Beehiiv/Morning Brew model"], "Map one social post → landing page → email sequence."],
    ["Hook Engineering Framework", "base", "Open with pattern interrupt; deliver value; clear next step — first 3 seconds decide scroll or stay.", ["Hook → value → CTA structure", "Thumbnail/title match for video", "Test 5 hooks per core idea", "Comments signal LinkedIn/X reach"], "Write 5 hooks for one topic; pick winner with criteria."],
    ["Community Ownership Loops", "base", "Members gain status for contributing — stakeholders grow the community.", ["Roles: moderator, contributor, VIP", "Recognize top members publicly", "Community precedes product for some brands", "Circle, Discord, Slack models"], "Sketch 3 status tiers and perks for a community you could build."],
    ["Nine Growth Engines That Work", "intermediate", "PLG, reverse trial, content compounding, founder-led, free tool SEO, community, referral, integrations, email flywheel.", ["Pick 1 primary + 1 secondary engine", "HubSpot grader = free tool SEO", "Zapier integration GTM", "Not all engines fit all products"], "Score 9 engines 1–5 fit for your product; justify top 2."],
    ["Product-Led Growth (PLG)", "intermediate", "Product drives acquisition, activation, expansion — Slack invites, Figma files, Calendly links.", ["Free tier or viral loop in product", "Activation event defined", "In-app upgrade at value moment", "Sales assists enterprise only"], "Define activation event and one in-product viral loop."],
    ["The Content Compounding Engine", "intermediate", "2–3 SEO posts/week for 12 months — traffic compounds if you don't quit at month 3.", ["Month 1 vs month 12 traffic gap", "Update pillars quarterly", "Ahrefs/HubSpot playbook", "Patience is the moat"], "Create 12-month content calendar skeleton: 2 posts/week themes."],
  ]),

  mod("icp-list-building", "Module 16 — B2B ICP & List Building", "RevGrowth 7-step protocol: TAM, AI research, scraping, waterfall enrichment, lead scoring.", "Users", "bg-teal-600", 15, [
    ["ICP List Building Protocol Overview", "base", "Seven-step system: TAM → ICP research → client feedback → scrape → multi-provider → waterfall enrich → score.", ["B2B outbound requires clean data", "ICP before volume", "Waterfall beats single tool", "AI assists research not replaces strategy"], "Draw the 7 steps as flowchart with your tools labeled."],
    ["TAM Assessment with AI and Data Tools", "base", "Size the market with GPT research, DiscoLike lookalikes, Apollo filters.", ["TAM = total companies fitting filters", "SAM = serviceable slice", "SOM = realistic first-year target", "Apollo comprehensive filters"], "Estimate TAM for one ICP in Apollo; export count."],
    ["ICP Research with AI (GPT-4, Claude, Claygent)", "base", "AI web research for segments, personas, and messaging angles.", ["GPT-4 for broad research", "Claude for strategy narrative", "Claygent for structured web scrape", "Validate AI output with 5 customer calls"], "Prompt AI for 3 segments; verify one with real company example."],
    ["Client Feedback for ICP Refinement", "base", "Ask customers why they bought — refine ICP from reality not assumptions.", ["Win/loss interviews", "Sales call recordings", "Support ticket themes", "Update ICP doc quarterly"], "Write 5 interview questions for recent customers."],
    ["Scraping TAM Data at Scale", "base", "Crunchbase, BuiltWith, Apify, Store Leads — collect firmographics and tech stack.", ["Employee count, location, industry", "Technologies used = intent", "Decision makers and departments", "Apify community scrapers"], "List 8 data fields you need per account; source each."],
    ["Multi-Provider Data Strategy", "base", "No vendor has 100% coverage — stack Apollo, PandaMatch, PitchBook, etc.", ["Overlap dedupe rules", "Cost per field vs accuracy", "Document provider strengths", "Refresh cadence monthly"], "Compare 3 providers in table: coverage, price, best for."],
    ["Waterfall Enrichment Workflow", "intermediate", "Apollo → Prospeo → Icypeas → LeadMagic — sequential until email verified.", ["Stop at first valid email", "Track yield per step", "Protect sender reputation", "Never blast unverified lists"], "Build waterfall diagram with your tool choices."],
    ["AI Lead Scoring and TAM Scoring", "advanced", "Clay Claygent scores accounts: Meta ads running, pricing page, intent signals.", ["Score 0–100 vs ICP", "Weight fit vs behavior", "Routing to SDR above threshold", "Review model monthly"], "Define 10 scoring rules with point values."],
  ]),

  mod("aeo-geo", "Module 17 — AEO + GEO (AI Search)", "Answer Engine and Generative Engine Optimization for snippets, AI Overviews, and citations.", "Bot", "bg-blue-600", 16, [
    ["Search Has Fragmented — SEO, AEO, GEO", "base", "Users search Google, ChatGPT, Perplexity — optimize for all discovery surfaces.", ["SEO = rankings", "AEO = direct answers", "GEO = cited in AI summaries", "Fragmented measurement"], "List 5 queries you'd test in Google vs ChatGPT."],
    ["AEO: Winning Featured Snippets and AI Overviews", "base", "Concise answers, FAQ schema, definition paragraphs AI can lift.", ["40–60 word answer blocks", "Question as H2", "Tables and lists parse well", "Update dates visible"], "Rewrite one article section for snippet format."],
    ["GEO: Getting Cited by AI Tools", "base", "Original data, clear expertise, brand mentions across web help LLM citations.", ["Definitive concise answers", "Cite sources in content", "Digital PR for mentions", "Monitor AI referral traffic"], "Add FAQ block + sources to one page."],
    ["Entity SEO and Knowledge Graph", "intermediate", "Organizations, authors, products as entities — schema and consistent NAP.", ["Organization schema", "Author pages with credentials", "Wikidata/Wikipedia where earned", "SameAs social links"], "Audit Organization schema on homepage."],
    ["SEO vs AEO vs GEO Comparison", "base", "Same content foundation; different formatting and distribution emphasis.", ["SEO: keywords + links", "AEO: structure + snippets", "GEO: authority + originality", "Do all three on pillar pages"], "Create comparison table for your top 3 pages."],
    ["AEO + GEO Implementation Checklist", "base", "Technical and content checklist for AI-era search.", ["FAQ schema on guides", "Speakable summary paragraphs", "PR for brand mentions", "Track Perplexity/ChatGPT referrals"], "Complete checklist for one money page."],
  ]),

  mod("linkedin-marketing", "Module 18 — LinkedIn Marketing", "Personal brand, company page, newsletters, DMs, and LinkedIn Ads for B2B.", "Linkedin", "bg-sky-700", 17, [
    ["Why LinkedIn Is the Top B2B Platform", "base", "4 of 5 users influence business decisions; organic reach still strong for personal profiles.", ["1B+ members", "Professional mindset on platform", "Personal > company reach 6–8x", "Inbound leads from authority posts"], "Audit 3 B2B founders' LinkedIn profiles; note patterns."],
    ["LinkedIn Profile Optimization", "base", "Headline = who you help; banner = CTA; Featured = lead magnet.", ["Headline not job title only", "About first 3 lines hook", "Featured pins best asset", "Creator Mode on"], "Rewrite your headline using value + ICP formula."],
    ["LinkedIn Content Strategy and Formats", "base", "Text posts, carousels, video, newsletters, polls — each format different reach.", ["Carousels high saves", "End posts with questions", "Document posts for B2B", "Thought leadership + story"], "Plan 1 week: 3 text, 1 carousel, 1 poll."],
    ["Growing from 0 to 10K Followers", "intermediate", "5 posts/week 90 days, 20 comments/day, reply within 2 hours.", ["Consistency beats viral lottery", "Comment strategy on big accounts", "Tuesday–Thursday AM posting", "Repurpose top posts"], "Start 90-day calendar with post themes."],
    ["LinkedIn Newsletter Strategy", "intermediate", "Subscribers get notified — owned reach inside LinkedIn.", ["Niche topic not generic", "Biweekly minimum", "Promote in Featured + posts", "Repurpose to standalone posts"], "Draft newsletter name + 5 issue titles."],
    ["LinkedIn Company Page Strategy", "intermediate", "Thought Leader Ads, employee advocacy, events — support personal brands.", ["Amplify founder posts", "Employee sharing program", "LinkedIn Events for webinars", "20% product / 80% value mix"], "Write company page content pillar mix %."],
    ["LinkedIn DM Outreach Done Right", "intermediate", "Never pitch first message; rapport then fit-based offer.", ["Connect note 1 line personalized", "Value before ask", "Pitch after 2–3 exchanges", "Track in CRM"], "Write 3-message DM sequence no pitch until message 3."],
    ["LinkedIn Ads for B2B", "advanced", "Expensive CPC but high-quality leads; Thought Leader Ads, Lead Gen Forms.", ["$5–15 CPC typical", "$50/day minimum test", "Retargeting most efficient", "Job title + company size targeting"], "Design one campaign: objective, audience, format, KPI."],
    ["LinkedIn Marketing Execution Checklist", "base", "Week-by-week launch checklist from MMS.", ["Profile optimized", "Creator Mode", "5x/week posting", "20 comments/day", "Newsletter launched"], "Complete checklist; date your start day."],
  ]),

  mod("cold-outreach", "Module 19 — Cold Outreach", "B2B cold email, LinkedIn sequences, personalization, deliverability, reply handling.", "Send", "bg-orange-600", 18, [
    ["Cold Outreach Fundamentals", "base", "Outbound fills gaps inbound cannot — speed to market with ICP clarity.", ["Permission vs interruption", "Works for enterprise ABM", "Pair with warm nurture", "Compliance CAN-SPAM/GDPR"], "Define when your product should use outbound vs inbound."],
    ["Cold Email Structure That Gets Replies", "base", "Short, personalized, one CTA — problem → proof → ask.", ["<100 words ideal", "No attachments first touch", "One clear CTA", "Follow-up sequence 3–5 touches"], "Write 3-email sequence for fictional B2B offer."],
    ["Personalization at Scale", "intermediate", "First line custom, rest template — Clay, Apollo, custom fields.", ["Trigger-based openers", "Case study from their industry", "Avoid fake personalization", "A/B test first lines"], "Create 5 personalization tokens for your ICP."],
    ["Email Deliverability for Outbound", "intermediate", "Separate domain, warm-up, SPF/DKIM/DMARC, low spam words.", ["Secondary sending domain", "50/day warm-up ramp", "Rotate inboxes", "Monitor bounce rate <2%"], "List deliverability setup steps for new domain."],
    ["LinkedIn Outbound Sequences", "intermediate", "Connect → engage → DM — multichannel with email.", ["Profile view + comment before DM", "Don't duplicate email pitch", "CRM tracks channel", "7–14 day cadence"], "Map 14-day multichannel sequence."],
    ["Reply Handling and Objection Scripts", "base", "Book meeting, nurture, or disqualify — speed to lead matters.", ["Reply templates by type", "SDR handoff SLA", "Track positive reply rate", "CRM stages match replies"], "Write 4 reply templates: interested, later, objection, no."],
    ["Cold Outreach Metrics", "base", "Open rate, reply rate, positive reply, meeting booked, pipeline.", ["Reply rate 1–5% good cold", "Positive reply rate key", "Meetings per 1000 sent", "Compare to inbound CPL"], "Set targets for each metric; benchmark from industry."],
    ["Cold Outreach Launch Checklist", "base", "MMS execution checklist for first campaign.", ["ICP list verified", "Sequences written", "Domain warmed", "CRM integrated", "50 leads/day test batch"], "Run checklist before first 100 sends."],
  ]),

  mod("pr-digital-pr", "Module 20 — PR & Digital PR", "Press, HARO, journalist outreach, digital PR for links and authority.", "Newspaper", "bg-stone-600", 19, [
    ["PR vs Digital PR", "base", "Traditional PR = reputation; digital PR = links + mentions + GEO citations.", ["DR80+ links from tier-1 press", "Referral traffic spikes", "AI tools cite authoritative sources", "One hit compounds years"], "Find 3 digital PR case studies in your niche."],
    ["Five Angles That Earn Press", "base", "Original data, contrarian take, newsjacking, milestone story, product innovation.", ["Survey data journalists love", "Speed on newsjacking", "Bootstrapped growth angles", "Avoid generic launch spam"], "Pick best angle for your brand; 3 headline ideas."],
    ["HARO and Connectively for Free Links", "intermediate", "Respond to journalist queries within 1 hour — 50–100 links/year possible.", ["Filter relevant queries only", "Answer in first paragraph", "Credentials in bio line", "Follow up if published"], "Sign up Connectively; draft response template."],
    ["Journalist Outreach Best Practices", "intermediate", "Research 5 articles, 6-word subject, 3–5 sentence pitch, offer exclusivity.", ["Tuesday–Thursday AM pitch", "No attachments", "Relationship before pitch", "Track publication wins"], "Write pitch email for one story angle."],
    ["Digital PR for Link Building", "intermediate", "Skyscraper, resource pages, broken links, expert roundups.", ["Ahrefs for link targets", "Better content than original", "Outreach spreadsheet", "Measure DR of wins"], "List 10 link targets for skyscraper campaign."],
    ["Press Release Template", "base", "Headline, lead, quote, boilerplate — MMS format.", ["Present tense headline", "CEO quote non-boilerplate", "Media contact clear", "Distribute via relevant wires"], "Draft press release for fictional milestone."],
    ["PR and Digital PR Checklist", "base", "Quarterly PR execution from MMS.", ["HARO daily scan", "10 journalist relationships", "1 data piece per quarter", "Track links and mentions"], "Complete PR checklist for Q1."],
  ]),

  mod("community-marketing", "Module 21 — Community Marketing", "Build Slack, Discord, Circle communities — engagement loops and monetization.", "UsersRound", "bg-violet-600", 20, [
    ["Why Community-Led Growth Works", "base", "Community where ICP already congregates — product becomes natural next step.", ["Webflow, Figma communities", "Lower CAC than paid alone", "Feedback loop accelerates product", "Ownership loops from image 2"], "List 3 communities in your industry; join and observe."],
    ["Choosing Platform: Slack vs Discord vs Circle", "base", "Slack B2B pros; Discord creators/gaming; Circle paid communities.", ["Integration needs", "Moderation workload", "Search and archives", "Monetization built-in"], "Pick platform for your ICP; justify in 1 page."],
    ["Community Onboarding and Rituals", "base", "Welcome channel, intro template, weekly rituals drive retention.", ["Day 0 welcome + rules", "Intro prompt standardized", "Weekly AMA or wins thread", "Recognize contributors"], "Write welcome message + 3 community rules."],
    ["Engagement Loops and Moderation", "intermediate", "Prompts, AMAs, challenges — mods escalate; SLAs for questions.", ["Office hours schedule", "Saved replies for FAQs", "Ban spam fast", "NPS promoters invited to community"], "Plan 4-week engagement calendar."],
    ["Community-Led Product Feedback", "base", "Feature requests, beta testers, champions program.", ["Tag feedback in product tool", "Close loop when shipped", "Champions get early access", "Measure activation of members"], "Define how community input reaches product team."],
    ["Monetizing Communities", "intermediate", "Free community → paid tier, courses, events, sponsorship.", ["Don't monetize too early", "Paid = deeper access", "Align with 1,000 true fans", "Track member LTV"], "Sketch free vs paid tier benefits."],
    ["Community Marketing Checklist", "base", "Launch checklist from MMS patterns.", ["Platform chosen", "Rules + mods assigned", "20 seed members invited", "First month content calendar", "Metrics: active weekly members"], "Launch checklist with dates."],
  ]),

  mod("ecommerce-dtc", "Module 22 — Ecommerce & DTC Marketing", "DTC stack, product pages, ROAS, email flows, cart abandonment.", "ShoppingCart", "bg-red-600", 21, [
    ["The DTC Marketing Stack", "base", "Shopify + Klaviyo + Meta + Google + reviews — integrated measurement.", ["Pixel + CAPI tracking", "SKU-level ROAS", "Email 25%+ revenue target", "UGC in ads"], "Draw your DTC stack diagram with tools."],
    ["Product Page Optimization", "base", "Hero image, benefits, social proof, urgency, mobile checkout.", ["Above-fold CTA", "Reviews near buy button", "Size/fit info reduces returns", "Speed <3s mobile"], "Audit one PDP: 10 improvements ranked."],
    ["ROAS Optimization for DTC", "intermediate", "Creative testing, audience exclusions, margin-aware targets.", ["Break-even ROAS from margin", "Test 3–5 creatives weekly", "Exclude purchasers", "Catalog ads for SKU winners"], "Calculate break-even ROAS for $50 product 60% margin."],
    ["Cart Abandonment Flows", "base", "Email + SMS 1hr, 24hr, 72hr — incentive last touch.", ["Show cart items dynamic", "Free shipping threshold", "SMS higher open", "Stop on purchase"], "Write 3-email abandonment sequence."],
    ["Post-Purchase and Retention Email", "base", "Thank you, cross-sell, review request, replenishment.", ["Review ask day 7", "Replenish timer by product", "VIP segment for repeat", "LTV by cohort"], "Map post-purchase flow 5 emails."],
    ["Meta and Google for Ecommerce", "intermediate", "Advantage+ catalog, PMax, brand search defense.", ["Feed quality in Merchant Center", "UGC video in Meta", "Google Shopping priority", "Retarget 7–30 day window"], "List campaign types for $10k/mo DTC spend."],
    ["Influencer and UGC for DTC", "base", "Micro-influencers + paid UGC creators for ad creative.", ["Whitelisting top performers", "Unique codes per partner", "3–5x CTR UGC vs polish", "Brief template"], "Write UGC creator brief one page."],
    ["Amazon vs DTC Channel Strategy", "base", "Marketplace reach vs owned margin and data.", ["Amazon fees and competition", "DTC owns email", "Unified inventory messaging", "Don't compete on price only"], "Compare pros/cons for your product on Amazon vs site."],
    ["Ecommerce Marketing Checklist", "base", "MMS DTC launch checklist.", ["Tracking verified", "Flows live", "PDP optimized", "Creative library 10 assets", "Weekly ROAS review"], "Complete DTC checklist before scaling spend."],
  ]),

  mod("technical-seo", "Module 23 — Technical SEO", "Core Web Vitals, crawlability, schema, site architecture — standalone deep module.", "Wrench", "bg-green-700", 22, [
    ["Technical SEO Role in the Stack", "base", "Technical foundation enables content and links to rank.", ["Crawl before content", "Speed affects rankings and CRO", "Schema enhances CTR", "Audit quarterly"], "Run Screaming Frog or Sitebulb on a site; list top 5 issues."],
    ["Core Web Vitals Deep Dive", "base", "LCP, INP, CLS — fix images, JS, layout shift.", ["LCP <2.5s target", "Defer non-critical JS", "Explicit image dimensions", "CDN for global"], "PageSpeed top 3 fixes for homepage."],
    ["Crawlability and Indexing", "base", "Robots.txt, sitemaps, canonicals, noindex discipline.", ["Search Console coverage report", "Fix 4xx/5xx", "Canonical duplicate content", "Log file analysis advanced"], "Audit robots.txt + sitemap; note issues."],
    ["Schema Markup Implementation", "intermediate", "Organization, Article, FAQ, Product, Breadcrumb.", ["Rich Results Test", "FAQ for AEO", "Product for ecommerce", "Invalid schema hurts trust"], "Add FAQ schema to one URL; validate."],
    ["Site Architecture and URL Design", "base", "Shallow depth, logical hierarchy, internal link equity flow.", ["Hub and spoke", "Breadcrumbs", "Pagination handling", "Faceted nav pitfalls"], "Sketch ideal architecture for 50-page site."],
    ["Technical SEO Tools", "base", "Screaming Frog, GSC, PageSpeed, GTmetrix, Log analyzers.", ["When to use each", "Crawl budget large sites", "Staging noindex", "HTTPS everywhere"], "Pick tool stack; document monthly audit routine."],
    ["Technical SEO Audit Checklist", "base", "MMS 11-point audit checklist.", ["Full crawl", "Fix status codes", "CWV pass", "Schema on key templates", "Mobile-friendly test"], "Complete audit checklist on client or own site."],
  ]),

  mod("competitor-intel", "Module 24 — Competitor Intelligence", "5-step research, SWOT, gap analysis, tool stack.", "Search", "bg-amber-700", 23, [
    ["Five-Step Competitive Research Workflow", "base", "Identify → collect → analyze → synthesize → act on gaps.", ["Direct vs indirect competitors", "Messaging, pricing, channels", "Update quarterly", "Share with product"], "Run 5-step workflow on 3 competitors."],
    ["Competitor Messaging and Channel Audit", "base", "Homepage, ads library, email signup, social, SEO keywords.", ["Meta Ad Library", "SimilarWeb traffic estimate", "Newsletter subscribe spy", "SWOT per rival"], "Fill competitor matrix 5 rivals × 8 criteria."],
    ["SWOT Analysis for Marketing", "base", "Strengths weaknesses internal; opportunities threats external.", ["Honest weaknesses", "Opportunity = gap you can fill", "Threat = competitor move", "Action from each quadrant"], "SWOT for your brand vs top rival."],
    ["Market Gap Identification", "intermediate", "Underserved segment, positioning white space, feature gaps.", ["Reviews mine complaints", "Reddit/forum pain threads", "Job-to-be-done unmet", "Position into gap"], "Document one market gap with evidence."],
    ["Competitor Intelligence Checklist", "base", "MMS research checklist.", ["5 competitors profiled", "Pricing captured", "Ad creatives saved", "Keyword gap exported", "Quarterly review scheduled"], "Schedule quarterly competitor review."],
  ]),

  mod("podcast-marketing", "Module 25 — Podcast Marketing", "Launch, grow, guest strategy, SEO, brand building with audio.", "Mic", "bg-purple-600", 24, [
    ["Podcast as Marketing Channel", "base", "Authority, intimacy, repurposing — HubSpot, Shopify models.", ["Long-form trust", "Guest cross-promotion", "Transcripts for SEO", "Clip for social"], "List 5 podcasts in your niche; note format."],
    ["Launching a Branded Podcast", "base", "Niche title, consistent schedule, quality audio minimum.", ["Weekly or biweekly", "Trailer episode", "Submit Apple/Spotify", "Cover art professional"], "Draft show title, description, first 5 episodes."],
    ["Growing Downloads and Subscribers", "intermediate", "Guest swaps, newsletter, social clips, cross-posts.", ["Clip 3 shorts per episode", "Email list announce", "Guest promotes to audience", "Chartable tracking"], "Plan launch promo across 4 channels."],
    ["Guest Podcast Strategy", "base", "Pitch shows your ICP listens — authority without hosting.", ["One-sheet media kit", "Pitch 3 topic ideas", "CTA to lead magnet", "Repurpose appearance"], "Write podcast pitch email template."],
    ["Podcast SEO and Show Notes", "base", "Keyword titles, transcripts, internal links, YouTube upload.", ["Full transcript on site", "Timestamp chapters", "Embed on blog", "Schema for episodes"], "Optimize one episode show notes page."],
    ["Monetizing and Sponsorship", "intermediate", "Sponsors, affiliate, course upsell — audience size thresholds.", ["CPM benchmarks", "Host-read ads perform", "Align sponsors with ICP", "Disclose sponsorships"], "Outline sponsor pitch when you hit 1k downloads/ep."],
    ["Podcast Repurposing Workflow", "base", "1 episode → blog, 5 clips, quotes, email — content velocity.", ["AI transcript edit", "Audiogram tools", "Thread from highlights", "Newsletter summary"], "Map repurposing for one episode 7 assets."],
    ["Podcast Marketing Checklist", "base", "Launch and growth checklist.", ["Hosting platform set", "RSS validated", "3 episodes banked", "Clip workflow ready", "Monthly download review"], "Complete podcast launch checklist."],
  ]),

  mod("pinterest-marketing", "Module 26 — Pinterest Marketing", "Pins, boards, SEO, shopping, evergreen traffic for DTC and content.", "Pin", "bg-rose-600", 25, [
    ["Why Pinterest for Marketing", "base", "Visual search engine — evergreen pins drive traffic months later.", ["High intent planning mindset", "Strong for home, fashion, food", "Less noisy than Meta", "Women 60%+ but diversifying"], "Search 5 keywords in Pinterest; note top pin styles."],
    ["Pinterest SEO and Keywords", "base", "Keyword-rich titles, descriptions, boards — searchable pins.", ["Pinterest Trends tool", "Long descriptions OK", "Board names = keywords", "Fresh pins weekly"], "Create 10 keyword-rich pin titles."],
    ["Pin Design and Templates", "base", "Vertical 2:3, text overlay, brand consistent, multiple pins per URL.", ["Canva templates", "Test 3 designs per post", "Video pins rising", "Idea pins for reach"], "Design 3 pin variants for one blog URL."],
    ["Pinterest for Ecommerce and Shopping", "intermediate", "Product pins, catalog sync, Shop tab.", ["Shopify integration", "Rich pins product", "Seasonal boards", "Track pin clicks in GA4"], "Connect catalog or plan manual product pins."],
    ["Pinterest Content Strategy", "base", "Repurpose blog content; 5–10 pins per article; schedule Tailwind.", ["Board per topic cluster", "Seasonal refresh", "Group boards optional", "Analytics monthly"], "Build 4-week pin schedule for 4 blog posts."],
    ["Pinterest Marketing Checklist", "base", "Account setup to scale.", ["Business account", "Claimed website", "10 boards created", "50 pins scheduled", "Monthly analytics review"], "Complete Pinterest setup checklist."],
  ]),
];

/** Extra lessons to append to existing tracks */
export const MMS_EXISTING_TRACK_ADDITIONS = {
  "social-media": [
    ["X and Twitter Algorithm and Reach", "intermediate", "Replies, early engagement, hooks — personal brand growth system from MMS.", ["First 2 hours critical", "Threads for depth", "Avoid external links in post", "Comment strategy 20/day"], "Post 5x this week; track impressions pattern."],
    ["Reddit Marketing for Founders", "intermediate", "Most underused platform — karma, subreddit rules, value-first posts.", ["90% value 10% promo", "Build karma in target subs", "AMA and story posts", "Never spam links day 1"], "Identify 5 subreddits; karma plan 2 weeks."],
    ["Facebook Groups Organic Strategy", "base", "Groups beat pages for organic — join, contribute, own group later.", ["Answer questions daily", "Own group for ICP", "Live sessions in group", "Pin resources"], "Join 3 groups; plan 2 valuable posts/week."],
    ["Cross-Platform Social System", "intermediate", "1 post = 5 assets — X, LinkedIn, Reddit, Facebook, clips from MMS.", ["Core idea once", "Native format each", "Batch weekly", "UTM per platform"], "Take one idea; list 5 platform-native versions."],
    ["Growing Social Followers from Zero", "base", "0→10K playbook: consistency, hooks, engagement, collaborations.", ["90-day minimum horizon", "Collaborate with peers", "Give more than ask", "Track weekly follower delta"], "Set 90-day follower goal + weekly tactics."],
  ],
  "strategy-branding": [
    ["April Dunford Positioning Canvas", "intermediate", "Competitive alternatives, unique attributes, value, target market, category.", ["Positioning is context", "Choose competitive frame", "10-word positioning statement", "Test with customers"], "Fill positioning canvas for your product."],
    ["UVP Headline Formulas", "base", "Three MMS formulas for homepage and ad headlines.", ["Outcome + timeframe + objection", "For [ICP] who [pain], [product] is [category]", "Test 3 variants minimum"], "Write 6 headlines using 3 formulas; A/B plan."],
  ],
  "content-marketing": [
    ["Distribution: 20% Writing, 80% Promotion", "base", "MMS rule — content fails without distribution plan per piece.", ["Newsletter feature", "Social native clips", "Outreach for backlinks", "Paid boost winners only"], "Write distribution checklist 10 actions per post."],
  ],
  "advanced-emerging": [
    ["AI Marketing Prompts Library", "intermediate", "Ready prompts for research, copy, ads, email from MMS.", ["Prompt for ICP research", "Prompt for ad variants", "Prompt for email subject lines", "Human review always"], "Run 3 prompts; save best outputs in swipe file."],
  ],
};
