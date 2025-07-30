<template>
  <UiCard class="stats-achievements-card">
    <template #title>
      <div>Достижения</div>
      <div>🏆</div>
    </template>
    <div class="stats-achievements-card__row">
      <span class="stats-achievements-card__block">
        <span class="stats-achievements-card__value">24</span>
        <span class="stats-achievements-card__desc">Всего</span>
      </span>
      <span class="stats-achievements-card__block">
        <span class="stats-achievements-card__value">3</span>
        <span class="stats-achievements-card__desc">Новых</span>
      </span>
      <span class="stats-achievements-card__block">
        <span class="stats-achievements-card__value">89%</span>
        <span class="stats-achievements-card__desc">Рейтинг</span>
      </span>
    </div>
    <template #postfix>
      <UiButton> Посмотреть все </UiButton>
    </template>
  </UiCard>
</template>

<script setup lang="ts">
import UiCard from '#shared/ui/UiCard.vue'
import UiButton from '#shared/ui/UiButton.vue'
</script>

<style lang="scss">
.stats-achievements-card {
  @apply flex flex-col gap-6;

  &__row {
    @apply flex items-center justify-between gap-2;
  }

  &__block {
    @apply flex items-center gap-2;
  }

  &__value {
    @apply text-[32px] font-[700] text-primary dark:text-azure-67 transition-colors duration-300;
  }

  &__desc {
    @apply mt-2 text-grey-46 dark:text-[#B8C2DB] transition-colors duration-300;
  }
}
</style>
