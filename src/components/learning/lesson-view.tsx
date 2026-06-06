"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  BookOpen,
  FlaskConical,
  HelpCircle,
  Star,
  StickyNote,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MarkdownContent } from "./markdown-content";
import { QuizCard } from "./quiz-card";
import { LessonNotes } from "./lesson-notes";
import { LessonSection, ObjectivesList, StepsList } from "./lesson-section";
import type { Lesson } from "@/lib/types";
import { getNextIncompleteLesson } from "@/content/track-utils";
import {
  getLessonId,
  getLessonNote,
  markLessonComplete,
  setLastVisited,
  getProgress,
  isBookmarked,
  toggleBookmark,
  notifyProgressUpdate,
} from "@/lib/progress";

interface AdjacentLesson {
  track: string;
  lesson: Lesson;
}

export function LessonView({
  lesson,
  trackTitle,
  prev,
  next,
}: {
  lesson: Lesson;
  trackTitle: string;
  prev: AdjacentLesson | null;
  next: AdjacentLesson | null;
}) {
  const lessonId = getLessonId(lesson.track, lesson.slug);
  const [isComplete, setIsComplete] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [suggestedNext, setSuggestedNext] = useState<ReturnType<typeof getNextIncompleteLesson>>(null);
  const [hasSavedNotes, setHasSavedNotes] = useState(false);

  function refreshLessonState() {
    const progress = getProgress();
    setIsComplete(progress.completedLessons.includes(lessonId));
    setBookmarked(isBookmarked(lessonId));
    setQuizScore(progress.quizScores[lessonId] ?? null);
    setSuggestedNext(getNextIncompleteLesson(progress.completedLessons));
    setHasSavedNotes(getLessonNote(lessonId).trim().length > 0);
  }

  useEffect(() => {
    setLastVisited(lessonId);
    refreshLessonState();

    const onProgressUpdate = () => refreshLessonState();
    window.addEventListener("progress-update", onProgressUpdate);
    return () => window.removeEventListener("progress-update", onProgressUpdate);
  }, [lessonId]);

  function handleMarkComplete() {
    markLessonComplete(lessonId);
    setIsComplete(true);
    setSuggestedNext(getNextIncompleteLesson(getProgress().completedLessons));
    notifyProgressUpdate();
  }

  function handleBookmark() {
    setBookmarked(toggleBookmark(lessonId));
    notifyProgressUpdate();
  }

  function handleQuizComplete(score: number) {
    setQuizScore(score);
    if (score === 100 && !isComplete) {
      markLessonComplete(lessonId);
      setIsComplete(true);
      setSuggestedNext(getNextIncompleteLesson(getProgress().completedLessons));
    }
    notifyProgressUpdate();
  }

  return (
    <div className="flex-1">
      <div className="sticky top-0 z-30 border-b border-border bg-background/95 px-6 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mb-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link href="/learn" className="hover:underline">Learn</Link>
          <span>/</span>
          <Link href={`/learn/${lesson.track}`} className="hover:underline">{trackTitle}</Link>
          <span>/</span>
          <span>{lesson.title}</span>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{lesson.title}</h1>
            <p className="mt-1 max-w-2xl text-muted-foreground">{lesson.summary}</p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="capitalize">{lesson.level}</Badge>
              <span className="text-sm text-muted-foreground">{lesson.estimatedMinutes} min</span>
              {quizScore !== null && (
                <Badge variant="outline">Quiz: {quizScore}%</Badge>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              onClick={handleBookmark}
              aria-pressed={bookmarked}
              aria-label={bookmarked ? "Remove bookmark" : "Bookmark lesson"}
            >
              <Star className={`mr-2 h-4 w-4 ${bookmarked ? "fill-yellow-400 text-yellow-400" : ""}`} />
              {bookmarked ? "Bookmarked" : "Bookmark"}
            </Button>
            <Button variant="outline" onClick={handleMarkComplete} disabled={isComplete}>
              <CheckCircle className="mr-2 h-4 w-4" />
              {isComplete ? "Completed" : "Mark Complete"}
            </Button>
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        <Card className="mb-6 border-primary/25 bg-primary/5 dark:border-primary/30 dark:bg-primary/10">
          <CardContent className="flex gap-3 py-4 text-sm">
            <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-medium">How to study this lesson</p>
              <p className="mt-1 text-muted-foreground">
                1) Read the <strong>Tutorial</strong> tab fully → 2) Review <strong>Examples</strong> →
                3) Complete the <strong>Practice</strong> task → 4) Pass the <strong>Quiz</strong>.
              </p>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="tutorial">
          <TabsList className="flex h-auto flex-wrap gap-1">
            <TabsTrigger value="tutorial" className="gap-1.5">
              <BookOpen className="h-4 w-4" /> Tutorial
            </TabsTrigger>
            <TabsTrigger value="demo" className="gap-1.5">
              <FlaskConical className="h-4 w-4" /> Examples
            </TabsTrigger>
            <TabsTrigger value="practice" className="gap-1.5">
              <CheckCircle className="h-4 w-4" /> Practice
            </TabsTrigger>
            <TabsTrigger value="quiz" className="gap-1.5">
              <HelpCircle className="h-4 w-4" /> Quiz
            </TabsTrigger>
            <TabsTrigger value="notes" className="gap-1.5">
              <StickyNote className="h-4 w-4" /> Notes
              {hasSavedNotes && (
                <span className="ml-0.5 h-2 w-2 rounded-full bg-primary" aria-label="Has saved notes" />
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tutorial" className="mt-6 max-w-4xl">
            <Card className="mb-6 border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-transparent">
              <CardContent className="py-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Start here</p>
                <p className="mt-2 text-[15px] leading-relaxed text-foreground/90">{lesson.summary}</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Read every section below in order. Do not skip to the quiz — each block builds on the last.
                  Plan about <strong>{lesson.estimatedMinutes} minutes</strong> of focused reading plus practice.
                </p>
              </CardContent>
            </Card>

            <LessonSection type="objectives">
              <ObjectivesList items={lesson.objectives} />
            </LessonSection>

            <LessonSection type="whatIs">
              <MarkdownContent content={lesson.whatIs} />
            </LessonSection>

            <LessonSection type="whyUse">
              <MarkdownContent content={lesson.whyUse} />
            </LessonSection>

            <LessonSection type="whenToUse">
              <MarkdownContent content={lesson.whenToUse} />
            </LessonSection>

            <LessonSection type="steps">
              <StepsList steps={lesson.steps} />
            </LessonSection>

            <LessonSection type="example">
              <MarkdownContent content={lesson.example} />
            </LessonSection>

            <LessonSection type="realWorld">
              <MarkdownContent content={lesson.realWorld} />
            </LessonSection>

            <LessonSection type="mistakes">
              <MarkdownContent content={lesson.commonMistakes} />
            </LessonSection>

            <Card className="mt-8 border-emerald-500/25 bg-emerald-500/[0.07] dark:border-emerald-400/30 dark:bg-emerald-500/10">
              <CardContent className="py-5">
                <p className="font-semibold text-foreground">Ready to move on?</p>
                <p className="mt-2 text-sm text-muted-foreground">You understand this lesson when you can do all of the following without looking back:</p>
                <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                  {lesson.objectives.map((obj, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-emerald-600 dark:text-emerald-400">✓</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  Then complete <strong>Practice</strong> and score 100% on the <strong>Quiz</strong> to auto-complete, or mark complete manually.
                </p>
              </CardContent>
            </Card>

          </TabsContent>

          <TabsContent value="notes" className="mt-6 max-w-2xl">
            <p className="mb-4 text-sm text-muted-foreground">
              Notes you save here stay on <strong>this lesson page</strong>. Open the Notes tab anytime to read or edit them.
            </p>
            <LessonNotes lessonId={lessonId} />
          </TabsContent>

          <TabsContent value="demo" className="mt-6 max-w-3xl">
            <p className="mb-4 text-muted-foreground">
              Worked examples and scenarios for this lesson. Use them as templates for your own campaigns and portfolio work.
            </p>
            <MarkdownContent content={lesson.example} />
          </TabsContent>

          <TabsContent value="practice" className="mt-6 max-w-3xl">
            <Card className="mb-6 border-amber-500/30 bg-amber-500/5">
              <CardContent className="py-4 text-sm">
                <p className="font-medium">Hands-on practice</p>
                <p className="mt-1 text-muted-foreground">
                  Complete the task below with a real brand, spreadsheet, or document. Do not skip to the quiz until you have written output you could show a client.
                </p>
              </CardContent>
            </Card>
            <LessonSection type="steps">
              <MarkdownContent content={lesson.tryIt} />
            </LessonSection>
          </TabsContent>

          <TabsContent value="quiz" className="mt-6 max-w-2xl">
            <QuizCard
              questions={lesson.quiz}
              lessonId={lessonId}
              onComplete={handleQuizComplete}
            />
          </TabsContent>
        </Tabs>
      </div>

      <div className="border-t px-6 py-4">
        {isComplete && suggestedNext && (
          <p className="mb-3 text-sm text-muted-foreground">
            Next recommended:{" "}
            <Link
              href={`/learn/${suggestedNext.trackId}/${suggestedNext.slug}`}
              className="font-medium text-primary hover:underline"
            >
              {suggestedNext.title}
            </Link>
            {" "}in {suggestedNext.trackTitle}
          </p>
        )}
        <div className="flex items-center justify-between">
          {prev ? (
            <Link href={`/learn/${prev.track}/${prev.lesson.slug}`}>
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {prev.lesson.title}
              </Button>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link href={`/learn/${next.track}/${next.lesson.slug}`}>
              <Button>
                {next.lesson.title}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
