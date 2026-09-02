import type { Localized } from "@/content/types";

export type FaqItem = {
  question: Localized;
  answer: Localized;
};

export const faqItems: FaqItem[] = [
  {
    question: {
      ru: "Чем это отличается от обычных развивашек и курсов?",
      en: "How is this different from the usual kids’ courses?",
    },
    answer: {
      ru: "Нет лекций и нет «правильного ответа от педагога». Есть короткий сценарий на день: вы делаете вместе 10–20 минут. Родитель не учит ребёнка с нуля — идёт по готовому листу.",
      en: "No lectures and no “right answer from the teacher”. A short daily script: you do it together for 10–20 minutes. The parent is not inventing a lesson from scratch.",
    },
  },
  {
    question: {
      ru: "Что такое универсальные компетенции простыми словами?",
      en: "What are universal competencies, in plain words?",
    },
    answer: {
      ru: "Универсальные компетенции — думать, договариваться с другими и управлять собой. Плюс грамотность: информация и базовые знания о безопасности. Самостоятельность не отдельный пункт: она появляется, когда работают остальные.",
      en: "Universal competencies: think, work with others, manage yourself. Plus literacy — information and basic safety. Independence is not a separate item: it appears when the others work together.",
    },
  },
  {
    question: {
      ru: "Сколько времени нужно в день?",
      en: "How much time does it take?",
    },
    answer: {
      ru: "Календари — 5–10 минут. Карточки и адвент — 10–15. Наборы на навык — около 15. Квест — 60–90 минут один раз, на выходной или в дорогу.",
      en: "Calendars: 5–10 minutes. Cards and advent: 10–15. Skill kits: about 15. A quest: 60–90 minutes once, on a weekend or a trip.",
    },
  },
  {
    question: {
      ru: "Это печатный набор или PDF?",
      en: "Is it print or PDF?",
    },
    answer: {
      ru: "Задуманы оба формата. Какой уйдёт в первую поставку — уточним в заявке. TODO: зафиксировать способ доставки по каждому продукту.",
      en: "Both formats are planned. Which one ships first will be confirmed when you request a kit. TODO: lock delivery per product.",
    },
  },
  {
    question: {
      ru: "Подойдёт ли, если ребёнку 5, а брату 9?",
      en: "We have a 5-year-old and a 9-year-old. Will it work?",
    },
    answer: {
      ru: "Да, берите разные наборы: адвент 4–6 и минипроекты 7–9, или карточки безопасности плюс квест. Вместе их смешивать не нужно — у каждого свой маршрут.",
      en: "Yes. Take different kits: the 4–6 advent and the 7–9 mini-projects, or safety cards plus a quest. Do not mix them into one session. Each child has a path.",
    },
  },
  {
    question: {
      ru: "Как быстро придёт заказ и доставляете ли за границу?",
      en: "How fast does it arrive, and do you ship abroad?",
    },
    answer: {
      ru: "PDF можно отправить письмом после оплаты. Печать и доставка за границу — TODO: сроки, службы, страны. Европейский телефон уже есть: удобно созвониться по часовому поясу.",
      en: "A PDF can go by email after payment. Print shipping abroad — TODO: times, carriers, countries. There is a European number, so a call in your time zone is possible.",
    },
  },
  {
    question: {
      ru: "Нужно ли родителю готовиться к занятию?",
      en: "Does the parent need to prepare?",
    },
    answer: {
      ru: "Нет. Открываете карточку или лист и читаете вслух. Если задание просит карандаш или предметы из дома — это то, что уже лежит в ящике, не закупки и не принтер с ночи.",
      en: "No. Open the card or sheet and read it aloud. If a task needs a pencil or something from home, it is whatever is already in a drawer — not a midnight print run.",
    },
  },
  {
    question: {
      ru: "Это для тревожных родителей или для детей?",
      en: "Is this for anxious parents or for children?",
    },
    answer: {
      ru: "Календари на 21 и 32 дня — для родителя. Карточки, адвент, наборы и квесты — для совместной работы с ребёнком. Курс и профориентация — для подростков вместе с родителями.",
      en: "The 21- and 32-day calendars are for the parent. Cards, advent, kits and quests are for parent and child together. The course and career session are for teens with their parents.",
    },
  },
  {
    question: {
      ru: "Можно попробовать до покупки?",
      en: "Can we try before we buy?",
    },
    answer: {
      ru: "Да. На главной лежат образцы: карточка «Потерялся в магазине» и день 1 адвента. PDF пришлём на почту, когда файлы будут готовы.",
      en: "Yes. The home page shows samples: the “lost in a shop” card and advent day 1. We will email the PDF when the files are ready.",
    },
  },
];
