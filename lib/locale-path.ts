import type { Locale } from "@/lib/i18n";

export function localePath(locale: Locale, href: string) {
  if (href.startsWith("#")) {
    return href;
  }
  if (href.startsWith("http")) {
    return href;
  }
  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return href;
  }
  const normalized = href.startsWith("/") ? href : `/${href}`;
  if (normalized === "/") {
    return `/${locale}`;
  }
  return `/${locale}${normalized}`;
}

export function stripLocale(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] === "ru" || parts[0] === "en") {
    const rest = parts.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname || "/";
}
