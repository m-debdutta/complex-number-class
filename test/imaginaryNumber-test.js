const { describe, it } = require("node:test");
const { ok, strictEqual } = require("assert");

const { RealNumber } = require("../src/realNumber.js");
const { ImaginaryNumber } = require("../src/imaginaryNumber.js");

describe("Testing toString()", function () {
  it("should display a positive imaginary number", function () {
    const five = new RealNumber(5);
    const fivei = new ImaginaryNumber(five);
    const actual = fivei.toString();
    const expected = "5i";

    strictEqual(actual, expected);
  });

  it("should display a negative imaginary number", function () {
    const minusFive = new RealNumber(-5);
    const minusFivei = new ImaginaryNumber(minusFive);

    const actual = minusFivei.toString();
    const expected = "-5i";

    strictEqual(actual, expected);
  });
});

describe("Testing areEqual() : ", function () {
  it("should state two numbers are equal", function () {
    const four = new RealNumber(4);
    const fouri = new ImaginaryNumber(four);

    const result = fouri.areEqual(fouri);

    ok(result);
  });

  it("should state two numbers are not-equal", function () {
    const four = new RealNumber(4);
    const fouri = new ImaginaryNumber(four);

    const five = new RealNumber(5);
    const fivei = new ImaginaryNumber(five);

    const result = fouri.areEqual(fivei);

    strictEqual(result, false);
  });

  it("should state two numbers are not-equal", function () {
    const four = new RealNumber(4);
    const fouri = new ImaginaryNumber(four);

    const five = new RealNumber(5);
    const fivei = new ImaginaryNumber(five);

    const result = fouri.areEqual(fivei);

    strictEqual(result, false);
  });
});

describe("Testing add() ", function () {
  it("should add two imaginary number", function () {
    const four = new RealNumber(4);
    const fouri = new ImaginaryNumber(four);

    const eight = new RealNumber(8);
    const expected = new ImaginaryNumber(eight);
    const actual = fouri.add(fouri);

    const result = expected.areEqual(actual);
    ok(fouri.areEqual(fouri));
  });

  it("should substract two imaginary number", function () {
    const four = new RealNumber(4);
    const fouri = new ImaginaryNumber(four);

    const minusFive = new RealNumber(-5);
    const minusFivei = new ImaginaryNumber(minusFive);

    const negativeOne = new RealNumber(-1);
    const expected = new ImaginaryNumber(negativeOne);
    const actual = fouri.add(minusFivei);

    const result = expected.areEqual(actual);
    ok(result);
  });
});

describe("Testing multiplyImaginary()", function () {
  it("should give a real number when two imaginary numbers are multiplied", function () {
    const four = new RealNumber(4);
    const fouri = new ImaginaryNumber(four);

    const five = new RealNumber(5);
    const fivei = new ImaginaryNumber(five);

    const expected = new RealNumber(-20);
    const actual = fouri.multiplyImaginary(fivei);

    const result = expected.areEqual(actual);
    ok(result);
  });

  it("should give a imaginary number when a real and a imaginary numbers are multiplied", function () {
    const four = new RealNumber(4);
    const fouri = new ImaginaryNumber(four);

    const five = new RealNumber(5);

    const twenty = new RealNumber(20);
    const expected = new ImaginaryNumber(twenty);
    const actual = fouri.multiplyReal(five);

    const result = actual.areEqual(expected);
    ok(result);
  });
});
describe("Testing isNegative()", function () {
  it("imaginary number of negative value is a negative imaginary number", function () {
    const minusFour = new RealNumber(-4);
    const minusFouri = new ImaginaryNumber(minusFour);
    const result = minusFouri.isNegative();

    ok(result);
  });

  it("imaginary number of positive value is a positive imaginary number", function () {
    const four = new RealNumber(4);
    const fouri = new ImaginaryNumber(four);
    const result = fouri.isNegative();

    strictEqual(result, false);
  });
});
