import type { PurchaseFormat } from "@/content/types";
import type { Dictionary } from "@/lib/dictionary";

export function isPurchaseFormat(
  value: string | null,
): value is PurchaseFormat {
  return (
    value === "pdf" ||
    value === "bot" ||
    value === "print" ||
    value === "sample" ||
    value === "waitlist"
  );
}

export function purchaseButtonLabel(
  format: PurchaseFormat,
  dict: Dictionary,
): string {
  if (format === "pdf") return dict.catalog.buyPdf;
  if (format === "bot") return dict.catalog.buyBot;
  if (format === "print") return dict.catalog.buyPrint;
  if (format === "waitlist") return dict.catalog.joinWaitlist;
  return dict.catalog.downloadSample;
}

export function purchaseSubmitLabel(
  format: PurchaseFormat | undefined,
  dict: Dictionary,
): string {
  if (format === "pdf") return dict.forms.submitPdf;
  if (format === "bot") return dict.forms.submitBot;
  if (format === "print") return dict.forms.submitPrint;
  if (format === "sample") return dict.forms.submitSample;
  if (format === "waitlist") return dict.forms.submitLead;
  return dict.forms.submitLead;
}

export function purchaseRequestTitle(
  format: PurchaseFormat | undefined,
  dict: Dictionary,
): string {
  if (format === "pdf") return dict.productPage.requestPdf;
  if (format === "bot") return dict.productPage.requestBot;
  if (format === "print") return dict.productPage.requestPrint;
  if (format === "sample") return dict.productPage.requestSample;
  if (format === "waitlist") return dict.catalog.waitlist;
  return dict.productPage.request;
}
