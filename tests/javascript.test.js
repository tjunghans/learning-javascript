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

  	var complexArray = [
  		{
  			value : 1
  		},
  		{
  			value : 2
  		},
  		{
  			value : 3
  		}
  	];

  	var complexAdder = function (a, b) {
  		return { value: a.value + b.value };
  	};

  	var complexAdder2 = function (a, b) {
  		return a + b.value;
  	};

    it('sums up array values', function(){
      assert.equal(6, [1,2,3].reduce(adder, 0));
      assert.equal(6, [1,2,3].reduce(adder));
      assert.equal(7, [1,2,3].reduce(adder, 1));
    });

    it('adds value of object property in array item', function(){
      assert.equal({ value : 6 }.value, complexArray.reduce(complexAdder, { value : 0 } ).value);
      assert.equal(6, complexArray.reduce(complexAdder2, 0));
    });

    

    
  });
});
