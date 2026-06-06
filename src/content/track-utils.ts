import { getLesson, getTrack } from "./tracks";
import { getPathLessonSequence } from "./learning-path-nav";

export function resolveLessonRef(lessonId: string) {
  const slash = lessonId.indexOf("/");
  if (slash <= 0) return null;
  const trackId = lessonId.slice(0, slash);
  const slug = lessonId.slice(slash + 1);
  const track = getTrack(trackId);
  const lesson = getLesson(trackId, slug);
  if (!track || !lesson) return null;
  return { trackId, slug, trackTitle: track.title, lessonTitle: lesson.title, lesson };
}

export function getNextIncompleteLesson(completedIds: string[]) {
  const done = new Set(completedIds);
  for (const { trackId, slug } of getPathLessonSequence()) {
    const id = `${trackId}/${slug}`;
    if (!done.has(id)) {
      const track = getTrack(trackId);
      const lesson = getLesson(trackId, slug);
      if (track && lesson) {
        return { trackId, slug, title: lesson.title, trackTitle: track.title };
      }
    }
  }
  return null;
}
