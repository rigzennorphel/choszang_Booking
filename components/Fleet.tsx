/**
 * =====================================
 * FILE: components/Fleet.tsx
 * PURPOSE: Fleet / services section — vehicle tiers and included perks.
 * RELATED: Home page (app/page.tsx); anchor id="fleet" for Header navigation.
 *
 * TABLE OF CONTENTS
 * -----------------
 * 1. Static fleet data (cars array)
 * 2. Fleet component — section header & vehicle cards
 * =====================================
 */

/* =====================================
   FLEET DATA
   Local static list — replace with CMS/API when backend exists
   ===================================== */
const cars = [
  {
    name: "Standard SUV",
    tag: "Most popular",
    seats: "4 seats + luggage",
    image: "🚕",
    perks: ["Phone chargers", "Warm water & snacks", "Child seat on request"],
  },
  {
    name: "XL van",
    tag: "Groups & gear",
    seats: "6 seats",
    image: "🚐",
    perks: ["Extra luggage", "Camping gear friendly", "Flat loading height"],
  },
  {
    name: "Black executive",
    tag: "Premium",
    seats: "4 seats",
    image: "🖤",
    perks: ["Leather interior", "Privacy glass", "Uniformed chauffeur"],
  },
];

/**
 * Fleet — scroll target for #fleet links.
 * Maps over `cars` to render one card per vehicle type.
 */
export function Fleet() {
  return (
    <section id="fleet" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* =====================================
            FLEET / SERVICES — SECTION HEADER
            ===================================== */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cab-light">
              Fleet
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Choose the ride that fits the moment
            </h2>
            <p className="mt-4 text-base text-ink-400 sm:text-lg">
              SUVs and vans suited to mountain roads, luggage for long lake runs,
              and oxygen cylinder space on request.
            </p>
          </div>
        </div>

        {/* =====================================
            FLEET / SERVICES — VEHICLE CARDS
            ===================================== */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {cars.map((car) => (
            <article
              key={car.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-card"
            >
              <div className="flex items-center justify-between border-b border-white/5 bg-gradient-to-br from-cab/20 to-transparent px-6 py-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-cab-light">
                    {car.tag}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-white">
                    {car.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink-400">{car.seats}</p>
                </div>
                <span className="text-5xl" aria-hidden>
                  {car.image}
                </span>
              </div>
              <ul className="flex flex-1 flex-col gap-2 px-6 py-5 text-sm text-ink-300">
                {car.perks.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cab" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
