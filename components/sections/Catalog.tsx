"use client";

import Link from "next/link";
import { localePath } from "@/lib/locale-path";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { AgeGroup, Product } from "@/content/types";
import { ageFilterLabels, ageOrder } from "@/lib/age";
import {
  sectors,
  sectorDotClass,
  isSectorKey,
  type SectorKey,
} from "@/content/competencies";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { loc } from "@/lib/age";
import { cn } from "@/lib/cn";
import { ParentMaterials } from "@/components/sections/ParentMaterials";
import { ProductCard } from "@/components/sections/ProductCard";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { CatalogHero } from "@/components/sections/CatalogHero";
import { filterCatalogProducts } from "@/lib/catalog-filter";

function isAgeGroup(value: string | null): value is AgeGroup {
  return Boolean(value && ageOrder.includes(value as AgeGroup));
}

export function Catalog({
  products,
  locale,
  dict,
  title,
  compact = false,
}: {
  products: Product[];
  locale: Locale;
  dict: Dictionary;
  title: string;
  compact?: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  // При статическом экспорте первый клиентский список должен совпасть с HTML.
  const ageParam = hydrated ? params.get("age") : null;
  const age = isAgeGroup(ageParam) ? ageParam : null;
  const parentView = !compact && age === "parents";
  const childAge = age && age !== "parents" ? age : null;
  const sectorParam = hydrated ? params.get("sector") : null;
  const sector = !parentView && isSectorKey(sectorParam) ? sectorParam : null;
  useEffect(() => {
    if (compact) return;
    document.title = parentView
      ? dict.meta.parentMaterialsTitle
      : dict.meta.productsTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        parentView
          ? dict.meta.parentMaterialsDescription
          : dict.meta.productsDescription,
      );
  }, [compact, parentView, dict]);

  const replaceQuery = useCallback(
    (patch: { age?: AgeGroup | null; sector?: SectorKey | null }) => {
      const next = new URLSearchParams(params.toString());
      if ("age" in patch) {
        if (patch.age) next.set("age", patch.age);
        else next.delete("age");
      }
      if ("sector" in patch) {
        if (patch.sector) next.set("sector", patch.sector);
        else next.delete("sector");
      }
      const query = next.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [params, pathname, router],
  );

  const visible = filterCatalogProducts(products, {
    audience: parentView ? "parents" : "children",
    age: childAge,
    sector,
  });

  const displayed = compact ? visible.slice(0, 3) : visible;
  const catalogQuery = new URLSearchParams();
  if (childAge) catalogQuery.set("age", childAge);
  if (sector) catalogQuery.set("sector", sector);
  const catalogHref = localePath(
    locale,
    `/produkty${catalogQuery.size ? `?${catalogQuery}` : ""}`,
  );

  const ageFilters: Array<{ id: AgeGroup | "all"; label: string }> = [
    { id: "all", label: dict.catalog.all },
    ...ageOrder
      .filter((item) => item !== "parents")
      .map((item) => ({ id: item, label: ageFilterLabels[item][locale] })),
  ];

  const content = (
    <div className={compact ? "catalog-compact" : "catalog-full"}>
      <h2 className={compact ? "section-heading" : "sr-only"}>
        {parentView ? dict.catalog.parentProductsTitle : title}
      </h2>
      {parentView ? (
        <>
          <p className="parent-catalog-intro">{dict.catalog.parentsHint}</p>
          <ParentMaterials items={visible} locale={locale} dict={dict} />
        </>
      ) : (
        <>
          <Link
            href={localePath(locale, "/universitet")}
            className="text-link mb-6"
          >
            {dict.catalog.universityLink}
          </Link>
          {compact && (
            <p className="text-text-muted mb-6">{dict.redesign.catalogIntro}</p>
          )}
          <p className="text-[14px] text-text-muted mb-3">
            {dict.catalog.byAge}
          </p>
          <div
            role="group"
            aria-label={dict.catalog.byAge}
            className="flex flex-wrap gap-2 mb-6"
          >
            {ageFilters.map((filter) => {
              const active =
                (filter.id === "all" && !childAge) ||
                (filter.id !== "all" && childAge === filter.id);
              return (
                <button
                  key={filter.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() =>
                    replaceQuery({
                      age: filter.id === "all" ? null : filter.id,
                    })
                  }
                  className={cn(
                    "min-h-12 h-auto py-2 px-4 max-w-full rounded-full border text-[14px] whitespace-normal leading-snug text-left transition-colors duration-150",
                    active
                      ? "bg-deep text-deep-text border-deep"
                      : "bg-surface text-text border-border hover:border-text",
                  )}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
          <p className="text-[15px] mb-3">{dict.journey.sectorFilter}</p>
          <div
            role="group"
            aria-label={dict.journey.sectorFilter}
            className="filter-chips mb-8"
          >
            <button
              type="button"
              className={`filter-chip ${!sector ? "is-selected" : ""}`}
              aria-pressed={!sector}
              onClick={() => replaceQuery({ sector: null })}
            >
              {dict.catalog.all}
            </button>
            {sectors.map((item) => (
              <button
                type="button"
                key={item.key}
                className={`filter-chip ${sector === item.key ? "is-selected" : ""}`}
                aria-pressed={sector === item.key}
                onClick={() => replaceQuery({ sector: item.key })}
              >
                <span
                  aria-hidden="true"
                  className={`size-1.5 rounded-full shrink-0 ${sectorDotClass[item.key]}`}
                />
                {loc(item.title, locale)}
              </button>
            ))}
          </div>
          {(childAge || sector) && (
            <button
              type="button"
              className="text-link mb-4"
              onClick={() => replaceQuery({ age: null, sector: null })}
            >
              {dict.catalog.reset}
            </button>
          )}
          {visible.length === 0 ? (
            <div className="rounded-[16px] border border-border bg-surface p-8 space-y-5">
              <p>{compact ? dict.redesign.catalogEmpty : dict.catalog.empty}</p>
              <Button
                variant="secondary"
                onClick={() => replaceQuery({ age: null, sector: null })}
              >
                {dict.catalog.reset}
              </Button>
            </div>
          ) : (
            <div
              className={
                compact
                  ? "grid gap-4 md:grid-cols-2 xl:grid-cols-3"
                  : "catalog-products grid gap-6 md:grid-cols-2"
              }
            >
              {displayed.map((product) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  locale={locale}
                  dict={dict}
                />
              ))}
            </div>
          )}
        </>
      )}
      {compact && (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <Link href={catalogHref} className="text-link">
            {dict.redesign.catalogLink} →
          </Link>
          <Link
            href={localePath(locale, "/produkty?age=parents")}
            className="text-link"
          >
            {dict.redesign.parentLink} →
          </Link>
          <p className="w-full material-summary text-text-muted">
            {dict.redesign.catalogNote}
          </p>
        </div>
      )}
    </div>
  );
  if (compact) return content;
  return (
    <>
      <CatalogHero locale={locale} dict={dict} parentView={parentView} />
      <Section
        id="catalog-materials"
        className={
          parentView ? "catalog-parent-section" : "catalog-child-section"
        }
      >
        {content}
      </Section>
    </>
  );
}
