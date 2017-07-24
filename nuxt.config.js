module.exports = {
  // offline: {
  //   publicPath: '/',
  //   ServiceWorker: {
  //     output: '../service-worker.js',
  //     navigateFallbackURL: '/',
  //     publicPath: '/service-worker.js'
  //   }
    
  // },
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Baby Bennett Web Site' },
      { name: 'theme-color', content: 'aqua' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'application-name', content: 'Baby Bennett' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-title', content: 'Baby Bennett' },
      { name: 'msapplication-TileImage', content: '/images/manifest/elephantAppIcon.png' },
      { name: 'msapplication-TileColor', content: 'aqua' },
      { name: 'msapplication-tap-highlight', content: 'no' },
      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/manifest/elephantAppIcon.png' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'apple-touch-icon', href: '/images/manifest/elephantAppIcon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:500,900'},
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/images/manifest/elephantAppIcon.png' },
      { rel: 'apple-touch-icon', sizes: '96x96', href: '/images/manifest/elephantAppIcon.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/images/manifest/elephantAppIcon.png' },
      { rel: 'apple-touch-icon', sizes: '192x192', href: '/images/manifest/elephantAppIcon.png' },
    ],
    script: [
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js', rel:'preload'},
      {src: '/service-worker-registration.js'},
    ]
  },
  /*
  ** Global CSS
  */
  css: [{ src: '~assets/css/app.styl', lang: 'styl' }, '~assets/css/main.css' ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'slategray' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [
      'vuetify'
    ]
  },
  generate: {
    routeParams: {
      '/pictures/:slug': [
        { slug: "sonagram"},
        { slug: "announcement"} 
      ] 
    }
  },
  plugins: [
    '~plugins/twodigits.js',
    '~plugins/vuetify.js',
    // { src: '~plugins/offline.js', ssr: false }
  ]
}
