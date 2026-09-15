import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Compass, Footprints, Trees, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { BusinessForm } from "@/components/forms/BusinessForm";
import { experienceUrl, familyHikes } from "@/content/b2b";
import { getDictionary } from "@/lib/dictionary";
import { isLocale } from "@/lib/i18n";
import { loc } from "@/lib/age";
import { pageMetadata } from "@/lib/metadata";

export const dynamic = "force-static";

const sceneIcons = [
  { id: "trees", Icon: Trees },
  { id: "users", Icon: Users },
  { id: "footprints", Icon: Footprints },
  { id: "compass", Icon: Compass },
] as const;

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
    path: "/dlya-biznesa/family-hikes",
    title: dict.meta.hikesTitle,
    description: dict.meta.hikesDescription,
  });
}

export default async function FamilyHikesPage({
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
        <h1 className="font-heading text-[34px] leading-[1.15] md:text-[56px] md:leading-[1.1] max-w-[16ch]">
          {loc(familyHikes.title, locale)}
        </h1>
        <p className="mt-6 max-w-[65ch] font-medium">{loc(familyHikes.subtitle, locale)}</p>
        <p className="mt-4 max-w-[65ch] text-text-muted">{loc(familyHikes.intro, locale)}</p>
        <div className="mt-8">
          <Button href="#zayavka">{loc(familyHikes.cta, locale)}</Button>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 max-w-xl md:grid-cols-4">
          {sceneIcons.map(({ id, Icon }) => (
            <div
              key={id}
              className="flex h-24 items-center justify-center rounded-[16px] border border-border bg-surface text-deep"
              aria-hidden
            >
              <Icon className="size-8" strokeWidth={1.5} />
            </div>
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="font-heading text-[28px] md:text-[40px] mb-6">
          {loc(familyHikes.needTitle, locale)}
        </h2>
        <ul className="grid gap-3 max-w-3xl md:grid-cols-2">
          {familyHikes.needItems.map((item) => (
            <li key={item.ru}>
              <Card className="text-[17px]">{loc(item, locale)}</Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <p className="max-w-[65ch] text-text-muted">
          {loc(familyHikes.boundary, locale)}{" "}
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

      <Section id="zayavka" alt>
        <h2 className="font-heading text-[28px] md:text-[40px] mb-8">
          {loc(familyHikes.formTitle, locale)}
        </h2>
        <div className="max-w-3xl">
          <BusinessForm locale={locale} dict={dict} variant="hikes" />
        </div>
      </Section>
    </>
  );
}
