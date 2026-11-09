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
  const available = products.filter(
    (product) => product.availability === "available",
  );
  assert.equal(available.length, 1);
  assert.equal(available[0].slug, "kalendar-32-dnya");
  assert.equal(available[0].price, 800);
  assert.deepEqual(available[0].purchaseFormats, ["pdf"]);
  for (const product of products.filter(
    (item) => item.availability === "waitlist",
  )) {
    assert.equal(product.price, null);
    assert.equal(product.purchaseFormats?.length ?? 0, 0);
  }
  assert.deepEqual(
    products.find((p) => p.slug === "kartochki-bezopasnosti")!.ageGroups,
    ["4-6"],
  );
});

import {
  purchaseFor,
  purchases,
  applyPurchaseSetup,
} from "@/content/purchases";
import { existsSync } from "node:fs";
test("four primary offers use confirmed PDF content and separate blocked purchase configurations", () => {
  const primary = products.filter((p) => p.primary);
  assert.deepEqual(primary.map((p) => p.slug).sort(), [
    "advent-10-12",
    "advent-4-6",
    "advent-7-9",
    "komplekt-5-6",
  ]);
  for (const p of primary) {
    assert.equal(purchaseFor(p).active, false);
    assert.ok(p.previews?.length);
    for (const preview of p.previews!)
      assert.ok(
        existsSync(`public/images/radar/material-previews/${preview.file}`),
      );
    if (p.kind === "advent") {
      assert.match(p.format.ru, /28/);
      assert.doesNotMatch(JSON.stringify(p), /24 дня|24 days/);
    }
  }
  const bundle = products.find((p) => p.slug === "komplekt-5-6")!;
  assert.equal(bundle.ageLabel?.ru, "5–6 лет");
  assert.match(bundle.composition[2].ru, /23 двусторонние/);
  assert.match(bundle.composition[2].ru, /24 пиктограммы/);
  assert.equal(
    products.find((p) => p.slug === "kartochki-bezopasnosti")?.ageLabel?.ru,
    "3–6 лет",
  );
});
test("checkout remains blocked until price, URL, files and receiving details are approved", () => {
  const previous = purchases["advent-4-6"];
  try {
    purchases["advent-4-6"] = {
      price: 123,
      checkoutUrl: "https://example.org/confirmed-checkout",
      filesApproved: false,
      receiving: { ru: "Тестовый срок выдачи", en: "Test delivery timing" },
    };
    assert.equal(purchaseFor({ slug: "advent-4-6" }).active, false);
    purchases["advent-4-6"].filesApproved = true;
    assert.equal(purchaseFor({ slug: "advent-4-6" }).active, true);
    assert.equal(purchaseFor({ slug: "komplekt-5-6" }).active, false);
    const released = applyPurchaseSetup(
      products.find((p) => p.slug === "advent-4-6")!,
    );
    assert.equal(released.price, 123);
    assert.equal(released.availability, "available");
    assert.doesNotMatch(released.seo!.ru!.description, /Готовим к выпуску/);

    purchases["advent-4-6"].receiving = null;
    assert.equal(purchaseFor({ slug: "advent-4-6" }).active, false);
  } finally {
    purchases["advent-4-6"] = previous;
  }
});
