'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// import securePassword from './middleware/bcrypt';


var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _models = require('../models');

var _token = require('./middleware/token');

var _token2 = _interopRequireDefault(_token);

var _uservalidator = require('./middleware/uservalidator');

var _uservalidator2 = _interopRequireDefault(_uservalidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 *
 * @class HandleUserRequests
 */
var HandleUserRequests = function () {
  function HandleUserRequests() {
    _classCallCheck(this, HandleUserRequests);
  }

  _createClass(HandleUserRequests, null, [{
    key: 'signup',

    /**
       *
       *
       * @static
       * @param {any} request
       * @param {any} response
       * @param {any} next
       * @returns {HandleUserRequest} The identifier for ...
       * @memberof HandleUserRequests
       */
    value: function signup(request, response, next) {
      var userObject = {
        email: request.body.email.toLowerCase().trim(),
        password: _bcrypt2.default.hashSync(request.body.password, 10),
        firstname: request.body.firstname.trim(),
        lastname: request.body.lastname.trim(),
        username: request.body.username.trim(),
        isAdmin: request.body.isAdmin,
        role: request.body.role.trim()
      };

      try {
        if (typeof JSON.parse(userObject.isAdmin) !== 'boolean') {
          userObject.isAdmin = false;
        }
      } catch (error) {
        userObject.isAdmin = false;
      }

      var validateAccountCreateObject = _uservalidator2.default.signupValidators(userObject);
      if (validateAccountCreateObject.isNotValid) {
        return response.status(400).send({
          message: validateAccountCreateObject.errorCount + ' input fields data are not properly set',
          data: validateAccountCreateObject.errorMessage
        });
      }
      // console.log(validateAccountCreateObject.isNotValid);
      // User.beforeCreate((userObject) => {
      //   userObject.password = securePassword.encryptPassword(userObject.password);
      // });
      _models.User.findOne({
        where: {
          $or: [{ email: userObject.email }, { username: userObject.username }]
        }
      }).then(function (isExisted) {
        if (!isExisted) {
          return _models.User.create(userObject).then(function (createdUser) {
            var payLoad = {
              userID: createdUser.id, email: createdUser.email, firstname: createdUser.firstname, lastname: createdUser.lastname, isAdmin: createdUser.isAdmin, role: createdUser.role
            };
            var token = _token2.default.generateToken(payLoad);

            response.status(201).send({
              message: 'Account Creaation Successful',
              'Created Account': {
                id: createdUser.id,
                email: createdUser.email,
                username: createdUser.username,
                firstname: createdUser.firstname,
                lastname: createdUser.lastname,
                isAdmin: createdUser.isAdmin,
                role: createdUser.role
              },
              token: token
            });
          }).catch(function (error) {
            next(error.errors[0].message);
          });
        }
        if (isExisted) {
          if (isExisted.email === request.body.email && isExisted.username === request.body.username) {
            return response.status(403).send({ error: 'email and username already exist' });
          } else if (isExisted.email === request.body.email) {
            return response.status(403).send({ error: 'email already exist' });
          } else if (isExisted.username === request.body.username) {
            return response.status(403).send({ error: 'username already exist' });
          }
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
    * @returns {HandleUserRequest} The identifier for ...
    * @memberof HandleUserRequests
    */

  }, {
    key: 'signin',
    value: function signin(request, response, next) {
      return _models.User.findOne({
        where: {
          email: request.body.email
        }
      }).then(function (loggedInUser) {
        if (!loggedInUser) {
          return response.status(401).send({
            Status: 'Login failed',
            message: 'invalid email'
          });
        }
        var hashedPassword = _bcrypt2.default.compareSync(request.body.password, loggedInUser.password);
        // const isAuthenticationSuccessful = securePassword.decryptPassword(request.body.password, hash);
        if (hashedPassword) {
          var payLoad = {
            userID: loggedInUser.id, email: loggedInUser.email, firstname: loggedInUser.firstname, lastname: loggedInUser.lastname, isAdmin: loggedInUser.isAdmin, role: loggedInUser.role
          };
          var token = _token2.default.generateToken(payLoad);
          return response.status(200).send({
            message: 'Login Successful',
            'Account Details': {
              id: loggedInUser.id,
              email: loggedInUser.email,
              username: loggedInUser.username,
              firstname: loggedInUser.firstname,
              lastname: loggedInUser.lastname,
              isAdmin: loggedInUser.isAdmin,
              role: loggedInUser.role
            },
            token: token
          });
        }
        return response.status(401).send({
          Status: 'Login failed',
          message: 'invalid password'
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
    * @returns {HandleUserRequest} The identifier for ...
    * @memberof HandleUserRequests
    */

  }, {
    key: 'makeAdmin',
    value: function makeAdmin(request, response, next) {
      var userObject = {
        email: request.body.email,
        isAdmin: true,
        role: 'Admin'
      };
      return _models.User.findOne({
        where: {
          email: userObject.email
        }
      }).then(function (user) {
        if (!user) {
          return response.status(404).send({
            Status: 'Failed to get user',
            message: ' User not Found'
          });
        }
        // 000000000000000000000000000000
        if (request.decoded.isAdmin && request.decoded.role === 'super user') {
          var updateObj = _extends({}, user, userObject);

          return _models.User.update(updateObj, {
            where: {
              id: updateObj.id
            },
            returning: true,
            plain: true
          }).then(function (upgradedUser) {
            return response.status(200).send({
              message: 'User ' + upgradedUser.id + ' has been made an Admin',
              'User Details': {
                id: upgradedUser.id,
                email: upgradedUser.email,
                username: upgradedUser.username,
                firstname: upgradedUser.firstname,
                lastname: upgradedUser.lastname,
                isAdmin: upgradedUser.isAdmin,
                role: upgradedUser.role
              }
            });
          }).catch(function (error) {
            next(error.errors[0].message);
          });
        }
        if (!request.decoded.isAdmin) {
          return response.status(401).send({
            Status: 'Upgrade User Failed',
            message: 'User ' + request.decoded.userID + ' is not authorized to create privileged Users'
          });
        }
        // 0000000000000000000000000000000
      }).catch(function (error) {
        next(error.errors[0].message);
      });
    }
  }]);

  return HandleUserRequests;
}();

exports.default = HandleUserRequests;