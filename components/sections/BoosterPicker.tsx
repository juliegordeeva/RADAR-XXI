"use client";
import { useState } from "react";
import {
  sectors,
  productSectors,
  type SectorKey,
} from "@/content/competencies";
import { childAges, type ChildAge } from "@/content/internships";
import type { Product } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { ageLabels, loc } from "@/lib/age";
import { ProductCard } from "@/components/sections/ProductCard";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function BoosterPicker({
  products,
  locale,
  dict,
}: {
  products: Product[];
  locale: Locale;
  dict: Dictionary;
}) {
  const [age, setAge] = useState<ChildAge>("7-9");
  const [sector, setSector] = useState<SectorKey>("think");
  const params = useSearchParams();
  const router = useRouter();
  const path = usePathname();
  const matches = products
    .filter(
      (product) =>
        !product.comingSoon &&
        product.developmentStatus !== "draft" &&
        product.inMainCatalog !== false &&
        product.ageGroups.includes(age) &&
        productSectors(product).includes(sector),
    )
    .slice(0, 3);
  function interest() {
    const next = new URLSearchParams(params.toString());
    next.set("age", age);
    next.set("sector", sector);
    next.set("program", `intro-${age}`);
    router.replace(`${path}?${next}#zayavka`, { scroll: false });
    document
      .getElementById("zayavka")
      ?.scrollIntoView({ block: "start", behavior: "auto" });
  }
  return (
    <div>
      <div
        role="group"
        aria-label={dict.journey.age}
        className="filter-chips mb-5"
      >
        {childAges.map((value) => (
          <button
            key={value}
            type="button"
            className={`filter-chip ${age === value ? "is-selected" : ""}`}
            aria-pressed={age === value}
            onClick={() => setAge(value)}
          >
            {loc(ageLabels[value], locale)}
          </button>
        ))}
      </div>
      <div
        role="group"
        aria-label={dict.journey.sectorFilter}
        className="filter-chips mb-8"
      >
        {sectors.map((item) => (
          <button
            key={item.key}
            type="button"
            className={`filter-chip ${sector === item.key ? "is-selected" : ""}`}
            aria-pressed={sector === item.key}
            onClick={() => setSector(item.key)}
          >
            {loc(item.title, locale)}
          </button>
        ))}
      </div>
      <p className="mb-5" aria-live="polite">
        {dict.university.boostSelection
          .replace("{age}", loc(ageLabels[age], locale))
          .replace(
            "{sector}",
            loc(sectors.find((item) => item.key === sector)!.title, locale),
          )}
      </p>
      {matches.length ? (
        <div className="booster-grid">
          {matches.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              locale={locale}
              dict={dict}
              compact
            />
          ))}
        </div>
      ) : (
        <div className="booster-empty" role="status">
          <p>{dict.university.boostEmpty}</p>
          <button type="button" onClick={interest} className="text-link mt-5">
            {dict.university.boostInterest}
          </button>
        </div>
      )}
    </div>
  );
}
