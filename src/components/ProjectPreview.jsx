"use client";

import { useState } from "react";
import Image from "next/image";
import { FiImage } from "react-icons/fi";

const passthroughLoader = ({ src }) => src;

export default function ProjectPreview({ src, alt, sizes, priority = false, detail = false }) {
  const [error, setError] = useState(false);
  const isHireloop = typeof src === "string" && src.includes("hireloop");
  const fallback = (
    <div className="w-full h-full flex flex-col items-center justify-center dark:bg-white/5 bg-black/5 gap-2">
      <FiImage size={32} className="text-amber-600/60 dark:text-amber-500/50" aria-hidden="true" />
      <span className="text-xs dark:text-gray-400 text-gray-600 font-mono">{alt}</span>
    </div>
  );

  if (error) return fallback;

  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      loader={passthroughLoader}
      unoptimized
      onError={() => setError(true)}
      className={isHireloop ? "object-cover object-top" : "object-cover"}
    />
  );

  if (!isHireloop) return image;

  return (
    <div
      className={`absolute ${detail ? "inset-2 sm:inset-4" : "inset-2"} rounded-xl overflow-hidden border dark:border-white/15 border-black/10 bg-[#09090d] shadow-[0_18px_45px_rgba(0,0,0,0.28)]`}
    >
      <div className="h-7 px-3 flex items-center gap-1.5 border-b dark:border-white/10 border-black/10 bg-[#15151b]" aria-hidden="true">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 h-4 flex-1 max-w-[180px] rounded-md bg-white/[0.07]" />
      </div>
      <div className="relative h-[calc(100%-1.75rem)]">{image}</div>
    </div>
  );
}
