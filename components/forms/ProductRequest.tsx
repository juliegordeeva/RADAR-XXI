"use client";

import type { Product } from "@/content/types";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { loc } from "@/lib/age";
import { LeadForm } from "@/components/forms/LeadForm";

export function ProductRequest({
  product,
  locale,
  dict,
}: {
  product: Product;
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <div className="space-y-6">
      <p>{dict.redesign.preparedNote}</p>
      <LeadForm
        key={product.slug}
        locale={locale}
        dict={dict}
        product={product.slug}
        productName={loc(product.title, locale)}
        format="waitlist"
        compact
      />
    </div>
  );
}
