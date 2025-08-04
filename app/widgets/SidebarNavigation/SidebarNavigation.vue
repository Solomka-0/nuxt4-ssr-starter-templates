<template>
  <nav class="sidebar-navigation">
    <div class="sidebar-navigation__title">Навигация</div>
    <ul class="sidebar-navigation__list">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="sidebar-navigation__item"
        :class="{ 'sidebar-navigation__item--active': isActive(link.to) }"
      >
        <span class="sidebar-navigation__item-icon">{{ link.icon }}</span>
        {{ link.label }}
      </NuxtLink>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

const navLinks = [
  { icon: '📊', label: 'Главная', to: '/' },
  { icon: '📝', label: 'Новости', to: '/news' },
  { icon: '🏆', label: 'Достижения', to: '/achievements' },
  { icon: '⚡', label: 'Активность', to: '/activity' },
]

function isActive(path: string) {
  // Чётко совпадает путь или начинается с path (для подстраниц)
  return route.path === path || route.path.startsWith(path + '/')
}
</script>
