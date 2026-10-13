import Link from "next/link";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";
import { MobileNav } from "@/components/layout/MobileNav";
import { SideNav } from "@/components/layout/SideNav";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <>
      <SideNav locale={locale} dict={dict} />
      <header className="mobile-header">
        <Link
          href={localePath(locale, "/")}
          className="font-heading font-bold text-[22px]"
        >
          {dict.common.brand}
        </Link>
        <MobileNav locale={locale} dict={dict} />
      </header>
    </>
  );
}
