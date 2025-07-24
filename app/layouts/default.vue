<template>
  <div
    class="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-sky-50 to-emerald-50 dark:bg-gradient-to-br dark:from-neutral-950 dark:via-slate-900 dark:to-neutral-900 transition-colors duration-300"
  >
    <header class="w-full py-5 px-8 flex justify-between items-center">
      <NuxtLink
        to="/"
        class="text-2xl font-bold text-blue-600 hover:underline dark:text-blue-400 transition-colors"
      >
        Главная
      </NuxtLink>
      <button
        class="rounded-xl px-5 py-2 bg-blue-50 hover:bg-blue-200 dark:bg-slate-950 dark:hover:bg-neutral-700 text-blue-600 dark:text-blue-400 font-medium shadow transition-all"
        @click="
          $colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'
        "
      >
        Переключить тему
      </button>
    </header>
    <main class="flex-1 px-4 md:px-0 py-6">
      <slot />
    </main>
    <footer
      class="w-full py-4 px-8 text-center text-xs text-slate-500 border-t bg-white/60 dark:bg-neutral-900/80 shadow"
    >
      © 2025 – Nuxt 4 Starter
    </footer>
  </div>
</template>
