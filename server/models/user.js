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
        }
      }
    },
    firstname: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z0-9-, ])*$/,
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
          args: /^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z0-9-, ])*$/,
          msg: 'lastname must be letters only'
        },
        notEmpty: {
          args: true,
          msg: 'lastname required'
        },
        len: {
          args: [3, 255],
          msg: 'firstname length should be btw 3 - 20'
        }
      }
    },
    username: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z0-9-, ])*$/,
          msg: 'username must be alphanumeric e.g. blaize3'
        },
        notEmpty: {
          args: true,
          msg: 'username is required'
        },
        len: {
          args: [3, 30],
          msg: 'username length should be btw 3 - 30'
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
      defaultValue: false,
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
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        is: {
          args:  /^[a-zA-Z0-9-,]+(\s{0,1}[a-zA-Z0-9-, ])*$/,
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
