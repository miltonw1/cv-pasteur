'use strict'
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      allergies: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.ENUM('female', 'male')
      },
      birthday: {
        type: Sequelize.DATE
      },
      donor: {
        type: Sequelize.BOOLEAN
      },
      blood_type: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM('dead', 'alive')
      },
      species_id: {
        type: Sequelize.INTEGER
      },
      race_id: {
        type: Sequelize.INTEGER
      },
      client_id: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Pets')
  }
}
