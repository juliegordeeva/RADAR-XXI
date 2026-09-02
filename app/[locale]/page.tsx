import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { Catalog } from "@/components/sections/Catalog";
import { SampleDay } from "@/components/sections/SampleDay";
import { Memorandum } from "@/components/sections/Memorandum";
import { Reviews } from "@/components/sections/Reviews";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { SubscribeForm } from "@/components/forms/SubscribeForm";
import { OrganizationJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { products } from "@/content/products";
import { faqItems } from "@/content/faq";
import { getDictionary } from "@/lib/dictionary";
import { isLocale, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { sampleAdvent, sampleSafety } from "@/content/samples";
import { ProductPhoto } from "@/components/ui/ProductPhoto";

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
    path: "/",
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);

  return (
    <>
      <OrganizationJsonLd locale={locale} />
      <FaqJsonLd locale={locale} />
      <Section className="md:pt-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[15px] text-text-muted mb-4">{dict.hero.eyebrow}</p>
            <h1 className="font-heading text-[34px] leading-[1.15] md:text-[56px] md:leading-[1.1] max-w-[18ch]">
              {dict.hero.title}
            </h1>
            <p className="mt-6 max-w-[65ch] text-text-muted">{dict.hero.subtitle}</p>
            <div className="mt-8">
              <Button href="#catalog">{dict.hero.cta}</Button>
            </div>
            <p className="mt-4 text-[15px] text-text-muted max-w-[65ch]">
              <a href="#lead" className="underline underline-offset-2">
                {dict.hero.leadLink}
              </a>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 items-start">
            <ProductPhoto
              src={sampleSafety.image}
              alt={dict.sample.cardAlt}
              priority
            />
            <ProductPhoto
              src={sampleAdvent.image}
              alt={dict.sample.adventAlt}
              className="mt-8"
            />
          </div>
        </div>
      </Section>

      <Section alt>
        <h2 className="font-heading text-[28px] md:text-[40px] leading-tight mb-8">
          {dict.pain.title}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {dict.pain.items.map((item) => (
            <Card key={item}>
              <p>{item}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 max-w-[65ch]">{dict.pain.footer}</p>
      </Section>

      <Memorandum locale={locale} dict={dict} />

      <Section>
        <h2 className="font-heading text-[28px] md:text-[40px] leading-tight mb-8 max-w-[20ch] md:max-w-[18ch]">
          {dict.what.title}
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {dict.what.cards.map((card) => (
            <Card key={card.title} className="space-y-3">
              <h3 className="font-heading text-[20px] md:text-[24px]">{card.title}</h3>
              <p className="text-text-muted">{card.text}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-text-muted">{dict.what.note}</p>
      </Section>

      <Section alt>
        <h2 className="font-heading text-[28px] md:text-[40px] leading-tight mb-8">
          {dict.how.title}
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {dict.how.steps.map((step, index) => (
            <Card key={step} className="space-y-3">
              <p className="font-heading text-[40px] text-deep leading-none">{index + 1}</p>
              <p>{step}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="catalog" alt>
        <Suspense>
          <Catalog
            products={products}
            locale={locale}
            dict={dict}
            title={dict.catalog.title}
          />
        </Suspense>
      </Section>

      <Section>
        <SampleDay locale={locale} dict={dict} />
      </Section>

      <Reviews locale={locale} dict={dict} />

      <Section alt>
        <h2 className="font-heading text-[28px] md:text-[40px] leading-tight mb-6 max-w-[20ch]">
          {dict.why.title}
        </h2>
        <p className="max-w-[65ch]">{dict.why.text}</p>
      </Section>

      <Section>
        <h2 className="font-heading text-[28px] md:text-[40px] leading-tight mb-8">
          {dict.team.title}
        </h2>
        <TeamGrid locale={locale} />
      </Section>

      <Section id="lead" alt>
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="font-heading text-[28px] md:text-[40px] leading-tight mb-4">
              {dict.lead.title}
            </h2>
            <p className="max-w-[65ch] text-text-muted mb-6">{dict.lead.text}</p>
            <div className="grid grid-cols-2 gap-3">
              <ProductPhoto src={sampleSafety.image} alt={dict.sample.cardAlt} />
              <ProductPhoto src={sampleAdvent.image} alt={dict.sample.adventAlt} />
            </div>
          </div>
          <Card>
            <SubscribeForm locale={locale} dict={dict} />
          </Card>
        </div>
      </Section>

      <Section>
        <h2 className="font-heading text-[28px] md:text-[40px] leading-tight mb-8">
          {dict.faq.title}
        </h2>
        <FaqAccordion items={faqItems} locale={locale} />
      </Section>
    </>
  );
}
