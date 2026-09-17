import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { BusinessForm } from "@/components/forms/BusinessForm";
import { diary } from "@/content/b2b";
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
      <Section className="md:pt-20">
        <h1 className="font-heading text-[34px] leading-[1.15] md:text-[56px] md:leading-[1.1] max-w-[18ch]">
          {loc(diary.title, locale)}
        </h1>
        <p className="mt-6 max-w-[65ch] font-medium">{loc(diary.subtitle, locale)}</p>
        <p className="mt-4 max-w-[65ch] text-text-muted">{loc(diary.intro, locale)}</p>
        <p className="mt-4 max-w-[65ch]">{loc(diary.printNote, locale)}</p>
        <p className="mt-4 max-w-[65ch] text-[15px] text-text-muted">
          {loc(diary.priceNote, locale)}
        </p>
        <div className="mt-8">
          <Button href="#zayavka">{loc(diary.cta, locale)}</Button>
        </div>
      </Section>

      <Section alt>
        <h2 className="font-heading text-[28px] md:text-[40px] mb-4">
          {loc(diary.expertTitle, locale)}
        </h2>
        <Card className="max-w-3xl">
          <p className="max-w-[65ch]">{loc(diary.expert, locale)}</p>
        </Card>
      </Section>

      <Section id="zayavka">
        <h2 className="font-heading text-[28px] md:text-[40px] mb-8">
          {loc(diary.formTitle, locale)}
        </h2>
        <div className="max-w-3xl">
          <BusinessForm locale={locale} dict={dict} variant="diary" />
        </div>
      </Section>
    </>
  );
}
