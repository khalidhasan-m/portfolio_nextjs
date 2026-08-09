export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center dark:bg-[#0a0a0f] bg-[#f8f7f4]">
      <div className="relative mb-6">
        <div className="w-14 h-14 rounded-full border-2 border-amber-500/20 border-t-amber-500 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-xs font-bold text-amber-500">KH</span>
        </div>
      </div>
      <p className="font-mono text-sm dark:text-gray-400 text-gray-600 tracking-widest uppercase animate-pulse">
        Loading
      </p>
    </div>
  );
}
