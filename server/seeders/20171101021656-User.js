module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [{
    id: 1,
    email: 'akugbeode@yahoo.com',
    firstname: 'Akugbe',
    lastname: 'Ode',
    username: 'blaize3',
    password: 'oghogho@1',
    isAdmin: true,
    updatedAt: '2017-11-19T02:15:01.186Z',
    createdAt: '2017-11-19T02:15:01.186Z'
  }, {
    id: 2,
    email: 'egbeode@gmail.com',
    firstname: 'Precious',
    lastname: 'Ode',
    username: 'preshode',
    password: 'precious@20',
    isAdmin: false,
    updatedAt: '2017-11-19T02:15:01.186Z',
    createdAt: '2017-11-19T02:15:01.186Z'
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {})
};
