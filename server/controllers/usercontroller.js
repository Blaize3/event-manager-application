import { User } from '../models';
import securePassword from './middleware/bcrypt';
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
      password: request.body.password,
      firstname: request.body.firstname,
      lastname: request.body.lastname,
      username: request.body.username,
      isAdmin: JSON.parse(request.body.isAdmin)
    };
    const validateAccountCreateObject = UserInputValidators.signupValidators(userObject);
    if (validateAccountCreateObject.isNotValid) {
      return response.status(400).send({
        message: `${validateAccountCreateObject.errorCount} input fields data are not properly set`,
        data: validateAccountCreateObject.errorMessage
      });
    }
    console.log(validateAccountCreateObject.isNotValid);
    User.beforeCreate((userObject) => {
      userObject.password = securePassword.encryptPassword(userObject.password);
    });
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
            .then(createdUser => response.status(200).send({
              Status: 'Account Creaation Successful',
              'Created Account': {
                email: createdUser.email,
                username: createdUser.username,
                firstname: createdUser.firstname,
                lastname: createdUser.lastname,
                isAdmin: createdUser.isAdmin
              }
            }))
            .catch((error) => {
              next(error.errors[0].message);
            });
        }
        if (isExisted) {
          if (isExisted.email === request.body.email && isExisted.username === request.body.username) {
            return response.status(200).send({ error: 'email and username already exist' });
          } else if (isExisted.email === request.body.email) {
            return response.status(200).send({ error: 'email already exist' });
          } else if (isExisted.username === request.body.username) {
            return response.status(200).send({ error: 'username already exist' });
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
        const hash = loggedInUser.password;
        const isAuthenticationSuccessful = securePassword.decryptPassword(request.body.password, hash);
        if (isAuthenticationSuccessful) {
          const payLoad = {
            userID: loggedInUser.id, email: loggedInUser.email, firstname: loggedInUser.firstname, lastname: loggedInUser.lastname, isAdmin: loggedInUser.isAdmin
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
  static password(request, response, next) {
    const userObject = {
      email: request.body.email,
      newPassword: request.body.newPassword
    };

    const validateAccountCreateObject = UserInputValidators.resetPasswordValidators(userObject);
    if (validateAccountCreateObject.isNotValid) {
      console.log(validateAccountCreateObject.isNotValid);
      return response.status(400).send({
        message: `${validateAccountCreateObject.errorCount} input fields data are not properly set`,
        data: validateAccountCreateObject.errorMessage
      });
    }
    return User
      .findOne({
        where: {
          email: userObject.email
        }
      })
      .then((user) => {
        if (!user) {
          return response.status(404).send({
            Status: 'Password Reset failed',
            message: 'User account does not exist'
          });
        }

        userObject.newPassword = securePassword.encryptPassword(userObject.newPassword);

        const updateObject = {
          id: user.id,
          email: user.email,
          password: userObject.newPassword,
          firstname: user.firstname,
          lastname: user.lastname,
          sex: user.sex
        };

        return User
          .update(updateObject, {
            where: {
              id: user.id
            },
            returning: true,
            plain: true
          })
          .then(updatedUser => response.status(200).send({
            Status: 'Password Reset Successful',
            'Account Details': {
              id: updatedUser[1].dataValues.id,
              email: updatedUser[1].dataValues.email,
              username: updatedUser[1].dataValues.username,
              firstname: updatedUser[1].dataValues.firstname,
              lastname: updatedUser[1].dataValues.lastname,
              isAdmin: updatedUser[1].dataValues.isAdmin
            }
          }))
          .catch((error) => {
            next(error.errors[0].message);
          });
      })
      .catch((error) => {
        next(error.errors[0].message);
      });
  }
}

export default HandleUserRequests;
