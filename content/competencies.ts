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
      ru: "Ребёнок может отличить факт от выдумки, умеет проверять информацию, задаёт вопросы, а не верит на слово тому, что говорят другие или что написано в интернете и соцсетях.",
      en: "The child can tell fact from fiction, check information, ask questions, and not take on trust what other people say or what is written online.",
    },
    signOfProgress: {
      ru: "Спрашивает «А откуда ты это знаешь?» вместо того, чтобы просто согласиться",
      en: "Asks “And how do you know that?” instead of just agreeing",
    },
    icon: "Search",
  },
  {
    key: "creative",
    group: "thinking",
    title: { ru: "Креативность", en: "Creativity" },
    forParent: {
      ru: "Ребёнок может придумать несколько решений вместо одного, с разных точек зрения или через разные подходы.",
      en: "The child can come up with more than one solution, from different angles or through different approaches.",
    },
    signOfProgress: {
      ru: "На вопрос «а как ещё?» не замолкает, а продолжает искать варианты",
      en: "When you ask “and how else?”, they keep looking for options",
    },
    icon: "Lightbulb",
  },
  {
    key: "problems",
    group: "thinking",
    title: { ru: "Умение решать сложные задачи", en: "Solving hard problems" },
    forParent: {
      ru: "Ребёнок видит причины и следствия, умеет разделять сложные задачи на маленькие шаги.",
      en: "The child sees cause and effect and can split hard tasks into small steps.",
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
      ru: "Ребёнок может объяснить свою позицию и слышать чужую, ищет решение вместо ссоры.",
      en: "The child can state their view and hear the other person’s, and looks for a solution instead of a fight.",
    },
    signOfProgress: {
      ru: "Предлагает «давай так» вместо крика или избегания.",
      en: "Offers “shall we do it this way” instead of shouting or avoiding.",
    },
    icon: "MessageCircle",
  },
  {
    key: "empathy",
    group: "others",
    title: { ru: "Эмпатия и социальный интеллект", en: "Empathy" },
    forParent: {
      ru: "Ребёнок замечает чувства других, понимает, что стоит за поведением другого человека.",
      en: "The child notices how others feel and understands what sits behind another person’s behaviour.",
    },
    signOfProgress: {
      ru: "Он сам говорит, что кому-то обидно, — раньше вы говорили это за него.",
      en: "They say someone is hurt — you used to say that for them.",
    },
    icon: "HeartHandshake",
  },
  {
    key: "cooperation",
    group: "others",
    title: { ru: "Сотрудничество", en: "Working with others" },
    forParent: {
      ru: "Ребёнок умеет делить ответственность, работать в команде, умеет и вести, и следовать.",
      en: "The child can share responsibility, work in a team, lead and follow.",
    },
    signOfProgress: {
      ru: "В общей игре он берёт роль и не бросает её на середине.",
      en: "In a shared game they take a role and do not drop it halfway.",
    },
    icon: "Users",
  },
  {
    key: "emotions",
    group: "self",
    title: { ru: "Понимание эмоций и саморегуляция", en: "Emotions and self-control" },
    forParent: {
      ru: "Ребёнок понимает своё состояние и почему так, а не действует на автомате.",
      en: "The child understands their state and why, instead of acting on autopilot.",
    },
    signOfProgress: {
      ru: "Он может сказать, что сейчас злится, — вместо того чтобы просто хлопнуть дверью.",
      en: "They can say they are angry right now, instead of just slamming the door.",
    },
    icon: "Heart",
  },
  {
    key: "organization",
    group: "self",
    title: { ru: "Самоорганизация", en: "Getting organised" },
    forParent: {
      ru: "Ребёнок планирует, начинает и доводит начатое до конца.",
      en: "The child plans, starts, and finishes what they started.",
    },
    signOfProgress: {
      ru: "Он возвращается к начатому на следующий день без напоминания.",
      en: "They come back to the task the next day without a reminder.",
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
