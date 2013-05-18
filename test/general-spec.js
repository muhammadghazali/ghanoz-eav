/**
 * General test suite
 */

var
  vows = require('vows'),
  assert = require('assert'),
  geav = require('./../index.js');

vows.describe('Should load the module')
  .addBatch({
  'Load the module': {
    topic: geav,
    'should load the module': function (topic) {
      assert.include(topic, 'isValid');
      assert.isFunction(topic.isValid);
    }
  }
})
  .export(module);

/**
 * Scenario: Empty string
 *
 * Given submitted value is an empty string
 * Then the function should raise an Error
 */
vows.describe('Empty string')
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
vows.describe('Only accept string')
  .addBatch({
  "\nGiven submitted value is not a string": {
    "the function should raise an Error": function () {
      assert.throws(function () {
        geav.isValid(1);
      }, Error);
    }
  }
}).export(module);

/**
 * Scenario: Email address length is less than 320 characters
 *
 * Given email address length is less than 320 characters
 * When validating
 * Then the validation should be successful
 */
vows.describe('Email address length is less than 320 characters')
  .addBatch({
  "\nGiven email address length is less than 320 characters": {
    "\nWhen validating": {
      topic: function () {
        var veryLongEmailAddress = 'test@veryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryvery.com';
        return geav.isValid(veryLongEmailAddress);
      },
      "the validation should be successful": function (topic) {
        assert.isTrue(topic);
      }

    }
  }
}).export(module);

/**
 * Scenario: Email address length is more than 320 characters
 *
 * Given email address length is more than 320 characters
 * When validating
 * Then the validation should be successful
 */
vows.describe('Email address length is more than 320 characters')
  .addBatch({
  "\nGiven email address length is more than 320 characters": {
    "\nWhen validating": {
      topic: function () {
        var veryLongEmailAddress = 'testtesttesttesttesttesttesttesttesttesttesttesttesttesttest@veryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryveryvery.com';
        return geav.isValid(veryLongEmailAddress);
      },
      "the validation should be successful": function (topic) {
        assert.isFalse(topic);
      }

    }
  }
}).export(module);