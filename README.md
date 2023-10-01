# Spotify API Search

## Введение
Проект "Spotify API Search" — это приложение для работы с API Spotify позволяющее получить максимально точные и персонализированные результаты при поиске музыки в каталоге Spotify. Стек - Next.js, Redux-Toolkit, TypeScript, SCSS (приложение в процессе разработки).

## Добавьте .env файл в корень проекта (подключение переменных окружения)
**Добавьте в файл**: 
```
NEXT_SPOTIFY_CLIENT_ID={ваш client id}
NEXT_SPOTIFY_CLIENT_SECRET={ваш client secret}
NEXT_ACCOUNTS_API_URL=https://accounts.spotify.com/api/
NEXT_SPOTIFY_API_URL=https://api.spotify.com/v1/
```

## Установка и Запуск
1. **Клонирование репозитория**: Клонируйте репозиторий на ваш локальный компьютер.
2. **Установка зависимостей**: Запустите `npm install` или `yarn install`.
3. **Запуск сервера**: Выполните команду `npm run dev`, `yarn dev` или `pnpm dev`.
4. **Просмотр в браузере**: Откройте браузер и перейдите по адресу `http://localhost:3000`.

## Основные Функции
- Взаимодействие с REST API Spotify.
- Поиск и отображение информации о треках, альбомах и исполнителях.

## Технологический Стек
- Next.js
- TypeScript
- SCSS

## Дополнительные Инструменты
- NextFont для оптимизации и загрузки пользовательских шрифтов.

## Ссылки и Ресурсы
- [Next.js Документация](https://nextjs.org/docs)
- [Next.js GitHub Репозиторий](https://github.com/vercel/next.js/)
