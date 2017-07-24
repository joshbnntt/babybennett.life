const api = require('./api')

module.exports = {
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
      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/manifest/elephantAppIcon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:500,900'},
    ],
    script: [
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js', rel:'preload'},
    ]
  },
  modules: [
    ['@nuxtjs/pwa', {icon: {iconSrc: './static/images/manifest/elephantAppIcon.png'}, manifest: {name: 'Baby Bennett', background_color: 'aqua'}}]
  ],
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
    routes: function () {
      const albums = api.albums.map(album => {
        return '/pictures/' + album.slug
      })
      const pictures = api.albums.map(album => {
        return album.pictures.map(p => {
          return '/pictures/' + album.slug + '/' + p.name
        })
      })
      return [
        ...albums,
        ...[].concat.apply([], pictures)
      ]
    }
  },
  plugins: [
    '~plugins/twodigits.js',
    '~plugins/vuetify.js'
  ]
}
