/**
 * General test suite
 */

var
  vows = require('vows'),
  assert = require('assert'),
  geav = require('./../index.js');

/**
 * Scenario: Empty string
 *
 * Given submitted value is an empty string
 * Then the function should raise an Error
 */
vows.describe('Scenario: Empty string')
  .addBatch({
  "\nGiven submitted value is an empty string": {
    "the function should raise an Error": function () {
      assert.throws(function () {
        geav.isValid('');
      }, Error);
    }
  }
}).export(module);

/**
 * Scenario: Only accept string
 *
 * Given submitted value is not a string
 * Then the function should raise an Error
 */
vows.describe('Scenario: Only accept string')
  .addBatch({
  "\nGiven submitted value is not a string": {
    "the function should raise an Error": function () {
      assert.throws(function () {
        geav.isValid(1);
      }, Error);
    }
  }
}).export(module);