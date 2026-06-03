/**
 * =====================================
 * FILE: lib/site.ts
 * PURPOSE: Central config — branding, contact, copy, banner, splash, and asset paths.
 * RELATED: Used across layout, Header, Footer, Hero, About, and marketing components.
 *
 * TABLE OF CONTENTS
 * -----------------
 * 1. Phone & WhatsApp message template
 * 2. site export — name, SEO, contact links
 * 3. wordmark, banner, welcome, about, homePhotoBanner
 * =====================================
 */

/* =====================================
   CONTACT CONSTANTS
   Single place to update phone and pre-filled WhatsApp text
   ===================================== */
const phoneTel = "+916005162048";
const whatsappMessage = `🙏 Hello!Jullay
Thank you for contacting to booking Ladakh – .Tsetup

We provide:
🚕 Taxi Service in Ladakh
🏔️ Customized Ladakh Tour Packages
✈️ Airport Pickup & Drop
🏕️ Trips to Pangong, Nubra, Turtuk & Tso Moriri

Please share the following details so we can plan your trip:
1️⃣ Travel dates
2️⃣ Number of people
3️⃣ Package / Taxi requirement
4️⃣ Hotel required or not

We will reply shortly with the best itinerary and price.

Thank you`;

/**
 * site — read-only object consumed by pages and components.
 * Edit here instead of scattering strings through the UI.
 */
export const site = {
  /** Legal / marketing name shown in titles and footer */
  name: "Ladakh Booking",
  /** package.json / repo style slug */
  slug: "ladakhbooking",
  /** Shorter name for tight layouts (optional) */
  nameShort: "Ladakh Booking",
  description:
    "Book trusted taxis across Ladakh — Leh Kushok Bakula Rimpochee airport transfers, Leh town rides, Pangong, Nubra, Tso Moriri, Kargil, and multi‑day sightseeing with local drivers.",
  email: "hello@ladakhbooking.com",
  phoneDisplay: "+91 60051 62048",
  phoneTel,
  /** WhatsApp deep link with encoded booking inquiry message */
  whatsappHref: `https://wa.me/${phoneTel.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappMessage)}`,
  copyrightNote: "Ladakh Booking. Local drivers, fixed routes, and clear fares.",
  /** Short blurb under the logo in the footer */
  footerTagline:
    "Trusted taxis across Ladakh — Leh airport pickups, sightseeing, and long-distance transfers with clear pricing.",
  /** Header / footer logo: {before}{highlight}{after} with highlight in accent color */
  wordmark: {
    before: "Ladakh ",
    highlight: "Booking",
    after: "",
  },
  /** Thin top banner — set enabled: false to hide */
  banner: {
    enabled: true,
    message: "Season open — Leh airport, Nubra & Pangong trips. Book early for fixed fares.",
    ctaLabel: "Call now",
  },
  /** Short splash on first visit — duration in ms */
  welcome: {
    title: "Welcome to Chozang Booking",
    quote:
      "Travel is not just about reaching a place; it's about enjoying the journey.",
    durationMs: 2500,
  },
  /** About page quote — shown below the main copy */
  about: {
    quote:
      "Great journeys start with trust and end with beautiful memories.",
  },
  /** Home hero banner — video with image poster fallback */
  homePhotoBanner: {
    videoSrc: "/video_banner.mp4",
    imageSrc: "/home-banner.jpg",
    alt: "Panoramic view of Ladakh — mountains and high-altitude roads",
  },
} as const;
