import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { BrandArt } from "@/components/ui/BrandArt";
import { Section } from "@/components/ui/Section";
import { BusinessForm } from "@/components/forms/BusinessForm";
import { b2bHub, experienceUrl } from "@/content/b2b";
import { getDictionary } from "@/lib/dictionary";
import { isLocale } from "@/lib/i18n";
import { loc } from "@/lib/age";
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
      <EditorialHero
        variant="business"
        eyebrow={dict.style03.businessLabel}
        title={dict.style03.b2bTitle}
        intro={loc(b2bHub.subtitle, locale)}
        image="scenes/office-day"
      >
        <div>
          <Button href="#zayavka">{loc(b2bHub.cta, locale)} →</Button>
        </div>
      </EditorialHero>
      <Section>
        <div className="editorial-programs">
          {[
            {
              title: b2bHub.officeTitle,
              text: b2bHub.officeText,
              cta: b2bHub.officeCta,
              path: "office-day",
              image: "scenes/office-day",
            },
            {
              title: b2bHub.hikesTitle,
              text: b2bHub.hikesText,
              cta: b2bHub.hikesCta,
              path: "family-hikes",
              image: "scenes/family-hike",
            },
            {
              title: b2bHub.diaryTitle,
              text: b2bHub.diaryText,
              cta: b2bHub.diaryCta,
              path: "ezhednevnik",
              image: "illustrative-products/diary-cover",
            },
          ].map((item, i) => (
            <article
              key={item.path}
              className={`editorial-split editorial-feature ${i === 1 ? "reverse" : ""}`}
            >
              <div>
                <span className="editorial-number">0{i + 1}</span>
                <h2 className="section-heading">{loc(item.title, locale)}</h2>
                <p className="mb-6">{loc(item.text, locale)}</p>
                <Button href={localePath(locale, `/dlya-biznesa/${item.path}`)}>
                  {loc(item.cta, locale)} →
                </Button>
              </div>
              <figure>
                <BrandArt name={item.image} />
                {i === 2 && (
                  <figcaption className="illustration-caption">
                    {dict.style03.diaryCaption}
                  </figcaption>
                )}
              </figure>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-[65ch] material-summary">
          {loc(b2bHub.boundary, locale)}{" "}
          <a
            href={experienceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            RADAR Experience ↗
          </a>
        </p>
      </Section>
      <Section>
        <Link
          className="text-link"
          href={localePath(locale, "/universitet?from=office-day")}
        >
          {dict.journey.corporateLink}
        </Link>
      </Section>
      <Section id="zayavka" alt>
        <div className="editorial-split items-start">
          <div>
            <p className="editorial-label">{dict.nav.contacts}</p>
            <h2 className="section-heading">{loc(b2bHub.formTitle, locale)}</h2>
            <p>{dict.redesign.preparedNote}</p>
          </div>
          <BusinessForm locale={locale} dict={dict} variant="general" />
        </div>
      </Section>
    </>
  );
}
