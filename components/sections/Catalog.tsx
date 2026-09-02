"use client";

import { useCallback } from "react";
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
}: {
  products: Product[];
  locale: Locale;
  dict: Dictionary;
  title: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const ageParam = params.get("age");
  const age = isAgeGroup(ageParam) ? ageParam : null;
  const competencyParam = params.get("competency");
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
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [params, pathname, router],
  );

  const visible = products.filter((product) => {
    if (age && !product.ageGroups.includes(age)) return false;
    if (competency && !product.competencies.includes(competency)) return false;
    return true;
  });

  const ageFilters: Array<{ id: AgeGroup | "all"; label: string }> = [
    { id: "all", label: dict.catalog.all },
    ...ageOrder.map((item) => ({ id: item, label: ageFilterLabels[item][locale] })),
  ];

  return (
    <div>
      <h2 className="font-heading text-[28px] md:text-[40px] leading-tight mb-8 max-w-[65ch]">
        {title}
      </h2>
      <p className="text-[15px] text-text-muted mb-3">{dict.catalog.byAge}</p>
      <div
        role="tablist"
        aria-label={dict.catalog.byAge}
        className="flex flex-wrap gap-2 mb-6"
      >
        {ageFilters.map((filter) => {
          const active =
            (filter.id === "all" && !age) || (filter.id !== "all" && age === filter.id);
          return (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() =>
                replaceQuery({ age: filter.id === "all" ? null : filter.id })
              }
              className={cn(
                "min-h-12 px-4 rounded-full border text-[15px] transition-colors duration-150",
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
      <p className="text-[15px] text-text-muted mb-3">{dict.catalog.byAbility}</p>
      <div
        role="tablist"
        aria-label={dict.catalog.byAbility}
        className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8"
      >
        <button
          type="button"
          role="tab"
          aria-selected={!competency}
          onClick={() => replaceQuery({ competency: null })}
          className={cn(
            "min-h-12 px-4 rounded-full border text-[15px] transition-colors duration-150",
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
            <span key={group} className="inline-flex flex-wrap gap-2">
              {filterCompetencyKeys
                .filter((key) => competencyByKey[key].group === group)
                .map((key) => {
                  const item = competencyByKey[key];
                  const active = competency === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => replaceQuery({ competency: key })}
                      className={cn(
                        "min-h-12 px-4 rounded-full border text-[15px] inline-flex items-center gap-2 transition-colors duration-150",
                        active
                          ? "bg-deep text-deep-text border-deep"
                          : "bg-surface text-text border-border hover:border-text",
                      )}
                    >
                      <span
                        className={cn(
                          "size-1.5 rounded-full",
                          active ? "bg-deep-text" : groupDotClass[item.group],
                        )}
                      />
                      {loc(item.title, locale)}
                    </button>
                  );
                })}
            </span>
          ))}
      </div>
      {visible.length === 0 ? (
        <div className="rounded-[16px] border border-border bg-surface p-8 space-y-5">
          <p>{dict.catalog.empty}</p>
          <Button
            variant="secondary"
            onClick={() => replaceQuery({ age: null, competency: null })}
          >
            {dict.catalog.reset}
          </Button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              locale={locale}
              dict={dict}
            />
          ))}
        </div>
      )}
    </div>
  );
}
