import { Inter, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import "../globals.css";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  weight: ["700"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export default function DevLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={`${manrope.variable} ${inter.variable}`}>
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  );
}
