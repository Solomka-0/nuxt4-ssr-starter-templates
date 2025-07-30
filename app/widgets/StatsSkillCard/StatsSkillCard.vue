<template>
  <UiCard class="stats-skill-card">
    <template #title>
      <div>React Developer</div>
      <div>📊</div>
    </template>
    <div class="stats-skill-card__progress">
      <UiProgressBar :progress="68" />
      <div class="stats-skill-card__progress-text">68% до Middle</div>
    </div>
    <div class="stats-skill-card__row">
      <span class="stats-skill-card__block">
        <span class="stats-skill-card__value">12</span>
        <span class="stats-skill-card__desc">Скиллов</span>
      </span>
      <span class="stats-skill-card__block">
        <span class="stats-skill-card__value">8</span>
        <span class="stats-skill-card__desc">Завершено</span>
      </span>
      <span class="stats-skill-card__block">
        <span class="stats-skill-card__value">4</span>
        <span class="stats-skill-card__desc">В процессе</span>
      </span>
    </div>
    <template #postfix>
      <UiButton class="text-primary dark:text-azure-67">
        Продолжить обучение
      </UiButton>
    </template>
  </UiCard>
</template>

<script setup lang="ts">
import UiCard from '#shared/ui/UiCard.vue'
import UiButton from '#shared/ui/UiButton.vue'
import UiProgressBar from '#shared/ui/UiProgressBar.vue'
</script>

<style lang="scss">
.stats-skill-card {
  @apply flex flex-col gap-6;

  &__progress {
    @apply flex flex-col gap-2 mb-2;
  }

  &__progress-text {
    @apply text-[16px] text-azure-15 dark:text-[#E6EAF2];
  }

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
