"use client";

import { useEffect, useRef } from "react";

/**
 * Adds className "visible" when the element enters the viewport.
 * Used with .section-fade in globals.css.
 */
export function useInView(options = { threshold: 0.1 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold]);

  return ref;
}
