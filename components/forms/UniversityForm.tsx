"use client";
import { useSearchParams } from "next/navigation";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { readUniversityQuery } from "@/lib/university-query";
import { findInternship } from "@/content/internships";
import { ContactPanel } from "@/components/forms/ContactPanel";
import { loc } from "@/lib/age";
export function UniversityForm({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const params = useSearchParams();
  const selected = readUniversityQuery(new URLSearchParams(params.toString()));
  const program = findInternship(selected.program);
  const name = program ? loc(program.title, locale) : dict.nav.university;
  const context = [
    name,
    program ? selected.age.replace("-", "–") : "",
    selected.company,
  ]
    .filter(Boolean)
    .join(" · ");
  return <ContactPanel locale={locale} kind="university" context={context} />;
}
