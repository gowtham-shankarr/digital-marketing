export type LessonLevel = "base" | "intermediate" | "advanced";

export type PlaygroundType =
  | "html"
  | "sandpack-react"
  | "sandpack-angular"
  | "sandpack-ts"
  | "none";

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
}

export interface StarterCode {
  html?: string;
  css?: string;
  js?: string;
}

export interface LessonStep {
  title: string;
  body: string;
}

export interface Lesson {
  slug: string;
  title: string;
  track: string;
  level: LessonLevel;
  order: number;
  estimatedMinutes: number;
  /** One-line summary for the lesson card */
  summary: string;
  /** Bullet list of learning outcomes */
  objectives: string[];
  /** Plain-language definition */
  whatIs: string;
  /** Why developers use this concept */
  whyUse: string;
  /** Real situations where you apply it */
  whenToUse: string;
  /** Numbered walkthrough */
  steps: LessonStep[];
  /** Annotated code walkthrough with explanation */
  example: string;
  /** Real project / website examples */
  realWorld: string;
  /** Pitfalls beginners hit */
  commonMistakes: string;
  /** Hands-on exercise with hints */
  tryIt: string;
  quiz: QuizQuestion[];
  playground: PlaygroundType;
  starterCode?: StarterCode;
  sandpackFiles?: Record<string, string>;
  sandpackTemplate?: "react" | "angular" | "vanilla-ts";
  /** @deprecated kept for migration — use structured fields above */
  explain?: string;
}

export interface Track {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  order: number;
  lessons: Lesson[];
}

export interface ProgressData {
  completedLessons: string[];
  lastVisited: string | null;
  quizScores: Record<string, number>;
  bookmarkedLessons: string[];
  /** ISO date strings YYYY-MM-DD */
  studyDates: string[];
  lessonNotes: Record<string, string>;
}
