"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { site } from "@/lib/site";

type NavItem = { href: string; label: string };

export function MobileNav({ nav }: { nav: NavItem[] }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuTop, setMenuTop] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  const closeMenu = () => {
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  const updateMenuPosition = () => {
    const details = detailsRef.current;
    const summary = summaryRef.current;
    if (!details?.open || !summary) {
      setMenuTop(null);
      return;
    }
    const rect = summary.getBoundingClientRect();
    setMenuTop(rect.bottom + 8);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const details = detailsRef.current;
    if (!details) return;

    const handleToggle = () => updateMenuPosition();

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!details.open) return;
      if (details.contains(target)) return;
      if (menuRef.current?.contains(target)) return;
      details.open = false;
    };

    details.addEventListener("toggle", handleToggle);
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", updateMenuPosition);
    window.addEventListener("scroll", updateMenuPosition, true);

    return () => {
      details.removeEventListener("toggle", handleToggle);
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", updateMenuPosition);
      window.removeEventListener("scroll", updateMenuPosition, true);
    };
  }, []);

  const menu =
    menuTop !== null ? (
      <div
        ref={menuRef}
        role="menu"
        className="fixed left-1/2 z-[200] w-[min(18rem,calc(100vw-2rem))] -translate-x-1/2 overflow-y-auto rounded-2xl border border-white/10 bg-night/95 py-2 text-center shadow-card backdrop-blur-xl"
        style={{
          top: menuTop,
          maxHeight: `calc(100dvh - ${menuTop}px - 0.75rem)`,
        }}
      >
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeMenu}
            role="menuitem"
            className="block px-4 py-2.5 text-center text-base text-ink-200 transition hover:bg-white/5 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
        <a
          href={`tel:${site.phoneTel}`}
          onClick={closeMenu}
          role="menuitem"
          className="block break-words border-t border-white/10 px-4 py-2.5 text-center text-sm text-cab-light sm:text-base"
        >
          Call {site.phoneDisplay}
        </a>
      </div>
    ) : null;

  return (
    <details ref={detailsRef} className="relative md:hidden">
      <summary
        ref={summaryRef}
        className="flex cursor-pointer list-none items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white marker:hidden sm:p-3.5 [&::-webkit-details-marker]:hidden"
      >
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
      {mounted && menu ? createPortal(menu, document.body) : null}
    </details>
  );
}
