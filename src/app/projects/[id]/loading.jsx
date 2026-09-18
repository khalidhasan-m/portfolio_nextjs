export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="space-y-12">
        <div className="space-y-6">
          <div className="h-10 w-3/4 rounded-lg bg-black/10 dark:bg-white/10" />
          <div className="h-6 w-1/3 rounded bg-black/5 dark:bg-white/5" />
        </div>
        <div className="h-6 w-44 rounded bg-black/10 dark:bg-white/10" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-9 rounded-lg bg-black/10 dark:bg-white/10" />
          ))}
        </div>
        <div className="space-y-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-4 rounded bg-black/5 dark:bg-white/5" />
          ))}
        </div>
      </div>
      <span className="sr-only">Loading project</span>
    </div>
  );
}