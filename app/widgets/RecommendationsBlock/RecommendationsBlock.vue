<template>
  <div class="recommendations-block">
    <div class="recommendations-block__title">
      <span> Рекомендуемые курсы </span>
      <span> 💡 </span>
    </div>
    <div class="recommendations-block__body">
      <CourseCard type="Frontend" :rating="4.8" duration="120 мин">
        <template #title> React Hooks </template>
        <div>Углубленное изучение хуков React для современной разработки</div>
      </CourseCard>
      <CourseCard type="Backend" :rating="4.9" duration="180 мин">
        <template #title> Node.js API </template>
        <div>Создание RESTful API с использованием Node.js и Express</div>
      </CourseCard>
      <CourseCard type="DevOps" :rating="4.7" duration="90 мин">
        <template #title> Docker для разработчиков </template>
        <div>Контейнеризация приложений и основы DevOps</div>
      </CourseCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import CourseCard from '~/entities/CourseCard/CourseCard.vue'
</script>
<style scoped>
.recommendations-block {
  @apply bg-white p-8 rounded-[12px] border border-solid border-grey-89 flex flex-col justify-between gap-8 transition-colors duration-300;
  @apply dark:bg-azure-7 dark:border-azure-21;

  &__title {
    @apply w-full flex justify-between items-center mb-2;
    * {
      @apply font-[500] text-[18px] text-azure-15 dark:text-[#E6EAF2];
    }
  }

  &__body {
    @apply grid lg:grid-cols-3 gap-8;
  }
}
</style>
