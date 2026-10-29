import { BrandArt } from "@/components/ui/BrandArt";
import { Button } from "@/components/ui/Button";
import { sampleSafety } from "@/content/samples";
import { loc } from "@/lib/age";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { localePath } from "@/lib/locale-path";

export function SafetySample({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.redesign;
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2 md:items-start">
        <figure className="sample-panel">
          <p className="eyebrow mb-5">{t.sampleFace}</p>
          <BrandArt name="scenes/store-help" alt={dict.style03.safetyScene} />
          <figcaption className="material-summary text-text-muted mt-5 max-w-[50ch]">
            {dict.style03.sampleScene} {dict.style03.samplePending}
          </figcaption>
        </figure>
        <div className="sample-panel">
          <p className="eyebrow mb-4">{t.sampleBack}</p>
          <h3 className="mb-5">{loc(sampleSafety.title, locale)}</h3>
          <p className="mb-6">{loc(sampleSafety.faceLine, locale)}</p>
          <ol className="space-y-4">
            {sampleSafety.steps.map((step, i) => (
              <li key={step.ru} className="flex gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-bg-alt font-bold text-[14px]">
                  {i + 1}
                </span>
                <span>{loc(step, locale)}</span>
              </li>
            ))}
          </ol>
          <div className="mt-6 rounded-[16px] bg-bg-alt p-5">
            <p className="eyebrow mb-2">{t.samplePhrase}</p>
            <p className="font-semibold">{loc(sampleSafety.phrase, locale)}</p>
          </div>
          <p className="mt-6">{loc(sampleSafety.game, locale)}</p>
        </div>
      </div>
      <div className="mt-8 max-w-xl">
        <Button href={localePath(locale, "/produkty/kartochki-bezopasnosti#zayavka")}>{t.sampleAction}</Button>
        <p className="material-summary text-text-muted mt-3">
          {t.telegramNote}
        </p>
      </div>
    </div>
  );
}
