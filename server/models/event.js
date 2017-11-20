module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    centerId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    organizer: {
      allowNull: false,
      type: DataTypes.STRING
    },
    privacy: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: true,
      type: DataTypes.STRING
    }
  });
  // Event.associate = (models) => {
  //   // Event.belongsTo(models.User, {
  //   //   foreignKey: 'userId',
  //   //   onDelete: 'CASCADE'
  //   // });

  //   // Event.belongsTo(models.Center, {
  //   //   foreignKey: 'centerId',
  //   //   onDelete: 'CASCADE'
  //   // });
  // };
  return Event;
};
