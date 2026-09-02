import { faqItems } from "@/content/faq";
import { getSiteUrl, site } from "@/lib/site";
import { products } from "@/content/products";
import { loc } from "@/lib/age";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";

export function OrganizationJsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RADAR XXI Kids",
    url: `${getSiteUrl()}${localePath(locale, "/")}`,
    telephone: ["+7 916 637 49 86", "+33 66 24 334 24"],
    sameAs: [site.telegram],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqJsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: loc(item.question, locale),
      acceptedAnswer: {
        "@type": "Answer",
        text: loc(item.answer, locale),
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleJsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      locale === "ru"
        ? "Универсальные компетенции у детей: что это и зачем"
        : "Universal competencies in children: what they are",
    url: `${getSiteUrl()}${localePath(locale, "/podhod")}`,
    publisher: { "@type": "Organization", name: "RADAR XXI Kids" },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProductJsonLd({
  locale,
  slug,
}: {
  locale: Locale;
  slug: string;
}) {
  const product = products.find((item) => item.slug === slug);
  if (!product) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: loc(product.title, locale),
    description: loc(product.tagline, locale),
    url: `${getSiteUrl()}${localePath(locale, `/produkty/${product.slug}`)}`,
    brand: { "@type": "Brand", name: "RADAR XXI Kids" },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
