# RADAR KIDS

Программы RADAR KIDS для компаний и семей: офисные и спортивные приключения, PDF-материалы для семейных проектов и корпоративный университет.

Публичный адрес: [kids.radarexec.ru](https://kids.radarexec.ru/ru/). Сайт размещён на GitHub Pages.

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) — корень уходит на `/ru`.

Дизайн-система: [/dev/ui](http://localhost:3000/dev/ui).

## Стек

Next.js 15, React 19, TypeScript, Tailwind CSS v4. Статическая сборка (`output: "export"`), как у сайта гонок RADAR: выкладка через GitHub Pages из папки `out`.

Кнопки обращения открывают Telegram. Посетитель отправляет сообщение в мессенджере самостоятельно. Сайт не показывает фиктивных подтверждений отправки или оплаты.

Корпоративный университет и модель 12 навыков: [docs/UNIVERSITY_2026-10.md](docs/UNIVERSITY_2026-10.md). Статус готовности указан у каждой программы. Настройки покупки материалов находятся в `content/purchases.ts`; неподтверждённая покупка отключена.

Публикация выполняется workflow `.github/workflows/deploy.yml` при push в `redesign/brandbook-v2` или `master`. В GitHub Pages выбран источник GitHub Actions. На собственном домене сборка работает без префикса `/RADAR-XXI`.

Актуальное ТЗ: `docs/RADAR_KIDS_Website_Redesign_Brief_v1.md`. Исторический бриф: `docs/BRIEF.md`.

Редизайн первого этапа, просмотр и уточнения: [docs/redesign/README.md](docs/redesign/README.md).

Актуальный стиль №3: [подключённые страницы, ассеты и просмотр](docs/redesign/STYLE_03.md).

Доводка композиции по макетам v03: [изменения, проверки и скриншоты](docs/redesign/COMPOSITION_V03.md).

Очистка исходных медиа и уменьшение первого push: [REPOSITORY_CLEANUP.md](docs/redesign/REPOSITORY_CLEANUP.md).
