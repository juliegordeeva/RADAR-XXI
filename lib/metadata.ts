import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { pageUrl } from "@/lib/site";

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
  const canonical = pageUrl(locale, path);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        ru: pageUrl("ru", path),
        en: pageUrl("en", path),
        "x-default": pageUrl("ru", path),
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "RADAR KIDS",
      locale: locale === "ru" ? "ru_RU" : "en_GB",
      type: "website",
    },
    twitter: { title, description },
  };
}
