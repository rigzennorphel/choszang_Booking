/**
 * =====================================
 * FILE: app/about/page.tsx
 * PURPOSE: About Us page — company story, contact, and inspirational quote.
 * RELATED: Route "/about" — linked from Header and Footer navigation.
 * =====================================
 */

import { site } from "@/lib/site";

/**
 * AboutPage — static marketing page for trust and brand context.
 * Copy and quote text come from lib/site.ts (site.about, site.phone*).
 */
export default function AboutPage() {
  return (
    <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10">
        {/* =====================================
            ABOUT US — PAGE HEADER
            ===================================== */}
        <p className="text-xs font-semibold uppercase tracking-wider text-cab-light">
          About
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          Trusted local taxi booking across Ladakh
        </h1>

        {/* =====================================
            ABOUT US — MAIN COPY
            ===================================== */}
        <p className="mt-5 text-base leading-relaxed text-ink-300 sm:text-lg">
          {site.name} helps travelers book reliable local drivers for airport
          transfers, sightseeing routes, and outstation trips. We focus on
          transparent fares, quick support, and safe trips on mountain roads.
        </p>
        <p className="mt-4 text-base leading-relaxed text-ink-300 sm:text-lg">
          Need help planning a route or booking a ride? Call us at{" "}
          <a
            href={`tel:${site.phoneTel}`}
            className="font-semibold text-cab-light hover:text-cab"
          >
            {site.phoneDisplay}
          </a>
          .
        </p>

        {/* =====================================
            ABOUT US — FEATURED QUOTE
            ===================================== */}
        <blockquote className="mt-8 border-t border-white/10 pt-8">
          <p className="text-balance font-display text-lg italic leading-relaxed text-cab-light sm:text-xl">
            &ldquo;{site.about.quote}&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  );
}
