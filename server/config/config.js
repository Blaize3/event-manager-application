module.exports = {
    development: {
      username: 'postgres',
      password: null,
      database: 'event_manager_dev_db',
      host: '127.0.0.1',
      port: 5432,
      dialect: 'postgres'
    },
    test: {
      username: 'postgres',
      password: null,
      database: 'event_manager_test_db',
      host: '127.0.0.1',
      port: 5432,
      dialect: 'postgres'
    },
    production: {
     dailect: 'postges',
     host: process.env.DATABASE_HOST_PROD,
     database: process.env.DATABASE_DATABASE_PROD,
     user: process.env.DATABASE_USER_PROD,
     password: process.env.DATABASE_PASSWORD_PROD
    }
  }