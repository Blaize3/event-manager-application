'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 *
 * @class EventInputValidators
 */
var EventInputValidators = function () {
  function EventInputValidators() {
    _classCallCheck(this, EventInputValidators);
  }

  _createClass(EventInputValidators, null, [{
    key: 'createEventValidators',

    /**
     *
     *
     * @static
     * @param {any} userObject
     * @returns {UserInputValidators} The identifier for ...
     * @memberof EventInputValidators
     */
    value: function createEventValidators(userObject) {
      var errorCount = 0;
      var errorMessage = 'Input error: ';
      var hasFailed = false;
      var isValidResult = {};

      // Validate event user id field
      if (typeof userObject.userId !== 'number') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. User ID field must be a number, ';
      } else if (userObject.userId === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. User ID field cannot be empty, ';
      } else if (userObject.userId === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. User ID field cannot be null, ';
      } else if (userObject.userId === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. User ID field was ommitted, ';
      }

      //  Validate event center id field
      if (typeof userObject.centerId !== 'number') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Center ID field must be a number, ';
      } else if (userObject.centerId === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Center ID field cannot be empty, ';
      } else if (userObject.centerId === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Center ID field cannot be null, ';
      } else if (userObject.centerId === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Center ID field was ommitted, ';
      }

      // Validate event title field
      if (typeof userObject.title !== 'string') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Title field must be a string, ';
      } else if (userObject.title === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Title field cannot be empty, ';
      } else if (userObject.title === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Title field cannot be null, ';
      } else if (userObject.title === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Title field was ommitted, ';
      }

      // Validate event organizer field
      if (typeof userObject.organizer !== 'string') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Organizer field must be a string, ';
      } else if (userObject.organizer === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Organizer field cannot be empty, ';
      } else if (userObject.organizer === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Organizer field cannot be null, ';
        errorMessage += ',\n';
      } else if (userObject.organizer === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Organizer field was ommitted, ';
      }

      // Validate event organizer field
      if (typeof userObject.privacy !== 'string') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Privacy field must be a string, ';
      } else if (userObject.privacy === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Privacy field cannot be empty, ';
      } else if (userObject.privacy === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Privacy field cannot be null, ';
      } else if (userObject.privacy === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Privacy field was ommitted, ';
      }

      // Validate event organizer field
      if (typeof userObject.description !== 'string') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Description field must be a string, ';
      } else if (userObject.description === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Description field cannot be empty, ';
      } else if (userObject.description === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Description field cannot be null, ';
      } else if (userObject.description === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Description field was ommitted, ';
      }

      isValidResult = {
        isNotValid: hasFailed,
        errorCount: errorCount,
        errorMessage: errorMessage
      };

      return isValidResult;
    }

    /**
    *
    *
    * @static
    * @param {any} userObject
    * @returns  {EventInputValidators} The identifier for ...
    * @memberof EventInputValidators
    */

  }, {
    key: 'editObjectId',
    value: function editObjectId(userObject) {
      var errorCount = 0;
      var errorMessage = 'Input error: ';
      var hasFailed = false;
      var isValidResult = {};

      // Validate Event ID field
      if (isNaN(userObject.id)) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Event ID field must be a number, ';
      } else if (userObject.id === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Event ID field cannot be empty, ';
      } else if (userObject.id === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Event ID field cannot be null, ';
      } else if (userObject.id === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Event ID field was ommitted, ';
      }

      // Validate event user id field
      if (typeof userObject.userId !== 'number') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. User ID field must be a string, ';
      } else if (userObject.userId === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. User ID field cannot be empty, ';
      } else if (userObject.userId === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. User ID field cannot be null, ';
      } else if (userObject.userId === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. User ID field was ommitted, ';
      }

      //  Validate event center id field
      if (typeof userObject.centerId !== 'number') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Center ID field must be a string, ';
      } else if (userObject.centerId === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Center ID field cannot be empty, ';
      } else if (userObject.centerId === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Center ID field cannot be null, ';
      } else if (userObject.centerId === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Center ID field was ommitted, ';
      }

      // Validate event title field
      if (typeof userObject.title !== 'string') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Title field must be a string, ';
      } else if (userObject.title === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Title field cannot be empty, ';
      } else if (userObject.title === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Title field cannot be null, ';
      } else if (userObject.title === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Title field was ommitted, ';
      }

      // Validate event organizer field
      if (typeof userObject.organizer !== 'string') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Organizer field must be a string, ';
      } else if (userObject.organizer === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Organizer field cannot be empty, ';
      } else if (userObject.organizer === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Organizer field cannot be null, ';
        errorMessage += ',\n';
      } else if (userObject.organizer === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Organizer field was ommitted, ';
      }

      // Validate event start date field
      if (typeof userObject.start_date !== 'string') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Start date field must be a string, ';
      } else if (userObject.start_date === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Start date field cannot be empty, ';
      } else if (userObject.start_date === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Start date field cannot be null, ';
        errorMessage += ',\n';
      } else if (userObject.start_date === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Start date field was ommitted, ';
      }

      // Validate event time field
      if (typeof userObject.event_time !== 'string') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Event time field must be a string, ';
      } else if (userObject.event_time === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Event time field cannot be empty, ';
      } else if (userObject.event_time === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Event time field cannot be null, ';
        errorMessage += ',\n';
      } else if (userObject.event_time === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Event time field was ommitted, ';
      }

      // Validate event end date field
      if (typeof userObject.end_date !== 'string') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. End date field must be a string, ';
      } else if (userObject.end_date === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. End date field cannot be empty, ';
      } else if (userObject.end_date === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. End date field cannot be null, ';
        errorMessage += ',\n';
      } else if (userObject.end_date === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. End date field was ommitted, ';
      }

      // Validate event privacy field
      if (typeof userObject.privacy !== 'string') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Privacy field must be a string, ';
      } else if (userObject.privacy === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Privacy field cannot be empty, ';
      } else if (userObject.privacy === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Privacy field cannot be null, ';
      } else if (userObject.privacy === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Privacy field was ommitted, ';
      }

      // Validate event description field
      if (typeof userObject.description !== 'string') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Description field must be a string, ';
      } else if (userObject.description === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Description field cannot be empty, ';
      } else if (userObject.description === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Description field cannot be null, ';
      } else if (userObject.description === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Description field was ommitted, ';
      }

      isValidResult = {
        isNotValid: hasFailed,
        errorCount: errorCount,
        errorMessage: errorMessage
      };

      return isValidResult;
    }
    /**
    *
    *
    * @static
    * @param {any} id
    * @returns {UserInputValidators} The identifier for ...
    * @memberof EventInputValidators
    */

  }, {
    key: 'validateId',
    value: function validateId(id) {
      var errorCount = 0;
      var errorMessage = 'Input error: ';
      var hasFailed = false;
      var isValidResult = {};

      // Validate Event ID field
      if (isNaN(id)) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Event ID field must be a number, ';
      } else if (id === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Event ID field cannot be empty, ';
      } else if (id === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Event ID field cannot be null, ';
      } else if (id === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Event ID field was ommitted, ';
      }

      isValidResult = {
        isNotValid: hasFailed,
        errorCount: errorCount,
        errorMessage: errorMessage
      };

      return isValidResult;
    }
  }]);

  return EventInputValidators;
}();

exports.default = EventInputValidators;