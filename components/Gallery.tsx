/**
 * =====================================
 * FILE: components/Gallery.tsx
 * PURPOSE: Photo gallery — scrollable cards; click a card to open photos in a lightbox.
 * RELATED: Home page (app/page.tsx); anchor id="gallery"; photos from lib/site.ts.
 *
 * TABLE OF CONTENTS
 * -----------------
 * 1. Types
 * 2. GalleryLightbox — full-screen photo viewer
 * 3. GalleryCard — card with inner scroll; opens lightbox on click
 * 4. Gallery — section header & card row
 * =====================================
 */

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { site } from "@/lib/site";

type GalleryCard = (typeof site.gallery.photos)[number];
type GalleryImage = GalleryCard["images"][number];
type LightboxState = { card: GalleryCard; index: number };

function imageCaption(image: GalleryImage) {
  return "caption" in image && image.caption ? image.caption : null;
}

/** How often each card's cover photo advances (10 minutes). */
const CARD_COVER_ROTATE_MS = 10 * 60 * 1000;

function nextCoverIndex(current: number, total: number) {
  if (total <= 1) return 0;
  let next = current;
  while (next === current) {
    next = Math.floor(Math.random() * total);
  }
  return next;
}

/**
 * GalleryLightbox — full-screen overlay; browse all card photos via arrows, swipe, or thumbnails.
 */
function GalleryLightbox({
  state,
  onClose,
  onChangeIndex,
}: {
  state: LightboxState;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
}) {
  const { card, index } = state;
  const image = card.images[index];
  const caption = imageCaption(image);
  const hasMultiple = card.images.length > 1;
  const touchStartX = useRef<number | null>(null);

  const goPrev = useCallback(() => {
    onChangeIndex((index - 1 + card.images.length) % card.images.length);
  }, [card.images.length, index, onChangeIndex]);

  const goNext = useCallback(() => {
    onChangeIndex((index + 1) % card.images.length);
  }, [card.images.length, index, onChangeIndex]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasMultiple) goPrev();
      if (e.key === "ArrowRight" && hasMultiple) goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [goNext, goPrev, hasMultiple, onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex flex-col bg-night/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${card.title} photos`}
      onClick={onClose}
    >
      {/* Header — compact, safe-area aware */}
      <div
        className="flex shrink-0 items-start justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-6"
        style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-base font-semibold text-white sm:text-lg">
            {card.title}
          </p>
          {card.location && (
            <p className="truncate text-xs text-ink-400 sm:text-sm">{card.location}</p>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {hasMultiple && (
            <span className="whitespace-nowrap rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-cab-light">
              {index + 1} / {card.images.length}
            </span>
          )}
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:h-10 sm:w-10"
            aria-label="Close gallery"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main image — fills available height, never overflows viewport */}
      <div
        className="relative flex min-h-0 flex-1 flex-col items-center justify-center px-3 py-3 sm:px-6 sm:py-4"
        onClick={(e) => e.stopPropagation()}
      >
          <div
            className="relative h-full w-full max-w-5xl flex-1"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null || !hasMultiple) return;
              const diff = e.changedTouches[0].clientX - touchStartX.current;
              if (diff > 50) goPrev();
              else if (diff < -50) goNext();
              touchStartX.current = null;
            }}
          >
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />

            {hasMultiple && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-0 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-cab/40 bg-cab text-night shadow-glow transition hover:bg-cab-light sm:flex md:h-11 md:w-11"
                  aria-label="Previous photo"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-0 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-cab/40 bg-cab text-night shadow-glow transition hover:bg-cab-light sm:flex md:h-11 md:w-11"
                  aria-label="Next photo"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
          {caption && (
            <p className="mt-3 shrink-0 text-center font-display text-sm font-semibold text-cab-light sm:text-base">
              {caption}
            </p>
          )}
        </div>

      {/* Footer — nav + thumbnails; scrolls on very small screens if needed */}
      {hasMultiple && (
        <div
          className="shrink-0 space-y-3 overflow-x-hidden border-t border-white/10 px-4 py-3 sm:px-6 sm:py-4"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex gap-2 sm:justify-center">
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 bg-white/5 px-3 py-2.5 text-sm font-semibold text-white transition hover:border-cab/40 hover:bg-white/10 sm:flex-none sm:px-5"
            >
              ← Prev
            </button>
            <button
              type="button"
              onClick={goNext}
              className="inline-flex flex-1 items-center justify-center rounded-full border border-cab/40 bg-cab px-3 py-2.5 text-sm font-semibold text-night shadow-glow transition hover:bg-cab-light sm:flex-none sm:px-5"
            >
              Next →
            </button>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin] [scrollbar-color:rgb(245_179_1/0.4)_transparent]">
            {card.images.map((thumb, i) => {
              const thumbCaption = imageCaption(thumb);
              return (
                <div key={thumb.src} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => onChangeIndex(i)}
                    className={`relative h-14 w-[4.5rem] overflow-hidden rounded-lg border-2 transition sm:h-16 sm:w-20 ${
                      i === index
                        ? "border-cab shadow-glow"
                        : "border-white/10 opacity-70 hover:border-white/30 hover:opacity-100"
                    }`}
                    aria-label={thumbCaption ?? `View photo ${i + 1}`}
                    aria-current={i === index ? "true" : undefined}
                  >
                    <Image
                      src={thumb.src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                  {thumbCaption && (
                    <p
                      className={`mt-1 max-w-[4.5rem] text-center text-[9px] leading-tight sm:max-w-20 sm:text-[10px] ${
                        i === index ? "font-semibold text-cab-light" : "text-ink-500"
                      }`}
                    >
                      {thumbCaption}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {!hasMultiple && (
        <div
          className="shrink-0 px-4 py-2 sm:px-6"
          style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
        />
      )}
    </div>,
    document.body,
  );
}

/**
 * GalleryCard — one destination card; cover photo shuffles every 10 minutes.
 */
function GalleryCard({
  card,
  onOpen,
}: {
  card: GalleryCard;
  onOpen: (card: GalleryCard, index: number) => void;
}) {
  const pointerStart = useRef<number | null>(null);
  const didDrag = useRef(false);
  const hasMultiple = card.images.length > 1;
  const [coverIndex, setCoverIndex] = useState(0);

  const coverImage = card.images[coverIndex];
  const coverCaption = imageCaption(coverImage);

  /* Auto-shuffle cover photo every 10 minutes */
  useEffect(() => {
    if (!hasMultiple) return;

    const timer = window.setInterval(() => {
      setCoverIndex((prev) => nextCoverIndex(prev, card.images.length));
    }, CARD_COVER_ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [card.images.length, hasMultiple]);

  const handleOpen = () => {
    if (didDrag.current) return;
    onOpen(card, coverIndex);
  };

  const handleSwipeEnd = (clientX: number) => {
    if (pointerStart.current === null || !hasMultiple) return;
    const diff = clientX - pointerStart.current;
    if (Math.abs(diff) > 50) {
      didDrag.current = true;
      setCoverIndex((prev) =>
        diff < 0
          ? (prev + 1) % card.images.length
          : (prev - 1 + card.images.length) % card.images.length,
      );
    }
    pointerStart.current = null;
  };

  return (
    <article
      className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-card transition hover:border-cab/30"
      onClick={handleOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleOpen();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Open ${card.title} photos`}
    >
      <div
        className="relative aspect-[4/3] shrink-0 overflow-hidden bg-night/80"
        onPointerDown={(e) => {
          pointerStart.current = e.clientX;
          didDrag.current = false;
        }}
        onPointerUp={(e) => handleSwipeEnd(e.clientX)}
        onPointerLeave={(e) => {
          if (e.buttons === 0) handleSwipeEnd(e.clientX);
        }}
        onTouchStart={(e) => {
          pointerStart.current = e.touches[0].clientX;
          didDrag.current = false;
        }}
        onTouchEnd={(e) => handleSwipeEnd(e.changedTouches[0].clientX)}
      >
        <Image
          key={coverImage.src}
          src={coverImage.src}
          alt={coverImage.alt}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="288px"
          draggable={false}
        />
        {hasMultiple && (
          <span className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-night/80 px-2 py-0.5 text-[10px] font-medium text-ink-200 backdrop-blur-sm">
            {card.images.length} photos
          </span>
        )}
      </div>
      <div className="flex h-10 shrink-0 items-center justify-center border-t border-white/5 bg-white/[0.02] px-3">
        <p
          className={`line-clamp-1 text-center text-xs font-medium ${
            coverCaption ? "text-cab-light" : "text-transparent"
          }`}
        >
          {coverCaption ?? "Placeholder"}
        </p>
      </div>
      <div className="flex h-[4.25rem] shrink-0 flex-col justify-center px-4 py-3">
        {card.title && (
          <p className="line-clamp-1 font-display text-sm font-semibold text-white">{card.title}</p>
        )}
        {card.location && (
          <p className="mt-0.5 line-clamp-1 text-xs text-ink-500">{card.location}</p>
        )}
      </div>
    </article>
  );
}

/**
 * Gallery — scroll target for #gallery links.
 * Maps over site.gallery.photos; add entries in lib/site.ts and files in public/gallery/.
 */
export function Gallery() {
  const { gallery } = site;
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const openLightbox = useCallback((card: GalleryCard, index: number) => {
    setLightbox({ card, index });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
  }, []);

  return (
    <section
      id="gallery"
      className="scroll-mt-24 border-t border-white/5 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* =====================================
            GALLERY — SECTION HEADER
            ===================================== */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-cab-light">
            {gallery.label}
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {gallery.title}
          </h2>
          <p className="mt-4 text-base text-ink-400 sm:text-lg">
            {gallery.description}
          </p>
        </div>

        {/* =====================================
            GALLERY — PHOTO CARDS (single row, scroll right)
            ===================================== */}
        <div className="mt-12 -mx-4 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 [scrollbar-width:thin] [scrollbar-color:rgb(245_179_1/0.4)_transparent]">
          <ul className="flex w-max gap-4">
            {gallery.photos.map((card) => (
              <li key={card.title} className="w-64 shrink-0 sm:w-72">
                <GalleryCard card={card} onOpen={openLightbox} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {lightbox && (
        <GalleryLightbox
          state={lightbox}
          onClose={closeLightbox}
          onChangeIndex={(index) =>
            setLightbox((prev) => (prev ? { ...prev, index } : null))
          }
        />
      )}
    </section>
  );
}
