"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { getGlobalProgress, getProgress } from "@/lib/progress";
import { resolveLessonRef } from "@/content/track-utils";

export function HomeProgress({ totalLessons }: { totalLessons: number }) {
  const [data, setData] = useState<{
    percent: number;
    completed: number;
    resumeHref: string | null;
    resumeLabel: string | null;
  } | null>(null);

  useEffect(() => {
    function refresh() {
      const progress = getProgress();
      const global = getGlobalProgress(totalLessons);
      const resume = progress.lastVisited ? resolveLessonRef(progress.lastVisited) : null;
      const hasActivity = progress.completedLessons.length > 0 || !!progress.lastVisited;

      if (!hasActivity) {
        setData(null);
        return;
      }

      setData({
        percent: global.percent,
        completed: global.completed,
        resumeHref: resume ? `/learn/${resume.trackId}/${resume.slug}` : "/learn",
        resumeLabel: resume ? `Resume: ${resume.lessonTitle}` : "Open Dashboard",
      });
    }
    refresh();
    window.addEventListener("progress-update", refresh);
    return () => window.removeEventListener("progress-update", refresh);
  }, [totalLessons]);

  if (!data) return null;

  return (
    <div className="mx-auto mt-8 max-w-md rounded-xl border bg-background/80 p-4 text-left backdrop-blur">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Your progress</span>
        <span className="font-medium">{data.completed}/{totalLessons} lessons</span>
      </div>
      <Progress value={data.percent} className="mt-2" />
      <p className="mt-2 text-xs text-muted-foreground">{data.percent}% complete</p>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        {data.resumeHref && (
          <Link href={data.resumeHref}>
            <Button size="lg">
              {data.resumeLabel} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        )}
        <Link href="/learn">
          <Button size="lg" variant="outline">
            Study Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
