/**
 * Validate e-mail address
 *
 * @param {String} email e-mail address
 * @return {Boolean} will return if the e-mail address is valid
 */
exports.isValid = function (email) {

  if (!email)
    throw new Error('email value shoult not an empty string');

  if (typeof email !== 'string')
    throw new Error('email value should be a string');

  var valid = false;
  var splittedEmailAddress = email.split('@');

  valid = ((splittedEmailAddress[0].length <= 64) ? true : false) ||
    ((splittedEmailAddress[1].length <= 253) ? true : false);

  return valid;
};