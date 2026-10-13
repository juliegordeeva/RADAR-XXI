import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { StorySection } from "@/components/sections/StorySection";
import { Section } from "@/components/ui/Section";
import { BusinessForm } from "@/components/forms/BusinessForm";
import { experienceUrl, familyHikes } from "@/content/b2b";
import { getDictionary } from "@/lib/dictionary";
import { isLocale } from "@/lib/i18n";
import { loc } from "@/lib/age";
import { isPlaceholderLoc } from "@/lib/placeholder";
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
      <EditorialHero
        variant="hikes"
        eyebrow={dict.style03.businessLabel}
        title={loc(familyHikes.title, locale)}
        intro={loc(familyHikes.subtitle, locale)}
        image="scenes/family-hike"
      >
        <div>
          <Button href="#zayavka">{loc(familyHikes.cta, locale)} →</Button>
        </div>
      </EditorialHero>
      <Section alt>
        <h2 className="section-heading">
          {loc(familyHikes.needTitle, locale)}
        </h2>
        <ol className="editorial-competencies">
          {familyHikes.needItems.map((item, i) => (
            <li key={item.ru} className="border-t border-teal py-4">
              <span className="editorial-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p>{loc(item, locale)}</p>
            </li>
          ))}
        </ol>
      </Section>
      <StorySection
        title={loc(familyHikes.title, locale)}
        image="scenes/family-map"
      >
        <p>{loc(familyHikes.intro, locale)}</p>
        {!isPlaceholderLoc(familyHikes.expert) && (
          <div>
            <h3>{loc(familyHikes.expertTitle, locale)}</h3>
            <p>{loc(familyHikes.expertName, locale)}</p>
            <p>{loc(familyHikes.expert, locale)}</p>
          </div>
        )}
        <p className="material-summary">
          {loc(familyHikes.boundary, locale)}{" "}
          <a
            href={experienceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            RADAR Experience ↗
          </a>
        </p>
      </StorySection>
      <Section id="zayavka" alt>
        <div className="editorial-split items-start">
          <div>
            <h2 className="section-heading">
              {loc(familyHikes.formTitle, locale)}
            </h2>
            <p>{dict.redesign.preparedNote}</p>
          </div>
          <BusinessForm locale={locale} dict={dict} variant="hikes" />
        </div>
      </Section>
    </>
  );
}
