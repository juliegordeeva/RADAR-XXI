import Link from "next/link";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";
import { site } from "@/lib/site";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const links = [
    { href: "/produkty", label: dict.nav.products },
    { href: "/podhod", label: dict.nav.approach },
    { href: "/o-nas", label: dict.nav.about },
    { href: "/kontakty", label: dict.nav.contacts },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 md:px-10 h-[72px]">
        <Link
          href={localePath(locale, "/")}
          className="font-heading text-[20px] leading-none"
        >
          {dict.common.brand}
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[15px]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={localePath(locale, link.href)}
              className="min-h-8 inline-flex items-center text-text-muted hover:text-text"
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher locale={locale} label={dict.footer.language} />
          <a
            href={site.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-12 inline-flex items-center font-medium text-accent hover:text-accent-hover"
          >
            {dict.cta.telegram}
          </a>
        </nav>
        <MobileNav locale={locale} dict={dict} />
      </div>
    </header>
  );
}
