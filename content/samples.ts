import type { Localized } from "@/content/types";

export const sampleSafety = {
  title: {
    ru: "Потерялся в магазине",
    en: "Lost in a shop",
  } satisfies Localized,
  faceLine: {
    ru: "Я не вижу маму. Что делать?",
    en: "I cannot see mum. What do I do?",
  } satisfies Localized,
  phrase: {
    ru: "Стою на месте. Зову маму. Ищу человека в форме.",
    en: "I stay where I am. I call mum. I look for someone in uniform.",
  } satisfies Localized,
  game: {
    ru: "Мини-игра: спрячьте дома игрушку. Ребёнок не бегает по комнатам — стоит и зовёт.",
    en: "Mini-game: hide a toy. The child does not run around — they stay and call.",
  } satisfies Localized,
  steps: [
    { ru: "Заметь: взрослого рядом нет", en: "Notice: no adult next to me" },
    { ru: "Остановись: не беги искать сам", en: "Stop: do not run off to look" },
    {
      ru: "Выбери безопасного взрослого: кассир, охрана, человек в форме",
      en: "Pick a safe adult: cashier, guard, someone in uniform",
    },
    { ru: "Зови на помощь громко, по имени", en: "Call for help, loud, by name" },
  ] satisfies Localized[],
  image: "/images/lead-kartochka-bezopasnosti.webp",
};

export const sampleAdvent = {
  day: {
    ru: "День 1",
    en: "Day 1",
  } satisfies Localized,
  title: {
    ru: "Охота за деталями",
    en: "Detail hunt",
  } satisfies Localized,
  task: {
    ru: "Найди дома 5 вещей, которые круглые. Принеси или покажи. Расскажи, где они живут.",
    en: "Find five round things at home. Bring them or point to them. Say where they live.",
  } satisfies Localized,
  time: {
    ru: "10–15 минут · вместе с родителем",
    en: "10–15 minutes · with a parent",
  } satisfies Localized,
  image: "/images/lead-advent-den-1.webp",
};
