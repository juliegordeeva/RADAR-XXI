import type { Localized } from "@/content/types";

export type TeamMember = {
  id: string;
  name: Localized;
  role: Localized;
  aboutRole?: Localized;
  tagline?: Localized;
  bio: Localized;
  aboutBio?: Localized;
  photo: string | null;
  photoAlt: Localized;
};

export const team: TeamMember[] = [
  {
    id: "julia",
    name: { ru: "Юлия Гордеева", en: "Julia Gordeeva" },
    role: { ru: "Основательница", en: "Founder" },
    aboutRole: { ru: "Основатель", en: "Founder" },
    bio: {
      ru: "Больше 15 лет преподаёт на программах MBA и развивает руководителей. Жила и работала в разных странах. Сначала собрала занятия для своей семьи, потом — для других родителей.",
      en: "Has taught on MBA programmes and worked with leaders for over 15 years. Has lived and worked in several countries. First made these activities for her own family, then for other parents.",
    },
    aboutBio: {
      ru: "Больше 15 лет преподаёт на международных программах MBA и развивает руководителей на трёх языках — от Перу до Китая через Дальний Восток. Основатель группы RADAR. Жила и работала в разных странах. Сначала собрала занятия для своей семьи и друзей, потом решила методически масштабироваться ради умного и счастливого будущего мотивированных детей и их родителей.",
      en: "Has taught on international MBA programmes for over 15 years and works with leaders in three languages — from Peru to China via the Far East. Founder of the RADAR group. Has lived and worked in several countries. First made these activities for her family and friends, then decided to scale the method for a smart and happy future for motivated children and their parents.",
    },
    photo: "/images/julia-gordeeva.webp",
    photoAlt: {
      ru: "Юлия Гордеева",
      en: "Julia Gordeeva",
    },
  },
  {
    id: "elizabeth",
    name: { ru: "Елизавета Сарычева", en: "Elizabeth Sarycheva" },
    role: { ru: "Со-основательница", en: "Co-founder" },
    bio: {
      ru: "Магистр управления организацией во Франции. Образование в области экономики и управления в России. 10 лет в международном консалтинге, в том числе по темам лидерской устойчивости, управления энергией и стресс-менеджмента для крупной международной авиастроительной компании. Мама двух мальчиков, которые говорят на четырёх языках.",
      en: "Master’s in organisational management in France. Education in economics and management in Russia. 10 years in international consulting, including leadership resilience, energy management and stress management for a major international aircraft manufacturer. Mother of two boys who speak four languages.",
    },
    photo: "/images/elizaveta-sarycheva.webp",
    photoAlt: {
      ru: "Елизавета Сарычева",
      en: "Elizabeth Sarycheva",
    },
  },
];
