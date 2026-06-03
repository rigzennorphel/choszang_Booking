/**
 * =====================================
 * FILE: components/BrandWordmark.tsx
 * PURPOSE: Reusable logo text — splits brand name into normal + accent segments.
 * RELATED: Header and Footer; styling driven by site.wordmark in lib/site.ts.
 * =====================================
 */

import { site } from "@/lib/site";

type Props = { className?: string };

/**
 * BrandWordmark — renders site.wordmark as inline spans.
 * Highlight segment uses cab accent color (e.g. "Ladakh " + "Booking").
 */
export function BrandWordmark({ className }: Props) {
  const { before, highlight, after } = site.wordmark;
  return (
    <span className={className}>
      {before}
      <span className="text-cab">{highlight}</span>
      {after}
    </span>
  );
}
