module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Events', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      reference: {
        model: 'User',
        key: 'id',
        as: 'userId'
      }
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
    title: {
      allowNull: false,
      type: Sequelize.STRING
    },
    organizer: {
      allowNull: false,
      type: Sequelize.STRING
    },
    start_date: {
      allowNull: false,
      type: Sequelize.DATEONLY
    },
    event_time: {
      allowNull: false,
      type: Sequelize.STRING
    },
    end_date: {
      allowNull: false,
      type: Sequelize.DATEONLY
    },
    privacy: {
      allowNull: false,
      type: Sequelize.STRING
    },
    description: {
      allowNull: true,
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Events')
};
