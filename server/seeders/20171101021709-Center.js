module.exports = {
  up: (queryInterface) => {
    queryInterface.bulkInsert('Centers', [{
      id: 1,
      capacity: 2000,
      usage_fee: 50000.00,
      name: 'La posh Garden',
      address: '112 Victoria Garden City (VGC), Lagos State, Nigeria.',
      center_type: 'Garden',
      added_by: 'Ode Akugbe',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta error in sapiente odit sit praesentium! Sapiente magnam tempore porro, quis provident aperiam quas nulla mollitia nam, laborum dolorum quia eaque.',
      updatedAt: '2017-11-19 02:15:01.186+00',
      createdAt: '2017-11-19 02:15:01.186+00'
    }, {
      id: 2,
      capacity: 1000,
      usage_fee: 50000.00,
      name: 'Green Meridian Auditorium',
      address: '1 Offbourne Estate Ikoyi, Lagos State, Nigeria.',
      center_type: 'Conference Hall',
      added_by: 'Ode Akugbe',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta error in sapiente odit sit praesentium! Sapiente magnam tempore porro, quis provident aperiam quas nulla mollitia nam, laborum dolorum quia eaque.',
      updatedAt: '2017-11-19 02:15:01.186+00',
      createdAt: '2017-11-19 02:15:01.186+00'
    }], {});
  },
  down: queryInterface => queryInterface.bulkDelete('Center', null, {})
};
