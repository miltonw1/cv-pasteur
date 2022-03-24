'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Client.hasMany(models.Pet, { as: 'pets' })
    }
  }
  Client.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    debt: DataTypes.STRING,
    // deleted_at: DataTypes.DATE
    paranoid: true,
    deletedAt: 'deleted_at'
  }, {
    sequelize,
    modelName: 'Client',
    underscored: true
  })
  return Client
}
