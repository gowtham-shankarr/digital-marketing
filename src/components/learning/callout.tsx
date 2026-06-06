import { AlertCircle, Info, Lightbulb, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutType = "tip" | "note" | "warning" | "important";

const config: Record<CalloutType, { icon: React.ElementType; className: string; label: string }> = {
  tip: { icon: Lightbulb, className: "border-emerald-500/50 bg-emerald-500/10", label: "Tip" },
  note: { icon: Info, className: "border-blue-500/50 bg-blue-500/10", label: "Note" },
  warning: { icon: AlertTriangle, className: "border-amber-500/50 bg-amber-500/10", label: "Warning" },
  important: { icon: AlertCircle, className: "border-red-500/50 bg-red-500/10", label: "Important" },
};

export function Callout({
  type = "note",
  children,
}: {
  type?: CalloutType;
  children: React.ReactNode;
}) {
  const { icon: Icon, className, label } = config[type];
  return (
    <div className={cn("my-4 flex gap-3 rounded-lg border p-4", className)}>
      <Icon className="mt-0.5 h-5 w-5 shrink-0" />
      <div>
        <p className="mb-1 text-sm font-semibold">{label}</p>
        <div className="text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}
