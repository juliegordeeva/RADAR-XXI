import type { MetadataRoute } from "next";
import { products } from "@/content/products";
import { locales } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const pages = [
    "",
    "/produkty",
    "/podhod",
    "/o-nas",
    "/dlya-biznesa",
    "/kontakty",
    "/politika",
    ...products.map((product) => `/produkty/${product.slug}`),
  ];

  return locales.flatMap((locale) =>
    pages.map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
  );
}
