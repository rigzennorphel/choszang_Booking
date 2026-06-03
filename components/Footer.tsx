/**
 * =====================================
 * FILE: components/Footer.tsx
 * PURPOSE: Site footer — brand, link columns, contact, copyright, legal links.
 * RELATED: Rendered in app/layout.tsx below all page content.
 *
 * TABLE OF CONTENTS
 * -----------------
 * 1. Footer component
 *    - Brand & tagline
 *    - Company links
 *    - Riders links
 *    - Contact block
 *    - Copyright bar
 * =====================================
 */

import Link from "next/link";
import { BrandWordmark } from "@/components/BrandWordmark";
import { site } from "@/lib/site";

/**
 * Footer — four-column grid on large screens; stacks on mobile.
 * Contact data and tagline sourced from lib/site.ts.
 */
export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-night/90">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* =====================================
              FOOTER — BRAND
              ===================================== */}
          <div className="space-y-4">
            <p className="font-display text-lg font-semibold text-white">
              <BrandWordmark />
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-ink-400">
              {site.footerTagline}
            </p>
          </div>

          {/* =====================================
              FOOTER — COMPANY LINKS
              ===================================== */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-500">
              Company
            </p>
            <ul className="space-y-2 text-sm text-ink-300">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* =====================================
              FOOTER — RIDERS / BOOKING LINKS
              ===================================== */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-500">
              Riders
            </p>
            <ul className="space-y-2 text-sm text-ink-300">
              <li>
                <a href={site.whatsappHref} className="hover:text-white">
                  Book now
                </a>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Help center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* =====================================
              FOOTER — CONTACT
              ===================================== */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-500">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-ink-300">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneTel}`} className="hover:text-white">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="text-ink-500">7am–9pm IST dispatch</li>
            </ul>
          </div>
        </div>

        {/* =====================================
            FOOTER — COPYRIGHT & LEGAL
            ===================================== */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/5 pt-8 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.copyrightNote}
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-ink-300">
              Privacy
            </Link>
            <Link href="#" className="hover:text-ink-300">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
