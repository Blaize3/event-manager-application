import { Center } from '../../models';
import CenterValidator from './centervalidator';
/**
 *
 *
 * @class GetEvent
 */
class GetCenter {
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
  static getOneEvent(request, response, next) {
    console.log('=============================>', request.params.centerId);
    const validateEventId = CenterValidator.validateIdparseInt((request.params.eventId, 10));
    if (validateEventId.isNotValid) {
      console.log(validateEventId.isNotValid);
      return response.status(400).send({
        Status: 'Event ID validation failed',
        message: validateEventId.errorMessage
      });
    }
    return Center
      .findOne({
        where: {
          id: parseInt(request.params.centerId)
        }
      })
      .then((returnedCenter) => {
        if (!returnedCenter) {
          console.log('====================>', 'get 1 error');
          return response.status(404).send({
            Status: 'Get Event Failed',
            message: `Event with ${request.params.eventId} was not found!`
          });
        }
        console.log('====================>', 'get 1 completed');
        request.centerObject = returnedCenter;
        next();
      })
      .catch((error) => {
        // next(error.errors[0].message);
        response.status(404);
      });
  }
}

export default GetCenter;
