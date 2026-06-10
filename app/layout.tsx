/**
 * =====================================
 * FILE: app/layout.tsx
 * PURPOSE: Root HTML shell — fonts, global styles, metadata, and site-wide chrome.
 * RELATED: Wraps every page (home, /about); shared Header, Footer, TopBanner, WelcomeSplash.
 *
 * TABLE OF CONTENTS
 * -----------------
 * 1. Font loading (Google fonts)
 * 2. Site metadata & viewport
 * 3. RootLayout — document structure
 *    - Welcome splash overlay
 *    - Background glow
 *    - Sticky header area (banner + nav)
 *    - Main content slot (page-specific)
 *    - Footer
 * =====================================
 */

import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TopBanner } from "@/components/TopBanner";
import { WelcomeSplash } from "@/components/WelcomeSplash";
import { HashScrollHandler } from "@/components/HashScrollHandler";
import { site } from "@/lib/site";
import { themeColors } from "@/lib/theme";

/* =====================================
   FONT LOADING
   Registers CSS variables used in tailwind.config.ts
   ===================================== */
const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

/* =====================================
   SITE METADATA (SEO / browser tab)
   Pulled from lib/site.ts for a single source of truth
   ===================================== */
export const metadata: Metadata = {
  title: `${site.name} — Book a taxi in Ladakh`,
  description: site.description,
  icons: {
    icon: [
      { url: "/favicon.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png?v=2", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/favicon.png?v=2",
    apple: [{ url: "/apple-icon.png?v=2", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: themeColors.highlight,
};

/**
 * RootLayout — Next.js App Router root layout.
 * @param children — page content from app/page.tsx, app/about/page.tsx, etc.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png?v=2" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-48.png?v=2" type="image/png" sizes="48x48" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=2" sizes="180x180" />
        <link rel="shortcut icon" href="/favicon.png?v=2" />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} min-h-screen bg-night font-sans text-ink-100 antialiased`}
      >
        {/* Welcome overlay on first paint (client component) */}
        <WelcomeSplash />
        <HashScrollHandler />

        <div className="relative flex min-h-screen flex-col">
          {/* Decorative full-viewport gradient (non-interactive) */}
          <div className="pointer-events-none fixed inset-0 bg-hero-glow" aria-hidden />

          {/* =====================================
              HEADER AREA (sticky)
              Top announcement banner + primary navigation
              ===================================== */}
          <div className="sticky top-0 z-50">
            <TopBanner />
            <Header />
          </div>

          {/* Page-specific sections injected by each route */}
          <main className="relative flex-1">{children}</main>

          {/* =====================================
              FOOTER
              Site-wide links and contact
              ===================================== */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
