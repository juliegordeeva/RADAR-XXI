import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { BrandArt } from "@/components/ui/BrandArt";
import { StorySection } from "@/components/sections/StorySection";
import { competencies } from "@/content/competencies";
import { ArticleJsonLd } from "@/components/seo/JsonLd";
import { products } from "@/content/products";
import { competencyByKey } from "@/content/competencies";
import { getDictionary } from "@/lib/dictionary";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { localePath } from "@/lib/locale-path";
import { ageLabels, loc } from "@/lib/age";

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
    path: "/podhod",
    title: dict.meta.approachTitle,
    description: dict.meta.approachDescription,
  });
}

export default async function ApproachPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const a = dict.approach;
  const three = [
    { title: a.thinkingTitle, text: a.thinking },
    { title: a.othersTitle, text: a.others },
    { title: a.selfTitle, text: a.self },
  ];

  return (
    <>
      <ArticleJsonLd locale={locale} />
      <EditorialHero
        variant="approach"
        eyebrow={dict.style03.approachLabel}
        title={dict.redesign.approachTitle}
        intro={dict.redesign.approachText}
        image="scenes/child-builds"
        imageAlt={dict.redesign.heroAlt}
      />
      <Section alt>
        <p className="editorial-label">{dict.redesign.howTitle}</p>
        <h2 className="section-heading">{a.threeTitle}</h2>
        <div className="editorial-three mt-8">
          {three.map((block, i) => (
            <article key={block.title}>
              <span className="editorial-number">0{i + 1}</span>
              <h3 className="mb-4">{block.title}</h3>
              <p>{block.text}</p>
              <BrandArt
                name={
                  ["scenes/child-builds", "scenes/family-table", "age/age-7-9"][
                    i
                  ]
                }
              />
            </article>
          ))}
        </div>
      </Section>
      <Section>
        <p className="editorial-label">{a.changedTitle}</p>
        <h2 className="section-heading">{dict.abilities.title}</h2>
        <p className="max-w-[65ch] mb-8">{a.changed}</p>
        <div className="editorial-competencies">
          {competencies
            .filter((item) => item.group !== "literacy")
            .map((item, i) => (
              <article key={item.key}>
                <span className="editorial-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{loc(item.title, locale)}</h3>
                <p>{loc(item.forParent, locale)}</p>
                <p className="material-summary text-text-muted mt-3">
                  {loc(item.signOfProgress, locale)}
                </p>
              </article>
            ))}
        </div>
        <div className="mt-8 max-w-[65ch]">
          <h3 className="mb-4">{a.literacyTitle}</h3>
          <p>{a.literacy}</p>
        </div>
        <p className="mt-8 max-w-[65ch] font-bold">{dict.abilities.ninth}</p>
        <p className="mt-3 max-w-[65ch]">{dict.abilities.ninthNote}</p>
      </Section>
      <StorySection
        title={a.selfTitle}
        eyebrow={dict.style03.parentLabel}
        image="scenes/father-work"
        alt
        reverse
      >
        <p>{a.self}</p>
        <Button href={localePath(locale, "/produkty?age=parents")}>
          {dict.style03.chooseParents} →
        </Button>
      </StorySection>
      <StorySection title={a.familyTitle} image="scenes/family-table">
        <p>{a.family}</p>
        <h3>{a.practiceTitle}</h3>
        <p>{a.practice}</p>
      </StorySection>
      <Section>
        <h2 className="section-heading">{a.kitsTitle}</h2>
        <p className="max-w-[65ch] mb-8">{a.kits}</p>
        <div className="overflow-x-auto">
          <table className="w-full text-[15px] text-left border-collapse">
            <thead>
              <tr>
                <th className="p-3">{a.tableProduct}</th>
                <th className="p-3">{a.tableAbilities}</th>
                <th className="p-3">{a.tableAge}</th>
              </tr>
            </thead>
            <tbody>
              {products
                .filter((item) => item.inMainCatalog !== false)
                .map((product) => (
                  <tr
                    key={product.slug}
                    className="border-t border-border align-top"
                  >
                    <td className="p-3">{loc(product.title, locale)}</td>
                    <td className="p-3">
                      {product.competencies
                        .map((key) => loc(competencyByKey[key].title, locale))
                        .join(", ")}
                    </td>
                    <td className="p-3">
                      {product.slug === "kartochki-bezopasnosti"
                        ? dict.redesign.safetyAge
                        : product.ageGroups
                            .map((age) => loc(ageLabels[age], locale))
                            .join(", ")}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <Button href={localePath(locale, "/produkty")}>{a.cta} →</Button>
        </div>
      </Section>
    </>
  );
}
