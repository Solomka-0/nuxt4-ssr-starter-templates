<template>
  <div
    class="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-br from-blue-50 to-slate-100"
  >
    <h1 class="text-6xl font-bold text-blue-600 mb-2">Главная страница</h1>
    <p class="text-xl mt-4 text-slate-700">Приложение успешно запущено!</p>
    <div class="mt-4 text-base text-slate-500">
      Если вы видите этот экран — Nuxt настроен корректно.
    </div>
    <NuxtLink
      to="/event"
      class="mt-8 px-6 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
    >
      К событиям
    </NuxtLink>
  </div>
</template>
