var _ = require('lodash');

// constants
var
  LOCAL_PART = 0,
  DOMAIN_PART = 1,
  MAX_LENGTH_OF_LOCAL_PART = 64,
  MAX_LENGTH_OF_DOMAIN_PART = 255;
/**
 * Validate local part of email address
 *
 * @param {String} localPart local part characters of email address
 * @return {Boolean} will return true if the local part is valid
 */
function validateLocalPart (localPart) {

  return ((localPart === '') ? false : true) &&
    ((localPart.length <= MAX_LENGTH_OF_LOCAL_PART) ? true : false) &&
    regex(localPart, LOCAL_PART);
}

/**
 * Validate domain part of email address
 *
 * @param {String} domainPart domain part characters of email address
 * @return {Boolean} will return true if the domain part is valid
 */
function validateDomainPart (domainPart) {

  return ((domainPart === '') ? false : true) &&
    ((domainPart.length <= MAX_LENGTH_OF_DOMAIN_PART) ? true : false) &&
    regex(domainPart, DOMAIN_PART);
}

/**
 * Validate email address parts
 *
 * @param {String} emailAddress email address
 */
function validateEmailAddressParts (emailAddress) {

  var splittedEmailAddress = emailAddress.split('@');

  return (validateLocalPart(splittedEmailAddress[LOCAL_PART]) &&
    validateDomainPart(splittedEmailAddress[DOMAIN_PART]));
}

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
 * Validate email address argument
 */
function validateEmailAddressArgument (emailAddress) {

  if (!emailAddress)
    throw new Error('please provide an email address');

  if (!_.isString(emailAddress))
    throw new Error('email value should be a string');
}

/**
 * Validate email address using techniques from RFC 3696,
 * Restrictions on email addresses http://tools.ietf.org/html/rfc3696#page-5
 *
 * @param {String} emailAddress e-mail address
 * @return {Boolean} will return true if the e-mail address is valid
 */
exports.isValid = function (emailAddress) {

  validateEmailAddressArgument(emailAddress);

  return validateEmailAddressParts(emailAddress);
};