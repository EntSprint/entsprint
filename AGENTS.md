# Правила проекта EntSprint (entsprint.app)

- **Стек:** Статический сайт на чистом HTML, CSS и JavaScript (размещён на GitHub Pages).
- **Главный файл:** `index.html` (содержит весь интерфейс, стили, логику и базу вопросов).
- **База данных:** Firebase Firestore (`entsprint-1ad47`) + `localStorage` (`ACCOUNTS_STORAGE_KEY`).
- **Принцип работы:** Offline-first — сначала сохраняем и читаем данные из `localStorage`, а синхронизацию с Firebase всегда оборачиваем в `try/catch`, чтобы ошибки сети не блокировали вход.
- **Важно:** Не переписывай `index.html` целиком, вноси только точечные правки. Сохраняй все ID, классы, пути к картинкам маскотов и файл `CNAME` (`entsprint.app`).
