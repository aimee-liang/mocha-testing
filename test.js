var assert = require('assert');

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