# Тёмные развилки — Холодный рассвет

Текстовая приключенческая игра на Next.js. Игра полностью клиентская: сюжет и выборы живут в браузере, сервер и DynamoDB для прохождения не нужны.

Публичная версия на GitHub Pages: https://nikitakozemyaka.github.io/Text-adventure/

Если страница ещё не открывается, один раз включите деплой: **Settings → Pages → Build and deployment → Source: GitHub Actions**, затем **Actions → Deploy to GitHub Pages → Re-run jobs**.

## Локально

```bash
npm ci
npm run dev
```

Статическая сборка (как на Pages):

```bash
npm run build:static
```
