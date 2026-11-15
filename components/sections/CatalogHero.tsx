import Link from "next/link";
import type { ReactNode } from "react";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { Section } from "@/components/ui/Section";
import { localePath } from "@/lib/locale-path";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary";

export function CatalogHero({
  locale,
  dict,
  parentView = false,
  featured,
}: {
  locale: Locale;
  dict: Dictionary;
  parentView?: boolean;
  featured?: ReactNode;
}) {
  if (!parentView)
    return (
      <Section className="editorial-hero family-catalog-start">
        <p className="editorial-label">
          {locale === "ru" ? "Материалы RADAR KIDS" : "RADAR KIDS materials"}
        </p>
        <h1>{dict.style03.catalogTitle}</h1>
        <p className="editorial-intro">{dict.style03.catalogIntro}</p>
        <div className="family-catalog-links">
          <a href="#catalog-materials" className="text-link">
            {locale === "ru"
              ? "Подобрать другие материалы"
              : "Explore other materials"}{" "}
            ↓
          </a>
          <Link
            href={localePath(locale, "/produkty?age=parents")}
            className="text-link"
          >
            {dict.redesign.parentLink} →
          </Link>
        </div>
        {featured}
      </Section>
    );
  return (
    <EditorialHero
      variant="catalog-parents"
      eyebrow={dict.style03.parentLabel}
      title={dict.catalog.parentsTitle}
      intro={dict.catalog.parentsIntro}
      image="scenes/parents-planning"
      imageAlt={dict.catalog.parentsHeroAlt}
    >
      <Link href={localePath(locale, "/produkty")} className="text-link mt-5">
        {dict.catalog.childrenLink} →
      </Link>
    </EditorialHero>
  );
}
