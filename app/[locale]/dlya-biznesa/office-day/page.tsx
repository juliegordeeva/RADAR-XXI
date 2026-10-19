import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { BrandArt } from "@/components/ui/BrandArt";
import { StorySection } from "@/components/sections/StorySection";
import { Section } from "@/components/ui/Section";
import { BusinessForm } from "@/components/forms/BusinessForm";
import { officeDay } from "@/content/b2b";
import { getDictionary } from "@/lib/dictionary";
import { isLocale } from "@/lib/i18n";
import { loc } from "@/lib/age";
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
    path: "/dlya-biznesa/office-day",
    title: dict.meta.officeTitle,
    description: dict.meta.officeDescription,
  });
}

export default async function OfficeDayPage({
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
        variant="office"
        eyebrow="Office Day"
        title={loc(officeDay.title, locale)}
        intro={loc(officeDay.subtitle, locale)}
        image="scenes/office-day"
      >
        <div>
          <Button href="#zayavka">{loc(officeDay.cta, locale)} →</Button>
        </div>
      </EditorialHero>
      <Section alt>
        <h2 className="section-heading">{loc(officeDay.dayTitle, locale)}</h2>
        <div className="editorial-four mt-8">
          {officeDay.steps.map((step, i) => (
            <article key={step.title.ru}>
              <span className="editorial-number">0{i + 1}</span>
              <h3 className="mb-5">{loc(step.title, locale)}</h3>
              <p>{loc(step.text, locale)}</p>
              <p className="material-summary text-text-muted mt-5">
                {loc(step.result, locale)}
              </p>
              <BrandArt
                name={
                  [
                    "scenes/family-walk",
                    "scenes/office-day",
                    "age/age-10-12",
                    "age/age-7-9",
                  ][i]
                }
              />
            </article>
          ))}
        </div>
      </Section>
      <StorySection
        title={loc(officeDay.taskTitle, locale)}
        image="scenes/family-table"
      >
        <p>{loc(officeDay.intro, locale)}</p>
        <p>{loc(officeDay.task, locale)}</p>
      </StorySection>
      <StorySection
        title={loc(officeDay.adaptTitle, locale)}
        image="scenes/father-work"
        alt
        reverse
      >
        <p>{loc(officeDay.adapt, locale)}</p>
        <h3>{loc(officeDay.expertTitle, locale)}</h3>
        <ul className="space-y-2">
          {officeDay.teamItems.map((item) => (
            <li key={item.ru}>{loc(item, locale)}</li>
          ))}
        </ul>
      </StorySection>
      <Section>
        <div className="editorial-split items-start">
          <div>
            <h2 className="section-heading">
              {loc(officeDay.orgTitle, locale)}
            </h2>
            <ul className="space-y-4">
              {officeDay.orgItems.map((item) => (
                <li key={item.ru} className="border-t border-border pt-3">
                  {loc(item, locale)}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="section-heading">
              {loc(officeDay.valueTitle, locale)}
            </h2>
            <ul className="space-y-4">
              {officeDay.valueItems.map((item) => (
                <li key={item.ru} className="border-t border-border pt-3">
                  {loc(item, locale)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <StorySection
        title={loc(officeDay.mediaTitle, locale)}
        image="mascots/radarik-books"
        alt
      >
        <p>{loc(officeDay.media, locale)}</p>
        <p className="material-summary">{loc(officeDay.mediaNote, locale)}</p>
      </StorySection>
      <Section>
        <p className="editorial-label">{dict.style03.formatLabel}</p>
        <ul className="space-y-5 max-w-[70ch]">
          {officeDay.priceItems.map((item) => (
            <li key={item.ru} className="border-t border-teal pt-4">
              {loc(item, locale)}
            </li>
          ))}
        </ul>
      </Section>
      <Section id="zayavka" alt>
        <div className="editorial-split items-start">
          <div>
            <h2 className="section-heading">
              {loc(officeDay.formTitle, locale)}
            </h2>
            <p>{loc(officeDay.ctaHint, locale)}</p>
          </div>
          <BusinessForm locale={locale} dict={dict} variant="office" />
        </div>
      </Section>
    </>
  );
}
