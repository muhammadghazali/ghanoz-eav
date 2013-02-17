/**
 * Validate email address using techniques from RFC 3696,
 * Restrictions on email addresses http://tools.ietf.org/html/rfc3696#page-5
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

  valid = ((email.length <= 320) ? true : false) &&
    // the domain part
    ((splittedEmailAddress[1] === '') ? false : true) &&
    ((splittedEmailAddress[0].length <= 64) ? true : false) &&
    ((splittedEmailAddress[1].length <= 255) ? true : false);

  return valid;
};