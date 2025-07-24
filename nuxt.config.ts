// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  pages: true,
  css: ['@/assets/scss/main.scss'],
  colorMode: {
    classSuffix: '', // чтобы класс был именно 'dark'
  },
})
