import { Fragment, Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SkillRadar } from "@/components/ui/SkillRadar";
import { BrandArt } from "@/components/ui/BrandArt";
import { CompetencyLadder } from "@/components/sections/CompetencyLadder";
import { InternshipCatalog } from "@/components/sections/InternshipCatalog";
import { BoosterPicker } from "@/components/sections/BoosterPicker";
import { UniversityForm } from "@/components/forms/UniversityForm";
import { UniversityArrival } from "@/components/sections/UniversityArrival";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { universityFaq } from "@/content/faq";
import { catalogProducts } from "@/content/products";
import { demoRadar } from "@/content/competencies";
import { getDictionary } from "@/lib/dictionary";
import { isLocale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";
import { pageMetadata } from "@/lib/metadata";

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
    path: "/universitet",
    title: d.meta.universityTitle,
    description: d.meta.universityDescription,
  });
}
export default async function UniversityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const t = dict.university;
  const j = dict.journey;
  return (
    <>
      <FaqJsonLd locale={locale} items={universityFaq} />
      <Section className="university-hero">
        <div className="university-hero-heading">
          <p className="editorial-label">{dict.common.brand}</p>
          <h1>
            {t.title.split(dict.common.brand).map((part, index) => (
              <Fragment key={index}>
                {index > 0 && (
                  <span className="whitespace-nowrap">{dict.common.brand}</span>
                )}
                {part}
              </Fragment>
            ))}
          </h1>
        </div>
        <div className="university-hero-grid">
          <div className="university-hero-copy">
            <p className="editorial-intro">{t.intro}</p>
            <ul className="university-format" aria-label={t.formatLabel}>
              {t.format.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href="#zayavka">{t.choose} →</Button>
            </div>
            <Suspense fallback={null}>
              <UniversityArrival text={t.eventNote} />
            </Suspense>
          </div>
          <div className="university-hero-art">
            <span className="university-hero-sun" aria-hidden="true" />
            <BrandArt
              name="scenes/university-workshop"
              alt={t.heroAlt}
              priority
            />
          </div>
        </div>
      </Section>
      <Section alt>
        <p className="editorial-label">{j.ladderTitle}</p>
        <h2 className="section-heading">{t.whyTitle}</h2>
        <CompetencyLadder locale={locale} dict={dict} />
        <p className="mt-8 max-w-[65ch]">{t.whyText}</p>
      </Section>
      <Section id="stazhirovki">
        <h2 className="section-heading">{t.internshipsTitle}</h2>
        <Suspense fallback={<p>{t.waitlist}</p>}>
          <InternshipCatalog locale={locale} dict={dict} />
        </Suspense>
      </Section>
      <Section alt>
        <p className="editorial-label">{t.plannedLabel}</p>
        <h2 className="section-heading">{t.planTitle}</h2>
        <ol className="university-plan">
          {t.plan.map((line, i) => (
            <li key={line}>
              <span className="editorial-number">0{i + 1}</span>
              <p>{line}</p>
            </li>
          ))}
        </ol>
        <h3 className="my-8">{t.exampleTitle}</h3>
        <div
          className="internship-example"
          role="table"
          aria-label={t.exampleTitle}
        >
          <div className="example-head" role="row">
            <span role="columnheader">{t.week}</span>
            <span role="columnheader">{j.competencyLabel}</span>
            <span role="columnheader">{t.tasks}</span>
          </div>
          {t.weeks.map((week, i) => (
            <div className="example-row" role="row" key={week.focus}>
              <div role="cell">
                <span className="example-mobile-label">{t.week} </span>
                {i + 1}
              </div>
              <div role="cell">
                <strong>{week.focus}</strong>
              </div>
              <div role="cell">{week.tasks}</div>
            </div>
          ))}
        </div>
      </Section>
      <Section id="radar">
        <h2 className="section-heading">{j.radarTitle}</h2>
        <div className="university-radar-grid">
          <SkillRadar values={demoRadar} locale={locale} size={440} />
          <div>
            <ol className="radar-levels">
              {j.levels.map((level, i) => (
                <li key={level.title}>
                  <span aria-hidden="true">{i + 1}</span>
                  <div>
                    <h3>{level.title}</h3>
                    <p>{level.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <h3 className="mt-8 mb-5">{t.reportTitle}</h3>
            <ul className="list-disc pl-5 space-y-3">
              {t.report.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className="mt-6">{t.childRadar}</p>
            <p className="university-notice mt-6">{t.privacy}</p>
          </div>
        </div>
      </Section>
      <Section id="dokachka" alt>
        <h2 className="section-heading">{t.boostTitle}</h2>
        <p className="max-w-[65ch] mb-8">{t.boostIntro}</p>
        <Suspense>
          <BoosterPicker
            products={catalogProducts}
            locale={locale}
            dict={dict}
          />
        </Suspense>
      </Section>
      <Section className="university-company">
        <p className="max-w-[75ch]">
          {t.companyLine}{" "}
          <Link
            href={localePath(locale, "/dlya-biznesa")}
            className="text-link"
          >
            {t.companyLink}
          </Link>
        </p>
      </Section>
      <Section>
        <div className="editorial-split items-start">
          <h2 className="section-heading">{t.faqTitle}</h2>
          <FaqAccordion items={universityFaq} locale={locale} />
        </div>
      </Section>
      <Section id="zayavka" alt>
        <div className="university-request-grid">
          <div>
            <p className="editorial-label">{dict.common.brand}</p>
            <h2 className="section-heading">{t.formTitle}</h2>
            <BrandArt
              name="mascots/radarik-notebook"
              className="university-request-guide"
            />
          </div>
          <Suspense fallback={<p>{t.formIntro}</p>}>
            <UniversityForm locale={locale} dict={dict} />
          </Suspense>
        </div>
      </Section>
    </>
  );
}
