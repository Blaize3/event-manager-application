module.exports = (sequelize, DataTypes) => {
  const Center = sequelize.define('Center', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING
    },
    center_type: {
      allowNull: false,
      type: DataTypes.STRING
    },
    capacity: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    usage_fee: {
      allowNull: false,
      type: DataTypes.DECIMAL
    },
    added_by: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: true,
      type: DataTypes.TEXT
    }
  });
  Center.associate = (models) => {
    Center.hasMany(models.Event, {
      foreignKey: 'centerId'
    });
  };
  return Center;
};
