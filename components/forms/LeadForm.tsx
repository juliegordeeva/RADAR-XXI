import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import type { PurchaseFormat } from "@/content/types";
import { ContactPanel } from "@/components/forms/ContactPanel";
export function LeadForm({
  locale,
  productName,
  product,
}: {
  locale: Locale;
  dict: Dictionary;
  product?: string;
  productName?: string;
  format?: PurchaseFormat;
  compact?: boolean;
}) {
  return (
    <ContactPanel
      locale={locale}
      kind="materials"
      context={
        productName ??
        product ??
        (locale === "ru"
          ? "Материалы для семейных проектов"
          : "Materials for family projects")
      }
    />
  );
}
