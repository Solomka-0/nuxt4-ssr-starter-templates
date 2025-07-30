<template>
  <li class="activity-feed-item">
    <span class="activity-feed-item__icon">{{ icon }}</span>
    <div class="activity-feed-item__content">
      <div class="activity-feed-item__text">{{ text }}</div>
      <div class="activity-feed-item__time">{{ time }}</div>
    </div>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  text: string
  time: string
}>()
</script>

<style scoped>
.activity-feed-item {
  @apply flex items-start gap-4 py-4;

  &:not(:last-child) {
    @apply border-b border-solid border-azure-89 dark:border-azure-21;
  }

  &__icon {
    @apply flex items-center justify-center rounded-full bg-primary w-10 h-10 text-[19px] text-white mt-1 dark:bg-azure-67 dark:text-azure-11;
    flex-shrink: 0;
  }

  &__content {
    @apply flex flex-col;
  }

  &__text {
    @apply font-[500] leading-[25px] text-lg text-azure-15 dark:text-[#E6EAF2];
  }

  &__time {
    @apply text-grey-46 text-[13px] mt-0.5 font-[400] dark:text-[#8A8F99];
  }
}
</style>
