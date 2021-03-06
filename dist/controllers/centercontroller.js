'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../models');

var _centervalidator = require('./middleware/centervalidator');

var _centervalidator2 = _interopRequireDefault(_centervalidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 *
 * @class HandleCenterRequest
 */
var HandleCenterRequest = function () {
  function HandleCenterRequest() {
    _classCallCheck(this, HandleCenterRequest);
  }

  _createClass(HandleCenterRequest, null, [{
    key: 'addCenter',

    /**
     *
     *
     * @static
     * @param {any} request
     * @param {any} response
     * @param {any} next
     * @returns {HandleCenterRequest} The identifier for ...
     * @memberof HandleCenterRequest
     */
    value: function addCenter(request, response, next) {
      var centerObject = {
        name: request.body.name,
        address: request.body.address,
        location: request.body.location,
        center_type: request.body.center_type,
        isAvailable: request.body.isAvailable,
        capacity: parseInt(request.body.capacity, 10),
        usage_fee: parseFloat(request.body.usage_fee),
        added_by: request.body.added_by,
        description: request.body.description
      };

      try {
        if (typeof JSON.parse(centerObject.isAvailable) !== 'boolean') {
          centerObject.isAvailable = false;
        }
      } catch (error) {
        centerObject.isAvailable = false;
      }

      var validateEventCreateObject = _centervalidator2.default.addCenterValidators(centerObject);
      if (validateEventCreateObject.isNotValid) {
        console.log(validateEventCreateObject.isNotValid);
        return response.status(400).send({
          message: validateEventCreateObject.errorCount + ' input fields data are not properly set',
          data: validateEventCreateObject.errorMessage
        });
      }
      _models.Center.findOne({
        where: {
          name: centerObject.name
        }
      }).then(function (isExisted) {
        if (!isExisted) {
          //  check if authenticated user is an admin User
          if (request.decoded.isAdmin) {
            return _models.Center.create(centerObject).then(function (createdCenter) {
              return response.status(201).send({
                Status: 'Center Creaation Successful',
                'Created Center': createdCenter
              });
            }).catch(function (error) {
              next(error.errors[0].message);
            });
          }
          if (!request.decoded.isAdmin) {
            response.status(401).send({
              Status: 'Add Center Failed',
              message: 'User ' + request.decoded.userID + ' is not authorized to Add Center'
            });
          }
        }
        if (isExisted) {
          return response.status(200).send({ error: 'Center name already exist, Please use a different name' });
        }
      }).catch(function (error) {
        next(error.errors[0].message);
      });
    }
    /**
    *
    *
    * @static
    * @param {any} request
    * @param {any} response
    * @param {any} next
    * @returns {HandleCenterRequest} The identifier for ...
    * @memberof HandleCenterRequest
    */

  }, {
    key: 'getAllCenters',
    value: function getAllCenters(request, response, next) {
      _models.Center.findAll().then(function (centers) {
        if (centers.length <= 0) {
          return response.status(200).send({
            Status: 'Get Centers Successful',
            message: 'No Center found.'
          });
        }
        return response.status(200).send({
          Status: 'Get Centers Successful',
          'Number of Centers': ' ' + centers.length + ' ' + (centers.length === 1 ? 'center' : 'centers') + '  were found.',
          Centers: centers
        });
      }).catch(function (error) {
        next(error.errors[0].message);
      });
    }
    /**
    *
    *
    * @static
    * @param {any} request
    * @param {any} response
    * @param {any} next
    * @returns {HandleCenterRequest} The identifier for ...
    * @memberof HandleCenterRequest
    */

  }, {
    key: 'getACenter',
    value: function getACenter(request, response, next) {
      _models.Center.findOne({
        where: {
          id: request.params.centerId
        }
      }).then(function (center) {
        if (!center) {
          response.status(404).send({
            Status: 'Get Center failed',
            message: 'Center was not found.'
          });
        }
        response.status(200).send({
          Status: 'Get Center Successful',
          Center: center
        });
      }).catch(function (error) {
        next(error.errors[0].message);
      });
    }
    /**
    *
    *
    * @static
    * @param {any} request
    * @param {any} response
    * @param {any} next
    * @returns {HandleCenterRequest} The identifier for ...
    * @memberof HandleCenterRequest
    */

  }, {
    key: 'modifyCenter',
    value: function modifyCenter(request, response, next) {
      var centerObject = {
        id: request.params.centerId,
        name: request.body.name,
        address: request.body.address,
        location: request.body.location,
        center_type: request.body.center_type,
        isAvailable: request.body.isAvailable,
        capacity: request.body.capacity,
        usage_fee: request.body.usage_fee,
        added_by: request.body.added_by,
        description: request.body.description
      };

      var validateEventCreateObject = _centervalidator2.default.editObjectId(centerObject);
      if (validateEventCreateObject.isNotValid) {
        console.log(validateEventCreateObject.isNotValid);
        return response.status(400).send({
          message: validateEventCreateObject.errorCount + ' input fields data are not properly set',
          data: validateEventCreateObject.errorMessage
        });
      }

      //  check if authenticated user is an admin User
      if (request.decoded.isAdmin) {
        var eventObj = _extends({}, request.centerObject.dataValues, centerObject);

        return _models.Center.update(eventObj, {
          where: {
            id: request.params.centerId
          },
          returning: true,
          plain: true
        }).then(function (editedObject) {
          return response.status(200).send({
            Status: 'Edit Event Successful',
            'Edited Event Details': editedObject[1].dataValues
          });
        }).catch(function (error) {
          next(error.errors[0].message);
        });
      }
      if (!request.decoded.isAdmin) {
        return response.status(401).send({
          Status: 'Edit Center Failed',
          message: 'User ' + request.decoded.userID + ' is not authorized to edit Center'
        });
      }
    }
  }]);

  return HandleCenterRequest;
}();

exports.default = HandleCenterRequest;