'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      History.belongsTo(models.Pet, { as: 'pet', foreignKey: 'pet_id' })
      History.hasMany(models.Image, { as: 'images' })
    }
  }
  History.init({
    observation: DataTypes.STRING,
    pet_id: DataTypes.INTEGER,
    // deleted_at: DataTypes.DATE
    paranoid: true,
    deletedAt: 'deleted_at'
  }, {
    sequelize,
    modelName: 'History',
    underscored: true
  })
  return History
}
