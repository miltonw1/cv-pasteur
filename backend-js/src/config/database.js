const { Sequelize } = require('sequelize')

function makeDialect (connect) {
  const possibleDialects = ['mysql', 'postgres', 'mariadb']

  if (possibleDialects.includes(connect)) {
    return connect
  }

  return 'mysql'
}

const database = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    dialect: makeDialect(process.env.DB_CONNETION),
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT)
  }
)

module.exports = database
