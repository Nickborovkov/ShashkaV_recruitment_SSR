export default {
  head: {
    title: 'shashka_v_recruitment_ssr',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    './assets/scss/main.scss'
  ],
    components: true,
  modules: [
    'nuxtjs-mdi-font',
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: 'https://api.telegram.org/bot5129181542:AAEVw_cbrqs0i32-rMY0Be72m97HUghEjJo/'
  },
  router: {
    linkActiveClass: 'custom-active-link',
    linkExactActiveClass: 'custom-exact-active-link',
  }
}
