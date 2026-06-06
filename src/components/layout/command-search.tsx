"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Star } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/command-dialog";
import { getAllLessons } from "@/content/tracks";
import { getLessonId, getProgress } from "@/lib/progress";

export function CommandSearch({ variant = "default" }: { variant?: "default" | "header" }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const router = useRouter();
  const lessons = getAllLessons();

  useEffect(() => {
    function refresh() {
      setBookmarks(getProgress().bookmarkedLessons);
    }
    refresh();
    window.addEventListener("progress-update", refresh);
    return () => window.removeEventListener("progress-update", refresh);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const filtered = lessons.filter(
    (l) =>
      l.title.toLowerCase().includes(query.toLowerCase()) ||
      l.track.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={
          variant === "header"
            ? "flex h-9 w-full max-w-md items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 text-sm text-header-foreground/70 transition-colors hover:border-white/25 hover:bg-white/15"
            : "flex h-9 w-full max-w-md items-center gap-2 rounded-lg border border-input bg-muted/50 px-3 text-sm text-muted-foreground transition-colors hover:border-border hover:bg-accent"
        }
      >
        <Search className="h-4 w-4" />
        <span className="flex-1 text-left">Search lessons...</span>
        <kbd
          className={
            variant === "header"
              ? "hidden rounded border border-white/20 bg-white/10 px-1.5 text-xs text-header-foreground/80 sm:inline"
              : "hidden rounded border bg-muted px-1.5 text-xs text-muted-foreground sm:inline"
          }
        >
          ⌘K
        </kbd>
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden border-border bg-popover p-0 shadow-xl">
          <DialogTitle className="sr-only">Search lessons</DialogTitle>
          <div className="flex items-center border-b border-border px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              className="flex h-11 w-full bg-transparent py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground"
              placeholder="Search lessons..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="max-h-80 overflow-y-auto p-2">
            {filtered.length === 0 ? (
              <p className="py-6 text-center text-sm text-muted-foreground">No lessons found.</p>
            ) : (
              filtered.slice(0, 20).map((l) => {
                const id = getLessonId(l.track, l.slug);
                const isBookmarked = bookmarks.includes(id);
                return (
                  <button
                    key={id}
                    className="flex w-full items-start justify-between gap-2 rounded-md px-3 py-2 text-left text-sm hover:bg-accent"
                    onClick={() => {
                      router.push(`/learn/${l.track}/${l.slug}`);
                      setOpen(false);
                      setQuery("");
                    }}
                  >
                    <span>
                      <span className="font-medium">{l.title}</span>
                      <span className="block text-xs text-muted-foreground capitalize">
                        {l.trackTitle} · {l.level}
                      </span>
                    </span>
                    {isBookmarked && (
                      <Star className="mt-0.5 h-4 w-4 shrink-0 fill-yellow-400 text-yellow-400" />
                    )}
                  </button>
                );
              })
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
