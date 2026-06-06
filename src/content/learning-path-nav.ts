import { RECOMMENDED_PATH_TRACK_IDS } from "./learning-path";
import type { Track } from "@/lib/types";
import { getTrack, tracks } from "./tracks";

function orderedTracks() {
  const byId = new Map(tracks.map((t) => [t.id, t]));
  return RECOMMENDED_PATH_TRACK_IDS.map((id) => byId.get(id)).filter(
    (t): t is NonNullable<typeof t> => Boolean(t)
  );
}

/** Flat lesson list in recommended learning-path order */
export function getPathLessonSequence() {
  return orderedTracks().flatMap((track) =>
    track.lessons.map((lesson) => ({
      trackId: track.id,
      slug: lesson.slug,
    }))
  );
}

export function getPathAdjacentLessons(trackId: string, slug: string) {
  const sequence = getPathLessonSequence();
  const idx = sequence.findIndex((l) => l.trackId === trackId && l.slug === slug);
  if (idx < 0) return { prev: null, next: null };
  const prev = idx > 0 ? sequence[idx - 1] : null;
  const next = idx < sequence.length - 1 ? sequence[idx + 1] : null;
  return {
    prev: prev ? { track: prev.trackId, lesson: prev.slug } : null,
    next: next ? { track: next.trackId, lesson: next.slug } : null,
  };
}

export function getFirstPathLesson() {
  const first = getPathLessonSequence()[0];
  if (!first) return null;
  const track = getTrack(first.trackId);
  const lesson = track?.lessons.find((l) => l.slug === first.slug);
  if (!track || !lesson) return null;
  return { track, lesson };
}
