/**
 * =====================================
 * FILE: components/WelcomeSplash.tsx
 * PURPOSE: First-visit welcome overlay — timed fade, locks body scroll briefly.
 * RELATED: app/layout.tsx (mounts above all pages); copy from site.welcome in lib/site.ts.
 *
 * TABLE OF CONTENTS
 * -----------------
 * 1. Phase type & WelcomeSplash component
 *    - useLayoutEffect timers (show → fade → hidden)
 *    - Overlay UI (title + quote)
 * =====================================
 */

"use client";

import { useLayoutEffect, useState } from "react";
import { site } from "@/lib/site";

/** UI lifecycle: visible → fading out → removed from DOM */
type Phase = "show" | "fade" | "hidden";

/**
 * WelcomeSplash — client-only overlay shown on load.
 * Uses timers (not API) to fade after site.welcome.durationMs and restore body scroll.
 */
export function WelcomeSplash() {
  const [phase, setPhase] = useState<Phase>("show");
  const { title, quote, durationMs } = site.welcome;
  const fadeMs = 300;

  /* =====================================
     SPLASH TIMING LOGIC
     Locks overflow during splash; cleans up timers on unmount
     ===================================== */
  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";
    const fadeAt = Math.max(0, durationMs - fadeMs);
    const fadeTimer = window.setTimeout(() => setPhase("fade"), fadeAt);
    const hideTimer = window.setTimeout(() => {
      setPhase("hidden");
      document.body.style.overflow = "";
    }, durationMs);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, [durationMs]);

  if (phase === "hidden") return null;

  return (
    <div
      id="welcome-splash"
      role="dialog"
      aria-modal="true"
      aria-live="polite"
      aria-label={title}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(10, 14, 23, 0.35)",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(2px)",
        opacity: phase === "fade" ? 0 : 1,
        transition: `opacity ${fadeMs}ms ease-out`,
        pointerEvents: phase === "fade" ? "none" : "auto",
      }}
      className="px-6"
    >
      {/* =====================================
          WELCOME SPLASH — CONTENT CARD
          ===================================== */}
      <div className="relative max-w-xl rounded-2xl border border-white/10 bg-night/50 px-8 py-10 text-center shadow-glow backdrop-blur-md sm:px-10 sm:py-12">
        <p className="font-display text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl">
          {title}
        </p>
        <p className="mt-8 text-balance font-display text-lg italic leading-relaxed text-cab-light drop-shadow-md sm:text-2xl">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="mx-auto mt-10 h-1 w-20 rounded-full bg-cab" />
      </div>
    </div>
  );
}
