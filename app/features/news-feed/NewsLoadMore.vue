<template>
  <button class="news-load-more" type="button">
    Загрузить больше новостей
  </button>
</template>

<style lang="scss" scoped>
.news-load-more {
  @apply flex items-center justify-center w-[284px] h-[55px] mx-auto my-4
  bg-white text-azure-15 text-[16px] font-[500] rounded-[8px]
  border-2 border-solid border-azure-89 transition-colors duration-200
  select-none;
  padding: 18px 34px;
  line-height: 1.1;

  &:hover,
  &:focus-visible {
    @apply bg-blue-50 text-blue-700 border-blue-100;
    @apply dark:bg-azure-67 dark:text-azure-11 dark:border-azure-67;
  }

  @apply dark:bg-azure-7 dark:text-[#fff] dark:border-azure-21;
}
</style>
