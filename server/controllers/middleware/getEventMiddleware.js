import { Event } from '../../models';
import EventValidator from './eventvalidator';
/**
 *
 *
 * @class GetEvent
 */
class GetEvent {
  /**
   *
   *
   * @static
   * @param {any} request
   * @param {any} response
   * @param {any} next
   * @returns {GetEvent} The identifier for ...
   * @memberof GetEvent
   */
  static getOneEvent(request, response, next) {
    const validateEventId = EventValidator.validateId(parseInt(request.params.eventId, 10));
    if (validateEventId.isNotValid) {
      console.log(validateEventId.isNotValid);
      return response.status(400).send({
        Status: 'Event ID validation failed',
        message: validateEventId.errorMessage
      });
    }
    return Event
      .findOne({
        where: {
          id: request.params.eventId
        }
      })
      .then((returnedEvent) => {
        if (!returnedEvent) {
          return response.status(404).send({
            Status: 'Get Event Failed',
            message: `Event with ID ${request.params.eventId} was not found!`
          });
        }
        request.eventObject = returnedEvent;
        next();
      })
      .catch((error) => {
        next(error.errors[0].message);
      });
  }
}

export default GetEvent;
