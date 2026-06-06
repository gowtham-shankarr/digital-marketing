import { Skeleton } from "@/components/ui/skeleton";

export function LessonSkeleton() {
  return (
    <div className="flex-1 animate-in fade-in duration-300">
      <div className="border-b border-border px-6 py-4">
        <div className="mb-2 flex gap-2">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-4" />
          <Skeleton className="h-4 w-32" />
        </div>
        <Skeleton className="h-8 w-2/3 max-w-lg" />
        <Skeleton className="mt-2 h-4 w-full max-w-xl" />
        <div className="mt-3 flex gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-4 w-20" />
        </div>
      </div>

      <div className="px-6 py-6">
        <Skeleton className="mb-6 h-20 w-full rounded-xl" />

        <div className="mb-6 flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-10 w-24 rounded-md" />
          ))}
        </div>

        <div className="max-w-3xl space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl border border-border p-5">
              <div className="mb-3 flex items-center gap-2">
                <Skeleton className="h-5 w-5 rounded" />
                <Skeleton className="h-5 w-40" />
              </div>
              <Skeleton className="mb-2 h-4 w-full" />
              <Skeleton className="mb-2 h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
