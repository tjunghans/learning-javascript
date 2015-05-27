/*globals describe, it */
'use strict';

var assert = require("assert");

describe('BuiltIns and globals', function () {
  describe('eval', function () {
    /*jslint evil:true*/
    it('evaluates 2+3', function () {
      assert.equal(eval('2+3'), 5);
    });

    it('evaluates variable', function () {
      var foo = 'bar';
      var bar = 'ba';
      bar = bar + 'z'; // baz (keeping jslint happy)

      assert.equal(eval(foo), 'baz');

      var echo = 'alpha';

      var obj = {
        alpha: 'bravo'
      };
      var bravo = 'charli';
      bravo = bravo + 'e'; // charlie, (again, keeping jslint happy)
      assert.equal(eval(obj[echo]), 'charlie');
      assert.equal(eval('obj[echo]'), 'bravo');
    });

    it('evaluates Number(null) to 0', function () {
      assert.equal(eval(Number(null)), 0);
    });
  });
  describe('parseInt', function () {
    it('converts number to integer', function () {
      assert.equal(parseInt(4.9, 10), 4);
      assert.equal(parseInt(4.1, 10), 4);
      assert.equal(parseInt('4.1', 10), 4);
    });
  });

  describe('parseFloat', function () {
    it('converts number to float', function () {
      assert.equal(parseFloat('4.9'), 4.9);
      assert.equal(parseFloat('4.49'), 4.49);
      assert.equal(parseFloat('1'), 1);
    });
  });

  describe('isNaN', function () {
    it('should not be a number', function () {
      assert.equal(isNaN('foo'), true);
      assert.equal(isNaN(null), false);
      assert.equal(isNaN(undefined), true);
      assert.equal(isNaN('one'), true);
      assert.equal(isNaN('1'), false);
      assert.equal(isNaN(1), false);
      assert.equal(isNaN(Infinity), false);
    });
  });
});
