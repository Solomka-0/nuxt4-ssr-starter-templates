Шаблон на Nuxt 4 с FSD архитектурой, строгой типизацией.
Структура оптимизирована под рост команды, масштабирование и поддержку CI/CD.

---

## Особенности

- Nuxt 4 с поддержкой SSR / SSG / PWA
- Feature-Sliced & Domain-Driven структура
- Typescript everywhere (`strict: true`)
- Выделенный shared/ui-kit, глобальные типы и DTO
- Строгая организация компонентов, логики и бизнес-кода
- Готовность к интеграции с реальным backend/API
- Разделение тестов, моков, скриптов и docker-инфраструктуры
- Готовность к подключению i18n, CI/CD

---

## Структура проекта

```text
my-nuxt-app/
├─ app/
│  ├─ assets/
│  ├─ features/
│  │    ├─ event/
│  │    │    ├─ components/
│  │    │    ├─ composables/
│  │    │    ├─ model.ts
│  │    │    ├─ store.ts
│  │    │    └─ api.ts
│  │    ├─ user/
│  │    └─ ...
│  ├─ entities/
│  │    ├─ event/
│  │    ├─ user/
│  │    └─ ...
│  ├─ widgets/
│  │    ├─ event-feed/
│  │    ├─ user-panel/
│  │    └─ ...
│  ├─ pages/
│  │    ├─ event/
│  │    ├─ index.vue
│  │    └─ user/
│  ├─ layouts/
│  ├─ middleware/
│  ├─ plugins/
│  ├─ utils/
│  ├─ constants/
│  ├─ app.vue
│  ├─ app.config.ts
│  └─ error.vue
├─ shared/
│  ├─ ui/
│  ├─ api/
│  ├─ lib/
│  ├─ config/
│  ├─ types/
│  ├─ dto/
│  ├─ locales/
│  └─ index.ts
├─ content/
├─ public/
│  ├─ favicon.ico
│  └─ robots.txt
├─ mocks/
├─ tests/
│  ├─ unit/
│  ├─ e2e/
│  ├─ fixtures/
│  ├─ utils/
│  └─ coverage/
├─ scripts/
│  ├─ generate-types.sh
│  ├─ prepare-locales.js
│  └─ ...
├─ docker/
│  ├─ Dockerfile
│  └─ docker-compose.yml
├─ .env
├─ .env.example
├─ nuxt.config.ts
├─ tsconfig.json
├─ package.json
├─ .editorconfig
├─ .eslintrc.cjs
├─ .eslintignore
├─ .prettierrc
├─ .prettierignore
├─ .gitignore
├─ README.md
└─ .github/
    └─ workflows/
        ├─ lint.yml
        ├─ test.yml
        ├─ deploy.yml
        └─ preview.yml
```

---

## Слои и каталоги

- **app/** — основной фронт-код: страницы, layouts, фичи, бизнес-сущности, виджеты, утилиты.
  - **features/** — изолированные бизнес-фичи с компонентами, логикой, api.
  - **entities/** — базовые сущности, минимальная логика, чистый view/model.
  - **widgets/** — сложные сцепки из фич/сущностей (например, ленты, дашборды).
  - **pages/** — Nuxt-роуты (auto-routing), точка входа для страниц.
  - **layouts/** — шаблоны общего вида.
  - **constants/** — глобальные константы/фиче-флаги.
  - **app.vue** — корневой компонент (обязательно содержит `<NuxtPage />`).
  - **app.config.ts** — глобальные мета-настройки, темизация, PWA.
  - **error.vue** — глобальная страница ошибок.

- **shared/** — только реально переиспользуемое: ui-kit, типы, dto, глобальные утилиты, настройки, локали.

- **mocks/** — мок-серверы, msw, заглушки API для дев/тестов.

- **tests/** — unit, e2e, fixtures, coverage, тестовые утилиты.

- **scripts/** — генерация тайпингов, подготовка локалей, prebuild-скрипты.

- **docker/** — Dockerfile, docker-compose для унификации dev/prod-среды.

- **.github/workflows/** — CI/CD пайплайны для lint, test, deploy, preview.

---

## Быстрый старт

```bash
git clone <ссылка на репозиторий> <название проекта>
cd <название проекта>
npm install
npm run dev
```

---

## Основные команды

```bash
npm run dev         # локальная разработка
npm run build       # production-сборка
npm run lint        # линтер
npm run test        # unit/e2e тесты
npm run preview     # предпросмотр production-сборки
```

---

## Рекомендации по разработке

- Всю бизнес-логику и компоненты размещай строго в features/entities/widgets.
- shared/ui — только реально переиспользуемые элементы (Button, Modal).
- Не пиши "атомы" ради атомов, не размазывай типы и dto — только в shared.
- Используй строгую типизацию, храни примеры и тесты рядом с фичами.
- Для локализации используй shared/locales и dev-скрипты для автосборки.
- Документируй все решения, поддерживай структуру и порядок — это ускорит работу команды.
