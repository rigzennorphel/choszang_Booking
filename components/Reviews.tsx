/**
 * =====================================
 * FILE: components/Reviews.tsx
 * PURPOSE: Testimonials section — guest quotes and attribution.
 * RELATED: Home page (app/page.tsx); anchor id="reviews" for Header navigation.
 *
 * TABLE OF CONTENTS
 * -----------------
 * 1. Static review quotes
 * 2. Reviews component — section header & quote cards
 * =====================================
 */

import { site } from "@/lib/site";

/* =====================================
   TESTIMONIAL DATA
   Static quotes — no API or database
   ===================================== */
const quotes = [
  {
    quote:
      "Our Pangong run started on time, driver knew every fuel stop. Ladakh Booking made the altitude day stress‑free.",
    name: "Priya N.",
    role: "Traveller, Mumbai",
  },
  {
    quote:
      "We needed airport pickup at odd hours for a group of six. Clear WhatsApp coordination and a spotless Innova.",
    name: "Thomas K.",
    role: "Tour organiser, Germany",
  },
  {
    quote:
      "No surprise charges for Khardung La and Nubra — route and inclusions were spelled out before we paid.",
    name: "Aisha R.",
    role: "Photographer",
  },
];

/**
 * Reviews — testimonial grid.
 * Initials avatar derived from guest name via split/map/join.
 */
export function Reviews() {
  return (
    <section
      id="reviews"
      className="scroll-mt-24 border-t border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* =====================================
            TESTIMONIALS — SECTION HEADER
            ===================================== */}
        <div className="max-w-2xl text-center sm:mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider text-cab-light">
            Reviews
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Guests who rode with {site.nameShort}
          </h2>
          <p className="mt-4 text-base text-ink-400 sm:text-lg">
            Recent feedback from visitors doing airport transfers, lake circuits,
            and multi‑day Ladakh itineraries.
          </p>
        </div>

        {/* =====================================
            TESTIMONIALS — QUOTE CARDS
            ===================================== */}
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <li
              key={q.name}
              className="rounded-2xl border border-white/10 bg-night/80 p-6 shadow-card backdrop-blur"
            >
              <p className="text-lg leading-relaxed text-ink-100">&ldquo;{q.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                {/* Avatar initials from first letters of each name part */}
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cab to-amber-600 text-sm font-bold text-night"
                  aria-hidden
                >
                  {q.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{q.name}</p>
                  <p className="text-xs text-ink-500">{q.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
