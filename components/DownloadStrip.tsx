/**
 * =====================================
 * FILE: components/DownloadStrip.tsx
 * PURPOSE: Bottom CTA — upcoming mobile app promo with store placeholder links.
 * RELATED: Home page (app/page.tsx); last section before the footer.
 * =====================================
 */

import Link from "next/link";
import { site } from "@/lib/site";

/**
 * DownloadStrip — gradient-bordered promo block.
 * App Store / Google Play links are placeholders (#) until apps ship.
 */
export function DownloadStrip() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-cab/30 bg-gradient-to-r from-cab/25 via-cab/10 to-cyan-500/10 p-[1px] shadow-glow">
        <div className="flex flex-col items-center justify-between gap-6 rounded-[calc(1.5rem-1px)] bg-night/90 px-6 py-10 text-center sm:flex-row sm:text-left sm:px-10 sm:py-12">
          {/* =====================================
              APP DOWNLOAD — COPY
              ===================================== */}
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Keep {site.name} in your pocket
            </h2>
            <p className="mt-2 text-sm text-ink-300 sm:text-base">
              When the app ships, you will get live driver location, saved hotels,
              and one‑tap rebooking for your favourite Ladakh routes.
            </p>
          </div>

          {/* =====================================
              APP DOWNLOAD — STORE BUTTONS
              ===================================== */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#"
              className="inline-flex min-w-[140px] items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-night transition hover:bg-ink-100"
            >
              App Store
            </Link>
            <Link
              href="#"
              className="inline-flex min-w-[140px] items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Google Play
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
