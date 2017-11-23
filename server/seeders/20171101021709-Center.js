module.exports = {
  up: (queryInterface) => {
    queryInterface.bulkInsert('Centers', [{
      id: 1,
      capacity: 2000,
      usage_fee: 50000.00,
      name: 'La posh Garden',
      address: '112 Victoria Garden City (VGC),',
      location: 'Lagos State, Nigeria.',
      center_type: 'Garden',
      isAvailable: true,
      added_by: 'Ode Akugbe',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta error in sapiente odit sit praesentium!',
      updatedAt: '2017-11-19 02:15:01.186+00',
      createdAt: '2017-11-19 02:15:01.186+00'
    }, {
      id: 2,
      capacity: 1000,
      usage_fee: 50000.00,
      name: 'Green Meridian Auditorium',
      address: '1 Offbourne Estate Ikoyi',
      location: 'Lagos State, Nigeria.',
      center_type: 'Conference Hall',
      added_by: 'Ode Akugbe',
      isAvailable: true,
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta error in sapiente odit sit praesentium!',
      updatedAt: '2017-11-19 02:15:01.186+00',
      createdAt: '2017-11-19 02:15:01.186+00'
    }], {});
  },
  down: queryInterface => queryInterface.bulkDelete('Center', null, {})
};
