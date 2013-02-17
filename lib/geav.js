/**
 * Validate email address using techniques from RFC 3696,
 * Restrictions on email addresses http://tools.ietf.org/html/rfc3696#page-5
 *
 * @param {String} emailAddress e-mail address
 * @return {Boolean} will return if the e-mail address is valid
 */
exports.isValid = function (emailAddress) {

  if (!emailAddress)
    throw new Error('email value shoult not an empty string');

  if (typeof emailAddress !== 'string')
    throw new Error('email value should be a string');

  var isValid = false;
  var splittedEmailAddress = emailAddress.split('@');
  var localPart = splittedEmailAddress[0];
  var domainPart = splittedEmailAddress[1];

  isValid = ((emailAddress.length <= 320) ? true : false) &&
    ((localPart === '') ? false : true) &&
    ((domainPart === '') ? false : true) &&
    ((localPart.length <= 64) ? true : false) &&
    ((domainPart.length <= 255) ? true : false);

  return isValid;
};