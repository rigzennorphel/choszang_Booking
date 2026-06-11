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
import Image from "next/image";
import { BrandWordmark } from "@/components/BrandWordmark";
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
    <header className="border-b border-white/5 bg-night/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl flex-nowrap items-center gap-2 px-3 sm:h-[4.75rem] sm:gap-3 sm:px-6 lg:h-20 lg:gap-4 lg:px-8">
        {/* =====================================
            LOGO / HOME LINK
            ===================================== */}
        <Link
          href="/"
          className="inline-flex min-w-0 shrink items-center gap-2 font-display text-base font-semibold tracking-tight text-white sm:gap-2.5 sm:text-lg lg:gap-3 lg:text-2xl"
        >
          <Image
            src={site.logoSrc}
            alt=""
            width={60}
            height={60}
            className="h-10 w-10 shrink-0 rounded-full object-cover sm:h-12 sm:w-12 lg:h-[60px] lg:w-[60px]"
            priority
          />
          <BrandWordmark className="hidden truncate sm:inline" />
        </Link>

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
        <div className="ml-auto flex shrink-0 flex-nowrap items-center gap-1.5 sm:gap-2">
          {/* Mobile / small tablet: phone + Call now in one compact pill */}
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full bg-cab px-2.5 py-2 text-[11px] font-semibold leading-none text-night shadow-glow transition hover:bg-cab-light sm:px-3 sm:py-2.5 sm:text-xs md:hidden"
          >
            <span>Call now</span>
            <span className="mx-1 opacity-70" aria-hidden>
              ·
            </span>
            <span>{site.phoneDisplay}</span>
          </a>

          {/* md+: phone number and Call now as separate buttons, always one row */}
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
