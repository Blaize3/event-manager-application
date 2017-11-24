
import { Center } from '../models';
import CenterInputValidators from './middleware/centervalidator';
/**
 *
 *
 * @class HandleCenterRequest
 */
class HandleCenterRequest {
/**
 *
 *
 * @static
 * @param {any} request
 * @param {any} response
 * @param {any} next
 * @returns {HandleCenterRequest} The identifier for ...
 * @memberof HandleCenterRequest
 */
  static addCenter(request, response, next) {
    const centerObject = {
      name: request.body.name,
      address: request.body.address,
      location: request.body.location,
      center_type: request.body.center_type,
      isAvailable: request.body.isAvailable,
      capacity: parseInt(request.body.capacity, 10),
      usage_fee: parseFloat(request.body.usage_fee),
      added_by: request.body.added_by,
      description: request.body.description
    };
   
    try {
      if (typeof JSON.parse(centerObject.isAvailable) !== 'boolean') {
        centerObject.isAvailable = false;
      }
    } catch (error) {
      centerObject.isAvailable = false;
    }
    
    const validateEventCreateObject = CenterInputValidators.addCenterValidators(centerObject);
    if (validateEventCreateObject.isNotValid) {
      console.log(validateEventCreateObject.isNotValid);
      return response.status(400).send({
        message: `${validateEventCreateObject.errorCount} input fields data are not properly set`,
        data: validateEventCreateObject.errorMessage
      });
    }
    Center
      .findOne({
        where: {
          name: centerObject.name
        }
      })
      .then((isExisted) => {
        if (!isExisted) {
          //  check if authenticated user is an admin User
          if (request.decoded.isAdmin) {
            return Center
              .create(centerObject)
              .then(createdCenter => response.status(201).send({
                Status: 'Center Creaation Successful',
                'Created Center': createdCenter
              }))
              .catch((error) => {
                next(error.errors[0].message);
              });
          }
          if (!request.decoded.isAdmin) {
            response.status(401).send({
              Status: 'Add Center Failed',
              message: `User ${request.decoded.userID} is not authorized to Add Center`
            });
          }
        }
        if (isExisted) {
          return response.status(200).send({ error: 'Center name already exist, Please use a different name' });
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
 * @returns {HandleCenterRequest} The identifier for ...
 * @memberof HandleCenterRequest
 */
  static getAllCenters(request, response, next) {
    Center
      .findAll()
      .then((centers) => {
        if (centers.length <= 0) {
          return response.status(200).send({
            Status: 'Get Centers Successful',
            message: 'No Center found.'
          });
        }
        return response.status(200).send({
          Status: 'Get Centers Successful',
          'Number of Centers': ` ${centers.length} ${(centers.length === 1 ? 'center' : 'centers')}  were found.`,
          Centers: centers
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
 * @returns {HandleCenterRequest} The identifier for ...
 * @memberof HandleCenterRequest
 */
  static getACenter(request, response, next) {
    Center
      .findOne({
        where: {
          id: request.params.centerId
        }
      })
      .then((center) => {
        if (!center) {
          response.status(404).send({
            Status: 'Get Center failed',
            message: 'Center was not found.'
          });
        }
        response.status(200).send({
          Status: 'Get Center Successful',
          Center: center
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
 * @returns {HandleCenterRequest} The identifier for ...
 * @memberof HandleCenterRequest
 */
  static modifyCenter(request, response, next) {
    const centerObject = {
      id: request.params.centerId,
      name: request.body.name,
      address: request.body.address,
      location: request.body.location,
      center_type: request.body.center_type,
      isAvailable: request.body.isAvailable,
      capacity: request.body.capacity,
      usage_fee: request.body.usage_fee,
      added_by: request.body.added_by,
      description: request.body.description
    };

    const validateEventCreateObject = CenterInputValidators.editObjectId(centerObject);
    if (validateEventCreateObject.isNotValid) {
      console.log(validateEventCreateObject.isNotValid);
      return response.status(400).send({
        message: `${validateEventCreateObject.errorCount} input fields data are not properly set`,
        data: validateEventCreateObject.errorMessage
      });
    }

    //  check if authenticated user is an admin User
    if (request.decoded.isAdmin) {
      const eventObj = {
        ...request.centerObject.dataValues,
        ...centerObject
      };

      return Center
        .update(eventObj, {
          where: {
            id: request.params.centerId
          },
          returning: true,
          plain: true
        })
        .then(editedObject => response.status(200).send({
          Status: 'Edit Event Successful',
          'Edited Event Details': editedObject[1].dataValues
        }))
        .catch((error) => {
          next(error.errors[0].message);
        });
    }
    if (!request.decoded.isAdmin) {
      return response.status(401).send({
        Status: 'Edit Center Failed',
        message: `User ${request.decoded.userID} is not authorized to edit Center`
      });
    }
  }
}

export default HandleCenterRequest;
