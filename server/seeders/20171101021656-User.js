module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [{
    id: 1,
    email: 'akugbeode@yahoo.com',
    firstname: 'Akugbe',
    lastname: 'Ode',
    username: 'blaize3',
    password: 'oghogho@1',
    isAdmin: true,
    updatedAt: '2017-11-21 01:21:40.219+00',
    createdAt: '2017-11-21 01:21:40.219+00'
  }, {
    id: 2,
    email: 'egbeode@gmail.com',
    firstname: 'Precious',
    lastname: 'Ode',
    username: 'preshode',
    password: 'precious@20',
    isAdmin: false,
    updatedAt: '2017-11-21 01:21:40.219+00',
    createdAt: '2017-11-21 01:21:40.219+00'
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {})
};
