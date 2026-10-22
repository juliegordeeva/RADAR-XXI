import Link from "next/link";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { BrandArt } from "@/components/ui/BrandArt";
import { localePath } from "@/lib/locale-path";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary";

export function CatalogHero({
  locale,
  dict,
  parentView = false,
}: {
  locale: Locale;
  dict: Dictionary;
  parentView?: boolean;
}) {
  return (
    <EditorialHero
      variant={parentView ? "catalog-parents" : "catalog"}
      eyebrow={
        parentView ? dict.style03.parentLabel : dict.catalog.childrenLabel
      }
      title={parentView ? dict.catalog.parentsTitle : dict.style03.catalogTitle}
      intro={parentView ? dict.catalog.parentsIntro : dict.style03.catalogIntro}
      image={parentView ? "scenes/parents-planning" : "age/age-7-9"}
      imageAlt={
        parentView ? dict.catalog.parentsHeroAlt : dict.catalog.childrenHeroAlt
      }
      artwork={
        parentView ? undefined : (
          <BrandArt name="age/age-4-6" className="catalog-child-secondary" />
        )
      }
    >
      <Link
        href={localePath(
          locale,
          parentView ? "/produkty" : "/produkty?age=parents",
        )}
        className="text-link mt-5"
      >
        {parentView ? dict.catalog.childrenLink : dict.redesign.parentLink} →
      </Link>
    </EditorialHero>
  );
}
