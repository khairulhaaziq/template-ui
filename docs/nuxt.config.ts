export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: "@nuxt-themes/docus",

  modules: [
    // https://github.com/nuxt-modules/plausible
    "@nuxtjs/plausible",
    // https://github.com/nuxt/devtools
    "@nuxt/devtools",
    "@nuxtjs/tailwindcss",
  ],

  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg", href: "/logo.svg" }],
    },
  },

  pinceau: {
    preflight: false,
  },

  components: [
    { path: "./components/demo", extensions: ["vue"], global: true }, // import only "vue" as component files in demo folder
    "~/components",
  ],

  css: ["@/assets/css/main.css"],

  colorMode: {
    preference: "dark",
  },
  tailwindcss: {
    config: {
      content() {
        return ["./components/**/*.{vue,ts,js}", "./pages/**/*.{vue,ts,js}"];
      },
    },
  },
});
