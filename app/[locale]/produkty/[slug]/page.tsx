import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  getProduct,
  getRelated,
  products,
  forCatalog,
} from "@/content/products";
import { faqItems } from "@/content/faq";
import { getDictionary } from "@/lib/dictionary";
import { isLocale, locales } from "@/lib/i18n";
import { loc } from "@/lib/age";
import { pageMetadata } from "@/lib/metadata";
import { localePath } from "@/lib/locale-path";
import { site } from "@/lib/site";
import { Badge } from "@/components/ui/Badge";
import { SkillTag } from "@/components/ui/SkillTag";
import { skillByKey, sectorByKey, foundations } from "@/content/competencies";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ProductHeading } from "@/components/ui/ProductHeading";
import { BrandArt } from "@/components/ui/BrandArt";
import { CalendarPreview } from "@/components/ui/CalendarPreview";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { StorySection } from "@/components/sections/StorySection";
import { ProductCard } from "@/components/sections/ProductCard";
import { SafetySample } from "@/components/sections/SafetySample";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ProductJsonLd } from "@/components/seo/JsonLd";
import { visibleItems, visibleText } from "@/lib/placeholder";

export const dynamic = "force-static";
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    products
      .filter((product) => !product.comingSoon)
      .map((product) => ({ locale, slug: product.slug })),
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
  if (!product || product.comingSoon) return {};
  const dict = getDictionary(locale);
  const seo = product.seo?.[locale];
  return pageMetadata({
    locale,
    path: `/produkty/${slug}`,
    title:
      seo?.title ?? `${loc(product.title, locale)} ${dict.meta.productTitleSuffix}`,
    description:
      seo?.description ??
      (slug === "kartochki-bezopasnosti"
        ? dict.redesign.safetyDescription
        : loc(product.tagline, locale)),
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
  if (!product || product.comingSoon) notFound();
  const dict = getDictionary(locale);
  const t = dict.redesign;
  const v = dict.style03;
  const safety = slug === "kartochki-bezopasnosti";
  const calendar = slug === "kalendar-32-dnya";
  const diary = slug === "ezhednevnik-tri-roli";
  const related = getRelated(product)
    .filter(
      (item) =>
        item.inMainCatalog !== false &&
        !item.comingSoon &&
        item.ageGroups.includes("parents") ===
          product.ageGroups.includes("parents"),
    )
    .slice(0, 3)
    .map(forCatalog);
  const composition = visibleItems(product.composition);
  const howTo = visibleItems(product.howTo);
  const author = visibleText(product.author, locale);
  const sampleTitle = visibleText(product.sampleTitle, locale);
  const sampleBody = visibleText(product.sampleBody, locale);
  const price =
    product.price === null
      ? dict.catalog.priceAsk
      : dict.catalog.priceFrom.replace("{price}", String(product.price));
  const action =
    product.developmentStatus === "draft"
      ? dict.journey.enter
      : safety
        ? t.priceAction
        : t.productAction;
  const childAge = product.ageGroups.find((age) => age !== "parents");
  const universityHref = localePath(
    locale,
    `/universitet?from=product${childAge ? `&program=intro-${childAge}` : ""}`,
  );
  const productTarget =
    product.developmentStatus === "draft" ? universityHref : site.telegram;
  const image = safety
    ? "scenes/store-help"
    : calendar
      ? "scenes/parent-reflection"
      : diary
        ? "scenes/parents-planning"
        : product.ageGroups.includes("13-16")
          ? "age/age-13-16"
          : product.ageGroups.includes("10-12")
            ? "age/age-10-12"
            : "scenes/family-table";
  return (
    <>
      <ProductJsonLd locale={locale} slug={slug} />
      <EditorialHero
        variant={
          safety ? "safety" : calendar ? "calendar" : diary ? "diary" : "scene"
        }
        artwork={
          diary ? (
            <figure className="hero-product">
              <BrandArt name="illustrative-products/diary-open" />
              <figcaption className="illustration-caption">
                {v.diaryCaption}
              </figcaption>
            </figure>
          ) : undefined
        }
        eyebrow={calendar || diary ? v.parentLabel : v.materialsLabel}
        title={
          safety || calendar || diary ? (
            <ProductHeading
              title={loc(product.title, locale)}
              kind={safety ? "safety" : "parent"}
            />
          ) : (
            loc(product.title, locale)
          )
        }
        intro={safety ? t.safetyDescription : loc(product.tagline, locale)}
        image={image}
        imageAlt={safety ? v.safetyScene : v.illustrationAlt}
      >
        <div className="flex flex-wrap gap-2">
          {safety ? (
            <span className="rounded-full bg-yellow px-4 py-2 material-summary font-bold">
              {t.safetyAge}
            </span>
          ) : (
            product.ageGroups.map((age) => (
              <Badge key={age} age={age} locale={locale} />
            ))
          )}
        </div>
        {author && <p className="material-summary mt-4">{author}</p>}
        <div>
          <Button href={calendar ? "#sample" : productTarget}>
            {calendar ? v.calendarExample : action} →
          </Button>
          {!calendar && product.developmentStatus !== "draft" && (
            <p className="material-summary text-text-muted mt-3">
              {t.telegramNote}
            </p>
          )}
        </div>
        <Link
          href={localePath(
            locale,
            product.ageGroups.includes("parents")
              ? "/produkty?age=parents"
              : "/produkty",
          )}
          className="text-link mt-3"
        >
          ←{" "}
          {product.ageGroups.includes("parents")
            ? dict.redesign.parentLink
            : t.breadcrumb}
        </Link>
      </EditorialHero>
      <Section className="product-skills" alt>
        {calendar || diary ? (
          <p className="font-bold">{dict.journey.parentBadge}</p>
        ) : (
          <>
            <h2 className="section-heading">{dict.journey.skillsTitle}</h2>
            <div className="skills-grid">
              {product.skills.map((key) => {
                const skill = skillByKey[key];
                return (
                  <article className="skill-card" key={key}>
                    <p className="editorial-number">{skill.code}</p>
                    <h3>{loc(skill.title, locale)}</h3>
                    <p className="mt-4">{loc(skill.forParent, locale)}</p>
                    <p className="mt-4 font-bold">
                      {dict.journey.competencyLabel}:{" "}
                      {loc(sectorByKey[skill.sector].title, locale)}
                    </p>
                  </article>
                );
              })}
            </div>
            {product.foundation?.map((key) => (
              <p className="mt-5" key={key}>
                {dict.journey.foundationLabel}:{" "}
                {loc(foundations[key].title, locale)}
              </p>
            ))}
          </>
        )}
        {product.developmentStatus === "draft" && (
          <p className="mt-6 font-bold">{dict.journey.draft}</p>
        )}
        <Link href={universityHref} className="text-link mt-8">
          {dict.productPage.universityLink}
        </Link>
      </Section>
      {safety ? (
        <Section id="sample" alt>
          <div className="editorial-split items-start">
            <div>
              <p className="editorial-label">{t.sampleEyebrow}</p>
              <h2 className="section-heading">{t.sampleTitle}</h2>
              <p className="mb-6">{t.sampleIntro}</p>
              <p className="material-summary">{v.samplePending}</p>
            </div>
            <div>
              <span className="editorial-number">45</span>
              <h3>{t.safetyFormat}</h3>
              <p className="material-summary mt-3">{t.factsNote}</p>
            </div>
          </div>
          <div className="mt-10">
            <SafetySample locale={locale} dict={dict} />
          </div>
        </Section>
      ) : calendar ? (
        <Section id="sample" alt>
          <div className="editorial-split">
            <figure>
              <CalendarPreview alt={v.calendarCaption} />
              <figcaption className="illustration-caption">
                {v.calendarCaption}
              </figcaption>
            </figure>
            <div>
              <p className="editorial-label">{v.parentLabel}</p>
              <h2 className="section-heading">{v.calendarExample}</h2>
              <p>{loc(product.tagline, locale)}</p>
              <p className="mt-5">{loc(product.audience, locale)}</p>
            </div>
          </div>
          <div className="calendar-previews mt-12">
            {(["day-01", "day-02", "day-09"] as const).map((page, i) => (
              <figure key={page}>
                <CalendarPreview
                  page={page}
                  alt={`${v.calendarCaption}. ${locale === "ru" ? "День" : "Day"} ${[1, 2, 9][i]}`}
                  zoom
                />
                <figcaption>
                  {locale === "ru" ? "День" : "Day"} {[1, 2, 9][i]} ·{" "}
                  {v.calendarCaption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      ) : diary ? (
        <StorySection
          title={v.diaryExample}
          image="illustrative-products/diary-open"
          caption={v.diaryCaption}
          alt
        >
          <p>{loc(product.tagline, locale)}</p>
          <p>{v.diaryCaption}</p>
          <Button href={site.telegram}>{t.sampleAction}</Button>
          <p className="material-summary">{t.telegramNote}</p>
        </StorySection>
      ) : (
        (sampleTitle || sampleBody) && (
          <Section alt>
            <div className="editorial-split">
              <div>
                <h2 className="section-heading">{dict.productPage.sample}</h2>
                {sampleTitle && <h3 className="mb-5">{sampleTitle}</h3>}
                {sampleBody && <p>{sampleBody}</p>}
              </div>
              <BrandArt name={image} />
            </div>
          </Section>
        )
      )}
      <Section>
        <div className="editorial-split items-start">
          <div>
            <p className="editorial-label">{t.audience}</p>
            <p>{loc(product.audience, locale)}</p>
            <p className="mt-5 material-summary text-text-muted">
              {safety ? t.safetyFormat : loc(product.format, locale)}
            </p>
          </div>
          {composition.length > 0 && (
            <div>
              <h2 className="section-heading">{t.inside}</h2>
              <ul className="space-y-5">
                {composition.map((item) => (
                  <li key={item.ru} className="border-t border-teal pt-4">
                    {loc(item, locale)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Section>
      {howTo.length > 0 && (
        <Section alt>
          <h2 className="section-heading">{t.use}</h2>
          <ol className="steps-list">
            {howTo.map((step) => (
              <li key={step.ru}>
                <p>{loc(step, locale)}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}
      <StorySection
        title={
          safety
            ? t.discuss
            : calendar
              ? dict.productPage.calendarResult
              : diary
                ? dict.productPage.diaryResult
                : dict.productPage.result
        }
        image={calendar || diary ? "scenes/father-work" : "scenes/family-table"}
        reverse
      >
        <p>{safety ? t.safetyDiscuss : loc(product.result, locale)}</p>
        <div className="flex flex-wrap gap-2">
          {product.skills.map((key) => (
            <SkillTag key={key} skillKey={key} locale={locale} />
          ))}
        </div>
      </StorySection>
      <Section id="zayavka" alt>
        <div className="editorial-split items-start">
          <div>
            <p className="editorial-label">{v.formatLabel}</p>
            <h2 className="section-heading">{t.get}</h2>
            <p>{t.getText}</p>
          </div>
          <Card className="space-y-5">
            <h3>{price}</h3>
            <p className="material-summary text-text-muted">{t.formatNote}</p>
            <Button href={productTarget}>{action} →</Button>
            <p className="material-summary text-text-muted">
              {product.developmentStatus === "draft"
                ? dict.journey.draft
                : t.telegramNote}
            </p>
          </Card>
        </div>
      </Section>
      {safety && (
        <Section>
          <div className="editorial-split items-start">
            <h2 className="section-heading">{t.productFaq}</h2>
            <div className="faq-list">
              <FaqAccordion items={faqItems} locale={locale} />
            </div>
          </div>
        </Section>
      )}
      {related.length > 0 && (
        <Section alt>
          <h2 className="section-heading">{t.related}</h2>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <ProductCard
                key={item.slug}
                product={item}
                locale={locale}
                dict={dict}
              />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
