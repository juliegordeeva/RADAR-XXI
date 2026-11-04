# RADAR KIDS

Сайт корпоративного университета RADAR KIDS для детей 4–16 лет и их родителей: планируемые стажировки, «Радар навыков» и наборы для домашней практики.

Публичный адрес на GitHub Pages: [https://juliegordeeva.github.io/RADAR-XXI/](https://juliegordeeva.github.io/RADAR-XXI/)

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) — корень уходит на `/ru`.

Дизайн-система: [/dev/ui](http://localhost:3000/dev/ui).

## Стек

Next.js 15, React 19, TypeScript, Tailwind CSS v4. Статическая сборка (`output: "export"`), как у сайта гонок RADAR: выкладка через GitHub Pages из папки `out`.

Формы подготавливают текст обращения: пользователь проверяет его, копирует и самостоятельно отправляет в Telegram. Автоматической отправки и оплаты на сайте нет.

Корпоративный университет, модель 12 навыков, запуск и проверки: [docs/UNIVERSITY_2026-10.md](docs/UNIVERSITY_2026-10.md). Пока открыт лист ожидания; данные для запуска стажировок — в [TODO.md](TODO.md).

Актуальное ТЗ: `docs/RADAR_KIDS_Website_Redesign_Brief_v1.md`. Исторический бриф: `docs/BRIEF.md`.

Редизайн первого этапа, просмотр и уточнения: [docs/redesign/README.md](docs/redesign/README.md).

Актуальный стиль №3: [подключённые страницы, ассеты и просмотр](docs/redesign/STYLE_03.md).

Доводка композиции по макетам v03: [изменения, проверки и скриншоты](docs/redesign/COMPOSITION_V03.md).

Очистка исходных медиа и уменьшение первого push: [REPOSITORY_CLEANUP.md](docs/redesign/REPOSITORY_CLEANUP.md).
