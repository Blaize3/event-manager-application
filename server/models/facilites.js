module.exports = (sequelize, DataTypes) => {
  const Facilites = sequelize.define('Facilites', {
    hasProjector: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    numOfProjector: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    hasChair: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    numOfChair: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    hasTables: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    numOfTable: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    hasToilet: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    numOfToilets: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  });
  Facilites.associate = (models) => {
    Facilites.belongsTo(models.Center, {
      foreignKey: 'centerId'
    });
  };
  return Facilites;
};
