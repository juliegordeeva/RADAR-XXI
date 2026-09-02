import type { ReactNode } from "react";
import { Inter, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getDictionary } from "@/lib/dictionary";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";
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

export const dynamic = "force-static";

export const metadata = {
  metadataBase: new URL(getSiteUrl()),
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);

  return (
    <html lang={locale} className={`${manrope.variable} ${inter.variable}`}>
      <body className="min-h-dvh flex flex-col antialiased">
        <Header locale={locale as Locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale as Locale} dict={dict} />
      </body>
    </html>
  );
}
