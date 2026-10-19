import Link from "next/link";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";
import { MobileNav } from "@/components/layout/MobileNav";
import { SideNav } from "@/components/layout/SideNav";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <>
      <SideNav locale={locale} dict={dict} />
      <header className="mobile-header">
        <Link href={localePath(locale, "/")} className="mobile-wordmark">
          <BrandLogo />
        </Link>
        <MobileNav locale={locale} dict={dict} />
      </header>
    </>
  );
}
