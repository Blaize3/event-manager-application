module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Centers', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING
    },
    address: {
      allowNull: false,
      type: Sequelize.STRING
    },
    center_type: {
      allowNull: false,
      type: Sequelize.STRING
    },
    capacity: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    usage_fee: {
      allowNull: false,
      type: Sequelize.DECIMAL
    },
    added_by: {
      allowNull: false,
      type: Sequelize.STRING
    },
    description: {
      allowNull: true,
      type: Sequelize.TEXT
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Centers')
};

