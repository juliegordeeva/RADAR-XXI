import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Building2, Flag, IdCard, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { BusinessForm } from "@/components/forms/BusinessForm";
import { officeDay } from "@/content/b2b";
import { getDictionary } from "@/lib/dictionary";
import { isLocale } from "@/lib/i18n";
import { loc } from "@/lib/age";
import { pageMetadata } from "@/lib/metadata";

export const dynamic = "force-static";

const stepIcons = [IdCard, Puzzle, Building2, Flag];

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
      <Section className="md:pt-20">
        <p className="text-[15px] text-text-muted mb-4">Office Day</p>
        <h1 className="font-heading text-[34px] leading-[1.15] md:text-[56px] md:leading-[1.1] max-w-full md:max-w-[16ch]">
          {loc(officeDay.title, locale)}
        </h1>
        <p className="mt-6 max-w-[65ch] font-medium">{loc(officeDay.subtitle, locale)}</p>
        <p className="mt-4 max-w-[65ch] text-text-muted">{loc(officeDay.intro, locale)}</p>
        <ul className="mt-6 space-y-3 max-w-[65ch]">
          {officeDay.priceItems.map((item) => (
            <li
              key={item.ru}
              className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.7em] before:size-1.5 before:rounded-full before:bg-deep"
            >
              {loc(item, locale)}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button href="#zayavka">{loc(officeDay.cta, locale)}</Button>
        </div>
      </Section>

      <Section alt>
        <h2 className="font-heading text-[28px] md:text-[40px] mb-6">
          {loc(officeDay.expertTitle, locale)}
        </h2>
        <div className="flex flex-wrap gap-2 max-w-3xl">
          {officeDay.teamItems.map((item) => (
            <span
              key={item.ru}
              className="inline-flex max-w-full items-center rounded-full border border-border bg-surface px-4 py-2 text-[15px] whitespace-normal leading-snug"
            >
              {loc(item, locale)}
            </span>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-heading text-[28px] md:text-[40px] mb-4">
          {loc(officeDay.taskTitle, locale)}
        </h2>
        <p className="max-w-[65ch]">{loc(officeDay.task, locale)}</p>
      </Section>

      <Section>
        <h2 className="font-heading text-[28px] md:text-[40px] mb-8">
          {loc(officeDay.dayTitle, locale)}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {officeDay.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <Card key={step.title.ru} className="space-y-3">
                <div className="flex size-12 items-center justify-center rounded-[12px] bg-bg-alt text-deep">
                  <Icon className="size-6" strokeWidth={1.75} aria-hidden />
                </div>
                <p className="font-heading text-[40px] text-deep leading-none">{index + 1}</p>
                <h3 className="font-heading text-[20px] md:text-[24px]">
                  {loc(step.title, locale)}
                </h3>
                <p>{loc(step.text, locale)}</p>
                <p className="text-[15px] text-text-muted">{loc(step.result, locale)}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section alt>
        <h2 className="font-heading text-[28px] md:text-[40px] mb-4">
          {loc(officeDay.adaptTitle, locale)}
        </h2>
        <p className="max-w-[65ch]">{loc(officeDay.adapt, locale)}</p>
      </Section>

      <Section>
        <h2 className="font-heading text-[28px] md:text-[40px] mb-4">
          {loc(officeDay.mediaTitle, locale)}
        </h2>
        <p className="max-w-[65ch]">{loc(officeDay.media, locale)}</p>
        <p className="mt-4 max-w-[65ch] text-[15px] text-text-muted">
          {loc(officeDay.mediaNote, locale)}
        </p>
      </Section>

      <Section alt>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-[28px] md:text-[40px] mb-6">
              {loc(officeDay.orgTitle, locale)}
            </h2>
            <ul className="space-y-3 max-w-[65ch]">
              {officeDay.orgItems.map((item) => (
                <li
                  key={item.ru}
                  className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.7em] before:size-1.5 before:rounded-full before:bg-deep"
                >
                  {loc(item, locale)}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-heading text-[28px] md:text-[40px] mb-6">
              {loc(officeDay.valueTitle, locale)}
            </h2>
            <ul className="space-y-3 max-w-[65ch]">
              {officeDay.valueItems.map((item) => (
                <li
                  key={item.ru}
                  className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.7em] before:size-1.5 before:rounded-full before:bg-deep"
                >
                  {loc(item, locale)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="zayavka">
        <h2 className="font-heading text-[28px] md:text-[40px] mb-3">
          {loc(officeDay.formTitle, locale)}
        </h2>
        <p className="mb-8 max-w-[65ch] text-text-muted">{loc(officeDay.ctaHint, locale)}</p>
        <div className="max-w-3xl">
          <BusinessForm locale={locale} dict={dict} variant="office" />
        </div>
      </Section>
    </>
  );
}
