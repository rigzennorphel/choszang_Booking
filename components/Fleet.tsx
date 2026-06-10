/**
 * =====================================
 * FILE: components/Fleet.tsx
 * PURPOSE: Fleet section — placeholder until vehicle listings are added.
 * RELATED: Home page (app/page.tsx); anchor id="fleet" for Header navigation.
 * =====================================
 */

/**
 * Fleet — scroll target for #fleet links.
 */
export function Fleet() {
  return (
    <section id="fleet" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-20 text-center shadow-card sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-cab-light">Fleet</p>
          <div
            className="mt-6 flex h-16 w-16 items-center justify-center rounded-full border border-cab/30 bg-cab/15 text-cab shadow-glow"
            aria-hidden
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="mt-5 font-display text-3xl font-bold text-white sm:text-4xl">Coming soon</p>
        </div>
      </div>
    </section>
  );
}
