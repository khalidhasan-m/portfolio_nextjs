"use client";

import { useEffect, useRef } from "react";

const DEFAULT_OPTIONS = { threshold: 0.1 };

/**
 * Adds className "visible" when the element enters the viewport.
 * Used with .section-fade in globals.css.
 * Content stays visible if JS never runs (no permanent opacity:0).
 */
export function useInView(options = DEFAULT_OPTIONS) {
  const ref = useRef(null);
  const threshold = options?.threshold ?? 0.1;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("section-fade-ready");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

/** Stable option for sections that need a lower threshold */
export const IN_VIEW_EARLY = { threshold: 0.05 };
