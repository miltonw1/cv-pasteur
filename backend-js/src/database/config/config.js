require('dotenv/config') // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

console.log({
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE: process.env.DB_DATABASE
})

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT
  },
  // test: {
  //   username: 'dummy',
  //   password: 'dummy',
  //   database: 'dummy',
  //   host: 'dummy',
  //   dialect: 'dummy'
  // },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    port: process.env.DB_PORT
  }
}
