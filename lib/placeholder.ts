import type { Localized } from "@/content/types";
import { loc } from "@/lib/age";
import type { Locale } from "@/lib/i18n";

export function isPlaceholder(text: string | undefined | null): boolean {
  return Boolean(text && /\[TODO:/i.test(text));
}

export function isPlaceholderLoc(value: Localized | undefined): boolean {
  return Boolean(value && (isPlaceholder(value.ru) || isPlaceholder(value.en)));
}

export function visibleText(
  value: Localized | undefined,
  locale: Locale,
): string | null {
  if (!value || isPlaceholderLoc(value)) return null;
  return loc(value, locale);
}

export function visibleItems(items: Localized[]): Localized[] {
  return items.filter((item) => !isPlaceholderLoc(item));
}
