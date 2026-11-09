import { purchaseFor } from "@/content/purchases";
import type { Product } from "@/content/types";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { loc } from "@/lib/age";
import { localePath } from "@/lib/locale-path";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SkillTag } from "@/components/ui/SkillTag";
import { ProductArtwork } from "@/components/ui/ProductArtwork";

export function ProductCard({
  product,
  locale,
  dict,
  compact = false,
}: {
  product: Product;
  locale: Locale;
  dict: Dictionary;
  compact?: boolean;
}) {
  const t = dict.redesign;
  const safety = product.slug === "kartochki-bezopasnosti";
  const action = safety
    ? t.viewSafety
    : product.kind === "advent"
      ? t.viewAdvent
      : product.kind === "quest"
        ? t.viewQuest
        : product.kind === "calendar"
          ? t.viewCalendar
          : product.kind === "course"
            ? t.viewCourse
            : product.kind === "diary"
              ? t.viewDiary
              : t.viewProduct;
  const sale = purchaseFor(product);
  const waiting = !sale.active && product.availability === "waitlist";
  const price = sale.active
    ? `${sale.setup!.price} ₽ · PDF`
    : waiting
      ? t.formatNote
      : dict.catalog.calendarPrice;
  return (
    <Card
      as="article"
      className={`product-card flex flex-col gap-4 p-5 md:p-6 ${compact ? "compact-product-card" : ""}`}
    >
      <div className="product-thumb">
        <ProductArtwork product={product} dict={dict} locale={locale} />
      </div>
      <div className="flex flex-wrap gap-2">
        {safety ? (
          <span className="rounded-full bg-yellow px-3 py-2 material-summary font-bold">
            {t.safetyAge}
          </span>
        ) : product.ageLabel ? (
          <span className="rounded-full bg-sky px-3 py-2 material-summary">
            {loc(product.ageLabel, locale)}
          </span>
        ) : (
          product.ageGroups.map((age) => (
            <Badge key={age} age={age} locale={locale} />
          ))
        )}
        {waiting && (
          <span className="rounded-full bg-sky px-3 py-2 material-summary">
            {dict.catalog.waitlist}
          </span>
        )}
      </div>
      <h3>{loc(product.title, locale)}</h3>
      <p className="text-text-muted text-[16px] leading-6">
        {safety ? t.safetyDescription : loc(product.tagline, locale)}
      </p>
      <div className="flex flex-wrap gap-2">
        {product.ageGroups.includes("parents") ? (
          <span>{dict.journey.parentBadge}</span>
        ) : (
          product.skills
            .slice(0, 3)
            .map((key) => <SkillTag key={key} skillKey={key} locale={locale} />)
        )}
      </div>
      <div className="mt-auto pt-2 space-y-3">
        <p className="material-summary text-text-muted">
          {loc(product.format, locale)}
        </p>
        {!waiting && <p className="font-bold text-[16px]">{price}</p>}
        {!product.comingSoon && (
          <Button
            href={localePath(locale, `/produkty/${product.slug}`)}
            className="w-full md:w-full px-3"
          >
            {action}
          </Button>
        )}
      </div>
    </Card>
  );
}
