'use strict';

var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });

  describe('#isArray()', function(){
    it('returns true if array', function(){
      assert.equal(true, Array.isArray([]));
      assert.equal(true, Array.isArray(new Array()));
      assert.equal(false, Array.isArray({}));
    });
  });

  describe('#Array.prototype.constructor', function(){
    it('returns Array', function(){
      assert.equal(Array, [].constructor);

    });
  });

  describe('#Array.prototype.fill()', function(){
    it('fills', function(){
      assert.equal([4, 4, 4], [1, 2, 3].fill(4)); // Only works in firefox
    });
  });

  describe('#Array.prototype.pop()', function(){
    it('removes the last item in array and returns it', function(){

   		var array1 = [1, 2, 3];

      assert.equal(3, array1.pop());
      assert.deepEqual([1, 2], array1);
    });

    it('returns undefined if pop is used on empty array', function(){
      assert.equal(undefined, [].pop());
    });
  });

  describe('#Array.prototype.push()', function(){
    it('adds new item to array and returns newly added item', function(){
    	var array1 = [1, 2, 3];

      assert.equal(4, array1.push(4));
      assert.deepEqual([1, 2, 3, 4], array1);
    });
  });



  describe('#Array.prototype.reduce()', function(){

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

  describe('#Array.prototype.reverse()', function(){
    it('It reverses items in array', function(){
      assert.deepEqual([3, 2, 1], [1, 2, 3].reverse());
    });
  });

  describe('#Array.prototype.shift()', function(){
    it('It removes first item from array', function(){
    	var array1 = [1, 2, 3];

      assert.equal(1, array1.shift());
      assert.deepEqual([2, 3], array1);
    });
  });

  describe('#Array.prototype.sort()', function(){
    it('It sorts array', function(){
    	var array1 = ['c', 'a', 'b', 'ab', 'aa'];
    	var array2 = [
    		{
    			value : 'c'
    		},
    		{
    			value : 'a'
    		},
    		{
    			value : 'b'
    		}
    	];

    	var sortDesc = function (a, b) {
    		if (a < b) {
    			return 1;
    		}

    		if (a > b) {
    			return -1;
    		}

    		return 0;
    	}

      assert.deepEqual(['a', 'aa', 'ab', 'b', 'c'], array1.sort());
      assert.deepEqual(['c', 'b', 'ab', 'aa', 'a'], array1.sort(sortDesc));
      assert.deepEqual([
    		{
    			value : 'a'
    		},
    		{
    			value : 'b'
    		},
    		{
    			value : 'c'
    		}
    	], array2.sort(function (a, b) {
    		if (a.value > b.value) {
    			return 1;
    		}

    		if (a.value < b.value) {
    			return -1;
    		}

    		return 0;
    	}));
      
    });

    describe('#Array.prototype.splice()', function(){
	    it('It removes one item', function(){
	    	var myFish = ["angel", "clown", "mandarin", "surgeon"];

	      assert.deepEqual(["clown", "mandarin"], 
	      	myFish.splice(1, 2, 'white shark', 'hammerhead'));

	      assert.deepEqual(["angel", "white shark", "hammerhead", "surgeon"], myFish);

	      assert.deepEqual(["angel"], myFish.splice(0, 1));
	   
	    });
  	});

  	describe('#Array.prototype.unshift()', function(){
	    it('It prepends an item', function(){
	    	var array1 = [1, 2];

	      assert.equal(3, array1.unshift(0));
	      assert.deepEqual(array1, [0, 1, 2]);
	   
	    });
  	
  	});
  });
});
