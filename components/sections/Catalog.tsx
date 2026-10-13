"use client";

import Link from "next/link";
import { localePath } from "@/lib/locale-path";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { AgeGroup, Product } from "@/content/types";
import { ageFilterLabels, ageOrder } from "@/lib/age";
import {
  filterCompetencyKeys,
  competencyByKey,
  competencyGroupOrder,
  groupDotClass,
  isCompetencyKey,
} from "@/content/competencies";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { loc } from "@/lib/age";
import { cn } from "@/lib/cn";
import { ParentMaterials } from "@/components/sections/ParentMaterials";
import { ProductCard } from "@/components/sections/ProductCard";
import { Button } from "@/components/ui/Button";

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
  const competencyParam = hydrated ? params.get("competency") : null;
  const competency = isCompetencyKey(competencyParam) ? competencyParam : null;

  const replaceQuery = useCallback(
    (patch: { age?: AgeGroup | null; competency?: string | null }) => {
      const next = new URLSearchParams(params.toString());
      if ("age" in patch) {
        if (patch.age) next.set("age", patch.age);
        else next.delete("age");
      }
      if ("competency" in patch) {
        if (patch.competency) next.set("competency", patch.competency);
        else next.delete("competency");
      }
      const query = next.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [params, pathname, router],
  );

  const visible = products.filter((product) => {
    if (product.inMainCatalog === false && !age) return false;
    if (age && !product.ageGroups.includes(age)) return false;
    if (competency && !product.competencies.includes(competency)) return false;
    return true;
  });

  const displayed = compact
    ? visible.slice(0, 3)
    : visible.filter((product) => !product.ageGroups.includes("parents"));
  const parents = compact
    ? []
    : visible.filter((product) => product.ageGroups.includes("parents"));
  const catalogQuery = new URLSearchParams();
  if (age) catalogQuery.set("age", age);
  if (competency) catalogQuery.set("competency", competency);
  const catalogHref = localePath(
    locale,
    `/produkty${catalogQuery.size ? `?${catalogQuery}` : ""}`,
  );

  const ageFilters: Array<{ id: AgeGroup | "all"; label: string }> = [
    { id: "all", label: dict.catalog.all },
    ...ageOrder
      .filter((item) => !compact || item !== "parents")
      .map((item) => ({ id: item, label: ageFilterLabels[item][locale] })),
  ];

  return (
    <div className={compact ? "catalog-compact" : "catalog-full"}>
      <h2 className={compact ? "section-heading" : "sr-only"}>{title}</h2>
      {compact && (
        <p className="text-text-muted mb-6">{dict.redesign.catalogIntro}</p>
      )}
      <p className="text-[14px] text-text-muted mb-3">{dict.catalog.byAge}</p>
      <div
        role="group"
        aria-label={dict.catalog.byAge}
        className="flex flex-wrap gap-2 mb-6"
      >
        {ageFilters.map((filter) => {
          const active =
            (filter.id === "all" && !age) ||
            (filter.id !== "all" && age === filter.id);
          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={active}
              onClick={() =>
                replaceQuery({ age: filter.id === "all" ? null : filter.id })
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
      {!compact && (
        <>
          <p className="text-[15px] text-text-muted mb-3">
            {dict.catalog.byAbility}
          </p>
          <div
            role="group"
            aria-label={dict.catalog.byAbility}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8"
          >
            <button
              type="button"
              aria-pressed={!competency}
              onClick={() => replaceQuery({ competency: null })}
              className={cn(
                "min-h-12 h-auto py-2 px-4 max-w-full rounded-full border text-[14px] whitespace-normal leading-snug text-left transition-colors duration-150",
                !competency
                  ? "bg-deep text-deep-text border-deep"
                  : "bg-surface text-text border-border hover:border-text",
              )}
            >
              {dict.catalog.all}
            </button>
            {competencyGroupOrder
              .filter((group) => group !== "literacy")
              .map((group) => (
                <span
                  key={group}
                  className="inline-flex max-w-full flex-wrap gap-2"
                >
                  {filterCompetencyKeys
                    .filter((key) => competencyByKey[key].group === group)
                    .map((key) => {
                      const item = competencyByKey[key];
                      const active = competency === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          aria-pressed={active}
                          onClick={() => replaceQuery({ competency: key })}
                          className={cn(
                            "min-h-12 h-auto py-2 px-4 max-w-full rounded-full border text-[14px] inline-flex items-center gap-2 whitespace-normal leading-snug text-left transition-colors duration-150",
                            active
                              ? "bg-deep text-deep-text border-deep"
                              : "bg-surface text-text border-border hover:border-text",
                          )}
                        >
                          <span
                            className={cn(
                              "size-1.5 rounded-full",
                              active
                                ? "bg-deep-text"
                                : groupDotClass[item.group],
                            )}
                          />
                          {loc(item.title, locale)}
                        </button>
                      );
                    })}
                </span>
              ))}
          </div>
        </>
      )}
      {(age || competency) && (
        <button
          type="button"
          className="text-link mb-4"
          onClick={() => replaceQuery({ age: null, competency: null })}
        >
          {dict.catalog.reset}
        </button>
      )}
      {parents.length > 0 && (
        <ParentMaterials items={parents} locale={locale} dict={dict} />
      )}
      {visible.length === 0 ? (
        <div className="rounded-[16px] border border-border bg-surface p-8 space-y-5">
          <p>{compact ? dict.redesign.catalogEmpty : dict.catalog.empty}</p>
          <Button
            variant="secondary"
            onClick={() => replaceQuery({ age: null, competency: null })}
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
}
