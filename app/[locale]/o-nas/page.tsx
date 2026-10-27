import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { BrandArt } from "@/components/ui/BrandArt";
import Image from "next/image";
import { team } from "@/content/team";
import { loc } from "@/lib/age";
import { assetPath } from "@/lib/asset";
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
    <>
      <EditorialHero
        variant="team"
        eyebrow={dict.style03.teamLabel}
        title={dict.style03.teamTitle}
        intro={dict.aboutPage.intro[0]}
        image="mascots/radarik-books"
      />
      <Section>
        <div className="mb-12 max-w-[65ch] space-y-4">
          {dict.aboutPage.intro.slice(1).map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
        <div className="team-editorial">
          {team.map((member) => (
            <article key={member.id}>
              <figure className="team-portrait">
                <BrandArt
                  name="decor/foliage-corner"
                  className="team-portrait-foliage"
                />
                <Image
                  src={assetPath(
                    `/images/radar/team/${member.photo?.split("/").pop()}`,
                  )}
                  alt={loc(locale === "en" ? member.aboutRole || member.role : member.photoAlt, locale)}
                  width={member.id === "julia" ? 900 : 500}
                  height={member.id === "julia" ? 1200 : 500}
                  sizes="(max-width:767px) 100vw, 500px"
                />
              </figure>
              <div>
                <p className="editorial-label">
                  {loc(member.aboutRole || member.role, locale)}
                </p>
                <h2 className="section-heading">{loc(locale === "en" ? member.aboutRole || member.role : member.name, locale)}</h2>
                <p className="max-w-[55ch]">
                  {loc(member.aboutBio || member.bio, locale)}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-12 max-w-[65ch]">
          {dict.aboutPage.experts}{" "}
          <Link
            href={localePath(locale, "/dlya-biznesa")}
            className="text-link"
          >
            {dict.nav.b2b} →
          </Link>
        </p>
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
              image: "scenes/parent-reflection",
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
    </>
  );
}
