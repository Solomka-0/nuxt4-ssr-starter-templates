<template>
  <div
    class="achievement-card"
    :class="[
      `achievement-card--${achievement.locked ? 'gray' : achievement.border}`,
      { 'achievement-card--locked': achievement.locked },
    ]"
  >
    <!-- Badge иконка -->
    <span
      v-if="achievement.badge"
      class="achievement-card__badge"
      :class="`achievement-card__badge--${achievement.badgeColor || achievement.border}`"
    >
      {{ achievement.badge }}
    </span>
    <div class="achievement-card__icon">
      <template v-if="!achievement.locked">{{ achievement.icon }}</template>
      <template v-else>🔒</template>
    </div>
    <div class="achievement-card__title">{{ achievement.title }}</div>
    <div class="achievement-card__desc">{{ achievement.desc }}</div>

    <!-- Progressbar -->
    <div v-if="achievement.progress" class="achievement-card__progress">
      <div class="achievement-card__progress-bar-bg">
        <div
          class="achievement-card__progress-bar"
          :class="`achievement-card__progress-bar--${achievement.locked ? 'gray' : achievement.progress.color || achievement.border}`"
          :style="{ width: achievement.progress.value + '%' }"
        />
      </div>
      <span class="achievement-card__progress-value">{{
        achievement.progress.label
      }}</span>
    </div>

    <!-- XP -->
    <div
      class="achievement-card__xp"
      :class="[
        `achievement-card__xp--${achievement.locked ? 'gray' : achievement.border}`,
        { 'achievement-card__xp--locked': achievement.locked },
      ]"
    >
      {{ achievement.xp }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  achievement: {
    icon: string
    title: string
    desc: string
    xp: string
    badge?: string
    badgeColor?: 'blue' | 'green'
    border?: 'blue' | 'green' | 'orange' | 'gray'
    locked?: boolean
    progress?: {
      value: number // 0-100
      label: string // “8/10”, “30 дней”, etc.
      color?: 'blue' | 'green' | 'orange' | 'gray'
    }
  }
}>()
</script>

<style lang="scss" scoped>
.achievement-card {
  @apply relative flex flex-col items-center justify-between rounded-[12px] border border-solid p-8 w-full min-h-[210px] transition;
  @apply bg-white dark:bg-azure-7 dark:border-azure-21;
  border-width: 2px;

  &--blue {
    border-color: #3f68f8;
  }
  &--green {
    border-color: #198754;
  }
  &--orange {
    border-color: #fd7e14;
  }
  &--gray {
    border-color: #dee2e6;
    @apply dark:border-azure-21;
  }

  &--locked {
    @apply border-[#DEE2E6] bg-[#F8F9FA];
    .achievement-card__icon {
      opacity: 0.4;
    }
    .achievement-card__title,
    .achievement-card__desc,
    .achievement-card__progress-value,
    .achievement-card__xp {
      color: #a1a8b8 !important;
    }
    .achievement-card__xp {
      @apply font-[500];
    }
    .achievement-card__progress-bar {
      background: #dee2e6 !important;
    }

    // Для dark — другой фон!
    @apply dark:bg-[#181B20]; // или #181B20 или #16181D (уточни из макета)
    // Если темнее – используй #16181D
    .dark & {
      border-color: #30363d !important; // azure-21 (по tailwind config)
    }
  }

  &__badge {
    @apply absolute top-[8px] right-[12px] text-white text-[11.2px] font-[700] px-3 py-1.5 rounded-[4px] z-10 shadow-sm select-none;
    letter-spacing: 0.07em;
    transition: background 0.5s;
    &--blue,
    &--green {
      background: linear-gradient(62.4deg, #0d6efd 0%, #198754 100%);
    }
  }

  &__icon {
    @apply text-[38px] mb-7 mt-4 leading-none select-none;
    opacity: 1;
    transition: opacity 0.2s;
  }

  &__title {
    @apply text-center font-[700] text-[18px] mb-1 text-azure-15 dark:text-[#E6EAF2];
  }
  &__desc {
    @apply text-center text-grey-46 text-[14px] font-[400] mb-4 dark:text-[#A1A8B8];
  }

  &__progress {
    @apply w-full flex flex-col items-center;
    gap: 0.5rem;
    margin-top: 2px;
  }
  &__progress-bar-bg {
    @apply w-full h-[5px] rounded-[5px] bg-grey-93 relative mb-1 overflow-hidden;
  }
  &__progress-bar {
    @apply h-full rounded-[5px] absolute top-0 left-0 transition-all duration-300;
    // Цвет прогресса зависит от типа
    &--blue {
      background: linear-gradient(90deg, #3f68f8, #1b7cff);
    }
    &--green {
      background: linear-gradient(90deg, #198754, #43e794);
    }
    &--orange {
      background: linear-gradient(90deg, #fd7e14, #ffa940);
    }
    &--gray {
      background: #dee2e6;
    }
  }
  &__progress-value {
    @apply w-full text-center text-grey-46 text-[13px] font-[500] mt-[1px] dark:text-[#A1A8B8];
  }

  &__xp {
    @apply text-center font-[500] text-[15.5px] mt-2 tracking-widest;
    letter-spacing: 0.04em;
    // Цвет XP зависит от border
    color: #198754;
    &--blue {
      color: #3f68f8;
    }
    &--green {
      color: #198754;
    }
    &--orange {
      color: #fd7e14;
    }
    &--gray {
      color: #6c757d;
    }
    &--locked {
      @apply text-grey-46 dark:text-[#6C757D];
    }
  }
}
</style>
