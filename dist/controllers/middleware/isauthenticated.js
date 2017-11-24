'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../../models');

var _token = require('./token');

var _token2 = _interopRequireDefault(_token);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 *
 * @class checkUserAuthentication
 */
var checkUserAuthentication = function () {
  function checkUserAuthentication() {
    _classCallCheck(this, checkUserAuthentication);
  }

  _createClass(checkUserAuthentication, null, [{
    key: 'isAuthenticated',

    /**
     *
     *
     * @static
     * @param {any} request
     * @param {any} response
     * @param {any} next
     * @returns {checkUserAuthentication} The identifier for ...
     * @memberof checkUserAuthentication
     */
    value: function isAuthenticated(request, response, next) {
      var token = request.body.token || request.query.token || request.headers['x-access-token'];

      var decoded = _token2.default.decodeToken(token);

      if (decoded === 'no token') {
        return response.status(401).send({
          message: 'Access denied..'
        });
      }
      return _models.User.findOne({
        where: {
          id: parseInt(decoded.userID, 10)
        }
      }).then(function () {
        console.log('====================>', 'auth completed');
        request.decoded = decoded;
        next();
      }).catch(function () {
        return response.status(500).send({
          message: 'Authentication failed...'
        });
      });
    }
  }]);

  return checkUserAuthentication;
}();

exports.default = checkUserAuthentication;