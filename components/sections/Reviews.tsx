import { reviews } from "@/content/reviews";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { loc } from "@/lib/age";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function Reviews({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  if (reviews.length === 0) {
    return null;
  }

  return (
    <Section>
      <h2 className="font-heading text-[28px] md:text-[40px] leading-tight mb-8 max-w-[65ch]">
        {dict.reviews.title}
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        {reviews.map((review) => (
          <Card key={review.name.ru} as="article" className="space-y-3">
            <p className="font-heading text-[20px]">{loc(review.name, locale)}</p>
            <p className="text-[15px] text-text-muted">{loc(review.child, locale)}</p>
            <p>{loc(review.detail, locale)}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
