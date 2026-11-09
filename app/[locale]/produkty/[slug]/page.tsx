import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  getProduct,
  getRelated,
  products,
  forCatalog,
} from "@/content/products";
import { purchaseFor } from "@/content/purchases";
import { getDictionary } from "@/lib/dictionary";
import { isLocale, locales } from "@/lib/i18n";
import { loc } from "@/lib/age";
import { pageMetadata } from "@/lib/metadata";
import { localePath } from "@/lib/locale-path";
import { visibleItems, visibleText } from "@/lib/placeholder";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { MaterialPreview } from "@/components/ui/MaterialPreview";
import { ProductArtwork } from "@/components/ui/ProductArtwork";
import { SkillTag } from "@/components/ui/SkillTag";
import { ProductCard } from "@/components/sections/ProductCard";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { ProductJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { ProductRequest } from "@/components/forms/ProductRequest";
import type { FaqItem } from "@/content/faq";
export const dynamic = "force-static";
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    products
      .filter((p) => !p.comingSoon)
      .map((p) => ({ locale, slug: p.slug })),
  );
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const p = getProduct(slug);
  if (!p || p.comingSoon) return {};
  return pageMetadata({
    locale,
    path: `/produkty/${slug}`,
    title: p.seo?.[locale]?.title ?? `${loc(p.title, locale)} | RADAR KIDS`,
    description:
      p.seo?.[locale]?.description ??
      `${loc(p.tagline, locale)} ${loc(p.format, locale)}`,
  });
}
export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const p = getProduct(slug);
  if (!p || p.comingSoon) notFound();
  const d = getDictionary(locale),
    ru = locale === "ru",
    calendar = slug === "kalendar-32-dnya",
    parents = p.ageGroups.includes("parents");
  const sale = purchaseFor(p),
    composition = visibleItems(p.composition),
    howTo = visibleItems(p.howTo),
    author = visibleText(p.author, locale);
  const related = getRelated(p)
    .filter(
      (q) =>
        !q.comingSoon &&
        q.slug !== slug &&
        q.ageGroups.includes("parents") === parents,
    )
    .slice(0, 3)
    .map(forCatalog);
  const faq: FaqItem[] = [
    ...(!calendar
      ? [
          {
            question: { ru: "Кому подойдёт материал?", en: "Who is it for?" },
            answer: p.audience,
          },
        ]
      : []),
    {
      question: {
        ru: "Какой формат и сколько времени?",
        en: "What format and how much time?",
      },
      answer: {
        ru: `${p.format.ru}${p.duration ? `. ${p.duration.ru}` : ""}`,
        en: `${p.format.en}${p.duration ? `. ${p.duration.en}` : ""}`,
      },
    },
    {
      question: { ru: "Как получить материал?", en: "How can I receive it?" },
      answer: {
        ru: sale.active
          ? sale.setup!.receiving!.ru
          : calendar
            ? "Получение полного PDF уточните у организаторов RADAR KIDS в Telegram. Оплата из-за рубежа пока недоступна."
            : "Готовим к выпуску. Задайте вопрос организаторам RADAR KIDS в Telegram.",
        en: sale.active
          ? sale.setup!.receiving!.en
          : calendar
            ? "Ask the RADAR KIDS organisers on Telegram about receiving the full PDF. Payments from abroad are not available yet."
            : "Preparing for release. Ask the RADAR KIDS organisers on Telegram.",
      },
    },
    ...(calendar
      ? [
          {
            question: {
              ru: "Можно ли получить образец?",
              en: "Can I request a sample?",
            },
            answer: {
              ru: "Образец на пять дней можно запросить в Telegram. Полный календарь не является бесплатным образцом.",
              en: "You can request a five-day sample on Telegram. The full calendar is not a free sample.",
            },
          },
        ]
      : []),
  ];
  return (
    <>
      <ProductJsonLd locale={locale} slug={slug} />
      <FaqJsonLd locale={locale} items={faq} />
      <EditorialHero
        className="product-detail-hero"
        variant={parents ? "calendar" : "scene"}
        eyebrow={parents ? d.style03.parentLabel : d.nav.products}
        title={loc(p.title, locale)
          .split(/(\d+[–-]\d+(?:\s(?:лет|years))?)/)
          .map((part, index) =>
            index % 2 ? (
              <span className="whitespace-nowrap" key={index}>
                {part}
              </span>
            ) : (
              part
            ),
          )}
        intro={loc(p.tagline, locale)}
        image={parents ? "scenes/parent-reflection" : "scenes/family-table"}
        visual={
          p.previews?.length ? (
            <ProductArtwork product={p} dict={d} locale={locale} priority />
          ) : undefined
        }
      >
        <div className="product-facts">
          <span>
            {p.ageLabel
              ? loc(p.ageLabel, locale)
              : p.ageGroups
                  .map((age) =>
                    age === "parents"
                      ? ru
                        ? "Для родителей"
                        : "For parents"
                      : `${age.replace("-", "–")} ${ru ? "лет" : "years"}`,
                  )
                  .join(" · ")}
          </span>
          <span>{loc(p.format, locale)}</span>
          {p.duration && <span>{loc(p.duration, locale)}</span>}
        </div>
        {author && <p className="material-summary">{author}</p>}
        {!sale.active && !calendar && (
          <p className="product-release-status">
            {ru ? "Готовим к выпуску" : "Preparing for release"}
          </p>
        )}
        <Button href={sale.active ? sale.setup!.checkoutUrl! : "#zayavka"}>
          {sale.active
            ? ru
              ? "Купить PDF"
              : "Buy the PDF"
            : calendar
              ? d.redesign.calendarAction
              : ru
                ? "Задать вопрос"
                : "Ask a question"}{" "}
          →
        </Button>
        <Link
          className="text-link"
          href={localePath(
            locale,
            parents ? "/produkty?age=parents" : "/produkty",
          )}
        >
          ← {parents ? d.redesign.parentLink : d.nav.products}
        </Link>
      </EditorialHero>
      <Section alt>
        <div className="editorial-split items-start">
          <div>
            <h2 className="section-heading">
              {ru ? "Участие взрослого" : "The adult’s role"}
            </h2>
            <p>{loc(p.audience, locale)}</p>
          </div>
          <div>
            <h2 className="section-heading">
              {ru ? "Что входит" : "What is included"}
            </h2>
            <ul className="product-contents">
              {composition.map((item, i) => (
                <li key={i}>{loc(item, locale)}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      {p.previews?.length && (
        <Section id="sample">
          <h2 className="section-heading">
            {ru ? "Настоящие страницы материала" : "Actual material pages"}
          </h2>
          <p className="mb-8 max-w-[65ch]">
            {ru
              ? "Это фрагменты PDF. Нажмите на страницу, чтобы рассмотреть её крупнее."
              : "These are PDF excerpts in Russian. Select a page to see it larger."}
          </p>
          <div className="material-preview-grid">
            {p.previews.slice(1).map((preview) => (
              <figure key={preview.file}>
                <MaterialPreview
                  file={preview.file}
                  alt={loc(preview.caption, locale)}
                  zoom
                />
                <figcaption>{loc(preview.caption, locale)}</figcaption>
              </figure>
            ))}
          </div>
        </Section>
      )}
      {visibleText(p.sampleBody, locale) && (
        <Section alt>
          <h2 className="section-heading">
            {visibleText(p.sampleTitle, locale) ?? d.productPage.sample}
          </h2>
          <p className="max-w-[75ch]">{loc(p.sampleBody, locale)}</p>
        </Section>
      )}
      {howTo.length > 0 && (
        <Section>
          <h2 className="section-heading">
            {ru ? "Как пользоваться" : "How to use it"}
          </h2>
          <ol className="steps-list">
            {howTo.map((item, i) => (
              <li key={i}>{loc(item, locale)}</li>
            ))}
          </ol>
        </Section>
      )}
      {!parents && (
        <Section alt>
          <details className="content-fold">
            <summary>
              {ru
                ? "Какие навыки затрагивают задания"
                : "Skills addressed by the tasks"}
              <span className="fold-indicator" aria-hidden="true" />
            </summary>
            <div className="flex flex-wrap gap-3">
              {p.skills.map((key) => (
                <SkillTag key={key} skillKey={key} locale={locale} />
              ))}
            </div>
            <p className="mt-5 max-w-[65ch]">{loc(p.result, locale)}</p>
            <Link
              className="text-link mt-5"
              href={localePath(locale, "/podhod")}
            >
              {d.nav.approach} →
            </Link>
          </details>
        </Section>
      )}
      <Section id="zayavka" alt>
        <div className="editorial-split items-start">
          <div>
            <h2 className="section-heading">
              {sale.active
                ? ru
                  ? "Получить PDF"
                  : "Get the PDF"
                : calendar
                  ? ru
                    ? "Полный календарь"
                    : "The full calendar"
                  : ru
                    ? "Вопрос о материале"
                    : "Ask about this material"}
            </h2>
            {calendar && !sale.active && (
              <p className="calendar-price">
                {sale.setup?.price ?? p.price} ₽ · PDF
              </p>
            )}
            {!sale.active && !calendar && (
              <p>
                {ru
                  ? "Готовим к выпуску. Продажа пока не открыта."
                  : "Preparing for release. Purchasing is not open yet."}
              </p>
            )}
            {sale.active && (
              <>
                <p>{sale.setup!.price} ₽</p>
                <p>{loc(sale.setup!.receiving!, locale)}</p>
                <Button href={sale.setup!.checkoutUrl!}>
                  {ru ? "Перейти к оплате" : "Proceed to payment"}
                </Button>
              </>
            )}
          </div>
          <ProductRequest product={p} locale={locale} dict={d} />
        </div>
      </Section>
      <Section>
        <div className="editorial-split items-start">
          <h2 className="section-heading">
            {ru ? "Вопросы о материале" : "Questions about this material"}
          </h2>
          <FaqAccordion items={faq} locale={locale} />
        </div>
      </Section>
      {related.length > 0 && (
        <Section alt>
          <h2 className="section-heading">{d.redesign.related}</h2>
          <div className="gateway-products">
            {related.map((item) => (
              <ProductCard
                key={item.slug}
                product={item}
                locale={locale}
                dict={d}
              />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
