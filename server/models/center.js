module.exports = (sequelize, DataTypes) => {
  const Center = sequelize.define('Center', {
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^[a-z]+$/i,
          msg: 'Center name must be letters only'
        },
        notEmpty: {
          args: true,
          msg: 'Center name is require'
        },
        len: {
          args: [3, 100],
          msg: 'Center name length should be btw 3 - 20'
        }
      }
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^[a-z]+$/i,
          msg: 'Center address must be letters only'
        },
        notEmpty: {
          args: true,
          msg: 'Center address required'
        },
        len: {
          args: [3, 100],
          msg: 'Center address length should be btw 3 - 20'
        }
      }
    },
    location: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^[a-z]+$/i,
          msg: 'Center location must be letters only'
        },
        notEmpty: {
          args: true,
          msg: 'Center location required'
        },
        len: {
          args: [3, 100],
          msg: 'Center location length should be btw 3 - 20'
        }
      }
    },
    center_type: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^[a-z]+$/i,
          msg: 'Center type must be letters only'
        },
        notEmpty: {
          args: true,
          msg: 'Center type required'
        },
        len: {
          args: [3, 100],
          msg: 'Center type length should be btw 3 - 20'
        }
      }
    },
    isAvailable: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      validate: {
        is: {
          args: /^(true|false)$/,
          msg: 'Center available status must be boolaen'
        },
        notEmpty: {
          args: true,
          msg: 'Center available status required'
        }
      }
    },
    capacity: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          args: true,
          msg: 'Center capacity must be integer'
        },
        notEmpty: {
          args: true,
          msg: 'Center capacity required'
        }
      }
    },
    usage_fee: {
      allowNull: false,
      type: DataTypes.DECIMAL,
      validate: {
        isInt: {
          args: true,
          msg: 'Center usage fee must be decimal'
        },
        notEmpty: {
          args: true,
          msg: 'Center usage required'
        }
      }
    },
    added_by: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^[a-z]+$/i,
          msg: 'Center added by must be letters only'
        },
        notEmpty: {
          args: true,
          msg: 'Center added by required'
        },
        len: {
          args: [6, 40],
          msg: 'Center added by length should be btw 6 - 40'
        }
      }
    },
    description: {
      allowNull: true,
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^[a-z]+$/i,
          msg: 'Center description must be letters only'
        },
        notEmpty: {
          args: true,
          msg: 'Center description required'
        },
        len: {
          args: [10, 255],
          msg: 'Center description length should be btw 10 - 255'
        }
      }
    }
  });
  // Center.associate = (models) => {
  //   // Center.hasMany(models.Event, {
  //   //   foreignKey: 'centerId'
  //   // });

  //   // Center.hasMany(models.Facilites, {
  //   //   foreignKey: 'centerId'
  //   // });
  // };
  return Center;
};
