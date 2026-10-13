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
    <Section className="editorial-hero privacy-page">
      <p className="editorial-label">{dict.style03.privacyLabel}</p>
      <h1 className="mb-6">{dict.privacyPage.title}</h1>
      <p className="material-summary text-text-muted">
        {dict.privacyPage.updated}
      </p>
      <p className="material-summary text-text-muted mt-2">
        {dict.privacyPage.legalTodo}
      </p>
      <div className="privacy-grid mt-12">
        <nav className="privacy-toc" aria-label={dict.style03.contents}>
          {dict.privacyPage.sections.map((item, i) => (
            <a key={item.title} href={`#privacy-${i + 1}`}>
              <span className="editorial-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item.title}</span>
            </a>
          ))}
        </nav>
        <div className="privacy-copy">
          {dict.privacyPage.sections.map((item, i) => (
            <section key={item.title} id={`privacy-${i + 1}`}>
              <p className="editorial-label">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </section>
          ))}
        </div>
      </div>
    </Section>
  );
}
