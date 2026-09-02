import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { getDictionary } from "@/lib/dictionary";
import { isLocale } from "@/lib/i18n";
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
    path: "/politika",
    title: dict.meta.privacyTitle,
    description: dict.meta.privacyDescription,
  });
}

export default async function PrivacyPage({
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
        {dict.privacyPage.title}
      </h1>
      <p className="mt-4 text-[15px] text-text-muted">{dict.privacyPage.updated}</p>
      <p className="mt-2 text-[15px] text-text-muted">{dict.privacyPage.legalTodo}</p>
      <div className="mt-10 space-y-8">
        {dict.privacyPage.sections.map((section) => (
          <div key={section.title}>
            <h2 className="font-heading text-[24px] mb-3">{section.title}</h2>
            <p className="max-w-[65ch] text-text-muted">{section.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
