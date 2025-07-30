<template>
  <UiCard class="stats-activity-card">
    <template #title>
      <div>Активность</div>
      <div>📈</div>
    </template>
    <div class="flex items-center justify-between gap-2">
      <span class="stats-activity-card__value">
        <span class="stats-activity-card__value-number"> 7 </span>
        <span class="stats-activity-card__value-desc"> дней подряд </span>
      </span>
      <span class="stats-activity-card__streak">
        <span
          v-for="(i, key) in 6"
          :key="key"
          class="stats-activity-card__streak-dot"
        />
        <span
          class="stats-activity-card__streak-dot stats-activity-card__streak-dot--active"
        />
      </span>
    </div>
    <template #postfix>
      <UiButton> Подробная статистика </UiButton>
    </template>
  </UiCard>
</template>

<script setup lang="ts">
import UiCard from '#shared/ui/UiCard.vue'
import UiButton from '#shared/ui/UiButton.vue'
</script>

<style lang="scss">
.stats-activity-card {
  @apply flex flex-col gap-6;

  &__header {
    @apply flex justify-between items-center mb-2;
  }

  &__value {
    @apply flex items-center gap-3 text-nowrap;
    &-number {
      @apply text-[40px] font-[700] text-primary dark:text-azure-67;
    }
    &-desc {
      @apply text-grey-46 dark:text-[#B8C2DB];
    }
  }

  &__streak {
    @apply flex items-center gap-1.5;
    &-dot {
      @apply rounded-full bg-primary w-2.5 h-2.5 dark:bg-azure-67;
      // Для активного streak (например, зелёный)
      &--active {
        @apply bg-green-700 dark:bg-green-700;
      }
    }
  }

  &__footer {
    @apply mt-4;
  }
}
</style>
