// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-monaco-editor',
  ],
  pages: true,
  css: ['@/assets/tailwind.css', '@/assets/scss/main.scss'],
  colorMode: {
    classSuffix: '',
  },
  monacoEditor: {
    locale: 'ru',
    componentName: {
      codeEditor: 'MonacoEditor',
      diffEditor: 'MonacoDiffEditor',
    },
  },
})
