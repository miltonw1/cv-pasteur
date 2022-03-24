'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Species extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Species.hasMany(models.Race, { as: 'races' }) // species -> races  donde races.species_id = species.id
      Species.hasMany(models.Pet, { as: 'pets' })
    }
  }
  Species.init({
    name: DataTypes.STRING,
    paranoid: true,
    deletedAt: 'deleted_at'
  }, {
    sequelize,
    modelName: 'Species',
    underscored: true
  })
  return Species
}
