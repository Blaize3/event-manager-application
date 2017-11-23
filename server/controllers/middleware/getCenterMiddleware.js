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
    const validateEventId = CenterValidator.validateId(request.params.eventId);
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
          id: request.params.centerId
        }
      })
      .then((returnedCenter) => {
        if (!returnedCenter) {
          return response.status(404).send({
            Status: 'Get Event Failed',
            message: `Event with ${request.params.eventId} was not found!`
          });
        }
        request.centerObject = returnedCenter;
        next();
      })
      .catch((error) => {
        next(error.errors[0].message);
      });
  }
}

export default GetCenter;
