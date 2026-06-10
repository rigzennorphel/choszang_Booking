/**
 * =====================================
 * FILE: components/Packages.tsx
 * PURPOSE: Tour packages section — featured itinerary, package cards, booking CTAs.
 * RELATED: Home page (app/page.tsx); anchor id="packages"; also used on /packages route.
 * =====================================
 */

import { site } from "@/lib/site";

function packageWhatsAppHref(packageName: string) {
  const message = `Hello! I am interested in the "${packageName}" package. Please share availability and price.\n\nTravel dates:\nNumber of people:\nHotel required: Yes / No`;
  return `https://wa.me/${site.phoneTel.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}

/**
 * Packages — scroll target for #packages links.
 */
export function Packages() {
  const { packages } = site;
  const featured = packages.featuredItinerary;

  return (
    <section
      id="packages"
      className="scroll-mt-24 border-t border-white/5 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* =====================================
            PACKAGES — SECTION HEADER
            ===================================== */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-cab-light">
            {packages.label}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            {packages.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-300 sm:text-lg">
            {packages.description}
          </p>
        </div>

        {/* =====================================
            PACKAGES — FEATURED ITINERARY
            ===================================== */}
        {featured && (
          <div className="mt-12 overflow-hidden rounded-3xl border border-cab/30 bg-gradient-to-br from-cab/10 via-night/80 to-cyan-500/5 p-[1px] shadow-glow">
            <div className="rounded-[calc(1.5rem-1px)] bg-night/90 px-6 py-8 sm:px-10 sm:py-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-md">
                  <span className="inline-flex rounded-full border border-cab/30 bg-cab/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cab-light">
                    Featured package
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                    {featured.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-400 sm:text-base">{featured.subtitle}</p>
                  <a
                    href={packageWhatsAppHref(featured.name)}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-cab px-6 py-3 text-sm font-semibold text-night shadow-glow transition hover:bg-cab-light"
                  >
                    Book this itinerary
                  </a>
                </div>

                <ol className="relative flex-1 space-y-0 lg:max-w-2xl">
                  {featured.days.map((item, index) => (
                    <li key={item.day} className="relative flex gap-4 pb-8 last:pb-0">
                      {index < featured.days.length - 1 && (
                        <span
                          className="absolute left-[1.125rem] top-10 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-cab/60 to-white/10"
                          aria-hidden
                        />
                      )}
                      <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-cab bg-night font-display text-sm font-bold text-cab shadow-glow">
                        {item.day}
                      </span>
                      <div className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 transition hover:border-cab/25 hover:bg-white/[0.06] sm:px-5 sm:py-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-cab-light">
                          Day {item.day}
                        </p>
                        <p className="mt-1 font-display text-base font-semibold text-white sm:text-lg">
                          {item.title}
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-300 sm:text-base">
                          {item.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* =====================================
            PACKAGES — TOUR CARDS
            ===================================== */}
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.items.map((pkg) => (
            <li key={pkg.name}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-card">
                <div className="border-b border-white/5 bg-gradient-to-br from-cab/20 to-transparent px-6 py-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-cab-light">
                    {pkg.tag}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-white">{pkg.name}</h3>
                  <p className="mt-1 text-sm text-ink-400">{pkg.duration}</p>
                </div>

                <div className="flex flex-1 flex-col px-6 py-5">
                  <p className="text-sm leading-relaxed text-ink-300">{pkg.description}</p>
                  <ul className="mt-4 flex flex-1 flex-col gap-2 text-sm text-ink-300">
                    {pkg.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cab" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={packageWhatsAppHref(pkg.name)}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-cab px-5 py-2.5 text-sm font-semibold text-night shadow-glow transition hover:bg-cab-light"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {/* =====================================
            PACKAGES — CUSTOM TRIP CTA
            ===================================== */}
        <div className="mt-14 rounded-3xl border border-cab/30 bg-gradient-to-r from-cab/15 to-transparent p-6 text-center sm:p-8">
          <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
            Need a custom itinerary?
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-ink-300 sm:text-base">
            Tell us your dates, group size, and places you want to cover — we will plan a route and
            share a clear quote before you book.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={site.whatsappHref}
              className="inline-flex items-center justify-center rounded-full bg-cab px-6 py-3 text-sm font-semibold text-night shadow-glow transition hover:bg-cab-light"
            >
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
