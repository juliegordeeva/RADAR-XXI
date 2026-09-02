# RADAR XXI Kids

Сайт школы универсальных компетенций для детей 4–16 лет и их родителей.

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) — корень уходит на `/ru`.

Дизайн-система: [/dev/ui](http://localhost:3000/dev/ui).

## Стек

Next.js 15, React 19, TypeScript, Tailwind CSS v4.

Заявки: `POST /api/lead` и `POST /api/subscribe`. Без `RESEND_API_KEY` пишутся в консоль сервера. Переменные — в `.env.example`.

Бриф: `docs/BRIEF.md`. Открытые вопросы: `TODO.md`.
