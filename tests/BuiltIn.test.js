/*globals describe, it */
'use strict';

var assert = require("assert");

describe('BuiltIns and globals', function() {
    describe('eval', function() {
        it('evaluates 2+3', function() {
            assert.equal(eval('2+3'), 5);
        });

        it('evaluates variable', function() {
            var foo = 'bar';
            var bar = 'baz';

            assert.equal(eval(foo), 'baz');
        });
    });
});