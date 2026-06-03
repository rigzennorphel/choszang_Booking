/**
 * =====================================
 * FILE: components/Header.tsx
 * PURPOSE: Site header — logo, primary navigation, call CTA, mobile menu.
 * RELATED: Rendered in app/layout.tsx on every page; links to home, #fleet, #reviews, /about.
 *
 * TABLE OF CONTENTS
 * -----------------
 * 1. Navigation link config
 * 2. Header component
 *    - Logo / brand link
 *    - Desktop navigation
 *    - Call actions & mobile drawer
 * =====================================
 */

import Link from "next/link";
import { BrandWordmark } from "@/components/BrandWordmark";
import { site } from "@/lib/site";

/* =====================================
   NAVIGATION CONFIG
   Anchor links scroll on home; /about is a separate route
   ===================================== */
const nav = [
  { href: "#fleet", label: "Fleet" },
  { href: "#reviews", label: "Reviews" },
  { href: "/about", label: "About" },
];

/**
 * Header — sticky top bar below TopBanner (see layout.tsx).
 * Desktop: centered nav. Mobile: hamburger via native <details> (no extra JS).
 */
export function Header() {
  return (
    <header className="border-b border-white/5 bg-night/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:h-[4.25rem] sm:gap-4 sm:px-6 lg:px-8">
        {/* =====================================
            LOGO / HOME LINK
            ===================================== */}
        <Link
          href="/"
          className="shrink-0 font-display text-base font-semibold tracking-tight text-white sm:text-lg lg:text-xl"
        >
          <BrandWordmark />
        </Link>

        {/* =====================================
            NAVIGATION (desktop)
            Hidden below md breakpoint
            ===================================== */}
        <nav
          className="hidden flex-1 justify-center gap-1 md:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* =====================================
            CALL-TO-ACTION & MOBILE MENU
            ===================================== */}
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${site.phoneTel}`}
            className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-ink-100 transition hover:border-cab/40 hover:bg-white/10 lg:inline-flex"
          >
            {site.phoneDisplay}
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex items-center justify-center rounded-full bg-cab px-4 py-2 text-sm font-semibold text-night shadow-glow transition hover:bg-cab-light sm:px-5"
          >
            Call now
          </a>

          {/* Mobile navigation — expands below summary */}
          <details className="relative md:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-center rounded-full border border-white/10 bg-white/5 p-2.5 text-white marker:hidden [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open menu</span>
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </summary>
            <div className="absolute right-0 top-full z-50 mt-2 w-52 overflow-hidden rounded-2xl border border-white/10 bg-night/95 py-2 shadow-card backdrop-blur-xl">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2.5 text-sm text-ink-200 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={`tel:${site.phoneTel}`}
                className="block border-t border-white/10 px-4 py-2.5 text-sm text-cab-light"
              >
                Call {site.phoneDisplay}
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
