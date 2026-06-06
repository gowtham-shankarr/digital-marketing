import { Skeleton } from "@/components/ui/skeleton";

export function DashboardSkeleton() {
  return (
    <div className="animate-in fade-in px-6 py-8 duration-300">
      <Skeleton className="h-9 w-64" />
      <Skeleton className="mt-2 h-4 w-96 max-w-full" />

      <div className="mt-8 rounded-xl border border-border p-6">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="mt-3 h-4 w-full max-w-2xl" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-24 rounded-lg" />
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          <Skeleton className="h-10 w-36" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>

      <Skeleton className="mb-4 mt-10 h-6 w-32" />
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="rounded-xl border border-border p-6">
            <div className="flex justify-between">
              <Skeleton className="h-10 w-10 rounded-lg" />
              <Skeleton className="h-5 w-20 rounded-full" />
            </div>
            <Skeleton className="mt-4 h-6 w-32" />
            <Skeleton className="mt-2 h-4 w-full" />
            <Skeleton className="mt-4 h-2 w-full rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
