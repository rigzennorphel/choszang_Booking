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
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14 lg:px-8 lg:pb-32 lg:pt-20">
      {/* =====================================
          HERO — BACKGROUND VIDEO / IMAGE
          Video preferred; falls back to image or gradient
          ===================================== */}
      <div className="absolute inset-x-4 top-6 bottom-8 overflow-hidden rounded-3xl border border-white/10 sm:inset-x-6 sm:top-8 sm:bottom-12 lg:inset-x-8 lg:top-10 lg:bottom-16">
        {site.homePhotoBanner.videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={site.homePhotoBanner.imageSrc}
            className="h-full w-full object-cover"
            aria-label={site.homePhotoBanner.alt}
          >
            <source src={site.homePhotoBanner.videoSrc} type="video/mp4" />
          </video>
        ) : site.homePhotoBanner.imageSrc ? (
          <Image
            src={site.homePhotoBanner.imageSrc}
            alt={site.homePhotoBanner.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-r from-night via-slate-900 to-night" />
        )}
        <div className="absolute inset-0 bg-night/55" />
      </div>

      {/* Decorative accent blurs (non-interactive) */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-cab/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" aria-hidden />

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* =====================================
            HERO — STATUS BADGE
            ===================================== */}
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-cab-light backdrop-blur sm:text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cab opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cab" />
          </span>
          Drivers on Leh, Nubra &amp; Pangong routes today
        </p>

        {/* =====================================
            HERO — HEADLINE & DESCRIPTION
            ===================================== */}
        <h1 className="font-display text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Book a car for{" "}
          <span className="bg-gradient-to-r from-cab via-cab-light to-amber-200 bg-clip-text text-transparent">
            Ladakh&apos;s roads &amp; passes
          </span>
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-ink-300 sm:text-lg">
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
            <dt className="text-xs font-medium uppercase tracking-wider text-ink-500">
              Avg. reply
            </dt>
            <dd className="mt-1 font-display text-2xl font-semibold text-white sm:text-3xl">
              10 min
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider text-ink-500">
              Rating
            </dt>
            <dd className="mt-1 font-display text-2xl font-semibold text-white sm:text-3xl">
              4.9★
            </dd>
          </div>
          <div>
            <dt className="text-xs font-medium uppercase tracking-wider text-ink-500">
              Trips / season
            </dt>
            <dd className="mt-1 font-display text-2xl font-semibold text-white sm:text-3xl">
              3k+
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
