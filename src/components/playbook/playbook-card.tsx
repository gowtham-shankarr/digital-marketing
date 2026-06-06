"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Copy } from "lucide-react";
import type { PlaybookItem } from "@/lib/playbook-types";
import { PLAYBOOK_CATEGORIES } from "@/lib/playbook-types";
import { formatPlaybookForCopy } from "@/content/playbook";
import { MarkdownContent } from "@/components/learning/markdown-content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const typeLabels: Record<PlaybookItem["type"], string> = {
  template: "Template",
  checklist: "Checklist",
  framework: "Framework",
};

export function PlaybookCard({ item }: { item: PlaybookItem }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(formatPlaybookForCopy(item));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{PLAYBOOK_CATEGORIES[item.category]}</Badge>
          <Badge variant="outline">{typeLabels[item.type]}</Badge>
          {item.source && (
            <span className="text-xs text-muted-foreground">{item.source}</span>
          )}
        </div>
        <CardTitle className="text-lg leading-snug">{item.title}</CardTitle>
        <CardDescription>{item.summary}</CardDescription>
      </CardHeader>

      <CardContent className="mt-auto space-y-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="content" className="border-none">
            <AccordionTrigger className="rounded-md border px-3 py-2 text-sm hover:no-underline">
              View template & checklist
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              {item.template && (
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Template
                  </p>
                  <MarkdownContent content={item.template} />
                </div>
              )}
              {item.checklist && item.checklist.length > 0 && (
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Checklist
                  </p>
                  <ul className="space-y-2">
                    {item.checklist.map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border">
                          <Check className="h-2.5 w-2.5 opacity-40" />
                        </span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleCopy}>
            {copied ? (
              <>
                <Check className="mr-1.5 h-3.5 w-3.5" />
                Copied
              </>
            ) : (
              <>
                <Copy className="mr-1.5 h-3.5 w-3.5" />
                Copy all
              </>
            )}
          </Button>
          {item.relatedLesson && (
            <Link
              href={`/learn/${item.relatedLesson.track}/${item.relatedLesson.slug}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              Related lesson
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
