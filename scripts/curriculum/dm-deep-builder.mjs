import { q } from "./helper.mjs";

/** Build a hand-authored deep marketing lesson override */
export function richDM(minutes, summary, objectives, fields) {
  return {
    estimatedMinutes: minutes,
    summary,
    objectives,
    whatIs: fields.whatIs,
    whyUse: fields.whyUse,
    whenToUse: fields.whenToUse,
    steps: fields.steps,
    example: fields.example,
    realWorld: fields.realWorld,
    commonMistakes: fields.commonMistakes,
    tryIt: fields.tryIt,
    quiz: fields.quiz,
  };
}

export function quiz5(...items) {
  return items.slice(0, 5);
}

export function qq(question, correct, wrong1, wrong2, wrong3) {
  return q(question, [correct, wrong1, wrong2, wrong3], 0);
}
