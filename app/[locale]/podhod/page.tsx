import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SkillRadar } from "@/components/ui/SkillRadar";
import { BrandArt } from "@/components/ui/BrandArt";
import { CompetencyLadder } from "@/components/sections/CompetencyLadder";
import { CompetenciesBlock } from "@/components/sections/CompetenciesBlock";
import { ArticleJsonLd } from "@/components/seo/JsonLd";
import { products } from "@/content/products";
import {
  foundations,
  skillByKey,
  sectorByKey,
  productSectors,
  demoRadar,
  sectors,
  sectorColor,
} from "@/content/competencies";
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
  const d = getDictionary(locale);
  return pageMetadata({
    locale,
    path: "/podhod",
    title: d.meta.approachTitle,
    description: d.meta.approachDescription,
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
  const j = dict.journey;
  return (
    <>
      <ArticleJsonLd locale={locale} />
      <Section className="approach-intro approach-skills-hero">
        <div className="approach-skills-grid">
          <div className="approach-skills-copy">
            <p className="editorial-label">{a.title}</p>
            <h1>{dict.abilities.title}</h1>
            <p className="editorial-intro">{dict.abilities.subtitle}</p>
            <p className="mt-5 max-w-[50ch] approach-skill-examples">
              {a.heroIntro}
            </p>
            <ul className="approach-sector-key" aria-label={j.competencyLabel}>
              {sectors.map((sector, i) => (
                <li key={sector.key}>
                  <Link href={`#sector-${sector.key}`}>
                    <span style={{ color: sectorColor[sector.key] }}>
                      0{i + 1}
                    </span>
                    {loc(sector.title, locale)}
                    <span aria-hidden="true">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="approach-hero-visual">
            <SkillRadar
              values={demoRadar}
              locale={locale}
              size={440}
              showLegend={false}
            />
            <BrandArt
              name="mascots/radarik-skills"
              alt={a.heroAlt}
              priority
              className="approach-hero-guide"
            />
          </div>
        </div>
      </Section>
      <Section className="approach-context">
        <h2 className="section-heading">{a.changedTitle}</h2>
        <p className="editorial-intro">{a.changed}</p>
      </Section>
      <Section alt>
        <h2 className="section-heading">{j.ladderTitle}</h2>
        <p className="max-w-[70ch] mb-8">{j.ladder}</p>
        <CompetencyLadder locale={locale} dict={dict} />
      </Section>
      <Section>
        <CompetenciesBlock locale={locale} dict={dict} />
      </Section>
      <Section alt>
        <h2 className="section-heading">{j.foundationTitle}</h2>
        <p className="max-w-[70ch]">{a.literacy}</p>
        <div className="foundation-grid mt-8">
          {Object.values(foundations).map((item) => (
            <article key={item.title.en}>
              <h3>{loc(item.title, locale)}</h3>
              <p className="mt-4">{loc(item.forParent, locale)}</p>
              <p className="mt-4">
                <strong>{j.progressLabel}: </strong>
                {loc(item.signOfProgress, locale)}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-[70ch]">{j.foundationText}</p>
        <Link
          href={localePath(locale, "/produkty/kartochki-bezopasnosti")}
          className="text-link mt-5"
        >
          {j.safetyLink}
        </Link>
      </Section>
      <Section>
        <div className="editorial-split items-start">
          <div>
            <h2 className="section-heading">{a.familyTitle}</h2>
            <p>{a.family}</p>
          </div>
          <div>
            <h2 className="section-heading">{a.practiceTitle}</h2>
            <p>{a.practice}</p>
            <p className="mt-5">{j.practiceExtra}</p>
          </div>
        </div>
      </Section>
      <Section alt>
        <h2 className="section-heading">{j.progressTitle}</h2>
        <div className="university-radar-grid">
          <div>
            <p>{j.progress}</p>
            <ol className="radar-levels mt-8">
              {j.levels.map((item, i) => (
                <li key={item.title}>
                  <span aria-hidden="true">{i + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <BrandArt
            name="scenes/child-builds"
            alt={a.progressAlt}
            className="approach-progress-art"
          />
        </div>
      </Section>
      <Section>
        <h2 className="section-heading">{a.kitsTitle}</h2>
        <p className="max-w-[65ch] mb-8">{a.kits}</p>
        <div className="kits-table" role="table" aria-label={a.kitsTitle}>
          <div className="kits-row kits-head" role="row">
            {[
              a.tableProduct,
              j.childrenSkills,
              j.competencyLabel,
              a.tableAge,
            ].map((label) => (
              <div key={label} role="columnheader">
                {label}
              </div>
            ))}
          </div>
          {products
            .filter((item) => item.inMainCatalog !== false)
            .map((product) => (
              <div className="kits-row" role="row" key={product.slug}>
                <div role="cell">
                  {!product.comingSoon ? (
                    <Link
                      className="text-link"
                      href={localePath(locale, `/produkty/${product.slug}`)}
                    >
                      {loc(product.title, locale)}{product.availability === "waitlist" ? ` · ${dict.catalog.waitlist}` : ""}
                    </Link>
                  ) : (
                    <span>
                      {loc(product.title, locale)} · {dict.catalog.waitlist}
                    </span>
                  )}
                </div>
                <div role="cell">
                  {product.ageGroups.includes("parents")
                    ? j.parentBadge
                    : product.skills
                        .map(
                          (key) =>
                            `${skillByKey[key].code} ${loc(skillByKey[key].title, locale)}`,
                        )
                        .join(" · ")}
                  {product.foundation?.map((key) => (
                    <p key={key} className="mt-3">
                      {j.foundationLabel}: {loc(foundations[key].title, locale)}
                    </p>
                  ))}
                </div>
                <div role="cell">
                  {productSectors(product)
                    .map((key) => loc(sectorByKey[key].title, locale))
                    .join(" · ") || j.parentBadge}
                </div>
                <div role="cell">
                  {product.ageGroups
                    .map((age) => loc(ageLabels[age], locale))
                    .join(" · ")}
                </div>
              </div>
            ))}
        </div>
        <div className="mt-10">
          <Button href={localePath(locale, "/universitet")}>{j.enter} →</Button>
        </div>
      </Section>
    </>
  );
}
