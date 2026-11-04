import type { Localized, Product } from "@/content/types";

export const sectorKeys = ["think", "create", "agree", "finish"] as const;
export type SectorKey = (typeof sectorKeys)[number];
export type SkillKey =
  | "info"
  | "reason"
  | "focus"
  | "curiosity"
  | "ideas"
  | "change"
  | "empathy"
  | "teamwork"
  | "lead"
  | "start"
  | "plan"
  | "resilience";
export type FoundationKey = "literacy" | "safety";
export type Sector = {
  key: SectorKey;
  title: Localized;
  childTitle: Localized;
  forParent: Localized;
  adultName: Localized;
  adultText: Localized;
};
export type Skill = {
  key: SkillKey;
  sector: SectorKey;
  code: string;
  title: Localized;
  forParent: Localized;
  signOfProgress: Localized;
  icon: string;
};

export const sectors: Sector[] = [
  {
    key: "think",
    title: {
      ru: "Думать",
      en: "Thinking",
    },
    childTitle: {
      ru: "Думаю",
      en: "I think",
    },
    forParent: {
      ru: "Разбираться в информации, видеть причины и следствия, удерживать задачу.",
      en: "Make sense of information, spot causes and effects, and stay with a task.",
    },
    adultName: {
      ru: "Анализ",
      en: "Analysis",
    },
    adultText: {
      ru: "Скорость и глубина мышления: как человек работает с информацией и принимает решения.",
      en: "How someone works through information and makes decisions.",
    },
  },
  {
    key: "create",
    title: {
      ru: "Придумывать и меняться",
      en: "Creating and adapting",
    },
    childTitle: {
      ru: "Придумываю",
      en: "I create",
    },
    forParent: {
      ru: "Хотеть нового, находить несколько решений, не теряться, когда всё поменялось.",
      en: "Try new things, find several answers and adapt when plans change.",
    },
    adultName: {
      ru: "Изменения",
      en: "Change",
    },
    adultText: {
      ru: "Готовность учиться, открытость мышления, спокойствие в неопределённости.",
      en: "Readiness to learn, keep an open mind and cope with uncertainty.",
    },
  },
  {
    key: "agree",
    title: {
      ru: "Договариваться",
      en: "Working with people",
    },
    childTitle: {
      ru: "Договариваюсь",
      en: "I work with people",
    },
    forParent: {
      ru: "Понимать других, договариваться, работать в команде и вести за собой.",
      en: "Understand others, make agreements, work as a team and take the lead.",
    },
    adultName: {
      ru: "Коммуникация",
      en: "Communication",
    },
    adultText: {
      ru: "Социальный интеллект и готовность руководить людьми.",
      en: "Understanding people and being ready to lead them.",
    },
  },
  {
    key: "finish",
    title: {
      ru: "Доводить до конца",
      en: "Following through",
    },
    childTitle: {
      ru: "Довожу до конца",
      en: "I follow through",
    },
    forParent: {
      ru: "Начинать самому, ставить цель, справляться с эмоциями и не сдаваться.",
      en: "Start on your own, set a goal, handle feelings and keep trying.",
    },
    adultName: {
      ru: "Драйв",
      en: "Drive",
    },
    adultText: {
      ru: "Инициативность, настойчивость, умение ставить большие цели.",
      en: "Initiative, persistence and setting ambitious goals.",
    },
  },
];
export const skills: Skill[] = [
  {
    key: "info",
    sector: "think",
    code: "1.1",
    title: {
      ru: "Работа с информацией",
      en: "Working with information",
    },
    forParent: {
      ru: "Ребёнок отличает факт от выдумки, проверяет информацию и задаёт вопросы, а не верит на слово тому, что говорят другие или что написано в интернете.",
      en: "Checks facts, asks questions and does not take every story on trust.",
    },
    signOfProgress: {
      ru: "Спрашивает А откуда ты это знаешь? вместо того, чтобы просто согласиться.",
      en: "Asks How do you know? before agreeing.",
    },
    icon: "Search",
  },
  {
    key: "reason",
    sector: "think",
    code: "1.2",
    title: {
      ru: "Причины и следствия",
      en: "Cause and effect",
    },
    forParent: {
      ru: "Ребёнок видит причины и следствия и может объяснить свой вывод парой доводов.",
      en: "Sees cause and effect and can give a couple of reasons for a conclusion.",
    },
    signOfProgress: {
      ru: "Говорит если сделать так, то будет… до того, как сделать.",
      en: "Says If I do this, then… before acting.",
    },
    icon: "Layers",
  },
  {
    key: "focus",
    sector: "think",
    code: "1.3",
    title: {
      ru: "Внимание и темп",
      en: "Focus and pace",
    },
    forParent: {
      ru: "Ребёнок удерживает задачу до конца, делит её на части и укладывается в отведённое время.",
      en: "Stays with a task, breaks it into parts and finishes in the time available.",
    },
    signOfProgress: {
      ru: "Собирается по списку сам и успевает без ваших поторапливаний.",
      en: "Gets ready from a list without being hurried.",
    },
    icon: "Timer",
  },
  {
    key: "curiosity",
    sector: "create",
    code: "2.1",
    title: {
      ru: "Интерес к новому",
      en: "Curiosity",
    },
    forParent: {
      ru: "Ребёнок охотно берётся за незнакомое и сам хочет научиться новому.",
      en: "Enjoys trying something unfamiliar and wants to learn.",
    },
    signOfProgress: {
      ru: "Сам просит задание посложнее.",
      en: "Asks for a harder task.",
    },
    icon: "Sparkles",
  },
  {
    key: "ideas",
    sector: "create",
    code: "2.2",
    title: {
      ru: "Идеи и варианты",
      en: "Ideas and options",
    },
    forParent: {
      ru: "Ребёнок придумывает несколько решений вместо одного и умеет выбрать лучшее.",
      en: "Comes up with several answers and chooses one.",
    },
    signOfProgress: {
      ru: "На вопрос а как ещё? не замолкает, а продолжает искать варианты.",
      en: "Keeps finding options when you ask How else?.",
    },
    icon: "Lightbulb",
  },
  {
    key: "change",
    sector: "create",
    code: "2.3",
    title: {
      ru: "Спокойствие в новом",
      en: "Staying calm with change",
    },
    forParent: {
      ru: "Когда правила или планы меняются, ребёнок не бросает дело, а ищет новый ход.",
      en: "Finds another way when plans or rules change.",
    },
    signOfProgress: {
      ru: "План сорвался — после паузы пробует другой вариант.",
      en: "When a plan falls through, pauses and tries another option.",
    },
    icon: "Shuffle",
  },
  {
    key: "empathy",
    sector: "agree",
    code: "3.1",
    title: {
      ru: "Понимать других",
      en: "Understanding others",
    },
    forParent: {
      ru: "Ребёнок замечает чувства других и понимает, что стоит за поведением человека.",
      en: "Notices other people’s feelings and what might be behind their actions.",
    },
    signOfProgress: {
      ru: "Сам говорит, что кому-то обидно, — раньше вы говорили это за него.",
      en: "Notices that someone feels hurt before you point it out.",
    },
    icon: "HeartHandshake",
  },
  {
    key: "teamwork",
    sector: "agree",
    code: "3.2",
    title: {
      ru: "Договариваться и работать в команде",
      en: "Agreeing and teamwork",
    },
    forParent: {
      ru: "Ребёнок объясняет свою позицию, слышит чужую, держит договорённость и делит работу в команде.",
      en: "Explains their view, listens, keeps agreements and shares the work.",
    },
    signOfProgress: {
      ru: "Предлагает вариант, который можно обсудить.",
      en: "Suggests an option that can be discussed.",
    },
    icon: "MessageCircle",
  },
  {
    key: "lead",
    sector: "agree",
    code: "3.3",
    title: {
      ru: "Вести за собой",
      en: "Leading",
    },
    forParent: {
      ru: "Ребёнок готов взять роль ведущего и отвечать за общий результат.",
      en: "Takes the lead and shares responsibility for the result.",
    },
    signOfProgress: {
      ru: "В общей игре сам берёт роль капитана и объясняет правила другим.",
      en: "Volunteers to be captain and explains the rules.",
    },
    icon: "Flag",
  },
  {
    key: "start",
    sector: "finish",
    code: "4.1",
    title: {
      ru: "Начинать самому",
      en: "Taking the first step",
    },
    forParent: {
      ru: "Ребёнок начинает дело без напоминаний и предлагает, как сделать лучше.",
      en: "Starts without reminders and suggests how to improve things.",
    },
    signOfProgress: {
      ru: "Сам говорит: А давай я…",
      en: "Says What if I do it?.",
    },
    icon: "Rocket",
  },
  {
    key: "plan",
    sector: "finish",
    code: "4.2",
    title: {
      ru: "Ставить цель и планировать",
      en: "Goals and planning",
    },
    forParent: {
      ru: "Ребёнок называет цель и раскладывает её на шаги и сроки.",
      en: "Names a goal and breaks it into steps and times.",
    },
    signOfProgress: {
      ru: "Возвращается к начатому на следующий день без напоминания.",
      en: "Comes back to the task the next day without a reminder.",
    },
    icon: "ListChecks",
  },
  {
    key: "resilience",
    sector: "finish",
    code: "4.3",
    title: {
      ru: "Справляться с эмоциями и не сдаваться",
      en: "Handling emotions, not giving up",
    },
    forParent: {
      ru: "Ребёнок понимает, что с ним происходит, и после неудачи пробует снова, а не бросает.",
      en: "Recognises their feelings and tries again after a setback.",
    },
    signOfProgress: {
      ru: "Может сказать, что злится, — и после паузы возвращается к делу.",
      en: "Can say they are angry, pause and come back to the task.",
    },
    icon: "Heart",
  },
];
export const foundations: Record<
  FoundationKey,
  { title: Localized; forParent: Localized; signOfProgress: Localized }
> = {
  literacy: {
    title: {
      ru: "Грамотность",
      en: "Literacy",
    },
    forParent: {
      ru: "Найти, проверить, отличить правду от выдумки",
      en: "Find, check, tell truth from a made-up story",
    },
    signOfProgress: {
      ru: "Спрашивает, откуда новость, прежде чем ей верить",
      en: "Asks where a story came from before believing it",
    },
  },
  safety: {
    title: {
      ru: "Безопасность и забота о себе",
      en: "Safety and looking after yourself",
    },
    forParent: {
      ru: "Базовые знания, что делать, если потерялся, и где проходит граница",
      en: "What to do if they get lost, and where a boundary is",
    },
    signOfProgress: {
      ru: "Сам объясняет правило, а не кивает и забывает",
      en: "Explains the rule, instead of nodding and forgetting",
    },
  },
};

export const sectorByKey = Object.fromEntries(
  sectors.map((item) => [item.key, item]),
) as Record<SectorKey, Sector>;
export const skillByKey = Object.fromEntries(
  skills.map((item) => [item.key, item]),
) as Record<SkillKey, Skill>;
export function isSectorKey(value: string | null): value is SectorKey {
  return sectorKeys.some((key) => key === value);
}
export const sectorColorClass: Record<SectorKey, string> = {
  think: "text-comp-thinking",
  create: "text-comp-literacy",
  agree: "text-comp-others",
  finish: "text-comp-self",
};
export const sectorDotClass: Record<SectorKey, string> = {
  think: "bg-comp-thinking",
  create: "bg-comp-literacy",
  agree: "bg-comp-others",
  finish: "bg-comp-self",
};
export const sectorColor: Record<SectorKey, string> = {
  think: "var(--color-comp-thinking)",
  create: "var(--color-comp-literacy)",
  agree: "var(--color-comp-others)",
  finish: "var(--color-comp-self)",
};
export function productSectors(product: Pick<Product, "skills">): SectorKey[] {
  return sectorKeys.filter((sector) =>
    product.skills.some((key) => skillByKey[key].sector === sector),
  );
}
export const demoRadar: Record<SkillKey, 1 | 2 | 3 | 4> = {
  info: 3,
  reason: 3,
  focus: 2,
  curiosity: 4,
  ideas: 3,
  change: 2,
  empathy: 3,
  teamwork: 2,
  lead: 4,
  start: 3,
  plan: 2,
  resilience: 2,
};
