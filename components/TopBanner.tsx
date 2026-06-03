/**
 * =====================================
 * FILE: components/TopBanner.tsx
 * PURPOSE: Thin announcement bar above the header — seasonal promo + call link.
 * RELATED: app/layout.tsx (sticky header stack); toggled via site.banner.enabled.
 * =====================================
 */

import { site } from "@/lib/site";

/**
 * TopBanner — optional promo strip.
 * Returns null when site.banner.enabled is false (no DOM, no layout shift from empty bar).
 */
export function TopBanner() {
  const { banner } = site;
  if (!banner.enabled) return null;

  return (
    <div
      className="relative z-[60] border-b border-cab/20 bg-gradient-to-r from-cab/20 via-night to-cab/10"
      role="region"
      aria-label="Announcement"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center sm:justify-between sm:px-6 sm:py-2.5 lg:px-8">
        {/* =====================================
            TOP BANNER — MESSAGE
            ===================================== */}
        <p className="text-xs font-medium leading-snug text-ink-100 sm:text-sm">
          <span className="mr-1.5 inline-block rounded bg-cab/25 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-cab-light sm:text-[11px]">
            New
          </span>
          {banner.message}
        </p>

        {/* =====================================
            TOP BANNER — CTA
            tel: link uses site.phoneTel from lib/site.ts
            ===================================== */}
        <a
          href={`tel:${site.phoneTel}`}
          className="shrink-0 text-xs font-semibold text-cab-light underline-offset-2 transition hover:text-cab hover:underline sm:text-sm"
        >
          {banner.ctaLabel} →
        </a>
      </div>
    </div>
  );
}
