import type { AgeGroup, Product } from "@/content/types";
import { productSectors, type SectorKey } from "@/content/competencies";

export function filterCatalogProducts(
  products: Product[],
  filters: {
    audience: "children" | "parents";
    age: Exclude<AgeGroup, "parents"> | null;
    sector: SectorKey | null;
  },
) {
  return products.filter((product) => {
    const forParents = product.ageGroups.includes("parents");
    if (forParents !== (filters.audience === "parents")) return false;
    // Детские параметры старой ссылки не должны скрывать взрослые материалы.
    if (forParents) return product.inMainCatalog !== false;
    if (product.inMainCatalog === false && !filters.age) return false;
    if (filters.age && !product.ageGroups.includes(filters.age)) return false;
    if (filters.sector && !productSectors(product).includes(filters.sector))
      return false;
    return true;
  });
}
