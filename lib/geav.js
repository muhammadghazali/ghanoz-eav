/**
 * Validate string using regular expression.
 *
 * @param {String} string a string
 * @param {String} part email address part (local or domain)
 * @return {Boolean} will return true if the regex test is successful
 */
function regex (string, part) {

  if (!string)
    throw new Error('string value should not an empty string');

  var regex = null;

  if (part === 0)
    regex = /\w/g;
  else if (part === 1)
    regex = /\w/g;

  return regex.test(string);
}

/**
 * Validate email address using techniques from RFC 3696,
 * Restrictions on email addresses http://tools.ietf.org/html/rfc3696#page-5
 *
 * @param {String} emailAddress e-mail address
 * @return {Boolean} will return true if the e-mail address is valid
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
    ((domainPart.length <= 255) ? true : false) &&
    regex(localPart, 0) && regex(domainPart, 1);

  return isValid;
};