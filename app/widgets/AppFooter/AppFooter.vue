<template>
  <footer class="app-footer">
    <div class="app-footer__content">
      <div class="app-footer__col">
        <div class="app-footer__title">Поддержка</div>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Обратная связь</a></li>
          <li><a href="#">Техническая поддержка</a></li>
        </ul>
      </div>
      <div class="app-footer__col">
        <div class="app-footer__title">Компания</div>
        <ul>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Блог</a></li>
          <li><a href="#">Карьера</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </div>
      <div class="app-footer__col">
        <div class="app-footer__title">Правовая информация</div>
        <ul>
          <li><a href="#">Политика конфиденциальности</a></li>
          <li><a href="#">Пользовательское соглашение</a></li>
          <li><a href="#">Условия использования</a></li>
        </ul>
      </div>
    </div>
    <div class="app-footer__bottom">
      <hr class="app-footer__divider" />
      <div class="app-footer__copyright">
        © 2025 LEVEL CRAFT. Все права защищены.
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.app-footer {
  @apply pt-6 pb-2 px-8 select-none border-t border border-solid font-sans;
  @apply border-grey-89 bg-grey-98;
  @apply dark:bg-azure-11 dark:border-azure-21;

  &__content {
    @apply flex flex-row justify-evenly mb-2 max-w-[1865px] mx-auto;
  }

  &__col {
    @apply flex flex-col items-start gap-2 min-w-[200px];
  }

  &__title {
    @apply font-bold text-[16px] mb-2 dark:text-[#E6EAF2];
  }

  ul {
    @apply space-y-[8px];
  }

  li {
    @apply text-[#7A828F] text-[14px];
    line-height: 1.3;
    a {
      @apply hover:text-[#61A5FB] transition;
      text-decoration: none;
    }
  }

  &__bottom {
    @apply mt-4 pt-2 flex flex-col items-center;
  }

  &__divider {
    @apply w-full border-t dark:border-azure-21 mb-3;
  }

  &__copyright {
    @apply text-[#7A828F] text-[13px] text-center mt-[16px];
    letter-spacing: 0.02em;
  }
}
</style>
