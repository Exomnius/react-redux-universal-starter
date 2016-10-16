require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'React Redux Universal Starter',
    head: {
      titleTemplate: 'React Redux Universal Starter: %s',
      meta: [
        { name: 'description', content: 'Started App with React Redux and server-side rendering.' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: 'React Redux Universal Starter' },
        { property: 'og:image', content: '' },
        { property: 'og:locale', content: 'en_GB' },
        { property: 'og:title', content: 'React Redux Universal Starter' },
        { property: 'og:description', content: 'Started App with React Redux and server-side rendering.' },
        { property: 'og:card', content: 'summary' },
        { property: 'og:site', content: '@exomnius' },
        { property: 'og:creator', content: '@exomnius' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' }
      ]
    }
  }
}, environment);
