import { sectors, skills } from "@/content/competencies";
import { loc } from "@/lib/age";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary";

export function CompetencyLadder({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.journey;
  return (
    <div className="competency-ladder" role="table" aria-label={t.ladderTitle}>
      <div className="ladder-row ladder-head" role="row">
        <div role="columnheader">{t.childColumn}</div>
        <div role="columnheader">{t.childrenSkills}</div>
        <div role="columnheader">{t.adultColumn}</div>
      </div>
      {sectors.map((sector) => (
        <div key={sector.key} className="ladder-row" role="row">
          <div role="cell">
            <h3>{loc(sector.title, locale)}</h3>
            <p className="mt-3">{loc(sector.forParent, locale)}</p>
          </div>
          <div role="cell">
            <p className="ladder-mobile-label">{t.childrenSkills}</p>
            <ul className="space-y-2">
              {skills
                .filter((skill) => skill.sector === sector.key)
                .map((skill) => (
                  <li key={skill.key}>
                    {skill.code} {loc(skill.title, locale)}
                  </li>
                ))}
            </ul>
          </div>
          <div role="cell">
            <p className="ladder-mobile-label">{t.adultColumn}</p>
            <strong>{loc(sector.adultName, locale)}</strong>
            <p className="mt-3">{loc(sector.adultText, locale)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
