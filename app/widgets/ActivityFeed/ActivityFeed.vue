<template>
  <div class="activity-feed">
    <h2 class="activity-feed__title">Активность</h2>
    <div class="activity-feed__body">
      <ActivityFeedItem
        v-for="item in items"
        :key="item.id"
        :icon="item.icon"
        :text="item.text"
        :time="item.time"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ActivityFeedItem from '~/entities/ActivityFeedItem/ActivityFeedItem.vue'

const items = [
  {
    id: 1,
    icon: '🎯',
    text: 'Завершен скилл "React Basics"',
    time: '2 часа назад',
  },
  { id: 2, icon: '📝', text: 'Пройден тест по JavaScript', time: 'Вчера' },
  {
    id: 3,
    icon: '🏆',
    text: 'Получено достижение "Streak Master"',
    time: '2 дня назад',
  },
  {
    id: 4,
    icon: '💡',
    text: 'Добавлен новый термин в словарь',
    time: '3 дня назад',
  },
  {
    id: 5,
    icon: '📚',
    text: 'Начато изучение карты "Frontend Developer"',
    time: 'Неделю назад',
  },
]
</script>

<style scoped>
.activity-feed {
  @apply flex flex-col gap-2;

  &__title {
    @apply text-[19px] font-[700] text-[#23272F] mb-4;
    @apply dark:text-[#E6EAF2];
  }

  &__body {
    @apply w-full;
  }
}
</style>
