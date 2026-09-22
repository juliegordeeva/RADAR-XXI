import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { TeamGrid } from "@/components/sections/TeamGrid";
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
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    path: "/o-nas",
    title: dict.meta.aboutTitle,
    description: dict.meta.aboutDescription,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <Section className="md:pt-20">
      <h1 className="font-heading text-[34px] leading-[1.15] md:text-[56px] md:leading-[1.1] max-w-[16ch]">
        {dict.aboutPage.title}
      </h1>
      <div className="mt-6 max-w-[65ch] space-y-4">
        {dict.aboutPage.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-12">
        <TeamGrid locale={locale} variant="about" />
      </div>
      <p className="mt-8 max-w-[65ch] text-text-muted">
        {dict.aboutPage.experts}{" "}
        <Link
          href={localePath(locale, "/dlya-biznesa")}
          className="underline underline-offset-2"
        >
          {dict.nav.b2b}
        </Link>
        .
      </p>
    </Section>
  );
}
