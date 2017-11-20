/*eslint-disable*/
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`)[env];
const db = {};
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Models/tables
db.User = require('./user')(sequelize, Sequelize);
db.Event = require('./event')(sequelize, Sequelize);
db.Center = require('./center')(sequelize, Sequelize);

// Associations
db.User.hasMany(db.Event, { foreignKey: 'userId' });
db.Event.belongsTo(db.User, { foreignKey: 'userId' });
db.Event.belongsTo(db.Center, { foreignKey: 'centerId' });
db.Center.hasMany(db.Event, { foreignKey: 'centerId' });

module.exports = db;