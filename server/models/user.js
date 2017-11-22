module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email e.g. you@example.com'
        },
        notEmpty: {
          args: true,
          msg: 'email cannot be empty'
        },
        isLowercase: {
          args: true,
          msg: 'email must be all lower case'
        }
      }
    },
    firstname: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^[a-z]+$/i,
          msg: 'firstname must be letters only'
        },
        notEmpty: {
          args: true,
          msg: 'firstname required'
        },
        len: {
          args: [3, 20],
          msg: 'firstname length should be btw 3 - 20'
        }
      }
    },
    lastname: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^[a-z]+$/i,
          msg: 'lastname must be letters only'
        },
        notEmpty: {
          args: true,
          msg: 'lastname required'
        },
        len: {
          args: [3, 20],
          msg: 'firstname length should be btw 3 - 20'
        }
      }
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'username must be alphanumeric e.g. blaize3'
        },
        notEmpty: {
          args: true,
          msg: 'username is required'
        },
        len: {
          args: [8, 30],
          msg: 'password length should be btw 3 - 30'
        }
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'password is required'
        }
      }
    },
    isAdmin: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      validate: {
        is: {
          args: /^(true|false)$/,
          msg: 'User type must be boolaen'
        },
        notEmpty: {
          args: true,
          msg: 'User type is required'
        }
      }
    }
  });
  //   User.associate = (models) => {
  //     User.hasMany(models.Event, {
  //       foreignKey: 'userId'
  //     });
  //   };
  return User;
};
