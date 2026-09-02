import type { Localized } from "@/content/types";

export type CompetencyGroup = "thinking" | "others" | "self" | "literacy";

export type CompetencyKey =
  | "critical"
  | "creative"
  | "problems"
  | "communication"
  | "empathy"
  | "cooperation"
  | "emotions"
  | "organization"
  | "information"
  | "safety";

export type Competency = {
  key: CompetencyKey;
  group: CompetencyGroup;
  title: Localized;
  forParent: Localized;
  signOfProgress: Localized;
  icon: string;
};

export const competencyGroupOrder: CompetencyGroup[] = [
  "thinking",
  "others",
  "self",
];

export const filterCompetencyKeys: CompetencyKey[] = [
  "critical",
  "creative",
  "problems",
  "communication",
  "empathy",
  "cooperation",
  "emotions",
  "organization",
];

export const competencies: Competency[] = [
  {
    key: "critical",
    group: "thinking",
    title: { ru: "Критическое мышление", en: "Critical thinking" },
    forParent: {
      ru: "Отличает факт от выдумки, задаёт вопросы, не верит на слово",
      en: "Tells fact from fiction, asks questions, does not take things on trust",
    },
    signOfProgress: {
      ru: "Спрашивает «а откуда ты знаешь?» вместо того чтобы просто согласиться",
      en: "Asks “how do you know?” instead of just agreeing",
    },
    icon: "Search",
  },
  {
    key: "creative",
    group: "thinking",
    title: { ru: "Креативность", en: "Creativity" },
    forParent: {
      ru: "Придумывает несколько решений вместо одного",
      en: "Comes up with more than one way, not only one",
    },
    signOfProgress: {
      ru: "На вопрос «как ещё?» не замолкает, а продолжает предлагать",
      en: "When you ask “how else?”, they keep offering ideas",
    },
    icon: "Lightbulb",
  },
  {
    key: "problems",
    group: "thinking",
    title: { ru: "Умение решать сложные задачи", en: "Solving hard problems" },
    forParent: {
      ru: "Видит причины и последствия, разбирает большое на шаги",
      en: "Sees cause and effect, splits a big job into steps",
    },
    signOfProgress: {
      ru: "Берётся за дело, которое раньше называл «слишком трудным»",
      en: "Takes on a job they used to call “too hard”",
    },
    icon: "Layers",
  },
  {
    key: "communication",
    group: "others",
    title: { ru: "Общение и умение договариваться", en: "Talking and agreeing" },
    forParent: {
      ru: "Объясняет свою позицию, слышит чужую, ищет решение вместо ссоры",
      en: "States a view, hears the other, looks for a deal instead of a fight",
    },
    signOfProgress: {
      ru: "Предлагает «давай так» вместо крика или ухода",
      en: "Offers “shall we do it this way” instead of shouting or walking off",
    },
    icon: "MessageCircle",
  },
  {
    key: "empathy",
    group: "others",
    title: { ru: "Эмпатия и социальный интеллект", en: "Empathy" },
    forParent: {
      ru: "Замечает чувства других, понимает, что стоит за поведением",
      en: "Notices how others feel, and what sits behind the behaviour",
    },
    signOfProgress: {
      ru: "Сам говорит, что кому-то обидно, — раньше вы говорили это за него",
      en: "Says someone is hurt — you used to say that for them",
    },
    icon: "HeartHandshake",
  },
  {
    key: "cooperation",
    group: "others",
    title: { ru: "Сотрудничество", en: "Working with others" },
    forParent: {
      ru: "Делит ответственность, работает в команде, умеет и вести, и следовать",
      en: "Shares the job, works in a team, can lead and follow",
    },
    signOfProgress: {
      ru: "В общей игре берёт роль и не бросает её на середине",
      en: "Takes a role in a shared game and does not drop it halfway",
    },
    icon: "Users",
  },
  {
    key: "emotions",
    group: "self",
    title: { ru: "Понимание эмоций и саморегуляция", en: "Emotions and self-control" },
    forParent: {
      ru: "Узнаёт своё состояние и не действует на автомате",
      en: "Notices their state and does not run on autopilot",
    },
    signOfProgress: {
      ru: "Может назвать, что злится, — вместо того чтобы просто хлопнуть дверью",
      en: "Can say they are angry, instead of slamming the door",
    },
    icon: "Heart",
  },
  {
    key: "organization",
    group: "self",
    title: { ru: "Самоорганизация", en: "Getting organised" },
    forParent: {
      ru: "Планирует, начинает и доводит до конца",
      en: "Plans, starts, and finishes",
    },
    signOfProgress: {
      ru: "Возвращается к начатому на следующий день без напоминания",
      en: "Comes back to the task the next day without a reminder",
    },
    icon: "ListChecks",
  },
  {
    key: "information",
    group: "literacy",
    title: { ru: "Работа с информацией", en: "Working with information" },
    forParent: {
      ru: "Найти, проверить, отличить правду от выдумки",
      en: "Find, check, tell truth from a made-up story",
    },
    signOfProgress: {
      ru: "Спрашивает, откуда новость, прежде чем ей верить",
      en: "Asks where a story came from before believing it",
    },
    icon: "BookOpen",
  },
  {
    key: "safety",
    group: "literacy",
    title: { ru: "Безопасность и забота о себе", en: "Safety and looking after yourself" },
    forParent: {
      ru: "Базовые знания, что делать, если потерялся, и где проходит граница",
      en: "What to do if they get lost, and where a boundary is",
    },
    signOfProgress: {
      ru: "Сам объясняет правило, а не кивает и забывает",
      en: "Explains the rule, instead of nodding and forgetting",
    },
    icon: "Shield",
  },
];

export const groupTitle: Record<CompetencyGroup, Localized> = {
  thinking: { ru: "Как ребёнок думает", en: "How a child thinks" },
  others: { ru: "Как ребёнок общается", en: "How a child relates to others" },
  self: { ru: "Как ребёнок обращается с собой", en: "How a child manages themselves" },
  literacy: { ru: "Грамотность", en: "Literacy" },
};

export const groupReportName: Record<CompetencyGroup, Localized> = {
  thinking: {
    ru: "компетентность мышления",
    en: "competence of thinking",
  },
  others: {
    ru: "компетентность взаимодействия с другими",
    en: "competence of interaction with others",
  },
  self: {
    ru: "компетентность взаимодействия с собой",
    en: "competence of interaction with oneself",
  },
  literacy: { ru: "новая грамотность", en: "new literacy" },
};

export const competencyByKey = Object.fromEntries(
  competencies.map((item) => [item.key, item]),
) as Record<CompetencyKey, Competency>;

export function isCompetencyKey(value: string | null): value is CompetencyKey {
  return Boolean(value && value in competencyByKey);
}

export const groupColorClass: Record<CompetencyGroup, string> = {
  thinking: "text-comp-thinking",
  others: "text-comp-others",
  self: "text-comp-self",
  literacy: "text-comp-literacy",
};

export const groupDotClass: Record<CompetencyGroup, string> = {
  thinking: "bg-comp-thinking",
  others: "bg-comp-others",
  self: "bg-comp-self",
  literacy: "bg-comp-literacy",
};
