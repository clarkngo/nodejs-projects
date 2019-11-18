// unit test
var assert = require('assert');
describe('Array', function() {
  describe('#sort()', function() {
    it('should sort asceding', function(){
      let expected = JSON.stringify([22, 30, 66]);
      assert.equal(JSON.stringify([30, 22,66].sort(function(a, b){return a - b})), expected);
    }),
    it('should sort descending', function(){
      let expected = JSON.stringify([66, 30, 22]);
      assert.equal(JSON.stringify([30, 22,66].sort(function(a, b){return b - a})), expected);
    });
  });
});
