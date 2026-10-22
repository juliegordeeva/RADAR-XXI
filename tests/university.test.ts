import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  skills,
  sectors,
  foundations,
  demoRadar,
  productSectors,
} from "@/content/competencies";
import { products } from "@/content/products";
import {
  availableInternships,
  internships,
  childAges,
} from "@/content/internships";
import { readUniversityQuery } from "@/lib/university-query";
import { universitySchema } from "@/lib/schemas";

test("12 unique radar axes form four groups; foundation remains outside the radar", () => {
  assert.equal(skills.length, 12);
  assert.equal(new Set(skills.map((s) => s.key)).size, 12);
  assert.equal(new Set(skills.map((s) => s.code)).size, 12);
  assert.deepEqual(
    sectors.map((s) => s.key),
    ["think", "create", "agree", "finish"],
  );
  for (const sector of sectors)
    assert.equal(skills.filter((s) => s.sector === sector.key).length, 3);
  assert.deepEqual(Object.keys(foundations).sort(), ["literacy", "safety"]);
  assert.deepEqual(
    Object.keys(demoRadar).sort(),
    skills.map((s) => s.key).sort(),
  );
  assert.ok(
    Object.values(demoRadar).every((level) => level >= 1 && level <= 4),
  );
});

test("product mappings keep foundation separate and give parent products no child skills", () => {
  const safety = products.find((p) => p.slug === "kartochki-bezopasnosti")!;
  assert.deepEqual(safety.skills, ["empathy", "teamwork"]);
  assert.deepEqual(safety.foundation, ["safety"]);
  assert.deepEqual(productSectors(safety), ["agree"]);
  for (const p of products) {
    assert.ok(p.skills.every((key) => skills.some((s) => s.key === key)));
    if (p.ageGroups.includes("parents")) assert.deepEqual(p.skills, []);
  }
});

test("unready internships cannot be selected and no launch dates or prices are invented", () => {
  assert.equal(availableInternships.length, 4);
  for (const age of childAges)
    assert.ok(availableInternships.some((p) => p.ageGroups.includes(age)));
  for (const p of internships) {
    assert.equal(p.startDate, null);
    assert.equal(p.price, null);
    if (p.type !== "intro") assert.equal(p.available, false);
  }
});

test("Office Day QR prefills a coherent company, program and age", () => {
  assert.deepEqual(
    readUniversityQuery(
      new URLSearchParams("from=office-day&company=TEST&program=intro-7-9"),
    ),
    {
      program: "intro-7-9",
      age: "7-9",
      source: "office-day",
      company: "TEST",
      sector: "",
    },
  );
  assert.equal(
    readUniversityQuery(new URLSearchParams("program=intro-7-9&age=13-16")).age,
    "7-9",
  );
});

test("unknown or unready query values are ignored, including inherited object names", () => {
  for (const value of [
    "missing",
    "constructor",
    "__proto__",
    "profile-think",
  ]) {
    assert.deepEqual(
      readUniversityQuery(
        new URLSearchParams({
          from: value,
          company: "TEST",
          program: value,
          age: value,
          sector: value,
        }),
      ),
      {
        program: "",
        age: "",
        source: "",
        company: "",
        sector: "",
      },
    );
  }
  assert.equal(
    readUniversityQuery(new URLSearchParams("from=cards&company=PRIVATE"))
      .company,
    "",
  );
  assert.equal(
    readUniversityQuery(
      new URLSearchParams({ from: "office-day", company: "x".repeat(200) }),
    ).company.length,
    80,
  );
});

const request = {
  name: "Ирина",
  contact: "@parent_example",
  age: "7-9",
  program: "intro-7-9",
  source: "office-day",
  company: "TEST",
  sector: "agree",
  consent: true,
  website: "",
};
test("request validation accepts phone or Telegram and blocks incoherent or unconsented requests", () => {
  assert.ok(universitySchema.safeParse(request).success);
  assert.ok(
    universitySchema.safeParse({ ...request, contact: "+7 (916) 123-45-67" })
      .success,
  );
  for (const patch of [
    { consent: false },
    { age: "4-6" },
    { program: "project-10-16" },
    { website: "spam" },
    { contact: "?" },
    { contact: "-------" },
    { source: "unknown" },
  ]) {
    assert.equal(
      universitySchema.safeParse({ ...request, ...patch }).success,
      false,
    );
  }
});

test("all new dictionary branches have corresponding Russian and English keys", () => {
  const ru = JSON.parse(readFileSync("content/dictionaries/ru.json", "utf8"));
  const en = JSON.parse(readFileSync("content/dictionaries/en.json", "utf8"));
  function shape(value: unknown): unknown {
    if (Array.isArray(value)) return value.map(shape);
    if (value && typeof value === "object")
      return Object.fromEntries(
        Object.entries(value).map(([k, v]) => [k, shape(v)]),
      );
    assert.ok(typeof value === "string" && value.length > 0);
    return typeof value;
  }
  for (const key of ["journey", "university", "hero", "memo", "how", "what"])
    assert.deepEqual(shape(en[key]), shape(ru[key]));
});
