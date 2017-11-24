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
    const hash = bcrypt.hashSync(password, 10);
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
