'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../../models');

var _eventvalidator = require('./eventvalidator');

var _eventvalidator2 = _interopRequireDefault(_eventvalidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 *
 * @class GetEvent
 */
var GetEvent = function () {
  function GetEvent() {
    _classCallCheck(this, GetEvent);
  }

  _createClass(GetEvent, null, [{
    key: 'getOneEvent',

    /**
     *
     *
     * @static
     * @param {any} request
     * @param {any} response
     * @param {any} next
     * @returns {GetEvent} The identifier for ...
     * @memberof GetEvent
     */
    value: function getOneEvent(request, response, next) {
      var validateEventId = _eventvalidator2.default.validateId(parseInt(request.params.eventId, 10));
      if (validateEventId.isNotValid) {
        console.log(validateEventId.isNotValid);
        return response.status(400).send({
          Status: 'Event ID validation failed',
          message: validateEventId.errorMessage
        });
      }
      return _models.Event.findOne({
        where: {
          id: request.params.eventId
        }
      }).then(function (returnedEvent) {
        if (!returnedEvent) {
          return response.status(404).send({
            Status: 'Get Event Failed',
            message: 'Event with ID ' + request.params.eventId + ' was not found!'
          });
        }
        request.eventObject = returnedEvent;
        next();
      }).catch(function (error) {
        next(error.errors[0].message);
      });
    }
  }]);

  return GetEvent;
}();

exports.default = GetEvent;