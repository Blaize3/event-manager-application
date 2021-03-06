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
    const token = request.body.token || request.query.token || request.headers['x-access-token'];

    const decoded = Token.decodeToken(token);

    if (decoded === 'no token') {
      return response.status(401).send({
        message: 'Access denied..'
      });
    }
    return User
      .findOne({
        where: {
          id: parseInt(decoded.userID, 10)
        }
      })
      .then(() => {
        console.log('====================>', 'auth completed');
        request.decoded = decoded;
        next();
      })
      .catch(() => response.status(500).send({
        message: 'Authentication failed...'
      }));
  }
}

export default checkUserAuthentication;
