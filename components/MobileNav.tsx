"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { site } from "@/lib/site";

type NavItem = { href: string; label: string };

export function MobileNav({ nav }: { nav: NavItem[] }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const closeMenu = () => {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  useEffect(() => {
    const details = detailsRef.current;
    if (!details) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (details.open && !details.contains(event.target as Node)) {
        details.open = false;
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <details ref={detailsRef} className="relative md:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-center rounded-full border border-white/10 bg-white/5 p-2.5 text-white marker:hidden [&::-webkit-details-marker]:hidden">
        <span className="sr-only">Open menu</span>
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </summary>
      <div className="absolute right-0 top-full z-50 mt-2 w-52 overflow-hidden rounded-2xl border border-white/10 bg-night/95 py-2 shadow-card backdrop-blur-xl">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeMenu}
            className="block px-4 py-2.5 text-base text-ink-200 transition hover:bg-white/5 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
        <a
          href={`tel:${site.phoneTel}`}
          onClick={closeMenu}
          className="block border-t border-white/10 px-4 py-2.5 text-base text-cab-light"
        >
          Call {site.phoneDisplay}
        </a>
      </div>
    </details>
  );
}
