# Space Text World — Аварийный стабилизатор

Текстовая вылазка по миру [Space Text World](https://github.com/NikitaKozemyaka/space-text-world) на Next.js. Сюжет клиентский (`StoryPlayer` + `lib/data`), сервер не нужен.

Играть: https://nikitakozemyaka.github.io/Text-adventure/

Бот: [@STWgame_bot](https://t.me/STWgame_bot)

Из бота открывается `/?t=<TOKEN>`. На финале успех ведёт на `t.me/STWgame_bot?start=adv_<TOKEN>_w`, провал — на `..._l`.

## Локально

```bash
npm ci
npm run dev
```

Статическая сборка:

```bash
npm run build:static
```
