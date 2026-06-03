/**
 * =====================================
 * FILE: next.config.ts
 * PURPOSE: Next.js framework configuration for build and dev server.
 * RELATED: Project-wide — affects all routes and React runtime behavior.
 * =====================================
 */

import type { NextConfig } from "next";

/** nextConfig — exported settings read by the Next.js CLI */
const nextConfig: NextConfig = {
  /** Enables extra runtime checks for unsafe lifecycles and side effects */
  reactStrictMode: true,
};

export default nextConfig;
