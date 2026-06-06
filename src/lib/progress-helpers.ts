import type { ProgressData } from "./types";

export function parseLessonId(id: string): { track: string; slug: string } | null {
  const slash = id.indexOf("/");
  if (slash <= 0 || slash === id.length - 1) return null;
  return { track: id.slice(0, slash), slug: id.slice(slash + 1) };
}

export function todayKey(date = new Date()): string {
  return date.toISOString().slice(0, 10);
}

/** Consecutive study days ending today (or yesterday if not studied today yet). */
export function computeStudyStreak(dates: string[], reference = new Date()): number {
  if (dates.length === 0) return 0;

  const unique = [...new Set(dates)].sort();
  const today = todayKey(reference);
  const yesterday = todayKey(new Date(reference.getTime() - 86_400_000));

  let cursor: string | null = unique.includes(today)
    ? today
    : unique.includes(yesterday)
      ? yesterday
      : null;

  if (!cursor) return 0;

  let streak = 0;
  const set = new Set(unique);

  while (cursor && set.has(cursor)) {
    streak += 1;
    const prev = new Date(`${cursor}T12:00:00.000Z`);
    prev.setUTCDate(prev.getUTCDate() - 1);
    cursor = todayKey(prev);
  }

  return streak;
}

export function mergeProgressData(
  current: ProgressData,
  incoming: Partial<ProgressData>
): ProgressData {
  const uniq = (arr: string[]) => [...new Set(arr)];

  return {
    completedLessons: uniq([
      ...current.completedLessons,
      ...(incoming.completedLessons ?? []),
    ]),
    lastVisited: incoming.lastVisited ?? current.lastVisited,
    quizScores: { ...current.quizScores, ...(incoming.quizScores ?? {}) },
    bookmarkedLessons: uniq([
      ...current.bookmarkedLessons,
      ...(incoming.bookmarkedLessons ?? []),
    ]),
    studyDates: uniq([...current.studyDates, ...(incoming.studyDates ?? [])]),
    lessonNotes: { ...current.lessonNotes, ...(incoming.lessonNotes ?? {}) },
  };
}

export function isValidProgressImport(data: unknown): data is Partial<ProgressData> {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  const arrayOk = (v: unknown) => v === undefined || (Array.isArray(v) && v.every((x) => typeof x === "string"));
  const recordOk = (v: unknown) =>
    v === undefined || (typeof v === "object" && v !== null && !Array.isArray(v));
  return (
    arrayOk(d.completedLessons) &&
    arrayOk(d.bookmarkedLessons) &&
    arrayOk(d.studyDates) &&
    (d.lastVisited === undefined || d.lastVisited === null || typeof d.lastVisited === "string") &&
    recordOk(d.quizScores) &&
    recordOk(d.lessonNotes)
  );
}

export function averageQuizScore(scores: Record<string, number>): number | null {
  const values = Object.values(scores);
  if (values.length === 0) return null;
  return Math.round(values.reduce((n, v) => n + v, 0) / values.length);
}
