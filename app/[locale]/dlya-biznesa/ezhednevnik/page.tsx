import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { ProductHeading } from "@/components/ui/ProductHeading";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { StorySection } from "@/components/sections/StorySection";
import { Section } from "@/components/ui/Section";
import { BusinessForm } from "@/components/forms/BusinessForm";
import { diary } from "@/content/b2b";
import { getDictionary } from "@/lib/dictionary";
import { isLocale } from "@/lib/i18n";
import { loc } from "@/lib/age";
import { isPlaceholderLoc } from "@/lib/placeholder";
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
    path: "/dlya-biznesa/ezhednevnik",
    title: dict.meta.diaryTitle,
    description: dict.meta.diaryDescription,
  });
}

export default async function DiaryPage({
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
        variant="business-diary"
        eyebrow={dict.style03.businessLabel}
        title={
          <ProductHeading title={loc(diary.title, locale)} kind="parent" />
        }
        intro={loc(diary.subtitle, locale)}
        image="illustrative-products/diary-cover"
      >
        <p className="illustration-caption">{dict.style03.diaryCaption}</p>
        <div>
          <Button href="#zayavka">{loc(diary.cta, locale)} →</Button>
        </div>
      </EditorialHero>
      <StorySection
        title={dict.style03.diaryExample}
        image="illustrative-products/diary-open"
        caption={dict.style03.diaryCaption}
        alt
      >
        <p>{loc(diary.intro, locale)}</p>
        <p>{loc(diary.printNote, locale)}</p>
        {!isPlaceholderLoc(diary.priceNote) && (
          <p>{loc(diary.priceNote, locale)}</p>
        )}
      </StorySection>
      <StorySection
        title={loc(diary.expertTitle, locale)}
        image="scenes/father-work"
        reverse
      >
        <p>{loc(diary.expert, locale)}</p>
      </StorySection>
      <StorySection
        title={dict.style03.parentLabel}
        image="scenes/parents-planning"
        alt
      >
        <p>{loc(diary.subtitle, locale)}</p>
        <p>{dict.redesign.getText}</p>
      </StorySection>
      <Section id="zayavka">
        <div className="editorial-split items-start">
          <div>
            <h2 className="section-heading">{loc(diary.formTitle, locale)}</h2>
            <p>{dict.redesign.preparedNote}</p>
          </div>
          <BusinessForm locale={locale} dict={dict} variant="diary" />
        </div>
      </Section>
    </>
  );
}
