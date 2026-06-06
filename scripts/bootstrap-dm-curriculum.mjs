#!/usr/bin/env node
/**
 * Bootstrap all 12 DM track curriculum files + deep indexes + generator registry.
 * Run: node scripts/bootstrap-dm-curriculum.mjs
 */
import { writeFileSync, mkdirSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { dmLesson } from "./curriculum/dm-lesson-builder.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const curriculumDir = join(__dirname, "curriculum");

function q(question, options, answer) {
  return { question, options, answer };
}

function autoSpec(slug, title, level, order, minutes, summary, practice, quiz, tools = []) {
  return {
    slug,
    title,
    level,
    order,
    minutes,
    summary,
    definition: `**${title}** is essential for modern marketers. ${summary}\n\nIn real campaigns, teams use ${title.toLowerCase()} to reach the right people with the right message, then measure what worked. Beginners often rush tactics; professionals align ${title.toLowerCase()} with business goals and audience research first.`,
    why: `${title} improves efficiency — you waste less budget, create clearer messaging, and report results stakeholders understand. It connects daily tasks to revenue and growth.`,
    when: `Use ${title.toLowerCase()} when launching or optimizing campaigns, preparing client reports, or building portfolio case studies.`,
    tools: tools.length ? tools : [{ name: "Spreadsheet", use: "Plan and track work" }, { name: "GA4", use: "Measure web results" }],
    stepTitles: [
      `Understand what ${title} means in plain English`,
      "Review the example and tools for this lesson",
      "Apply the concept to a brand you follow",
      "Complete the practice task with written output",
      "Score 100% on the quiz or retry until confident",
    ],
    mistakes: `1. **Skipping audience research** before applying ${title}\n2. **No metrics** — always define how you will measure success\n3. **Copy-paste templates** without adapting to your niche\n4. **Ignoring mobile** — most digital touchpoints are on phones\n5. **One-and-done** — marketing improves through iteration`,
    practice,
    quiz,
  };
}

const TRACKS = [
  {
    id: "dm-getting-started",
    title: "Getting Started",
    description: "Digital marketing foundations — funnel, journey, channels, goals, tools, audience, and ethics.",
    icon: "Rocket",
    color: "bg-violet-500",
    lessons: [
      autoSpec("what-is-digital-marketing", "What is Digital Marketing?", "base", 1, 25, "Digital marketing promotes products online using measurable channels like search, social, email, and paid ads.", "List 3 digital touchpoints of a local business and how each helps sales.", [q("Digital marketing happens primarily…", ["On online channels", "Only in print", "Without data", "Offline only"], 0), q("Main advantage vs traditional ads…", ["Measurable results", "No audience", "Fixed message", "No testing"], 0), q("First step for small business…", ["Web + search presence", "TV only", "Ignore metrics", "No goals"], 0)]),
      autoSpec("marketing-funnel-basics", "The Marketing Funnel", "base", 2, 28, "The funnel models awareness → consideration → conversion (TOFU, MOFU, BOFU).", "Draw a funnel for a coffee shop app with one tactic per stage.", [q("TOFU focuses on…", ["Awareness", "Payroll", "Packaging", "Refunds"], 0), q("MOFU is when users…", ["Compare options", "Always buy", "Unsubscribe", "Leave"], 0), q("BOFU often uses…", ["Strong CTA / offer", "Random memes", "No pricing", "Hidden product"], 0)]),
      autoSpec("customer-journey", "Customer Journey Mapping", "base", 3, 28, "Journey maps show touchpoints, emotions, and drop-offs from discovery to loyalty.", "Map 5 steps for buying shoes online; note one pain point per step.", [q("Journey maps show…", ["Touchpoints over time", "Logo fonts", "Server code", "Tax forms"], 0), q("Drop-off means…", ["Users leave without converting", "Revenue doubles", "Ads pause", "SEO ends"], 0), q("Fixing friction…", ["Improves conversion", "Removes product", "Stops email", "Blocks mobile"], 0)]),
      autoSpec("digital-marketing-channels", "Marketing Channels Overview", "base", 4, 30, "Owned, earned, and paid channels — SEO, social, email, ads, partnerships.", "Assign owned, earned, paid tactics for a fitness coach.", [q("Email list is…", ["Owned", "Earned only", "Print", "Radio"], 0), q("Earned media includes…", ["Reviews and shares", "Private payroll", "CSS", "Invoices"], 0), q("Paid ads help when…", ["You need fast reach", "Budget is zero", "No landing page", "No goal"], 0)]),
      autoSpec("marketing-goals-kpis", "Goals & KPIs", "base", 5, 28, "SMART goals and KPIs like traffic, CTR, CPA, and ROAS prove marketing progress.", "Write one SMART goal for a blog with 3 weekly KPIs.", [q("SMART includes…", ["Measurable", "Secret", "Vague", "Infinite"], 0), q("CTR is…", ["Click-through rate", "Cost tax", "Creative tool", "Channel ID"], 0), q("ROAS measures…", ["Revenue per ad spend", "Bounces only", "Fonts", "Uptime"], 0)]),
      autoSpec("dm-tools-landscape", "Essential Marketing Tools", "base", 6, 30, "Starter stack: GA4, Search Console, Canva, social scheduler, email platform.", "Sign up for Search Console or GA4 demo; list 5 menu items you see.", [q("Search Console shows…", ["Search performance", "Payroll", "Video edits", "DNS only"], 0), q("Canva is for…", ["Design", "Hosting", "Deploy", "Legal"], 0), q("Start with…", ["Analytics + one channel tool", "50 tools", "No data", "Print"], 0)], [{ name: "GA4", use: "Analytics" }, { name: "Canva", use: "Design" }]),
      autoSpec("audience-basics", "Understanding Your Audience", "base", 7, 28, "Demographics, psychographics, jobs-to-be-done, and pain points define who you target.", "Create audience profile for meal-prep service: 3 pains, 3 motivations.", [q("Psychographics are…", ["Values/motivations", "Server IPs", "HTML", "Tax"], 0), q("Jobs-to-be-done is…", ["Outcome users want", "HR listing", "CSS job", "Log file"], 0), q("Targeting everyone…", ["Dilutes message", "Always best", "Fixes SEO", "Removes product"], 0)]),
      autoSpec("dm-ethics-legal-basics", "Ethics & Privacy Basics", "base", 8, 25, "GDPR, CAN-SPAM, truthful ads, consent, and cookie notices.", "Audit a site for privacy policy, cookies, email unsubscribe.", [q("CAN-SPAM needs…", ["Unsubscribe", "Hidden sender", "No opt-out", "Paper mail"], 0), q("GDPR focuses on…", ["Consent", "Unlimited tracking", "No records", "Secret data"], 0), q("Deceptive ads…", ["Harm trust and risk fines", "Improve SEO", "Free ads", "More email"], 0)]),
    ],
  },
  {
    id: "marketing-fundamentals",
    title: "Marketing Fundamentals",
    description: "Personas, positioning, value proposition, competitors, SWOT, and messaging foundations.",
    icon: "Target",
    color: "bg-rose-500",
    lessons: [
      autoSpec("buyer-personas", "Buyer Personas", "base", 1, 28, "Personas are fictional profiles of ideal customers based on research.", "Build persona 'Alex' for a B2B SaaS tool: role, goals, frustrations.", [q("Personas are based on…", ["Research", "Guessing only", "Stock photos", "Random names"], 0), q("Good personas include…", ["Goals and pain points", "Only age", "CEO salary", "Server logs"], 0), q("Personas help…", ["Target messaging", "Skip SEO", "Avoid product", "Remove KPIs"], 0)]),
      autoSpec("value-proposition", "Value Proposition", "base", 2, 28, "A clear statement of the benefit you deliver and why buyers should care.", "Write value prop for eco water bottle in one sentence + 3 proof points.", [q("Value prop explains…", ["Benefit to customer", "Office address", "CSS version", "Tax code"], 0), q("It should be…", ["Clear and specific", "Long jargon", "Hidden", "Identical for all"], 0), q("Proof points…", ["Support the claim", "Replace product", "Stop ads", "Remove UX"], 0)]),
      autoSpec("positioning", "Market Positioning", "base", 3, 30, "Positioning is how you want to be perceived vs alternatives in the customer's mind.", "Position a budget hotel vs luxury chain in 2 sentences each.", [q("Positioning is…", ["Perception vs alternatives", "Font choice", "Payroll", "DNS"], 0), q("Good positioning…", ["Differentiates", "Copies everyone", "Hides price", "Ignores audience"], 0), q("Test positioning with…", ["Customer interviews", "Random polls only", "No research", "Print TV"], 0)]),
      autoSpec("competitive-analysis", "Competitive Analysis", "base", 4, 30, "Systematic review of competitors' offers, messaging, channels, and strengths.", "Compare 3 competitors' homepages: headline, CTA, social proof.", [q("Competitive analysis studies…", ["Rivals' marketing", "Internal payroll", "CSS lint", "Git"], 0), q("Look at…", ["Messaging and channels", "Only logos", "Employee birthdays", "Fonts only"], 0), q("Outcome is…", ["Gaps and opportunities", "Copy everything", "Stop marketing", "No product"], 0)]),
      autoSpec("swot-analysis", "SWOT Analysis", "base", 5, 28, "Strengths, Weaknesses, Opportunities, Threats — strategic snapshot.", "SWOT for a local bakery going online: 2 bullets per quadrant.", [q("SWOT includes…", ["Strengths and threats", "Only revenue", "HTML tags", "Fonts"], 0), q("Opportunities are…", ["External positives", "Internal flaws", "Bugs only", "Payroll"], 0), q("Use SWOT when…", ["Planning strategy", "Choosing fonts", "Writing CSS", "Deploying code"], 0)]),
      autoSpec("unique-selling-point", "Unique Selling Point (USP)", "intermediate", 6, 28, "USP is the one reason customers choose you over substitutes.", "Find USP of 3 brands you admire; explain in one line each.", [q("USP answers…", ["Why choose you", "Office hours", "DNS TTL", "Build tool"], 0), q("USP must be…", ["Credible", "Hidden", "Same as all", "Unmeasurable"], 0), q("Weak USP…", ["Sounds generic", "Improves SEO auto", "Fixes email", "Removes ads"], 0)]),
      autoSpec("brand-messaging", "Brand Messaging Framework", "intermediate", 7, 30, "Mission, vision, voice, pillars — consistent story across channels.", "Define 3 message pillars for a pet food brand.", [q("Message pillars…", ["Repeatable themes", "Random posts", "Payroll", "CSS"], 0), q("Brand voice is…", ["How you sound", "Logo color only", "Server region", "Tax ID"], 0), q("Framework helps…", ["Consistency", "Skip audience", "Avoid goals", "Remove KPIs"], 0)]),
      autoSpec("market-segmentation", "Market Segmentation", "intermediate", 8, 28, "Split market by geography, behavior, needs, or firmographics for B2B.", "Segment users for a language app: 3 segments + key message each.", [q("Segmentation divides…", ["Market into groups", "CSS files", "Servers", "Invoices"], 0), q("B2B may use…", ["Firmographics", "Only memes", "No data", "Print only"], 0), q("Segments enable…", ["Targeted offers", "One message for all", "No testing", "Hidden prices"], 0)]),
      autoSpec("marketing-research-basics", "Marketing Research Basics", "intermediate", 9, 30, "Surveys, interviews, social listening, and secondary research for decisions.", "Draft 5 survey questions for a new gym membership offer.", [q("Primary research is…", ["Data you collect", "Only Google", "Guesswork", "Fonts"], 0), q("Interviews reveal…", ["Why behind behavior", "Server logs", "CSS bugs", "DNS"], 0), q("Research before…", ["Big budget spend", "Ignoring audience", "Copying rivals blindly", "Skipping goals"], 0)]),
      autoSpec("messaging-testing", "Message Testing", "advanced", 10, 32, "A/B test headlines, offers, and CTAs with small audiences before scaling.", "Propose 2 headline variants for landing page and what metric decides winner.", [q("A/B tests compare…", ["Two variants", "Ten products", "Payroll", "DNS"], 0), q("Pick winner by…", ["Predefined metric", "Gut only", "Random", "Font size"], 0), q("Test before…", ["Scaling spend", "Ignoring data", "Removing CTA", "Hiding price"], 0)]),
    ],
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    description: "Strategy, blogging, copywriting, calendars, repurposing, and content distribution.",
    icon: "FileText",
    color: "bg-amber-500",
    lessons: [
      autoSpec("content-marketing-intro", "What is Content Marketing?", "base", 1, 28, "Creating valuable content to attract and retain audiences — blogs, video, guides.", "List 5 content ideas for a personal finance blog.", [q("Content marketing aims to…", ["Provide value", "Spam users", "Hide product", "Skip SEO"], 0), q("Formats include…", ["Blogs and video", "Only print", "Payroll", "DNS"], 0), q("Success metric often…", ["Engagement and leads", "Font size", "Server RAM", "Tax"], 0)]),
      autoSpec("content-strategy", "Content Strategy", "base", 2, 30, "Goals, audience, pillars, formats, and distribution plan aligned to funnel.", "One-page strategy for SaaS blog: pillars, cadence, KPI.", [q("Strategy defines…", ["What and why content", "Only fonts", "Payroll", "CSS"], 0), q("Align content to…", ["Funnel stages", "Random trends", "No goals", "Hidden CTA"], 0), q("Pillars prevent…", ["Random topics", "All SEO", "Email", "Analytics"], 0)]),
      autoSpec("blogging-basics", "Blogging Basics", "base", 3, 28, "Structure posts with hook, headings, scannable sections, and clear CTA.", "Outline 800-word post: title, 4 H2s, CTA.", [q("Good posts are…", ["Scannable", "Wall of text", "No headings", "No CTA"], 0), q("Hook should…", ["Grab attention", "Hide topic", "Skip intro", "Use jargon only"], 0), q("CTA encourages…", ["Next step", "Close tab", "Unsubscribe", "Ignore brand"], 0)]),
      autoSpec("copywriting-fundamentals", "Copywriting Fundamentals", "base", 4, 30, "Benefits over features, clarity, active voice, and persuasive structure.", "Rewrite feature line as customer benefit for project tool.", [q("Copy focuses on…", ["Customer benefits", "Internal jargon", "CSS", "DNS"], 0), q("Active voice is…", ["Clearer", "Always wrong", "Illegal", "SEO only"], 0), q("Headlines should…", ["Promise value", "Confuse", "Hide offer", "Skip mobile"], 0)]),
      autoSpec("storytelling-marketing", "Storytelling in Marketing", "intermediate", 5, 28, "Use narrative — character, conflict, resolution — to make brands memorable.", "Write 3-sentence brand story for handmade soap.", [q("Stories need…", ["Conflict and resolution", "Only prices", "DNS", "Fonts"], 0), q("Customer is often…", ["Hero", "Villain always", "Absent", "Payroll"], 0), q("Stories work because…", ["Emotional connection", "Remove metrics", "Skip CTA", "Hide product"], 0)]),
      autoSpec("content-calendar", "Content Calendar", "intermediate", 6, 28, "Plan topics, formats, owners, and publish dates across channels.", "Build 1-week calendar: 3 posts, 2 stories, 1 email.", [q("Calendars help…", ["Consistency", "Random posting", "No goals", "Hide KPIs"], 0), q("Include…", ["Date and channel", "Only emojis", "Payroll", "CSS"], 0), q("Review calendar…", ["Monthly", "Never", "Once per decade", "After deleting blog"], 0)]),
      autoSpec("content-repurposing", "Content Repurposing", "intermediate", 7, 28, "Turn one pillar piece into clips, threads, emails, and carousels.", "Plan repurposing blog into 4 social formats.", [q("Repurposing…", ["Extends reach", "Duplicates spam", "Removes SEO", "Stops email"], 0), q("Start from…", ["Pillar content", "Random meme", "Payroll", "DNS"], 0), q("Adapt per…", ["Channel norms", "One size all", "No audience", "Hidden CTA"], 0)]),
      autoSpec("seo-content-writing", "SEO Content Writing", "intermediate", 8, 30, "Write for humans first while satisfying search intent and on-page basics.", "Pick keyword; draft title + meta description + 3 H2s.", [q("Write for…", ["Humans first", "Bots only", "Payroll", "Fonts"], 0), q("Search intent means…", ["What user wants", "Server IP", "CSS", "Tax"], 0), q("Meta description…", ["Summarizes page", "Replaces H1", "Hides content", "Is robots.txt"], 0)]),
      autoSpec("video-content-basics", "Video Content Basics", "intermediate", 9, 28, "Short-form hooks, captions, thumbnails, and YouTube/Reels basics.", "Script 30-sec Reel: hook, value, CTA.", [q("First 3 seconds…", ["Hook viewer", "Show credits", "Hide topic", "Skip audio"], 0), q("Captions help…", ["Silent viewers", "DNS only", "Payroll", "CSS"], 0), q("Thumbnail should…", ["Communicate topic", "Be blank", "Hide brand", "Remove CTA"], 0)]),
      autoSpec("content-distribution", "Content Distribution", "advanced", 10, 30, "Owned, earned, paid distribution — newsletters, partnerships, syndication.", "Distribution plan for new guide: 5 channels + metric each.", [q("Distribution is…", ["Getting content seen", "Writing only", "Payroll", "DNS"], 0), q("Owned example…", ["Email list", "Random billboard", "Internal memo", "CSS"], 0), q("Measure…", ["Reach and conversions", "Font size", "Server RAM", "Tax"], 0)]),
    ],
  },
  {
    id: "seo",
    title: "SEO",
    description: "Keywords, on-page, technical SEO, local SEO, links, and search performance.",
    icon: "Search",
    color: "bg-green-500",
    lessons: [
      autoSpec("seo-intro", "What is SEO?", "base", 1, 28, "Search Engine Optimization improves visibility in organic search results.", "Google a problem you solve; note top 3 result types (blog, tool, video).", [q("SEO is…", ["Organic search optimization", "Paid ads only", "Email", "Print"], 0), q("Organic means…", ["Unpaid clicks", "Always instant", "No content", "Social only"], 0), q("SEO takes…", ["Time and consistency", "One day only", "No research", "Hidden site"], 0)]),
      autoSpec("how-search-works", "How Search Works", "base", 2, 28, "Crawl, index, rank — Google discovers pages and scores relevance.", "Check Search Console coverage report terminology.", [q("Crawling is…", ["Discovering pages", "Paying ads", "Email blast", "CSS"], 0), q("Indexing means…", ["Stored in search index", "Deleted site", "DNS only", "Fonts"], 0), q("Ranking depends on…", ["Relevance and quality", "Random", "Payroll", "Logo"], 0)]),
      autoSpec("keyword-research", "Keyword Research", "base", 3, 30, "Find terms people search — volume, intent, difficulty — with free/paid tools.", "List 10 keywords for yoga studio with intent label.", [q("Keywords reflect…", ["User searches", "Payroll", "CSS bugs", "DNS"], 0), q("Intent types…", ["Info, commercial, transactional", "Only memes", "Fonts", "Tax"], 0), q("Long-tail keywords…", ["More specific", "Always useless", "Paid only", "Hidden"], 0)]),
      autoSpec("on-page-seo", "On-Page SEO", "base", 4, 30, "Title tags, headings, internal links, and helpful content on each page.", "Audit one page: title length, H1, 2 internal links.", [q("Title tag appears in…", ["Search results", "Payroll", "DNS panel", "CSS"], 0), q("One page should have…", ["One clear H1", "Ten H1s", "No headings", "Hidden text"], 0), q("Internal links…", ["Help navigation and SEO", "Spam only", "Remove UX", "Stop crawl"], 0)]),
      autoSpec("technical-seo-basics", "Technical SEO Basics", "intermediate", 5, 30, "Site speed, mobile-friendly, HTTPS, sitemaps, and crawlability.", "Run PageSpeed Insights; note 2 opportunities.", [q("HTTPS signals…", ["Security", "Print ads", "Payroll", "Fonts"], 0), q("Sitemap helps…", ["Discovery", "Email", "Social only", "CSS"], 0), q("Mobile-friendly is…", ["Ranking factor", "Optional forever", "DNS", "Tax"], 0)]),
      autoSpec("local-seo", "Local SEO", "intermediate", 6, 28, "Google Business Profile, NAP consistency, local keywords, reviews.", "Audit local business GBP: photos, hours, reviews.", [q("GBP helps…", ["Local map pack", "Email only", "Print TV", "CSS"], 0), q("NAP means…", ["Name address phone", "New ad plan", "DNS", "Fonts"], 0), q("Reviews affect…", ["Trust and rankings", "Payroll", "Server", "Tax"], 0)]),
      autoSpec("link-building-basics", "Link Building Basics", "intermediate", 7, 30, "Earn backlinks via quality content, outreach, and digital PR.", "List 5 link ideas for nonprofit blog.", [q("Backlinks are…", ["Links from other sites", "Internal only", "Payroll", "CSS"], 0), q("Quality beats…", ["Quantity spam", "Nothing", "Fonts", "DNS"], 0), q("Earning links needs…", ["Valuable content", "Buying only", "Hidden text", "Cloaking"], 0)]),
      autoSpec("seo-content-clusters", "Topic Clusters", "intermediate", 8, 28, "Pillar page + cluster posts internal linking for topical authority.", "Sketch pillar + 4 cluster titles for email marketing topic.", [q("Pillar page covers…", ["Broad topic", "Random meme", "Payroll", "DNS"], 0), q("Clusters link…", ["To pillar", "Nowhere", "Offsite only", "CSS"], 0), q("Goal is…", ["Topical authority", "Hide site", "Stop blog", "Remove CTA"], 0)]),
      autoSpec("search-console", "Google Search Console", "intermediate", 9, 28, "Monitor queries, clicks, indexing issues, and sitemaps.", "Find top query in Performance report.", [q("Search Console shows…", ["Queries and clicks", "Payroll", "Video edits", "Fonts"], 0), q("Coverage report…", ["Indexing status", "Ad spend", "Email", "CSS"], 0), q("Use it to…", ["Fix SEO issues", "Replace analytics", "Skip content", "Hide site"], 0)]),
      autoSpec("seo-audit", "SEO Site Audit", "advanced", 10, 32, "Checklist audit: technical, on-page, content gaps, links.", "Mini audit: 5 issues + priority fix.", [q("Audits find…", ["Improvement areas", "Payroll", "DNS only", "Fonts"], 0), q("Prioritize by…", ["Impact and effort", "Random", "Logo color", "Tax"], 0), q("Re-audit…", ["Quarterly", "Never", "Once per decade", "After deleting site"], 0)]),
      autoSpec("core-web-vitals", "Core Web Vitals", "advanced", 11, 30, "LCP, INP, CLS — user experience signals for search.", "Explain LCP in plain English for a client.", [q("LCP measures…", ["Loading performance", "Email opens", "Payroll", "Fonts"], 0), q("CLS is…", ["Layout shift", "Click rate", "DNS", "Tax"], 0), q("Improve by…", ["Optimizing images and JS", "Adding popups", "Huge videos", "Hidden text"], 0)]),
      autoSpec("seo-reporting", "SEO Reporting", "advanced", 12, 28, "Report rankings, traffic, conversions, and actions monthly.", "Draft SEO report outline with 4 sections.", [q("Reports should tie to…", ["Business goals", "Random metrics", "Payroll", "Fonts"], 0), q("Include…", ["Actions next month", "Data only no plan", "Secrets", "CSS"], 0), q("Share with…", ["Stakeholders", "Nobody", "Bots only", "DNS"], 0)]),
    ],
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    description: "Platform strategy, content types, scheduling, community, influencers, and social analytics.",
    icon: "Share2",
    color: "bg-sky-500",
    lessons: [
      autoSpec("social-media-intro", "Social Media Marketing Intro", "base", 1, 28, "Build community and drive traffic/sales on platforms where audiences engage.", "Pick brand; list which 2 platforms fit and why.", [q("Social marketing is…", ["Engaging on platforms", "Print only", "DNS", "Payroll"], 0), q("Pick platforms by…", ["Audience presence", "Random", "Fonts", "CSS"], 0), q("Success needs…", ["Consistent value", "Spam", "No plan", "Hidden CTA"], 0)]),
      autoSpec("platform-strategy", "Platform Strategy", "base", 2, 30, "Match content format to LinkedIn, Instagram, TikTok, X, YouTube strengths.", "Map one content idea to 3 platforms differently.", [q("LinkedIn suits…", ["B2B professional", "Only memes", "Payroll", "DNS"], 0), q("TikTok favors…", ["Short video", "Whitepapers", "CSS", "Tax"], 0), q("Strategy avoids…", ["Posting everywhere identical", "Goals", "Audience", "Metrics"], 0)]),
      autoSpec("social-content-types", "Social Content Types", "base", 3, 28, "Educational, entertaining, promotional mix — 80/20 value vs sell.", "Plan 9 posts: 3 edu, 3 entertain, 3 promo.", [q("Too promotional…", ["Loses followers", "Improves trust always", "Fixes SEO", "Removes email"], 0), q("Educational posts…", ["Build authority", "Hide brand", "Spam", "DNS"], 0), q("Mix depends on…", ["Audience and funnel", "Random", "Fonts", "CSS"], 0)]),
      autoSpec("social-copy-hooks", "Social Copy & Hooks", "base", 4, 28, "First line hooks, concise captions, CTAs, hashtags strategically.", "Write 5 hooks for productivity app.", [q("Hook should…", ["Stop the scroll", "Hide message", "Use jargon only", "Skip mobile"], 0), q("Hashtags…", ["Aid discovery when relevant", "Replace strategy", "Spam always", "DNS"], 0), q("CTA examples…", ["Save, comment, link", "None", "Close account", "Payroll"], 0)]),
      autoSpec("social-scheduling", "Scheduling & Planning", "intermediate", 5, 28, "Batch create, schedule with Meta Suite/Buffer, best times to post.", "Schedule 3 posts in free scheduler tool.", [q("Scheduling helps…", ["Consistency", "Random chaos", "No goals", "CSS"], 0), q("Batching…", ["Saves time", "Removes quality", "DNS", "Tax"], 0), q("Review times using…", ["Analytics", "Guessing only", "Fonts", "Payroll"], 0)]),
      autoSpec("community-management", "Community Management", "intermediate", 6, 28, "Reply guidelines, handling complaints, fostering discussion.", "Write 3 reply templates: praise, complaint, question.", [q("Fast replies…", ["Build trust", "Always ignore", "Spam", "DNS"], 0), q("Complaints need…", ["Empathy and solution", "Arguments", "Delete all", "CSS"], 0), q("Community grows…", ["With genuine engagement", "Buy bots", "Hide brand", "Tax"], 0)]),
      autoSpec("influencer-basics", "Influencer Marketing Basics", "intermediate", 7, 30, "Micro vs macro influencers, briefs, disclosure (#ad), ROI.", "Find 3 micro-influencers in niche; note fit.", [q("Micro-influencers…", ["Niche engaged audiences", "Always cheaper junk", "DNS", "CSS"], 0), q("Disclosure…", ["Required ethically", "Optional always", "Hidden", "Payroll"], 0), q("Measure…", ["Reach and conversions", "Likes only vanity", "Fonts", "Tax"], 0)]),
      autoSpec("social-ads-intro", "Social Paid Boost", "intermediate", 8, 28, "Boost posts vs full ads manager campaigns — objectives and budgets.", "Outline $50 boost test: audience, goal, metric.", [q("Boost is…", ["Paid reach on post", "Organic only", "Email", "DNS"], 0), q("Pick objective…", ["Matches funnel stage", "Random", "Fonts", "CSS"], 0), q("Start small to…", ["Test creative", "Spend all day one", "Hide CTA", "Tax"], 0)]),
      autoSpec("social-analytics", "Social Analytics", "intermediate", 9, 28, "Reach, engagement rate, saves, profile visits, attribution limits.", "Export 1-week insights; calculate engagement rate.", [q("Engagement rate uses…", ["Interactions / reach", "Payroll", "DNS", "Fonts"], 0), q("Saves signal…", ["High value content", "Spam", "CSS", "Tax"], 0), q("Compare…", ["Week over week", "Never", "To random brands only", "Hide data"], 0)]),
      autoSpec("ugc-campaigns", "User-Generated Content", "intermediate", 10, 28, "Encourage customers to create content — contests, hashtags, rights.", "Design UGC prompt for coffee brand hashtag.", [q("UGC is…", ["Content from users", "Stock only", "Payroll", "DNS"], 0), q("Get rights to…", ["Repurpose legally", "Steal content", "CSS", "Fonts"], 0), q("UGC builds…", ["Trust", "No community", "Hidden brand", "Tax"], 0)]),
      autoSpec("social-crisis", "Social Media Crisis", "advanced", 11, 28, "Pause posts, acknowledge, move to private channel, post-mortem.", "Crisis checklist for data leak rumor.", [q("First step often…", ["Pause scheduled posts", "Post more memes", "Ignore", "DNS"], 0), q("Public reply should…", ["Acknowledge and guide", "Blame customers", "CSS", "Fonts"], 0), q("After crisis…", ["Post-mortem learnings", "Delete brand", "Stop forever", "Tax"], 0)]),
      autoSpec("social-strategy-doc", "Social Strategy Document", "advanced", 12, 32, "One-page strategy: goals, personas, pillars, cadence, KPIs.", "Write social strategy doc for fictional bakery.", [q("Strategy doc includes…", ["Goals and KPIs", "Only memes", "Payroll", "DNS"], 0), q("Review quarterly…", ["Yes", "Never", "Daily only", "CSS"], 0), q("Share with…", ["Team aligned", "Nobody", "Bots", "Fonts"], 0)]),
    ],
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    description: "Lists, segments, automation, newsletters, deliverability, and email metrics.",
    icon: "Mail",
    color: "bg-indigo-500",
    lessons: [
      autoSpec("email-marketing-intro", "What is Email Marketing?", "base", 1, 28, "Direct owned channel — newsletters, promotions, nurture sequences.", "Sign up for 2 brand emails; compare welcome emails.", [q("Email is…", ["Owned channel", "Paid social only", "DNS", "Print"], 0), q("High ROI because…", ["Permission-based", "Spam everyone", "No list", "CSS"], 0), q("Needs…", ["Consent", "Hidden tracking only", "Fonts", "Tax"], 0)]),
      autoSpec("list-building", "Building Your List", "base", 2, 28, "Lead magnets, signup forms, double opt-in, ethical growth.", "Design lead magnet idea + landing headline.", [q("Lead magnet offers…", ["Value for email", "Nothing", "Payroll", "DNS"], 0), q("Double opt-in…", ["Confirms consent", "Spam", "CSS", "Fonts"], 0), q("Never buy…", ["Email lists", "Templates", "Tools", "Content"], 0)]),
      autoSpec("email-segmentation", "Email Segmentation", "base", 3, 28, "Split list by behavior, purchase history, interests for relevance.", "Define 3 segments for online bookstore.", [q("Segments improve…", ["Relevance", "Spam score", "DNS", "Fonts"], 0), q("Behavioral example…", ["Clicked pricing", "Random", "CSS", "Tax"], 0), q("Avoid…", ["One blast to all always", "Testing", "Metrics", "Goals"], 0)]),
      autoSpec("newsletter-basics", "Newsletter Basics", "base", 4, 28, "Consistent format: intro, value, CTA, plain-text option.", "Outline newsletter issue with 3 sections.", [q("Newsletters need…", ["Consistent value", "Daily ads only", "DNS", "Payroll"], 0), q("Subject line…", ["Drives opens", "Hidden", "CSS", "Fonts"], 0), q("One clear CTA…", ["Reduces confusion", "Twenty buttons", "Spam", "Tax"], 0)]),
      autoSpec("email-copy", "Email Copywriting", "intermediate", 5, 30, "Subject lines, preview text, skimmable body, personal tone.", "Write subject + preview for product launch.", [q("Preview text…", ["Supports subject", "Replaces body", "DNS", "CSS"], 0), q("Personalization…", ["Increases opens", "Always creepy", "Fonts", "Tax"], 0), q("Body should be…", ["Skimmable", "Wall of text", "Image only", "Hidden"], 0)]),
      autoSpec("email-automation", "Marketing Automation", "intermediate", 6, 30, "Welcome series, abandoned cart, re-engagement flows.", "Map 3-email welcome series goals.", [q("Automation sends…", ["Triggered emails", "Random spam", "DNS", "Payroll"], 0), q("Welcome series…", ["Onboards subscribers", "Unsubscribes all", "CSS", "Fonts"], 0), q("Cart abandon…", ["Recovers revenue", "Illegal", "Tax", "DNS"], 0)]),
      autoSpec("email-design", "Email Design & HTML", "intermediate", 7, 28, "Mobile-first layout, alt text, single column, dark mode aware.", "Checklist 5 design rules for mobile email.", [q("Mobile-first because…", ["Most opens mobile", "Desktop only", "DNS", "CSS"], 0), q("Alt text…", ["Accessibility", "Spam trick", "Fonts", "Tax"], 0), q("Too many images…", ["Spam filters", "Better always", "SEO", "Payroll"], 0)]),
      autoSpec("deliverability", "Deliverability Basics", "intermediate", 8, 28, "SPF, DKIM, DMARC, bounce handling, spam complaints.", "Explain SPF in one sentence to a client.", [q("SPF helps…", ["Sender authentication", "Design", "CSS", "Fonts"], 0), q("High complaints…", ["Hurt inbox placement", "Improve deliverability", "DNS", "Tax"], 0), q("Clean list by…", ["Removing bounces", "Buying emails", "Spam", "Hidden"], 0)]),
      autoSpec("email-metrics", "Email Metrics", "intermediate", 9, 28, "Open rate, CTR, unsubscribes, conversions — interpret benchmarks.", "Calculate CTR from sample numbers in spreadsheet.", [q("CTR is…", ["Clicks / delivered", "Opens only", "DNS", "Fonts"], 0), q("Unsubscribe spike means…", ["Review content/frequency", "Success", "CSS", "Tax"], 0), q("Ultimate metric…", ["Conversions", "Font size", "Payroll", "DNS"], 0)]),
      autoSpec("email-compliance", "Email Compliance", "advanced", 10, 28, "CAN-SPAM, GDPR, clear identity, physical address, opt-out.", "Audit marketing email for compliance checklist.", [q("CAN-SPAM needs…", ["Unsubscribe", "Fake from", "DNS", "CSS"], 0), q("GDPR needs…", ["Lawful basis", "Buy lists", "Fonts", "Tax"], 0), q("Physical address…", ["Required in many regions", "Never", "Spam", "Hidden"], 0)]),
    ],
  },
  {
    id: "paid-ads",
    title: "Paid Advertising",
    description: "Google Ads, Meta Ads, targeting, budgets, creatives, ROAS, and optimization.",
    icon: "DollarSign",
    color: "bg-orange-500",
    lessons: [
      autoSpec("paid-ads-intro", "Introduction to Paid Ads", "base", 1, 28, "Pay for placement — search, social, display — with targeting and measurement.", "List 3 ad types you see daily and platform.", [q("Paid ads buy…", ["Targeted reach", "Organic SEO", "Email only", "DNS"], 0), q("Main platforms…", ["Google and Meta", "Print only", "CSS", "Payroll"], 0), q("Start with…", ["Clear goal and landing page", "No budget cap", "Random", "Fonts"], 0)]),
      autoSpec("google-ads-search", "Google Search Ads", "base", 2, 30, "Keyword bidding, ad copy, extensions, Quality Score basics.", "Draft RSA headlines for plumber local service.", [q("Search ads appear…", ["On search results", "Only email", "DNS", "CSS"], 0), q("Quality Score affects…", ["Cost and position", "Fonts", "Tax", "Payroll"], 0), q("Extensions…", ["Extra links/info", "Hide CTA", "Spam", "DNS"], 0)]),
      autoSpec("google-ads-display", "Google Display Ads", "base", 3, 28, "Banner remarketing, audiences, brand awareness campaigns.", "Sketch display ad message for remarketing cart.", [q("Display is good for…", ["Awareness/remarketing", "Only cold search", "DNS", "Payroll"], 0), q("Remarketing shows…", ["Ads to past visitors", "Random", "CSS", "Fonts"], 0), q("Creative needs…", ["Clear brand", "Tiny text", "Hidden", "Tax"], 0)]),
      autoSpec("meta-ads-basics", "Meta Ads Manager Basics", "base", 4, 30, "Campaign, ad set, ad hierarchy — objectives, audiences, placements.", "Outline campaign for webinar: objective, audience, budget.", [q("Meta hierarchy…", ["Campaign > ad set > ad", "One button", "DNS", "CSS"], 0), q("Ad set controls…", ["Audience and budget", "Only fonts", "Payroll", "Tax"], 0), q("Objective picks…", ["Optimization goal", "Random", "Hidden", "DNS"], 0)]),
      autoSpec("ad-targeting", "Audience Targeting", "intermediate", 5, 30, "Demographics, interests, lookalikes, custom audiences from pixel.", "Define custom audience for site visitors 30 days.", [q("Lookalike finds…", ["Similar users", "Competitors staff", "DNS", "CSS"], 0), q("Pixel tracks…", ["Site behavior", "Email content", "Fonts", "Tax"], 0), q("Too narrow audience…", ["Limits delivery", "Always best", "Payroll", "DNS"], 0)]),
      autoSpec("ad-creative", "Ad Creative Best Practices", "intermediate", 6, 28, "Thumb-stopping visuals, clear offer, social proof, mobile safe zones.", "Storyboard 15-sec video ad: problem → solution → CTA.", [q("Creative tests…", ["Multiple variants", "One forever", "DNS", "CSS"], 0), q("Offer should be…", ["Clear", "Hidden", "Fonts", "Tax"], 0), q("Social proof…", ["Builds trust", "Spam", "Payroll", "DNS"], 0)]),
      autoSpec("landing-pages-ads", "Landing Pages for Ads", "intermediate", 7, 28, "Message match, fast load, single CTA, trust signals.", "Score landing page vs ad promise 1-5.", [q("Message match means…", ["Ad promise on page", "Different offer", "DNS", "CSS"], 0), q("Single CTA…", ["Focuses conversion", "Twenty buttons", "Fonts", "Tax"], 0), q("Slow page…", ["Wastes ad spend", "Improves ROAS", "Payroll", "DNS"], 0)]),
      autoSpec("ad-budget-bidding", "Budget & Bidding", "intermediate", 8, 28, "Daily budget, lifetime, CPC, CPM, manual vs automated bidding.", "Plan $300/month split across 2 campaigns.", [q("Daily budget caps…", ["Spend per day", "Total forever", "DNS", "Fonts"], 0), q("CPC is…", ["Cost per click", "Cost per coffee", "CSS", "Tax"], 0), q("Automated bidding…", ["Uses platform ML", "Random", "Payroll", "DNS"], 0)]),
      autoSpec("roas-cpa", "ROAS & CPA", "intermediate", 9, 28, "Return on ad spend and cost per acquisition — profitability math.", "Calculate ROAS from $500 spend and $2000 revenue.", [q("ROAS formula…", ["Revenue / ad spend", "Clicks / opens", "DNS", "Fonts"], 0), q("CPA is…", ["Cost per acquisition", "Cost per article", "CSS", "Tax"], 0), q("Track conversions with…", ["Pixel + events", "Guessing", "Payroll", "DNS"], 0)]),
      autoSpec("ab-testing-ads", "A/B Testing Ads", "intermediate", 10, 28, "Test one variable, statistical patience, document winners.", "Plan A/B test: hypothesis, variable, success metric.", [q("Test one…", ["Variable at a time", "Everything", "DNS", "CSS"], 0), q("Need enough…", ["Data volume", "One click", "Fonts", "Tax"], 0), q("Document…", ["Learnings", "Nothing", "Payroll", "DNS"], 0)]),
      autoSpec("retargeting", "Retargeting Campaigns", "advanced", 11, 30, "Funnel retargeting — viewed product, abandoned cart, past purchasers.", "3-tier retargeting audiences with message each.", [q("Retargeting reaches…", ["Past visitors", "Cold only", "DNS", "CSS"], 0), q("Frequency cap…", ["Prevents fatigue", "Spam more", "Fonts", "Tax"], 0), q("Exclude…", ["Recent converters when needed", "Everyone", "Payroll", "DNS"], 0)]),
      autoSpec("ads-reporting", "Paid Ads Reporting", "advanced", 12, 28, "Weekly report: spend, impressions, CTR, conversions, recommendations.", "Sample weekly Google Ads report bullet list.", [q("Reports tie to…", ["Business KPIs", "Vanity only", "DNS", "Fonts"], 0), q("Include…", ["Next actions", "Data dump only", "CSS", "Tax"], 0), q("Compare…", ["Period over period", "Never", "Random", "Payroll"], 0)]),
    ],
  },
  {
    id: "analytics",
    title: "Analytics & Reporting",
    description: "GA4, UTM parameters, KPIs, dashboards, attribution, and data-driven decisions.",
    icon: "BarChart3",
    color: "bg-teal-500",
    lessons: [
      autoSpec("analytics-intro", "Marketing Analytics Intro", "base", 1, 28, "Collect and interpret data to improve campaigns and prove ROI.", "List 5 marketing metrics a CEO cares about.", [q("Analytics helps…", ["Decide with data", "Guess only", "DNS", "Fonts"], 0), q("Without data…", ["Wasted budget", "Perfect ads", "CSS", "Tax"], 0), q("Start with…", ["One primary KPI", "Fifty dashboards", "Payroll", "DNS"], 0)]),
      autoSpec("ga4-setup", "GA4 Setup", "base", 2, 30, "Install tag, data streams, events, conversions, DebugView.", "List steps to install GA4 on a website.", [q("GA4 measures…", ["Web and app events", "Payroll", "DNS", "Fonts"], 0), q("Conversion event…", ["Key business action", "Page color", "CSS", "Tax"], 0), q("DebugView…", ["Tests firing", "Deletes data", "Spam", "DNS"], 0)]),
      autoSpec("utm-parameters", "UTM Parameters", "base", 3, 28, "utm_source, medium, campaign, content — track campaigns in analytics.", "Build UTM URL for newsletter January promo.", [q("utm_source is…", ["Traffic source", "Font size", "DNS", "CSS"], 0), q("Consistent naming…", ["Clean reports", "Random chaos", "Payroll", "Tax"], 0), q("Use UTMs on…", ["External links", "Internal nav only", "Fonts", "DNS"], 0)]),
      autoSpec("traffic-sources", "Traffic Sources", "base", 4, 28, "Organic, direct, referral, paid, social — acquisition report reading.", "Open acquisition report; name top 3 channels.", [q("Organic is…", ["Unpaid search", "Email only", "DNS", "CSS"], 0), q("Direct often…", ["Typed URL/bookmarks", "Always social", "Fonts", "Tax"], 0), q("Referral is…", ["Other websites", "Print", "Payroll", "DNS"], 0)]),
      autoSpec("engagement-metrics", "Engagement Metrics", "intermediate", 5, 28, "Sessions, engagement rate, average engagement time, bounce nuances.", "Define engagement rate in plain English.", [q("Engagement rate in GA4…", ["Engaged sessions ratio", "Email opens", "DNS", "Fonts"], 0), q("High time on page may mean…", ["Interest or confusion", "Always bad", "CSS", "Tax"], 0), q("Compare…", ["Segments and dates", "Never", "Random", "Payroll"], 0)]),
      autoSpec("conversion-tracking", "Conversion Tracking", "intermediate", 6, 30, "Micro vs macro conversions, thank-you pages, enhanced measurement.", "Define 2 micro + 1 macro conversion for SaaS.", [q("Macro conversion…", ["Primary business goal", "Font change", "DNS", "CSS"], 0), q("Micro conversion…", ["Leading indicator", "Revenue always", "Fonts", "Tax"], 0), q("Track…", ["Key funnel steps", "Nothing", "Payroll", "DNS"], 0)]),
      autoSpec("marketing-dashboards", "Marketing Dashboards", "intermediate", 7, 28, "Looker Studio / Sheets dashboards — weekly KPIs at a glance.", "Sketch dashboard with 6 widgets for ecommerce.", [q("Dashboards show…", ["KPIs at glance", "Raw logs only", "DNS", "Fonts"], 0), q("Update…", ["Automatically when possible", "Never", "CSS", "Tax"], 0), q("Share with…", ["Stakeholders", "Nobody", "Bots", "Payroll"], 0)]),
      autoSpec("attribution-basics", "Attribution Basics", "intermediate", 8, 28, "First-click, last-click, data-driven — no perfect model.", "Explain last-click bias to a marketer.", [q("Attribution assigns…", ["Credit to touchpoints", "Fonts", "DNS", "CSS"], 0), q("Last-click…", ["Overweights final touch", "Perfect truth", "Tax", "Payroll"], 0), q("Use multiple…", ["Models for insight", "Ignore", "Spam", "DNS"], 0)]),
      autoSpec("ab-testing-analytics", "Experiment Analysis", "intermediate", 9, 28, "Sample size, significance, don't peek early, document results.", "Checklist before calling A/B winner.", [q("Significance means…", ["Unlikely due to chance", "Guaranteed win", "DNS", "Fonts"], 0), q("Peeking early…", ["Misleading", "Best practice", "CSS", "Tax"], 0), q("Document…", ["Hypothesis and outcome", "Nothing", "Payroll", "DNS"], 0)]),
      autoSpec("analytics-reporting", "Monthly Marketing Report", "advanced", 10, 32, "Executive summary, channel performance, insights, next month plan.", "Write executive summary paragraph from sample metrics.", [q("Exec summary…", ["Bottom line first", "Raw data dump", "DNS", "Fonts"], 0), q("Insights explain…", ["Why metrics moved", "Nothing", "CSS", "Tax"], 0), q("Next month…", ["Action plan", "Same as always", "Payroll", "DNS"], 0)]),
    ],
  },
  {
    id: "brand-creative",
    title: "Brand & Creative Basics",
    description: "Brand voice, visual identity basics, ad creative, Canva workflows, and assets.",
    icon: "Sparkles",
    color: "bg-pink-500",
    lessons: [
      autoSpec("brand-identity-intro", "Brand Identity Intro", "base", 1, 28, "Logo, colors, typography, voice — consistent recognizable presence.", "Audit brand colors/fonts on website + social.", [q("Brand identity is…", ["Visual + verbal system", "Logo only", "DNS", "Payroll"], 0), q("Consistency…", ["Builds recognition", "Random daily", "CSS", "Fonts"], 0), q("Guidelines help…", ["Teams stay aligned", "Skip strategy", "Tax", "DNS"], 0)]),
      autoSpec("brand-voice", "Brand Voice & Tone", "base", 2, 28, "Voice = personality; tone adapts to situation — formal vs playful.", "Write same CTA in formal vs friendly tone.", [q("Voice is…", ["Brand personality", "Font size", "DNS", "CSS"], 0), q("Tone changes for…", ["Context", "Never", "Payroll", "Tax"], 0), q("Document in…", ["Style guide", "Hidden", "Spam", "DNS"], 0)]),
      autoSpec("color-typography", "Color & Typography Basics", "base", 3, 28, "Contrast, readability, 2-3 brand colors, web-safe font pairings.", "Pick primary + accent color with contrast check.", [q("Contrast helps…", ["Readability", "Spam filters", "DNS", "Payroll"], 0), q("Too many fonts…", ["Looks messy", "Always pro", "CSS", "Tax"], 0), q("Accessibility…", ["WCAG contrast", "Ignore", "Fonts only", "DNS"], 0)]),
      autoSpec("canva-workflow", "Canva for Marketers", "base", 4, 28, "Templates, brand kit, resize for platforms, export formats.", "Create branded Instagram post in Canva.", [q("Brand kit stores…", ["Colors and logos", "Payroll", "DNS", "CSS"], 0), q("Resize for…", ["Each platform", "One size all", "Fonts", "Tax"], 0), q("Export PNG for…", ["Social", "Print billboard only", "Spam", "DNS"], 0)]),
      autoSpec("ad-creative-visual", "Visual Ad Creative", "intermediate", 5, 30, "Hierarchy, focal point, legible text on mobile, brand consistency.", "Critique one ad: focal point, CTA, text size.", [q("Focal point…", ["Draws eye first", "Hidden", "DNS", "CSS"], 0), q("Text on image…", ["Large legible", "Tiny", "Fonts", "Tax"], 0), q("Test on…", ["Mobile preview", "Desktop only", "Payroll", "DNS"], 0)]),
      autoSpec("photo-video-assets", "Photo & Video Assets", "intermediate", 6, 28, "Stock vs custom, licensing, aspect ratios, compression.", "License checklist for stock photo use.", [q("License matters for…", ["Legal use", "Fonts", "DNS", "CSS"], 0), q("Custom photos…", ["Unique brand", "Always free", "Tax", "Payroll"], 0), q("Compress to…", ["Faster load", "Huge files", "Spam", "DNS"], 0)]),
      autoSpec("creative-brief", "Creative Brief", "intermediate", 7, 28, "Objective, audience, message, mandatories, deliverables for designers.", "Write brief for Black Friday banner.", [q("Brief includes…", ["Objective and audience", "Only colors", "DNS", "Payroll"], 0), q("Mandatories…", ["Legal/logo rules", "Optional", "CSS", "Fonts"], 0), q("Share with…", ["Designer/agency", "Nobody", "Tax", "DNS"], 0)]),
      autoSpec("brand-guidelines-doc", "Brand Guidelines Doc", "advanced", 8, 32, "One doc: logo usage, colors, type, voice, examples.", "Outline brand guide table of contents.", [q("Guidelines prevent…", ["Off-brand assets", "Better SEO auto", "DNS", "CSS"], 0), q("Include…", ["Do and don't examples", "Secrets", "Payroll", "Fonts"], 0), q("Update when…", ["Rebrand", "Never", "Daily random", "Tax"], 0)]),
    ],
  },
  {
    id: "conversion",
    title: "Conversion Optimization",
    description: "Landing pages, CRO, forms, heatmaps, A/B tests, and UX for conversions.",
    icon: "TrendingUp",
    color: "bg-lime-600",
    lessons: [
      autoSpec("cro-intro", "Conversion Rate Optimization", "base", 1, 28, "Improve percentage of visitors who complete goal — test and iterate.", "Calculate conversion rate: 50 sales / 2000 visits.", [q("CRO improves…", ["Conversion rate", "Server RAM", "DNS", "Fonts"], 0), q("Conversion rate…", ["Conversions / visits", "Clicks only", "CSS", "Tax"], 0), q("CRO needs…", ["Data and hypotheses", "Random changes", "Payroll", "DNS"], 0)]),
      autoSpec("landing-page-anatomy", "Landing Page Anatomy", "base", 2, 30, "Hero, benefits, proof, FAQ, CTA — above the fold clarity.", "Wireframe landing page sections on paper.", [q("Hero should…", ["Explain offer fast", "Hide product", "DNS", "CSS"], 0), q("Social proof…", ["Builds trust", "Spam", "Fonts", "Tax"], 0), q("One primary CTA…", ["Focuses action", "Ten buttons", "Payroll", "DNS"], 0)]),
      autoSpec("persuasion-principles", "Persuasion Principles", "base", 3, 28, "Cialdini basics: social proof, scarcity, authority, reciprocity ethically.", "Find 2 principles on a landing page you visit.", [q("Social proof is…", ["Others trust this", "Hidden", "DNS", "CSS"], 0), q("Scarcity must be…", ["Honest", "Fake always", "Fonts", "Tax"], 0), q("Authority uses…", ["Expertise signals", "Spam", "Payroll", "DNS"], 0)]),
      autoSpec("form-optimization", "Form Optimization", "base", 4, 28, "Fewer fields, inline validation, clear labels, mobile keyboards.", "Reduce form from 8 to 4 fields — justify.", [q("Fewer fields…", ["Higher completion", "Always worse", "DNS", "CSS"], 0), q("Inline validation…", ["Reduces errors", "Spam", "Fonts", "Tax"], 0), q("Label clarity…", ["Improves UX", "Hide labels", "Payroll", "DNS"], 0)]),
      autoSpec("heatmap-session-recording", "Heatmaps & Recordings", "intermediate", 5, 28, "Hotjar/Clarity — scroll maps, rage clicks, form abandonment.", "Watch 3 session recordings; note one UX issue.", [q("Heatmaps show…", ["Click/scroll patterns", "Payroll", "DNS", "Fonts"], 0), q("Rage clicks suggest…", ["Frustration", "Success", "CSS", "Tax"], 0), q("Use insights to…", ["Prioritize fixes", "Ignore", "Spam", "DNS"], 0)]),
      autoSpec("ab-testing-landing", "Landing Page A/B Tests", "intermediate", 6, 30, "Hypothesis, variant, sample size, run full business cycle.", "Hypothesis: shorter form increases signups — design test.", [q("Hypothesis states…", ["Expected change", "Random", "DNS", "CSS"], 0), q("One change…", ["Isolates cause", "Ten at once", "Fonts", "Tax"], 0), q("Winner implementation…", ["Ship to 100%", "Forget", "Payroll", "DNS"], 0)]),
      autoSpec("mobile-cro", "Mobile CRO", "intermediate", 7, 28, "Thumb zones, tap targets, speed, sticky CTAs.", "Audit mobile site: tap target size + sticky CTA.", [q("Mobile traffic often…", ["Majority", "Zero", "DNS", "CSS"], 0), q("Sticky CTA…", ["Keeps action visible", "Hides content", "Fonts", "Tax"], 0), q("Speed on mobile…", ["Critical", "Optional", "Payroll", "DNS"], 0)]),
      autoSpec("checkout-optimization", "Checkout Optimization", "advanced", 8, 32, "Guest checkout, progress indicator, trust badges, surprise costs.", "List 5 checkout friction fixes for ecommerce.", [q("Guest checkout…", ["Reduces drop-off", "Always bad", "DNS", "CSS"], 0), q("Hidden shipping…", ["Increases abandon", "Helps trust", "Fonts", "Tax"], 0), q("Trust badges…", ["Payment security", "Spam", "Payroll", "DNS"], 0)]),
    ],
  },
  {
    id: "strategy",
    title: "Strategy & Campaigns",
    description: "Campaign planning, budgets, multi-channel plans, timelines, and execution.",
    icon: "Map",
    color: "bg-purple-500",
    lessons: [
      autoSpec("marketing-plan", "Marketing Plan Overview", "base", 1, 30, "Situation analysis, goals, strategy, tactics, budget, metrics.", "One-page plan outline for product launch.", [q("Plan includes…", ["Goals and tactics", "Only logos", "DNS", "CSS"], 0), q("Situation analysis…", ["SWOT/market", "Random", "Fonts", "Tax"], 0), q("Review plan…", ["Quarterly", "Never", "Payroll", "DNS"], 0)]),
      autoSpec("campaign-brief", "Campaign Brief", "base", 2, 28, "Background, objective, audience, offer, channels, KPIs, timeline.", "Fill campaign brief for back-to-school sale.", [q("Brief aligns…", ["Team on goals", "Nobody", "DNS", "Fonts"], 0), q("KPIs in brief…", ["Measurable", "Vague", "CSS", "Tax"], 0), q("Timeline shows…", ["Milestones", "Secrets", "Payroll", "DNS"], 0)]),
      autoSpec("budget-allocation", "Budget Allocation", "base", 3, 28, "Split across channels by funnel stage, test budget, contingency.", "Allocate $5k monthly across 4 channels %.", [q("Test budget…", ["Experiments", "Waste", "DNS", "Fonts"], 0), q("Contingency for…", ["Unknowns", "Nothing", "CSS", "Tax"], 0), q("Reallocate based on…", ["Performance data", "Gut only", "Payroll", "DNS"], 0)]),
      autoSpec("integrated-campaigns", "Integrated Campaigns", "intermediate", 4, 30, "Same message across email, social, ads, PR — consistent timeline.", "Map 2-week launch across 4 channels.", [q("Integrated means…", ["Coordinated channels", "Random posts", "DNS", "CSS"], 0), q("Same core message…", ["Different formats", "Identical spam", "Fonts", "Tax"], 0), q("Timeline sync…", ["Amplifies impact", "Confuses", "Payroll", "DNS"], 0)]),
      autoSpec("launch-checklist", "Launch Checklist", "intermediate", 5, 28, "Tracking live, pixels, UTMs, emails scheduled, support ready.", "20-item checklist for webinar launch.", [q("Before launch verify…", ["Tracking works", "Nothing", "DNS", "Fonts"], 0), q("Support team…", ["Knows offer/FAQ", "Uninformed", "CSS", "Tax"], 0), q("Rollback plan…", ["If issues", "Never", "Payroll", "DNS"], 0)]),
      autoSpec("agency-vs-inhouse", "Agency vs In-House", "intermediate", 6, 28, "When to hire agency, scopes, SLAs, briefing, measuring partners.", "RACI matrix for agency + internal team.", [q("Agency helps…", ["Specialized scale", "Replace strategy", "DNS", "CSS"], 0), q("Brief clearly…", ["Reduces rework", "Vague", "Fonts", "Tax"], 0), q("Measure agency by…", ["KPIs in contract", "Vibes", "Payroll", "DNS"], 0)]),
      autoSpec("seasonal-campaigns", "Seasonal Campaigns", "intermediate", 7, 28, "Holiday calendars, prep lead time, inventory, ad auction spikes.", "Plan Q4 calendar for retail brand.", [q("Start seasonal prep…", ["Weeks/months early", "Day before", "DNS", "CSS"], 0), q("Auctions spike…", ["Holidays", "Never", "Fonts", "Tax"], 0), q("Align with…", ["Inventory/ops", "Random", "Payroll", "DNS"], 0)]),
      autoSpec("b2b-marketing", "B2B Marketing Basics", "intermediate", 8, 30, "Longer cycles, LinkedIn, webinars, lead scoring, sales alignment.", "Define MQL for B2B software product.", [q("B2B cycles are…", ["Often longer", "Always instant", "DNS", "CSS"], 0), q("MQL is…", ["Marketing qualified lead", "Random click", "Fonts", "Tax"], 0), q("Align with sales on…", ["Lead definition", "Nothing", "Payroll", "DNS"], 0)]),
      autoSpec("b2c-marketing", "B2C Marketing Basics", "intermediate", 9, 28, "Shorter cycles, emotional triggers, impulse, retention programs.", "Retention email idea for skincare D2C.", [q("B2C often…", ["Shorter decision", "Year-long RFP", "DNS", "CSS"], 0), q("Emotion…", ["Drives purchase", "Never", "Fonts", "Tax"], 0), q("Retention cheaper than…", ["Acquisition", "Nothing", "Payroll", "DNS"], 0)]),
      autoSpec("post-campaign-review", "Post-Campaign Review", "advanced", 10, 32, "ROI recap, what worked, failures, learnings, next tests.", "Post-campaign report template with 5 sections.", [q("Review includes…", ["Learnings", "Blame only", "DNS", "Fonts"], 0), q("Compare to…", ["Original KPIs", "Random", "CSS", "Tax"], 0), q("Document for…", ["Future campaigns", "Delete", "Payroll", "DNS"], 0)]),
    ],
  },
  {
    id: "dm-projects",
    title: "Portfolio Projects",
    description: "Capstone projects: campaign plan, SEO audit, social calendar, case study portfolio.",
    icon: "Briefcase",
    color: "bg-slate-600",
    lessons: [
      autoSpec("portfolio-intro", "Marketing Portfolio Intro", "base", 1, 28, "Case studies with situation, action, result — proof for employers/clients.", "Outline one case study STAR format.", [q("Portfolio proves…", ["You can execute", "Only certificates", "DNS", "CSS"], 0), q("STAR is…", ["Situation task action result", "Random", "Fonts", "Tax"], 0), q("Include metrics…", ["When possible", "Never", "Payroll", "DNS"], 0)]),
      autoSpec("project-seo-audit", "Project: SEO Audit", "base", 2, 35, "Deliverable: technical + on-page audit with prioritized fixes.", "Complete mini SEO audit for small business site.", [q("Audit deliverable lists…", ["Prioritized fixes", "Only colors", "DNS", "Fonts"], 0), q("Include screenshots…", ["Evidence", "Never", "CSS", "Tax"], 0), q("Present to…", ["Client/stakeholder", "Nobody", "Payroll", "DNS"], 0)]),
      autoSpec("project-content-calendar", "Project: Content Calendar", "base", 3, 32, "30-day calendar with pillars, channels, KPIs.", "Build 30-day calendar for niche you choose.", [q("Calendar shows…", ["Dates and topics", "Random", "DNS", "CSS"], 0), q("Align to…", ["Strategy pillars", "Nothing", "Fonts", "Tax"], 0), q("Metric per post…", ["Optional goal", "Never", "Payroll", "DNS"], 0)]),
      autoSpec("project-social-campaign", "Project: Social Campaign", "intermediate", 4, 35, "2-week campaign: creatives, copy, schedule, results spreadsheet.", "Run small organic campaign; track metrics.", [q("Campaign doc includes…", ["Creatives + KPIs", "Memes only", "DNS", "CSS"], 0), q("Track weekly…", ["Engagement", "Ignore", "Fonts", "Tax"], 0), q("Retrospective…", ["Learnings", "Skip", "Payroll", "DNS"], 0)]),
      autoSpec("project-email-sequence", "Project: Email Sequence", "intermediate", 5, 32, "Welcome or nurture 5-email sequence with goals per email.", "Write 5-email welcome sequence outlines.", [q("Each email has…", ["Single goal", "Ten goals", "DNS", "Fonts"], 0), q("Sequence maps to…", ["Funnel", "Random", "CSS", "Tax"], 0), q("Measure…", ["Opens and clicks", "Fonts", "Payroll", "DNS"], 0)]),
      autoSpec("project-google-ads", "Project: Search Campaign", "intermediate", 6, 35, "Keyword list, ad copy, landing page critique, budget plan.", "Plan Google Search campaign (no spend required).", [q("Deliverable includes…", ["Keywords + ads", "Only logo", "DNS", "CSS"], 0), q("Landing page…", ["Message match", "Random", "Fonts", "Tax"], 0), q("Budget justified by…", ["Goal math", "Guess", "Payroll", "DNS"], 0)]),
      autoSpec("project-meta-ads", "Project: Meta Campaign", "intermediate", 7, 35, "Objective, audiences, 3 creatives, measurement plan.", "Design Meta campaign structure on paper.", [q("Three ad variants…", ["Test creative", "One only", "DNS", "Fonts"], 0), q("Audience doc…", ["Targeting rationale", "Random", "CSS", "Tax"], 0), q("Pixel events…", ["Listed", "Ignored", "Payroll", "DNS"], 0)]),
      autoSpec("project-analytics-dashboard", "Project: Analytics Dashboard", "intermediate", 8, 32, "Looker Studio or Sheets dashboard wired to sample data.", "Build dashboard with 5 KPIs.", [q("Dashboard uses…", ["Real or sample data", "Fake forever", "DNS", "CSS"], 0), q("Filters by…", ["Date/channel", "Nothing", "Fonts", "Tax"], 0), q("Share link…", ["Portfolio", "Hidden", "Payroll", "DNS"], 0)]),
      autoSpec("project-full-campaign", "Project: Full Campaign Plan", "advanced", 9, 40, "Integrated plan: research, strategy, channel mix, budget, timeline.", "Write full campaign plan for fictional startup.", [q("Full plan merges…", ["All channel skills", "One tweet", "DNS", "CSS"], 0), q("Budget table…", ["Included", "Skipped", "Fonts", "Tax"], 0), q("Timeline…", ["Gantt or calendar", "None", "Payroll", "DNS"], 0)]),
      autoSpec("project-case-study", "Project: Case Study Portfolio", "advanced", 10, 38, "Publish 2 case studies with metrics and screenshots.", "Publish case study PDF or Notion page.", [q("Case study shows…", ["Before/after metrics", "Only theory", "DNS", "Fonts"], 0), q("Honest about…", ["Constraints", "Fake numbers", "CSS", "Tax"], 0), q("Share on…", ["LinkedIn/portfolio", "Nowhere", "Payroll", "DNS"], 0)]),
    ],
  },
];

function writeTrackFile(track) {
  const varBase = track.id.replace(/-/g, "_");
  const deepVar = varBase.toUpperCase() + "_DEEP";
  const genVar = varBase.toUpperCase() + "_GENERATED";

  const deepDir = join(curriculumDir, `${track.id}-deep`);
  mkdirSync(deepDir, { recursive: true });
  writeFileSync(join(deepDir, "index.mjs"), `/** Hand-authored deep overrides for ${track.id} */\nexport const ${deepVar} = {};\n`);

  const content = `import { dmLesson } from "./dm-lesson-builder.mjs";
import { applyAllDeepOverrides } from "./deep-content/merge.mjs";
import { ${genVar} } from "./deep-content/generated/${track.id}.mjs";
import { ${deepVar} } from "./${track.id}-deep/index.mjs";

const specs = ${JSON.stringify(track.lessons, null, 2)};

export const _${varBase}Lessons = specs.map((spec) => dmLesson("${track.id}", spec));

export const ${varBase}Lessons = applyAllDeepOverrides(_${varBase}Lessons, ${genVar}, ${deepVar});
`;
  writeFileSync(join(curriculumDir, `${track.id}.mjs`), content);
}

for (const track of TRACKS) {
  writeTrackFile(track);
}

// Update generate-all-deep.mjs
const deepImports = TRACKS.map((t) => {
  const v = t.id.replace(/-/g, "_").toUpperCase();
  return `import { _${t.id.replace(/-/g, "_")}Lessons } from "../${t.id}.mjs";\nimport { ${v}_DEEP } from "../${t.id}-deep/index.mjs";`;
}).join("\n");

const tracksArray = TRACKS.map((t) => {
  const v = t.id.replace(/-/g, "_").toUpperCase();
  return `  { id: "${t.id}", lessons: _${t.id.replace(/-/g, "_")}Lessons, hand: ${v}_DEEP },`;
}).join("\n");

const indexExports = TRACKS.map((t) => {
  const v = t.id.replace(/-/g, "_").toUpperCase();
  return `export { ${v}_GENERATED } from "./${t.id}.mjs";`;
}).join("\n");

writeFileSync(
  join(curriculumDir, "deep-content/generate-all-deep.mjs"),
  `#!/usr/bin/env node
import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
${TRACKS.map((t) => `import { _${t.id.replace(/-/g, "_")}Lessons } from "../${t.id}.mjs";`).join("\n")}
${TRACKS.map((t) => `import { ${t.id.replace(/-/g, "_").toUpperCase()}_DEEP } from "../${t.id}-deep/index.mjs";`).join("\n")}
import { buildGeneratedOverrides, isFullyDeep } from "./expand-lesson.mjs";
import { applyAllDeepOverrides } from "./merge.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "generated");
mkdirSync(outDir, { recursive: true });

const TRACKS = [
${tracksArray}
];

function writeGeneratedFile(trackId, overrides) {
  const varName = trackId.replace(/-/g, "_").toUpperCase() + "_GENERATED";
  const content = "/** AUTO-GENERATED */\\nexport const " + varName + " = " + JSON.stringify(overrides, null, 2) + ";\\n";
  writeFileSync(join(outDir, trackId + ".mjs"), content);
}

const stats = [];
for (const track of TRACKS) {
  const generated = buildGeneratedOverrides(track.lessons);
  writeGeneratedFile(track.id, generated);
  const afterMerge = applyAllDeepOverrides(track.lessons, generated, track.hand);
  stats.push({ track: track.id, total: track.lessons.length, deepAfter: afterMerge.filter(isFullyDeep).length });
}

writeFileSync(join(outDir, "index.mjs"), \`${indexExports}\`);
console.log("DM deep generation done", stats);
`
);

// Update expand-lesson TRACK_CONTEXT
const trackContext = TRACKS.map((t) => `  "${t.id}": { domain: "${t.title}", runtime: "real campaigns and analytics tools", practice: "Complete the hands-on practice task and document results." },`).join("\n");
let expand = readFileSync(join(curriculumDir, "deep-content/expand-lesson.mjs"), "utf8");
expand = expand.replace(/const TRACK_CONTEXT = \{[\s\S]*?\};/, `const TRACK_CONTEXT = {\n${trackContext}\n};`);
writeFileSync(join(curriculumDir, "deep-content/expand-lesson.mjs"), expand);

// Update generate-rich-lessons.mjs
const trackImports = TRACKS.map((t) => `import { ${t.id.replace(/-/g, "_")}Lessons } from "./curriculum/${t.id}.mjs";`).join("\n");
const tracksObj = TRACKS.map((t) => `  "${t.id}": { lessons: ${t.id.replace(/-/g, "_")}Lessons, title: ${JSON.stringify(t.title)}, description: ${JSON.stringify(t.description)}, icon: ${JSON.stringify(t.icon)}, color: ${JSON.stringify(t.color)} },`).join("\n");
const lessonImports = TRACKS.map((t) => `import { ${t.id.replace(/-/g, "_")}Lessons } from "./lessons/${t.id}";`).join("\n");
const tracksArrayTs = TRACKS.map((t, i) => `  { id: "${t.id}", title: ${JSON.stringify(t.title)}, description: ${JSON.stringify(t.description)}, icon: ${JSON.stringify(t.icon)}, color: ${JSON.stringify(t.color)}, order: ${i}, lessons: ${t.id.replace(/-/g, "_")}Lessons },`).join("\n");

writeFileSync(
  join(__dirname, "generate-rich-lessons.mjs"),
  `import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
${trackImports}

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../src/content/lessons");
mkdirSync(outDir, { recursive: true });

const tracks = {
${tracksObj}
};

for (const [id, track] of Object.entries(tracks)) {
  const varName = id.replace(/-/g, "_") + "Lessons";
  writeFileSync(join(outDir, \`\${id}.ts\`), \`import type { Lesson } from "@/lib/types";\\n\\nexport const \${varName}: Lesson[] = \${JSON.stringify(track.lessons, null, 2)};\\n\`);
  console.log(\`✓ \${id}: \${track.lessons.length} lessons\`);
}

const trackMeta = Object.entries(tracks).map(([id, t], order) => ({
  id, title: t.title, description: t.description, icon: t.icon, color: t.color, order,
  lessonCount: t.lessons.length,
  estimatedMinutes: t.lessons.reduce((s, l) => s + l.estimatedMinutes, 0),
}));

writeFileSync(join(__dirname, "../src/content/tracks.ts"), \`import type { Track } from "@/lib/types";
${lessonImports}

export const trackMeta = \${JSON.stringify(trackMeta, null, 2)} as const;

export const tracks: Track[] = [
${tracksArrayTs}
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
\`);

console.log("Total lessons:", Object.values(tracks).reduce((s, t) => s + t.lessons.length, 0));
`
);

// Update helper for DM defaults
writeFileSync(
  join(curriculumDir, "helper.mjs"),
  readFileSync(join(curriculumDir, "helper.mjs"), "utf8")
    .replace(/for real \$\{track\} projects/, "in real marketing campaigns")
    .replace(/frontend developers building with \$\{track\.toUpperCase\(\)\}/, "digital marketers and growth teams")
    .replace(/Open Live Demo/, "Complete the practice exercise")
    .replace(/playground and observe the result/, "task and document your results")
);

console.log(`Bootstrap complete: ${TRACKS.length} tracks, ${TRACKS.reduce((s, t) => s + t.lessons.length, 0)} lessons`);
