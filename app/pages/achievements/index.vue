<template>
  <div class="achievements-page">
    <div>
      <h1 class="achievements-page__title">Достижения</h1>
      <div class="achievements-page__subtitle">
        Ваши успехи и награды за обучение
      </div>
    </div>

    <!-- Статистика -->
    <AchievementsStats class="achievements-page__stats" />

    <!-- Фильтры -->
    <AchievementsFilter class="achievements-page__filter" />

    <!-- Недавние достижения -->
    <section class="achievements-page__recent">
      <h2 class="achievements-page__section-title">
        <span class="achievements-page__section-icon">🕑</span>
        Недавние достижения
      </h2>
      <RecentAchievements />
    </section>

    <!-- Все достижения -->
    <section class="achievements-page__all">
      <div class="achievements-page__section-headnote">
        <h2 class="achievements-page__section-title">
          <span class="achievements-page__section-icon">🏆</span>
          Все достижения
        </h2>
        <AchievementsStatusTabs class="achievements-page__status-tabs" />
      </div>
      <AchievementsList />
    </section>
  </div>
</template>

<script setup lang="ts">
import AchievementsStats from '~/widgets/AchievementsStats/AchievementsStats.vue'
import AchievementsFilter from '~/features/AchievementsFilter/AchievementsFilter.vue'
import RecentAchievements from '~/widgets/RecentAchievements/RecentAchievements.vue'
import AchievementsList from '~/widgets/AchievementsList/AchievementsList.vue'
import AchievementsStatusTabs from '~/features/AchievementsStatusTabs/AchievementsStatusTabs.vue'
</script>

<style lang="scss">
.achievements-page {
  @apply flex flex-col gap-7 w-full;

  &__title {
    @apply text-[32px] font-bold text-azure-15;
    @apply dark:text-[#E6EAF2];
  }
  &__subtitle {
    @apply text-grey-46 text-[16px] font-[400] mt-1 dark:text-[#A1A8B8];
  }
  &__stats {
    @apply flex gap-6;
  }

  &__filter {
  }

  &__section-title {
    @apply flex items-center gap-2 text-[19.2px] font-[700];
    @apply dark:text-[#E6EAF2];
  }

  &__section-headnote {
    @apply w-full flex items-center justify-between;
  }

  &__section-icon {
    @apply text-[19.2px];
  }

  &__recent {
    @apply flex flex-col gap-4;
  }

  &__all {
    @apply flex flex-col gap-4;
  }

  &__status-tabs {
    @apply items-end justify-end;
  }
}
</style>
