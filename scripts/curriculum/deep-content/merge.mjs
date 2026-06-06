import { isFullyDeep } from "./expand-lesson.mjs";
import { applyPracticeTasks } from "./practice-tasks.mjs";

/** Generated first, hand-authored wins on key collision */
export function mergeOverrides(generated, handAuthored = {}) {
  return { ...generated, ...handAuthored };
}

function pickRicher(handVal, genVal, minLen = 0) {
  if (!genVal) return handVal;
  if (!handVal) return genVal;
  const h = typeof handVal === "string" ? handVal.length : Array.isArray(handVal) ? handVal.length : 0;
  const g = typeof genVal === "string" ? genVal.length : Array.isArray(genVal) ? genVal.length : 0;
  if (h < minLen && g > h) return genVal;
  return handVal;
}

/** Merge hand + generated field-by-field, keeping hand unless generated is richer */
export function mergeLessonOverride(generated, hand) {
  if (!generated && !hand) return null;
  if (!hand) return generated;
  if (!generated) return hand;
  return {
    ...generated,
    ...hand,
    estimatedMinutes: hand.estimatedMinutes ?? generated.estimatedMinutes,
    summary: pickRicher(hand.summary, generated.summary, 80),
    objectives: pickRicher(hand.objectives, generated.objectives, 4),
    whatIs: pickRicher(hand.whatIs, generated.whatIs, 500),
    whyUse: pickRicher(hand.whyUse, generated.whyUse, 150),
    whenToUse: pickRicher(hand.whenToUse, generated.whenToUse, 150),
    steps: pickRicher(hand.steps, generated.steps, 5),
    example: pickRicher(hand.example, generated.example, 100),
    realWorld: pickRicher(hand.realWorld, generated.realWorld, 100),
    commonMistakes: pickRicher(hand.commonMistakes, generated.commonMistakes, 120),
    tryIt: pickRicher(hand.tryIt, generated.tryIt, 80),
    quiz: pickRicher(hand.quiz, generated.quiz, 5),
    playground: hand.playground ?? generated.playground,
    sandpackFiles: hand.sandpackFiles ?? generated.sandpackFiles,
    sandpackTemplate: hand.sandpackTemplate ?? generated.sandpackTemplate,
    starterCode: hand.starterCode ?? generated.starterCode,
  };
}

/** Apply generated + hand overrides to a lesson array, then ensure useful practice tasks */
export function applyAllDeepOverrides(lessons, generated, handAuthored = {}) {
  const merged = lessons.map((lesson) => {
    const deep = mergeLessonOverride(generated[lesson.slug], handAuthored[lesson.slug]);
    if (!deep) return lesson;
    return {
      ...lesson,
      estimatedMinutes: deep.estimatedMinutes ?? lesson.estimatedMinutes,
      summary: deep.summary ?? lesson.summary,
      objectives: deep.objectives ?? lesson.objectives,
      whatIs: deep.whatIs ?? lesson.whatIs,
      whyUse: deep.whyUse ?? lesson.whyUse,
      whenToUse: deep.whenToUse ?? lesson.whenToUse,
      steps: deep.steps ?? lesson.steps,
      example: deep.example ?? lesson.example,
      realWorld: deep.realWorld ?? lesson.realWorld,
      commonMistakes: deep.commonMistakes ?? lesson.commonMistakes,
      tryIt: deep.tryIt ?? lesson.tryIt,
      quiz: deep.quiz ?? lesson.quiz,
      playground: deep.playground ?? lesson.playground,
      sandpackFiles: deep.sandpackFiles ?? lesson.sandpackFiles,
      sandpackTemplate: deep.sandpackTemplate ?? lesson.sandpackTemplate,
      starterCode: deep.starterCode ?? lesson.starterCode,
    };
  });
  return applyPracticeTasks(merged);
}

/** Count lessons meeting the deep threshold after merge */
export function countDeepLessons(lessons) {
  return lessons.filter(isFullyDeep).length;
}

/** Build per-slug merged override map */
export function buildMergedOverrideMap(generated = {}, handAuthored = {}) {
  const slugs = new Set([...Object.keys(generated), ...Object.keys(handAuthored)]);
  const out = {};
  for (const slug of slugs) {
    const merged = mergeLessonOverride(generated[slug], handAuthored[slug]);
    if (merged) out[slug] = merged;
  }
  return out;
}
