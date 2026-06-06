import type { ProgressData } from "./types";
import {
  averageQuizScore,
  computeStudyStreak,
  isValidProgressImport,
  mergeProgressData,
  parseLessonId,
  todayKey,
} from "./progress-helpers";

const STORAGE_KEY = "dm-learning-progress";
const EXPORT_VERSION = 1;

const defaultProgress: ProgressData = {
  completedLessons: [],
  lastVisited: null,
  quizScores: {},
  bookmarkedLessons: [],
  studyDates: [],
  lessonNotes: {},
};

function normalizeProgress(raw: Partial<ProgressData>): ProgressData {
  return {
    completedLessons: raw.completedLessons ?? [],
    lastVisited: raw.lastVisited ?? null,
    quizScores: raw.quizScores ?? {},
    bookmarkedLessons: raw.bookmarkedLessons ?? [],
    studyDates: raw.studyDates ?? [],
    lessonNotes: raw.lessonNotes ?? {},
  };
}

export function getProgress(): ProgressData {
  if (typeof window === "undefined") return defaultProgress;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress;
    return normalizeProgress({ ...defaultProgress, ...JSON.parse(raw) });
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(data: ProgressData): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function notifyProgressUpdate(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("progress-update"));
}

function recordStudyDay(progress: ProgressData): void {
  const today = todayKey();
  if (!progress.studyDates.includes(today)) {
    progress.studyDates.push(today);
  }
}

export function markLessonComplete(lessonId: string): ProgressData {
  const progress = getProgress();
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
  }
  recordStudyDay(progress);
  saveProgress(progress);
  return progress;
}

export function setLastVisited(lessonId: string): void {
  const progress = getProgress();
  progress.lastVisited = lessonId;
  recordStudyDay(progress);
  saveProgress(progress);
}

export function setQuizScore(lessonId: string, score: number): void {
  const progress = getProgress();
  progress.quizScores[lessonId] = score;
  saveProgress(progress);
}

export function toggleBookmark(lessonId: string): boolean {
  const progress = getProgress();
  const idx = progress.bookmarkedLessons.indexOf(lessonId);
  if (idx >= 0) {
    progress.bookmarkedLessons.splice(idx, 1);
    saveProgress(progress);
    return false;
  }
  progress.bookmarkedLessons.push(lessonId);
  saveProgress(progress);
  return true;
}

export function isBookmarked(lessonId: string): boolean {
  return getProgress().bookmarkedLessons.includes(lessonId);
}

export function setLessonNote(lessonId: string, note: string): void {
  const progress = getProgress();
  if (note.trim()) {
    progress.lessonNotes[lessonId] = note;
  } else {
    delete progress.lessonNotes[lessonId];
  }
  saveProgress(progress);
}

export function getLessonNote(lessonId: string): string {
  return getProgress().lessonNotes[lessonId] ?? "";
}

export function getLessonsWithNotes(): { lessonId: string; note: string }[] {
  return Object.entries(getProgress().lessonNotes)
    .filter(([, note]) => note.trim().length > 0)
    .map(([lessonId, note]) => ({ lessonId, note }))
    .sort((a, b) => a.lessonId.localeCompare(b.lessonId));
}

export function getLessonId(track: string, slug: string): string {
  return `${track}/${slug}`;
}

export function getTrackProgress(
  trackId: string,
  lessonSlugs: string[]
): { completed: number; total: number; percent: number } {
  const progress = getProgress();
  const completed = lessonSlugs.filter((slug) =>
    progress.completedLessons.includes(getLessonId(trackId, slug))
  ).length;
  const total = lessonSlugs.length;
  return {
    completed,
    total,
    percent: total > 0 ? Math.round((completed / total) * 100) : 0,
  };
}

export function getGlobalProgress(totalLessons: number): {
  completed: number;
  total: number;
  percent: number;
} {
  const completed = getProgress().completedLessons.length;
  return {
    completed,
    total: totalLessons,
    percent: totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0,
  };
}

export function getQuizSummary(): {
  average: number | null;
  attempted: number;
  weakLessons: string[];
} {
  const { quizScores } = getProgress();
  const entries = Object.entries(quizScores);
  const weakLessons = entries.filter(([, score]) => score < 60).map(([id]) => id);
  return {
    average: averageQuizScore(quizScores),
    attempted: entries.length,
    weakLessons,
  };
}

export function getStudyStreak(): number {
  return computeStudyStreak(getProgress().studyDates);
}

export function exportProgressJSON(): string {
  const data = getProgress();
  return JSON.stringify(
    { version: EXPORT_VERSION, exportedAt: new Date().toISOString(), data },
    null,
    2
  );
}

export function importProgressJSON(raw: string): { ok: true } | { ok: false; error: string } {
  try {
    const parsed = JSON.parse(raw) as { data?: unknown; version?: number };
    const payload = parsed.data ?? parsed;
    if (!isValidProgressImport(payload)) {
      return { ok: false, error: "Invalid progress file format." };
    }
    const merged = mergeProgressData(getProgress(), payload);
    saveProgress(merged);
    notifyProgressUpdate();
    return { ok: true };
  } catch {
    return { ok: false, error: "Could not parse JSON file." };
  }
}

export { parseLessonId };
