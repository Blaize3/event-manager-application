module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          args: true,
          msg: 'User ID must be integer'
        },
        notEmpty: {
          args: true,
          msg: 'User ID required'
        }
      }
    },
    centerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          args: true,
          msg: 'Create ID must be integer'
        },
        notEmpty: {
          args: true,
          msg: 'Create ID required'
        }
      }
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^[a-z]+$/i,
          msg: 'Event title must be letters only'
        },
        notEmpty: {
          args: true,
          msg: 'Event title required'
        },
        len: {
          args: [3, 100],
          msg: 'Event title length should be btw 3 - 100'
        }
      }
    },
    organizer: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^[a-z]+$/i,
          msg: 'Event organizer must be letters only'
        },
        notEmpty: {
          args: true,
          msg: 'Event organizer required'
        },
        len: {
          args: [3, 100],
          msg: 'Event organizer length should be btw 3 - 100'
        }
      }
    },
    start_date: {
      allowNull: false,
      type: DataTypes.DATEONLY,
      validate: {
        isDate: {
          args: true,
          msg: 'Invalid date format. Try this format yyyy-mm-dd'
        },
        notEmpty: {
          args: true,
          msg: 'start date field require'
        }
      }
    },
    event_time: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /(\d{2}(:\d{2}){2}\s(pm|am))/,
          msg: 'Invalid time format. Try this format (hh:mm:ss am/pm)'
        },
        notEmpty: {
          args: true,
          msg: 'event time field require'
        }
      }
    },
    end_date: {
      allowNull: false,
      type: DataTypes.DATEONLY,
      validate: {
        isDate: {
          args: true,
          msg: 'Invalid date format. Try this format yyyy-mm-dd'
        },
        notEmpty: {
          args: true,
          msg: 'end date field require'
        }
      }
    },
    privacy: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^[a-z]+$/i,
          msg: 'Event privacy must be letters only'
        },
        notEmpty: {
          args: true,
          msg: 'Event privacy required'
        },
        len: {
          args: [3, 100],
          msg: 'Event privacy length should be btw 3 - 100'
        }
      }
    },
    description: {
      allowNull: true,
      type: DataTypes.STRING,
      validate: {
        is: {
          args: /^[a-z]+$/i,
          msg: 'Event description must be letters only'
        },
        notEmpty: {
          args: true,
          msg: 'Event description required'
        },
        len: {
          args: [3, 100],
          msg: 'Event description length should be btw 3 - 100'
        }
      }
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
