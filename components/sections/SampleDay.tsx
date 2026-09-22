import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { loc } from "@/lib/age";
import { sampleAdvent, sampleBrelok, sampleCalendar } from "@/content/samples";
import { Card } from "@/components/ui/Card";
import { ProductPhoto } from "@/components/ui/ProductPhoto";
import { ProductVisual } from "@/components/ui/ProductVisual";
import { CompetencyTag } from "@/components/ui/CompetencyTag";

export function SampleDay({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <div>
      <h2 className="font-heading text-[28px] md:text-[40px] leading-tight mb-8 max-w-[65ch]">
        {dict.sample.title}
      </h2>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="space-y-5">
          <p className="text-[15px] text-text-muted">{dict.sample.adventLabel}</p>
          <ProductPhoto src={sampleAdvent.image} alt={dict.sample.adventAlt} />
          <p className="font-medium">
            {loc(sampleAdvent.day, locale)}. {loc(sampleAdvent.title, locale)}
          </p>
          <p>{loc(sampleAdvent.task, locale)}</p>
          <p className="text-[15px] text-text-muted">{loc(sampleAdvent.time, locale)}</p>
          <div className="flex flex-wrap gap-2">
            {(["creative", "problems", "critical"] as const).map((key) => (
              <CompetencyTag key={key} competencyKey={key} locale={locale} />
            ))}
          </div>
        </Card>
        <Card className="space-y-5">
          <p className="text-[15px] text-text-muted">{dict.sample.brelokLabel}</p>
          <ProductVisual
            kind="cards"
            title={loc(sampleBrelok.title, locale)}
          />
          <p>{loc(sampleBrelok.line, locale)}</p>
          <p className="text-[15px] text-text-muted">{loc(sampleBrelok.note, locale)}</p>
          <div className="flex flex-wrap gap-2">
            <CompetencyTag competencyKey="organization" locale={locale} />
          </div>
        </Card>
        <Card className="space-y-5">
          <p className="text-[15px] text-text-muted">{dict.sample.calendarLabel}</p>
          <p className="font-medium">{loc(sampleCalendar.day, locale)}</p>
          <p>{loc(sampleCalendar.thought, locale)}</p>
          <p>{loc(sampleCalendar.action, locale)}</p>
          <p>{loc(sampleCalendar.question, locale)}</p>
          <div className="flex flex-wrap gap-2">
            {(["emotions", "organization"] as const).map((key) => (
              <CompetencyTag key={key} competencyKey={key} locale={locale} />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
