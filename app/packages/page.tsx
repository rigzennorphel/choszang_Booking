/**
 * =====================================
 * FILE: app/packages/page.tsx
 * PURPOSE: Packages route — redirects to home #packages section.
 * RELATED: Route "/packages" — same content lives on home page Packages section.
 * =====================================
 */

import { redirect } from "next/navigation";

export default function PackagesPage() {
  redirect("/#packages");
}
