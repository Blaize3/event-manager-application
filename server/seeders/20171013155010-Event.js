/*eslint-disable*/

'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Events', [{
            id: 1,
            userId: 1,
            centerId: 1,
            title: 'Philnewman\'s Wedding',
            organizer: 'esKimo Events',
            start_date: '2017-11-24',
            event_time: '03:00:00 am',
            end_date: '2017-11-24',
            privacy: 'public',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta error in sapiente odit sit praesentium! Sapiente magnam tempore porro, quis provident aperiam quas nulla mollitia nam, laborum dolorum quia eaque.',
            updatedAt: '2017-11-19 02:15:01.186+00',
            createdAt: '2017-11-19 02:15:01.186+00'
          }, {
            id: 2,
            userId: 1,
            centerId: 1,
            title: 'Usman Ibrahim\'s Birthday',
            organizer: 'esKimo Events',
            start_date: '2017-12-14',
            event_time: '03:00:00 am',
            end_date: '2017-12-14',
            privacy: 'public',
            privacy: 'public',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta error in sapiente odit sit praesentium! Sapiente magnam tempore porro, quis provident aperiam quas nulla mollitia nam, laborum dolorum quia eaque.',
            updatedAt: '2017-11-19 02:15:01.186+00',
            createdAt: '2017-11-19 02:15:01.186+00'
          }], {});
        },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Events', null, {});
    }
};