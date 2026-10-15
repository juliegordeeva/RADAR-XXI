import type { ReactNode } from "react";
import { rubik, notoSans } from "@/lib/fonts";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getDictionary } from "@/lib/dictionary";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";
import "../globals.css";

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
    <html lang={locale} className={`${rubik.variable} ${notoSans.variable}`}>
      <body className="style03 min-h-dvh flex flex-col antialiased">
        <Header locale={locale as Locale} dict={dict} />
        <a href="#main-content" className="skip-link">
          {locale === "ru" ? "Перейти к содержанию" : "Skip to content"}
        </a>
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer locale={locale as Locale} dict={dict} />
      </body>
    </html>
  );
}
