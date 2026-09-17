import type { AgeGroup, Localized } from "@/content/types";
import type { Locale } from "@/lib/i18n";

export const ageOrder: AgeGroup[] = [
  "4-6",
  "7-10",
  "11-12",
  "12-16",
  "parents",
];

export const ageLabels: Record<AgeGroup, Localized> = {
  "4-6": { ru: "4–6 лет", en: "4–6 лет" },
  "7-10": { ru: "7–10 лет", en: "7–10 лет" },
  "11-12": { ru: "11–12 лет", en: "11–12 лет" },
  "12-16": { ru: "12–16 лет", en: "12–16 лет" },
  parents: { ru: "Родителям", en: "Родителям" },
};

export const ageFilterLabels: Record<AgeGroup, Localized> = {
  "4-6": { ru: "4–6", en: "4–6" },
  "7-10": { ru: "7–10", en: "7–10" },
  "11-12": { ru: "11–12", en: "11–12" },
  "12-16": { ru: "12–16", en: "12–16" },
  parents: { ru: "Родителям", en: "Родителям" },
};

export const ageBadgeClass: Record<AgeGroup, string> = {
  "4-6": "bg-age-4-6 text-text",
  "7-10": "bg-age-7-10 text-white",
  "11-12": "bg-age-11-12 text-white",
  "12-16": "bg-age-12-16 text-white",
  parents: "bg-age-parents text-bg",
};

export function formatAgeGroups(groups: AgeGroup[], locale: Locale) {
  return groups.map((group) => ageLabels[group][locale]).join(" · ");
}

export function loc(value: Localized, locale: Locale) {
  return value[locale];
}
