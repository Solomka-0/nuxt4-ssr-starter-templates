<template>
  <div class="news-list">
    <NewsCard v-for="item in items" :key="item.id" :news="item" />
  </div>
</template>

<script setup lang="ts">
import NewsCard from '@/entities/news/NewsCard.vue'

// Пример данных — вынести в реальный fetch или пропс при интеграции
const items = [
  {
    id: 1,
    type: 'new',
    badge: 'НОВЫЙ КУРС',
    date: '2 часа назад',
    featured: true,
    title: 'Запуск курса "Advanced React Patterns"',
    desc: 'Новый углубленный курс по продвинутым паттернам React. Изучите render props, compound components, custom hooks и state management patterns от экспертов индустрии.',
    tags: ['#React', '#Advanced', '#Patterns', '#Frontend'],
    views: 245,
    comments: 18,
    likes: 435,
    rating: 73,
    button: 'Начать курс',
  },
  {
    id: 2,
    type: 'update',
    badge: 'ОБНОВЛЕНИЕ',
    date: '1 день назад',
    title: 'Улучшения системы тестирования',
    desc: 'Добавлены новые типы вопросов, улучшена система оценки и добавлена возможность пересдачи тестов с детальной аналитикой ошибок.',
    tags: ['#Testing', '#Update', '#Analytics'],
    views: 156,
    comments: 12,
    likes: 89,
    rating: 115,
    button: 'Подробнее',
  },
  {
    id: 3,
    type: 'announce',
    badge: 'АНОНС',
    date: '3 дня назад',
    title: 'Хакатон LEVEL CRAFT 2025',
    desc: '15–17 марта состоится первый хакатон платформы! Создавайте инновационные EdTech решения, соревнуйтесь за призы и получите возможность стажировки в топовых IT-компаниях.',
    tags: ['#Hackathon', '#Competition', '#EdTech', '#Career'],
    views: 892,
    comments: 45,
    likes: 234,
    rating: 4,
    button: 'Регистрация',
  },
  {
    id: 4,
    type: 'community',
    badge: 'СООБЩЕСТВО',
    date: '5 дней назад',
    title: 'Студент месяца: Анна Петрова',
    desc: 'Анна завершила 8 курсов за месяц, получила сертификат Full-Stack разработчика и уже получила оффер в стартапе. Читайте интервью о её пути в программировании.',
    tags: ['#Success', '#Interview', '#FullStack', '#Inspiration'],
    views: 324,
    comments: 28,
    likes: 156,
    rating: 40,
    button: 'Читать интервью',
  },
  {
    id: 5,
    type: 'update',
    badge: 'ОБНОВЛЕНИЕ',
    date: '1 неделю назад',
    title: 'Мобильное приложение LEVEL CRAFT',
    desc: 'Теперь вы можете учиться где угодно! Мобильное приложение поддерживает офлайн-режим, синхронизацию прогресса и адаптивные уведомления для поддержания мотивации.',
    tags: ['#Mobile', '#iOS', '#Android', '#Offline'],
    views: 678,
    comments: 34,
    likes: 289,
    rating: 25,
    button: 'Скачать',
  },
]
</script>

<style class="scss">
.news-list {
  @apply flex flex-col gap-5;
}
</style>
