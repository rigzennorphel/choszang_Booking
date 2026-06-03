/**
 * =====================================
 * FILE: tailwind.config.ts
 * PURPOSE: Tailwind CSS theme — colors, fonts, backgrounds, shadows, animations.
 * RELATED: Used by all components and app/globals.css; font vars set in app/layout.tsx.
 *
 * TABLE OF CONTENTS
 * -----------------
 * 1. content paths (where to scan for class names)
 * 2. theme.extend — fonts, colors, backgrounds, shadows, keyframes
 * =====================================
 */

import type { Config } from "tailwindcss";

const config: Config = {
  /* =====================================
     CONTENT PATHS
     Files Tailwind scans for utility class usage
     ===================================== */
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      /* =====================================
         TYPOGRAPHY
         Maps to CSS variables from next/font in layout
         ===================================== */
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },

      /* =====================================
         BRAND COLORS
         ink = neutrals, cab = accent yellow, night = page background
         ===================================== */
      colors: {
        ink: {
          50: "#f7f8fa",
          100: "#e8ebf0",
          200: "#cfd6e2",
          300: "#a8b4c9",
          400: "#7c8cab",
          500: "#5c6b89",
          600: "#495571",
          700: "#3c455c",
          800: "#343b4d",
          900: "#1e2330",
          950: "#12151c",
        },
        cab: {
          DEFAULT: "#f5b301",
          dark: "#d99a00",
          light: "#ffd54a",
        },
        night: "#0a0e17",
      },

      /* =====================================
         BACKGROUNDS & EFFECTS
         ===================================== */
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgb(10 14 23)), radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.06) 1px, transparent 0)",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgb(245 179 1 / 0.35), transparent)",
      },
      boxShadow: {
        card: "0 0 0 1px rgb(255 255 255 / 0.06), 0 24px 48px -12px rgb(0 0 0 / 0.45)",
        glow: "0 0 60px -12px rgb(245 179 1 / 0.45)",
      },

      /* =====================================
         ANIMATIONS
         ===================================== */
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
