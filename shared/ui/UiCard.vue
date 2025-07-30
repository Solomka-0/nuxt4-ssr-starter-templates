<template>
  <div
    class="ui-card"
    :class="{
      'ui-card--outlined': outlined,
      'ui-card--hoverable': hoverable,
      'ui-card--compact': compact,
    }"
  >
    <div class="ui-card__title">
      <slot name="title" />
    </div>
    <div class="ui-card__body">
      <slot />
    </div>
    <slot name="postfix" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  outlined?: boolean // обводка (по умолчанию true)
  hoverable?: boolean // подсветка при наведении
  compact?: boolean // уменьшенные внутренние отступы
}>()
</script>

<style lang="scss" scoped>
.ui-card {
  @apply flex flex-col justify-between gap-[42px] hover:shadow-md;
  @apply bg-white rounded-[12px] border border-solid border-grey-89 p-[25px] transition-colors duration-300;
  @apply dark:bg-azure-7 dark:border-azure-21;

  &__title {
    @apply flex justify-between items-center text-azure-15 dark:text-[#E6EAF2];
    * {
      @apply font-[500];
    }
  }

  &__body {
    @apply dark:text-[#D5DBE9];
  }

  &--outlined {
    @apply border-gray-200 dark:border-azure-21;
  }
  &--hoverable:hover {
    @apply shadow-lg border-blue-100 dark:border-[#61A5FB];
    border-color: #dbeafe;
  }
  &--compact {
    @apply px-4 py-3;
  }
}
</style>
