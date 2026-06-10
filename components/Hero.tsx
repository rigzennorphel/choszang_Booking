/**
 * =====================================
 * FILE: components/Hero.tsx
 * PURPOSE: Home page hero — background image, headline, booking CTA, trust stats.
 * RELATED: Home route (app/page.tsx); first section visitors see below the header.
 *
 * TABLE OF CONTENTS
 * -----------------
 * 1. Hero component
 *    - Video / photo banner & overlay
 *    - Decorative glows
 *    - Headline & description
 *    - Primary CTA (WhatsApp)
 *    - Stats row
 * =====================================
 */

import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Hero — full-width marketing block with optional video or image from site.homePhotoBanner.
 * "Book now" opens WhatsApp with a pre-filled message (site.whatsappHref).
 */
export function Hero() {
  const banner = site.homePhotoBanner;
  const posterSrc =
    "imageSrc" in banner && typeof (banner as { imageSrc?: string }).imageSrc === "string"
      ? (banner as { imageSrc?: string }).imageSrc
      : undefined;

  return (
    <section className="relative overflow-hidden px-2 pb-16 pt-1 sm:px-4 sm:pb-24 sm:pt-2 lg:px-6 lg:pb-32">
      {/* =====================================
          HERO — BACKGROUND VIDEO / IMAGE
          Video preferred; falls back to image or gradient
          ===================================== */}
      <div className="absolute inset-x-2 top-1 bottom-6 overflow-hidden rounded-3xl border border-white/10 sm:inset-x-4 sm:top-2 sm:bottom-8 lg:inset-x-6 lg:bottom-12">
        {site.homePhotoBanner.videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={posterSrc}
            className="h-full w-full object-cover"
            aria-label={site.homePhotoBanner.alt}
          >
            <source src={site.homePhotoBanner.videoSrc} type="video/mp4" />
          </video>
        ) : posterSrc ? (
          <Image
            src={posterSrc}
            alt={site.homePhotoBanner.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-r from-night via-slate-900 to-night" />
        )}
        <div className="absolute inset-0 bg-night/20" />
      </div>

      {/* Decorative accent blurs (non-interactive) — kept subtle so video stays visible */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-cab/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" aria-hidden />

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* =====================================
            HERO — HEADLINE & DESCRIPTION
            ===================================== */}
        <h1 className="font-display text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white/85 drop-shadow-lg sm:text-5xl lg:text-6xl">
          Book a car for{" "}
          <span className="bg-gradient-to-r from-cab/90 via-cab-light/90 to-amber-200/90 bg-clip-text text-transparent drop-shadow-sm">
            Ladakh&apos;s roads &amp; passes
          </span>
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/65 drop-shadow-md sm:text-lg">
          {site.description}
        </p>

        {/* =====================================
            HERO — PRIMARY CTA
            External link to WhatsApp (no API — client-side navigation)
            ===================================== */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={site.whatsappHref}
            className="inline-flex items-center justify-center rounded-full bg-cab px-6 py-3 text-sm font-semibold text-night shadow-glow transition hover:bg-cab-light"
          >
            Book now
          </a>
        </div>

        {/* =====================================
            HERO — TRUST METRICS
            Static marketing figures (not loaded from a database)
            ===================================== */}
        <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:gap-8">
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider text-white/50">
              Avg. reply
            </dt>
            <dd className="mt-1 font-display text-2xl font-semibold text-white/75 drop-shadow-sm sm:text-3xl">
              soon..
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider text-white/50">
              Rating
            </dt>
            <dd className="mt-1 font-display text-2xl font-semibold text-white/75 drop-shadow-sm sm:text-3xl">
              soon..★
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider text-white/50">
              Trips / season
            </dt>
            <dd className="mt-1 font-display text-2xl font-semibold text-white/75 drop-shadow-sm sm:text-3xl">
             soon..
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
