const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/learning-romanian/' : '/',
  pwa: {
    name: 'Learning Romanian', // Название вашего приложения
    themeColor: '#ba4d4d', // Цвет темы
    msTileColor: '#000000', // Цвет плитки для Windows
    appleMobileWebAppCapable: 'yes', // Разрешение для мобильных устройств Apple
    appleMobileWebAppStatusBarStyle: 'black', // Стиль строки состояния для мобильных устройств Apple

    // настройки манифеста PWA
    manifestOptions: {
      background_color: '#ba4d4d'
    },

    // Настройки Service Worker
    workboxOptions: {
      skipWaiting: true, // Принудительное обновление Service Worker
      clientsClaim: true, // Захват всех клиентов сразу после активации
    }
  }
})
