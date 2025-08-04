<template>
  <div class="achievements-list">
    <AchievementCard
      v-for="item in achievements"
      :key="item.id"
      :achievement="item"
    />
  </div>
</template>

<script setup lang="ts">
import AchievementCard from '~/entities/AchievementCard/AchievementCard.vue'

const achievements = [
  {
    id: 1,
    icon: '🎯',
    title: 'Точный стрелок',
    desc: 'Наберите 90%+ в тестах (8/10)',
    xp: '75 XP',
    border: 'orange',
    progress: { value: 100, label: '8/10', color: 'orange' },
  },
  {
    id: 2,
    icon: '⭐',
    title: 'Звездный студент',
    desc: 'Получите все 5-звездочные оценки (12/20)',
    xp: '125 XP',
    border: 'blue',
    progress: { value: 60, label: '12/20', color: 'blue' },
  },
  {
    id: 3,
    icon: '🔒',
    title: 'Марафонец',
    desc: '30 дней подряд обучения',
    xp: '200 XP',
    border: 'gray',
    locked: true,
    progress: { value: 20, label: '6/30', color: 'gray' },
  },
  {
    id: 4,
    icon: '🔑',
    title: 'Коллекционер',
    desc: 'Соберите все достижения',
    xp: '500 XP',
    border: 'gray',
    locked: true,
    progress: { value: 70, label: '70%', color: 'gray' },
  },
  {
    id: 5,
    icon: '🎓',
    title: 'Первый шаг',
    desc: 'Завершите первый урок',
    xp: '+25 XP',
    border: 'green',
    progress: { value: 100, color: 'green' },
  },
  {
    id: 6,
    icon: '📚',
    title: 'Книжный червь',
    desc: 'Прочитайте 10 статей',
    xp: '+30 XP',
    border: 'green',
    progress: { value: 100, color: 'green' },
  },
  {
    id: 7,
    icon: '💻',
    title: 'Код-мастер',
    desc: 'Решите 50 задач по программированию',
    xp: '+150 XP',
    border: 'green',
    progress: { value: 100, color: 'green' },
  },
  {
    id: 8,
    icon: '👥',
    title: 'Командный игрок',
    desc: 'Примите участие в 5 групповых проектах',
    xp: '+80 XP',
    border: 'green',
    progress: { value: 100, color: 'green' },
  },
]
</script>

<style lang="scss" scoped>
.achievements-list {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full;
}
</style>
