"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiCompass } from "react-icons/fi";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 dark:bg-[#0a0a0f] bg-[#f8f7f4] dot-grid overflow-hidden">
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        <FiCompass
          className="text-6xl text-amber-500 mb-6"
          aria-hidden="true"
        />

        <p className="font-mono text-amber-500 text-sm tracking-widest uppercase mb-4">
          404
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold font-mono dark:text-white text-gray-900 mb-3">
          Page <span className="gradient-text">not found</span>
        </h1>

        <p className="dark:text-gray-400 text-gray-600 max-w-md mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="flex flex-col xs:flex-row items-center gap-3 w-full xs:w-auto">
          <Link
            href="/"
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-semibold text-sm transition-all duration-200 shadow-lg shadow-amber-500/20 min-h-[44px]"
          >
            Back to Home
          </Link>
          <button
            type="button"
            onClick={() => router.back()}
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border dark:border-white/20 border-black/20 dark:text-white text-gray-900 dark:hover:bg-white/5 hover:bg-black/5 font-semibold text-sm transition-all duration-200 min-h-[44px]"
          >
            Go Back
          </button>
        </div>

        <p className="mt-10 font-mono text-sm dark:text-gray-600 text-gray-400">
          <span className="text-amber-500">&lt;</span>KHM
          <span className="text-amber-500"> /&gt;</span>
        </p>
      </div>
    </div>
  );
}
