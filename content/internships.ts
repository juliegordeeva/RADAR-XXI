import type { Localized, AgeGroup } from "@/content/types";
import type { SectorKey } from "@/content/competencies";
export type ChildAge = Exclude<AgeGroup, "parents">;
export const childAges: ChildAge[] = ["4-6", "7-9", "10-12", "13-16"];
export function isChildAge(value: string | null): value is ChildAge {
  return childAges.some((age) => age === value);
}
export type InternshipType = "intro" | "profile" | "project";
export type Internship = {
  slug: string;
  type: InternshipType;
  title: Localized;
  ageGroups: ChildAge[];
  days: number | { min: number; max: number };
  rhythm: Localized;
  childDoes: Localized[];
  finalProject: Localized;
  sectors: SectorKey[];
  startDate: string | null;
  price: number | null;
  available: boolean;
};
// available означает приём интереса в лист ожидания, а не запуск программы.
export const internships: Internship[] = [
  {
    slug: "intro-4-6",
    type: "intro",
    title: {
      ru: "Юный стажёр",
      en: "Young intern",
    },
    ageGroups: ["4-6"],
    days: 14,
    rhythm: {
      ru: "5 игр по 10 минут в неделю + онлайн-встреча 30 минут",
      en: "Five 10-minute games a week + a 30-minute online meeting",
    },
    childDoes: [
      {
        ru: "Играет с Радариком в магазин, кухню, прогулку",
        en: "Plays shops, cooking and walks with Radarik",
      },
      {
        ru: "Придумывает и выбирает",
        en: "Comes up with ideas and makes choices",
      },
      {
        ru: "Учится договариваться в семье",
        en: "Practises family agreements",
      },
    ],
    finalProject: {
      ru: "«Семейная ярмарка»: придумать поделку, назначить цену и «продать» близким",
      en: "A family fair: make a craft, set a price and “sell” it to loved ones",
    },
    sectors: ["think", "create", "agree", "finish"],
    startDate: null,
    price: null,
    available: true,
  },
  {
    slug: "intro-7-9",
    type: "intro",
    title: {
      ru: "Стажёр отдела",
      en: "Department intern",
    },
    ageGroups: ["7-9"],
    days: 21,
    rhythm: {
      ru: "5 квестов по 15 минут в неделю + онлайн-встреча 45–60 минут",
      en: "Five 15-minute quests a week + a 45–60 minute online meeting",
    },
    childDoes: [
      {
        ru: "Выполняет «поручения отделов», как на Office Day",
        en: "Takes on department tasks, as at Office Day",
      },
      {
        ru: "Проверяет цены и факты",
        en: "Checks prices and facts",
      },
      {
        ru: "Капитанит семейной командой",
        en: "Captains a family team",
      },
    ],
    finalProject: {
      ru: "Мини-бизнес на один день: школьная ярмарка или услуга для соседей",
      en: "A one-day mini-business: a school fair or a service for neighbours",
    },
    sectors: ["think", "create", "agree", "finish"],
    startDate: null,
    price: null,
    available: true,
  },
  {
    slug: "intro-10-12",
    type: "intro",
    title: {
      ru: "Младший проектный менеджер",
      en: "Junior project manager",
    },
    ageGroups: ["10-12"],
    days: 21,
    rhythm: {
      ru: "5 проектных заданий по 20 минут в неделю + онлайн-встреча 60 минут",
      en: "Five 20-minute project tasks a week + a 60-minute online meeting",
    },
    childDoes: [
      {
        ru: "Каждую неделю проходит этап своего проекта",
        en: "Works through a project stage each week",
      },
      {
        ru: "Отбирает идеи по критериям",
        en: "Chooses ideas using criteria",
      },
      {
        ru: "Презентует результат",
        en: "Presents the result",
      },
    ],
    finalProject: {
      ru: "Настоящий проект по «9 вопросам для своего дела» и питч на 3 минуты",
      en: "A real project using “9 questions for your own project” and a three-minute pitch",
    },
    sectors: ["think", "create", "agree", "finish"],
    startDate: null,
    price: null,
    available: true,
  },
  {
    slug: "intro-13-16",
    type: "intro",
    title: {
      ru: "Руководитель проекта",
      en: "Project lead",
    },
    ageGroups: ["13-16"],
    days: 21,
    rhythm: {
      ru: "Недельные спринты, задания по 20–30 минут + встреча с экспертом",
      en: "Weekly sprints, tasks of 20–30 minutes + a meeting with an expert",
    },
    childDoes: [
      {
        ru: "Ведёт план и вехи",
        en: "Tracks a plan and milestones",
      },
      {
        ru: "Собирает данные и проверяет гипотезы",
        en: "Gathers evidence and tests ideas",
      },
      {
        ru: "Распределяет роли",
        en: "Assigns roles",
      },
    ],
    finalProject: {
      ru: "Защита мини-проекта перед «советом директоров» — родителями и экспертом",
      en: "Presents a mini-project to a “board”: parents and an expert",
    },
    sectors: ["think", "create", "agree", "finish"],
    startDate: null,
    price: null,
    available: true,
  },
  {
    slug: "profile-think",
    type: "profile",
    title: {
      ru: "Думать",
      en: "Thinking",
    },
    ageGroups: ["4-6", "7-9", "10-12", "13-16"],
    days: 21,
    rhythm: {
      ru: "",
      en: "",
    },
    childDoes: [],
    finalProject: {
      ru: "",
      en: "",
    },
    sectors: ["think"],
    startDate: null,
    price: null,
    available: false,
  },
  {
    slug: "profile-create",
    type: "profile",
    title: {
      ru: "Придумывать и меняться",
      en: "Creating and adapting",
    },
    ageGroups: ["4-6", "7-9", "10-12", "13-16"],
    days: 21,
    rhythm: {
      ru: "",
      en: "",
    },
    childDoes: [],
    finalProject: {
      ru: "",
      en: "",
    },
    sectors: ["create"],
    startDate: null,
    price: null,
    available: false,
  },
  {
    slug: "profile-agree",
    type: "profile",
    title: {
      ru: "Договариваться",
      en: "Working with people",
    },
    ageGroups: ["4-6", "7-9", "10-12", "13-16"],
    days: 21,
    rhythm: {
      ru: "",
      en: "",
    },
    childDoes: [],
    finalProject: {
      ru: "",
      en: "",
    },
    sectors: ["agree"],
    startDate: null,
    price: null,
    available: false,
  },
  {
    slug: "profile-finish",
    type: "profile",
    title: {
      ru: "Доводить до конца",
      en: "Following through",
    },
    ageGroups: ["4-6", "7-9", "10-12", "13-16"],
    days: 21,
    rhythm: {
      ru: "",
      en: "",
    },
    childDoes: [],
    finalProject: {
      ru: "",
      en: "",
    },
    sectors: ["finish"],
    startDate: null,
    price: null,
    available: false,
  },
  {
    slug: "project-10-16",
    type: "project",
    title: {
      ru: "Проектная стажировка",
      en: "Project internship",
    },
    ageGroups: ["10-12", "13-16"],
    days: {
      min: 28,
      max: 42,
    },
    rhythm: {
      ru: "",
      en: "",
    },
    childDoes: [],
    finalProject: {
      ru: "Защита проекта, сертификат, полный повторный радар",
      en: "Project presentation, certificate and a full repeat radar",
    },
    sectors: ["think", "create", "agree", "finish"],
    startDate: null,
    price: null,
    available: false,
  },
];
export const availableInternships = internships.filter(
  (item) => item.available,
);
export function findInternship(value: string | null) {
  return availableInternships.find((item) => item.slug === value);
}
export const referralSources = [
  "office-day",
  "sport-day",
  "hike",
  "fair",
  "cards",
  "referral",
  "product",
  "other",
] as const;
export type ReferralSource = (typeof referralSources)[number];
export const corporateSources: readonly string[] = [
  "office-day",
  "sport-day",
  "hike",
  "fair",
];
export function isReferralSource(
  value: string | null,
): value is ReferralSource {
  return referralSources.some((source) => source === value);
}
