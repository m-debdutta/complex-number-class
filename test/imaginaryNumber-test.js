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

  describe('', function() {
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
   });
});
