<template>
  <div class="achievements-filter">
    <button
      v-for="filter in filters"
      :key="filter.value"
      type="button"
      class="achievements-filter__item"
      :class="{ 'achievements-filter__item--active': active === filter.value }"
      @click="active = filter.value"
    >
      <span v-if="filter.icon" class="achievements-filter__item-icon">{{
        filter.icon
      }}</span>
      <span>{{ filter.label }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const filters = [
  { value: 'all', label: 'Все' },
  { value: 'study', icon: '🎓', label: 'Обучение' },
  { value: 'activity', icon: '🔥', label: 'Активность' },
  { value: 'master', icon: '🏅', label: 'Мастерство' },
  { value: 'special', icon: '🎯', label: 'Особые' },
]

const active = ref('all')
</script>

<style lang="scss" scoped>
.achievements-filter {
  @apply flex flex-row gap-4 w-full bg-white rounded-2xl p-4 border border-solid border-grey-89;
  @apply dark:bg-azure-7 dark:border-azure-21;

  &__item {
    @apply flex items-center px-4 py-1.5 rounded-[6px] text-[12.8px] font-[500] bg-grey-93 text-azure-15 border border-solid border-grey-89 transition-colors duration-200;
    @apply dark:bg-azure-15 dark:border-azure-21 dark:text-[#E6EAF2];
    cursor: pointer;
    min-width: 0;
    justify-content: center;

    &--active {
      @apply bg-primary text-white border-primary;
    }
  }
  &__item-icon {
    @apply text-[16px] mr-2;
  }
}
</style>
