import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { Section } from "@/components/ui/Section";
import { BusinessForm } from "@/components/forms/BusinessForm";
import { Button } from "@/components/ui/Button";
import { officeDay } from "@/content/b2b";
export const dynamic = "force-static";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata({
    locale,
    path: "/dlya-biznesa/sportivnye-priklyucheniya",
    title:
      locale === "ru"
        ? "Спортивные приключения для сотрудников с детьми в Москве | RADAR KIDS"
        : "Corporate family sports adventures in Moscow | RADAR KIDS",
    description:
      locale === "ru"
        ? "Корпоративный семейный спортивный день в парках и усадьбах Москвы. Обсудите программу, состав участников и расчёт с организаторами RADAR KIDS."
        : "Corporate sports events for employees with children in Moscow’s parks and estates. Discuss the programme, participants and quote with RADAR KIDS.",
  });
}
export default async function SportsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale);
  const ru = locale === "ru";
  return (
    <>
      <EditorialHero
        variant="scene"
        className="sports-page-hero"
        eyebrow={d.nav.b2b}
        title={ru ? "Спортивные приключения" : "Sports adventures"}
        intro={
          ru
            ? "Корпоративное событие для сотрудников и их детей в парках и усадьбах Москвы. Повод провести время вместе вне офиса и обсудить формат активного семейного дня."
            : "A corporate event for employees and their children in Moscow’s parks and estates. Spend time together outside the office and discuss an active family day."
        }
        image="scenes/family-walk"
      >
        <Button href="#zayavka">
          {ru
            ? "Запросить программу и расчёт"
            : "Request a programme and quote"}{" "}
          →
        </Button>
      </EditorialHero>
      <Section alt>
        <h2 className="section-heading">
          {ru ? "Событие под вашу задачу" : "An event shaped around your brief"}
        </h2>
        <div className="editorial-three">
          {(ru
            ? [
                [
                  "Для кого",
                  "Сотрудники с детьми. Возраст и состав группы обсудим до подготовки программы.",
                ],
                [
                  "Что будет",
                  "Спортивный семейный формат. Конкретные активности, участие родителей и условия площадки согласуем с организаторами RADAR KIDS.",
                ],
                [
                  "Где и когда",
                  "Парки и усадьбы Москвы. Площадку и дату выбираем после обсуждения задачи.",
                ],
              ]
            : [
                [
                  "Who it is for",
                  "Employees and their children. Discuss ages and group composition before the programme is prepared.",
                ],
                [
                  "What to expect",
                  "An active family event. Agree specific activities, parents’ participation and venue arrangements with the RADAR KIDS organisers.",
                ],
                [
                  "Where and when",
                  "Moscow’s parks and estates. Choose a venue and date after discussing your brief.",
                ],
              ]
          ).map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p className="mt-4">{text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section>
        <div className="editorial-split items-start">
          <div>
            <h2 className="section-heading">
              {ru ? "Опыт команды" : "Team experience"}
            </h2>
            <ul className="space-y-3">
              {officeDay.team[locale].qualifications.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="section-heading">
              {ru ? "Как рассчитываем стоимость" : "How we prepare a quote"}
            </h2>
            <p>
              {ru
                ? "Расчёт зависит от состава группы, программы и выбранной площадки. Укажите известные параметры; длительность, услуги и бюджет обсудим с организаторами RADAR KIDS."
                : "The quote depends on the group, programme and venue. Share the details you know; discuss duration, services and budget with the RADAR KIDS organisers."}
            </p>
          </div>
        </div>
      </Section>
      <Section id="zayavka" alt>
        <h2 className="section-heading">
          {ru
            ? "Запросить программу и расчёт"
            : "Request a programme and quote"}
        </h2>
        <BusinessForm locale={locale} dict={d} variant="sports" />
      </Section>
    </>
  );
}
