import { L, q } from "./helper.mjs";

/** Standard 5-question quiz for digital marketing lessons */
export function dmQuiz(custom) {
  const defaults = [
    q("Best way to learn this topic?", ["Read + complete the practice task", "Skip the practice exercise", "Memorize definitions only", "Jump to advanced tactics without basics"], 0),
    q("After this lesson you should be able to…", ["Explain it and apply it to a real brand", "Only recite definitions", "Ignore metrics", "Avoid hands-on practice"], 0),
  ];
  return [...custom, ...defaults].slice(0, 5);
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60);
}

/**
 * Build a deeper lesson from a compact definition — used by full-curriculum.mjs
 */
export function deepAutoLesson(track, title, level, order, summary, sections, practice, quiz, tools = []) {
  const slug = slugify(title);
  const sectionBlock = sections.length
    ? `\n\n### Deep dive — what to understand\n\n${sections.map((s) => `- ${s}`).join("\n")}`
    : "";

  const definition = `**${title}** is a core part of professional digital marketing. ${summary}

Professionals use this concept when planning campaigns, reporting to stakeholders, and optimizing performance. Beginners often learn the definition but skip application — experts document decisions, metrics, and results.${sectionBlock}`;

  const whatIs = `### What is ${title}?

${definition}

### How this fits your learning path

| Question | Answer |
|----------|--------|
| **What** | ${summary.split(".")[0]}. |
| **Why it matters** | Connects tactics to business outcomes (leads, sales, retention) |
| **Who uses it** | In-house teams, agencies, freelancers, founders |
| **Proof you learned it** | Complete the Practice task with written output |${
    tools.length
      ? `\n\n### Tools & references\n\n${tools.map((t) => `- **${t.name}** — ${t.use}`).join("\n")}`
      : ""
  }

### Study method for this lesson

1. Read the full tutorial sections (do not skim)
2. Copy the example structure into your notes
3. Complete Practice with a **real** brand or fictional client you invent
4. Pass the quiz — retry until you can explain without looking`;

  return L(slug, title, track, level, order, 32, {
    summary,
    objectives: [
      `Define ${title} clearly in your own words`,
      `Explain how ${title} connects to funnel stages and business goals`,
      `Identify when teams apply ${title} in real campaigns`,
      `Complete a practice deliverable you could show in a portfolio`,
    ],
    whatIs,
    whyUse: `${title} reduces wasted spend and confusion. Teams that master this make faster decisions, write better briefs, and produce reports executives trust. It bridges strategy (why) and execution (how).`,
    whenToUse: `Apply ${title} when auditing a brand, launching a campaign, optimizing a funnel stage, preparing certifications, or writing case studies for job applications.`,
    steps: [
      { title: "Learn the concept", body: `Read what ${title} means and list 3 real-world examples from brands you follow.` },
      { title: "Map to a funnel stage", body: "Decide if this topic mainly supports awareness, consideration, conversion, or retention." },
      { title: "Choose metrics", body: "Write 2–3 KPIs that prove whether you applied this topic successfully." },
      { title: "Study the example", body: "Walk through the scenario in the Examples tab and note what you would do differently." },
      { title: "Complete practice", body: "Produce the written deliverable described in the Practice tab." },
      { title: "Validate with quiz", body: "Score 100% on the quiz or redo until confident." },
    ],
    example: `### Worked example: ${title}

**Scenario:** A D2C skincare brand wants to grow online revenue without increasing ad spend blindly.

**Situation:** Traffic is steady but conversion is weak; email list is small; social engagement is high but sales flat.

**How ${title} helps:** The team uses this lesson's concept to diagnose the bottleneck, pick one priority fix, and measure impact over 30 days.

**Action checklist:**
- Document current baseline metrics
- Apply ${title.toLowerCase()} to one customer segment
- Run a small test (budget or time-boxed)
- Compare before/after and write 5-bullet retrospective`,
    realWorld: `Agencies bill clients for expertise in areas like **${title}**. Interviewers ask for examples. Certifications (Google, Meta, HubSpot) assume you know this vocabulary. Your portfolio should show one mini case study per major topic.`,
    commonMistakes: `1. **Jargon without application** — define terms, then use them in a sentence about a real brand\n2. **No baseline metrics** — you cannot prove improvement without "before" numbers\n3. **Copying competitors** — learn principles, adapt to your audience\n4. **Skipping practice** — reading alone does not build job-ready skill\n5. **One channel thinking** — connect this topic to full-funnel context`,
    tryIt: `### Practice — ${title}\n\n${practice}\n\n**Deliverable:** Submit written notes (bullet points OK) covering: brand chosen, actions taken, metrics tracked, one thing you would do differently next week.`,
    quiz: dmQuiz(quiz),
    playground: "none",
  });
}

/** Build lessons from compact rows: [title, level, summary, sections[], practice, quiz[]] */
export function lessonsFromRows(track, rows) {
  return rows.map(([title, level, summary, sections, practice, quiz, tools], i) =>
    deepAutoLesson(track, title, level, i + 1, summary, sections || [], practice, quiz || [], tools || [])
  );
}

/**
 * Build a full digital marketing lesson with plain-English depth (legacy spec format).
 */
export function dmLesson(track, spec) {
  const {
    slug,
    title,
    level,
    order,
    minutes,
    summary,
    definition,
    why,
    when,
    tools = [],
    stepTitles,
    example,
    mistakes,
    practice,
    quiz,
    sections = [],
  } = spec;

  return deepAutoLesson(
    track,
    title,
    level,
    order,
    summary,
    sections.length ? sections : [definition?.split("\n")[0] || summary],
    practice,
    quiz,
    tools
  );
}
