export default defineAppConfig({
  name: 'Название проекта',
  description: 'Краткое описание',
  theme: {
    primary: '#2563eb',
    secondary: '#818cf8',
    dark: false,
  },
  seo: {
    defaultTitle: 'Название проекта — краткое описание',
    description: 'Расширенное описание для поисковых систем, 150-200 символов.',
    keywords: 'ключевые, слова, через, запятую',
  },
  pwa: {
    enabled: true,
    manifest: {
      name: 'Название проекта',
      short_name: 'Проект',
      theme_color: '#2563eb',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/',
      icons: [
        {
          src: '/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },
  layout: {
    default: 'default',
    error: 'error',
  },
  dateFormat: 'DD.MM.YYYY',
  apiBase: '/api',
  featureFlags: {
    enableBeta: false,
    enableFeedback: true,
  },
})
