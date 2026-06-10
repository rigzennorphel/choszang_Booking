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
  const { about } = site;

  return (
    <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-wider text-cab-light">
          About
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          About {site.name}
        </h1>

        <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-300 sm:text-lg">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <p className="mt-6 rounded-2xl border border-cab/25 bg-cab/10 px-4 py-3 text-center text-sm font-medium text-cab-light sm:text-base">
          {about.highlights}
        </p>

        <p className="mt-6 text-base leading-relaxed text-ink-300 sm:text-lg">
          {about.closing}
        </p>

        <p className="mt-4 text-base leading-relaxed text-ink-300 sm:text-lg">
          Need help planning a route or booking a ride? Call us at{" "}
          <a
            href={`tel:${site.phoneTel}`}
            className="font-semibold text-cab-light hover:text-cab"
          >
            {site.phoneDisplay}
          </a>{" "}
          or email{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-cab-light hover:text-cab"
          >
            {site.email}
          </a>
          .
        </p>

        <blockquote className="mt-8 border-t border-white/10 pt-8">
          <p className="text-balance font-display text-lg italic leading-relaxed text-cab-light sm:text-xl">
            &ldquo;{about.quote}&rdquo;
          </p>
        </blockquote>
      </div>
    </section>
  );
}

