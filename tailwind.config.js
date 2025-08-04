/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0D6EFD',
        grey: {
          98: '#F8F9FA',
          93: '#E9ECEF',
          46: '#6C757D',
          89: '#DEE2E6',
          96: '#F0F6FC',
        },
        azure: {
          7: '#0D1117',
          89: '#DEE2E6',
          52: '#0D6EFD',
          15: '#21262D',
          21: '#30363D',
          11: '#161B22',
          67: '#58A6FF',
        },
      },
    },
    container: {
      center: true,
      padding: '16px',
      screens: {
        sm: '100%',
        md: '90%',
        lg: '90%',
        xl: '90%', // твоя максимальная ширина
        '2xl': '90%',
      },
    },
  },
  plugins: [],
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
}
