/*globals describe, it */
'use strict';

var assert = require("assert");

describe('Math', function() {

    describe('.abs()', function() {
        it('returns absolute value of a number', function() {
            assert.equal(Math.abs(1), 1);
            assert.equal(Math.abs(-1), 1);
            assert.equal(Math.abs('-1'), 1);
        });
    });

    describe('.ceil()', function() {
        it('rounds number up to nearest int', function() {
            assert.equal(Math.ceil(0.5), 1);
            assert.equal(Math.ceil(0.01), 1);

        });
    });

});