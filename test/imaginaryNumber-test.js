const { describe, it } = require("node:test");
const { ok, strictEqual } = require("assert");

const { RealNumber } = require("../src/realNumber.js");
const { ImaginaryNumber } = require("../src/imaginaryNumber.js");

describe("Testing imaginary : ", function () {
  describe("Testing toString()", function () {
    it("should display a positive imaginary number", function () {
      const r = new RealNumber(5);
      const i = new ImaginaryNumber(r);
      const actual = i.toString();
      const expected = "5i";

      strictEqual(actual, expected);
    });

    it("should display a negitive imaginary number", function () {
      const r = new RealNumber(-5);
      const i = new ImaginaryNumber(r);

      const actual = i.toString();
      const expected = "-5i";

      strictEqual(actual, expected);
    });
  });

  describe("Testing areEqual() : ", function () {
    it("should state two numbers are equal", function () {
      const four = new RealNumber(4);
      const i1 = new ImaginaryNumber(four);

      const result = i1.areEqual(i1);

      ok(result);
    });

    it("should state two numbers are not-equal", function () {
      const four = new RealNumber(4);
      const i1 = new ImaginaryNumber(four);

      const five = new RealNumber(5);
      const i2 = new ImaginaryNumber(five);

      const result = i1.areEqual(i2);

      strictEqual(result, false);
    });

    it("should state two numbers are not-equal", function () {
      const four = new RealNumber(4);
      const i1 = new ImaginaryNumber(four);

      const five = new RealNumber(5);
      const i2 = new ImaginaryNumber(five);

      const result = i1.areEqual(i2);

      strictEqual(result, false);
    });
  });

  describe("Testing add() ", function () {
    it("should add two imaginary number", function () {
      const four = new RealNumber(4);
      const i1 = new ImaginaryNumber(four);
      const i2 = new ImaginaryNumber(four);

      const eight = new RealNumber(8);
      const expected = new ImaginaryNumber(eight);
      const actual = i1.add(i2);

      const result = expected.areEqual(actual);
      ok(i1.areEqual(i2));
    });

    it("should substract two imaginary number", function () {
      const four = new RealNumber(4);
      const i1 = new ImaginaryNumber(four);

      const negitiveFive = new RealNumber(-5);
      const i2 = new ImaginaryNumber(negitiveFive);

      const negitiveOne = new RealNumber(-1);
      const expected = new ImaginaryNumber(negitiveOne);
      const actual = i1.add(i2);

      const result = expected.areEqual(actual);      
      ok(result);
    });
  });

  describe('Testing multiplyImaginary()', function() {
    it('should give a real number when two imaginary numbers are multiplied', function() {
      const four = new RealNumber(4)
      const i1 = new ImaginaryNumber(four);

      const five = new RealNumber(5);
      const i2 = new ImaginaryNumber(five);

      const expected = new RealNumber(-20);
      const actual = i1.multiplyImaginary(i2);
      
      const result = expected.areEqual(actual);
      ok(result);
    });

    it('should give a imaginary number when a real and a imaginary numbers are multiplied', function() {
      const four = new RealNumber(4)
      const i1 = new ImaginaryNumber(four);

      const five = new RealNumber(5);

      const twenty = new RealNumber(20);
      const expected = new ImaginaryNumber(twenty)
      const actual = i1.multiplyReal(five);

      const result = actual.areEqual(expected);
      ok(result);
    });
  });
  describe('Testing isNegitive()', function() {
    it('imaginary number of negitive value is a negitive imaginary number', function() {
      const minusFour = new RealNumber(-4);
      const i = new ImaginaryNumber(minusFour);
      const result = i.isNegitive();

      ok(result);
    });
    
    it('imaginary number of positive value is a positive imaginary number', function() {
      const four = new RealNumber(4);
      const i = new ImaginaryNumber(four);
      const result = i.isNegitive();

      strictEqual(result, false);
    });
  });
});