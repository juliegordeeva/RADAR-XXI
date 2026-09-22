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
}: {
  product: Product;
  locale: Locale;
  dict: Dictionary;
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
    <div className="flex flex-col gap-3">
      {formats.map((format, index) => (
        <Button
          key={format}
          variant={index === 0 ? "primary" : "secondary"}
          href={localePath(
            locale,
            `/produkty/${product.slug}?format=${format}#zayavka`,
          )}
          className="w-full md:w-full"
        >
          {purchaseButtonLabel(format, dict)}
        </Button>
      ))}
    </div>
  );
}
