"use client";

import { useSearchParams } from "next/navigation";
import type { Product } from "@/content/types";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { isPurchaseFormat, purchaseRequestTitle } from "@/lib/purchase";
import { PurchaseButtons } from "@/components/sections/PurchaseButtons";
import { LeadForm } from "@/components/forms/LeadForm";
import { TelegramCta } from "@/components/ui/TelegramCta";
import { StickyCta } from "@/components/forms/StickyCta";

export function ProductRequest({
  product,
  locale,
  dict,
}: {
  product: Product;
  locale: Locale;
  dict: Dictionary;
}) {
  const params = useSearchParams();
  const raw = params.get("format");
  const format = isPurchaseFormat(raw) ? raw : undefined;

  return (
    <div id="zayavka" className="mt-10 max-w-xl space-y-6">
      {product.purchaseFormats?.length ? (
        <PurchaseButtons product={product} locale={locale} dict={dict} />
      ) : null}
      <h3 className="font-heading text-[20px] md:text-[24px]">
        {purchaseRequestTitle(format, dict)}
      </h3>
      {format === "sample" ? (
        <p className="text-[15px] text-text-muted">{dict.productPage.sampleNote}</p>
      ) : product.purchaseFormats?.length ? (
        <p className="text-[15px] text-text-muted">{dict.productPage.payNote}</p>
      ) : null}
      <StickyCta>
        <TelegramCta dict={dict} className="w-full" />
      </StickyCta>
      <LeadForm
        key={format ?? "none"}
        locale={locale}
        dict={dict}
        product={product.slug}
        format={format}
        compact
      />
    </div>
  );
}
