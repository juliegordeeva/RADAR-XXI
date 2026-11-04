import type { Product } from "@/content/types";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function PurchaseButtons({
  product,
  locale,
  dict,
  showHint = true,
}: {
  product: Product;
  locale: Locale;
  dict: Dictionary;
  showHint?: boolean;
}) {
  if (product.comingSoon) return null;

  const calendar = product.availability === "available";
  return (
    <div className="flex min-w-0 flex-col gap-2">
        <Button
          href={calendar ? site.telegram : localePath(locale, `/produkty/${product.slug}#zayavka`)}
          className="w-full md:w-full px-4 text-[15px] md:text-[17px]"
        >
          {calendar ? dict.redesign.calendarAction : dict.catalog.joinWaitlist}
        </Button>
      {showHint && (
          <p className="text-[15px] text-text-muted">{calendar ? dict.redesign.calendarContact : dict.redesign.preparedNote}</p>
      )}
    </div>
  );
}
