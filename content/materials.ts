import type { Product, Localized } from "@/content/types";
const l = (ru: string, en: string): Localized => ({ ru, en });
const preparing = l("Готовим к выпуску", "Preparing for release");
const previews = (slug: string) =>
  [0, 1, 2].map((i) => ({
    file: `${slug}-${i}.webp`,
    caption: l(
      i === 0 ? "Обложка PDF" : `Пример: день ${i}`,
      i === 0 ? "PDF cover (Russian)" : `Sample: day ${i} (Russian)`,
    ),
  }));
function advent(
  slug: string,
  title: Localized,
  age: Product["ageGroups"][number],
  time: Localized,
  tagline: Localized,
  skills: Product["skills"],
  composition: Localized[],
  sampleTitle: Localized,
  sampleBody: Localized,
): Product {
  return {
    slug,
    availability: "waitlist",
    kind: "advent",
    title,
    tagline,
    audience: l(
      `Для совместных занятий с ребёнком ${age.replace("-", "–")} лет. Взрослый читает или помогает прочитать задание, поддерживает выбор ребёнка и обсуждает опыт.`,
      `For shared practice with a child aged ${age.replace("-", "–")}. An adult reads or helps with the task, supports the child’s choice and discusses the experience.`,
    ),
    result: l(
      "Ребёнок пробует задания и отмечает свой опыт. Сравниваем его только с ним самим; календарь не обещает изменений за срок продукта.",
      "Children try tasks and record their experience. Compare each child with their own starting point; the calendar does not guarantee changes within a set time.",
    ),
    bullets: composition,
    format: l(
      "PDF для самостоятельной печати · 28 дней",
      "Russian-language printable PDF · 28 days",
    ),
    ageGroups: [age],
    duration: time,
    skills,
    ctaLabel: l("Задать вопрос об адвенте", "Ask about this advent"),
    price: null,
    image: "",
    featured: true,
    primary: true,
    composition,
    howTo: [
      l(
        "Распечатайте страницы и подготовьте бумагу и карандаши.",
        "Print the pages and prepare paper and pencils.",
      ),
      l(
        "Прочитайте задание вместе. Ребёнок выбирает и пробует, взрослый рядом.",
        "Read the task together. The child chooses and tries it with an adult nearby.",
      ),
      l(
        "После задания отметьте день на карте и обсудите, что получилось. Если ребёнок устал, перенесите задание.",
        "Mark the day and discuss what happened. Postpone the task if your child is tired.",
      ),
    ],
    delivery: preparing,
    sampleTitle,
    sampleBody,
    related: [
      "advent-4-6",
      "advent-7-9",
      "advent-10-12",
      "komplekt-5-6",
    ].filter((s) => s !== slug),
    previews: previews(slug),
    seo: {
      ru: {
        title: `${title.ru}: адвент ${age.replace("-", "–")} лет на 28 дней | RADAR KIDS`,
        description: `${tagline.ru} PDF для самостоятельной печати, 28 дней. Готовим к выпуску; доступны реальные превью.`,
      },
      en: {
        title: `${title.en}: 28-day advent for ages ${age.replace("-", "–")} | RADAR KIDS`,
        description: `${tagline.en} Russian-language printable PDF, 28 days. Preparing for release; actual page previews are available.`,
      },
    },
  };
}
export const familyAdvents: Product[] = [
  advent(
    "advent-4-6",
    l("Придумываю праздничные маршруты", "Inventing festive adventures"),
    "4-6",
    l("Около 10 минут в день", "About 10 minutes a day"),
    l(
      "Ребёнок знакомится с новым, ищет второй вариант и пробует менять план. К финалу вы вместе готовите семейное представление.",
      "Children explore unfamiliar things, find another option and try changing plans. Together you prepare a family performance for the finale.",
    ),
    ["curiosity", "ideas", "change"],
    [
      l(
        "28 дней: задание и рисунок на каждый день",
        "28 days: a task and drawing each day",
      ),
      l(
        "Карта 28 дней, итоги четырёх недель и финальное представление",
        "A 28-day map, four weekly reflections and a final performance",
      ),
      l(
        "Подсказки взрослому и медаль для вырезания вместе",
        "Adult guidance and a medal to cut out together",
      ),
    ],
    l("Что в мешочке?", "What is in the bag?"),
    l(
      "В первом задании ребёнок ощупывает домашнюю вещь через мешочек, достаёт её и выбирает: узнать, как она работает, или придумать другое применение. Затем рисует вещь и то, что она умеет.",
      "In the first task, a child feels a household object through a bag, takes it out and chooses to explore how it works or invent another use. They then draw the object and what it can do.",
    ),
  ),
  advent(
    "advent-7-9",
    l(
      "Договариваюсь и собираю команду",
      "Making agreements and building a team",
    ),
    "7-9",
    l("Около 15 минут в день", "About 15 minutes a day"),
    l(
      "Задания о чувствах, переговорах и общем деле. В финале ребёнок проводит короткий праздник для себя и двоих взрослых.",
      "Tasks about feelings, negotiation and a shared activity. For the finale, the child runs a short celebration with two adults.",
    ),
    ["empathy", "teamwork", "lead"],
    [
      l(
        "28 ежедневных миссий и карта заданий",
        "28 daily missions and a task map",
      ),
      l(
        "Разведка чувств, переговоры, роль капитана и праздник команды",
        "Exploring feelings, negotiation, being captain and a team celebration",
      ),
      l(
        "Подсказки взрослому, итоги недель и детский радар",
        "Adult guidance, weekly reflections and a child’s radar",
      ),
    ],
    l("Лицо подсказывает не всё", "A face does not tell the whole story"),
    l(
      "Взрослый без слов изображает радость или усталость. Ребёнок замечает лицо и позу, высказывает догадку и проверяет её вопросом. Затем записывает или рисует, что услышал в ответ.",
      "An adult silently acts out joy or tiredness. The child notices their face and posture, makes a guess and checks it with a question. They then write or draw the response.",
    ),
  ),
  advent(
    "advent-10-12",
    l("Довожу дело до конца", "Following through"),
    "10-12",
    l(
      "15–20 минут в день: работа и разговор до пяти минут",
      "15–20 minutes a day, including up to five minutes of discussion",
    ),
    l(
      "Один небольшой личный проект: выбрать дело, спланировать шаги, вернуться после заминки и показать результат близкому человеку.",
      "One small personal project: choose an activity, plan steps, return after a setback and show the result to someone close.",
    ),
    ["start", "plan", "resilience"],
    [
      l(
        "28 дней практики на одном личном проекте",
        "28 days of practice on one personal project",
      ),
      l(
        "Трекер спринта, итоги недель и план продолжения",
        "A sprint tracker, weekly reflections and a plan to continue",
      ),
      l(
        "Подсказки взрослому и детский радар",
        "Adult guidance and a child’s radar",
      ),
    ],
    l("Выбираю дело на месяц", "Choosing a project for the month"),
    l(
      "В первом задании ребёнок называет два интересных дела, выбирает одно без покупок и интернета и делает первый набросок за пять минут. Варианты из инструкции: мини-книга, игра на листе или небольшая выставка домашних предметов.",
      "In the first task, the child names two activities, chooses one without purchases or internet and makes a first sketch in five minutes. The guide suggests a mini-book, a game on paper or a small display of household objects.",
    ),
  ),
];
export const familyBundle: Product = {
  ...familyAdvents[0],
  slug: "komplekt-5-6",
  kind: "kit",
  title: l("Комплект для детей 5–6 лет", "Family set for ages 5–6"),
  ageLabel: l("5–6 лет", "Ages 5–6"),
  duration: l(
    "Адвент: около 10 минут в день. Карточки и брелок — по ситуации.",
    "Advent: about 10 minutes a day. Use the cards and keyring when relevant.",
  ),
  tagline: l(
    "Три материала для совместных занятий: младший адвент, карточки безопасности и брелок с подсказками для сборов.",
    "Three materials to use together: the youngest advent, safety cards and a keyring with getting-ready prompts.",
  ),
  audience: l(
    "Для детей 5–6 лет и взрослых рядом. Общий возраст комплекта сохраняется, даже если отдельный компонент подходит более младшим детям.",
    "For children aged 5–6 with an adult. The set’s age range remains 5–6 even where an individual component is suitable for younger children.",
  ),
  skills: ["curiosity", "ideas", "change", "focus", "start", "plan"],
  foundation: ["safety"],
  format: l(
    "Три компонента в PDF для самостоятельной печати",
    "Three Russian-language printable PDF components",
  ),
  composition: [
    l(
      "Адвент Придумываю праздничные маршруты, 4–6 лет: 28 дней",
      "Inventing festive adventures, ages 4–6: 28 days",
    ),
    l(
      "Безопасность, 3–6 лет: 45 двусторонних карточек",
      "Safety, ages 3–6: 45 double-sided cards",
    ),
    l(
      "Брелок, 5–6 лет: 23 двусторонние карточки, вкладыш для родителей и 24 пиктограммы/наклейки",
      "Keyring, ages 5–6: 23 double-sided cards, a parent insert and 24 pictograms/stickers",
    ),
  ],
  howTo: [
    l(
      "Используйте адвент по его ежедневной инструкции.",
      "Follow the advent’s daily instructions.",
    ),
    l(
      "Карточки безопасности обсуждайте и разыгрывайте вместе со взрослым.",
      "Discuss and role-play safety cards with an adult.",
    ),
    l(
      "Подбирайте подсказки брелка к вашим обычным сборам.",
      "Choose keyring prompts for your usual getting-ready routines.",
    ),
  ],
  sampleTitle: l("Три компонента", "Three components"),
  sampleBody: l(
    "Ниже — реальные страницы компонентов. Брелок показан увеличенным макетом для просмотра; печатный финал комплекта ещё проверяется.",
    "Below are actual component pages. The keyring is an enlarged review layout; the final printable set is still being checked.",
  ),
  related: ["advent-4-6", "advent-7-9", "advent-10-12"],
  previews: [
    familyAdvents[0].previews![0],
    {
      file: "safety-0.webp",
      caption: l(
        "Карточка безопасности: лицо и оборот",
        "Safety card: front and back (Russian)",
      ),
    },
    {
      file: "keyring-5-6-0.webp",
      caption: l(
        "Брелок: увеличенный макет для просмотра",
        "Keyring: enlarged review layout (Russian)",
      ),
    },
  ],
  seo: {
    ru: {
      title: "Комплект PDF-заданий для детей 5–6 лет | RADAR KIDS",
      description:
        "Адвент на 28 дней, 45 двусторонних карточек безопасности и брелок 5–6 с 23 карточками и 24 пиктограммами. Готовим комплект к выпуску.",
    },
    en: {
      title: "Printable family set for children aged 5–6 | RADAR KIDS",
      description:
        "A 28-day advent, 45 double-sided safety cards and a keyring with 23 cards and 24 pictograms. A Russian-language PDF set in preparation.",
    },
  },
};
export const materialUpdates: Record<string, Partial<Product>> = {};
materialUpdates["kartochki-bezopasnosti"] = {
  ageLabel: l("3–6 лет", "Ages 3–6"),
  title: l(
    "Карточки безопасности для детей 3–6 лет",
    "Safety cards for children aged 3–6",
  ),
  tagline: l(
    "45 двусторонних карточек для разговора и совместной практики со взрослым. Ситуация для ребёнка на лицевой стороне, подсказки взрослому на обороте.",
    "45 double-sided cards for discussion and shared practice with an adult. A child’s situation is on the front, with adult guidance on the back.",
  ),
  audience: l(
    "Дети 3–6 лет вместе со взрослым. Карточки входят в комплект 5–6; отдельная покупка этого выпуска не открыта.",
    "Children aged 3–6 with an adult. These cards are part of the 5–6 set; separate purchase is not open.",
  ),
  format: l(
    "45 двусторонних карточек · PDF",
    "45 double-sided cards · Russian-language PDF",
  ),
  previews: [
    {
      file: "safety-0.webp",
      caption: l(
        "Карточка 01: лицо и оборот",
        "Card 01: front and back (Russian)",
      ),
    },
    {
      file: "safety-1.webp",
      caption: l(
        "Карточка 02: лицо и оборот",
        "Card 02: front and back (Russian)",
      ),
    },
  ],
  sampleTitle: l("Я потерялся", "I am lost"),
  sampleBody: l(
    "На превью — настоящие лицевая и оборотная стороны карточек. Формулировки и базовые алгоритмы приведены в авторском PDF; обсуждайте их вместе со взрослым.",
    "The previews show actual card fronts and backs. Follow the wording and basic steps in the original PDF with an adult.",
  ),
  seo: {
    ru: {
      title: "45 карточек безопасности для детей 3–6 лет | RADAR KIDS",
      description:
        "45 двусторонних карточек безопасности 3–6 лет: ситуации для ребёнка и подсказки взрослому. Компонент комплекта 5–6; доступны реальные превью.",
    },
    en: {
      title: "45 safety cards for children aged 3–6 | RADAR KIDS",
      description:
        "45 double-sided safety cards for children aged 3–6, with adult guidance. Part of the ages 5–6 set; actual page previews are available.",
    },
  },
};
materialUpdates["kalendar-32-dnya"] = {
  format: l("PDF · 32 дня", "Russian-language PDF · 32 days"),
  previews: [
    {
      file: "calendar-0.webp",
      caption: l("Обложка календаря", "Calendar cover (Russian)"),
    },
    {
      file: "calendar-1.webp",
      caption: l("Пример: день 1", "Sample: day 1 (Russian)"),
    },
    {
      file: "calendar-2.webp",
      caption: l("Пример: день 2", "Sample: day 2 (Russian)"),
    },
  ],
};

materialUpdates["kartochki-bezopasnosti"].composition = [
  l("45 двусторонних карточек", "45 double-sided cards"),
  l(
    "Лицевая сторона с ситуацией и оборот с подсказками взрослому",
    "A situation on the front and adult guidance on the back",
  ),
  l(
    "PDF для совместного обсуждения и практики",
    "A Russian-language PDF for shared discussion and practice",
  ),
];
familyAdvents.forEach((product) =>
  product.howTo.unshift(
    l(
      "Начните за 28 дней до семейного праздника. Дни не привязаны к датам, подойдёт любой месяц.",
      "Start 28 days before a family celebration. The days are not date-specific, so any month works.",
    ),
  ),
);
familyAdvents[2].audience = l(
  "Для ребёнка 10–12 лет: 10–15 минут самостоятельной работы и разговор со взрослым до пяти минут. Взрослый помогает при необходимости, не меняя выбор ребёнка.",
  "For a child aged 10–12: 10–15 minutes of independent work and up to five minutes of discussion with an adult. Adults help when needed while respecting the child’s choice.",
);

materialUpdates["kalendar-32-dnya"].howTo = [
  l(
    "Откройте PDF-календарь на удобном устройстве.",
    "Open the PDF calendar on a convenient device.",
  ),
  l(
    "Прочитайте мысль дня и попробуйте предложенное действие.",
    "Read the day’s thought and try the suggested action.",
  ),
  l(
    "Ответьте на вопрос в тетради или заметках телефона.",
    "Answer the question in a notebook or phone notes.",
  ),
];

materialUpdates["kalendar-32-dnya"].sampleTitle = l(
  "День 1. Где я сейчас?",
  "Day 1. Where am I now?",
);
materialUpdates["kalendar-32-dnya"].sampleBody = l(
  "В первый день вы отмечаете по шкале от 1 до 10 тревогу за ребёнка, удовольствие от общения и своё ощущение себя как родителя. Ответы остаются у вас: к ним можно вернуться в конце календаря.",
  "On day one, you rate concern for your child, enjoyment of time together and how you feel about yourself as a parent on a scale from 1 to 10. Keep the answers privately to revisit at the end of the calendar.",
);
