import axios from 'axios'

export const http = axios.create({
  baseURL: '/api',
  timeout: 10000,
})

// Пример interceptor-а (авторизация, логирование, refresh)
http.interceptors.request.use((config) => {
  // Можно добавить токен
  // config.headers.Authorization = `Bearer ${getToken()}`
  return config
})

http.interceptors.response.use(
  (response) => response,
  (error) => {
    // Глобальная обработка ошибок
    // Можно логировать или делать автоматический refresh токена
    return Promise.reject(error)
  },
)
