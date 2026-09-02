import type { Localized } from "@/content/types";

export type TeamMember = {
  id: string;
  name: Localized;
  role: Localized;
  tagline?: Localized;
  bio: Localized;
  photo: string | null;
  photoAlt: Localized;
};

export const team: TeamMember[] = [
  {
    id: "julia",
    name: { ru: "Юлия Гордеева", en: "Julia Gordeeva" },
    role: { ru: "Основательница", en: "Founder" },
    bio: {
      ru: "Больше 15 лет преподаёт на программах MBA и развивает руководителей. Жила и работала в разных странах. Сначала собрала занятия для своей семьи, потом — для других родителей.",
      en: "Has taught on MBA programmes and worked with leaders for over 15 years. Has lived and worked in several countries. First made these activities for her own family, then for other parents.",
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
    role: { ru: "Основательница, директор разработки", en: "Founder, director of development" },
    tagline: { ru: "Лидерская устойчивость", en: "Leadership resilience" },
    bio: {
      ru: "Магистр управления организацией во Франции, образование в менеджменте туризма, коуч ICF. Десять лет в международном консалтинге ICG Inc. на миссии Airbus. Два проекта Олимпийских игр и два проекта FIFA, 2014–2025.",
      en: "Master’s in organisational management in France, background in tourism management, ICF coach. Ten years in international consulting at ICG Inc. on the Airbus mission. Two Olympic Games projects and two FIFA projects, 2014–2025.",
    },
    photo: "/images/elizaveta-sarycheva.webp",
    photoAlt: {
      ru: "Елизавета Сарычева",
      en: "Elizabeth Sarycheva",
    },
  },
];
