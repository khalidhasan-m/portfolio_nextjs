export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center dark:bg-[#0a0a0f] bg-[#f8f7f4]"
      role="status"
      aria-label="Loading page"
    >
      <div className="relative mb-8 flex items-center gap-3 text-gray-600 dark:text-gray-400">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 dark:bg-amber-500 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-500 dark:bg-amber-400"></span>
        </span>
        <span className="text-sm font-medium">Loading…</span>
      </div>
      <span className="sr-only">Loading page content</span>
    </div>
  );
}
