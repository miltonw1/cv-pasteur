'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Pet.belongsTo(models.client, { as: 'client', foreignKey: 'client_id' })
      Pet.belongsTo(models.Species, { as: 'species', foreignKey: 'species_id' })
      Pet.belongsTo(models.Race, { as: 'race', foreignKey: 'race_id' })
      Pet.hasMany(models.History, { as: 'histories' })
    }
  }
  Pet.init({
    name: DataTypes.STRING,
    allergies: DataTypes.STRING,
    genre: DataTypes.ENUM('female', 'male'),
    birthday: DataTypes.DATE,
    donor: DataTypes.BOOLEAN,
    blood_type: DataTypes.STRING,
    status: DataTypes.ENUM('dead', 'alive'),
    species_id: DataTypes.INTEGER,
    race_id: DataTypes.INTEGER,
    client_id: DataTypes.INTEGER,
    // deleted_at: DataTypes.DATE
    paranoid: true,
    deletedAt: 'deleted_at'
  }, {
    sequelize,
    modelName: 'Pet',
    underscored: true
  })
  return Pet
}
