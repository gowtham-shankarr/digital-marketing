"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Bookmark,
  CheckCircle,
  Flame,
  HelpCircle,
  Play,
  Star,
  StickyNote,
  Target,
} from "lucide-react";
import { TrackCard } from "@/components/learning/lesson-card";
import { ProgressManager } from "@/components/learning/progress-manager";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { tracks, trackMeta } from "@/content/tracks";
import {
  getGlobalProgress,
  getLessonsWithNotes,
  getProgress,
  getQuizSummary,
  getStudyStreak,
} from "@/lib/progress";
import { getNextIncompleteLesson, resolveLessonRef } from "@/content/track-utils";

const studySteps = [
  { icon: BookOpen, title: "1. Read the Tutorial", desc: "Read all sections in order." },
  { icon: Play, title: "2. Review Examples", desc: "Study scenarios and templates." },
  { icon: CheckCircle, title: "3. Do the Practice", desc: "Complete the real-world task." },
  { icon: HelpCircle, title: "4. Pass the Quiz", desc: "Score 100% to auto-complete." },
];

function useDashboardStats(totalLessons: number) {
  const [stats, setStats] = useState({
    global: { completed: 0, total: totalLessons, percent: 0 },
    streak: 0,
    quiz: {
      average: null as number | null,
      attempted: 0,
      weakLessons: [] as { id: string; score: number }[],
    },
    resume: null as ReturnType<typeof resolveLessonRef>,
    next: null as ReturnType<typeof getNextIncompleteLesson>,
    bookmarks: [] as string[],
    notes: [] as { lessonId: string; note: string }[],
    hasActivity: false,
    minutesRemaining: 0,
    trackProgress: [] as { id: string; title: string; completed: number; total: number; percent: number }[],
  });

  function refresh() {
    const progress = getProgress();
    const global = getGlobalProgress(totalLessons);
    const quizSummary = getQuizSummary();
    const quiz = {
      ...quizSummary,
      weakLessons: quizSummary.weakLessons.map((id) => ({
        id,
        score: progress.quizScores[id],
      })),
    };
    const resume = progress.lastVisited ? resolveLessonRef(progress.lastVisited) : null;
    const next = getNextIncompleteLesson(progress.completedLessons);

    const completedMinutes = progress.completedLessons.reduce((sum, id) => {
      const ref = resolveLessonRef(id);
      return sum + (ref?.lesson.estimatedMinutes ?? 0);
    }, 0);
    const totalMinutes = trackMeta.reduce((s, t) => s + t.estimatedMinutes, 0);

    const trackProgress = tracks.map((track) => {
      const slugs = track.lessons.map((l) => l.slug);
      const completed = slugs.filter((slug) =>
        progress.completedLessons.includes(`${track.id}/${slug}`)
      ).length;
      const total = slugs.length;
      return {
        id: track.id,
        title: track.title,
        completed,
        total,
        percent: total > 0 ? Math.round((completed / total) * 100) : 0,
      };
    });

    setStats({
      global,
      streak: getStudyStreak(),
      quiz,
      resume,
      next,
      bookmarks: progress.bookmarkedLessons,
      notes: getLessonsWithNotes(),
      hasActivity: progress.completedLessons.length > 0 || !!progress.lastVisited,
      minutesRemaining: Math.max(0, totalMinutes - completedMinutes),
      trackProgress,
    });
  }

  useEffect(() => {
    refresh();
    const handler = () => refresh();
    window.addEventListener("progress-update", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("progress-update", handler);
      window.removeEventListener("storage", handler);
    };
  }, [totalLessons]);

  return stats;
}

export function StudyDashboard() {
  const totalLessons = trackMeta.reduce((s, t) => s + t.lessonCount, 0);
  const firstLesson = tracks[0].lessons[0];
  const stats = useDashboardStats(totalLessons);

  return (
    <div className="px-6 py-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Study Dashboard</h1>
          <p className="mt-2 text-muted-foreground">
            MarketLearn — {tracks.length} tracks · {totalLessons} lessons · Saved in your browser
          </p>
        </div>
        <ProgressManager />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Completed</p>
            <p className="mt-1 text-2xl font-bold">
              {stats.global.completed}
              <span className="text-base font-normal text-muted-foreground"> / {stats.global.total}</span>
            </p>
            <Progress value={stats.global.percent} className="mt-3" />
            <p className="mt-2 text-xs text-muted-foreground">{stats.global.percent}% overall</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Flame className="h-4 w-4 text-orange-500" /> Study streak
            </p>
            <p className="mt-1 text-2xl font-bold">{stats.streak} day{stats.streak === 1 ? "" : "s"}</p>
            <p className="mt-2 text-xs text-muted-foreground">Consecutive days with activity</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Quiz average</p>
            <p className="mt-1 text-2xl font-bold">
              {stats.quiz.average !== null ? `${stats.quiz.average}%` : "—"}
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              {stats.quiz.attempted} quiz{stats.quiz.attempted === 1 ? "" : "zes"} taken
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Target className="h-4 w-4" /> Est. remaining
            </p>
            <p className="mt-1 text-2xl font-bold">~{Math.round(stats.minutesRemaining / 60)}h</p>
            <p className="mt-2 text-xs text-muted-foreground">Based on incomplete lessons</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {stats.resume && (
          <Card className="border-primary/30 bg-primary/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Continue learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {stats.resume.trackTitle} → <strong>{stats.resume.lessonTitle}</strong>
              </p>
              <Link href={`/learn/${stats.resume.trackId}/${stats.resume.slug}`} className="mt-4 inline-block">
                <Button>
                  Resume <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {stats.next && (
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Next up</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {stats.next.trackTitle} → <strong>{stats.next.title}</strong>
              </p>
              <Link href={`/learn/${stats.next.trackId}/${stats.next.slug}`} className="mt-4 inline-block">
                <Button variant="outline">
                  Go to lesson <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="text-lg">Track progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {stats.trackProgress.map((track) => (
            <div key={track.id}>
              <div className="mb-1 flex justify-between text-sm">
                <Link href={`/learn/${track.id}`} className="font-medium hover:underline">
                  {track.title}
                </Link>
                <span className="text-muted-foreground">
                  {track.completed}/{track.total} · {track.percent}%
                </span>
              </div>
              <Progress value={track.percent} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {stats.notes.length > 0 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <StickyNote className="h-5 w-5" /> Your notes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {stats.notes.map(({ lessonId, note }) => {
              const ref = resolveLessonRef(lessonId);
              if (!ref) return null;
              const preview = note.trim().split("\n")[0];
              return (
                <Link
                  key={lessonId}
                  href={`/learn/${ref.trackId}/${ref.slug}`}
                  className="block rounded-lg border p-3 transition-colors hover:bg-accent"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-medium">{ref.lessonTitle}</p>
                      <p className="text-sm text-muted-foreground">{ref.trackTitle}</p>
                      <p className="mt-2 line-clamp-2 text-sm text-foreground/80">{preview}</p>
                    </div>
                    <StickyNote className="h-4 w-4 shrink-0 text-muted-foreground" />
                  </div>
                </Link>
              );
            })}
          </CardContent>
        </Card>
      )}

      {stats.bookmarks.length > 0 && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bookmark className="h-5 w-5" /> Bookmarked lessons
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {stats.bookmarks.map((id) => {
              const ref = resolveLessonRef(id);
              if (!ref) return null;
              return (
                <Link
                  key={id}
                  href={`/learn/${ref.trackId}/${ref.slug}`}
                  className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-accent"
                >
                  <div>
                    <p className="font-medium">{ref.lessonTitle}</p>
                    <p className="text-sm text-muted-foreground">{ref.trackTitle}</p>
                  </div>
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                </Link>
              );
            })}
          </CardContent>
        </Card>
      )}

      {stats.quiz.weakLessons.length > 0 && (
        <Card className="mt-6 border-amber-500/30">
          <CardHeader>
            <CardTitle className="text-lg">Review these quizzes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {stats.quiz.weakLessons.slice(0, 8).map(({ id, score }) => {
              const ref = resolveLessonRef(id);
              if (!ref) return null;
              return (
                <Link
                  key={id}
                  href={`/learn/${ref.trackId}/${ref.slug}`}
                  className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:bg-accent"
                >
                  <div>
                    <p className="font-medium">{ref.lessonTitle}</p>
                    <p className="text-sm text-muted-foreground">{ref.trackTitle}</p>
                  </div>
                  <Badge variant="secondary">{score}%</Badge>
                </Link>
              );
            })}
          </CardContent>
        </Card>
      )}

      {!stats.hasActivity && (
        <Card className="mt-8 border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-xl">New here? Read this first</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              DevLearn is an <strong>interactive textbook</strong>. Follow this order for every lesson:
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {studySteps.map((step) => (
                <div key={step.title} className="flex gap-3 rounded-lg border bg-background p-4">
                  <step.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">{step.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href={`/learn/${tracks[0].id}/${firstLesson.slug}`}>
                <Button>
                  Start First Lesson <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/playground">
                <Button variant="outline">Open Playground</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      )}

      <h2 className="mb-4 mt-10 text-xl font-semibold">All Tracks</h2>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {tracks.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
}
