'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 *
 * @class securePassword
 */
var securePassword = function () {
  function securePassword() {
    _classCallCheck(this, securePassword);
  }

  _createClass(securePassword, null, [{
    key: 'encryptPassword',

    /**
     *
     *
     * @static
     * @param {any} password
     * @returns {securePassword} The identifier for ...
     * @memberof securePassword
     */
    value: function encryptPassword(password) {
      var hash = _bcrypt2.default.hashSync(password, 10);
      return hash;
    }
    /**
    *
    *
    * @static
    * @param {any} password
    * @param {any} hash
    * @returns {securePassword} The identifier for ...
    * @memberof securePassword
    */

  }, {
    key: 'decryptPassword',
    value: function decryptPassword(password, hash) {
      return _bcrypt2.default.compareSync(password, hash);
    }
  }]);

  return securePassword;
}();

exports.default = securePassword;