const {describe, it} = require('node:test'); 
const {strictEqual} = require('assert'); 

const {ComplexNumber} = require('./complexNumber.js'); 
const {RealNumber} = require('./realNumber.js'); 
const {ImaginaryNumber} = require('./imaginaryNumber.js'); 

describe('Testing complexNumber: ', function() {

  it('should give the real part of a complex number', function() {
    const c = new ComplexNumber(2, 5); 
    const actual = c.getRealPart(); 
    const expected = 2; 

    strictEqual(actual, expected); 
  }); 

  it('should give the imaginary part of a complex number', function() {
    const c = new ComplexNumber(3, 5); 
    const actual = c.getImaginaryPart(); 
    const expected = 5; 

    strictEqual(actual, expected); 
  }); 

  it('should display a complex number', function() {
    const c = new ComplexNumber(2, 4); 
    const actual = c.toString(); 
    const expected = '2 + 4i'; 

    strictEqual(actual, expected); 
  }); 


  it('should display a complex number having negitive imaginary part', function() {
    const c = new ComplexNumber(2, -4); 
    const actual = c.toString(); 
    const expected = '2 - 4i'; 

    strictEqual(actual, expected); 
  }); 

  it('should add two complex numbers', function() {
    const c = new ComplexNumber(2, 4); 
    const b = new ComplexNumber(4, 2)
    const actual = c.add(b).toString(); 
    const expected = '6 + 6i'; 

    strictEqual(actual, expected); 
  }); 

  it('should multiply two complex number', function() {
    const c = new ComplexNumber(2, 4)
    const b = new ComplexNumber(1, 2)
    const actual = c.multiply(b).toString(); 
    const expected = '-6 + 8i'; 

    strictEqual(actual, expected); 
  }); 
}); 

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
})

describe('Testing imaginary : ', function() {
  it('should display a positive imaginary number', function() {
    const i = new ImaginaryNumber(5); 
    const actual = i.toString(); 
    const expected = '5i'; 

    strictEqual(actual, expected); 
  }); 

  it('should display a negitive imaginary number', function() {
    const i = new ImaginaryNumber(-5); 
    const actual = i.toString(); 
    const expected = '-5i'

    strictEqual(actual, expected); 
  });
}); 
