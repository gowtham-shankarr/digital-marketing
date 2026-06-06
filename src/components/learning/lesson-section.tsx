import { Lightbulb, MapPin, AlertTriangle, Target, ListOrdered, Globe, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { MarkdownContent } from "./markdown-content";

const sectionStyles = {
  objectives: {
    icon: Target,
    color:
      "border-violet-500/25 bg-violet-500/[0.07] dark:border-violet-400/30 dark:bg-violet-500/10",
    iconColor: "text-violet-600 dark:text-violet-400",
    label: "What You'll Learn",
  },
  whatIs: {
    icon: Lightbulb,
    color: "border-blue-500/25 bg-blue-500/[0.07] dark:border-blue-400/30 dark:bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    label: "What Is It?",
  },
  whyUse: {
    icon: Lightbulb,
    color:
      "border-emerald-500/25 bg-emerald-500/[0.07] dark:border-emerald-400/30 dark:bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    label: "Why Use It?",
  },
  whenToUse: {
    icon: MapPin,
    color: "border-amber-500/25 bg-amber-500/[0.07] dark:border-amber-400/30 dark:bg-amber-500/10",
    iconColor: "text-amber-600 dark:text-amber-400",
    label: "When & Where to Use",
  },
  steps: {
    icon: ListOrdered,
    color: "border-cyan-500/25 bg-cyan-500/[0.07] dark:border-cyan-400/30 dark:bg-cyan-500/10",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    label: "Step-by-Step Tutorial",
  },
  example: {
    icon: Code2,
    color:
      "border-orange-500/25 bg-orange-500/[0.07] dark:border-orange-400/30 dark:bg-orange-500/10",
    iconColor: "text-orange-600 dark:text-orange-400",
    label: "Code Example Explained",
  },
  realWorld: {
    icon: Globe,
    color:
      "border-indigo-500/25 bg-indigo-500/[0.07] dark:border-indigo-400/30 dark:bg-indigo-500/10",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    label: "Real-World Usage",
  },
  mistakes: {
    icon: AlertTriangle,
    color: "border-red-500/25 bg-red-500/[0.07] dark:border-red-400/30 dark:bg-red-500/10",
    iconColor: "text-red-600 dark:text-red-400",
    label: "Common Mistakes",
  },
} as const;

export function LessonSection({
  type,
  children,
}: {
  type: keyof typeof sectionStyles;
  children: React.ReactNode;
}) {
  const { icon: Icon, color, iconColor, label } = sectionStyles[type];
  return (
    <section className={cn("my-6 rounded-xl border p-5", color)}>
      <div className="mb-3 flex items-center gap-2">
        <Icon className={cn("h-5 w-5 shrink-0", iconColor)} />
        <h2 className="text-lg font-semibold text-foreground">{label}</h2>
      </div>
      <div className="text-[15px] leading-relaxed text-foreground/90">{children}</div>
    </section>
  );
}

export function ObjectivesList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            {i + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function StepsList({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="space-y-4">
      {steps.map((step, i) => (
        <li key={i} className="flex gap-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            {i + 1}
          </span>
          <div>
            <p className="font-semibold text-foreground">{step.title}</p>
            <div className="mt-1 text-muted-foreground">
              <MarkdownContent content={step.body} />
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
