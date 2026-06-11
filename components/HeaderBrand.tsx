"use client";

/**
 * HeaderBrand — logo + site name; name collapses on scroll (logo only while scrolled).
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

const SCROLL_THRESHOLD = 12;

export function HeaderBrand() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href="/"
      className="inline-flex min-w-0 shrink-0 items-center justify-center gap-1 font-display font-semibold tracking-tight text-white md:justify-start sm:gap-3 lg:gap-3.5"
    >
      <Image
        src={site.logoSrc}
        alt=""
        width={72}
        height={72}
        className="h-12 w-12 shrink-0 rounded-full object-cover sm:h-16 sm:w-16 lg:h-[72px] lg:w-[72px]"
        priority
      />
      <span
        className={`overflow-hidden whitespace-nowrap text-lg transition-[max-width,opacity,margin] duration-300 ease-out sm:text-2xl lg:text-4xl ${
          scrolled ? "max-w-0 opacity-0" : "max-w-[16rem] opacity-100 sm:max-w-[21rem] lg:max-w-[26rem]"
        }`}
        aria-hidden={scrolled}
      >
        {site.name.replace(/\s*Booking$/i, "")}{" "}
        <span className="text-cab">Booking</span>
      </span>
    </Link>
  );
}
