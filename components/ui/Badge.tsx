import Link from "next/link";
import type { AgeGroup } from "@/content/types";
import { ageBadgeClass, ageLabels } from "@/lib/age";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";
import { cn } from "@/lib/cn";

export function Badge({
  age,
  locale,
  className,
}: {
  age: AgeGroup;
  locale: Locale;
  className?: string;
}) {
  return (
    <Link
      href={localePath(locale, `/produkty?age=${age}`)}
      className={cn(
        "inline-flex max-w-full items-center rounded-full px-3 py-2 text-[15px] font-medium leading-snug whitespace-normal hover:opacity-90",
        ageBadgeClass[age],
        className,
      )}
    >
      {ageLabels[age][locale]}
    </Link>
  );
}
