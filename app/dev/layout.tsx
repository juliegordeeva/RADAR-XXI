import { rubik, notoSans } from "@/lib/fonts";
import type { ReactNode } from "react";
import "../globals.css";

export default function DevLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={`${rubik.variable} ${notoSans.variable}`}>
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  );
}
