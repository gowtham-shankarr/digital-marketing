import { L, q } from "./helper.mjs";

/** Standard 5-question quiz for digital marketing lessons */
export function dmQuiz(custom) {
  const defaults = [
    q("Best way to learn this topic?", ["Read + complete the practice task", "Skip the practice exercise", "Memorize definitions only", "Jump to paid ads without basics"], 0),
    q("After this lesson you should be able to…", ["Explain it and apply it to a real brand", "Only recite definitions", "Ignore metrics", "Avoid hands-on practice"], 0),
  ];
  return [...custom, ...defaults].slice(0, 5);
}

/**
 * Build a full digital marketing lesson with plain-English depth.
 * @param {string} track - track id
 * @param {object} spec - lesson specification
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
  } = spec;

  const toolsBlock =
    tools.length > 0
      ? `\n\n### Tools you may use\n\n${tools.map((t) => `- **${t.name}** — ${t.use}`).join("\n")}`
      : "";

  const whatIs = `### What is ${title}?

${definition}

### Key ideas

| Concept | Plain English |
|---------|---------------|
| **Goal** | ${summary.split(".")[0]}. |
| **Who uses it** | Marketers, founders, freelancers, and agency teams |
| **Output** | A repeatable skill you apply to real campaigns |${toolsBlock}

### Remember

${title} is not theory-only — you prove understanding by doing the **Practice** task at the end of this lesson.`;

  const steps = (stepTitles || [
    `Read what ${title} means in plain English`,
    "Study the example scenario",
    "List how this applies to a brand you know",
    "Complete the practice exercise",
    "Pass the quiz before moving on",
  ]).map((body, i) => ({
    title: `Step ${i + 1}`,
    body,
  }));

  return L(slug, title, track, level, order, minutes, {
    summary,
    objectives: [
      `Define ${title} in your own words`,
      `Explain why ${title} matters for business growth`,
      `Identify when to use ${title} in a campaign`,
      `Complete a hands-on practice task for ${title}`,
    ],
    whatIs,
    whyUse: why,
    whenToUse: when,
    steps,
    example: example || `### Example: ${title} in action\n\nImagine a small online store launching a new product. The team uses **${title}** to reach the right audience, measure results, and improve the next campaign. Walk through the example in this lesson and map each step to a real decision (audience, message, channel, metric).`,
    realWorld: `Brands like Nike, local restaurants, SaaS startups, and solo creators all use concepts from **${title}**. Agencies deliver this work for clients daily. Your portfolio grows when you document before/after metrics from exercises like the one in this lesson.`,
    commonMistakes: mistakes,
    tryIt: practice,
    quiz: dmQuiz(quiz),
    playground: "none",
  });
}
