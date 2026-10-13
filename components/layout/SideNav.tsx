"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { Home } from "lucide-react";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { assetPath } from "@/lib/asset";
import { localePath } from "@/lib/locale-path";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary";

type SideNavProps = { locale: Locale; dict: Dictionary; embedded?: boolean };

function Navigation({ locale, dict, embedded = false }: SideNavProps) {
  const path = (usePathname() || "").replace(/\/$/, "");
  const params = useSearchParams();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  const parents =
    (hydrated && params.get("age") === "parents") ||
    /kalendar-32-dnya|ezhednevnik-tri-roli/.test(path);
  const links = [
    { href: "/", label: dict.nav.home, active: path === `/${locale}` },
    {
      href: "/produkty",
      label: dict.nav.products,
      active: path.includes("/produkty") && !parents,
    },
    {
      href: "/produkty?age=parents",
      label: dict.redesign.parentLink,
      active: path.includes("/produkty") && parents,
    },
    {
      href: "/podhod",
      label: dict.nav.approach,
      active: path.endsWith("/podhod"),
    },
    { href: "/o-nas", label: dict.nav.about, active: path.endsWith("/o-nas") },
    {
      href: "/dlya-biznesa",
      label: dict.nav.b2b,
      active: path.includes("/dlya-biznesa"),
    },
    {
      href: "/kontakty",
      label: dict.nav.contacts,
      active: path.endsWith("/kontakty"),
    },
  ];
  return (
    <aside
      className={`side-nav ${embedded ? "home-side-nav" : "global-side-nav"}`}
    >
      <Link
        href={localePath(locale, "/")}
        className="side-wordmark"
        aria-label={dict.common.brand}
      >
        <span>RADAR</span>
        <span>KIDS</span>
      </Link>
      <nav aria-label={dict.nav.openMenu}>
        {links.map((item, i) => (
          <Link
            key={item.href}
            href={localePath(locale, item.href)}
            aria-current={item.active ? "page" : undefined}
            className={`side-nav-link ${item.active ? "is-active" : ""}`}
          >
            {i === 0 ? (
              <>
                <Home size={24} aria-hidden="true" />
                <span className="sr-only">{item.label}</span>
              </>
            ) : (
              item.label
            )}
          </Link>
        ))}
      </nav>
      <div className="side-nav-bottom">
        <Image
          src={assetPath("/images/radar/graphics/radar_arcs.svg")}
          alt=""
          aria-hidden="true"
          width={56}
          height={56}
        />
        <LanguageSwitcher locale={locale} label={dict.footer.language} />
      </div>
    </aside>
  );
}
export function SideNav(props: SideNavProps) {
  return (
    <Suspense
      fallback={
        <aside
          className={`side-nav ${props.embedded ? "home-side-nav" : "global-side-nav"}`}
        />
      }
    >
      <Navigation {...props} />
    </Suspense>
  );
}
