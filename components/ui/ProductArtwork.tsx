import type { Product } from "@/content/types";
import { BrandArt } from "@/components/ui/BrandArt";
import { CalendarPreview } from "@/components/ui/CalendarPreview";
import type { Dictionary } from "@/lib/dictionary";

export function ProductArtwork({
  product,
  dict,
  priority = false,
}: {
  product: Product;
  dict: Dictionary;
  priority?: boolean;
}) {
  if (product.slug === "kalendar-32-dnya")
    return (
      <CalendarPreview alt={dict.style03.calendarCaption} priority={priority} />
    );
  const name =
    product.slug === "ezhednevnik-tri-roli"
      ? "illustrative-products/diary-cover"
      : product.slug === "kartochki-bezopasnosti"
        ? "scenes/store-help"
        : product.ageGroups.includes("13-16")
          ? "age/age-13-16"
          : product.ageGroups.includes("10-12")
            ? "age/age-10-12"
            : product.kind === "quest"
              ? "scenes/family-map"
              : product.kind === "cards"
                ? "scenes/family-table"
                : "scenes/child-builds";
  return (
    <BrandArt
      name={name}
      alt={dict.style03.illustrationAlt}
      priority={priority}
    />
  );
}
