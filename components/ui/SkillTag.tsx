import Link from "next/link";
import {
  skillByKey,
  sectorDotClass,
  type SkillKey,
} from "@/content/competencies";
import type { Locale } from "@/lib/i18n";
import { loc } from "@/lib/age";
import { localePath } from "@/lib/locale-path";
import { cn } from "@/lib/cn";

export function SkillTag({
  skillKey,
  locale,
  className,
}: {
  skillKey: SkillKey;
  locale: Locale;
  className?: string;
}) {
  const skill = skillByKey[skillKey];
  return (
    <Link
      href={localePath(locale, `/produkty?sector=${skill.sector}`)}
      className={cn("skill-tag", className)}
    >
      <span
        aria-hidden="true"
        className={cn(
          "size-1.5 rounded-full shrink-0",
          sectorDotClass[skill.sector],
        )}
      />
      {skill.code} {loc(skill.title, locale)}
    </Link>
  );
}
