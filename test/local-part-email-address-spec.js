/**
 * Local part of e-mail address test suite.
 */

var
  vows = require('vows'),
  assert = require('assert'),
  geav = require('./../index.js');

/**
 * Scenario: local part is less than 64 characters
 *
 * Given local part length is less than 64 characters
 * When validating
 * Then the validation should be successful
 */
vows.describe('local part is less than 64 characters')
  .addBatch({
  "\nGiven local part length is less than 64 characters": {
    "\nWhen validating": {
      topic: geav.isValid('test@testdomain.com'),
      "the validation should be successful": function (topic) {
        assert.isTrue(topic);
      }
    }
  }
}).export(module);

/**
 * Scenario: local part is more than 64 characters
 *
 * Given local part length is more than 64 characters
 * When validating
 * Then the validation should be successful
 */
vows.describe('local part is more than 64 characters')
  .addBatch({
  "\nGiven local part length is more than 64 characters": {
    "\nWhen validating": {
      topic: geav.isValid('veryveryveryveryveryveryveryveryveryveryveryveryverylongemailadress@testdomain.com'),
      "the validation should be successful": function (topic) {
        assert.isFalse(topic);
      }
    }
  }
}).export(module);

/**
 * Scenario: local part is 64 characters
 *
 * Given local part length is 64 characters
 * When validating
 * Then the validation should be successful
 */
vows.describe('local part is 64 characters')
  .addBatch({
  "\nGiven local part length is 64 characters": {
    "\nWhen validating": {
      topic: geav.isValid('veryveryveryveryveryveryveryveryveryveryveryveryvlongemailadress@testdomain.com'),
      "the validation should be successful": function (topic) {
        assert.isTrue(topic);
      }
    }
  }
}).export(module);

/**
 * Scenario: Local part is an empty string
 *
 * Given email address contain an empty local part (empty string)
 * Then the validation result should be false
 */
vows.describe('Empty local part')
  .addBatch({
  "\nGiven submitted value is an empty string": {
    topic: geav.isValid('@test'),
    "the validation result should be false": function (topic) {
      assert.isFalse(topic);
    }
  }
}).export(module);