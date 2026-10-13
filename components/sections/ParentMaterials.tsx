import type { Product } from "@/content/types";
import { loc } from "@/lib/age";
import { localePath } from "@/lib/locale-path";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { BrandArt } from "@/components/ui/BrandArt";
import { CalendarPreview } from "@/components/ui/CalendarPreview";
import { Button } from "@/components/ui/Button";

export function ParentMaterials({
  items,
  locale,
  dict,
}: {
  items: Product[];
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <div className="parent-catalog">
      {items.map((product) => {
        const calendar = product.slug === "kalendar-32-dnya";
        const price =
          product.price === null
            ? dict.catalog.priceAsk
            : dict.catalog.priceFrom.replace("{price}", String(product.price));
        return (
          <article key={product.slug} className="editorial-split">
            <div>
              <p className="eyebrow mb-4">{dict.style03.parentLabel}</p>
              <h3 className="section-heading">{loc(product.title, locale)}</h3>
              <p className="mb-4">{loc(product.tagline, locale)}</p>
              <p className="font-bold text-[16px] mb-6">{price}</p>
              <Button href={localePath(locale, `/produkty/${product.slug}`)}>
                {calendar
                  ? dict.redesign.viewCalendar
                  : dict.redesign.viewDiary}{" "}
                →
              </Button>
            </div>
            <div className="parent-catalog-visual">
              <BrandArt
                name={
                  calendar
                    ? "scenes/parent-reflection"
                    : "scenes/parents-planning"
                }
              />
              {!calendar && (
                <figure>
                  <BrandArt name="illustrative-products/diary-open" />
                  <figcaption className="illustration-caption">
                    {dict.style03.diaryCaption}
                  </figcaption>
                </figure>
              )}
              {calendar && (
                <figure>
                  <CalendarPreview alt={dict.style03.calendarCaption} />
                  <figcaption className="illustration-caption">
                    {dict.style03.calendarCaption}
                  </figcaption>
                </figure>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
