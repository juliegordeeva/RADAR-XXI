import type { AgeGroup, Localized, Product } from "@/content/types";
import { isPlaceholderLoc } from "@/lib/placeholder";

function ru(text: string): Localized {
  return { ru: text, en: text };
}

function locPair(ruText: string, en: string): Localized {
  return { ru: ruText, en };
}

const brelokAgeLabel: Record<Exclude<AgeGroup, "parents">, Localized> = {
  "4-6": locPair("4–6 лет", "ages 4–6"),
  "7-9": locPair("7–9 лет", "ages 7–9"),
  "10-12": locPair("10–12 лет", "ages 10–12"),
  "13-16": locPair("13–16 лет", "ages 13–16"),
};

function brelokSamoorganizacii(
  age: Exclude<AgeGroup, "parents">,
  tagline: Localized,
): Product {
  const years = brelokAgeLabel[age];
  return {
    slug: `brelok-samoorganizacii-${age}`,
    kind: "cards",
    title: {
      ru: `Брелок самоорганизации — 14 карточек на кольце, ${years.ru}`,
      en: `Self-organisation keyring — 14 cards on a ring, ${years.en}`,
    },
    tagline,
    audience: {
      ru: `Семьи с детьми ${years.ru}.`,
      en: `Families with children ${years.en}.`,
    },
    result: {
      ru: "Ребёнок проверяет себя по карточкам, без напоминаний взрослого.",
      en: "The child checks themselves against the cards, without adult reminders.",
    },
    bullets: [
      {
        ru: "14 карточек на кольце-карабине — носит с собой",
        en: "14 cards on a carabiner ring — they carry it with them",
      },
      {
        ru: "Сам себя проверяет, вы не бегаете следом",
        en: "They check themselves. You do not run after them",
      },
    ],
    format: {
      ru: "14 карточек на кольце.",
      en: "14 cards on a ring.",
    },
    ageGroups: [age],
    competencies: ["organization"],
    ctaLabel: {
      ru: "Скоро",
      en: "Coming soon",
    },
    price: null,
    image: "",
    featured: false,
    comingSoon: true,
    composition: [ru("[TODO: состав карточек]")],
    howTo: [ru("[TODO: как пользоваться]")],
    delivery: ru("[TODO: цена и формат]"),
    sampleTitle: ru("[TODO: пример карточки]"),
    sampleBody: ru("[TODO: пример карточки]"),
    related: age === "10-12" ? ["kvest-organizuem-sobytie"] : [],
  };
}

export const products: Product[] = [
  {
    slug: "kalendar-32-dnya",
    kind: "calendar",
    title: {
      ru: "Отрывной календарь «32 дня родительства в радость»",
      en: "Tear-off calendar “32 days of parenting with joy”",
    },
    tagline: {
      ru: "Одна мысль, одно действие, один вопрос — 32 дня.",
      en: "One thought, one action, one question — 32 days.",
    },
    audience: {
      ru: "Родители. Возраст ребёнка не важен.",
      en: "Parents. The child’s age does not matter.",
    },
    result: {
      ru: "Сначала отмечаем точку старта. В конце смотрим на результат и динамику.",
      en: "You mark a starting point first. At the end you look at what changed.",
    },
    bullets: [
      {
        ru: "Дни 1–10: внимание и спокойствие",
        en: "Days 1–10: attention and calm",
      },
      {
        ru: "Дни 11–21: отказ от сравнений и FOMO",
        en: "Days 11–21: fewer comparisons and less FOMO",
      },
      {
        ru: "Дни 22–32: радость общения с ребёнком и новые привычки",
        en: "Days 22–32: ease with the child and new habits",
      },
    ],
    format: {
      ru: "32 дня по 5–10 минут. PDF, чат-бот или печать по предзаписи.",
      en: "32 days, 5–10 minutes each. PDF, chatbot, or print by pre-order.",
    },
    ageGroups: ["parents"],
    competencies: ["emotions", "organization"],
    ctaLabel: {
      ru: "Купить PDF и распечатать",
      en: "Buy PDF and print it",
    },
    purchaseFormats: ["pdf", "bot", "print"],
    price: 800,
    image: "/images/kalendar-21.svg",
    featured: true,
    composition: [
      {
        ru: "32 листа: мысль, действие, вопрос",
        en: "32 sheets: a thought, an action, a question",
      },
      {
        ru: "Дни 1–10: внимание и спокойствие",
        en: "Days 1–10: attention and calm",
      },
      {
        ru: "Дни 11–21: отказ от сравнений и FOMO",
        en: "Days 11–21: fewer comparisons and less FOMO",
      },
      {
        ru: "Дни 22–32: радость общения с ребёнком и новые привычки",
        en: "Days 22–32: ease with the child and new habits",
      },
      {
        ru: "Точка старта в начале и взгляд на динамику в конце",
        en: "A starting point at the beginning and a look at change at the end",
      },
    ],
    howTo: [
      {
        ru: "Повесьте или положите календарь там, где его видно утром",
        en: "Hang or place the calendar where you see it in the morning",
      },
      {
        ru: "Один лист в день. Сначала мысль, потом действие",
        en: "One sheet a day. Thought first, then the action",
      },
      {
        ru: "Вечером ответьте на вопрос. Можно в заметках телефона",
        en: "In the evening, answer the question. Phone notes are enough",
      },
    ],
    delivery: {
      ru: "Цифровые форматы — от 800 ₽. Печатная версия А5 — 1200 ₽ плюс пересылка, по предзаписи.",
      en: "Digital formats — from 800 ₽. A5 print — 1,200 ₽ plus shipping, by pre-order.",
    },
    sampleTitle: {
      ru: "День 4. Дыхательная пауза перед реакцией",
      en: "Day 4. A pause before you react",
    },
    sampleBody: {
      ru: "Мысль: между тревогой и реакцией можно вставить паузу. Действие: в одной ситуации сегодня сначала сделайте три медленных вдоха и выдоха, и только потом говорите. Вопрос: что изменилось, когда вы вставили паузу?",
      en: "Thought: you can put a pause between worry and the reaction. Action: in one moment today, take three slow breaths before you speak. Question: what changed when you added the pause?",
    },
    related: ["ezhednevnik-tri-roli", "kartochki-bezopasnosti"],
  },
  {
    slug: "ezhednevnik-tri-roli",
    kind: "diary",
    title: {
      ru: "Ежедневник «Три роли / одна жизнь»",
      en: "Diary “Three roles / one life”",
    },
    tagline: {
      ru: "Практическое руководство и дневник баланса для тех, кто управляет проектами, собой и семейным очагом.",
      en: "A practical guide and balance diary for people who run projects, themselves, and a household.",
    },
    audience: {
      ru: "Родители, которые ведут работу, семью и своё состояние в одном дне.",
      en: "Parents who hold work, family and their own state in one day.",
    },
    result: {
      ru: "Один разворот — один день в балансе.",
      en: "One spread — one day in balance.",
    },
    bullets: [
      {
        ru: "Один разворот = один день в балансе",
        en: "One spread = one day in balance",
      },
      {
        ru: "Еженедельный обзор в конце недели",
        en: "A weekly review at the end of the week",
      },
      {
        ru: "Карта намерений в начале каждого месяца",
        en: "An intentions map at the start of each month",
      },
    ],
    format: {
      ru: "PDF, чат-бот или печать по предзаписи. Можно запросить пример страницы.",
      en: "PDF, chatbot, or print by pre-order. You can request a sample page.",
    },
    ageGroups: ["parents"],
    competencies: ["emotions", "organization"],
    ctaLabel: {
      ru: "Скачать пример страницы",
      en: "Download a sample page",
    },
    purchaseFormats: ["sample", "pdf", "bot", "print"],
    price: null,
    image: "",
    featured: true,
    composition: [
      {
        ru: "Разворот на день: работа, семья и своё состояние",
        en: "A daily spread: work, family and your own state",
      },
      {
        ru: "Еженедельный обзор",
        en: "A weekly review",
      },
      {
        ru: "Карта намерений на месяц",
        en: "A monthly intentions map",
      },
    ],
    howTo: [
      {
        ru: "Один разворот — один день",
        en: "One spread — one day",
      },
      {
        ru: "В конце недели сделайте обзор",
        en: "At the end of the week, do the review",
      },
      {
        ru: "В начале месяца отметьте карту намерений",
        en: "At the start of the month, mark the intentions map",
      },
    ],
    delivery: {
      ru: "[TODO: цена и формат ежедневника для родителей]",
      en: "[TODO: price and format for the parent diary]",
    },
    sampleTitle: {
      ru: "Один разворот — один день",
      en: "One spread — one day",
    },
    sampleBody: {
      ru: "Один разворот на день. В конце недели — обзор. В начале месяца — карта намерений, а не список долгов.",
      en: "One spread a day. At the end of the week — a review. At the start of the month — an intentions map, not a debt list.",
    },
    related: ["kalendar-32-dnya"],
  },
  {
    slug: "kartochki-bezopasnosti",
    kind: "cards",
    title: {
      ru: "Карточки безопасности «Что делать, если…»",
      en: "Safety cards: “What to do if…”",
    },
    tagline: {
      ru: "45 ситуаций. Без запугивания, до автоматизма.",
      en: "45 situations. No scare stories. Until it is automatic.",
    },
    audience: {
      ru: "Родители детей 4–8 лет.",
      en: "Parents of children aged 4–8.",
    },
    result: {
      ru: "Ребёнок сам объясняет правило, а не кивает и забывает.",
      en: "The child can explain the rule, not just nod and forget.",
    },
    bullets: [
      {
        ru: "5 блоков: люди, пространство, дом, экстренные ситуации, границы",
        en: "5 blocks: people, places, home, emergencies, boundaries",
      },
      {
        ru: "На обороте: четыре шага, фраза вслух, мини-игра на 2 минуты",
        en: "On the back: four steps, a phrase to say aloud, a 2-minute game",
      },
      {
        ru: "Повторяем как алфавит, без страшных историй",
        en: "Repeat like the alphabet. No horror stories",
      },
    ],
    format: {
      ru: "45 карточек. PDF, чат-бот или печать по предзаписи.",
      en: "45 cards. PDF, chatbot, or print by pre-order.",
    },
    ageGroups: ["4-6", "7-9"],
    competencies: ["safety", "emotions", "critical", "communication"],
    ctaLabel: {
      ru: "Купить PDF и распечатать",
      en: "Buy PDF and print it",
    },
    purchaseFormats: ["pdf", "bot", "print"],
    price: null,
    image: "/images/lead-kartochka-bezopasnosti.webp",
    featured: true,
    composition: [
      {
        ru: "45 карточек, 5 блоков по 9: Люди, Пространство, Дом, Экстренные ситуации, Границы",
        en: "45 cards, 5 blocks of 9: People, Places, Home, Emergencies, Boundaries",
      },
      {
        ru: "Лицевая сторона — ситуация, которую ребёнок узнаёт",
        en: "Front: a situation the child recognises",
      },
      {
        ru: "Оборот — шаги Заметь → Остановись → Выбери безопасного взрослого → Зови на помощь, фраза для заучивания, мини-игра",
        en: "Back: Notice → Stop → Pick a safe adult → Call for help, a phrase to learn, a mini-game",
      },
    ],
    howTo: [
      {
        ru: "Вытащите одну карточку. Сначала картинка и фраза",
        en: "Draw one card. Start with the picture and the phrase",
      },
      {
        ru: "Пройдите четыре шага вслух. Затем мини-игру на две минуты",
        en: "Say the four steps aloud. Then play the two-minute game",
      },
      {
        ru: "Повторяйте знакомые карточки, пока ребёнок не сможет объяснить правило сам",
        en: "Repeat known cards until the child can explain the rule",
      },
    ],
    delivery: {
      ru: "PDF и чат-бот — после заявки. Печатный формат делаем по предзаказу.",
      en: "PDF and chatbot — after a request. Print is made to pre-order.",
    },
    sampleTitle: {
      ru: "Карточка «Потерялся в магазине»",
      en: "Card: “Lost in a shop”",
    },
    sampleBody: {
      ru: "Лицевая: ребёнок стоит у стеллажа и не видит взрослого. Фраза для заучивания: «Стою на месте. Зову маму. Ищу человека в форме». Мини-игра: дома спрячьте игрушку и потренируйте «стою и зову», а не бег по квартире.",
      en: "Front: a child by a shelf, no adult in sight. Phrase: “I stay where I am. I call mum. I look for someone in uniform.” Mini-game at home: hide a toy and practise “stay and call”, not running around.",
    },
    related: ["advent-4-6", "kvest-igrushechnyy-gorod"],
  },
  {
    slug: "advent-4-6",
    kind: "advent",
    title: {
      ru: "24 дня решений и креативности, 4–6 лет",
      en: "24 days of choices and making, ages 4–6",
    },
    tagline: {
      ru: "Герой выбирает из двух путей — ребёнок дорисовывает конец.",
      en: "A character picks a path. The child draws how it ends.",
    },
    audience: {
      ru: "Семьи с детьми 4–6 лет, которым нужен простой выбор, а не лекция.",
      en: "Families with children aged 4–6 who need a simple choice, not a lecture.",
    },
    result: {
      ru: "Ребёнок привыкает видеть два варианта, выбирать и объяснять «почему так» своими словами.",
      en: "The child gets used to seeing two options, picking one, and saying why.",
    },
    bullets: [
      {
        ru: "Сказочные развилки: два пути, ребёнок выбирает и доигрывает конец",
        en: "Story forks: two paths, the child picks and finishes the tale",
      },
      {
        ru: "Рисуем, достраиваем, придумываем — без «правильного ответа»",
        en: "Draw, add, invent — no single right answer",
      },
      {
        ru: "10–15 минут в день, любой сезон, не только декабрь",
        en: "10–15 minutes a day, any season, not only December",
      },
    ],
    format: {
      ru: "24 дня по 10–15 минут. Карточки или PDF.",
      en: "24 days, 10–15 minutes. Cards or PDF.",
    },
    ageGroups: ["4-6"],
    competencies: ["creative", "problems", "critical"],
    ctaLabel: {
      ru: "Получить адвент 4–6 лет",
      en: "Get the 4–6 advent",
    },
    price: null,
    image: "/images/sample-advent-4-6.webp",
    featured: true,
    composition: [
      {
        ru: "24 окна: короткая ситуация, два варианта, место для рисунка или конца истории",
        en: "24 windows: a short scene, two options, space to draw or finish the story",
      },
      {
        ru: "Фокус: увидеть варианты, выбрать, придумать продолжение",
        en: "Focus: see options, choose, invent what happens next",
      },
      {
        ru: "Инструкция, как не превращать день в обязаловку",
        en: "A note on how not to make it a chore",
      },
    ],
    howTo: [
      {
        ru: "Откройте одно окно. Прочитайте ситуацию вслух",
        en: "Open one window. Read the scene aloud",
      },
      {
        ru: "Ребёнок выбирает из двух путей и дорисовывает или доигрывает конец",
        en: "The child picks one of two paths and draws or plays the ending",
      },
      {
        ru: "Спросите «почему так» — и остановитесь, даже если ответ короткий",
        en: "Ask “why that one” — then stop, even if the answer is short",
      },
    ],
    delivery: {
      ru: "Формат и способ получения конкретного набора уточняются при заказе.",
      en: "Format and how you receive a specific kit are confirmed when you order.",
    },
    sampleTitle: {
      ru: "День 5. Герой выбирает",
      en: "Day 5. The hero chooses",
    },
    sampleBody: {
      ru: "Лису нужно перебраться через реку. Мост длинный или лодка быстрая — два пути. Ребёнок выбирает, дорисовывает конец и говорит, почему так. Вы не поправляете выбор.",
      en: "A fox needs to cross a river. A long bridge or a fast boat. The child picks, draws the ending, and says why. You do not override the choice.",
    },
    related: ["advent-7-9", "kvest-igrushechnyy-gorod"],
  },
  {
    slug: "advent-7-9",
    kind: "advent",
    title: {
      ru: "24 семейных минипроекта, 7–9 лет",
      en: "24 family mini-projects, ages 7–9",
    },
    tagline: {
      ru: "Задумать, спланировать, сделать и подвести итог — по одному шагу в день.",
      en: "Think it up, plan it, make it, review it — one step a day.",
    },
    audience: {
      ru: "Семьи с детьми 7–9 лет, которым мало разовой поделки — нужен проект с началом и концом.",
      en: "Families with children aged 7–9 who want a project with a start and an end, not a one-off craft.",
    },
    result: {
      ru: "Ребёнок видит, что большое дело складывается из шагов, и сам отмечает, что уже сделано.",
      en: "The child sees that a bigger job is made of steps, and ticks off what is done.",
    },
    bullets: [
      {
        ru: "Серия минипроектов с общим сюжетом: выставка, газета, домашнее «научное шоу»",
        en: "A run of mini-projects with one plot: a show, a family paper, a home science night",
      },
      {
        ru: "На каждый день — один шаг и короткий чеклист",
        en: "One step a day and a short checklist",
      },
      {
        ru: "В конце: что получилось, что было трудно, что взять в следующий раз",
        en: "At the end: what worked, what was hard, what to keep next time",
      },
    ],
    format: {
      ru: "24 дня по 10–20 минут. Карточки или PDF.",
      en: "24 days, 10–20 minutes. Cards or PDF.",
    },
    ageGroups: ["7-9"],
    competencies: ["problems", "organization", "cooperation"],
    ctaLabel: {
      ru: "Получить адвент 7–9 лет",
      en: "Get the 7–9 advent",
    },
    price: null,
    image: "/images/sample-advent-7-9.webp",
    featured: false,
    composition: [
      {
        ru: "24 шага: задумать, приготовить, сделать, показать, подвести итог",
        en: "24 steps: think it up, prepare, make, show, review",
      },
      {
        ru: "Общий сюжет на несколько дней, а не 24 разрозненные поделки",
        en: "One plot across days, not 24 unrelated crafts",
      },
      {
        ru: "Родитель держит рамку, ребёнок выбирает детали и отмечает шаг",
        en: "The parent holds the frame. The child picks the details and ticks the step",
      },
    ],
    howTo: [
      {
        ru: "Одно окно в день. Сначала «что делаем сегодня», потом дело",
        en: "One window a day. First “what we do today”, then the work",
      },
      {
        ru: "Запишите, кто за что отвечает — даже если ролей две",
        en: "Write who does what, even if there are only two roles",
      },
      {
        ru: "В конце сюжета спросите, что получилось и что было трудно",
        en: "At the end of the plot, ask what worked and what was hard",
      },
    ],
    delivery: {
      ru: "Формат и способ получения конкретного набора уточняются при заказе.",
      en: "Format and how you receive a specific kit are confirmed when you order.",
    },
    sampleTitle: {
      ru: "День 12. Семейная выставка",
      en: "Day 12. A family show",
    },
    sampleBody: {
      ru: "Сегодня один шаг: повесить три работы и подписать, кто автор. Ребёнок выбирает, в каком порядке висят рисунки. Завтра — пригласить домашних «на вернисаж» и один вопрос гостю.",
      en: "One step today: hang three pieces and write who made them. The child picks the order. Tomorrow: invite the household to the “opening” and ask one guest a question.",
    },
    related: ["nabor-14-obshchenie", "advent-4-6"],
  },
  {
    slug: "nabor-14-obshchenie",
    kind: "kit",
    title: {
      ru: "14 дней общения, 7–9 лет",
      en: "14 days of talking things through, ages 7–9",
    },
    tagline: {
      ru: "Сказать, услышать, договориться — 15 минут в день, один маршрут.",
      en: "Say it, hear it, agree — 15 minutes a day, one path.",
    },
    audience: {
      ru: "Семьи с детьми 7–9 лет, где разговор быстро срывается в «потому что я так сказал».",
      en: "Families with children aged 7–9 whose talks slide into “because I said so”.",
    },
    result: {
      ru: "Ребёнок тренирует, как попросить, как сказать «нет» и как повторить чужую мысль своими словами.",
      en: "The child practises asking, saying no, and repeating someone else’s point in their own words.",
    },
    bullets: [
      {
        ru: "Ролевые сценки: попросить помощь, помириться, позвать в игру",
        en: "Short role-plays: ask for help, make up, invite someone in",
      },
      {
        ru: "Упражнение «скажи то же, но мягче»",
        en: "“Say the same thing, but softer”",
      },
      {
        ru: "Один навык 14 дней подряд, без прыжков по темам",
        en: "One skill for 14 days. No jumping between topics",
      },
    ],
    format: {
      ru: "14 дней по 15 минут. Карточки.",
      en: "14 days, 15 minutes. Cards.",
    },
    ageGroups: ["7-9"],
    competencies: ["communication", "empathy", "cooperation"],
    ctaLabel: {
      ru: "Получить набор «14 дней общения»",
      en: "Get the 14-day talking kit",
    },
    price: null,
    image: "/images/sample-14-obshchenie.webp",
    featured: false,
    composition: [
      {
        ru: "14 карточек: диалог, сценка или минипроект «родитель + ребёнок»",
        en: "14 cards: a dialogue, a scene, or a parent-and-child mini-task",
      },
      {
        ru: "Короткий текст для родителя: когда молчать и дать договорить",
        en: "A short parent line: when to stay quiet and let the child finish",
      },
      {
        ru: "Один вопрос после задания, без разбора полётов",
        en: "One question after the task, not a long debrief",
      },
    ],
    howTo: [
      {
        ru: "14 дней подряд, лучше в одно и то же время",
        en: "14 days in a row, ideally at the same time of day",
      },
      {
        ru: "Сначала сценка или фраза ребёнка, потом ваш ход",
        en: "The child’s line or scene first, then yours",
      },
      {
        ru: "Не смешивайте с другим набором, пока не закончите этот",
        en: "Do not mix in another kit until this one is done",
      },
    ],
    delivery: {
      ru: "Формат и способ получения конкретного набора уточняются при заказе.",
      en: "Format and how you receive a specific kit are confirmed when you order.",
    },
    sampleTitle: {
      ru: "День 6. Скажи иначе",
      en: "Day 6. Say it another way",
    },
    sampleBody: {
      ru: "Ребёнок просит о помощи так, как обычно: резко или тихо. Вместе находите более ясную фразу и проигрываете сценку ещё раз. Вы не оцениваете «вежливость», а проверяете: вас поняли?",
      en: "The child asks for help the usual way: sharp or too quiet. You find a clearer sentence and play the scene once more. You are not scoring politeness. You are checking: did the other person understand?",
    },
    related: ["advent-7-9", "kvest-missiya-v-magazine"],
  },
  brelokSamoorganizacii("4-6", {
    ru: "Сам собирает рюкзак в садик, а вы не бегаете следом?",
    en: "Packs the kindergarten bag — you do not run after them?",
  }),
  brelokSamoorganizacii("7-9", {
    ru: "Сам собирает портфель, а вы не бегаете следом?",
    en: "Packs the schoolbag — you do not run after them?",
  }),
  brelokSamoorganizacii("10-12", {
    ru: "Сам проверяет школу и кружки, а вы не стоите над душой?",
    en: "Checks school and clubs — you do not stand over them?",
  }),
  brelokSamoorganizacii("13-16", {
    ru: "Свой список с собой — без напоминаний взрослого.",
    en: "Their own list on a ring — no adult reminders.",
  }),
  {
    slug: "kvest-igrushechnyy-gorod",
    kind: "quest",
    title: {
      ru: "Квест «Спасаем игрушечный город», 4–6 лет",
      en: "Quest: Save the toy town, ages 4–6",
    },
    tagline: {
      ru: "Кто-то грустит, что-то сломалось — ребёнок выбирает, как помочь.",
      en: "Someone is sad, something is broken. The child chooses how to help.",
    },
    audience: {
      ru: "Семьи с детьми 4–6 лет. Полчаса–час на ковре, не марафон.",
      en: "Families with children aged 4–6. Half an hour to an hour on the rug, not a marathon.",
    },
    result: {
      ru: "Ребёнок выбирает из двух-трёх способов помочь и вслух говорит, что чувствует герой.",
      en: "The child picks one of two or three ways to help, and says how the character feels.",
    },
    bullets: [
      {
        ru: "Простые решения: обнять, починить, позвать на помощь",
        en: "Simple choices: hug, mend, call for help",
      },
      {
        ru: "Команда «я + родитель» — вы озвучиваете задачу, выбирает ребёнок",
        en: "A team of two: you name the task, the child chooses",
      },
      {
        ru: "После станции — один вопрос: что сейчас чувствует герой",
        en: "After a station, one question: how does the character feel now",
      },
    ],
    format: {
      ru: "45–60 минут. Печатные станции или PDF.",
      en: "45–60 minutes. Print stations or PDF.",
    },
    ageGroups: ["4-6"],
    competencies: ["empathy", "communication", "problems"],
    ctaLabel: {
      ru: "Получить квест «Игрушечный город»",
      en: "Get the toy-town quest",
    },
    price: null,
    image: "/images/sample-kvest-gorod.webp",
    featured: false,
    composition: [
      {
        ru: "Станции по комнате: пропала деталь, кто-то грустит, что-то сломалось",
        en: "Stations around the room: a missing piece, someone sad, something broken",
      },
      {
        ru: "На каждой станции 2–3 варианта, как помочь",
        en: "At each station, 2–3 ways to help",
      },
      {
        ru: "Памятка: не подсказывать «правильную доброту»",
        en: "A note: do not hint at the “right” kind of kindness",
      },
    ],
    howTo: [
      {
        ru: "Разложите станции. Прочитайте завязку: в городе игрушек неполадка",
        en: "Lay out the stations. Read the opening: something is wrong in the toy town",
      },
      {
        ru: "Ребёнок выбирает, как помочь. Вместе делаете действие",
        en: "The child chooses how to help. You do the action together",
      },
      {
        ru: "В конце спросите, кому было труднее всего и почему",
        en: "At the end, ask who had it hardest, and why",
      },
    ],
    delivery: {
      ru: "Формат и способ получения конкретного набора уточняются при заказе.",
      en: "Format and how you receive a specific kit are confirmed when you order.",
    },
    sampleTitle: {
      ru: "Станция 2. Кто грустит в городе",
      en: "Station 2. Who is sad in town",
    },
    sampleBody: {
      ru: "На скамейке сидит плюшевый медведь и не играет. Можно сесть рядом, принести деталь от домика или позвать другого героя. Ребёнок выбирает. Потом вслух: что медведь чувствовал до и после.",
      en: "A teddy sits on a bench and will not play. Sit next to him, bring a piece of the house, or fetch another character. The child picks. Then say aloud: how did the bear feel before and after.",
    },
    related: ["advent-4-6", "kartochki-bezopasnosti"],
  },
  {
    slug: "kvest-missiya-v-magazine",
    kind: "quest",
    title: {
      ru: "Квест «Секретная миссия в магазине», 7–9 лет",
      en: "Quest: Secret shop mission, ages 7–9",
    },
    tagline: {
      ru: "Ограниченный бюджет, список задач — что важнее и что отложить.",
      en: "A limited budget and a list. What matters more, what can wait.",
    },
    audience: {
      ru: "Семьи с детьми 7–9 лет. Дома с «магазином» из кухни или в настоящем магазине на короткой закупке.",
      en: "Families with children aged 7–9. At home with a kitchen “shop”, or on a short real shop run.",
    },
    result: {
      ru: "Ребёнок видит, что на всё не хватает, и выбирает, от чего отказаться.",
      en: "The child sees that you cannot have everything, and chooses what to drop.",
    },
    bullets: [
      {
        ru: "Список и лимит: время или сумма — на выбор семьи",
        en: "A list and a limit: time or money, the family picks which",
      },
      {
        ru: "Ребёнок предлагает варианты, вы показываете последствия",
        en: "The child offers options. You show what follows",
      },
      {
        ru: "Если чего-то нет на полке — план Б, а не срыв миссии",
        en: "If a shelf is empty: a plan B, not a failed mission",
      },
    ],
    format: {
      ru: "60–90 минут. Печатный набор или PDF.",
      en: "60–90 minutes. Print set or PDF.",
    },
    ageGroups: ["7-9"],
    competencies: ["problems", "organization", "information"],
    ctaLabel: {
      ru: "Получить квест «Миссия в магазине»",
      en: "Get the shop-mission quest",
    },
    price: null,
    image: "/images/sample-kvest-magazin.webp",
    featured: false,
    composition: [
      {
        ru: "Бриф миссии: ужин или подарок другу, лимит и список",
        en: "A mission brief: dinner or a gift for a friend, a limit and a list",
      },
      {
        ru: "Станции выбора: что важнее, что можно заменить, что отложить",
        en: "Choice stations: what matters more, what can be swapped, what can wait",
      },
      {
        ru: "Итог: что купили, от чего отказались и почему",
        en: "A close: what you got, what you dropped, and why",
      },
    ],
    howTo: [
      {
        ru: "Прочитайте бриф. Ребёнок повторяет лимит своими словами",
        en: "Read the brief. The child repeats the limit in their own words",
      },
      {
        ru: "На каждой станции выбирает ребёнок. Вы называете цену выбора",
        en: "At each station the child chooses. You name the cost of that choice",
      },
      {
        ru: "В конце сравните список и корзину: что вычеркнули",
        en: "At the end, compare the list and the basket: what got crossed out",
      },
    ],
    delivery: {
      ru: "Формат и способ получения конкретного набора уточняются при заказе.",
      en: "Format and how you receive a specific kit are confirmed when you order.",
    },
    sampleTitle: {
      ru: "Станция 3. Что важнее",
      en: "Station 3. What matters more",
    },
    sampleBody: {
      ru: "На столе яблоко, сладость и хлеб. Лимит — два предмета. Ребёнок выбирает, что взять на ужин, и говорит, что подождёт. Если в настоящем магазине нет позиции из списка — сразу план Б, без драмы.",
      en: "On the table: an apple, a sweet, bread. The limit is two items. The child picks what dinner needs and what can wait. If a real shop is missing a list item, go to plan B. No drama.",
    },
    related: ["nabor-14-obshchenie", "kvest-organizuem-sobytie"],
  },
  {
    slug: "kvest-organizuem-sobytie",
    kind: "quest",
    title: {
      ru: "Квест «Организуем событие», 10–12 лет",
      en: "Quest: We run an event, ages 10–12",
    },
    tagline: {
      ru: "Реальный семейный вечер: цель, шаги, кто за что отвечает, итог.",
      en: "A real family evening: a goal, steps, who does what, a review.",
    },
    audience: {
      ru: "Семьи с детьми 10–12 лет. Выходной, когда можно довести дело до гостей или хотя бы до своих.",
      en: "Families with children aged 10–12. A weekend when you can finish something for guests, or at least for the household.",
    },
    result: {
      ru: "Ребёнок проводит маленький проект до конца и видит, что сдвинуть, если время кончилось.",
      en: "The child runs a small project to the end and sees what to move if time runs out.",
    },
    bullets: [
      {
        ru: "Формат на выбор: настолки, фильм для друзей, семейный праздник",
        en: "Pick a format: board games, a film for friends, a family party",
      },
      {
        ru: "План, список задач, дедлайн, распределение ролей",
        en: "A plan, a task list, a deadline, roles",
      },
      {
        ru: "После: что получилось, что улучшить в следующий раз",
        en: "Afterwards: what worked, what to improve next time",
      },
    ],
    format: {
      ru: "60–90 минут на план плюс само событие. Печать или PDF.",
      en: "60–90 minutes to plan, plus the event itself. Print or PDF.",
    },
    ageGroups: ["10-12"],
    competencies: ["organization", "cooperation", "problems"],
    ctaLabel: {
      ru: "Получить квест «Семейное событие»",
      en: "Get the family-event quest",
    },
    price: null,
    image: "/images/sample-kvest-sobytie.webp",
    featured: false,
    composition: [
      {
        ru: "Карточки шагов: выбрать формат, список гостей, задачи, репетиция, итог",
        en: "Step cards: pick a format, guest list, tasks, a dry run, a review",
      },
      {
        ru: "Лист ролей: что делает ребёнок, что — взрослый",
        en: "A roles sheet: what the child does, what the adult does",
      },
      {
        ru: "Памятка: не забирать проект, если идёт медленнее, чем вам удобно",
        en: "A note: do not take the project over if it is slower than you like",
      },
    ],
    howTo: [
      {
        ru: "Ребёнок выбирает формат вечера из трёх вариантов",
        en: "The child picks the evening format from three options",
      },
      {
        ru: "Вместе пишете шаги и дедлайн. Дальше ребёнок ведёт список",
        en: "You write the steps and the deadline together. Then the child runs the list",
      },
      {
        ru: "После события — три строки: вышло, трудно, в следующий раз",
        en: "After the event, three lines: what worked, what was hard, next time",
      },
    ],
    delivery: {
      ru: "Формат и способ получения конкретного набора уточняются при заказе.",
      en: "Format and how you receive a specific kit are confirmed when you order.",
    },
    sampleTitle: {
      ru: "Шаг 1. Вечер настолок",
      en: "Step 1. Board-game night",
    },
    sampleBody: {
      ru: "Ребёнок выбирает: настолки дома в пятницу. На листе — кто зовёт, какие две игры, что готовит взрослый. Если друг не может прийти, событие не отменяется: играют своими.",
      en: "The child picks: board games at home on Friday. On the sheet: who invites, which two games, what the adult prepares. If a friend cannot come, the evening still happens with the household.",
    },
    related: ["9-voprosov-svoego-dela", "kurs-podrostki"],
  },
  {
    slug: "kurs-podrostki",
    kind: "course",
    title: {
      ru: "Управление проектами — «Учимся побеждать»",
      en: "Project management — “Learning to win”",
    },
    tagline: {
      ru: "Практика доводить дело, а не лекции «кем быть».",
      en: "Practice finishing things, not lectures on “what to be”.",
    },
    audience: {
      ru: "Подростки 13–16 лет и родители, которым нужен разговор без лекций «кем быть».",
      en: "Teens aged 13–16 and parents who need a talk without a lecture on “what to be”.",
    },
    result: {
      ru: "Подросток лучше формулирует, как думает, как договаривается и какие задачи ему подходят — не список профессий с картинками.",
      en: "The teen can say how they think, how they negotiate, and what kind of work fits — not a poster of job titles.",
    },
    bullets: [
      {
        ru: "Курс 13–16 лет: мышление, самоорганизация, умение договариваться",
        en: "Course for ages 13–16: thinking, organising yourself, talking things through",
      },
      {
        ru: "Не лекции: задания, разборы и живые разговоры",
        en: "Not lectures: tasks, reviews and real conversations",
      },
      {
        ru: "Профориентация 13–16: семейная сессия, сильные стороны и типы задач",
        en: "Career session ages 13–16: family meeting, strengths and types of work",
      },
    ],
    format: {
      ru: "Курс 6–8 недель. Сессия онлайн или очно.",
      en: "Course: 6–8 weeks. Session: online or in person.",
    },
    ageGroups: ["13-16"],
    competencies: ["critical", "organization", "communication"],
    ctaLabel: {
      ru: "Записаться на «Учимся побеждать»",
      en: "Sign up for “Learning to win”",
    },
    author: {
      ru: "Мария Громова",
      en: "Мария Громова",
    },
    price: null,
    image: "/images/kurs.svg",
    featured: true,
    composition: [
      {
        ru: "Курс: 6–8 недель, задания и разборы, без лекций",
        en: "Course: 6–8 weeks of tasks and reviews, no lectures",
      },
      {
        ru: "Семейная сессия: подросток и родители, сильные стороны, предпочитаемые роли",
        en: "Family session: teen and parents, strengths, preferred roles",
      },
      {
        ru: "Разговор не о «профессии мечты», а о типах задач, среды и команд",
        en: "The talk is not about a dream job title. It is about types of tasks, settings and teams",
      },
    ],
    howTo: [
      {
        ru: "Оставьте заявку: курс, сессия или оба формата",
        en: "Send a request: course, session, or both",
      },
      {
        ru: "Согласуем возраст, язык (русский или английский) и онлайн/очно",
        en: "We agree age, language (Russian or English) and online or in person",
      },
      {
        ru: "Перед сессией — короткий опросник, чтобы не начинать с нуля",
        en: "A short questionnaire before the session, so you do not start from zero",
      },
    ],
    delivery: {
      ru: "Формат и способ получения конкретного набора уточняются при заказе.",
      en: "Format and how you receive a specific kit are confirmed when you order.",
    },
    sampleTitle: {
      ru: "Как устроена сессия",
      en: "How the session works",
    },
    sampleBody: {
      ru: "Сначала подросток говорит, какие задачи ему интересны и где он выдыхается. Затем родители — что видят они, без спора «ты должен». Вместе собираем типы среды, в которых ему будет проще, и один следующий шаг на месяц.",
      en: "The teen speaks first: which tasks they like, where they run out of steam. Then the parents — what they see, without “you should”. Together you name the settings that fit, and one next step for the month.",
    },
    related: ["kvest-organizuem-sobytie", "kalendar-32-dnya"],
  },
  {
    slug: "9-voprosov-svoego-dela",
    kind: "kit",
    title: locPair(
      "«9 вопросов для своего дела», 10–12 лет",
      "“9 questions for your own project”, ages 10–12",
    ),
    tagline: locPair(
      "Один настоящий проект — девять коротких вопросов своими словами.",
      "One real project — nine short questions in the child’s own words.",
    ),
    audience: locPair(
      "Семьи с детьми 10–12 лет, у которых есть школьная ярмарка, сбор денег классу или другое своё дело.",
      "Families with children aged 10–12 who have a school fair, a class fundraiser, or another real project.",
    ),
    result: locPair(
      "Ребёнок разбирает свой проект простыми вопросами, а не «компанию из учебника».",
      "The child unpacks their own project in plain questions, not a textbook “company”.",
    ),
    bullets: [
      locPair(
        "9 вопросов на языке ребёнка — про один проект",
        "Nine questions in the child’s language — about one project",
      ),
      locPair(
        "Ярмарка в школе, сбор денег классу, своё дело",
        "A school fair, a class fundraiser, their own project",
      ),
      locPair(
        "Без взрослых терминов на карточке",
        "No adult jargon on the card",
      ),
    ],
    format: locPair("9 вопросов про один проект.", "Nine questions about one project."),
    ageGroups: ["10-12"],
    competencies: ["critical", "organization", "creative"],
    ctaLabel: locPair(
      "Получить «9 вопросов для своего дела»",
      "Get “9 questions for your own project”",
    ),
    price: null,
    image: "",
    featured: false,
    composition: [
      locPair("Девять вопросов про один ваш проект", "Nine questions about one real project"),
      locPair(
        "Формулировки простые, без взрослых терминов",
        "Plain wording, no adult terms",
      ),
      ru("[TODO: вставить 9 вопросов из черновика команды]"),
    ],
    howTo: [
      locPair(
        "Выберите один настоящий проект, не учебный кейс",
        "Pick one real project, not a textbook case",
      ),
      locPair(
        "Ребёнок отвечает своими словами, вы не переводите на взрослый язык",
        "The child answers in their own words. You do not translate into adult language",
      ),
      locPair(
        "Если ответа нет — вопрос оставляете и возвращаетесь после ярмарки или сбора",
        "If there is no answer yet, leave the question and come back after the fair or the collection",
      ),
    ],
    delivery: ru("[TODO: цена и формат]"),
    sampleTitle: locPair("Школьная ярмарка", "The school fair"),
    sampleBody: locPair(
      "Берёте один проект: печенье на ярмарку или сбор денег классу. Ребёнок отвечает, для кого это, кто помогает и на что уйдут силы. Вы не добавляете термины из учебника.",
      "Take one project: biscuits for the fair, or a class fundraiser. The child says who it is for, who helps, and where the effort goes. You do not add textbook terms.",
    ),
    related: ["kvest-organizuem-sobytie"],
  },
  {
    slug: "kanva-ostervaldera",
    kind: "course",
    title: locPair("Канва Остервальдера", "The Osterwalder canvas"),
    tagline: locPair(
      "Полноценный разбор бизнес-модели проекта.",
      "A full business-model review of a project.",
    ),
    audience: locPair(
      "Подростки 13–16 лет, у которых есть свой проект — школьный, семейный или своё дело.",
      "Teens aged 13–16 who have a school, family or own project.",
    ),
    result: locPair(
      "Подросток разбирает проект как бизнес-модель: кто клиент, что делаем, на что уходят силы и деньги.",
      "The teen reads the project as a business model: who it is for, what you do, where effort and money go.",
    ),
    bullets: [
      locPair(
        "Разбор бизнес-модели проекта, не курс про общение и договорённости",
        "A business-model review, not a course on talking things through",
      ),
      locPair(
        "Пока готовим программу — без цены и без записи",
        "The programme is still in preparation — no price and no booking yet",
      ),
    ],
    format: locPair("Программа готовится.", "The programme is still in preparation."),
    ageGroups: ["13-16"],
    competencies: ["critical", "organization", "creative"],
    ctaLabel: locPair("Скоро", "Coming soon"),
    author: ru("[TODO: не назначен]"),
    price: null,
    image: "",
    featured: false,
    comingSoon: true,
    composition: [ru("[TODO: состав]")],
    howTo: [ru("[TODO: как пользоваться]")],
    delivery: ru("[TODO: цена и формат]"),
    sampleTitle: ru("[TODO: пример задания]"),
    sampleBody: ru("[TODO: пример задания]"),
    related: ["kurs-podrostki"],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelated(product: Product) {
  return product.related
    .map((slug) => getProduct(slug))
    .filter((item): item is Product => Boolean(item));
}

export function forCatalog(product: Product): Product {
  return {
    ...product,
    author: isPlaceholderLoc(product.author) ? undefined : product.author,
    bullets: product.bullets.filter((item) => !isPlaceholderLoc(item)),
    composition: [],
    howTo: [],
    sampleTitle: { ru: "", en: "" },
    sampleBody: { ru: "", en: "" },
    audience: { ru: "", en: "" },
    result: { ru: "", en: "" },
    delivery: { ru: "", en: "" },
  };
}

export const catalogProducts = products.map(forCatalog);
