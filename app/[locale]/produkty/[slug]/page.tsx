import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProduct, getRelated, products } from "@/content/products";
import { getDictionary } from "@/lib/dictionary";
import { isLocale, locales } from "@/lib/i18n";
import { loc } from "@/lib/age";
import { pageMetadata } from "@/lib/metadata";
import { Badge } from "@/components/ui/Badge";
import { CompetencyTag } from "@/components/ui/CompetencyTag";
import { CompetencyCard } from "@/components/ui/CompetencyCard";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { ProductPhoto, hasProductPhoto } from "@/components/ui/ProductPhoto";
import { ProductCard } from "@/components/sections/ProductCard";
import { LeadForm } from "@/components/forms/LeadForm";
import { TelegramCta } from "@/components/ui/TelegramCta";
import { StickyCta } from "@/components/forms/StickyCta";
import { ProductJsonLd } from "@/components/seo/JsonLd";
import { sampleSafety } from "@/content/samples";

export const dynamic = "force-static";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    products.map((product) => ({ locale, slug: product.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const product = getProduct(slug);
  const dict = getDictionary(locale);
  if (!product) return {};
  return pageMetadata({
    locale,
    path: `/produkty/${slug}`,
    title: `${loc(product.title, locale)} ${dict.meta.productTitleSuffix}`,
    description: loc(product.tagline, locale),
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const product = getProduct(slug);
  if (!product) notFound();
  const dict = getDictionary(locale);
  const related = getRelated(product);
  const priceLabel =
    product.price === null
      ? dict.catalog.priceAsk
      : dict.catalog.priceFrom.replace("{price}", String(product.price));

  return (
    <>
      <ProductJsonLd locale={locale} slug={product.slug} />
      <Section className="md:pt-20">
        <div className="flex flex-wrap gap-2 mb-5">
          {product.ageGroups.map((age) => (
            <Badge key={age} age={age} locale={locale} />
          ))}
          {product.competencies.map((key) => (
            <CompetencyTag key={key} competencyKey={key} locale={locale} />
          ))}
        </div>
        <h1 className="font-heading text-[34px] leading-[1.15] md:text-[56px] md:leading-[1.1] max-w-[18ch]">
          {loc(product.title, locale)}
        </h1>
        <p className="mt-5 max-w-[65ch] text-text-muted">{loc(product.tagline, locale)}</p>
        <div className="mt-10 max-w-md">
          {hasProductPhoto(product.image) ? (
            <ProductPhoto src={product.image} alt={loc(product.title, locale)} />
          ) : (
            <>
              <ProductVisual
                kind={product.kind}
                title={loc(product.title, locale)}
              />
              <p className="mt-3 text-[15px] text-text-muted">TODO: фото набора</p>
            </>
          )}
        </div>
      </Section>

      <Section alt>
        <h2 className="font-heading text-[28px] md:text-[40px] mb-6">
          {dict.productPage.abilities}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {product.competencies.map((key) => (
            <CompetencyCard
              key={key}
              competencyKey={key}
              locale={locale}
              linked={false}
            />
          ))}
        </div>
        {product.kind === "cards" && (
          <p className="mt-8 max-w-[65ch]">{dict.productPage.safetyFrame}</p>
        )}
      </Section>

      <Section>
        <h2 className="font-heading text-[28px] md:text-[40px] mb-4">{dict.productPage.audience}</h2>
        <p className="max-w-[65ch]">{loc(product.audience, locale)}</p>
      </Section>

      <Section>
        <h2 className="font-heading text-[28px] md:text-[40px] mb-6">{dict.productPage.inside}</h2>
        <ul className="space-y-3 max-w-[65ch]">
          {product.composition.map((item) => (
            <li key={item.ru} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.7em] before:size-1.5 before:rounded-full before:bg-deep">
              {loc(item, locale)}
            </li>
          ))}
        </ul>
      </Section>

      <Section alt>
        <h2 className="font-heading text-[28px] md:text-[40px] mb-6">{dict.productPage.how}</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {product.howTo.map((step, index) => (
            <Card key={step.ru} className="space-y-3">
              <p className="font-heading text-[40px] text-deep leading-none">{index + 1}</p>
              <p>{loc(step, locale)}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-heading text-[28px] md:text-[40px] mb-4">{dict.productPage.sample}</h2>
        <Card className="max-w-3xl space-y-3">
          <h3 className="font-heading text-[20px] md:text-[24px]">
            {loc(product.sampleTitle, locale)}
          </h3>
          <p className="max-w-[65ch]">{loc(product.sampleBody, locale)}</p>
        </Card>
        {product.kind === "cards" && (
          <div className="mt-8">
            <p className="font-medium mb-4">{dict.sample.stepsTitle}</p>
            <ol className="grid gap-3 md:grid-cols-4">
              {dict.productPage.safetySteps.map((step, index) => (
                <li key={step} className="rounded-[16px] border border-border bg-surface p-5">
                  <p className="font-heading text-[24px] text-deep">{index + 1}</p>
                  <p className="mt-2">{step}</p>
                </li>
              ))}
            </ol>
            <p className="mt-5 max-w-[65ch] text-text-muted">
              «{loc(sampleSafety.phrase, locale)}»
            </p>
          </div>
        )}
      </Section>

      <Section alt>
        <h2 className="font-heading text-[28px] md:text-[40px] mb-4">{dict.productPage.result}</h2>
        <p className="max-w-[65ch]">{loc(product.result, locale)}</p>
      </Section>

      <Section>
        <h2 className="font-heading text-[28px] md:text-[40px] mb-4">{dict.productPage.price}</h2>
        <p className="font-medium">{priceLabel}</p>
        <p className="mt-3 max-w-[65ch] text-text-muted">{loc(product.delivery, locale)}</p>
        <p className="mt-3 text-[15px] text-text-muted">{loc(product.format, locale)}</p>
        <div id="zayavka" className="mt-10 max-w-xl space-y-6">
          <h3 className="font-heading text-[20px] md:text-[24px]">
            {dict.productPage.request}
          </h3>
          <StickyCta>
            <TelegramCta dict={dict} className="w-full" />
          </StickyCta>
          <LeadForm locale={locale} dict={dict} product={product.slug} compact />
        </div>
      </Section>

      {related.length > 0 && (
        <Section alt>
          <h2 className="font-heading text-[28px] md:text-[40px] mb-8">
            {dict.productPage.related}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} locale={locale} dict={dict} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
