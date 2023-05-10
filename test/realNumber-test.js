const {describe, it} = require('node:test'); 
const {ok, strictEqual} = require('assert'); 

const {RealNumber} = require('../src/realNumber.js'); 
describe('Testing RealNumber: ', function() {
  it('should display the real number', function() {
    const r = new RealNumber(5); 
    const actual = r.toString(); 
    const expected = '5'; 

    strictEqual(actual, expected); 
  }); 

  it('should display a negitive real number', function() {
    const r = new RealNumber(-5); 
    const actual = r.toString(); 
    const expected = '-5'; 

    strictEqual(actual, expected); 
  }); 

  it('should state the given numbers are equal', function() {
    const r1 = new RealNumber(3);
    const r2 = new RealNumber(3);
    const result = r1.areEqual(r2);

    strictEqual(result, true);
  }); 

  it('should display the addition of two real number', function() {
    const r = new RealNumber(4); 
    const b = new RealNumber(3); 
    const actual = r.add(b).toString(); 
    const expected = '7'; 

    strictEqual(actual, expected); 
  }); 

  it('should display the multiplication of two real numbers', function() {
    const r = new RealNumber(4); 
    const b = new RealNumber(3); 
    const actual = r.multiply(b).toString(); 
    const expected = '12'; 

    strictEqual(actual, expected); 
  });
  
  describe('Testing isNegitive() ', function() {
    it('minus-four is a negitive', function() {
      const minusFour = new RealNumber(-4);    
      const actual = minusFour.isNegitive();

      strictEqual(actual, true);
    });

    it('four is not a negitive number', function() {
      const four = new RealNumber(4);    
      const actual = four.isNegitive();

      strictEqual(actual, false);
    });

    it('zero is not a negitive number', function() {
      const zero = new RealNumber(0);    
      const actual = zero.isNegitive();

      strictEqual(actual, false);
    });
  });
});