/**
 *
 *
 * @class CenterInputValidators
 */
class CenterInputValidators {
  /**
   *
   *
   * @static
   * @param {any} centerObject
   * @returns {CenterInputValidators} The identifier for ...
   * @memberof CenterInputValidators
   */
  static addCenterValidators(centerObject) {
    let errorCount = 0;
    let errorMessage = 'Input error: ';
    let hasFailed = false;
    let isValidResult = {};

    // Validate Center name field
    if (typeof (centerObject.name) !== 'string') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center name field must be a string, `;
    } else if (centerObject.name === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center name field cannot be empty, `;
    } else if (centerObject.name === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center name field cannot be null, `;
    } else if (centerObject.name === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center name field was ommitted, `;
    }

    // Validate Center address field
    if (typeof (centerObject.address) !== 'string') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center address field must be a string, `;
    } else if (centerObject.address === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center address field cannot be empty, `;
    } else if (centerObject.address === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center address field cannot be null, `;
    } else if (centerObject.address === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center address field was ommitted, `;
    }

    // Validate Center location field
    if (typeof (centerObject.location) !== 'string') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center location field must be a string, `;
    } else if (centerObject.location === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center location field cannot be empty, `;
    } else if (centerObject.location === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center location field cannot be null, `;
    } else if (centerObject.location === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center location field was ommitted, `;
    }

    // Validate Center type field
    if (typeof (centerObject.center_type) !== 'string') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center type field must be a string, `;
    } else if (centerObject.center_type === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center type field cannot be empty, `;
    } else if (centerObject.center_type === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center type field cannot be null, `;
    } else if (centerObject.center_type === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center type field was ommitted, `;
    }

    // Validate Center isAvailable field
    centerObject.isAvailable = Boolean(centerObject.isAvailable);
    if (typeof (centerObject.isAvailable) !== typeof (true)) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center isAvailable field must be a boolean, `;
    } else if (centerObject.isAvailable === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center isAvailable field cannot be empty, `;
    } else if (centerObject.isAvailable === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center isAvailable field cannot be null, `;
    } else if (centerObject.isAvailable === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center isAvailable field was ommitted, `;
    }

    // Validate Center capacity field
    if (typeof (centerObject.capacity) !== 'number') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center capacity field must be a number, `;
    } else if (centerObject.capacity === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center capacity field cannot be empty, `;
    } else if (centerObject.capacity === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center capacity field cannot be null, `;
    } else if (centerObject.capacity === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center capacity field was ommitted, `;
    }

    // Validate Center usage fee field
    if (typeof (centerObject.usage_fee) !== 'number') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center usage fee field must be a number, `;
    } else if (centerObject.usage_fee === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center usage fee field cannot be empty, `;
    } else if (centerObject.usage_fee === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center usage fee field cannot be null, `;
    } else if (centerObject.usage_fee === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center usage fee field was ommitted, `;
    }

    // Validate Center added by field
    if (typeof (centerObject.added_by) !== 'string') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center added by field must be a string, `;
    } else if (centerObject.added_by === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center added by field cannot be empty, `;
    } else if (centerObject.added_by === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center added by field cannot be null, `;
    } else if (centerObject.added_by === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center added by field was ommitted, `;
    }

    // Validate Center description field
    if (typeof (centerObject.description) !== 'string') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center added by field must be a string, `;
    } else if (centerObject.description === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center added by field cannot be empty, `;
    } else if (centerObject.description === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center added by field cannot be null, `;
    } else if (centerObject.description === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center added by field was ommitted, `;
    }

    isValidResult = {
      isNotValid: hasFailed,
      errorCount,
      errorMessage
    };

    return isValidResult;
  }

  /**
  *
  *
  * @static
  * @param {any} centerObject
  * @returns  {EventInputValidators} The identifier for ...
  * @memberof EventInputValidators
  */
  static editObjectId(centerObject) {
    let errorCount = 0;
    let errorMessage = 'Input error: ';
    let hasFailed = false;
    let isValidResult = {};

    // Validate Event ID field
    if (isNaN(centerObject.id)) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center ID field must be a number, `;
    } else if (centerObject.id === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center ID field cannot be empty, `;
    } else if (centerObject.id === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center ID field cannot be null, `;
    } else if (centerObject.id === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center ID field was ommitted, `;
    }

    // Validate Center name field
    if (typeof (centerObject.name) !== 'string') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center name field must be a string, `;
    } else if (centerObject.name === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center name field cannot be empty, `;
    } else if (centerObject.name === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center name field cannot be null, `;
    } else if (centerObject.name === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center name field was ommitted, `;
    }

    // Validate Center address field
    if (typeof (centerObject.address) !== 'string') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center address field must be a string, `;
    } else if (centerObject.address === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center address field cannot be empty, `;
    } else if (centerObject.address === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center address field cannot be null, `;
    } else if (centerObject.address === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center address field was ommitted, `;
    }

    // Validate Center location field
    if (typeof (centerObject.location) !== 'string') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center location field must be a string, `;
    } else if (centerObject.location === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center location field cannot be empty, `;
    } else if (centerObject.location === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center location field cannot be null, `;
    } else if (centerObject.location === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center location field was ommitted, `;
    }

    // Validate Center type field
    if (typeof (centerObject.center_type) !== 'string') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center type field must be a string, `;
    } else if (centerObject.center_type === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center type field cannot be empty, `;
    } else if (centerObject.center_type === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center type field cannot be null, `;
    } else if (centerObject.center_type === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center type field was ommitted, `;
    }

    // Validate Center isAvailable field
    if (typeof (centerObject.isAvailable) !== typeof (true)) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center isAvailable field must be a boolean, `;
    } else if (centerObject.isAvailable === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center isAvailable field cannot be empty, `;
    } else if (centerObject.isAvailable === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center isAvailable field cannot be null, `;
    } else if (centerObject.isAvailable === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center isAvailable field was ommitted, `;
    }

    // Validate Center capacity field
    if (typeof (centerObject.capacity) !== 'number') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center capacity field must be a number, `;
    } else if (centerObject.capacity === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center capacity field cannot be empty, `;
    } else if (centerObject.capacity === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center capacity field cannot be null, `;
    } else if (centerObject.capacity === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center capacity field was ommitted, `;
    }

    // Validate Center usage fee field
    if (typeof (centerObject.usage_fee) !== 'number') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center usage fee field must be a number, `;
    } else if (centerObject.usage_fee === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center usage fee field cannot be empty, `;
    } else if (centerObject.usage_fee === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center usage fee field cannot be null, `;
    } else if (centerObject.usage_fee === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center usage fee field was ommitted, `;
    }

    // Validate Center added by field
    if (typeof (centerObject.added_by) !== 'string') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center added by field must be a string, `;
    } else if (centerObject.added_by === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center added by field cannot be empty, `;
    } else if (centerObject.added_by === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center added by field cannot be null, `;
    } else if (centerObject.added_by === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center added by field was ommitted, `;
    }

    // Validate Center description field
    if (typeof (centerObject.description) !== 'string') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center added by field must be a string, `;
    } else if (centerObject.description === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center added by field cannot be empty, `;
    } else if (centerObject.description === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center added by field cannot be null, `;
    } else if (centerObject.description === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center added by field was ommitted, `;
    }

    isValidResult = {
      isNotValid: hasFailed,
      errorCount,
      errorMessage
    };

    return isValidResult;
  }
  /**
 *
 *
 * @static
 * @param {any} id
 * @returns  {EventInputValidators} The identifier for ...
 * @memberof CenterInputValidators
 */
  static validateId(id) {
    let errorCount = 0;
    let errorMessage = 'Input error: ';
    let hasFailed = false;
    let isValidResult = {};

    // Validate Event ID field
    if (isNaN(id)) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center ID field must be a number, `;
    } else if (id === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center ID field cannot be empty, `;
    } else if (id === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center ID field cannot be null, `;
    } else if (id === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Center ID field was ommitted, `;
    }

    isValidResult = {
      isNotValid: hasFailed,
      errorCount,
      errorMessage
    };

    return isValidResult;
  }
}

export default CenterInputValidators;
