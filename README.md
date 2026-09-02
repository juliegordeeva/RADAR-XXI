# RADAR XXI Kids

Сайт школы универсальных компетенций для детей 4–16 лет и их родителей.

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

Заявки без своего email открывают Telegram. Когда появится почта на своём домене — прописать её в `lib/site.ts`, форма начнёт открывать письмо.

Бриф: `docs/BRIEF.md`. Открытые вопросы: `TODO.md`.
