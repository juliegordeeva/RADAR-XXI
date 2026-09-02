import type { AgeGroup } from "@/content/types";
import { ageBadgeClass, ageLabels } from "@/lib/age";
import type { Locale } from "@/lib/i18n";
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
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[15px] font-medium leading-none",
        ageBadgeClass[age],
        className,
      )}
    >
      {ageLabels[age][locale]}
    </span>
  );
}
