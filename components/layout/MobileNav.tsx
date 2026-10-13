"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const trigger = triggerRef.current;
    panel?.querySelector<HTMLButtonElement>("button")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Tab" && panel) {
        const elements = Array.from(
          panel.querySelectorAll<HTMLElement>(
            "a[href], button:not([disabled])",
          ),
        );
        const first = elements[0];
        const last = elements[elements.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
      trigger?.focus();
    };
  }, [open]);

  const links = [
    { href: "/", label: dict.nav.home },
    { href: "/produkty", label: dict.nav.products },
    { href: "/podhod", label: dict.nav.approach },
    { href: "/produkty?age=parents", label: dict.redesign.parentLink },
    { href: "/o-nas", label: dict.nav.about },
    { href: "/dlya-biznesa", label: dict.nav.b2b },
    { href: "/kontakty", label: dict.nav.contacts },
  ];

  const panel = open ? (
    <div
      className="fixed inset-0 z-[100] bg-text/40"
      onClick={() => setOpen(false)}
    >
      <div
        ref={panelRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="absolute right-0 top-0 h-full w-[min(100%,360px)] bg-bg p-5 overflow-y-auto"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-8">
          <p id={titleId} className="font-heading font-bold text-xl">
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
          <p className="material-summary text-text-muted mt-3">
            {dict.redesign.telegramNote}
          </p>
        </div>
        <div className="mt-8">
          <LanguageSwitcher locale={locale} label={dict.footer.language} />
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div className="xl:hidden">
      <button
        type="button"
        className="inline-flex size-12 items-center justify-center rounded-[12px] text-text"
        ref={triggerRef}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
      >
        <Menu className="size-6" strokeWidth={1.75} />
        <span className="sr-only">{dict.nav.openMenu}</span>
      </button>
      {mounted && panel ? createPortal(panel, document.body) : null}
    </div>
  );
}
