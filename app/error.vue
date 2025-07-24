<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-sky-50 to-emerald-50 dark:bg-gradient-to-br dark:from-neutral-950 dark:via-slate-900 dark:to-neutral-900 transition-colors duration-300 text-center"
  >
    <h1
      class="text-7xl font-black text-blue-600 dark:text-blue-400 drop-shadow-lg mb-4"
    >
      {{ error.statusCode || 500 }}
    </h1>
    <p class="text-2xl mt-2 text-slate-700 dark:text-slate-300 font-semibold">
      {{ error.message || 'Произошла неизвестная ошибка.' }}
    </p>
    <NuxtLink
      to="/"
      class="mt-8 px-8 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-400 dark:text-neutral-900 font-bold text-lg"
    >
      На главную
    </NuxtLink>
  </div>
</template>

<script setup>
const { error } = defineProps(['error'])
</script>
