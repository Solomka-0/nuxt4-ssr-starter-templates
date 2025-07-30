<template>
  <UiCard class="daily-test-card">
    <template #title>
      <div>Ежедневный тест</div>
      <div>📝</div>
    </template>
    <div class="daily-test-card__content">
      <span class="daily-test-card__question">
        Самый длинный палиндром путем объединения двубуквенных слов
      </span>
      <span class="daily-test-card__tags">
        <span class="daily-test-card__tag">#Array</span>
        <span class="daily-test-card__tag">#Hash table</span>
        <span class="daily-test-card__tag">#String</span>
        <span class="daily-test-card__tag">#Greedy</span>
        <span class="daily-test-card__tag">#Counting</span>
      </span>
    </div>
    <template #postfix>
      <UiButton class="text-primary dark:text-azure-67"> Начать тест </UiButton>
    </template>
  </UiCard>
</template>

<script setup lang="ts">
import UiButton from '#shared/ui/UiButton.vue'
import UiCard from '#shared/ui/UiCard.vue'
</script>

<style lang="scss">
.daily-test-card {
  @apply flex flex-col gap-6;

  &__content {
    @apply flex flex-col items-center justify-between gap-2;
  }

  &__question {
    @apply text-[16px] text-azure-15 dark:text-[#E6EAF2] text-center;
  }

  &__tags {
    @apply flex flex-wrap gap-2;
  }

  &__tag {
    @apply cursor-pointer;
    @apply bg-gray-100 text-primary px-2 py-1 rounded-lg text-sm font-medium transition-colors duration-300;
    @apply dark:bg-azure-21 dark:text-azure-67;
  }
}
</style>
