export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="space-y-8">
        <div className="h-8 w-44 rounded bg-black/10 dark:bg-white/10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="w-14 h-14 rounded-xl bg-black/10 dark:bg-white/10" />
              <div className="h-6 w-3/4 rounded bg-black/10 dark:bg-white/10" />
              <div className="h-4 w-full rounded bg-black/5 dark:bg-white/5" />
              <div className="h-4 w-2/3 rounded bg-black/5 dark:bg-white/5" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-xl overflow-hidden bg-black/5 dark:bg-white/5">
              <div className="aspect-[16/9] bg-black/10 dark:bg-white/10" />
              <div className="p-4 space-y-3">
                <div className="h-6 w-3/4 rounded bg-black/10 dark:bg-white/10" />
                <div className="h-4 w-full rounded bg-black/5 dark:bg-white/5" />
                <div className="h-4 w-1/2 rounded bg-black/5 dark:bg-white/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <span className="sr-only">Loading projects page</span>
    </div>
  );
}