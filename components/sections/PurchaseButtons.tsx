import type { Product } from "@/content/types";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { loc } from "@/lib/age";
import { localePath } from "@/lib/locale-path";
import { purchaseButtonLabel } from "@/lib/purchase";
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

  const formats = product.purchaseFormats;
  if (!formats?.length) {
    return (
      <Button href={localePath(locale, `/produkty/${product.slug}`)}>
        {loc(product.ctaLabel, locale)}
      </Button>
    );
  }

  return (
    <div className="flex min-w-0 flex-col gap-2">
      {formats.map((format, index) => (
        <Button
          key={format}
          variant={index === 0 ? "primary" : "secondary"}
          href={localePath(
            locale,
            `/produkty/${product.slug}?format=${format}#zayavka`,
          )}
          className="w-full md:w-full px-4 text-[15px] md:text-[17px]"
        >
          {purchaseButtonLabel(format, dict)}
        </Button>
      ))}
      {showHint && (
        <p className="text-[15px] text-text-muted">{dict.catalog.payHint}</p>
      )}
    </div>
  );
}
