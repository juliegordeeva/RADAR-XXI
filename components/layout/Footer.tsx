"use client";

import Link from "next/link";
import { BrandArt } from "@/components/ui/BrandArt";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";
import { site } from "@/lib/site";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const isB2b = pathname.includes("/dlya-biznesa");
  const corporateEnglish = locale === "en" && [
    "/en/dlya-biznesa", "/en/dlya-biznesa/office-day", "/en/o-nas", "/en/kontakty",
  ].some((path) => pathname.replace(/\/$/, "").endsWith(path));

  return (
    <footer className="border-t border-border bg-bg">
      <BrandArt name="scenes/family-walk" className="footer-art" />
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 md:px-8 py-12 md:py-16 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-heading font-bold text-[24px]">
            {dict.common.brand}
          </p>
          <p className="mt-3 max-w-[42ch] text-text-muted text-[15px]">
            {isB2b ? dict.footer.taglineB2b : dict.footer.tagline}
          </p>
        </div>
        <div className="text-[15px] space-y-2">
          <p>
            {dict.footer.phoneRu}:{" "}
            <a
              href={`tel:${site.phones.ru.replace(/\s/g, "")}`}
              className="underline-offset-2 hover:underline"
            >
              {site.phones.ru}
            </a>
          </p>
          <p>
            {dict.footer.phoneEu}:{" "}
            <a
              href={`tel:${site.phones.eu.replace(/\s/g, "")}`}
              className="underline-offset-2 hover:underline"
            >
              {site.phones.eu}
            </a>
          </p>
          <p>
            <a
              href={site.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:underline"
            >
              {dict.footer.telegram}
            </a>
          </p>
          <p className="mt-4 max-w-[65ch] text-[15px] text-text-muted">
            {corporateEnglish ? dict.footer.corporateGroup : dict.footer.radarGroup}{" "}
            <a
              href="https://bureau.radarexec.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:underline"
            >
              bureau.radarexec.ru
            </a>
            {" · "}
            <a
              href="https://gordeeva.radarexec.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 hover:underline"
            >
              {corporateEnglish ? dict.footer.founderProfile : "gordeeva.radarexec.ru"}
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-3 text-[15px]">
          <Link
            href={localePath(locale, "/universitet")}
            className="hover:underline underline-offset-2"
          >
            {dict.nav.university}
          </Link>
          <Link
            href={localePath(locale, "/produkty")}
            className="hover:underline underline-offset-2"
          >
            {dict.nav.products}
          </Link>
          <Link
            href={localePath(locale, "/produkty?age=parents")}
            className="hover:underline underline-offset-2"
          >
            {dict.redesign.parentLink}
          </Link>
          <Link
            href={localePath(locale, "/o-nas")}
            className="hover:underline underline-offset-2"
          >
            {dict.nav.about}
          </Link>
          <Link
            href={localePath(locale, "/kontakty")}
            className="hover:underline underline-offset-2"
          >
            {dict.nav.contacts}
          </Link>
          <Link
            href={localePath(locale, "/podhod")}
            className="hover:underline underline-offset-2"
          >
            {dict.nav.approach}
          </Link>
          <Link
            href={localePath(locale, "/dlya-biznesa")}
            className="hover:underline underline-offset-2"
          >
            {dict.nav.b2b}
          </Link>
          <Link
            href={localePath(locale, "/politika")}
            className="hover:underline underline-offset-2"
          >
            {dict.nav.privacy}
          </Link>
          <LanguageSwitcher locale={locale} label={dict.footer.language} />
        </div>
      </div>
    </footer>
  );
}
