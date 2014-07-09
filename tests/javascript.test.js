'use strict';

var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });

  describe('#reduce()', function(){

  	var adder = function (a, b) {
  		return a + b;
  	}

    it('[1, 2, 3] should return 6 with add', function(){
      assert.equal(6, [1,2,3].reduce(adder, 0));
    });
  });
});
