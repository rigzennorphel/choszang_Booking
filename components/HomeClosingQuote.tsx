/**
 * =====================================
 * FILE: components/HomeClosingQuote.tsx
 * PURPOSE: Closing quote at the end of the home page.
 * RELATED: Home route (app/page.tsx); copy from site.homeClosingQuote.
 * =====================================
 */

import { site } from "@/lib/site";

export function HomeClosingQuote() {
  return (
    <section className="border-t border-white/5 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <blockquote className="mx-auto max-w-3xl text-center">
        <p className="text-balance font-display text-xl italic leading-relaxed text-cab-light sm:text-2xl lg:text-3xl">
          &ldquo;{site.homeClosingQuote}&rdquo;
        </p>
      </blockquote>
    </section>
  );
}
