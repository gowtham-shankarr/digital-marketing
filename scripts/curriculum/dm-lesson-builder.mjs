import { L, q } from "./helper.mjs";
import { buildLessonContent } from "./dm-topic-examples.mjs";
import { getExecutionPack } from "./dm-templates.mjs";

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
  const rich = buildLessonContent({ track, title, slug, level, summary, sections, practice });
  const toolsBlock =
    tools.length > 0
      ? `\n\n### Tools to use\n\n${tools.map((t) => `- **${t.name}** — ${t.use}`).join("\n")}`
      : "";

  return L(slug, title, track, level, order, rich.minutes, {
    summary: rich.summary,
    objectives: rich.objectives,
    whatIs: rich.whatIs + toolsBlock,
    whyUse: rich.whyUse,
    whenToUse: rich.whenToUse,
    steps: rich.steps,
    example: rich.example,
    realWorld: rich.realWorld,
    commonMistakes: rich.commonMistakes,
    tryIt: rich.tryIt + getExecutionPack(track, slug, title),
    quiz: quiz?.length >= 3 ? dmQuiz(quiz) : rich.quiz.slice(0, 5),
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
