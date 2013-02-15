/**
 * Domain part of e-mail address test suite.
 */

var
  vows = require('vows'),
  assert = require('assert'),
  geav = require('./../index.js');

/**
 * Scenario: domain part is less than 253 characters
 *
 * Given domain part length is less than 253 characters
 * When validating
 * Then the validation should be successful
 */
vows.describe('Scenario: domain part is less than 253 characters')
  .addBatch({
  "\nGiven domain part length is less than 253 characters": {
    "\nWhen validating": {
      topic: geav.isValid('test@testdomain.com'),
      "the validation should be successful": function (topic) {
        assert.isTrue(topic);
      }
    }
  }
}).export(module);