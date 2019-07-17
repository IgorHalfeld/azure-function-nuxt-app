module.exports = {
  mode: 'universal',
  head: {
    title: 'Vue Serverless',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ]
  },
  modules: ['@nuxtjs/axios'],
  performance: { gzip: false },
  router: { base: '/' },
  dev: false,
};