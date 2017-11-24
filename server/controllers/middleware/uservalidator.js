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
    let errorMessage = 'Input error: ';
    let hasFailed = false;
    let isValidResult = {};

    // Validate User email field
    if (typeof (userObject.email) !== 'string') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Email field must be a string, `;
    } else if (userObject.email === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Email field cannot be empty, `;
    } else if (userObject.email === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Email field cannot be null, `;
    } else if (userObject.email === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Email field was ommitted, `;
    }

    // Validate User password field
    if (typeof (userObject.password) !== 'string') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Password field must be a string, `;
    } else if (userObject.password === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Password field cannot be empty, `;
    } else if (userObject.password === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Password field cannot be null, `;
    } else if (userObject.password === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Password field was ommitted, `;
    }

    // Validate User firstname field
    if (typeof (userObject.firstname) !== 'string') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Firstname field must be a string, `;
      errorMessage += ',\n';
    } else if (userObject.firstname === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Firstname field cannot be empty, `;
    } else if (userObject.firstname === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Firstname field cannot be null, `;
    } else if (userObject.firstname === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Firstname field was ommitted, `;
    }

    // Validate User lastname field
    if (typeof (userObject.lastname) !== 'string') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Lastname field must be a string, `;
    } else if (userObject.lastname === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Lastname field cannot be empty, `;
    } else if (userObject.lastname === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Lastname field cannot be null, `;
    } else if (userObject.lastname === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Lastname field was ommitted, `;
    }

    // Validate User isAdmin field
    userObject.isAdmin = Boolean(userObject.isAdmin);
    if (typeof (userObject.isAdmin) !== typeof (true)) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. isAdmin field must be a boolean, `;
    } else if (userObject.isAdmin === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. isAdmin field cannot be empty, `;
      errorMessage += ',\n';
    } else if (userObject.isAdmin === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. isAdmin field cannot be null, `;
    } else if (userObject.isAdmin === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. isAdmin field was ommitted, `;
      errorMessage += ',\n';
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
    let errorMessage = 'Input error: ';
    let hasFailed = false;
    let isValidResult = {};

    // Validate User email field
    if (typeof (userObject.email) !== 'string') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Email field must be a string, `;
    } else if (userObject.email === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Email field cannot be empty, `;
    } else if (userObject.email === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Email field cannot be null, `;
    } else if (userObject.email === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Email field was ommitted, `;
    }

    // Validate User newPassword field
    if (typeof (userObject.newPassword) !== 'string') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Password field must be a string, `;
    } else if (userObject.newPassword === '') {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Password field cannot be empty, `;
    } else if (userObject.newPassword === null) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Password field cannot be null, `;
    } else if (userObject.newPassword === undefined) {
      hasFailed = true;
      errorCount += 1;
      errorMessage += `${errorCount}. Password field was ommitted, `;
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
