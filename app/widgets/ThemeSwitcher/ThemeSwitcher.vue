<template>
  <button
    class="theme-switcher"
    :aria-label="isDark ? 'Включить светлую тему' : 'Включить тёмную тему'"
    @click="toggleTheme"
  >
    <span v-if="isDark">🌞</span>
    <span v-else>🌜</span>
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode ? useColorMode() : null // если nuxt-color-mode
const isDark = computed(() => colorMode?.value === 'dark')
function toggleTheme() {
  if (!colorMode) return
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped>
.theme-switcher {
  @apply rounded-xl px-3 py-2 bg-blue-50 hover:bg-blue-200 dark:bg-slate-900 dark:hover:bg-neutral-700 text-blue-600 dark:text-blue-400 font-medium shadow transition-all duration-300;
  font-size: 1.2rem;
  line-height: 1;
}
</style>
