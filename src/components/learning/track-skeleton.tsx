import { Skeleton } from "@/components/ui/skeleton";

export function TrackSkeleton() {
  return (
    <div className="animate-in fade-in px-6 py-8 duration-300">
      <Skeleton className="mb-4 h-6 w-24 rounded-full" />
      <Skeleton className="h-9 w-48" />
      <Skeleton className="mt-2 h-4 w-full max-w-2xl" />
      <Skeleton className="mt-2 h-4 w-48" />

      {[1, 2, 3].map((section) => (
        <div key={section} className="mt-8">
          <Skeleton className="mb-4 h-5 w-28" />
          <div className="space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-16 w-full rounded-lg" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
