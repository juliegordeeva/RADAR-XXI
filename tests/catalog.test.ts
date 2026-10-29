import { test } from "node:test";
import assert from "node:assert/strict";
import { catalogProducts, products } from "@/content/products";
import { filterCatalogProducts } from "@/lib/catalog-filter";
import { productSectors } from "@/content/competencies";

test("children's default catalogue never includes calendars or diaries for parents", () => {
  const result = filterCatalogProducts(catalogProducts, {
    audience: "children",
    age: null,
    sector: null,
  });
  assert.ok(result.length > 0);
  assert.ok(result.every((product) => !product.ageGroups.includes("parents")));
  assert.ok(result.every((product) => product.inMainCatalog !== false));
});

test("parents get only their calendar and diary even with a stale child competency parameter", () => {
  const result = filterCatalogProducts(catalogProducts, {
    audience: "parents",
    age: "7-9",
    sector: "think",
  });
  assert.deepEqual(result.map((product) => product.slug).sort(), [
    "ezhednevnik-tri-roli",
    "kalendar-32-dnya",
  ]);
});

test("age and competency filters still combine within children's materials", () => {
  const result = filterCatalogProducts(catalogProducts, {
    audience: "children",
    age: "7-9",
    sector: "agree",
  });
  assert.ok(result.length > 0);
  assert.ok(
    result.every(
      (product) =>
        product.ageGroups.includes("7-9") &&
        productSectors(product).includes("agree"),
    ),
  );
  assert.ok(result.every((product) => !product.ageGroups.includes("parents")));
});

test("only the calendar can be obtained now; waitlisted materials expose no sale price or purchase format", () => {
  const available = products.filter((product) => product.availability === "available");
  assert.equal(available.length, 1);
  assert.equal(available[0].slug, "kalendar-32-dnya");
  assert.equal(available[0].price, 800);
  assert.deepEqual(available[0].purchaseFormats, ["pdf"]);
  for (const product of products.filter((item) => item.availability === "waitlist")) {
    assert.equal(product.price, null);
    assert.equal(product.purchaseFormats?.length ?? 0, 0);
  }
  assert.deepEqual(products.find((p) => p.slug === "kartochki-bezopasnosti")!.ageGroups, ["4-6"]);
});
