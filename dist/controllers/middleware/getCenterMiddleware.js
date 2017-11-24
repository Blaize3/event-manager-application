'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../../models');

var _centervalidator = require('./centervalidator');

var _centervalidator2 = _interopRequireDefault(_centervalidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 *
 * @class GetEvent
 */
var GetCenter = function () {
  function GetCenter() {
    _classCallCheck(this, GetCenter);
  }

  _createClass(GetCenter, null, [{
    key: 'getOneEvent',

    /**
     *
     *
     * @static
     * @param {any} request
     * @param {any} response
     * @param {any} next
     * @returns {GetCenter} The identifier for ...
     * @memberof GetCenter
     */
    value: function getOneEvent(request, response, next) {
      console.log('=============================>', request.params.centerId);
      var validateEventId = _centervalidator2.default.validateIdparseInt((request.params.eventId, 10));
      if (validateEventId.isNotValid) {
        console.log(validateEventId.isNotValid);
        return response.status(400).send({
          Status: 'Event ID validation failed',
          message: validateEventId.errorMessage
        });
      }
      return _models.Center.findOne({
        where: {
          id: parseInt(request.params.centerId)
        }
      }).then(function (returnedCenter) {
        if (!returnedCenter) {
          console.log('====================>', 'get 1 error');
          return response.status(404).send({
            Status: 'Get Event Failed',
            message: 'Event with ' + request.params.eventId + ' was not found!'
          });
        }
        console.log('====================>', 'get 1 completed');
        request.centerObject = returnedCenter;
        next();
      }).catch(function (error) {
        // next(error.errors[0].message);
        response.status(404);
      });
    }
  }]);

  return GetCenter;
}();

exports.default = GetCenter;