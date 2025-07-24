<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen transition-colors duration-300 text-center px-4"
  >
    <h1
      class="text-5xl md:text-7xl font-black text-blue-600 dark:text-blue-400 drop-shadow mb-4"
    >
      Главная страница
    </h1>
    <p
      class="text-xl md:text-2xl mt-2 text-slate-700 dark:text-slate-300 font-semibold"
    >
      Приложение успешно запущено!
    </p>
    <div class="mt-2 text-base md:text-lg text-slate-500 dark:text-slate-400">
      Если вы видите этот экран — Nuxt настроен корректно.
    </div>
    <NuxtLink
      to="/event"
      class="mt-10 px-8 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-400 dark:text-neutral-900 font-bold text-lg"
    >
      К событиям
    </NuxtLink>
  </div>
</template>
