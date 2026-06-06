import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTrack, getLesson, getAdjacentLessons, tracks } from "@/content/tracks";
import { LessonView } from "@/components/learning/lesson-view";
import { buildLessonKeywords } from "@/lib/lesson-keywords";

export async function generateStaticParams() {
  return tracks.flatMap((track) =>
    track.lessons.map((lesson) => ({
      track: track.id,
      lesson: lesson.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string; lesson: string }>;
}): Promise<Metadata> {
  const { track: trackId, lesson: slug } = await params;
  const track = getTrack(trackId);
  const lesson = getLesson(trackId, slug);
  if (!lesson || !track) return { title: "Lesson Not Found" };
  return {
    title: lesson.title,
    description: lesson.summary,
    keywords: buildLessonKeywords(lesson, track),
    openGraph: {
      title: `${lesson.title} | ${track.title}`,
      description: lesson.summary,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${lesson.title} | ${track.title}`,
      description: lesson.summary,
    },
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ track: string; lesson: string }>;
}) {
  const { track: trackId, lesson: slug } = await params;
  const track = getTrack(trackId);
  const lesson = getLesson(trackId, slug);
  if (!track || !lesson) notFound();

  const { prev, next } = getAdjacentLessons(trackId, slug);
  const prevLesson = prev ? getLesson(prev.track, prev.lesson) : null;
  const nextLesson = next ? getLesson(next.track, next.lesson) : null;

  return (
    <LessonView
      lesson={lesson}
      trackTitle={track.title}
      prev={prev && prevLesson ? { track: prev.track, lesson: prevLesson } : null}
      next={next && nextLesson ? { track: next.track, lesson: nextLesson } : null}
    />
  );
}
