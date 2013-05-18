/**
 * Regex test suite
 */

var
  vows = require('vows'),
  assert = require('assert'),
  geav = require('./../index.js');

/**
 * Scenario: Validating valid email address
 *
 * Given submitted value is a valid email address
 * When validating
 * Then the validation should be successful
 */
vows.describe('Validating valid email address')
  .addBatch({
  "\nGiven submitted value is an empty string": {
    "\nWhen validating": {
      topic: geav.isValid('test@test.com'),
      "the validation should be successful": function (topic) {
        assert.isTrue(topic);
      }
    }
  }
}).export(module);