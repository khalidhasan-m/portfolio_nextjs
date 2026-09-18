export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="space-y-10">
        <div className="h-8 w-44 rounded bg-black/10 dark:bg-white/10" />
        <div className="space-y-6">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="h-6 w-1/3 rounded bg-black/10 dark:bg-white/10" />
              <div className="h-4 w-full rounded bg-black/5 dark:bg-white/5" />
              <div className="h-4 w-5/6 rounded bg-black/5 dark:bg-white/5" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="h-6 w-1/4 rounded bg-black/10 dark:bg-white/10" />
            <div className="h-4 w-full rounded bg-black/5 dark:bg-white/5" />
            <div className="h-4 w-3/4 rounded bg-black/5 dark:bg-white/5" />
          </div>
          <div className="space-y-3">
            <div className="h-6 w-1/4 rounded bg-black/10 dark:bg-white/10" />
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="h-4 w-full rounded bg-black/5 dark:bg-white/5" />
            ))}
          </div>
        </div>
      </div>
      <span className="sr-only">Loading contact page</span>
    </div>
  );
}