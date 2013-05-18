/**
 * Domain part of e-mail address test suite.
 */

var
  vows = require('vows'),
  assert = require('assert'),
  geav = require('./../index.js');

/**
 * Scenario: domain part is less than 255 characters
 *
 * Given domain part length is less than 255 characters
 * When validating
 * Then the validation should be successful
 */
vows.describe('domain part is less than 255 characters')
  .addBatch({
  "\nGiven domain part length is less than 255 characters": {
    "\nWhen validating": {
      topic: geav.isValid('test@testdomain.com'),
      "the validation should be successful": function (topic) {
        assert.isTrue(topic);
      }
    }
  }
}).export(module);

/**
 * Scenario: domain part is more than 255 characters
 *
 * Given domain part length is more than 255 characters
 * When validating
 * Then the validation result should be false
 */
vows.describe('domain part is more than 255 characters')
  .addBatch({
  "\nGiven domain part length is more than 255 characters": {
    "\nWhen validating": {
      topic: geav.isValid('test@testdomaintestdomaintestdomaintestdomaintestdomaintestdomaintestdomaintestdomaintestdomaintestdomaintestdomaintestdomaintestdomaintestdomaintestdomaintestdomaintestdomaintestdomaintestdomaintestdomaintestdomaintestdomaintestdomaintestdomaintestdomaionetwothreefourfive.com'),
      "the validation should be successful": function (topic) {
        assert.isFalse(topic);
      }
    }
  }
}).export(module);

/**
 * Scenario: Domain part is an empty string
 *
 * Given email address contain an empty domain part (empty string)
 * Then the validation result should be false
 */
vows.describe('Empty domain part')
  .addBatch({
  "\nGiven submitted value is an empty string": {
    topic: geav.isValid('test@'),
    "the validation result should be false": function (topic) {
      assert.isFalse(topic);
    }
  }
}).export(module);