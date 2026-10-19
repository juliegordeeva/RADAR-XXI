import type { AgeGroup, Localized } from "@/content/types";
import type { Locale } from "@/lib/i18n";

export const ageOrder: AgeGroup[] = ["4-6", "7-9", "10-12", "13-16", "parents"];

export const ageLabels: Record<AgeGroup, Localized> = {
  "4-6": { ru: "4–6 лет", en: "ages 4–6" },
  "7-9": { ru: "7–9 лет", en: "ages 7–9" },
  "10-12": { ru: "10–12 лет", en: "ages 10–12" },
  "13-16": { ru: "13–16 лет", en: "ages 13–16" },
  parents: { ru: "Родителям", en: "For parents" },
};

export const ageFilterLabels: Record<AgeGroup, Localized> = {
  "4-6": { ru: "4–6", en: "4–6" },
  "7-9": { ru: "7–9", en: "7–9" },
  "10-12": { ru: "10–12", en: "10–12" },
  "13-16": { ru: "13–16", en: "13–16" },
  parents: { ru: "Родителям", en: "Parents" },
};

export const ageBadgeClass: Record<AgeGroup, string> = {
  "4-6": "bg-age-4-6 text-text",
  "7-9": "bg-age-7-9 text-text",
  "10-12": "bg-age-10-12 text-text",
  "13-16": "bg-age-13-16 text-text",
  parents: "bg-age-parents text-text",
};

export function formatAgeGroups(groups: AgeGroup[], locale: Locale) {
  return groups.map((group) => ageLabels[group][locale]).join(" · ");
}

export function loc(value: Localized, locale: Locale) {
  return value[locale];
}
