"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  internships,
  childAges,
  isChildAge,
  type ChildAge,
} from "@/content/internships";
import { sectorByKey, sectorDotClass } from "@/content/competencies";
import { loc, ageLabels } from "@/lib/age";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { Button } from "@/components/ui/Button";

export function InternshipCatalog({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.university;
  const router = useRouter();
  const path = usePathname();
  const params = useSearchParams();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  const raw = hydrated ? params.get("age") : null;
  const age = isChildAge(raw) ? raw : null;
  function filter(value: ChildAge | null) {
    const next = new URLSearchParams(params.toString());
    if (value) next.set("age", value);
    else next.delete("age");
    router.replace(`${path}${next.size ? `?${next}` : ""}#stazhirovki`, {
      scroll: false,
    });
  }
  function select(slug: string, ages: ChildAge[]) {
    const next = new URLSearchParams(params.toString());
    next.set("program", slug);
    next.set("age", age && ages.includes(age) ? age : ages[0]);
    router.replace(`${path}?${next}#zayavka`, { scroll: false });
    document
      .getElementById("zayavka")
      ?.scrollIntoView({ behavior: "auto", block: "start" });
  }
  return (
    <div>
      <div
        role="group"
        aria-label={dict.journey.age}
        className="filter-chips mb-10"
      >
        <button
          type="button"
          className={`filter-chip ${!age ? "is-selected" : ""}`}
          aria-pressed={!age}
          onClick={() => filter(null)}
        >
          {dict.journey.all}
        </button>
        {childAges.map((value) => (
          <button
            type="button"
            key={value}
            className={`filter-chip ${age === value ? "is-selected" : ""}`}
            aria-pressed={age === value}
            onClick={() => filter(value)}
          >
            {loc(ageLabels[value], locale)}
          </button>
        ))}
      </div>
      {(["intro", "profile", "project"] as const).map((type) => {
        const visible = internships.filter(
          (item) =>
            item.type === type && (!age || item.ageGroups.includes(age)),
        );
        if (!visible.length) return null;
        return (
          <section key={type} className="internship-group">
            <h3 className="mb-6">
              {type === "intro"
                ? t.introGroup
                : type === "profile"
                  ? t.profileGroup
                  : t.projectGroup}
            </h3>
            <div className="internship-grid">
              {visible.map((item) => {
                const ages = item.ageGroups
                  .map((value) => loc(ageLabels[value], locale))
                  .join(" · ");
                return (
                  <article
                    key={item.slug}
                    className="internship-card"
                    data-program={item.slug}
                  >
                    <p className="eyebrow">{ages}</p>
                    <h4>{loc(item.title, locale)}</h4>
                    <p>
                      {typeof item.days === "number"
                        ? item.days
                        : `${item.days.min}–${item.days.max}`}{" "}
                      {t.days}
                    </p>
                    {item.rhythm[locale] && <p>{loc(item.rhythm, locale)}</p>}
                    {item.childDoes.length > 0 && (
                      <div>
                        <p className="font-bold">{t.childDoes}</p>
                        <ul className="list-disc pl-5 space-y-2 mt-3">
                          {item.childDoes.map((line) => (
                            <li key={line.en}>{loc(line, locale)}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {item.finalProject[locale] && (
                      <p>
                        <strong>{t.final}: </strong>
                        {loc(item.finalProject, locale)}
                      </p>
                    )}
                    <ul className="space-y-2">
                      {item.sectors.map((key) => (
                        <li key={key} className="flex items-center gap-2">
                          <span
                            aria-hidden="true"
                            className={`size-2 rounded-full shrink-0 ${sectorDotClass[key]}`}
                          />
                          {loc(sectorByKey[key].title, locale)}
                        </li>
                      ))}
                    </ul>
                    {item.available ? (
                      <>
                        <p className="font-bold">
                          {item.startDate
                            ? new Intl.DateTimeFormat(locale, {
                                dateStyle: "long",
                                timeZone: "UTC",
                              }).format(new Date(item.startDate))
                            : t.waitlist}
                        </p>
                        <p>
                          {item.price === null
                            ? t.priceUnknown
                            : new Intl.NumberFormat(locale, {
                                style: "currency",
                                currency: "RUB",
                                maximumFractionDigits: 0,
                              }).format(item.price)}
                        </p>
                        <Button
                          className="mt-auto"
                          onClick={() => select(item.slug, item.ageGroups)}
                        >
                          {(item.startDate ? t.book : t.joinWaitlist).replace(
                            "{age}",
                            ages,
                          )}
                        </Button>
                      </>
                    ) : (
                      <p className="internship-status">{t.soon}</p>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
