import type { Localized } from "@/content/types";

function locPair(ru: string, en: string): Localized {
  return { ru, en };
}

export const experienceUrl = "https://experience.radarexec.ru";

export const b2bHub = {
  eyebrow: locPair("RADAR KIDS для компаний", "RADAR KIDS for companies"),
  title: locPair(
    "Семейные корпоративные программы, в которых участвуют и дети, и родители",
    "Family programmes for companies, where children and parents take part together",
  ),
  subtitle: locPair(
    "Создаём детские дни в офисе и семейные походы для сотрудников. Берём на себя сценарий, адаптацию под компанию, организацию и сопровождение.",
    "We run children’s office days and family hikes for employees. We take the script, the adaptation to the company, the organisation and the support.",
  ),
  cta: locPair("Запросить программу", "Request a programme"),
  ctaOffice: locPair("Посмотреть Office Day", "See Office Day"),
  officeTitle: locPair("Office Day Офисные приключения", "Office Day: office adventures"),
  officeText: locPair(
    "Дети сотрудников знакомятся с офисом, профессиями и работой родителей через квест, деловую игру и задания, адаптированные под бизнес компании.",
    "Employees’ children get to know the office, the jobs and their parents’ work through a quest, a business game and tasks adapted to the company’s business.",
  ),
  officeCta: locPair("Обсудить детский день в офисе", "Talk about a children’s day in the office"),
  hikesTitle: locPair("Корпоративные семейные походы", "Corporate family hikes"),
  hikesText: locPair(
    "Организованный выезд для сотрудников с детьми: доступный маршрут, семейные задания, сопровождение и общий опыт, в котором родители и дети действуют вместе.",
    "An organised trip for employees with children: an accessible route, family tasks, support, and a shared experience where parents and children act together.",
  ),
  hikesCta: locPair("Запросить формат похода", "Request a hike format"),
  diaryTitle: locPair("Ежедневник «Три роли / одна жизнь»", "Diary “Three roles / one life”"),
  diaryText: locPair(
    "Корпоративный подарок: дневник баланса для тех, кто ведёт проекты, бизнес и семейную жизнь. Первый тираж — только под заказ компании.",
    "A corporate gift: a balance diary for people who run projects, a business and family life. The first print run is made only to a company order.",
  ),
  diaryCta: locPair("Запросить корпоративный тираж", "Request a corporate print run"),
  boundary: locPair(
    "RADAR KIDS проводит семейные маршруты для сотрудников вместе с детьми. RADAR Experience работает со взрослыми корпоративными командами и экстремальными активностями.",
    "RADAR KIDS runs family routes for employees together with children. RADAR Experience works with adult corporate teams and extreme activities.",
  ),
  formTitle: locPair("Запросить программу", "Request a programme"),
};

export const officeDay = {
  title: locPair("Офисные приключения", "Office adventures"),
  subtitle: locPair(
    "День детей сотрудников в офисе: квест, деловая игра и знакомство с работой родителей. Программу разрабатываем под вашу компанию.",
    "A day for employees’ children in the office: a quest, a business game and a look at their parents’ work. The programme is developed for your company.",
  ),
  intro: locPair(
    "На Office Day дети знакомятся с офисом, работой родителей и задачами компании через квест и деловую игру. Приоритет проведения — Москва и ЦФО. Возможность мероприятия в другом городе обсудим отдельно.",
    "At Office Day, children explore the office, their parents’ work and the company’s activities through a quest and a business game. Events are primarily held in Moscow and the Central Federal District. Other cities are considered on request.",
  ),
  cta: locPair("Запросить программу Office Day", "Request the Office Day programme"),
  ctaHint: locPair(
    "Расскажите о компании, городе, дате, количестве и возрасте детей. Команда уточнит задачу и подготовит предложение по программе и стоимости.",
    "Tell us about the company, city, date, and the number and ages of the children. The team will clarify your needs and prepare a programme proposal and quote.",
  ),
  taskTitle: locPair("Задача программы", "What the programme is for"),
  task: locPair(
    "Дети знакомятся с местом работы родителей. Через задания и игру узнают, чем занимается компания и какой вклад в её работу вносит мама или папа.",
    "Children get to know their parents’ workplace. Through tasks and play, they explore what the company does and how their mum or dad contributes.",
  ),
  dayTitle: locPair("Как проходит день", "How the day runs"),
  steps: [
    {
      title: locPair("Встреча и старт", "Welcome and start"),
      text: locPair(
        "Регистрация участников, игровые паспорта сотрудников и распределение на команды.",
        "Registration, play staff passports and teams.",
      ),
      result: locPair(
        "Ребёнок включается в сюжет и осваивается в новом пространстве.",
        "The child joins the story and settles into the new space.",
      ),
    },
    {
      title: locPair("Офисный квест", "Office quest"),
      text: locPair(
        "Знакомство с офисом и подразделениями через логические загадки и задания.",
        "Getting to know the office and the teams through logic puzzles and tasks.",
      ),
      result: locPair(
        "Ребёнок понимает, где и как работает родитель.",
        "The child understands where and how the parent works.",
      ),
    },
    {
      title: locPair("Деловая игра", "Business game"),
      text: locPair(
        "Игровая модель реального процесса, продукта или услуги компании в форме, понятной детям.",
        "A play model of a real process, product or service, in a form children understand.",
      ),
      result: locPair(
        "Дети знакомятся с бизнесом через личное участие.",
        "Children meet the business by taking part themselves.",
      ),
    },
    {
      title: locPair("Финал", "Finale"),
      text: locPair(
        "Выставка идей, подведение итогов, дипломы почётных сотрудников и подарки.",
        "A show of ideas, a wrap-up, honorary staff diplomas and gifts.",
      ),
      result: locPair(
        "Участники видят результат общего дня и завершают сюжет.",
        "Participants see the result of the shared day and close the story.",
      ),
    },
  ],
  adaptTitle: locPair("Адаптация под компанию", "Adapted to the company"),
  adapt: locPair(
    "Сценарий адаптируется под отрасль, офис, процессы и ценности компании. Для финансовой организации, технологической команды, производства или ритейла используются разные игровые задачи и примеры.",
    "The script is adapted to the industry, the office, the processes and the company’s values. A bank, a tech team, a factory or retail get different play tasks and examples.",
  ),
  mediaTitle: locPair(
    "Память для семьи и материалы для бренда работодателя",
    "A memory for the family and material for the employer brand",
  ),
  media: locPair(
    "По согласованию на площадке работает съёмочная команда. Для семей можно подготовить фоторепортаж и короткие персональные видео. Для компании — итоговый ролик для внутренних коммуникаций, социальных сетей и отчётных материалов.",
    "By agreement, a camera team works on site. For families we can prepare a photo report and short personal videos. For the company — a closing film for internal communications, social media and reports.",
  ),
  mediaNote: locPair(
    "Съёмка детей проводится только при оформленных согласиях законных представителей и компании.",
    "Children are filmed only with written consent from legal guardians and the company.",
  ),
  orgTitle: locPair("Организация под ключ", "Turnkey organisation"),
  orgItems: [
    locPair("регистрация и сопровождение детей", "registration and support for the children"),
    locPair("игровые материалы и брендирование", "play materials and branding"),
    locPair(
      "наставники для небольших групп (ориентир 6–8 детей; финальный состав групп зависит от возраста и условий площадки)",
      "mentors for small groups (about 6–8 children; the final groups depend on age and the site)",
    ),
    locPair("контроль перемещения и доступа", "movement and access control"),
    locPair("учёт требований площадки", "the site’s requirements"),
    locPair("питание и питьевой режим по согласованному меню", "food and drinks from an agreed menu"),
    locPair("реквизит, канцелярия, дипломы и подарки", "props, stationery, diplomas and gifts"),
    locPair("фото и видео как дополнительная опция", "photo and video as an extra option"),
  ],
  valueTitle: locPair("Для компании", "For the company"),
  valueItems: [
    locPair("Семейное событие для сотрудников и их детей.", "A family event for employees and their children."),
    locPair(
      "знакомство детей с профессиями и бизнесом родителей",
      "children meeting their parents’ jobs and business",
    ),
    locPair("По согласованию готовим материалы для внутренних коммуникаций.", "By agreement, we prepare materials for internal communications."),
    locPair("Содержание программы связываем с бизнесом и ценностями компании.", "Programme content is connected with the company’s business and values."),
    locPair(
      "единый подрядчик для сценария и организации",
      "one contractor for the script and the organisation",
    ),
  ],
  formTitle: locPair("Запросить программу Office Day", "Request the Office Day programme"),
  team: {
    ru: {
      title: "Корпоративная команда",
      caption: "Руководство проектов «Офисные приключения»",
      intro: "Программу разрабатывает команда с 20-летним опытом в международном бизнес-образовании и корпоративном обучении.",
      qualifications: [
        "Кандидат педагогических наук.",
        "Методист корпоративных систем обучения.",
        "КМС.",
        "Организационный психолог.",
        "Сертифицированный коуч корпоративных команд.",
      ],
    },
    en: {
      title: "The team on this programme",
      caption: null,
      intro: null,
      qualifications: [
        "candidate of pedagogical sciences",
        "methodologist of corporate learning systems",
        "Candidate Master of Sport",
        "physical education teacher",
        "organisational psychologist",
        "certified coach of corporate teams",
      ],
    },
  },
  priceItems: [
    locPair(
      "Базовый формат (25 детей — интерактивная экскурсия по офису, обед, бизнес-игра/викторина, спортивные старты) — 300 000 ₽",
      "Basic format (25 children — an interactive office tour, lunch, a business game or quiz, sports starts) — 300,000 ₽",
    ),
    locPair(
      "Расширенный формат (день + спортивные старты + семейные старты вечером) — 500 000 ₽",
      "Extended format (the day + sports starts + family starts in the evening) — 500,000 ₽",
    ),
    locPair(
      "Медиапакет — дополнительная опция к любому формату, +500 000 ₽",
      "Media pack — an extra option on any format, +500,000 ₽",
    ),
  ],
};

export const familyHikes = {
  title: locPair("Корпоративные семейные походы", "Corporate family hikes"),
  subtitle: locPair(
    "Организованные выезды для сотрудников с детьми, где семья проходит маршрут и задания вместе.",
    "Organised trips for employees with children, where the family walks the route and does the tasks together.",
  ),
  intro: locPair(
    "В программу входят доступный маршрут, семейные и командные задания, сопровождение и общий финал. Сложность, продолжительность и сценарий подбираем с учётом состава группы и требований компании.",
    "The programme combines an accessible route, family and team tasks, support and a shared finale. Difficulty, length and script are chosen after we know the group and the company’s requirements.",
  ),
  needTitle: locPair("Что нужно, чтобы подобрать формат", "What we need to choose a format"),
  needItems: [
    locPair("город или регион", "city or region"),
    locPair("предполагаемая дата", "likely date"),
    locPair("количество семей", "number of families"),
    locPair("возраст детей", "children’s ages"),
    locPair("желаемая продолжительность", "preferred length"),
    locPair("опыт участников", "the participants’ experience"),
    locPair("требования компании к безопасности и питанию", "the company’s safety and food requirements"),
    locPair("необходимость транспорта, фото и видео", "whether you need transport, photo and video"),
  ],
  cta: locPair("Запросить формат семейного похода", "Request a family hike format"),
  formTitle: locPair("Запросить формат семейного похода", "Request a family hike format"),
  expertTitle: locPair("Эксперт программы", "Programme expert"),
  expertName: locPair("Дарья Володина", "Daria Volodina"),
  expert: locPair(
    "[TODO: текст карточки Дарьи Володиной]",
    "[TODO: Daria Volodina bio]",
  ),
  boundary: locPair(
    "RADAR KIDS проводит семейные маршруты для сотрудников вместе с детьми. RADAR Experience работает со взрослыми корпоративными командами и экстремальными активностями.",
    "RADAR KIDS runs family routes for employees together with children. RADAR Experience works with adult corporate teams and extreme activities.",
  ),
};

export const diary = {
  title: locPair(
    "Ежедневник «Три роли / одна жизнь» — корпоративный подарок",
    "Diary “Three roles / one life” — a corporate gift",
  ),
  subtitle: locPair(
    "Практическое руководство и дневник для тех, кто совмещает работу, семейные дела и собственные планы.",
    "A practical guide and diary for people combining work, family responsibilities and their own plans.",
  ),
  intro: locPair(
    "Три автора — три роли: Юлия Гордеева (бизнес-планирование), Елизавета Сарычева (устойчивость и самочувствие), Мария Громова (управление проектами для детей). 365 дней, разворот на день: рабочий штаб слева, домашний круг справа.",
    "Three authors — three roles: Julia Gordeeva (business planning), Elizabeth Sarycheva (resilience and well-being), Maria Gromova (project work for children). 365 days, one spread a day: the work desk on the left, the home circle on the right.",
  ),
  printNote: locPair(
    "Первый тираж выпускается только под корпоративный заказ. Печать и дистрибуция в розницу пока не организованы.",
    "The first print run is made only to a corporate order. Retail print and distribution are not set up yet.",
  ),
  priceNote: locPair(
    "[TODO: цена и минимальный тираж]",
    "[TODO: price and minimum print run]",
  ),
  cta: locPair("Запросить корпоративный тираж", "Request a corporate print run"),
  formTitle: locPair("Запросить корпоративный тираж", "Request a corporate print run"),
  expertTitle: locPair(
    "Автор блока управления проектами для детей",
    "Author of the children’s project block",
  ),
  expert: locPair(
    "Мария Громова. Эксперт управления проектами для детей. 20 лет в госсекторе и консалтинге, 14 лет на руководящих постах в федеральном министерстве. Автор методики «Учимся побеждать» и блока управления проектами в ежедневнике.",
    "Maria Gromova. Expert in project work for children. 20 years in the public sector and consulting, 14 years in senior roles in a federal ministry. Author of the “Learning to win” method and of the project block in the diary.",
  ),
};
