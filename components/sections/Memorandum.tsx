import Link from "next/link";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";
import { Section } from "@/components/ui/Section";

export function Memorandum({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <Section deep className="md:py-24">
      <h2 className="font-heading text-[28px] md:text-[40px] leading-tight mb-8 max-w-[20ch]">
        {dict.memo.title}
      </h2>
      <div className="max-w-[62ch] space-y-5 text-[18px] md:text-[20px] leading-[1.7]">
        {dict.memo.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-10">
        <Link
          href={localePath(locale, "/podhod")}
          className="underline underline-offset-2 hover:text-deep-text"
        >
          {dict.memo.more}
        </Link>
      </p>
    </Section>
  );
}
