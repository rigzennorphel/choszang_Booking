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
import { HeaderBrand } from "@/components/HeaderBrand";
import { MobileNav } from "@/components/MobileNav";
import { site } from "@/lib/site";

/* =====================================
   NAVIGATION CONFIG
   Anchor links scroll on home; /about is a separate route
   ===================================== */
const nav = [
  { href: "/#gallery", label: "Gallery" },
  { href: "/#fleet", label: "Fleet" },
  { href: "/#packages", label: "Packages" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/about", label: "About" },
];

/**
 * Header — sticky top bar below TopBanner (see layout.tsx).
 * Desktop: centered nav. Mobile: hamburger drawer (closes on link tap).
 */
export function Header() {
  return (
    <header className="bg-night/80 backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-2 py-2.5 md:min-h-[5.25rem] md:flex-row md:items-center md:gap-3 md:px-6 md:py-2 lg:min-h-[5.75rem] lg:gap-4 lg:px-8">
        {/* =====================================
            LOGO / HOME LINK (centered on mobile)
            ===================================== */}
        <div className="flex w-full justify-center pl-0.5 pr-5 md:w-auto md:justify-start md:px-0">
          <HeaderBrand />
        </div>

        {/* =====================================
            NAVIGATION (desktop)
            Hidden below md breakpoint
            ===================================== */}
        <nav
          className="hidden min-w-0 flex-1 justify-center gap-0.5 md:flex lg:gap-1"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-ink-300 transition hover:bg-white/5 hover:text-white lg:px-4 lg:text-base"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* =====================================
            CALL-TO-ACTION & MOBILE MENU
            ===================================== */}
        <div className="absolute right-10 top-1/2 flex shrink-0 -translate-y-1/2 flex-nowrap items-center gap-2 md:static md:translate-y-0 md:mr-0 md:ml-auto">
          <a
            href={`tel:${site.phoneTel}`}
            className="hidden shrink-0 items-center whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-ink-100 transition hover:border-cab/40 hover:bg-white/10 md:inline-flex lg:px-3 lg:py-2 lg:text-sm xl:text-base"
          >
            {site.phoneDisplay}
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className="hidden shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-cab px-3 py-2 text-xs font-semibold text-night shadow-glow transition hover:bg-cab-light md:inline-flex lg:px-4 lg:py-2.5 lg:text-base"
          >
            Call now
          </a>

          <MobileNav nav={nav} />
        </div>
      </div>
    </header>
  );
}
