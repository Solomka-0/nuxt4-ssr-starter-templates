<template>
  <div class="news-card" :class="news.type">
    <div class="news-card__header">
      <span
        v-if="news.badge"
        class="news-card__badge"
        :class="`news-card__badge--${news.type}`"
      >
        {{ news.badge }}
      </span>
      <span class="news-card__date">{{ news.date }}</span>
      <span v-if="news.featured" class="news-card__feature"> FEATURED </span>
    </div>
    <div class="news-card__body">
      <div class="news-card__title">
        {{ news.title }}
      </div>
      <div class="news-card__desc">
        {{ news.desc }}
      </div>
      <div class="news-card__tags">
        <span v-for="tag in news.tags" :key="tag" class="news-card__tag">{{
          tag
        }}</span>
      </div>
    </div>
    <div class="news-card__footer">
      <div class="news-card__stats">
        <span>👁‍🗨 {{ news.views }}</span>
        <span>💬 {{ news.comments }}</span>
        <span>🔥 {{ news.likes }}</span>
        <span>⭐ {{ news.rating }}</span>
      </div>
      <button class="news-card__button">
        {{ news.button }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  news: {
    type: string
    badge?: string
    date: string
    featured?: boolean
    title: string
    desc: string
    tags: string[]
    views: number
    comments: number
    likes: number
    rating: number
    button: string
  }
}>()
</script>

<style lang="scss">
.news-card {
  @apply bg-white rounded-[18px] p-7 border border-solid border-grey-89 shadow-sm w-full relative transition-colors duration-300;
  @apply dark:bg-azure-7 dark:border-azure-21;

  // Градиентная полоса для "new"
  &.new::before,
  &.community::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 4px;
    border-radius: 18px 0 0 18px;
    background: linear-gradient(180deg, #0d6efd 0%, #198754 100%);
    z-index: 2;
  }

  &.community::before {
    background: linear-gradient(180deg, #3f68f8 0%, #1b7cff 100%);
  }

  &.new,
  &.community {
    border-left: none;
    padding-left: 23px; // чтобы текст не упирался в градиент
    overflow: hidden;
  }
}

.news-card__header {
  @apply flex items-center gap-4 mb-3 min-h-[28px];
}

.news-card__badge {
  @apply inline-flex items-center justify-center font-[500] text-[12px] leading-none px-3 h-[28px] rounded-[8px] uppercase tracking-wide select-none;
  @apply bg-grey-93 text-grey-46; // дефолт, если без типа

  // Цвета по типу:
  &--new {
    @apply bg-[#1987541A] text-[#198754]; // фон светлый, текст зелёный
  }
  &--update {
    @apply bg-[#0D6EFD1A] text-[#0D6EFD]; // фон голубой, текст синий
  }
  &--announce {
    @apply bg-[#FD7E141A] text-[#FD7E14];
  }
  &--community {
    @apply bg-[#DC35451A] text-[#DC3545];
  }
}

.news-card__date {
  @apply text-grey-46 text-[13px] font-[400] ml-2;
}

.news-card__feature {
  @apply ml-auto px-2 py-1.5 text-white rounded-[4px] text-[11.2px] font-[700] uppercase;
  letter-spacing: 0.06em;
  background: linear-gradient(90deg, #0d6efd 0%, #198754 100%);
  box-shadow: 0px 2px 6px 0px #1987541a;
  border: none;
  outline: none;
  // Если нужен плавный переход для длинных слов:
  white-space: nowrap;
}

.news-card__body {
  @apply flex flex-col gap-2;
}

.news-card__title {
  @apply font-[700] text-[20.8px] leading-[1.14] text-azure-15 mt-2 mb-1;
  @apply dark:text-[#E6EAF2];
}

.news-card__desc {
  @apply font-[400] text-[17px] text-grey-46 leading-[1.4] mb-2;
  @apply dark:text-[#B8C2DB];
}

.news-card__tags {
  @apply flex flex-wrap gap-2 mb-5;
}

.news-card__tag {
  @apply px-3 py-1 bg-grey-93 text-grey-46 rounded-[4px] text-[14px] font-[500] select-none;
  @apply dark:bg-azure-15 dark:text-[#A1A8B8];
}

.news-card__footer {
  @apply flex items-center justify-between mt-5 pt-4 border-t border-solid border-azure-89;
  @apply dark:border-azure-21;
}

.news-card__stats {
  @apply flex items-center gap-5;

  .news-card__stat {
    @apply flex items-center gap-1 text-[13px] font-[400] text-grey-46 select-none;
    @apply dark:text-[#A1A8B8];

    // Иконки чуть уменьшить для баланса
    span:first-child {
      font-size: 15px;
      margin-right: 3px;
      line-height: 1;
    }
  }
}

.news-card__button {
  @apply flex items-center justify-center px-6 py-3 text-[14.4px] font-[500] bg-grey-93 text-azure-15 rounded-[6px] border border-solid border-grey-89;
  @apply transition-colors duration-200;
  @apply dark:bg-azure-15 dark:text-[#E6EAF2] dark:border-azure-21;
  min-width: 120px;
  min-height: 48px;
  line-height: 1;
  &:hover {
    @apply bg-blue-50 text-blue-700 border-blue-100;
    @apply dark:bg-azure-67 dark:text-azure-11 dark:border-azure-67;
  }
}
</style>
