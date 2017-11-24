/*eslint-disable*/
import { Event } from '../models';
import EventValidator from './middleware/eventvalidator';
/**
 *
 *
 * @class HandleEventRequest
 */
class HandleEventRequest {
/**
 *
 *
 * @static
 * @param {any} request
 * @param {any} response
 * @param {any} next
 * @returns {HandleEventRequest} The identifier for ...
 * @memberof HandleEventRequest
 */
  static createEvent(request, response, next) {
    const eventObject = {
      userId: parseInt(request.body.userId),
      centerId: parseInt(request.body.centerId),
      title: request.body.title,
      organizer: request.body.organizer,
      start_date: request.body.start_date,
      event_time: request.body.event_time,
      end_date: request.body.end_date,
      privacy: request.body.privacy,
      description: request.body.description
    };

    const validateEventCreateObject = EventValidator.createEventValidators(eventObject);
    if (validateEventCreateObject.isNotValid) {
      console.log(validateEventCreateObject.isNotValid);
      return response.status(400).send({
        message: `${validateEventCreateObject.errorCount} input fields data are not properly set`,
        data: validateEventCreateObject.errorMessage
      });
    }
    return Event
      .create(eventObject)
      .then(createdEvent => response.status(200).send({
        Status: 'Event Creation Successful',
        'Created Event': createdEvent
      }))
      .catch((error) => {
        next(error.errors[0].message);
      });

    // ends else if
  }
  /**
 *
 *
 * @static
 * @param {any} request
 * @param {any} response
 * @param {any} next
 * @returns {HandleEventRequest} The identifier for ...
 * @memberof HandleEventRequest
 */
  static editEvent(request, response, next) {
    const editObject = {
      id: request.params.eventId,
      userId: parseInt(request.body.userId),
      centerId: parseInt(request.body.centerId),
      title: request.body.title,
      organizer: request.body.organizer,
      start_time: request.body.start_time,
      event_time: request.body.event_time,
      end_time: request.body.end_time,
      privacy: request.body.privacy,
      description: request.body.description
    };
    const validateEventCreateObject = EventValidator.createEventValidators(editObject);
    if (validateEventCreateObject.isNotValid) {
      console.log(validateEventCreateObject.isNotValid);
      return response.status(400).send({
        message: `${validateEventCreateObject.errorCount} input fields data are not properly set`,
        data: validateEventCreateObject.errorMessage
      });
    }

    //  check if authenticated user is the creator of the event
    if (request.decoded.userID === request.eventObject.userId) {
      const eventObj={
        ...request.eventObject.dataValues,
        ...editObject
      };
      return Event
      .update(eventObj, {
        where: {
          id: request.params.eventId
        },
        returning: true,
        plain: true
      })
      .then(editedObject => {
          return response.status(200).send({
          message: 'Edit Event Successful',
          'Edited Event Details': editedObject[1].dataValues
        });
      })
      .catch((error) => {
        next(error);
      });  
    }else{
      return response.status(401).send({
        Status: 'Edit Event Failed',
        message: `User ${request.decoded.userID} is not authorized to edit this event`
      });
    }
  }
  /**
 *
 *
 * @static
 * @param {any} request
 * @param {any} response
 * @param {any} next
 * @returns {HandleEventRequest} The identifier for ...
 * @memberof HandleEventRequest
 */
  static deleteEvent(request, response, next) {
     //  check if authenticated user is the owner of the event
     if (request.decoded.userID === request.eventObject.userId) {
      return request.eventObject
      .destroy({
        returning: true,
        plain: true
      })
      .then(deletedObject => response.status(200).send({
        Status: 'Delete Event Successful',
        'Deleted Event Details': request.eventObject.dataValues
      }));
     }else{
      return response.status(401).send({
        Status: 'Delete Event Failed',
        message: `User ${request.decoded.userID} is not authorized to delete this event`
      });
     }
  }
}

export default HandleEventRequest;
