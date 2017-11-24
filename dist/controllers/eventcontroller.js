'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*eslint-disable*/


var _models = require('../models');

var _eventvalidator = require('./middleware/eventvalidator');

var _eventvalidator2 = _interopRequireDefault(_eventvalidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 *
 * @class HandleEventRequest
 */
var HandleEventRequest = function () {
  function HandleEventRequest() {
    _classCallCheck(this, HandleEventRequest);
  }

  _createClass(HandleEventRequest, null, [{
    key: 'createEvent',

    /**
     *
     *
     * @static
     * @param {any} request
     * @param {any} response
     * @param {any} next
     * @returns {HandleEventRequest} The identifier for ...
     * @memberof HandleEventRequest
     */
    value: function createEvent(request, response, next) {
      var eventObject = {
        userId: parseInt(request.body.userId),
        centerId: parseInt(request.body.centerId),
        title: request.body.title,
        organizer: request.body.organizer,
        start_date: request.body.start_date,
        event_time: request.body.event_time,
        end_date: request.body.end_date,
        privacy: request.body.privacy,
        description: request.body.description
      };

      var validateEventCreateObject = _eventvalidator2.default.createEventValidators(eventObject);
      if (validateEventCreateObject.isNotValid) {
        console.log(validateEventCreateObject.isNotValid);
        return response.status(400).send({
          message: validateEventCreateObject.errorCount + ' input fields data are not properly set',
          data: validateEventCreateObject.errorMessage
        });
      }
      return _models.Event.create(eventObject).then(function (createdEvent) {
        return response.status(200).send({
          Status: 'Event Creation Successful',
          'Created Event': createdEvent
        });
      }).catch(function (error) {
        next(error.errors[0].message);
      });

      // ends else if
    }
    /**
    *
    *
    * @static
    * @param {any} request
    * @param {any} response
    * @param {any} next
    * @returns {HandleEventRequest} The identifier for ...
    * @memberof HandleEventRequest
    */

  }, {
    key: 'editEvent',
    value: function editEvent(request, response, next) {
      var editObject = {
        id: request.params.eventId,
        userId: parseInt(request.body.userId),
        centerId: parseInt(request.body.centerId),
        title: request.body.title,
        organizer: request.body.organizer,
        start_time: request.body.start_time,
        event_time: request.body.event_time,
        end_time: request.body.end_time,
        privacy: request.body.privacy,
        description: request.body.description
      };
      var validateEventCreateObject = _eventvalidator2.default.createEventValidators(editObject);
      if (validateEventCreateObject.isNotValid) {
        console.log(validateEventCreateObject.isNotValid);
        return response.status(400).send({
          message: validateEventCreateObject.errorCount + ' input fields data are not properly set',
          data: validateEventCreateObject.errorMessage
        });
      }

      //  check if authenticated user is the creator of the event
      if (request.decoded.userID === request.eventObject.userId) {
        var eventObj = _extends({}, request.eventObject.dataValues, editObject);
        return _models.Event.update(eventObj, {
          where: {
            id: request.params.eventId
          },
          returning: true,
          plain: true
        }).then(function (editedObject) {
          return response.status(200).send({
            message: 'Edit Event Successful',
            'Edited Event Details': editedObject[1].dataValues
          });
        }).catch(function (error) {
          next(error);
        });
      } else {
        return response.status(401).send({
          Status: 'Edit Event Failed',
          message: 'User ' + request.decoded.userID + ' is not authorized to edit this event'
        });
      }
    }
    /**
    *
    *
    * @static
    * @param {any} request
    * @param {any} response
    * @param {any} next
    * @returns {HandleEventRequest} The identifier for ...
    * @memberof HandleEventRequest
    */

  }, {
    key: 'deleteEvent',
    value: function deleteEvent(request, response, next) {
      //  check if authenticated user is the owner of the event
      if (request.decoded.userID === request.eventObject.userId) {
        return request.eventObject.destroy({
          returning: true,
          plain: true
        }).then(function (deletedObject) {
          return response.status(200).send({
            Status: 'Delete Event Successful',
            'Deleted Event Details': request.eventObject.dataValues
          });
        });
      } else {
        return response.status(401).send({
          Status: 'Delete Event Failed',
          message: 'User ' + request.decoded.userID + ' is not authorized to delete this event'
        });
      }
    }
  }]);

  return HandleEventRequest;
}();

exports.default = HandleEventRequest;