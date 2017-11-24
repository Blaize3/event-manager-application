/*eslint-disable*/

'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = {
    up: function up(queryInterface, Sequelize) {
        var _ref;

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
        }, (_ref = {
            id: 2,
            userId: 1,
            centerId: 1,
            title: 'Usman Ibrahim\'s Birthday',
            organizer: 'esKimo Events',
            start_date: '2017-12-14',
            event_time: '03:00:00 am',
            end_date: '2017-12-14',
            privacy: 'public'
        }, _defineProperty(_ref, 'privacy', 'public'), _defineProperty(_ref, 'description', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta error in sapiente odit sit praesentium! Sapiente magnam tempore porro, quis provident aperiam quas nulla mollitia nam, laborum dolorum quia eaque.'), _defineProperty(_ref, 'updatedAt', '2017-11-19 02:15:01.186+00'), _defineProperty(_ref, 'createdAt', '2017-11-19 02:15:01.186+00'), _ref)], {});
    },

    down: function down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Events', null, {});
    }
};