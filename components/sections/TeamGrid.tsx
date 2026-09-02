import Image from "next/image";
import { team } from "@/content/team";
import { loc } from "@/lib/age";
import type { Locale } from "@/lib/i18n";

export function TeamGrid({ locale }: { locale: Locale }) {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      {team.map((member) => (
        <article key={member.id} className="grid gap-5 sm:grid-cols-[200px_1fr] sm:items-start">
          {member.photo ? (
            <div className="relative aspect-[3/4] overflow-hidden rounded-[16px] border border-border bg-bg-alt">
              <Image
                src={member.photo}
                alt={loc(member.photoAlt, locale)}
                fill
                sizes="200px"
                className="object-cover object-top"
              />
            </div>
          ) : (
            <div className="aspect-[3/4] rounded-[16px] border border-border bg-bg-alt flex items-end p-4">
              <p className="text-[15px] text-text-muted">{loc(member.photoAlt, locale)}</p>
            </div>
          )}
          <div>
            <h3 className="font-heading text-[20px] md:text-[24px]">
              {loc(member.name, locale)}
            </h3>
            <p className="text-text-muted mt-1">{loc(member.role, locale)}</p>
            {member.tagline && (
              <p className="mt-2 text-[15px]">{loc(member.tagline, locale)}</p>
            )}
            <p className="mt-4 max-w-[65ch]">{loc(member.bio, locale)}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
