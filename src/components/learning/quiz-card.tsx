"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { QuizQuestion } from "@/lib/types";
import { setQuizScore } from "@/lib/progress";

export function QuizCard({
  questions,
  lessonId,
  onComplete,
}: {
  questions: QuizQuestion[];
  lessonId: string;
  onComplete?: (score: number) => void;
}) {
  const [answers, setAnswers] = useState<Record<number, number | null>>({});
  const [submitted, setSubmitted] = useState(false);

  const correct = questions.filter((q, i) => answers[i] === q.answer).length;
  const allAnswered = questions.every((_, i) => answers[i] !== undefined && answers[i] !== null);

  function handleSubmit() {
    setSubmitted(true);
    const score = Math.round((correct / questions.length) * 100);
    setQuizScore(lessonId, score);
    onComplete?.(score);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Quick Check</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {questions.map((q, qi) => (
          <div key={qi} className="space-y-3">
            <p className="font-medium">
              {qi + 1}. {q.question}
            </p>
            <div className="space-y-2">
              {q.options.map((opt, oi) => {
                const selected = answers[qi] === oi;
                const isCorrect = q.answer === oi;
                const showResult = submitted;

                return (
                  <button
                    key={oi}
                    type="button"
                    disabled={submitted}
                    onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-lg border p-3 text-left text-sm transition-colors",
                      selected && !submitted && "border-primary bg-primary/5",
                      showResult && isCorrect && "border-emerald-500 bg-emerald-500/10",
                      showResult && selected && !isCorrect && "border-red-500 bg-red-500/10"
                    )}
                  >
                    {showResult && isCorrect && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                    {showResult && selected && !isCorrect && <XCircle className="h-4 w-4 text-red-500" />}
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
        {!submitted ? (
          <Button onClick={handleSubmit} disabled={!allAnswered}>
            Check Answers
          </Button>
        ) : (
          <div className="space-y-2">
            <p className="text-sm font-medium">
              Score: {correct}/{questions.length} ({Math.round((correct / questions.length) * 100)}%)
            </p>
            {correct === questions.length && (
              <p className="text-sm text-emerald-600 dark:text-emerald-400">
                Perfect score — lesson marked complete automatically.
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
