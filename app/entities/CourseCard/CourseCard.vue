<template>
  <div class="course-card">
    <div class="course-card__title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="course-card__desc">
      <slot>{{ description }}</slot>
    </div>
    <div class="course-card__footer">
      <span class="course-card__footer-type">{{ type }}</span>
      <span class="course-card__footer-dot">•</span>
      <span class="course-card__footer-rating">{{ rating }}</span>
      <span class="course-card__footer-star">⭐</span>
      <span class="course-card__footer-dot">•</span>
      <span class="course-card__footer-duration">{{ duration }}</span>
    </div>
    <slot name="postfix" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
  type?: string
  rating?: number | string
  duration?: string
}>()
</script>

<style scoped lang="scss">
.course-card {
  @apply bg-gray-100 rounded-[8px] p-4 transition-colors duration-300 flex flex-col gap-1;
  @apply dark:bg-azure-15;

  &__title {
    @apply font-[500] text-azure-15 dark:text-[#E6EAF2];
  }
  &__desc {
    @apply text-base text-azure-15 dark:text-[#B8C2DB];
  }
  &__footer {
    @apply flex items-center gap-1 text-sm text-azure-15 font-mono dark:text-[#A1A8B8];

    * {
      @apply text-[13.3px];
    }
  }
  &__footer-type {
    @apply text-azure-15 dark:text-[#E6EAF2];
  }
  &__footer-dot {
    @apply mx-1;
  }
  &__footer-rating {
    @apply font-semibold;
  }
  &__footer-star {
    @apply text-yellow-500 text-base ml-0.5;
  }
  &__footer-duration {
    @apply text-azure-15 dark:text-[#E6EAF2];
  }
}
</style>
