import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Catalog } from "@/components/sections/Catalog";
import { Section } from "@/components/ui/Section";
import { products } from "@/content/products";
import { getDictionary } from "@/lib/dictionary";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    path: "/produkty",
    title: dict.meta.productsTitle,
    description: dict.meta.productsDescription,
  });
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <Section className="md:pt-20">
      <p className="text-text-muted mb-6 max-w-[65ch]">{dict.productsPage.intro}</p>
      <Suspense>
        <Catalog
          products={products}
          locale={locale}
          dict={dict}
          title={dict.catalog.title}
        />
      </Suspense>
    </Section>
  );
}
