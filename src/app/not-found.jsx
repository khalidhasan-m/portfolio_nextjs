import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[100svh] flex flex-col items-center justify-center px-4 dark:bg-[#0a0a0f] bg-[#f8f7f4]">
      <p className="font-mono text-amber-500 text-sm tracking-widest uppercase mb-4">404</p>
      <h1 className="text-4xl sm:text-5xl font-bold font-mono dark:text-white text-gray-900 mb-3 text-center">
        Page not found
      </h1>
      <p className="dark:text-gray-400 text-gray-600 text-center max-w-md mb-8 leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-semibold text-sm transition-all duration-200 shadow-lg shadow-amber-500/20"
      >
        Back to Home
      </Link>
      <p className="mt-10 font-mono text-sm dark:text-gray-600 text-gray-400">
        <span className="text-amber-500">&lt;</span>KHM<span className="text-amber-500"> /&gt;</span>
      </p>
    </div>
  );
}
