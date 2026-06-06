"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { tracks } from "@/content/tracks";
import { cn } from "@/lib/utils";
import { Megaphone } from "lucide-react";
import { NavLinks } from "./nav-links";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col bg-sidebar">
      <div className="flex h-14 shrink-0 items-center gap-2 border-b border-sidebar-border px-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Megaphone className="h-4 w-4" />
        </div>
        <span className="font-semibold text-sidebar-foreground">MarketLearn</span>
      </div>
      <div className="border-b border-sidebar-border p-3 sm:hidden">
        <NavLinks variant="sidebar" />
      </div>
      <nav className="flex-1 overflow-y-auto overscroll-contain p-3">
        {tracks.map((track) => (
          <div key={track.id} className="mb-5">
            <div className="mb-2 flex items-center gap-2 px-2">
              <span className={cn("h-2 w-2 rounded-full", track.color)} />
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {track.title}
              </p>
            </div>
            {track.lessons.map((lesson) => {
              const href = `/learn/${track.id}/${lesson.slug}`;
              return (
                <Link
                  key={lesson.slug}
                  href={href}
                  className={cn(
                    "block rounded-md px-3 py-2 text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
                    pathname === href
                      ? "bg-sidebar-active font-medium text-sidebar-active-foreground"
                      : "text-muted-foreground hover:bg-muted/70 hover:text-sidebar-foreground"
                  )}
                >
                  {lesson.title}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>
    </div>
  );
}
