'use strict';

/* eslint-disable */

var models = require('../models');

ResetHelper = {
    init: function init() {
        console.log('Resetting the Database....Please wait...');
        models.sequelize.sync({
            force: true
        }).then(function () {
            console.log('Database reset completed');
            process.exit(0);
        });
    }
};

module.exports = ResetHelper.init();