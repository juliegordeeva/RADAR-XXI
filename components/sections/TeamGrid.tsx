import Image from "next/image";
import { assetPath } from "@/lib/asset";
import { team } from "@/content/team";
import { loc } from "@/lib/age";
import type { Locale } from "@/lib/i18n";

export function TeamGrid({
  locale,
  variant = "home",
}: {
  locale: Locale;
  variant?: "home" | "about";
}) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {team.map((member) => {
        const role =
          variant === "about" && member.aboutRole
            ? member.aboutRole
            : member.role;
        const bio =
          variant === "about" && member.aboutBio ? member.aboutBio : member.bio;
        return (
          <article
            key={member.id}
            className="grid gap-5 sm:grid-cols-[160px_1fr] md:grid-cols-1 lg:grid-cols-[160px_1fr] items-start"
          >
            {member.photo ? (
              <div className="relative aspect-[3/4] max-w-[200px] overflow-hidden rounded-[24px] border border-border bg-bg-alt">
                <Image
                  src={assetPath(
                    `/images/radar/team/${member.photo.split("/").pop()}`,
                  )}
                  alt={loc(member.photoAlt, locale)}
                  fill
                  sizes="200px"
                  className="object-cover object-top"
                />
              </div>
            ) : (
              <div className="aspect-[3/4] rounded-[16px] border border-border bg-bg-alt flex items-end p-4">
                <p className="text-[15px] text-text-muted">
                  {loc(member.photoAlt, locale)}
                </p>
              </div>
            )}
            <div>
              <h3 className="font-heading text-[22px] md:text-[24px]">
                {loc(member.name, locale)}
              </h3>
              <p className="text-text-muted mt-1">{loc(role, locale)}</p>
              {member.tagline && (
                <p className="mt-2 text-[15px]">
                  {loc(member.tagline, locale)}
                </p>
              )}
              <p className="mt-4 max-w-[65ch] text-[16px] leading-6">
                {loc(bio, locale)}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
