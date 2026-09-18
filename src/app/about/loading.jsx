export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <div className="flex-1 space-y-4">
          <div className="h-9 w-40 rounded bg-black/10 dark:bg-white/10" />
          <div className="h-5 w-3/4 rounded bg-black/5 dark:bg-white/5" />
          <div className="h-5 w-2/3 rounded bg-black/5 dark:bg-white/5" />
          <div className="h-5 w-full rounded bg-black/5 dark:bg-white/5" />
          <div className="h-5 w-5/6 rounded bg-black/5 dark:bg-white/5" />
          <div className="h-5 w-3/4 rounded bg-black/5 dark:bg-white/5" />
          <div className="flex gap-3 pt-4">
            <div className="h-11 w-36 rounded-xl bg-amber-500/40" />
            <div className="h-11 w-28 rounded-xl bg-black/10 dark:bg-white/10" />
          </div>
        </div>
        <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-2xl bg-black/10 dark:bg-white/10 shrink-0" />
      </div>
      <span className="sr-only">Loading about page</span>
    </div>
  );
}