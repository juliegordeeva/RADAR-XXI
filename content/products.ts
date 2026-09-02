import type { Product } from "@/content/types";

export const products: Product[] = [
  {
    slug: "kalendar-21-den",
    kind: "calendar",
    title: {
      ru: "Отрывной календарь «21 день спокойного родительства»",
      en: "Tear-off calendar: 21 days of calmer parenting",
    },
    tagline: {
      ru: "Одна мысль, одно действие, один вопрос — 21 день.",
      en: "One thought, one action, one question — 21 days.",
    },
    audience: {
      ru: "Родители, которые слишком много тревожатся. Возраст ребёнка не важен.",
      en: "Parents who worry more than they want to. The child’s age does not matter.",
    },
    result: {
      ru: "Меньше стресса и больше удовольствия от общения с ребёнком.",
      en: "Less stress, more ease in time with your child.",
    },
    bullets: [
      {
        ru: "Дни 1–7: замечаю и успокаиваю себя",
        en: "Days 1–7: notice and settle yourself",
      },
      {
        ru: "Дни 8–14: отказ от сравнений и FOMO",
        en: "Days 8–14: fewer comparisons, less FOMO",
      },
      {
        ru: "Дни 15–21: радость общения и новые привычки",
        en: "Days 15–21: easier contact and small habits",
      },
    ],
    format: {
      ru: "21 день по 5–10 минут. Печать А5/А6 или PDF.",
      en: "21 days, 5–10 minutes. Print A5/A6 or PDF.",
    },
    ageGroups: ["parents"],
    competencies: ["emotions", "organization"],
    ctaLabel: {
      ru: "Скачать календарь на 21 день",
      en: "Get the 21-day calendar",
    },
    price: null,
    image: "/images/kalendar-21.svg",
    featured: true,
    composition: [
      {
        ru: "21 отрывной лист: мысль, действие, вопрос для самонаблюдения",
        en: "21 tear-off sheets: a thought, an action, a question",
      },
      {
        ru: "Три блока по семь дней",
        en: "Three blocks of seven days",
      },
      {
        ru: "Короткая инструкция, как не превращать календарь в ещё один долг",
        en: "A short note on how not to turn it into another chore",
      },
    ],
    howTo: [
      {
        ru: "Повесьте или положите календарь там, где его видно утром",
        en: "Keep it where you will see it in the morning",
      },
      {
        ru: "Отрывайте один лист в день. Сначала мысль, потом действие",
        en: "Tear one sheet a day. Read the thought, then do the action",
      },
      {
        ru: "Вечером ответьте на вопрос. Можно в заметках телефона",
        en: "Answer the question in the evening. A phone note is enough",
      },
    ],
    delivery: {
      ru: "TODO: цена. Формат: печать почтой, PDF или оба варианта — уточняется.",
      en: "TODO: price. Print by post, PDF, or both — to be confirmed.",
    },
    sampleTitle: {
      ru: "День 4. Дыхательная пауза перед реакцией",
      en: "Day 4. A breath before you react",
    },
    sampleBody: {
      ru: "Мысль: между тревогой и реакцией можно вставить паузу. Действие: в одной ситуации сегодня сначала сделайте три медленных вдоха и выдоха, и только потом говорите. Вопрос: что изменилось, когда вы вставили паузу?",
      en: "Thought: there is room between worry and reaction. Action: in one moment today, take three slow breaths before you speak. Question: what changed when you paused?",
    },
    related: ["kalendar-32-den", "kartochki-bezopasnosti"],
  },
  {
    slug: "kalendar-32-den",
    kind: "calendar",
    title: {
      ru: "Календарь «32 дня» с замерами",
      en: "32-day calendar with a before/after score",
    },
    tagline: {
      ru: "Та же логика, плюс цифры в первый и последний день.",
      en: "The same daily practice, plus a score on day 1 and day 32.",
    },
    audience: {
      ru: "Родителям, кому нужен результат в цифрах, а не только «на ощущение».",
      en: "Parents who want a number, not only a feeling.",
    },
    result: {
      ru: "Вы сравниваете тревогу, удовольствие от общения и чувство «я плохой/хороший родитель» на старте и в конце.",
      en: "You compare worry, enjoyment of time together, and the “good/bad parent” feeling at the start and at the end.",
    },
    bullets: [
      {
        ru: "Шкала 1–10 в первый и последний день",
        en: "A 1–10 scale on the first and last day",
      },
      {
        ru: "32 дня: спокойствие, отказ от сравнений, радость общения",
        en: "32 days: settling, fewer comparisons, easier contact",
      },
      {
        ru: "В конце — что забрать в привычку",
        en: "At the end: what to keep as a habit",
      },
    ],
    format: {
      ru: "32 дня по 5–10 минут. Печать или PDF.",
      en: "32 days, 5–10 minutes. Print or PDF.",
    },
    ageGroups: ["parents"],
    competencies: ["emotions", "organization"],
    ctaLabel: {
      ru: "Получить календарь на 32 дня",
      en: "Get the 32-day calendar",
    },
    price: null,
    image: "/images/kalendar-32.svg",
    featured: false,
    composition: [
      {
        ru: "32 листа с мыслью, действием и вопросом",
        en: "32 sheets with a thought, an action and a question",
      },
      {
        ru: "Замер в день 1 и день 32: тревога, удовольствие, чувство о себе как о родителе",
        en: "Scores on day 1 and day 32: worry, enjoyment, how you see yourself as a parent",
      },
      {
        ru: "Итоговый лист: что оставить в регулярном использовании",
        en: "A closing sheet: what to keep using",
      },
    ],
    howTo: [
      {
        ru: "В первый день поставьте три оценки от 1 до 10 и сохраните их",
        en: "On day 1, score three items from 1 to 10 and keep the numbers",
      },
      {
        ru: "Дальше — один лист в день, как в коротком календаре",
        en: "Then one sheet a day, as in the shorter calendar",
      },
      {
        ru: "В день 32 поставьте оценки снова и сравните",
        en: "On day 32, score again and compare",
      },
    ],
    delivery: {
      ru: "TODO: цена. Печать или PDF — уточняется.",
      en: "TODO: price. Print or PDF — to be confirmed.",
    },
    sampleTitle: {
      ru: "День 1. Где я сейчас?",
      en: "Day 1. Where am I now?",
    },
    sampleBody: {
      ru: "Оцените по шкале от 1 до 10: тревогу за ребёнка, удовольствие от общения, чувство «я плохой/хороший родитель». Сохраните цифры. Затем письменно: в какие моменты вы чувствуете себя достаточным родителем и что хотите для себя в родительстве прямо сейчас.",
      en: "Score from 1 to 10: worry about your child, enjoyment of time together, the “good/bad parent” feeling. Keep the numbers. Then write: when do you feel “enough” as a parent, and what do you want for yourself in parenting right now?",
    },
    related: ["kalendar-21-den", "kurs-podrostki"],
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
      ru: "45 карточек. Печать или PDF.",
      en: "45 cards. Print or PDF.",
    },
    ageGroups: ["4-6", "7-9"],
    competencies: ["safety", "emotions", "critical", "communication"],
    ctaLabel: {
      ru: "Получить карточки безопасности",
      en: "Get the safety cards",
    },
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
      ru: "TODO: цена. Печать колодой или PDF — уточняется.",
      en: "TODO: price. Printed deck or PDF — to be confirmed.",
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
      ru: "TODO: цена. Печать или PDF, любой сезон.",
      en: "TODO: price. Print or PDF, any season.",
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
      ru: "TODO: цена. Печать или PDF.",
      en: "TODO: price. Print or PDF.",
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
      ru: "TODO: цена. Печать или PDF.",
      en: "TODO: price. Print or PDF.",
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
  {
    slug: "nabor-14-samoorg",
    kind: "kit",
    title: {
      ru: "14 дней самоорганизации, 10–12 лет",
      en: "14 days of getting organised, ages 10–12",
    },
    tagline: {
      ru: "Недельный план: учёба, своё время и что делать, если не успеваем.",
      en: "A weekly plan: school, free time, and what to do if you run out of time.",
    },
    audience: {
      ru: "Семьи с детьми 10–12 лет, где вечно «потом» и срыв дедлайна.",
      en: "Families with children aged 10–12 who live on “later” and missed deadlines.",
    },
    result: {
      ru: "Ребёнок пробует расставить приоритеты и поправить план, а не бросать его после первого сбоя.",
      en: "The child tries to rank tasks and fix a plan, instead of dropping it after the first slip.",
    },
    bullets: [
      {
        ru: "План на неделю: учёба и свободное время на одном листе",
        en: "A week on one sheet: school and free time",
      },
      {
        ru: "Разговор «не успел — что делаем» без нотации",
        en: "A talk about “we ran out of time — what now”, without a lecture",
      },
      {
        ru: "15 минут в день, 14 дней, один маршрут",
        en: "15 minutes a day, 14 days, one path",
      },
    ],
    format: {
      ru: "14 дней по 15 минут. Карточки и лист плана.",
      en: "14 days, 15 minutes. Cards and a plan sheet.",
    },
    ageGroups: ["10-12"],
    competencies: ["organization", "emotions", "problems"],
    ctaLabel: {
      ru: "Получить набор «14 дней плана»",
      en: "Get the 14-day planning kit",
    },
    price: null,
    image: "/images/sample-14-samoorg.webp",
    featured: false,
    composition: [
      {
        ru: "14 дней: от списка дел на полдня до недельного плана",
        en: "14 days: from a half-day list to a week plan",
      },
      {
        ru: "Лист «что хотел / что сделал» и место поправить план",
        en: "A “wanted / did” sheet and space to change the plan",
      },
      {
        ru: "Памятка родителю: не забирать планирование на себя",
        en: "A parent note: do not take the planning over",
      },
    ],
    howTo: [
      {
        ru: "В первый день составьте вместе лист на неделю — коротко",
        en: "On day 1, make a short week list together",
      },
      {
        ru: "Каждый день 15 минут: что сегодня, что сдвинуть, что отпустить",
        en: "15 minutes a day: what is today, what to move, what to drop",
      },
      {
        ru: "Если сорвалось — правите план, а не объявляете провал",
        en: "If it slips, change the plan. Do not call it a failure",
      },
    ],
    delivery: {
      ru: "TODO: цена. Печать или PDF.",
      en: "TODO: price. Print or PDF.",
    },
    sampleTitle: {
      ru: "День 9. План на неделю",
      en: "Day 9. The week plan",
    },
    sampleBody: {
      ru: "На листе две колонки: учёба и своё время. Ребёнок ставит три дела на неделю и одно, которое можно сдвинуть, если не успеет. Вы не добавляете свои «ещё вот это».",
      en: "Two columns: school and free time. The child puts three tasks on the week and one that can move if time runs out. You do not add “and this as well”.",
    },
    related: ["kvest-organizuem-sobytie", "kurs-podrostki"],
  },
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
      ru: "TODO: цена. Печать или PDF.",
      en: "TODO: price. Print or PDF.",
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
      ru: "TODO: цена. Печать или PDF.",
      en: "TODO: price. Print or PDF.",
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
      ru: "TODO: цена. Печать или PDF.",
      en: "TODO: price. Print or PDF.",
    },
    sampleTitle: {
      ru: "Шаг 1. Вечер настолок",
      en: "Step 1. Board-game night",
    },
    sampleBody: {
      ru: "Ребёнок выбирает: настолки дома в пятницу. На листе — кто зовёт, какие две игры, что готовит взрослый. Если друг не может прийти, событие не отменяется: играют своими.",
      en: "The child picks: board games at home on Friday. On the sheet: who invites, which two games, what the adult prepares. If a friend cannot come, the evening still happens with the household.",
    },
    related: ["nabor-14-samoorg", "kurs-podrostki"],
  },
  {
    slug: "kurs-podrostki",
    kind: "course",
    title: {
      ru: "Курс для подростков и профориентация",
      en: "Teen course and career conversation",
    },
    tagline: {
      ru: "6–8 недель практики плюс семейная сессия о будущем.",
      en: "6–8 weeks of practice plus a family session about the future.",
    },
    audience: {
      ru: "Подростки 12–16 лет и родители, которым нужен разговор без лекций «кем быть».",
      en: "Teens aged 12–16 and parents who need a talk without a lecture on “what to be”.",
    },
    result: {
      ru: "Подросток лучше формулирует, как думает, как договаривается и какие задачи ему подходят — не список профессий с картинками.",
      en: "The teen can say how they think, how they negotiate, and what kind of work fits — not a poster of job titles.",
    },
    bullets: [
      {
        ru: "Курс 12–14 лет: мышление, самоорганизация, умение договариваться",
        en: "Course for 12–14: thinking, organising yourself, talking things through",
      },
      {
        ru: "Не лекции: задания, разборы и живые разговоры",
        en: "Not lectures: tasks, reviews and real conversations",
      },
      {
        ru: "Профориентация 12–16: семейная сессия, сильные стороны и типы задач",
        en: "Career session 12–16: family meeting, strengths and types of work",
      },
    ],
    format: {
      ru: "Курс 6–8 недель. Сессия онлайн или очно.",
      en: "Course: 6–8 weeks. Session: online or in person.",
    },
    ageGroups: ["13-16"],
    competencies: ["critical", "organization", "communication"],
    ctaLabel: {
      ru: "Записаться на профориентацию",
      en: "Book a career session",
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
      ru: "TODO: цена курса и сессии, слоты, город очных встреч.",
      en: "TODO: course and session prices, slots, city for in-person meetings.",
    },
    sampleTitle: {
      ru: "Как устроена сессия",
      en: "How the session works",
    },
    sampleBody: {
      ru: "Сначала подросток говорит, какие задачи ему интересны и где он выдыхается. Затем родители — что видят они, без спора «ты должен». Вместе собираем типы среды, в которых ему будет проще, и один следующий шаг на месяц.",
      en: "The teen speaks first: which tasks they like, where they run out of steam. Then the parents — what they see, without “you should”. Together you name the settings that fit, and one next step for the month.",
    },
    related: ["kvest-organizuem-sobytie", "kalendar-21-den"],
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
