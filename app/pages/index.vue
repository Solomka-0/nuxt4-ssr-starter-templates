<template>
  <div class="dashboard-page">
    <h1 class="dashboard-page__title">Добро пожаловать, Иван!</h1>
    <div class="dashboard-page__stats">
      <StatsActivityCard />
      <StatsAchievementsCard />
      <StatsSkillCard />
      <DailyTestCard />
    </div>
    <RecommendationsBlock />
  </div>
</template>

<script lang="ts" setup>
import StatsActivityCard from '~/widgets/StatsActivityCard/StatsActivityCard.vue'
import StatsAchievementsCard from '~/widgets/StatsAchievementsCard/StatsAchievementsCard.vue'
import StatsSkillCard from '~/widgets/StatsSkillCard/StatsSkillCard.vue'
import DailyTestCard from '~/widgets/DailyTestCard/DailyTestCard.vue'
import RecommendationsBlock from '~/widgets/RecommendationsBlock/RecommendationsBlock.vue'
</script>

<style lang="scss">
.dashboard-page {
  @apply flex flex-col gap-8;

  &__title {
    @apply text-[32px] font-medium text-azure-15 dark:text-[#E6EAF2];
  }

  &__stats {
    @apply grid lg:grid-cols-3 gap-8;
  }
}
</style>
