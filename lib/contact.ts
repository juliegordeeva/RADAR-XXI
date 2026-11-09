import { site } from "@/lib/site";
export type ContactKind = "corporate" | "materials" | "university";
const personalUrls = {
  corporate: process.env.NEXT_PUBLIC_CORPORATE_CONTACT_URL,
  materials: process.env.NEXT_PUBLIC_MATERIALS_CONTACT_URL,
  university: process.env.NEXT_PUBLIC_UNIVERSITY_CONTACT_URL,
};
export function contactRoute(kind: ContactKind, context: string) {
  let configured: URL | null = null;
  try {
    const value = personalUrls[kind];
    if (value && new URL(value).protocol === "https:")
      configured = new URL(value);
  } catch {
    /* Неверная настройка не должна ломать прямой контакт. */
  }
  const url = configured ?? new URL(site.telegram);
  // У бизнес-ссылки /m/ текст задан владельцем, параметры его не заменяют.
  if (
    url.hostname === "t.me" &&
    /^\/[a-zA-Z][a-zA-Z0-9_]{4,31}\/?$/.test(url.pathname)
  )
    url.searchParams.set("text", `RADAR KIDS: ${context}`);
  return { href: url.toString(), personal: Boolean(configured) };
}
