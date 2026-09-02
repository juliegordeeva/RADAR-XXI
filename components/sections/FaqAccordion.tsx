"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/content/faq";
import { loc } from "@/lib/age";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function FaqAccordion({
  items,
  locale,
}: {
  items: FaqItem[];
  locale: Locale;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={item.question.ru} className="border border-border rounded-[16px] bg-surface">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 min-h-12 px-5 py-4 text-left font-heading text-[20px] md:text-[24px]"
                onClick={() => setOpen(isOpen ? null : index)}
              >
                {loc(item.question, locale)}
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 transition-transform duration-150",
                    isOpen && "rotate-180",
                  )}
                  strokeWidth={1.75}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 max-w-[65ch] text-text-muted"
            >
              {loc(item.answer, locale)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
