var assert = require('assert');
let convert = require('../app')
let arrays = require('../arrays')

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Math', function() {
    // Test 1
    it ('should test if 3*3 = 9', function(){
        assert.equal(9, 3*3)
    })
    // Test 2
    it ('should test if (3-4)*8 = -8', function(){
        assert.equal(-8, (3-4)*8)
    })
})


describe('String', function(){
  // Test 1
  it ('should test if string is empty', function(){
    assert.equal('', '')
  })
})

describe('Temperature Conversion', function(){
  describe('cToF', function(){
    it('should convert -40 celsius to -40 farenheit', function(){
      assert.equal(-40, convert.cToF(-40))
    })
    it ('should convert 0 celsius to 32 farenheit', function(){
      assert.equal(32, convert.cToF(0))
    })
    it ('should return undefined if no temperature is passed in as an argument', function(){
      assert.equal(undefined, convert.cToF(''))
    })
  })
  describe('fToC', function(){
    it('should convert -40 farenheit to -40 celsius', function(){
      assert.equal(-40, convert.fToC(-40))
    })
    it ('should convert 32 farenheit to 0 celsius', function(){
      assert.equal(0, convert.fToC(32))
    })
    it ('should return undefined if no temperature is passed in as an argument', function(){
      assert.equal(undefined, convert.fToC(''))
    })
  })
})


describe('Array Methods', function(){
  describe('length', function(){
    it ('should return array length', function(){
      assert.equal(5, arrays.length([0, 1, 2, 3, 4]))
    })
    it ('should return undefined if array is empty', function(){
      assert.equal(undefined, arrays.length([]))
    })
    it ('should return undefined if array is not an array', function(){
      assert.equal(undefined, arrays.isItAnArray('abc'))
    })
    it ('should return true if array is an array', function(){
      assert.equal(true, arrays.isItAnArray([1,2,3]))
    })
  })
})