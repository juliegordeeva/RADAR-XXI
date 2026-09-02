import type { CompetencyKey } from "@/content/competencies";
import type { Locale } from "@/lib/i18n";

export type Localized = Record<Locale, string>;

export type AgeGroup = "4-6" | "7-9" | "10-12" | "13-16" | "parents";

export type ProductKind =
  | "calendar"
  | "cards"
  | "advent"
  | "kit"
  | "quest"
  | "course";

export type Product = {
  slug: string;
  kind: ProductKind;
  title: Localized;
  tagline: Localized;
  audience: Localized;
  result: Localized;
  bullets: Localized[];
  format: Localized;
  ageGroups: AgeGroup[];
  competencies: CompetencyKey[];
  ctaLabel: Localized;
  price: number | null;
  image: string;
  featured: boolean;
  composition: Localized[];
  howTo: Localized[];
  delivery: Localized;
  sampleTitle: Localized;
  sampleBody: Localized;
  related: string[];
};
