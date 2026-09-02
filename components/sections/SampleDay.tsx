import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { loc } from "@/lib/age";
import { sampleAdvent, sampleSafety } from "@/content/samples";
import { Card } from "@/components/ui/Card";
import { ProductPhoto } from "@/components/ui/ProductPhoto";
import { CompetencyTag } from "@/components/ui/CompetencyTag";

export function SampleDay({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <div>
      <h2 className="font-heading text-[28px] md:text-[40px] leading-tight mb-8 max-w-[65ch]">
        {dict.sample.title}
      </h2>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="space-y-5">
          <p className="text-[15px] text-text-muted">{dict.sample.cardLabel}</p>
          <ProductPhoto src={sampleSafety.image} alt={dict.sample.cardAlt} />
          <div>
            <p className="text-[15px] font-medium mb-2">{dict.sample.stepsTitle}</p>
            <ol className="space-y-1 text-[15px]">
              {sampleSafety.steps.map((step, index) => (
                <li key={step.ru}>
                  {index + 1}. {loc(step, locale)}
                </li>
              ))}
            </ol>
            <p className="mt-3 text-[15px] text-text-muted">
              {loc(sampleSafety.game, locale)}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {(["safety", "emotions", "critical", "communication"] as const).map((key) => (
                <CompetencyTag key={key} competencyKey={key} locale={locale} />
              ))}
            </div>
          </div>
        </Card>
        <Card className="space-y-5">
          <p className="text-[15px] text-text-muted">{dict.sample.adventLabel}</p>
          <ProductPhoto src={sampleAdvent.image} alt={dict.sample.adventAlt} />
          <p className="text-[15px] text-text-muted">{loc(sampleAdvent.time, locale)}</p>
          <div className="flex flex-wrap gap-2">
            {(["creative", "problems", "critical"] as const).map((key) => (
              <CompetencyTag key={key} competencyKey={key} locale={locale} />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
