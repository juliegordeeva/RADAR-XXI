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
      ru: "Это не лекции и здесь нет «правильного ответа от педагога». Есть короткий сценарий или задание на день: вы делаете вместе с ребёнком 10–20 минут. Родитель не учит ребёнка с нуля — он идёт по готовому простому сценарию, доступному в домашних условиях.",
      en: "These are not lectures, and there is no “right answer from the teacher”. There is a short daily script or task: you do it together with the child for 10–20 minutes. The parent is not inventing a lesson from scratch — they follow a simple ready script that works at home.",
    },
  },
  {
    question: {
      ru: "Что такое универсальные компетенции простыми словами?",
      en: "What are universal competencies, in plain words?",
    },
    answer: {
      ru: "Универсальные компетенции — это способность думать критически, договариваться с другими в различных ситуациях и управлять собой и своими эмоциями и реакциями. А также грамотность: информация и базовые знания о безопасности. Когда все эти компетенции работают, появляется самостоятельность — как результат, а не отдельный навык.",
      en: "Universal competencies are the ability to think critically, work things out with others in different situations, and manage yourself, your emotions and your reactions. Plus literacy: information and basic safety knowledge. When these work together, independence appears — as a result, not as a separate item.",
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
      ru: "Мы разрабатываем оба формата. Сейчас можно скачать PDF или получать задания в чат-боте. Печатный формат делаем по предзаказу на данный момент.",
      en: "We are developing both formats. Right now you can download a PDF or get the tasks in a chatbot. Print is made to pre-order for now.",
    },
  },
  {
    question: {
      ru: "Подойдёт ли, если ребёнку 5, а брату 9?",
      en: "We have a 5-year-old and a 9-year-old. Will it work?",
    },
    answer: {
      ru: "Да, вы можете выбрать разные наборы: адвент 4–6 и минипроекты 7–9, или карточки безопасности и квест. Вместе их смешивать не нужно — у каждого будет свой маршрут и задания.",
      en: "Yes. You can pick different kits: the 4–6 advent and the 7–9 mini-projects, or safety cards and a quest. Do not mix them into one session — each child will have their own path and tasks.",
    },
  },
  {
    question: {
      ru: "Как быстро придёт заказ и доставляете ли за границу?",
      en: "How fast does it arrive, and do you ship abroad?",
    },
    answer: {
      ru: "PDF и ссылку на чат-бот вы получаете на почту сразу после оплаты. Доставка возможна по Европе в течение 5–7 дней.",
      en: "You get the PDF and the chatbot link by email right after payment. Delivery in Europe takes 5–7 days.",
    },
  },
  {
    question: {
      ru: "Нужно ли родителю готовиться к занятию?",
      en: "Does the parent need to prepare?",
    },
    answer: {
      ru: "Нет. Открываете карточку или лист календаря и читаете вслух. Если для задания нужен карандаш или предметы из дома — это то, что уже есть у вас дома. Дополнительно ничего покупать не нужно.",
      en: "No. Open the card or calendar sheet and read it aloud. If a task needs a pencil or something from home, it is whatever you already have. You do not need to buy anything extra.",
    },
  },
  {
    question: {
      ru: "Ваши продукты для родителей или для детей?",
      en: "Are your products for parents or for children?",
    },
    answer: {
      ru: "Календарь «32 дня родительства в радость» и ежедневник «Три роли / одна жизнь» — для родителей. Карточки, адвенты, наборы и квесты — для совместной работы с ребёнком. Курс и профориентация — для подростков вместе с родителями.",
      en: "The “32 days of parenting with joy” calendar and the “Three roles / one life” diary are for parents. Cards, advents, kits and quests are for working with the child. The course and career guidance are for teenagers together with parents.",
    },
  },
  {
    question: {
      ru: "Можно ли посмотреть продукты до покупки?",
      en: "Can we look at the products before we buy?",
    },
    answer: {
      ru: "Да. Вы можете оставить свою почту — мы пришлём бесплатный набор в формате PDF: карточка адвента, карточка брелка самоорганизации для 10–12 лет и один день календаря для родителей.",
      en: "Yes. Leave your email and we will send a free PDF kit: an advent card, a self-organisation keyring card for ages 10–12, and one day of the parents’ calendar.",
    },
  },
];
