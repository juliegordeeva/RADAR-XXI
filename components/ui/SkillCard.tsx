import Link from "next/link";
import {
  skillByKey,
  sectorByKey,
  sectorColorClass,
  type SkillKey,
} from "@/content/competencies";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { loc } from "@/lib/age";
import { localePath } from "@/lib/locale-path";

export function SkillCard({
  skillKey,
  locale,
  linked = false,
}: {
  skillKey: SkillKey;
  locale: Locale;
  linked?: boolean;
}) {
  const skill = skillByKey[skillKey];
  const t = getDictionary(locale).journey;
  return (
    <article className="skill-card">
      <p className={`font-bold mb-3 ${sectorColorClass[skill.sector]}`}>
        {skill.code}
      </p>
      <h3>{loc(skill.title, locale)}</h3>
      <p className="mt-4">{loc(skill.forParent, locale)}</p>
      <p className="mt-4">
        <strong>{t.progressLabel}: </strong>
        {loc(skill.signOfProgress, locale)}
      </p>
      {linked && (
        <Link
          className="text-link mt-4"
          href={localePath(locale, `/produkty?sector=${skill.sector}`)}
        >
          {t.competencyLabel}: {loc(sectorByKey[skill.sector].title, locale)} →
        </Link>
      )}
    </article>
  );
}
