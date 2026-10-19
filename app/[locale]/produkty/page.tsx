import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Catalog } from "@/components/sections/Catalog";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { Section } from "@/components/ui/Section";
import { catalogProducts } from "@/content/products";
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
    <>
      <EditorialHero
        variant="catalog"
        eyebrow={dict.style03.materialsLabel}
        title={dict.style03.catalogTitle}
        intro={dict.style03.catalogIntro}
        image="mascots/radarik-books"
      />
      <Section className="pt-0">
        <Suspense>
          <Catalog
            products={catalogProducts}
            locale={locale}
            dict={dict}
            title={dict.catalog.title}
          />
        </Suspense>
      </Section>
    </>
  );
}
