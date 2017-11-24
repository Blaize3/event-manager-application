import bcrypt from 'bcrypt';
import { User } from '../models';
// import securePassword from './middleware/bcrypt';
import Token from './middleware/token';
import UserInputValidators from './middleware/uservalidator';
/**
 *
 *
 * @class HandleUserRequests
 */
class HandleUserRequests {
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
  static signup(request, response, next) {
    const userObject = {
      email: request.body.email,
      password: bcrypt.hashSync(request.body.password, 10),
      firstname: request.body.firstname,
      lastname: request.body.lastname,
      username: request.body.username,
      isAdmin: request.body.isAdmin,
      role: request.body.role
    };

    try {
      if (typeof JSON.parse(userObject.isAdmin) !== 'boolean') {
        userObject.isAdmin = false;
      }
    } catch (error) {
      userObject.isAdmin = false;
    }

    const validateAccountCreateObject = UserInputValidators.signupValidators(userObject);
    if (validateAccountCreateObject.isNotValid) {
      return response.status(400).send({
        message: `${validateAccountCreateObject.errorCount} input fields data are not properly set`,
        data: validateAccountCreateObject.errorMessage
      });
    }
    // console.log(validateAccountCreateObject.isNotValid);
    // User.beforeCreate((userObject) => {
    //   userObject.password = securePassword.encryptPassword(userObject.password);
    // });
    User
      .findOne({
        where: {
          $or: [
            { email: userObject.email },
            { username: userObject.username }
          ]
        }
      })
      .then((isExisted) => {
        if (!isExisted) {
          return User
            .create(userObject)
            .then((createdUser) => {
              const payLoad = {
                userID: createdUser.id, email: createdUser.email, firstname: createdUser.firstname, lastname: createdUser.lastname, isAdmin: createdUser.isAdmin, role: createdUser.role
              };
              const token = Token.generateToken(payLoad);

              response.status(201).send({
                Status: 'Account Creaation Successful',
                'Created Account': {
                  id: createdUser.id,
                  email: createdUser.email,
                  username: createdUser.username,
                  firstname: createdUser.firstname,
                  lastname: createdUser.lastname,
                  isAdmin: createdUser.isAdmin,
                  role: createdUser.role
                },
                token
              });
            })
            .catch((error) => {
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
      })
      .catch((error) => {
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
  static signin(request, response, next) {
    return User
      .findOne({
        where: {
          email: request.body.email
        }
      })
      .then((loggedInUser) => {
        if (!loggedInUser) {
          return response.status(401).send({
            Status: 'Login failed',
            message: 'invalid email'
          });
        }
        const hashedPassword = bcrypt.compareSync(request.body.password, loggedInUser.password);
        // const isAuthenticationSuccessful = securePassword.decryptPassword(request.body.password, hash);
        if (hashedPassword) {
          const payLoad = {
            userID: loggedInUser.id, email: loggedInUser.email, firstname: loggedInUser.firstname, lastname: loggedInUser.lastname, isAdmin: loggedInUser.isAdmin, role: loggedInUser.role
          };
          const token = Token.generateToken(payLoad);
          return response.status(200).send({
            Status: 'Login Successful',
            'Account Details': {
              id: loggedInUser.id,
              email: loggedInUser.email,
              username: loggedInUser.username,
              firstname: loggedInUser.firstname,
              lastname: loggedInUser.lastname,
              isAdmin: loggedInUser.isAdmin
            },
            token
          });
        }
        return response.status(401).send({
          Status: 'Login failed',
          message: 'invalid password'
        });
      })
      .catch((error) => {
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
  static makeAdmin(request, response, next) {
    const userObject = {
      email: request.body.email,
      isAdmin: true,
      role: 'Admin'
    };
    return User
      .findOne({
        where: {
          email: userObject.email
        }
      })
      .then((user) => {
        if (!user) {
          return response.status(404).send({
            Status: 'Failed to get user',
            message: ' User not Found'
          });
        }
        // 000000000000000000000000000000
        if (request.decoded.isAdmin && request.decoded.role === 'super user') {
          const updateObj = {
            ...user,
            ...userObject
          };

          return User
            .update(updateObj, {
              where: {
                id: updateObj.id
              },
              returning: true,
              plain: true
            })
            .then(upgradedUser => response.status(200).send({
              Status: `User ${upgradedUser.id} has been made an Admin`,
              'User Details': {
                id: upgradedUser.id,
                email: upgradedUser.email,
                username: upgradedUser.username,
                firstname: upgradedUser.firstname,
                lastname: upgradedUser.lastname,
                isAdmin: upgradedUser.isAdmin,
                role: upgradedUser.role
              }
            }))
            .catch((error) => {
              next(error.errors[0].message);
            });
        }
        if (!request.decoded.isAdmin) {
          return response.status(401).send({
            Status: 'Upgrade User Failed',
            message: `User ${request.decoded.userID} is not authorized to create privileged Users`
          });
        }
        // 0000000000000000000000000000000
      })
      .catch((error) => {
        next(error.errors[0].message);
      });
  }
}

export default HandleUserRequests;
