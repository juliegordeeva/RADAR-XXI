import type { Localized } from "@/content/types";

export type TeamMember = {
  id: string;
  name: Localized;
  role: Localized;
  aboutRole?: Localized;
  tagline?: Localized;
  bio: Localized;
  homeBio?: Localized;
  aboutBio?: Localized;
  photo: string | null;
  photoAlt: Localized;
};

export const team: TeamMember[] = [
  {
    id: "julia",
    homeBio: {
      ru: "Основатель группы RADAR EXEC. С 2010 по 2022 год руководила международными корпоративными программами обучения IBS Plekhanov.",
      en: "Founder of the RADAR EXEC group. Led international corporate training programmes at IBS Plekhanov from 2010 to 2022.",
    },
    name: { ru: "Юлия Гордеева", en: "Julia Gordeeva" },
    role: {
      ru: "Основатель, директор по стратегическому планированию и развитию",
      en: "Founder, director of strategic planning and development",
    },
    aboutRole: {
      ru: "Основатель, директор по стратегическому планированию и развитию",
      en: "Founder, director of strategic planning and development",
    },
    tagline: {
      ru: "Основной фокус: бизнес-моделирование управленческих процессов, стратегическое управление и планирование человеческого капитала.",
      en: "Focus: business modelling of management processes, strategic management and human-capital planning.",
    },
    bio: {
      ru: "Основатель группы RADAR EXEC.\n\nВсё своё образование собрала вокруг главного фокуса — как думают и договариваются взрослые руководители: лингвистика, финансы, управление, MBA, бизнес-психология и организационное консультирование, коучинг, продюсирование.\n\nС 2010 по 2022 год руководила международными корпоративными программами обучения IBS Plekhanov. До 2022-го вела мастер-классы и авторские курсы по международному лидерству и бизнес-моделированию — от Перу до Японии через Дальний Восток. С 2022 года руководит консалтинговыми и обучающими практиками для среднего и крупного бизнеса.\n\nСотрудничает с бизнес-школами МГУ, РАНХиГС, Финансового университета, УрФУ, ДВФУ, корпоративными университетами и МБМ Правительства Москвы.\n\nЗа 2025–2026 год провела лично больше 500 часов стратегических сессий с металлургами, нефтяниками, атомщиками, ИТ-руководителями, инвестиционными руководителями.",
      en: "Founder of the RADAR EXEC group.\n\nShe built her education around one focus — how adult leaders think and work together: linguistics, finance, management, an MBA, business psychology and organisational consulting, coaching, and producing.\n\nFrom 2010 to 2022 she led international corporate training programmes at IBS Plekhanov. Until 2022 she taught masterclasses and her own courses on international leadership and business modelling — from Peru to Japan via the Far East. Since 2022 she has led consulting and training for mid-size and large business.\n\nShe works with the business schools of Lomonosov MSU, RANEPA, the Financial University, UrFU, FEFU, with corporate universities and with Moscow Government MBM.\n\nIn 2025–2026 she personally ran more than 500 hours of strategy sessions with leaders in metals, oil, nuclear energy, IT and investment.",
    },
    aboutBio: {
      ru: "Больше 15 лет преподаёт на международных программах MBA и развивает руководителей на трёх языках — от Перу до Китая через Дальний Восток.\n\n20 лет назад провела первый управленческий разбор на английском языке.\n\nОснователь группы RADAR EXEC (управленческий консалтинг, продюсирование руководителей, международные коммуникации, экстремальный опыт и обучение).\n\nЖила и работала в разных странах. Сначала собрала цели и задачи для своей семьи и друзей, потом решила развивать проект универсальных компетенций для успешного будущего детей других семей.",
      en: "For more than 15 years she has taught on international MBA programmes and worked with leaders in three languages — from Peru to China via the Far East.\n\nTwenty years ago she ran her first management debrief in English.\n\nFounder of the RADAR EXEC group (management consulting, producing leaders, international communications, extreme experience and learning).\n\nShe has lived and worked in several countries. First she set goals and tasks for her own family and friends, then decided to develop a universal-competencies project for the successful future of other families’ children.",
    },
    photo: "/images/radar/team/yulia-gordeeva-founder.webp",
    photoAlt: {
      ru: "Юлия Гордеева",
      en: "Julia Gordeeva",
    },
  },
  {
    id: "elizabeth",
    homeBio: {
      ru: "Магистр управления организацией во Франции. 10 лет в международном консалтинге.",
      en: "Master’s in organisational management in France. 10 years in international consulting.",
    },
    name: { ru: "Елизавета Сарычева", en: "Elizabeth Sarycheva" },
    role: { ru: "Со-основатель", en: "Co-founder" },
    aboutRole: { ru: "Со-основатель", en: "Co-founder" },
    bio: {
      ru: "Магистр управления организацией во Франции. Образование в области экономики и управления в России. 10 лет в международном консалтинге, в том числе по темам лидерской устойчивости, управления энергией и стресс-менеджмента для крупной международной авиастроительной компании. Мама двух мальчиков, которые говорят на четырёх языках.",
      en: "Master’s in organisational management in France. Education in economics and management in Russia. 10 years in international consulting, including leadership resilience, energy management and stress management for a major international aircraft manufacturer. Mother of two boys who speak four languages.",
    },
    photo: "/images/radar/team/elizaveta-sarycheva.webp",
    photoAlt: {
      ru: "Елизавета Сарычева",
      en: "Elizabeth Sarycheva",
    },
  },
  {
    id: "maria",
    homeBio: {
      ru: "Более 20 лет в государственном управлении и консалтинге, 14 лет — на руководящих позициях в федеральном министерстве.",
      en: "More than 20 years in public administration and consulting, including 14 years in senior roles at a federal ministry.",
    },
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
    photo: "/images/radar/team/maria-gromova.webp",
    photoAlt: {
      ru: "Мария Громова",
      en: "Maria Gromova",
    },
  },
];
