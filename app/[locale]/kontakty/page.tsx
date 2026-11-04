import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { BrandArt } from "@/components/ui/BrandArt";
import Link from "next/link";
import { localePath } from "@/lib/locale-path";
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
    <>
      <EditorialHero
        variant="contacts"
        eyebrow={dict.style03.homeLabel}
        title={dict.style03.contactsTitle}
        intro={dict.style03.contactsIntro}
        image="mascots/radarik-notebook"
      >
        <div>
          <TelegramCta dict={dict} />
          <p className="material-summary text-text-muted mt-4">
            {dict.redesign.telegramNote}
          </p>
        </div>
      </EditorialHero>
      <Section className="pt-0">
        <div className="editorial-split border-t border-teal pt-8">
          {["ru", "eu"].map((region) => (
            <div key={region}>
              <p className="editorial-label">
                {region === "ru" ? dict.footer.phoneRu : dict.footer.phoneEu}
              </p>
              <a
                href={`tel:${site.phones[region as "ru" | "eu"].replace(/\s/g, "")}`}
                className="contact-phone"
              >
                {site.phones[region as "ru" | "eu"]}
              </a>
            </div>
          ))}
        </div>
        {locale === "ru" && (
          <div className="mt-10 border-t border-teal pt-8">
            <h2 className="section-heading">{dict.contactsPage.socialsTitle}</h2>
            <ul className="flex flex-wrap gap-x-8 gap-y-4">
              <li>
                <a
                  href={site.socials.threads}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Threads
                </a>
              </li>
              <li>
                <a
                  href={site.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  {dict.contactsPage.telegramCommunity}
                </a>
              </li>
            </ul>
            <p className="material-summary mt-4">
              {dict.contactsPage.telegramJoinNote}
            </p>
          </div>
        )}
      </Section>
      <Section alt>
        <h2 className="section-heading">{dict.style03.directions}</h2>
        <div className="editorial-three">
          {[
            {
              image: "age/age-4-6",
              title: dict.nav.products,
              path: "/produkty",
            },
            {
              image: "scenes/parents-planning",
              title: dict.style03.parentLabel,
              path: "/produkty?age=parents",
            },
            {
              image: "scenes/office-day",
              title: dict.nav.b2b,
              path: "/dlya-biznesa",
            },
          ].map((item) => (
            <article key={item.path}>
              <BrandArt name={item.image} />
              <Link href={localePath(locale, item.path)} className="text-link">
                {item.title} →
              </Link>
            </article>
          ))}
        </div>
      </Section>
      <Section>
        <div className="editorial-split items-start">
          <div>
            <h2 className="section-heading">{dict.contactsPage.formTitle}</h2>
            <p>{dict.contactsPage.intro}</p>
            <p className="material-summary mt-4">
              {dict.redesign.preparedNote}
            </p>
          </div>
          <LeadForm locale={locale} dict={dict} compact />
        </div>
      </Section>
    </>
  );
}
