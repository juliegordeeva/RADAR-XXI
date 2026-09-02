import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";
import { localePath } from "@/lib/locale-path";

export function pageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}${localePath(locale, path)}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ru: `${siteUrl}${localePath("ru", path)}`,
        en: `${siteUrl}${localePath("en", path)}`,
        "x-default": `${siteUrl}${localePath("ru", path)}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "RADAR XXI Kids",
      locale: locale === "ru" ? "ru_RU" : "en_GB",
      type: "website",
    },
  };
}
