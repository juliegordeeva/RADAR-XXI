import Link from "next/link";
import {
  competencyByKey,
  groupDotClass,
  type CompetencyKey,
} from "@/content/competencies";
import type { Locale } from "@/lib/i18n";
import { loc } from "@/lib/age";
import { localePath } from "@/lib/locale-path";
import { cn } from "@/lib/cn";

export function CompetencyTag({
  competencyKey,
  locale,
  className,
}: {
  competencyKey: CompetencyKey;
  locale: Locale;
  className?: string;
}) {
  const item = competencyByKey[competencyKey];
  return (
    <Link
      href={localePath(locale, `/produkty?competency=${item.key}`)}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-[15px] leading-none hover:border-text",
        className,
      )}
    >
      <span className={cn("size-1.5 rounded-full", groupDotClass[item.group])} />
      {loc(item.title, locale)}
    </Link>
  );
}
