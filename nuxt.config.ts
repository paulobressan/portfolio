// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/main.css", "bootstrap-icons/font/bootstrap-icons.css"],
  modules: ["nuxt-gtag"],
  gtag: {
    id: "G-5M4Z3D5QWF",
  },
});
