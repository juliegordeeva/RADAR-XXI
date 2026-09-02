import type { Product } from "@/content/types";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { loc } from "@/lib/age";
import { localePath } from "@/lib/locale-path";
import { Badge } from "@/components/ui/Badge";
import { CompetencyTag } from "@/components/ui/CompetencyTag";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ProductPhoto, hasProductPhoto } from "@/components/ui/ProductPhoto";

export function ProductCard({
  product,
  locale,
  dict,
}: {
  product: Product;
  locale: Locale;
  dict: Dictionary;
}) {
  const priceLabel =
    product.price === null
      ? dict.catalog.priceAsk
      : dict.catalog.priceFrom.replace("{price}", String(product.price));

  return (
    <Card as="article" className="flex flex-col gap-5">
      {hasProductPhoto(product.image) && (
        <ProductPhoto src={product.image} alt={loc(product.title, locale)} />
      )}
      <div className="flex flex-wrap gap-2">
        {product.ageGroups.map((age) => (
          <Badge key={age} age={age} locale={locale} />
        ))}
        {product.competencies.map((key) => (
          <CompetencyTag key={key} competencyKey={key} locale={locale} />
        ))}
      </div>
      <div className="space-y-2">
        <h3 className="font-heading text-[20px] md:text-[24px] leading-snug">
          {loc(product.title, locale)}
        </h3>
        <p className="text-text-muted">{loc(product.tagline, locale)}</p>
      </div>
      <ul className="space-y-2 text-[15px]">
        {product.bullets.map((bullet) => (
          <li key={bullet.ru} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.65em] before:size-1.5 before:rounded-full before:bg-deep">
            {loc(bullet, locale)}
          </li>
        ))}
      </ul>
      <p className="text-[15px] text-text-muted mt-auto">{loc(product.format, locale)}</p>
      <p className="font-medium">{priceLabel}</p>
      <Button href={localePath(locale, `/produkty/${product.slug}`)}>
        {loc(product.ctaLabel, locale)}
      </Button>
    </Card>
  );
}
