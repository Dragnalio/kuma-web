export default {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:8000'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'kuma-web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://trxrnn.github.io/trxrnn/css/fonts/proxima-nova/fonts.min.css' } // Proxima Nova font
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/style.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.baseUrl
  },

  router: {
    middleware: ['auth']
  },

  auth: {
    // Options
    strategies: {
      local: {
        endpoints: {
          login: { url: '/api/v1/login', method: 'post', propertyName: 'access_token' },
          user: { url: '/api/v1/user', method: 'get', propertyName: false } // It can be false to directly use API response
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  server: {
    host: '0.0.0.0'
  }
}
