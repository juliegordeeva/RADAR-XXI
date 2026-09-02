import ru from "@/content/dictionaries/ru.json";
import en from "@/content/dictionaries/en.json";
import { defaultLocale, type Locale } from "@/lib/i18n";

const dictionaries = { ru, en } as const;

export type Dictionary = typeof ru;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
