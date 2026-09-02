import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { TelegramCta } from "@/components/ui/TelegramCta";
import { LeadForm } from "@/components/forms/LeadForm";
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
        <h1 className="font-heading text-[34px] leading-[1.15] md:text-[56px] md:leading-[1.1] max-w-[16ch]">
          {dict.b2bPage.title}
        </h1>
        <p className="mt-6 max-w-[65ch]">{dict.b2bPage.intro}</p>
      </Section>
      <Section alt>
        <h2 className="font-heading text-[28px] md:text-[40px] mb-8">
          {dict.b2bPage.formatsTitle}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {dict.b2bPage.formats.map((item) => (
            <Card key={item.title} className="space-y-3">
              <h3 className="font-heading text-[20px] md:text-[24px]">{item.title}</h3>
              <p className="text-text-muted">{item.text}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 max-w-[65ch] text-[15px] text-text-muted">{dict.b2bPage.note}</p>
      </Section>
      <Section>
        <h2 className="font-heading text-[28px] md:text-[40px] mb-6">{dict.b2bPage.cta}</h2>
        <div className="max-w-xl space-y-6">
          <TelegramCta dict={dict} />
          <LeadForm locale={locale} dict={dict} product="b2b" compact />
        </div>
      </Section>
    </>
  );
}
