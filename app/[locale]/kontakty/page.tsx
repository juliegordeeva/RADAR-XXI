import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { TelegramCta } from "@/components/ui/TelegramCta";
import { LeadForm } from "@/components/forms/LeadForm";
import { getDictionary } from "@/lib/dictionary";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

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
    path: "/kontakty",
    title: dict.meta.contactsTitle,
    description: dict.meta.contactsDescription,
  });
}

export default async function ContactsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <Section className="md:pt-20">
      <h1 className="font-heading text-[34px] leading-[1.15] md:text-[56px] md:leading-[1.1]">
        {dict.contactsPage.title}
      </h1>
      <p className="mt-6 max-w-[65ch]">{dict.contactsPage.intro}</p>
      <div className="mt-6">
        <TelegramCta dict={dict} />
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="space-y-3">
          <p>
            {dict.footer.phoneRu}:{" "}
            <a className="underline underline-offset-2" href={`tel:${site.phones.ru.replace(/\s/g, "")}`}>
              {site.phones.ru}
            </a>
          </p>
          <p>
            {dict.footer.phoneEu}:{" "}
            <a className="underline underline-offset-2" href={`tel:${site.phones.eu.replace(/\s/g, "")}`}>
              {site.phones.eu}
            </a>
          </p>
          <p>
            <a
              className="underline underline-offset-2"
              href={site.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              {dict.footer.telegram}
            </a>
          </p>
        </div>
        <Card>
          <h2 className="font-heading text-[24px] mb-5">{dict.contactsPage.formTitle}</h2>
          <LeadForm locale={locale} dict={dict} compact />
        </Card>
      </div>
    </Section>
  );
}
