import Link from "next/link";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";
import { site } from "@/lib/site";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="border-t border-border bg-bg-alt">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10 py-12 md:py-16 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-heading text-xl">{dict.common.brand}</p>
          <p className="mt-3 max-w-[65ch] text-text-muted text-[15px]">
            {dict.footer.tagline}
          </p>
        </div>
        <div className="text-[15px] space-y-2">
          <p>
            {dict.footer.phoneRu}:{" "}
            <a href={`tel:${site.phones.ru.replace(/\s/g, "")}`} className="underline-offset-2 hover:underline">
              {site.phones.ru}
            </a>
          </p>
          <p>
            {dict.footer.phoneEu}:{" "}
            <a href={`tel:${site.phones.eu.replace(/\s/g, "")}`} className="underline-offset-2 hover:underline">
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
        </div>
        <div className="flex flex-col gap-3 text-[15px]">
          <Link href={localePath(locale, "/podhod")} className="hover:underline underline-offset-2">
            {dict.nav.approach}
          </Link>
          <Link href={localePath(locale, "/dlya-biznesa")} className="hover:underline underline-offset-2">
            {dict.nav.b2b}
          </Link>
          <Link href={localePath(locale, "/politika")} className="hover:underline underline-offset-2">
            {dict.nav.privacy}
          </Link>
          <LanguageSwitcher locale={locale} label={dict.footer.language} />
        </div>
      </div>
    </footer>
  );
}
