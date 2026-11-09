import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { ContactPanel } from "@/components/forms/ContactPanel";
export type BusinessFormVariant =
  | "general"
  | "office"
  | "sports"
  | "hikes"
  | "diary";
export function BusinessForm({
  locale,
  variant,
  productName,
}: {
  locale: Locale;
  dict: Dictionary;
  variant: BusinessFormVariant;
  productName?: string;
}) {
  const names = {
    general: ["Корпоративные программы", "Corporate programmes"],
    office: ["Офисные приключения", "Office adventures"],
    sports: ["Спортивные приключения в Москве", "Sports adventures in Moscow"],
    hikes: ["Семейный поход", "Family hike"],
    diary: ["Корпоративный ежедневник", "Corporate diary"],
  };
  return (
    <ContactPanel
      locale={locale}
      kind="corporate"
      context={productName ?? names[variant][locale === "ru" ? 0 : 1]}
    />
  );
}
