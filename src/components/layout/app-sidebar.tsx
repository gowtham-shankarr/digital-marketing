"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { tracks } from "@/content/tracks";
import { cn } from "@/lib/utils";
import { getProgress, getLessonId } from "@/lib/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AppSidebar() {
  const pathname = usePathname();
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    setCompleted(getProgress().completedLessons);
    const handler = () => setCompleted(getProgress().completedLessons);
    window.addEventListener("storage", handler);
    window.addEventListener("progress-update", handler);
    return () => {
      window.removeEventListener("storage", handler);
      window.removeEventListener("progress-update", handler);
    };
  }, [pathname]);

  const activeTrack = pathname.split("/")[2];

  return (
    <aside className="fixed bottom-0 left-0 top-14 z-40 hidden w-72 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground lg:flex">
      <div className="shrink-0 border-b border-sidebar-border px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Curriculum
        </p>
        <p className="mt-0.5 text-sm text-sidebar-foreground">
          {tracks.reduce((n, t) => n + t.lessons.length, 0)} lessons · {tracks.length} tracks
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto overscroll-contain px-2 py-3">
        <Accordion
          type="multiple"
          defaultValue={activeTrack ? [activeTrack] : ["getting-started"]}
          className="space-y-1"
        >
          {tracks.map((track) => (
            <AccordionItem
              key={track.id}
              value={track.id}
              className="overflow-hidden rounded-lg border border-transparent data-[state=open]:border-sidebar-border data-[state=open]:bg-muted/50 dark:data-[state=open]:bg-muted/30"
            >
              <AccordionTrigger className="rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground hover:bg-accent hover:text-accent-foreground hover:no-underline [&[data-state=open]]:bg-accent/60 [&[data-state=open]]:text-accent-foreground">
                <div className="flex flex-1 items-center gap-2.5">
                  <span className={cn("h-2.5 w-2.5 shrink-0 rounded-full", track.color)} />
                  <span className="truncate">{track.title}</span>
                  <span className="ml-auto shrink-0 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                    {track.lessons.length}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-0.5 px-2 pb-2">
                {track.lessons.map((lesson) => {
                  const href = `/learn/${track.id}/${lesson.slug}`;
                  const isActive = pathname === href;
                  const isComplete = completed.includes(getLessonId(track.id, lesson.slug));
                  return (
                    <Link
                      key={lesson.slug}
                      href={href}
                      className={cn(
                        "sidebar-lesson-link flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
                        isActive
                          ? "bg-sidebar-active font-medium text-sidebar-active-foreground"
                          : "text-muted-foreground hover:bg-muted/70 hover:text-sidebar-foreground",
                        isComplete && !isActive && "pl-2"
                      )}
                    >
                      {isComplete && (
                        <Check className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                      )}
                      <span className="truncate leading-snug">{lesson.title}</span>
                    </Link>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </nav>
    </aside>
  );
}
