import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { SideNav } from "@/components/layout/SideNav";
import { BrandArt } from "@/components/ui/BrandArt";
import { Section } from "@/components/ui/Section";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { ProductCard } from "@/components/sections/ProductCard";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { OrganizationJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { products } from "@/content/products";
import { directions } from "@/content/directions";
import { faqItems } from "@/content/faq";
import { getDictionary } from "@/lib/dictionary";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { localePath } from "@/lib/locale-path";
import { loc } from "@/lib/age";
export const dynamic = "force-static";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = getDictionary(locale);
  return pageMetadata({
    locale,
    path: "/",
    title: d.meta.homeTitle,
    description: d.meta.homeDescription,
  });
}
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const ru = locale === "ru";
  const featured = [
    "advent-4-6",
    "advent-7-9",
    "advent-10-12",
    "komplekt-5-6",
  ].flatMap((slug) => products.filter((p) => p.slug === slug));
  return (
    <>
      <OrganizationJsonLd locale={locale} />
      <FaqJsonLd locale={locale} />
      <Section className="editorial-hero home-cover home-gateway">
        <SideNav locale={locale} dict={dict} embedded />
        <div className="gateway-grid">
          <div className="gateway-copy">
            <p className="editorial-label">RADAR KIDS</p>
            <h1>{dict.hero.title}</h1>
            <p className="gateway-intro">{dict.hero.paragraphs[0]}</p>
            <nav
              className="gateway-entries"
              aria-label={dict.style03.directions}
            >
              {directions.map((item, i) => (
                <Link
                  className={`direction-entry ${i === 0 ? "is-primary" : ""}`}
                  key={item.path}
                  href={localePath(locale, item.path)}
                >
                  <span>
                    <strong>{loc(item.title, locale)}</strong>
                    <span>{loc(item.description, locale)}</span>
                  </span>
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="home-welcome-art">
            <span className="home-welcome-orbit" aria-hidden="true" />
            <BrandArt
              name="scenes/family-walk"
              alt={dict.hero.familyAlt}
              priority
              className="home-welcome-family"
            />
          </div>
        </div>
      </Section>
      <Section alt>
        <p className="editorial-label">{dict.nav.products}</p>
        <h2 className="section-heading">
          {ru ? "Один день — одно общее дело" : "One day, one shared task"}
        </h2>
        <p className="max-w-[65ch] mb-8">
          {ru
            ? "Три адвента на 28 дней для разных возрастов и комплект для детей 5–6 лет. Посмотрите реальные страницы, состав и участие взрослого."
            : "Three 28-day advents for different ages and a set for ages 5–6. Explore actual page previews, contents and the adult’s role."}
        </p>
        <div className="gateway-products">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} locale={locale} dict={dict} />
          ))}
        </div>
        <Link className="text-link mt-8" href={localePath(locale, "/produkty")}>
          {ru ? "Все семейные материалы" : "All family materials"} →
        </Link>
      </Section>
      <Section>
        <div className="editorial-split items-start">
          <div>
            <p className="editorial-label">{dict.nav.university}</p>
            <h2 className="section-heading">
              {ru
                ? "Пробовать, обсуждать, замечать прогресс"
                : "Try, discuss and notice progress"}
            </h2>
          </div>
          <div>
            <p>
              {ru
                ? "В основе подхода — четыре универсальные компетенции и 12 навыков. Ребёнок пробует действие, взрослый поддерживает и обсуждает опыт. Радар помогает семье собрать наблюдения; это не тест."
                : "Our approach connects four universal competencies with 12 skills. Children try an action, while adults support them and discuss the experience. The radar gathers family observations; it is not a test."}
            </p>
            <Link
              className="text-link mt-6"
              href={localePath(locale, "/podhod")}
            >
              {dict.nav.approach} →
            </Link>
          </div>
        </div>
      </Section>
      <Section alt>
        <h2 className="section-heading">{dict.team.title}</h2>
        <TeamGrid locale={locale} />
        <Link className="text-link mt-8" href={localePath(locale, "/o-nas")}>
          {ru ? "Команда и опыт" : "Team and experience"} →
        </Link>
      </Section>
      <Section>
        <div className="editorial-split items-start">
          <h2 className="section-heading">
            {ru ? "Перед тем как выбрать" : "Before choosing"}
          </h2>
          <FaqAccordion items={faqItems} locale={locale} />
        </div>
      </Section>
    </>
  );
}
