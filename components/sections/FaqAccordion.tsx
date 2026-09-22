import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/content/faq";
import { loc } from "@/lib/age";
import type { Locale } from "@/lib/i18n";

export function FaqAccordion({
  items,
  locale,
}: {
  items: FaqItem[];
  locale: Locale;
}) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <details
          key={item.question.ru}
          className="group border border-border rounded-[16px] bg-surface"
          open={index === 0}
        >
          <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 min-h-12 px-5 py-4 text-left font-heading text-[20px] md:text-[24px] [&::-webkit-details-marker]:hidden">
            {loc(item.question, locale)}
            <ChevronDown
              className="size-5 shrink-0 transition-transform duration-150 group-open:rotate-180"
              strokeWidth={1.75}
            />
          </summary>
          <p className="px-5 pb-5 max-w-[65ch] text-text-muted">
            {loc(item.answer, locale)}
          </p>
        </details>
      ))}
    </div>
  );
}
