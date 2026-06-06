/** Merge hand-authored deep lesson fields into generated lessons */
export function applyDeepOverrides(lessons, overrides) {
  return lessons.map((lesson) => {
    const deep = overrides[lesson.slug];
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
}
