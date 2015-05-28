/*globals describe, it, beforeEach */
'use strict';

var assert = require("assert");
var sinon = require("sinon");

describe('Date', function () {

  describe('Date.now()', function () {
    it('returns date in milliseconds', function () {
      var now = Date.now();
      sinon.stub(Date, 'now', function () {
        return now;
      });
      //var clock = sinon.useFakeTimers(now, 'Date');

      assert.equal(Date.now(), now);
    });
  });

  describe('Date.parse()', function () {
    it("parses date and returns timestamp", function () {
      assert.equal(Date.parse('1970-01-01'), 0);
      assert.equal(Date.parse('1970-01-02'), 86400000);
    });
  });

  describe('Date.prototype  methods', function () {
    var date;

    beforeEach(function () {
      date = new Date('2015-05-28T10:15:23.123');
    });

    it('returns day of the month', function () {
      assert.equal(date.getDate(), 28);
    });

    it("returns day of week", function () {
      assert.equal(date.getDay(), 4);
    });

    it("returns full year", function () {
      assert.equal(date.getFullYear(), 2015);
    });

    it("returns ms", function () {
      assert.equal(date.getMilliseconds(), 123);
    });

    it("returns month", function () {
      assert.equal(date.getMonth(), 4);
    });

    it("returns minutes", function () {
      assert.equal(date.getMinutes(), 15);
    });

    it("returns seconds", function () {
      assert.equal(date.getSeconds(), 23);
    });

    it("returns time", function () {
      assert.equal(date.getTime(), 1432800923123);
    });

    it("returns timezone offset", function () {
      assert.equal(date.getTimezoneOffset(), -120); // 2 hours behind in min
    });

    it("returns utc hours", function () {
      assert.equal(date.getUTCHours(), 8);
    });

    it("converts to ISO string", function () {
      assert.equal(date.toISOString(), '2015-05-28T08:15:23.123Z');
      assert.equal(date.toISOString().length, 24); // by definition
    });

    it("converts to JSON string", function () {
      assert.equal(date.toJSON(), '2015-05-28T08:15:23.123Z');
    });
  });
});
