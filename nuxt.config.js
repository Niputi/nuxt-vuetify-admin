module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "material-ui",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js + Vuetify.js project"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  modules: [
    "@nuxtjs/pwa",
    "nuxt-webfontloader",
    [
      "@nuxtjs/vuetify",
      {
        customVariables: ["~/assets/style/styles.sass"],
        treeshake: true,
        theme: {
          dark: false,
          themes: {
            light: {
              primary: "#ee44aa",
              secondary: "#424242",
              accent: "#82B1FF",
              error: "#FF5252",
              info: "#2196F3",
              success: "#4CAF50",
              warning: "#FFC107"
            }
          }
        }
      }
    ]
  ],
  modern: true
};
