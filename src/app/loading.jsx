export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col dark:bg-[#0a0a0f] bg-[#f8f7f4]"
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="h-16 border-b dark:border-white/5 border-black/5" />
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 space-y-4 w-full max-w-lg">
          <div className="h-8 w-40 rounded-full dark:bg-white/10 bg-black/10 animate-pulse" />
          <div className="h-12 w-3/4 rounded-lg dark:bg-white/10 bg-black/10 animate-pulse" />
          <div className="h-12 w-2/3 rounded-lg dark:bg-white/10 bg-black/10 animate-pulse" />
          <div className="h-4 w-full rounded dark:bg-white/5 bg-black/5 animate-pulse" />
          <div className="h-4 w-5/6 rounded dark:bg-white/5 bg-black/5 animate-pulse" />
          <div className="flex gap-3 pt-2">
            <div className="h-11 w-32 rounded-xl dark:bg-amber-500/30 bg-amber-500/40 animate-pulse" />
            <div className="h-11 w-32 rounded-xl dark:bg-white/10 bg-black/10 animate-pulse" />
          </div>
        </div>
        <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full dark:bg-white/10 bg-black/10 animate-pulse shrink-0" />
      </div>
      <span className="sr-only">Loading</span>
    </div>
  );
}
