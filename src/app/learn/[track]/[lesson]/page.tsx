import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTrack, getLesson, getAdjacentLessons, tracks } from "@/content/tracks";
import { LessonView } from "@/components/learning/lesson-view";

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
    keywords: [lesson.title, track.title, lesson.level, "web development", "tutorial"],
    openGraph: {
      title: `${lesson.title} | ${track.title}`,
      description: lesson.summary,
      type: "article",
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

  return (
    <LessonView
      lesson={lesson}
      trackTitle={track.title}
      prev={prev ? { track: prev.track, lesson: prev.lesson } : null}
      next={next ? { track: next.track, lesson: next.lesson } : null}
    />
  );
}
