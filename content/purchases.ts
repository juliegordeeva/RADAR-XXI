import type { Localized, Product } from "@/content/types";
export type PurchaseSetup = {
  price: number | null;
  checkoutUrl: string | null;
  filesApproved: boolean;
  receiving: Localized | null;
};
const pending = (): PurchaseSetup => ({
  price: null,
  checkoutUrl: null,
  filesApproved: false,
  receiving: null,
});
// Отдельная настройка для каждого выдаваемого комплекта. Заполняется после проверки владельцем.
export const purchases: Record<string, PurchaseSetup> = {
  "advent-4-6": pending(),
  "advent-7-9": pending(),
  "advent-10-12": pending(),
  "komplekt-5-6": pending(),
  "kalendar-32-dnya": { ...pending(), price: 800 },
};
export function purchaseFor(product: Pick<Product, "slug">) {
  const setup = purchases[product.slug];
  let validUrl = false;
  try {
    validUrl = Boolean(
      setup?.checkoutUrl && new URL(setup.checkoutUrl).protocol === "https:",
    );
  } catch {}
  const active = Boolean(
    setup &&
      validUrl &&
      setup.filesApproved &&
      setup.price !== null &&
      setup.price > 0 &&
      setup.receiving?.ru.trim() &&
      setup.receiving?.en.trim(),
  );
  return { setup, active };
}

export function applyPurchaseSetup(product: Product): Product {
  const { setup, active } = purchaseFor(product);
  if (!active || !setup) return product;
  return {
    ...product,
    availability: "available",
    price: setup.price,
    purchaseFormats: ["pdf"],
    seo: {
      ru: {
        title: product.seo?.ru?.title ?? `${product.title.ru} | RADAR KIDS`,
        description: `${product.tagline.ru} ${product.format.ru}. ${setup.price} ₽. ${setup.receiving!.ru}`,
      },
      en: {
        title: product.seo?.en?.title ?? `${product.title.en} | RADAR KIDS`,
        description: `${product.tagline.en} ${product.format.en}. RUB ${setup.price}. ${setup.receiving!.en}`,
      },
    },
  };
}
