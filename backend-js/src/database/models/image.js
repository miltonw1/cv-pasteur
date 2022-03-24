'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Image.belongsTo(models.History, { as: 'history', foreignKey: 'history_id' })
    }
  }
  Image.init({
    url: DataTypes.STRING,
    path: DataTypes.STRING,
    history_id: DataTypes.INTEGER,
    // deleted_at: DataTypes.DATE
    paranoid: true,
    deletedAt: 'deleted_at'
  }, {
    sequelize,
    modelName: 'Image',
    underscored: true
  })
  return Image
}
