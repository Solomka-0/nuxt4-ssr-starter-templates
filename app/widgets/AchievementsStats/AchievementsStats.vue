<template>
  <div class="achievements-stats">
    <div class="achievements-stats__card">
      <span class="achievements-stats__icon">🏆</span>
      <span class="achievements-stats__value">24</span>
      <span class="achievements-stats__label">Всего достижений</span>
    </div>
    <div class="achievements-stats__card">
      <span class="achievements-stats__icon">⭐</span>
      <span class="achievements-stats__value achievements-stats__value--xp"
        >1,245</span
      >
      <span class="achievements-stats__label">Очков опыта</span>
    </div>
    <div class="achievements-stats__card">
      <span class="achievements-stats__icon">🎯</span>
      <span class="achievements-stats__value achievements-stats__value--percent"
        >50%</span
      >
      <span class="achievements-stats__label">Процент</span>
    </div>
    <div class="achievements-stats__card">
      <span class="achievements-stats__icon">📅</span>
      <span class="achievements-stats__value achievements-stats__value--streak"
        >7</span
      >
      <span class="achievements-stats__label">Дней подряд</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.achievements-stats {
  @apply flex flex-wrap gap-4 w-full;

  &__card {
    @apply flex flex-col items-center justify-center bg-white rounded-[16px] gap-2 border border-solid border-grey-89 px-8 py-8;
    @apply dark:bg-azure-7 dark:border-azure-21;
    min-width: 210px;
    flex: 1 1 220px;
    max-width: 100%;
  }

  &__icon {
    @apply text-[29px] mb-1;
  }
  &__value {
    @apply font-[700] text-[27px] leading-none mb-1 mt-1 text-primary;

    &--xp {
      @apply text-green-600;
    }
    &--percent {
      @apply text-orange-500;
    }
    &--streak {
      @apply text-red-500;
    }
  }
  &__label {
    @apply text-grey-46 text-[15px] font-[400] dark:text-[#A1A8B8];
    margin-top: 1px;
  }
}
</style>
