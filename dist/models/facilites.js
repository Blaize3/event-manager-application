'use strict';

module.exports = function (sequelize, DataTypes) {
  var Facilites = sequelize.define('Facilites', {
    hasProjector: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      validate: {
        is: {
          args: /^(true|false)$/,
          msg: 'Facility has Projector must be boolaen'
        },
        notEmpty: {
          args: true,
          msg: 'Facility has Projector is required'
        }
      }
    },
    numOfProjector: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          args: true,
          msg: 'Facility number of Projector must be integer'
        },
        notEmpty: {
          args: true,
          msg: 'Facility number of Projector required'
        }
      }
    },
    hasChair: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      validate: {
        is: {
          args: /^(true|false)$/,
          msg: 'Facilities has Chair must be boolaen'
        },
        notEmpty: {
          args: true,
          msg: 'Facilities has Chair is required'
        }
      }
    },
    numOfChair: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          args: true,
          msg: 'Facility number of chair must be integer'
        },
        notEmpty: {
          args: true,
          msg: 'Facility number of chair required'
        }
      }
    },
    hasTables: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      validate: {
        is: {
          args: /^(true|false)$/,
          msg: 'Facilities has Tables must be boolaen'
        },
        notEmpty: {
          args: true,
          msg: 'Facilities has Tables is required'
        }
      }
    },
    numOfTable: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          args: true,
          msg: 'Facility number of Table must be integer'
        },
        notEmpty: {
          args: true,
          msg: 'Facility number of Table required'
        }
      }
    },
    hasToilet: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      validate: {
        is: {
          args: /^(true|false)$/,
          msg: 'Facilities has Toilet must be boolaen'
        },
        notEmpty: {
          args: true,
          msg: 'Facilities has Toilet is required'
        }
      }
    },
    numOfToilets: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          args: true,
          msg: 'Facility number of Toilet must be integer'
        },
        notEmpty: {
          args: true,
          msg: 'Facility number of Toilet required'
        }
      }
    }
  });
  // Facilites.associate = (models) => {
  //   Facilites.belongsTo(models.Center, {
  //     foreignKey: 'centerId'
  //   });
  // };
  return Facilites;
};