<template>
  <div class="achievements-status-tabs">
    <button
      v-for="tab in tabs"
      :key="tab.value"
      type="button"
      class="achievements-status-tabs__item"
      :class="{
        'achievements-status-tabs__item--active': active === tab.value,
      }"
      @click="active = tab.value"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tabs = [
  { value: 'all', label: 'Все' },
  { value: 'incomplete', label: 'Незавершенные' },
  { value: 'received', label: 'Полученные' },
]

const active = ref('all')
</script>

<style lang="scss" scoped>
.achievements-status-tabs {
  @apply flex flex-row gap-3 w-full;

  &__item {
    @apply px-4 py-2 rounded-[7px] text-[13px] font-[500] border border-solid border-grey-89 bg-transparent text-azure-15 transition-colors duration-200;
    @apply dark:border-azure-21 dark:text-[#E6EAF2];
    cursor: pointer;
    min-width: 0;
    justify-content: center;

    &--active {
      @apply bg-primary text-white border-primary;
    }
  }
}
</style>
