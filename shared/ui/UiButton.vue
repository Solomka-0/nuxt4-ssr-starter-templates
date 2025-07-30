<template>
  <button class="ui-button ui-button--main">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>
<style scoped>
.ui-button {
  &--main {
    @apply cursor-pointer border border-solid border-grey-89 rounded-[6px] py-[13px] px-[50px] font-medium;
    @apply bg-white text-azure-15 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition;

    @apply dark:bg-azure-15 dark:text-[#E6EAF2] dark:border-azure-21 dark:hover:bg-[#23242C] dark:hover:border-[#3691FA] dark:hover:text-[#61A5FB];
  }
}
</style>
