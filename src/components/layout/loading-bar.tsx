"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function LoadingBar() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setLoading(true);
    setProgress(20);

    const t1 = setTimeout(() => setProgress(60), 100);
    const t2 = setTimeout(() => setProgress(90), 250);
    const t3 = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setLoading(false), 200);
    }, 400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  return (
    <div
      className={cn(
        "pointer-events-none fixed left-0 right-0 top-14 z-[60] h-0.5 overflow-hidden transition-opacity duration-200",
        loading ? "opacity-100" : "opacity-0"
      )}
    >
      <div
        className="h-full bg-foreground transition-all duration-300 ease-out dark:bg-white"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
