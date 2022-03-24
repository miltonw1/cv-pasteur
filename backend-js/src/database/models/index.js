'use strict'

require('dotenv/config') // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const configPath = path.join(__dirname, '..', 'config', 'config.js')
const config = require(configPath)[env]

const db = {}

let databaseConnection
if (config.use_env_variable) {
  databaseConnection = new Sequelize(process.env[config.use_env_variable], config)
} else {
  databaseConnection = new Sequelize(config.database, config.username, config.password, config)
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(databaseConnection, Sequelize.DataTypes)
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = databaseConnection
db.Sequelize = Sequelize

module.exports = db
