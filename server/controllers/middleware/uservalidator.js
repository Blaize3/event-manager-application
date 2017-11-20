/**
 *
 *
 * @class UserInputValidators
 */
class UserInputValidators {
  /**
   *
   *
   * @static
   * @param {any} userObject
   * @returns {UserInputValidators} The identifier for ...
   * @memberof UserInputValidators
   */
  static signupValidators(userObject) {
    let errorCount = 0;
    let errorMessage = 'Input error: \n';
    let hasFailed = false;
    let isValidResult = {};

    // Validate User email field
    if (typeof (userObject.email) !== 'string') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'email field must be a string,\n';
    } else if (userObject.email === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += ' email field cannot be empty,\n';
    } else if (userObject.email === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'email field cannot be null,\n';
    } else if (userObject.email === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'email field was ommitted,\n';
    }

    // Validate User password field
    if (typeof (userObject.password) !== 'string') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'password field must be a string,\n';
    } else if (userObject.password === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'password field cannot be empty,\n';
    } else if (userObject.password === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'password field cannot be null,\n';
    } else if (userObject.password === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'password field was ommitted,\n';
    }

    // Validate User firstname field
    if (typeof (userObject.firstname) !== 'string') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'firstname field must be a string,\n';
    } else if (userObject.firstname === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'firstname field cannot be empty,\n';
    } else if (userObject.firstname === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'firstname field cannot be null,\n';
    } else if (userObject.firstname === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'firstname field was ommitted,\n';
    }

    // Validate User lastname field
    if (typeof (userObject.lastname) !== 'string') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'lastname field must be a string,\n';
    } else if (userObject.lastname === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'lastname field cannot be empty,\n';
    } else if (userObject.lastname === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'lastname field cannot be null,\n';
    } else if (userObject.lastname === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'lastname field was ommitted,\n';
    }

    // Validate User isAdmin field
    if (typeof (userObject.isAdmin) !== typeof ('true')) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'isAdmin field must be a boolean,\n';
    } else if (userObject.isAdmin === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'isAdmin field cannot be empty,\n';
    } else if (userObject.isAdmin === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'isAdmin field cannot be null,\n';
    } else if (userObject.isAdmin === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'isAdmin field was ommitted,\n';
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
 * @param {any} userObject
 * @returns {UserInputValidators} The identifier for ...
 * @memberof UserInputValidators
 */
  static resetPasswordValidators(userObject) {
    let errorCount = 0;
    let errorMessage = 'Input error: \n';
    let hasFailed = false;
    let isValidResult = {};

    // Validate User email field
    if (typeof (userObject.email) !== 'string') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'email field must be a string,\n';
    } else if (userObject.email === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'email field cannot be empty,\n';
    } else if (userObject.email === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'email field cannot be null,\n';
    } else if (userObject.email === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'email field was ommitted,\n';
    }

    // Validate User newPassword field
    if (typeof (userObject.newPassword) !== 'string') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'password field must be a string,\n';
    } else if (userObject.newPassword === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'password field cannot be empty,\n';
    } else if (userObject.newPassword === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'password field cannot be null,\n';
    } else if (userObject.newPassword === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += 'password field was ommitted,\n';
    }

    isValidResult = {
      isNotValid: hasFailed,
      errorCount,
      errorMessage
    };

    return isValidResult;
  }
}

export default UserInputValidators;
