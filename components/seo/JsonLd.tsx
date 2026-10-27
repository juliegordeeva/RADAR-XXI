import { getDictionary } from "@/lib/dictionary";
import { faqItems, type FaqItem } from "@/content/faq";
import { pageUrl, site } from "@/lib/site";
import { products } from "@/content/products";
import { loc } from "@/lib/age";
import type { Locale } from "@/lib/i18n";

export function OrganizationJsonLd({ locale }: { locale: Locale }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RADAR KIDS",
    url: pageUrl(locale, "/"),
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

export function FaqJsonLd({
  locale,
  items = faqItems,
}: {
  locale: Locale;
  items?: FaqItem[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
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
    url: pageUrl(locale, "/podhod"),
    publisher: { "@type": "Organization", name: "RADAR KIDS" },
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
    description:
      product.slug === "kartochki-bezopasnosti"
        ? getDictionary(locale).redesign.safetyDescription
        : loc(product.tagline, locale),
    url: pageUrl(locale, `/produkty/${product.slug}`),
    brand: { "@type": "Brand", name: "RADAR KIDS" },
    additionalProperty: product.availability === "available"
      ? [
          { "@type": "PropertyValue", name: locale === "ru" ? "Формат" : "Format", value: "PDF" },
          { "@type": "PropertyValue", name: locale === "ru" ? "Цена" : "Price", value: product.price, unitText: "RUB" },
        ]
      : [
          { "@type": "PropertyValue", name: locale === "ru" ? "Статус" : "Status", value: getDictionary(locale).catalog.waitlist },
        ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
