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
        treeshake: true
      }
    ]
  ],
  modern: true
};
