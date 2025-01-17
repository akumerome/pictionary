// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', "@nuxt/ui", "@nuxtjs/tailwindcss", 'nuxt-socket-io'],
  css: ['~/assets/css/main.css'],
})