module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'email should follow this format you@example.com'
        }
      }
    },
    firstname: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        
      }
    },
    lastname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    isAdmin: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    }
  });
  //   User.associate = (models) => {
  //     User.hasMany(models.Event, {
  //       foreignKey: 'userId'
  //     });
  //   };
  return User;
};
