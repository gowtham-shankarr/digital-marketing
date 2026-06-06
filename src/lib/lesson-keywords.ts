import type { Lesson, Track } from "@/lib/types";

const STOP = new Set(["and", "the", "for", "with", "from", "your", "that", "this", "into"]);

function tokens(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s/+]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP.has(w));
}

/** Topic-relevant meta keywords per lesson (no dev-template leftovers). */
export function buildLessonKeywords(lesson: Lesson, track: Track): string[] {
  const fromTrack = tokens(track.title);
  const fromLesson = tokens(lesson.title);
  const fromSummary = tokens(lesson.summary).slice(0, 4);
  const base = ["digital marketing", track.id.replace(/-/g, " "), lesson.level];

  const merged = [...fromLesson, ...fromTrack, ...fromSummary, ...base];
  return [...new Set(merged)].slice(0, 12);
}
