'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Race extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Race.belongsTo(models.Species, { as: 'species', foreignKey: 'species_id' })
      Race.hasMany(models.Pet, { as: 'pets' })
    }
  }
  Race.init({
    name: DataTypes.STRING,
    species_id: DataTypes.INTEGER,
    // deleted_at: DataTypes.DATE
    paranoid: true,
    deletedAt: 'deleted_at'
  }, {
    sequelize,
    modelName: 'Race',
    underscored: true
  })
  return Race
}
