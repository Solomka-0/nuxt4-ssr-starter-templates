<template>
  <form class="news-search" @submit.prevent>
    <span class="news-search__icon"> 🔍 </span>
    <input
      v-model="query"
      class="news-search__input"
      type="text"
      placeholder="Поиск по новостям, курсам, тегам..."
      autocomplete="off"
    />
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const query = ref('')
</script>

<style lang="scss" scoped>
.news-search {
  @apply flex items-center w-full h-[53px] bg-white rounded-[18px] border border-solid border-azure-89 pl-4 pr-6;
  @apply transition-colors duration-300;
  @apply dark:bg-azure-7 dark:border-azure-21;

  &__icon {
    @apply text-[16px];
    @apply flex items-center justify-center mr-2 min-w-[26px] min-h-[26px];
    svg {
      @apply w-[26px] h-[26px] block;
    }
  }

  &__input {
    @apply w-full h-full bg-transparent border-none outline-none text-[14.4px] font-[400] text-grey-46 placeholder:text-grey-46;
    @apply dark:text-[#B8C2DB] dark:placeholder:text-[#7A828F];
    letter-spacing: 0.05em;
    font-family: inherit;
    // убирает лишние внутренние отступы
    padding: 0;
  }
}
</style>
