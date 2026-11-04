import { sectors, skills, sectorColorClass } from "@/content/competencies";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { loc } from "@/lib/age";
import { SkillCard } from "@/components/ui/SkillCard";
import { AnchoredDetails } from "@/components/ui/AnchoredDetails";

export function CompetenciesBlock({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <div>
      <h2 className="section-heading">{dict.abilities.title}</h2>
      <p className="mb-10 max-w-[65ch]">{dict.abilities.subtitle}</p>
      <div className="competency-folds">
        {sectors.map((sector) => (
          <AnchoredDetails
            key={sector.key}
            anchor={`sector-${sector.key}`}
            title={
              <h3 className={sectorColorClass[sector.key]}>
                {loc(sector.title, locale)}
              </h3>
            }
          >
            <p className="my-4 max-w-[65ch]">{loc(sector.forParent, locale)}</p>
            <div className="skills-grid">
              {skills
                .filter((skill) => skill.sector === sector.key)
                .map((skill) => (
                  <SkillCard
                    key={skill.key}
                    skillKey={skill.key}
                    locale={locale}
                    linked
                  />
                ))}
            </div>
          </AnchoredDetails>
        ))}
      </div>
      <div className="mt-12 max-w-[65ch]">
        <p className="font-bold">{dict.abilities.ninth}</p>
        <p className="mt-4">{dict.abilities.ninthNote}</p>
      </div>
    </div>
  );
}
