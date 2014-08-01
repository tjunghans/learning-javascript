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

            var echo = 'alpha';

            var obj = {
                alpha: 'bravo'
            }

            var bravo = 'charlie';

            assert.equal(eval(obj[echo]), 'charlie');
            assert.equal(eval('obj[echo]'), 'bravo');
        });
    });
    describe('parseInt', function() {
        it('converts number to integer', function() {
            assert.equal(parseInt(4.9, 10), 4);
            assert.equal(parseInt(4.1, 10), 4);
            assert.equal(parseInt('4.1', 10), 4);
        });
    });

    describe('parseFloat', function() {
        it('converts number to float', function() {
            assert.equal(parseFloat('4.9'), 4.9);

        });
    });
});