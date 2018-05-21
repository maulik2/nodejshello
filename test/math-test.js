const math = require('../math');
const expect = require('chai').expect;

describe('Tests all operations related to division', function() {
  it('should return the quotient successfully', function(done) {
    // write test code here
  });
  it('should now allow division by zero', function(done) {
    // write test code here
  });
});

describe('Tests all operations related to addition', function() {
  it.only('should return the sum successfully', function(done) {
    const sum = math.add(5,5);
    expect(sum).to.equal(10);
    done();
  });
});

describe('Tests all operations related to multiplication', function() {
  it('should return the product successfully', function(done) {
    // write test code here
  });
});