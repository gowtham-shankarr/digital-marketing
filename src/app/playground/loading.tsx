import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";

export default function PlaygroundLoading() {
  return (
    <div className="mx-auto w-full max-w-6xl animate-in fade-in px-4 pb-8 pt-[4.5rem] duration-300">
      <div className="flex items-center gap-3">
        <Spinner size="sm" />
        <Skeleton className="h-9 w-64" />
      </div>
      <Skeleton className="mt-2 h-4 w-96 max-w-full" />
      <div className="mt-8 flex gap-2">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-10 w-28 rounded-md" />
        ))}
      </div>
      <Skeleton className="mt-6 h-[420px] w-full rounded-xl" />
    </div>
  );
}
