<template>
  <div class="flex flex-col items-center justify-center h-screen text-center">
    <h1 class="text-6xl font-bold text-red-600">{{ error.statusCode || 500 }}</h1>
    <p class="text-xl mt-4">{{ error.message || 'Произошла неизвестная ошибка.' }}</p>
    <NuxtLink to="/" class="mt-6 text-primary underline">На главную</NuxtLink>
  </div>
</template>

<script setup>
const { error } = defineProps(['error'])
</script>