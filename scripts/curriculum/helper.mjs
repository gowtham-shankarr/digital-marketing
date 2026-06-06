/** Build a fully structured lesson object */
export function L(slug, title, track, level, order, minutes, d) {
  const sandpackCode =
    d.sandpackFiles?.["/src/app.component.ts"] ||
    d.sandpackFiles?.["/App.js"] ||
    d.sandpackFiles?.["/App.tsx"] ||
    d.sandpackFiles?.["/index.ts"];
  const defaultExample = sandpackCode
    ? `### ${title} — Code Example\n\n\`\`\`typescript\n${sandpackCode}\n\`\`\`\n\n**How to read this:** Study each line. Change one thing at a time in the Live Demo.`
    : `### ${title}\n\nPractice this concept in the **Live Demo** tab or follow the steps above.`;
  const defaultSteps = [
    { title: "Read the concept", body: `Understand what ${title} is and when to use it in real ${track} projects.` },
    { title: "Study the example", body: "Walk through the code example line by line." },
    { title: "Complete the practice exercise", body: "Change one value at a time in the task and document your results." },
    { title: "Complete the exercise", body: "Follow the Try It task and answer the quiz questions." },
  ];

  return {
    slug,
    title,
    track,
    level,
    order,
    estimatedMinutes: minutes,
    summary: d.summary,
    objectives: d.objectives,
    whatIs: d.whatIs,
    whyUse: d.whyUse,
    whenToUse: d.whenToUse,
    steps: d.steps ?? defaultSteps,
    example: d.example ?? defaultExample,
    realWorld: d.realWorld ?? `${title} appears in production websites and is expected knowledge for digital marketers and growth teams.`,
    commonMistakes: d.commonMistakes,
    tryIt: d.tryIt,
    quiz: d.quiz,
    playground: d.playground || "none",
    starterCode: d.starterCode,
    sandpackFiles: d.sandpackFiles,
    sandpackTemplate: d.sandpackTemplate,
  };
}

export function q(question, options, answer) {
  return { question, options, answer };
}
