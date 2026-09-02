"use client";

import type { ReactNode } from "react";

export function StickyCta({ children }: { children: ReactNode }) {
  return (
    <div className="md:static sticky bottom-0 z-30 -mx-5 md:mx-0 border-t border-border bg-bg/95 px-5 py-3 md:border-0 md:bg-transparent md:p-0">
      {children}
    </div>
  );
}
