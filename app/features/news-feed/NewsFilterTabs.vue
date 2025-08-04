<template>
  <div class="news-filter-tabs">
    <button
      v-for="filter in filters"
      :key="filter.value"
      :class="[
        'news-filter-tabs__item',
        { 'news-filter-tabs__item--active': filter.value === active },
      ]"
      type="button"
      @click="select(filter.value)"
    >
      {{ filter.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const filters = [
  { value: 'all', label: 'Все' },
  { value: 'updates', label: 'Обновления' },
  { value: 'new', label: 'Новые курсы' },
  { value: 'announces', label: 'Анонсы' },
  { value: 'community', label: 'Сообщество' },
]

const active = ref('all')
function select(val: string) {
  active.value = val
}
</script>

<style lang="scss" scoped>
.news-filter-tabs {
  @apply flex flex-row gap-4;
  @apply bg-white p-4 rounded-[12px] border border-solid border-grey-89;
  @apply dark:bg-azure-7 dark:border-azure-21;

  &__item {
    @apply flex items-center justify-center h-[35px] py-[9px] px-[17px] rounded-[6px] text-[13px] font-[400] bg-grey-93 outline outline-offset-0 outline-1 outline-grey-89 text-azure-15 cursor-pointer transition-colors duration-200;
    @apply dark:bg-azure-15 dark:text-grey-96 dark:outline-azure-21;

    &:hover:not(&--active) {
      @apply bg-blue-100 text-blue-700;
      @apply dark:bg-azure-67 dark:text-white;
    }

    &--active {
      @apply bg-primary outline-azure-52 outline-offset-0 text-white;
      @apply dark:bg-azure-67;
    }
  }
}
</style>
