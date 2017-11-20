import bcrypt from 'bcrypt';
/**
 *
 *
 * @class securePassword
 */
class securePassword {
/**
 *
 *
 * @static
 * @param {any} password
 * @returns {securePassword} The identifier for ...
 * @memberof securePassword
 */
  static encryptPassword(password) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }
  /**
 *
 *
 * @static
 * @param {any} password
 * @param {any} hash
 * @returns {securePassword} The identifier for ...
 * @memberof securePassword
 */
  static decryptPassword(password, hash) {
    return bcrypt.compareSync(password, hash);
  }
}

export default securePassword;
