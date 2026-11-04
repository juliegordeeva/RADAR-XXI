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
    role: { ru: "Основатель", en: "Founder" },
    aboutRole: { ru: "Основатель", en: "Founder" },
    bio: {
      ru: "Больше 15 лет преподаёт на программах MBA и развивает руководителей. Жила и работала в разных странах. Сначала собрала занятия для своей семьи, потом — для других родителей.",
      en: "Has taught on MBA programmes and worked with leaders for over 15 years. Has lived and worked in several countries. First made these activities for her own family, then for other parents.",
    },
    aboutBio: {
      ru: "Больше 15 лет преподаёт на международных программах MBA и развивает руководителей на трёх языках — от Перу до Китая через Дальний Восток. Основатель группы RADAR. Жила и работала в разных странах. Сначала собрала занятия для своей семьи и друзей, потом решила развивать проект для других семей.",
      en: "Has taught on international MBA programmes for over 15 years and works with leaders in three languages — from Peru to China via the Far East. Founder of the RADAR group. Has lived and worked in several countries. First made these activities for her family and friends, then decided to develop the project for other families.",
    },
    photo: "/images/yulia-gordeeva-founder.webp",
    photoAlt: {
      ru: "Юлия Гордеева",
      en: "Julia Gordeeva",
    },
  },
  {
    id: "elizabeth",
    name: { ru: "Елизавета Сарычева", en: "Elizabeth Sarycheva" },
    role: { ru: "Со-основатель", en: "Co-founder" },
    aboutRole: { ru: "Со-основатель", en: "Co-founder" },
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
  {
    id: "maria",
    name: { ru: "Мария Громова", en: "Maria Gromova" },
    role: {
      ru: "Управляющий партнёр, автор «Учимся побеждать»",
      en: "Managing partner, author of “Learning to win”",
    },
    aboutRole: {
      ru: "Управляющий партнёр",
      en: "Managing partner",
    },
    bio: {
      ru: "Более 20 лет в государственном управлении и консалтинге, 14 лет — на руководящих позициях в федеральном министерстве. Автор проекта «Учимся побеждать»: помогает родителям и подросткам превращать увлечения и школьные задачи в сильные проекты и доказательное портфолио.",
      en: "More than 20 years in public administration and consulting, including 14 years in senior roles at a federal ministry. Author of “Learning to win”: helps parents and teenagers turn hobbies and school tasks into strong projects and an evidence-based portfolio.",
    },
    aboutBio: {
      ru: "Когда стало понятно, что нам хочется расти и управлять большими проектами, к нам присоединилась Мария Громова. Мария в недавнем прошлом — чиновник с 15-летним стажем. Она так же, как и мы, сначала придумала программу и задачи по управлению проектами для своих детей, а после успешного старта запустила международный проект для школьников «Учимся побеждать».",
      en: "When it became clear we wanted to grow and run larger projects, Maria Gromova joined us. Until recently Maria was a civil servant with 15 years’ experience. Like us, she first designed a project-management programme for her own children and after a successful start launched the international project “Learning to win” for schoolchildren.",
    },
    photo: "/images/maria-gromova.webp",
    photoAlt: {
      ru: "Мария Громова",
      en: "Maria Gromova",
    },
  },
];
