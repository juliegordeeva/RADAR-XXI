import { BookOpen } from "lucide-react";
import {
  competencies,
  competencyGroupOrder,
  groupTitle,
} from "@/content/competencies";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { loc } from "@/lib/age";
import { CompetencyCard } from "@/components/ui/CompetencyCard";

export function CompetenciesBlock({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <div>
      <h2 className="font-heading text-[28px] md:text-[40px] leading-tight mb-4 max-w-[20ch] md:max-w-[18ch]">
        {dict.abilities.title}
      </h2>
      <p className="max-w-[65ch] text-text-muted mb-10">{dict.abilities.subtitle}</p>
      <div className="space-y-12">
        {competencyGroupOrder.map((group) => (
          <div key={group}>
            <h3 className="font-heading text-[20px] md:text-[24px] mb-5">
              {loc(groupTitle[group], locale)}
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              {competencies
                .filter((item) => item.group === group)
                .map((item) => (
                  <CompetencyCard
                    key={item.key}
                    competencyKey={item.key}
                    locale={locale}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-10 max-w-[65ch] flex gap-3 items-start">
        <BookOpen className="size-6 shrink-0 text-comp-literacy mt-1" strokeWidth={1.75} />
        <span>
          <strong>{dict.abilities.literacyLead}</strong>{" "}
          {dict.abilities.literacy}
        </span>
      </p>
      <div className="mt-12 bg-bg-alt rounded-[16px] px-6 py-10 md:px-12 md:py-14">
        <p className="font-heading text-[20px] md:text-[24px] leading-snug max-w-[60ch] mx-auto text-center">
          {dict.abilities.ninth}
        </p>
        <p className="mt-4 max-w-[60ch] mx-auto text-center text-text-muted">
          {dict.abilities.ninthNote}
        </p>
      </div>
    </div>
  );
}
