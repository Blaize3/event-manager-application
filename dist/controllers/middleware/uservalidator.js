'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 *
 * @class UserInputValidators
 */
var UserInputValidators = function () {
  function UserInputValidators() {
    _classCallCheck(this, UserInputValidators);
  }

  _createClass(UserInputValidators, null, [{
    key: 'signupValidators',

    /**
     *
     *
     * @static
     * @param {any} userObject
     * @returns {UserInputValidators} The identifier for ...
     * @memberof UserInputValidators
     */
    value: function signupValidators(userObject) {
      var errorCount = 0;
      var errorMessage = 'Input error: ';
      var hasFailed = false;
      var isValidResult = {};

      // Validate User email field
      if (typeof userObject.email !== 'string') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Email field must be a string, ';
      } else if (userObject.email === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Email field cannot be empty, ';
      } else if (userObject.email === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Email field cannot be null, ';
      } else if (userObject.email === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Email field was ommitted, ';
      }

      // Validate User password field
      if (typeof userObject.password !== 'string') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Password field must be a string, ';
      } else if (userObject.password === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Password field cannot be empty, ';
      } else if (userObject.password === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Password field cannot be null, ';
      } else if (userObject.password === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Password field was ommitted, ';
      }

      // Validate User firstname field
      if (typeof userObject.firstname !== 'string') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Firstname field must be a string, ';
        errorMessage += ',\n';
      } else if (userObject.firstname === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Firstname field cannot be empty, ';
      } else if (userObject.firstname === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Firstname field cannot be null, ';
      } else if (userObject.firstname === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Firstname field was ommitted, ';
      }

      // Validate User lastname field
      if (typeof userObject.lastname !== 'string') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Lastname field must be a string, ';
      } else if (userObject.lastname === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Lastname field cannot be empty, ';
      } else if (userObject.lastname === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Lastname field cannot be null, ';
      } else if (userObject.lastname === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Lastname field was ommitted, ';
      }

      // Validate User isAdmin field
      userObject.isAdmin = Boolean(userObject.isAdmin);
      if (_typeof(userObject.isAdmin) !== _typeof(true)) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. isAdmin field must be a boolean, ';
      } else if (userObject.isAdmin === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. isAdmin field cannot be empty, ';
        errorMessage += ',\n';
      } else if (userObject.isAdmin === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. isAdmin field cannot be null, ';
      } else if (userObject.isAdmin === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. isAdmin field was ommitted, ';
        errorMessage += ',\n';
      }

      // Validate User role field
      if (typeof userObject.role !== 'string') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Role field must be a string, ';
        errorMessage += ',\n';
      } else if (userObject.role === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Role field cannot be empty, ';
      } else if (userObject.role === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Role field cannot be null, ';
      } else if (userObject.role === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Role field was ommitted, ';
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
    * @returns {UserInputValidators} The identifier for ...
    * @memberof UserInputValidators
    */

  }, {
    key: 'resetPasswordValidators',
    value: function resetPasswordValidators(userObject) {
      var errorCount = 0;
      var errorMessage = 'Input error: ';
      var hasFailed = false;
      var isValidResult = {};

      // Validate User email field
      if (typeof userObject.email !== 'string') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Email field must be a string, ';
      } else if (userObject.email === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Email field cannot be empty, ';
      } else if (userObject.email === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Email field cannot be null, ';
      } else if (userObject.email === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Email field was ommitted, ';
      }

      // Validate User newPassword field
      if (typeof userObject.newPassword !== 'string') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Password field must be a string, ';
      } else if (userObject.newPassword === '') {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Password field cannot be empty, ';
      } else if (userObject.newPassword === null) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Password field cannot be null, ';
      } else if (userObject.newPassword === undefined) {
        hasFailed = true;
        errorCount += 1;
        errorMessage += errorCount + '. Password field was ommitted, ';
      }

      isValidResult = {
        isNotValid: hasFailed,
        errorCount: errorCount,
        errorMessage: errorMessage
      };

      return isValidResult;
    }
  }]);

  return UserInputValidators;
}();

exports.default = UserInputValidators;