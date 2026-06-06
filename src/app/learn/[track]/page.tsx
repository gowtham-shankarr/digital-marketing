import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTrack } from "@/content/tracks";
import { LessonListItem } from "@/components/learning/lesson-card";
import { Badge } from "@/components/ui/badge";

export async function generateStaticParams() {
  const { tracks } = await import("@/content/tracks");
  return tracks.map((t) => ({ track: t.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ track: string }>;
}): Promise<Metadata> {
  const { track: trackId } = await params;
  const track = getTrack(trackId);
  if (!track) return { title: "Track Not Found" };
  return {
    title: track.title,
    description: track.description,
  };
}

export default async function TrackPage({
  params,
}: {
  params: Promise<{ track: string }>;
}) {
  const { track: trackId } = await params;
  const track = getTrack(trackId);
  if (!track) notFound();

  const levels = ["base", "intermediate", "advanced"] as const;

  return (
    <div className="px-6 py-8">
      <div className="mb-8">
        <Badge className={`mb-4 ${track.color} text-white`}>{track.title}</Badge>
        <h1 className="text-3xl font-bold tracking-tight">{track.title}</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">{track.description}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          {track.lessons.length} lessons ·{" "}
          {track.lessons.reduce((s, l) => s + l.estimatedMinutes, 0)} minutes total
        </p>
      </div>

      {levels.map((level) => {
        const lessons = track.lessons.filter((l) => l.level === level);
        if (lessons.length === 0) return null;
        return (
          <div key={level} className="mb-8">
            <h2 className="mb-4 text-lg font-semibold capitalize">{level}</h2>
            <div className="space-y-2">
              {lessons.map((lesson) => (
                <LessonListItem
                  key={lesson.slug}
                  trackId={track.id}
                  slug={lesson.slug}
                  title={lesson.title}
                  level={lesson.level}
                  minutes={lesson.estimatedMinutes}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
