import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { SideNav } from "@/components/layout/SideNav";
import { BrandArt } from "@/components/ui/BrandArt";
import { StorySection } from "@/components/sections/StorySection";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Catalog } from "@/components/sections/Catalog";
import { SafetySample } from "@/components/sections/SafetySample";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { OrganizationJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { catalogProducts } from "@/content/products";
import { pilotPath } from "@/content/internships";
import { faqItems } from "@/content/faq";
import { getDictionary } from "@/lib/dictionary";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { localePath } from "@/lib/locale-path";

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

// Временная витрина для первого просмотра. Полный ассортимент остаётся в каталоге.
const homeSlugs = [
  "kartochki-bezopasnosti",
  "advent-4-6",
  "advent-7-9",
  "kvest-igrushechnyy-gorod",
  "kvest-missiya-v-magazine",
  "kvest-organizuem-sobytie",
];
const homeProducts = homeSlugs.flatMap((slug) =>
  catalogProducts.filter((product) => product.slug === slug),
);

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const t = dict.redesign;
  const v = dict.style03;
  const ages = ["4-6", "7-9", "10-12", "13-16"];
  return (
    <>
      <OrganizationJsonLd locale={locale} />
      <FaqJsonLd locale={locale} />
      <Section className="editorial-hero home-cover home-university">
        <SideNav locale={locale} dict={dict} embedded />
        <div className="editorial-hero-grid">
          <div className="editorial-hero-copy home-welcome-heading">
            <p className="editorial-label">{v.homeLabel}</p>
            <h1>{dict.hero.title}</h1>
            <p className="home-welcome-lead">{dict.hero.paragraphs[0]}</p>
          </div>
          <div className="home-welcome-body">
            <div className="home-university-intro">
              {dict.hero.paragraphs.slice(1).map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="home-welcome-action">
              <Button href={localePath(locale, pilotPath)}>
                {dict.hero.cta} →
              </Button>
            </div>
          </div>
          <div className="home-welcome-art">
            <span className="home-welcome-orbit" aria-hidden="true" />
            <BrandArt
              name="mascots/radarik-wave"
              alt={dict.hero.mascotAlt}
              priority
              className="home-welcome-mascot"
            />
            <BrandArt
              name="scenes/family-walk"
              alt={dict.hero.familyAlt}
              priority
              className="home-welcome-family"
            />
          </div>
        </div>
      </Section>
      <Section className="university-pain">
        <h2 className="section-heading">{dict.pain.title}</h2>
        <ul className="pain-list">
          {dict.pain.items.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="mt-6">{dict.pain.footer}</p>
      </Section>
      <Section id="ages" alt>
        <p className="editorial-label">{v.ageLabel}</p>
        <h2 className="section-heading">{dict.university.internshipsTitle}</h2>
        <div className="age-paths mt-10">
          {ages.map((age, i) => {
            const content = (
              <>
                <span className="editorial-number">0{i + 1}</span>
                <h3>{age.replace("-", "–")}</h3>
                <p className="material-summary mt-2">
                  {age === "7-9" ? dict.university.pilotLabel : dict.university.soon}
                </p>
                <BrandArt name={`age/age-${age}`} />
              </>
            );
            return age === "7-9" ? (
              <Link key={age} href={localePath(locale, pilotPath)} className="age-path">
                {content}
              </Link>
            ) : (
              <article key={age} className="age-path">{content}</article>
            );
          })}
        </div>
      </Section>
      <Section className="home-materials">
        <p className="editorial-label">{v.materialsLabel}</p>
        <h2 className="section-heading">{dict.what.title}</h2>
        <div className="home-product-types">
          {dict.what.cards.map((card) => (
            <article key={card.title}>
              <h3>{card.title}</h3>
              <p className="mt-3">{card.text}</p>
            </article>
          ))}
        </div>
        <div className="home-materials-grid">
          <article className="editorial-feature home-safety-feature">
            <h2 className="section-heading">
              {locale === "ru" ? "Карточки безопасности" : "Safety cards"}
            </h2>
            <p>{t.safetyDescription} {dict.catalog.waitlist}.</p>
            <BrandArt name="scenes/store-help" alt={v.safetyScene} />
            <Button
              href={localePath(locale, "/produkty/kartochki-bezopasnosti")}
            >
              {t.viewSafety} →
            </Button>
          </article>
          <article className="editorial-feature home-family-feature">
            <h2 className="section-heading">{v.familyTitle}</h2>
            <p>{v.familyText}</p>
            <BrandArt name="scenes/family-table" />
            <Button href={localePath(locale, "/produkty")}>
              {v.familyAction} →
            </Button>
          </article>
        </div>
      </Section>
      <Section id="catalog" alt>
        <Suspense fallback={<h2>{t.catalogTitle}</h2>}>
          <Catalog
            products={homeProducts}
            locale={locale}
            dict={dict}
            title={t.catalogTitle}
            compact
          />
        </Suspense>
      </Section>
      <Section id="sample" className="bg-sky">
        <p className="eyebrow mb-3">{t.sampleEyebrow}</p>
        <h2 className="section-heading">{t.sampleTitle}</h2>
        <p className="mb-8 max-w-[65ch] text-text-muted">{t.sampleIntro}</p>
        <SafetySample locale={locale} dict={dict} />
      </Section>
      <Section>
        <h2 className="section-heading">{dict.how.title}</h2>
        <ol className="steps-list journey-steps mt-8">
          {dict.how.steps.map((step) => (
            <li key={step}>
              <p>{step}</p>
            </li>
          ))}
        </ol>
        <Link
          href={localePath(locale, "/universitet")}
          className="text-link mt-6"
        >
          {dict.journey.enter} →
        </Link>
      </Section>
      <StorySection
        title={dict.memo.title}
        eyebrow={v.approachLabel}
        image="scenes/child-builds"
        imageAlt={t.heroAlt}
        alt
      >
        {dict.memo.paragraphs.map((line) => (
          <p key={line}>{line}</p>
        ))}
        <Link href={localePath(locale, "/podhod")} className="text-link">
          {dict.memo.more}
        </Link>
      </StorySection>
      <Section>
        <h2 className="section-heading mb-8">{t.teamTitle}</h2>
        <TeamGrid locale={locale} />
        <Link href={localePath(locale, "/o-nas")} className="text-link mt-6">
          {t.teamLink} →
        </Link>
      </Section>
      <Section className="bg-surface">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <h2 className="section-heading">{t.faqTitle}</h2>
          <div className="faq-list">
            <FaqAccordion items={faqItems} locale={locale} />
          </div>
        </div>
      </Section>
      <Section id="lead">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="section-heading mb-3">{t.finishTitle}</h2>
            <p className="max-w-[55ch] text-text-muted">{t.finishText}</p>
          </div>
          <Button href="#sample">{t.finishAction}</Button>
        </div>
      </Section>
    </>
  );
}
