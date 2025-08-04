<template>
  <div class="news-page">
    <div class="news-page__search">
      <NewsSearchInput />
    </div>
    <div class="news-page__filters">
      <NewsFilterTabs />
    </div>
    <div class="news-page__list">
      <NewsList />
    </div>
    <div class="news-page__load-more">
      <NewsLoadMore />
    </div>
  </div>
</template>

<script lang="ts" setup>
import NewsSearchInput from '~/features/news-feed/NewsSearchInput.vue'
import NewsFilterTabs from '~/features/news-feed/NewsFilterTabs.vue'
import NewsList from '~/features/news-feed/NewsList.vue'
import NewsLoadMore from '~/features/news-feed/NewsLoadMore.vue'
</script>

<style lang="scss">
.news-page {
  @apply flex flex-col gap-2 w-full mx-auto;

  &__title {
    @apply text-[28px] font-semibold mb-2 text-azure-15 dark:text-[#E6EAF2];
  }

  &__search {
    @apply mb-1;
  }

  &__filters {
    @apply mb-2;
  }

  &__list {
    @apply flex flex-col gap-6;
  }

  &__load-more {
    @apply mt-2 flex justify-center;
  }
}
</style>
