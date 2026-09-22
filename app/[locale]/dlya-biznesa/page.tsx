import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { BusinessForm } from "@/components/forms/BusinessForm";
import { b2bHub, experienceUrl } from "@/content/b2b";
import { getDictionary } from "@/lib/dictionary";
import { isLocale } from "@/lib/i18n";
import { loc } from "@/lib/age";
import { localePath } from "@/lib/locale-path";
import { pageMetadata } from "@/lib/metadata";
import { BookOpen, Building2, Trees } from "lucide-react";

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
    path: "/dlya-biznesa",
    title: dict.meta.b2bTitle,
    description: dict.meta.b2bDescription,
  });
}

export default async function BusinessPage({
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
        <p className="text-[15px] text-text-muted mb-4">{loc(b2bHub.eyebrow, locale)}</p>
        <h1 className="font-heading text-[34px] leading-[1.15] md:text-[56px] md:leading-[1.1] max-w-full md:max-w-[18ch]">
          {loc(b2bHub.title, locale)}
        </h1>
        <p className="mt-6 max-w-[65ch] text-text-muted">{loc(b2bHub.subtitle, locale)}</p>
        <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center">
          <Button href="#zayavka">{loc(b2bHub.cta, locale)}</Button>
          <Button
            variant="secondary"
            href={localePath(locale, "/dlya-biznesa/office-day")}
          >
            {loc(b2bHub.ctaOffice, locale)}
          </Button>
        </div>
      </Section>

      <Section alt>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <Card className="flex flex-col gap-5">
            <div className="flex size-12 items-center justify-center rounded-[12px] bg-bg-alt text-deep">
              <Building2 className="size-6" strokeWidth={1.75} aria-hidden />
            </div>
            <h2 className="font-heading text-[20px] md:text-[24px]">
              {loc(b2bHub.officeTitle, locale)}
            </h2>
            <p className="text-text-muted">{loc(b2bHub.officeText, locale)}</p>
            <Button
              href={localePath(locale, "/dlya-biznesa/office-day")}
              className="mt-auto"
            >
              {loc(b2bHub.officeCta, locale)}
            </Button>
          </Card>
          <Card className="flex flex-col gap-5">
            <div className="flex size-12 items-center justify-center rounded-[12px] bg-bg-alt text-deep">
              <Trees className="size-6" strokeWidth={1.75} aria-hidden />
            </div>
            <h2 className="font-heading text-[20px] md:text-[24px]">
              {loc(b2bHub.hikesTitle, locale)}
            </h2>
            <p className="text-text-muted">{loc(b2bHub.hikesText, locale)}</p>
            <Button
              href={localePath(locale, "/dlya-biznesa/family-hikes")}
              className="mt-auto"
            >
              {loc(b2bHub.hikesCta, locale)}
            </Button>
          </Card>
          <Card className="flex flex-col gap-5">
            <div className="flex size-12 items-center justify-center rounded-[12px] bg-bg-alt text-deep">
              <BookOpen className="size-6" strokeWidth={1.75} aria-hidden />
            </div>
            <h2 className="font-heading text-[20px] md:text-[24px]">
              {loc(b2bHub.diaryTitle, locale)}
            </h2>
            <p className="text-text-muted">{loc(b2bHub.diaryText, locale)}</p>
            <Button
              href={localePath(locale, "/dlya-biznesa/ezhednevnik")}
              className="mt-auto"
            >
              {loc(b2bHub.diaryCta, locale)}
            </Button>
          </Card>
        </div>
        <p className="mt-8 max-w-[65ch] text-[15px] text-text-muted">
          {loc(b2bHub.boundary, locale)}{" "}
          <a
            href={experienceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            RADAR Experience
          </a>
        </p>
      </Section>

      <Section id="zayavka">
        <h2 className="font-heading text-[28px] md:text-[40px] mb-6">
          {loc(b2bHub.formTitle, locale)}
        </h2>
        <div className="max-w-3xl">
          <BusinessForm locale={locale} dict={dict} variant="general" />
        </div>
      </Section>
    </>
  );
}
