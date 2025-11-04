"use client";

import { createPortal } from "react-dom";

export default function Portal({ children }: { children: React.ReactNode }) {
  if (typeof window === "undefined") return null; // SSR safety

  return createPortal(children, document.body);
}
