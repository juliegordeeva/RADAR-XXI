"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { TelegramCta } from "@/components/ui/TelegramCta";

export function MobileNav({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "/", label: dict.nav.home },
    { href: "/produkty", label: dict.nav.products },
    { href: "/podhod", label: dict.nav.approach },
    { href: "/o-nas", label: dict.nav.about },
    { href: "/kontakty", label: dict.nav.contacts },
  ];

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex size-12 items-center justify-center rounded-[12px] text-text"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
      >
        <Menu className="size-6" strokeWidth={1.75} />
        <span className="sr-only">{dict.nav.openMenu}</span>
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-text/40"
          onClick={() => setOpen(false)}
        >
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="absolute right-0 top-0 h-full w-[min(100%,360px)] bg-bg p-5 shadow-[0_1px_3px_rgba(31,36,33,0.06)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <p id={titleId} className="font-heading text-xl">
                {dict.common.brand}
              </p>
              <button
                type="button"
                className="inline-flex size-12 items-center justify-center rounded-[12px]"
                onClick={() => setOpen(false)}
              >
                <X className="size-6" strokeWidth={1.75} />
                <span className="sr-only">{dict.nav.closeMenu}</span>
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={localePath(locale, link.href)}
                  className="min-h-12 flex items-center text-[18px]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8">
              <TelegramCta dict={dict} />
            </div>
            <div className="mt-8">
              <LanguageSwitcher locale={locale} label={dict.footer.language} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
