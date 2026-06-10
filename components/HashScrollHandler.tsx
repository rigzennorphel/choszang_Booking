"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * HashScrollHandler — scrolls to #section after navigating from another page (e.g. /about → /#gallery).
 */
export function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.slice(1);
    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // Wait for the home page sections to mount after client navigation
    const timer = window.setTimeout(scrollToTarget, 100);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
