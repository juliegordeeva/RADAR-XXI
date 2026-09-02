import { Badge } from "@/components/ui/Badge";
import { CompetencyCard } from "@/components/ui/CompetencyCard";
import { CompetencyTag } from "@/components/ui/CompetencyTag";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Checkbox, Input } from "@/components/ui/Input";
import { Section } from "@/components/ui/Section";
import type { AgeGroup } from "@/content/types";

const colors = [
  ["bg", "#FDFAF4"],
  ["bg-alt", "#F4EEE3"],
  ["surface", "#FFFFFF"],
  ["text", "#1F2421"],
  ["text-muted", "#5A6360"],
  ["border", "#E5DED2"],
  ["accent", "#C2542F"],
  ["deep", "#2F5D50"],
  ["thinking", "#3D6E9E"],
  ["others", "#4A8F6E"],
  ["self", "#C2542F"],
  ["literacy", "#7A5C9E"],
] as const;

const ages: AgeGroup[] = ["4-6", "7-9", "10-12", "13-16", "parents"];

export default function UiKitPage() {
  return (
    <div>
      <Section>
        <h1 className="font-heading text-[34px] md:text-[56px] leading-tight">Дизайн-система</h1>
        <p className="mt-4 max-w-[65ch] text-text-muted">
          Витрина токенов и компонентов RADAR XXI Kids. Не для индексации.
        </p>
      </Section>
      <Section alt>
        <h2 className="font-heading text-[28px] md:text-[40px] mb-6">Цвета</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {colors.map(([name, value]) => (
            <div key={name} className="space-y-2">
              <div
                className="h-20 rounded-[16px] border border-border"
                style={{ background: value }}
              />
              <p className="text-[15px]">
                {name} · {value}
              </p>
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <h2 className="font-heading text-[28px] md:text-[40px] mb-6">Типографика</h2>
        <h1 className="font-heading text-[34px] md:text-[56px] leading-tight">Заголовок первого уровня</h1>
        <h2 className="font-heading text-[28px] md:text-[40px] mt-6">Заголовок второго уровня</h2>
        <h3 className="font-heading text-[20px] md:text-[24px] mt-6">Заголовок третьего уровня</h3>
        <p className="mt-6 max-w-[65ch]">
          Основной текст 17–18 px, межстрочный 1.6. Длина строки не больше 65 знаков.
        </p>
        <p className="mt-3 text-[15px] text-text-muted">Мелкий текст 15 px, не меньше.</p>
      </Section>
      <Section alt>
        <h2 className="font-heading text-[28px] md:text-[40px] mb-6">Кнопки</h2>
        <div className="flex flex-col md:flex-row gap-4 max-w-xl">
          <Button>Основная кнопка</Button>
          <Button variant="secondary">Вторичная кнопка</Button>
        </div>
      </Section>
      <Section>
        <h2 className="font-heading text-[28px] md:text-[40px] mb-6">Карточка и бейджи</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {ages.map((age) => (
                <Badge key={age} age={age} locale="ru" />
              ))}
              <CompetencyTag competencyKey="critical" locale="ru" />
              <CompetencyTag competencyKey="empathy" locale="ru" />
            </div>
            <h3 className="font-heading text-[24px]">Карточка набора</h3>
            <p className="text-text-muted">Радиус 16, бордер, почти без тени.</p>
          </Card>
          <CompetencyCard competencyKey="creative" locale="ru" />
          <form className="space-y-4">
            <Input label="Поле ввода" placeholder="Имя" />
            <Checkbox label="Согласие на обработку данных" />
          </form>
        </div>
      </Section>
    </div>
  );
}
