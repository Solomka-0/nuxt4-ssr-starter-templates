<template>
  <div class="min-h-screen flex flex-col bg-white">
    <header class="w-full py-4 px-8 shadow bg-blue-50">
      <NuxtLink to="/" class="text-2xl font-bold text-blue-600 hover:underline">
        Главная
      </NuxtLink>
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <footer class="w-full py-4 px-8 text-center text-xs text-slate-400 border-t bg-blue-50">
      © 2025 – Nuxt 4 Starter
    </footer>
  </div>
</template>