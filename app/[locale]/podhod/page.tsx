import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { ArticleJsonLd } from "@/components/seo/JsonLd";
import { products } from "@/content/products";
import { competencyByKey } from "@/content/competencies";
import { getDictionary } from "@/lib/dictionary";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { localePath } from "@/lib/locale-path";
import { ageLabels, loc } from "@/lib/age";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return pageMetadata({
    locale,
    path: "/podhod",
    title: dict.meta.approachTitle,
    description: dict.meta.approachDescription,
  });
}

export default async function ApproachPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const a = dict.approach;
  const three = [
    { title: a.thinkingTitle, text: a.thinking },
    { title: a.othersTitle, text: a.others },
    { title: a.selfTitle, text: a.self },
  ];
  const rest = [
    { title: a.literacyTitle, text: a.literacy },
    { title: a.familyTitle, text: a.family },
    { title: a.practiceTitle, text: a.practice },
  ];

  return (
    <>
      <ArticleJsonLd locale={locale} />
      <Section className="md:pt-20">
        <h1 className="font-heading text-[34px] leading-[1.15] md:text-[56px] md:leading-[1.1] max-w-[16ch]">
          {a.title}
        </h1>
        <div className="mt-12 max-w-[65ch] space-y-12">
          <div>
            <h2 className="font-heading text-[28px] md:text-[40px] leading-tight mb-4">
              {a.changedTitle}
            </h2>
            <p>{a.changed}</p>
          </div>
          <div>
            <h2 className="font-heading text-[28px] md:text-[40px] leading-tight mb-6">
              {a.threeTitle}
            </h2>
            <div className="space-y-8">
              {three.map((block) => (
                <div key={block.title}>
                  <h3 className="font-heading text-[20px] md:text-[24px] mb-3">
                    {block.title}
                  </h3>
                  <p>{block.text}</p>
                </div>
              ))}
            </div>
          </div>
          {rest.map((block) => (
            <div key={block.title}>
              <h2 className="font-heading text-[28px] md:text-[40px] leading-tight mb-4">
                {block.title}
              </h2>
              <p>{block.text}</p>
            </div>
          ))}
          <div>
            <h2 className="font-heading text-[28px] md:text-[40px] leading-tight mb-4">
              {a.kitsTitle}
            </h2>
            <p className="mb-8">{a.kits}</p>
            <div className="overflow-x-auto">
              <table className="w-full text-[15px] text-left border-collapse">
                <thead>
                  <tr>
                    <th className="pb-3 pr-4 font-medium">{a.tableProduct}</th>
                    <th className="pb-3 pr-4 font-medium">{a.tableAbilities}</th>
                    <th className="pb-3 font-medium">{a.tableAge}</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.slug} className="border-t border-border align-top">
                      <td className="py-3 pr-4">{loc(product.title, locale)}</td>
                      <td className="py-3 pr-4">
                        {product.competencies
                          .map((key) => loc(competencyByKey[key].title, locale))
                          .join(", ")}
                      </td>
                      <td className="py-3">
                        {product.ageGroups
                          .map((group) => loc(ageLabels[group], locale))
                          .join(", ")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="font-heading text-[28px] md:text-[40px] leading-tight mb-4">
              {a.sourceTitle}
            </h2>
            <p>{a.source}</p>
          </div>
        </div>
        <div className="mt-14">
          <Button href={localePath(locale, "/produkty")}>{a.cta}</Button>
        </div>
      </Section>
    </>
  );
}
