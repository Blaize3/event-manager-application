'use strict';

module.exports = {
  up: function up(queryInterface, Sequelize) {
    queryInterface.createTable('Facilites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      centerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        reference: {
          model: 'Center',
          key: 'id',
          as: 'centerId'
        }
      },
      hasProjector: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      numOfProjector: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      hasChair: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      numOfChair: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      hasTables: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      numOfTable: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      hasToilet: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      numOfToilets: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Facilites');
  }
};