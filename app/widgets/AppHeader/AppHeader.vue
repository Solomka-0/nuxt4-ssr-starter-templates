<template>
  <div class="app-header">
    <div class="w-full">
      <div class="container app-header__body">
        <a class="app-header__logo" href="/">LEVEL CRAFT</a>
        <nav class="app-header__nav">
          <a class="app-header__link app-header__link--active" href="/"
            >Главная</a
          >
          <a class="app-header__link" href="/skills">Скиллы</a>
          <a class="app-header__link" href="/career">Карьера</a>
          <a class="app-header__link" href="/help">Помощь</a>
        </nav>
        <div class="app-header__profile flex items-center gap-3">
          <ThemeSwitcher />
          <button class="app-header__profile-btn">Иван И.</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ThemeSwitcher from '~/widgets/ThemeSwitcher/ThemeSwitcher.vue'
</script>
