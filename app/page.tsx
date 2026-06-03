/**
 * =====================================
 * FILE: app/page.tsx
 * PURPOSE: Home page route — composes all main landing sections in order.
 * RELATED: Route "/" — Hero, Fleet, Reviews, Download strip (app layout wraps Header/Footer).
 * =====================================
 */

import { Hero } from "@/components/Hero";
import { Fleet } from "@/components/Fleet";
import { Reviews } from "@/components/Reviews";
import { DownloadStrip } from "@/components/DownloadStrip";

/**
 * HomePage — default export for the site root ("/").
 * Renders the marketing landing flow; navigation and chrome live in app/layout.tsx.
 */
export default function HomePage() {
  return (
    <>
      {/* =====================================
          HERO SECTION
          ===================================== */}
      <Hero />

      {/* =====================================
          FLEET / SERVICES SECTION
          ===================================== */}
      <Fleet />

      {/* =====================================
          TESTIMONIALS SECTION
          ===================================== */}
      <Reviews />

      {/* =====================================
          APP DOWNLOAD CTA STRIP
          ===================================== */}
      <DownloadStrip />
    </>
  );
}
