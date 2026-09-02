"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { stripLocale } from "@/lib/locale-path";
import { cn } from "@/lib/cn";

export function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname() || "/";
  const rest = stripLocale(pathname);

  return (
    <nav aria-label={label} className="flex items-center gap-1 text-[15px]">
      {locales.map((item) => (
        <Link
          key={item}
          href={`/${item}${rest === "/" ? "" : rest}`}
          hrefLang={item}
          className={cn(
            "px-2 py-1 rounded-[8px] uppercase tracking-wide min-h-8 inline-flex items-center",
            item === locale ? "text-text font-medium" : "text-text-muted hover:text-text",
          )}
        >
          {item}
        </Link>
      ))}
    </nav>
  );
}
