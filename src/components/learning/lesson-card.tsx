"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { getTrackProgress, getLessonId, getProgress } from "@/lib/progress";
import type { Track } from "@/lib/types";
import { cn } from "@/lib/utils";

const iconMap: Record<string, string> = {
  Rocket: "🚀",
  Filter: "🔽",
  Layout: "🖥️",
  Search: "🔍",
  DollarSign: "💰",
  FileText: "📝",
  Share2: "📱",
  Mail: "✉️",
  Workflow: "⚙️",
  BarChart3: "📊",
  Radio: "📻",
  Compass: "🧭",
  Sparkles: "✨",
  GraduationCap: "🎓",
  TrendingUp: "📈",
  Users: "👥",
  Bot: "🤖",
  Linkedin: "💼",
  Send: "📨",
  Newspaper: "📰",
  UsersRound: "🏘️",
  ShoppingCart: "🛒",
  Wrench: "🔧",
  Mic: "🎙️",
  Pin: "📌",
  Brain: "🧠",
  MessageSquare: "💬",
  Tag: "🏷️",
  Heart: "❤️",
  Palette: "🎨",
  Youtube: "▶️",
};

export function TrackCard({ track }: { track: Track }) {
  const [progress, setProgress] = useState({ completed: 0, total: 0, percent: 0 });

  useEffect(() => {
    const slugs = track.lessons.map((l) => l.slug);
    setProgress(getTrackProgress(track.id, slugs));
    const handler = () => setProgress(getTrackProgress(track.id, slugs));
    window.addEventListener("progress-update", handler);
    return () => window.removeEventListener("progress-update", handler);
  }, [track]);

  const firstLesson = track.lessons[0];

  return (
    <Card className="group transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg text-white", track.color)}>
            <span className="text-lg">{iconMap[track.icon] || "📖"}</span>
          </div>
          <Badge variant="secondary">{track.lessons.length} lessons</Badge>
        </div>
        <CardTitle className="mt-4">{track.title}</CardTitle>
        <CardDescription>{track.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span>{progress.percent}%</span>
          </div>
          <Progress value={progress.percent} />
        </div>
        <Link
          href={`/learn/${track.id}/${firstLesson.slug}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          Start track <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}

export function LessonListItem({
  trackId,
  slug,
  title,
  level,
  minutes,
}: {
  trackId: string;
  slug: string;
  title: string;
  level: string;
  minutes: number;
}) {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setComplete(getProgress().completedLessons.includes(getLessonId(trackId, slug)));
    const handler = () =>
      setComplete(getProgress().completedLessons.includes(getLessonId(trackId, slug)));
    window.addEventListener("progress-update", handler);
    return () => window.removeEventListener("progress-update", handler);
  }, [trackId, slug]);

  return (
    <Link
      href={`/learn/${trackId}/${slug}`}
      className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-accent"
    >
      <div className="flex items-center gap-3">
        {complete && <CheckCircle2 className="h-5 w-5 text-emerald-500" />}
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-muted-foreground capitalize">{level} · {minutes} min</p>
        </div>
      </div>
      <ArrowRight className="h-4 w-4 text-muted-foreground" />
    </Link>
  );
}
