import path from 'path'
import { Sequelize } from 'sequelize'

function makeDialect (connect) {
  const possibleDialects = ['mysql', 'postgres', 'mariadb']

  if (possibleDialects.includes(connect)) {
    return connect
  }

  return 'mysql'
}

const modelsPath = path.join(__dirname, '..', 'models')

const sequelize = new Sequelize({
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: makeDialect(process.env.DB_CONNETION),
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  models: [modelsPath]
})

export default sequelize
