"use client";

import { useMemo, useState } from "react";
import { BookMarked, Search } from "lucide-react";
import { playbookItems } from "@/content/playbook";
import {
  PLAYBOOK_CATEGORIES,
  type PlaybookCategory,
} from "@/lib/playbook-types";
import { PlaybookCard } from "@/components/playbook/playbook-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const ALL = "all" as const;
type Filter = typeof ALL | PlaybookCategory;

export function PlaybookBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Filter>(ALL);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return playbookItems.filter((item) => {
      const matchesCategory = category === ALL || item.category === category;
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        PLAYBOOK_CATEGORIES[item.category].toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const categories = Object.entries(PLAYBOOK_CATEGORIES) as [
    PlaybookCategory,
    string,
  ][];

  return (
    <div className="space-y-8">
      <section className="rounded-xl border bg-gradient-to-b from-muted/40 to-background px-6 py-10 md:px-10">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <BookMarked className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Marketing Playbook</h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Templates, checklists, and frameworks from MMS and MarketLearn —
              ready to copy into Notion, Sheets, or your next campaign.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              {playbookItems.length} items · separate from the lesson curriculum
            </p>
          </div>
        </div>
      </section>

      <div className="space-y-4">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search templates and frameworks…"
            className="pl-9"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <FilterPill
            active={category === ALL}
            onClick={() => setCategory(ALL)}
            label="All"
          />
          {categories.map(([id, label]) => (
            <FilterPill
              key={id}
              active={category === id}
              onClick={() => setCategory(id)}
              label={label}
            />
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-lg border border-dashed px-6 py-12 text-center text-muted-foreground">
          No playbook items match your search. Try another category or clear the
          filter.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <PlaybookCard key={item.slug} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1 text-sm transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-muted-foreground hover:bg-muted"
      )}
    >
      {label}
    </button>
  );
}
