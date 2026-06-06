"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, StickyNote } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getLessonNote, notifyProgressUpdate, setLessonNote } from "@/lib/progress";

export function LessonNotes({ lessonId }: { lessonId: string }) {
  const [note, setNote] = useState("");
  const [savedNote, setSavedNote] = useState("");
  const [justSaved, setJustSaved] = useState(false);

  useEffect(() => {
    const stored = getLessonNote(lessonId);
    setNote(stored);
    setSavedNote(stored);
    setJustSaved(false);
  }, [lessonId]);

  const isDirty = note !== savedNote;

  function saveNote() {
    setLessonNote(lessonId, note);
    setSavedNote(note);
    notifyProgressUpdate();
    setJustSaved(true);
    window.setTimeout(() => setJustSaved(false), 2000);
  }

  function handleBlur() {
    if (isDirty) saveNote();
  }

  return (
    <Card className="mt-8">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <StickyNote className="h-5 w-5" /> Your notes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <textarea
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
            setJustSaved(false);
          }}
          onBlur={handleBlur}
          placeholder="Jot down key takeaways, questions, or code snippets to revisit..."
          className="min-h-28 w-full resize-y rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        />
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            Saved on this lesson in your browser.{" "}
            <Link href="/learn" className="font-medium text-primary underline-offset-4 hover:underline">
              Dashboard
            </Link>{" "}
            lists notes from every lesson.
          </p>
          <Button type="button" size="sm" onClick={saveNote} disabled={!isDirty && !justSaved}>
            {justSaved ? (
              <>
                <Check className="mr-1.5 h-4 w-4" /> Saved
              </>
            ) : (
              "Save notes"
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
