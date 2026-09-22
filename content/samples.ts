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

export const sampleBrelok = {
  title: {
    ru: "Брелок самоорганизации, 10–12 лет",
    en: "Self-organisation keyring, ages 10–12",
  } satisfies Localized,
  line: {
    ru: "14 карточек на кольце. Ребёнок сам проверяет школу и кружки — вы не стоите над душой.",
    en: "14 cards on a ring. The child checks school and clubs — you do not stand over them.",
  } satisfies Localized,
  note: {
    ru: "Текст отдельных карточек 10–12 лет ещё готовим. В пробном PDF пришлём карточку, когда файл будет готов.",
    en: "The 10–12 card texts are still being prepared. We will send a card in the trial PDF when the file is ready.",
  } satisfies Localized,
};

export const sampleCalendar = {
  day: {
    ru: "День 4. Дыхательная пауза перед реакцией",
    en: "Day 4. A pause before you react",
  } satisfies Localized,
  thought: {
    ru: "Мысль: между тревогой и реакцией можно вставить паузу.",
    en: "Thought: you can put a pause between worry and the reaction.",
  } satisfies Localized,
  action: {
    ru: "Действие: в одной ситуации сегодня сначала сделайте три медленных вдоха и выдоха, и только потом говорите.",
    en: "Action: in one moment today, take three slow breaths before you speak.",
  } satisfies Localized,
  question: {
    ru: "Вопрос: что изменилось, когда вы вставили паузу?",
    en: "Question: what changed when you added the pause?",
  } satisfies Localized,
};
