<template>
  <div class="recent-achievements">
    <AchievementCard
      v-for="achievement in recent"
      :key="achievement.id"
      :achievement="achievement"
    />
  </div>
</template>

<script setup lang="ts">
import AchievementCard from '~/entities/AchievementCard/AchievementCard.vue'

const recent = [
  {
    id: 1,
    icon: '🔥',
    title: 'Streak Master',
    desc: '7 дней подряд активного обучения',
    xp: '+50 XP',
    badge: 'НОВОЕ',
    border: 'blue', // или green, orange и т.д.
  },
  {
    id: 2,
    icon: '⚡',
    title: 'React Master',
    desc: 'Завершены все базовые курсы React',
    xp: '+100 XP',
    badge: 'НОВОЕ',
    border: 'green',
  },
]
</script>

<style lang="scss" scoped>
.recent-achievements {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6 w-full;

  // На мобильных — одна колонка, на md+ — две
}
</style>
