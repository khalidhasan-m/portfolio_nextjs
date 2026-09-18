import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <header className="pt-28 pb-8 sm:pt-32 sm:pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-mono mb-5">
          <Link
            href="/"
            className="text-gray-500 dark:text-gray-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            Home
          </Link>
          <FiChevronRight className="text-gray-400 dark:text-gray-600" aria-hidden="true" />
          <span className="text-amber-700 dark:text-amber-400" aria-current="page">
            {eyebrow}
          </span>
        </nav>
        <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.18em] text-amber-700 dark:text-amber-400 mb-3">
          {eyebrow}
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono tracking-tight text-gray-900 dark:text-white">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
