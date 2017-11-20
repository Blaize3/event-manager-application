import { User } from '../../models';
import Token from './token';
/**
 *
 *
 * @class checkUserAuthentication
 */
class checkUserAuthentication {
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
  static isAuthenticated(request, response, next) {
    const token = request.headers['x-access-token'];
    console.log(token);
    const decoded = Token.decodeToken(token);
    console.log(decoded);


    if (decoded === 'no token') {
      return response.status(401).send({
        message: 'Access denied..'
      });
    }
    return User
      .findOne({
        where: {
          id: parseInt(decoded.userID)
        }
      })
      .then((user) => {
        request.decoded = decoded;
        next();
      })
      .catch(() => response.status(500).send({
        message: 'Authentication failed...'
      }));
  }
}

export default checkUserAuthentication;
