/**
 * =====================================
 * FILE: app/page.tsx
 * PURPOSE: Home page route — composes all main landing sections in order.
 * RELATED: Route "/" — Hero, Gallery, Packages, Fleet, Reviews (app layout wraps Header/Footer).
 * =====================================
 */

import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { Packages } from "@/components/Packages";
import { Fleet } from "@/components/Fleet";
import { Reviews } from "@/components/Reviews";
import { HomeClosingQuote } from "@/components/HomeClosingQuote";

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
          GALLERY SECTION
          ===================================== */}
      <Gallery />

      {/* =====================================
          PACKAGES SECTION
          ===================================== */}
      <Packages />

      {/* =====================================
          FLEET / SERVICES SECTION
          ===================================== */}
      <Fleet />

      {/* =====================================
          TESTIMONIALS SECTION
          ===================================== */}
      <Reviews />

      {/* =====================================
          CLOSING QUOTE
          ===================================== */}
      <HomeClosingQuote />
    </>
  );
}
