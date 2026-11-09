import type { Localized } from "@/content/types";
export const directions: {
  path: string;
  title: Localized;
  description: Localized;
}[] = [
  {
    path: "/dlya-biznesa",
    title: { ru: "Для компаний", en: "For companies" },
    description: {
      ru: "Офисные и спортивные приключения для сотрудников и их детей",
      en: "Office and sports adventures for employees and their children",
    },
  },
  {
    path: "/produkty",
    title: { ru: "Для семейных проектов", en: "For family projects" },
    description: {
      ru: "PDF-адвенты, карточки и комплекты для совместных занятий",
      en: "Printable PDF advents, cards and sets to use together",
    },
  },
  {
    path: "/universitet",
    title: { ru: "Корпоративный университет", en: "Corporate university" },
    description: {
      ru: "Подход к развитию навыков и программы для семей",
      en: "An approach to practising skills and programmes for families",
    },
  },
];
