<template>
  <div class="ui-progress-bar">
    <div
      class="ui-progress-bar__progress"
      :style="{ width: props.progress + '%' }"
    />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    progress?: number
  }>(),
  {
    progress: 0,
  },
)
</script>

<style scoped>
.ui-progress-bar {
  @apply w-full h-3 rounded-full overflow-hidden;
  @apply bg-grey-93 dark:bg-azure-21;

  &__progress {
    @apply bg-primary h-full rounded-full transition-all duration-300;
    @apply dark:bg-azure-67;
  }
}
</style>
