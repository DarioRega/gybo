// eslint-disable-next-line nuxt/no-cjs-in-config
const axios = require('axios')
// eslint-disable-next-line nuxt/no-cjs-in-config
const dotenv = require('dotenv')
dotenv.config()

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: true,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0', // default: localhost
  },
  serverMiddleware: ['~/api/contact'],
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'GYBO',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      { property: 'og:site_name', content: 'Gybo' },
      { property: 'og:title', content: 'Gybo - Grow your business online' },
      { property: 'og:url', content: 'https://gybo.ch' },
      // { property: 'og:image', itemprop:'image', content: '/partnerstext.png', },
      { property: 'og:type', content: 'website' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['aos/dist/aos.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/components',
    '~/plugins/carousel.js',
    '~/plugins/form-validation',
    { src: '~/plugins/aos.js', mode: 'client' },
  ],
  env: {
    STORYBLOK_ACCESS_TOKEN: process.env.STORYBLOK_ACCESS_TOKEN,
    GYBO_CONTACT: process.env.GYBO_CONTACT,
    CONTACT_URL: process.env.CONTACT_URL,
    GMAIL_ADDRESS: process.env.GMAIL_ADDRESS,
    GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,
    GMAIL_HOST: process.env.GMAIL_HOST,
    GMAIL_PORT: process.env.GMAIL_PORT,
    MAIL_ADDRESS: process.env.MAIL_ADDRESS,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD,
    MAIL_HOST: process.env.MAIL_HOST,
    MAIL_PORT: process.env.MAIL_PORT,
  },
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: {
    dirs: ['~/components'],
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/dotenv',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://i18n.nuxtjs.org/setup
    'nuxt-i18n',
    // Doc: https://github.com/nuxt-community/svg-sprite-module
    '@nuxtjs/svg-sprite',
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        cacheProvider: 'memory',
      },
    ],
  ],
  axios: {
    proxy: true, // Can be also an object with default options
  },

  proxy: {
    '/api/contact/':
      process.env.CONTACT_URL || 'http://localhost:3000/api/contact',
  },
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    analyze: false,
  },
  loading: false,
  /*
   ** i18n configuration
   ** See https://i18n.nuxtjs.org/setup
   */
  i18n: {
    locales: [{ code: 'fr', iso: 'fr-CH', name: 'Fran??ais' }],
    defaultLocale: 'fr',
  },

  /**
   * Tailwind
   */
  tailwindcss: {
    cssPath: '~/assets/scss/tailwind.scss',
  },
  /*
   ** Sprite SVG
   */
  svgSprite: {
    input: '~/assets/svg/',
  },
  sitemap: {
    hostname: 'https://gybo,ch',
    // lastmod: '2020-07-29',
    gzip: true,
    exclude: ['**/404'],
    // i18n: {
    //   locales: ['en', 'fr'],
    //   routesNameSeparator: '___',
    // },
  },
  generate: {
    routes(callback) {
      const token = process.env.STORYBLOK_ACCESS_TOKEN
      const version = 'published'
      let cacheVersion = 0

      const toIgnore = ['home', 'en/settings']

      // other routes that are not in Storyblok with their slug.
      const routes = ['/'] // adds / directly

      // Load space and receive latest cache version key to improve performance
      axios
        .get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`)
        .then((spaceRes) => {
          // timestamp of latest publish
          cacheVersion = spaceRes.data.space.version

          // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
          axios
            .get(
              `https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cacheVersion}&per_page=100`
            )
            .then((res) => {
              Object.keys(res.data.links).forEach((key) => {
                if (!toIgnore.includes(res.data.links[key].slug)) {
                  routes.push('/' + res.data.links[key].slug)
                }
              })

              callback(null, routes)
            })
        })
    },
  },
}
