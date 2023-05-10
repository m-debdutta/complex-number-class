const { describe, it } = require("node:test");
const { ok, strictEqual, strict } = require("assert");

const { ComplexNumber } = require("../src/complexNumber.js");
const { RealNumber } = require("../src/realNumber.js");
const { ImaginaryNumber } = require("../src/imaginaryNumber.js");

describe("Testing toString() ", function () {
  it("should display a complex number", function () {
    const two = new RealNumber(2);

    const four = new RealNumber(4);
    const fouri = new ImaginaryNumber(four);

    const c = new ComplexNumber(two, fouri);

    const expected = "2+4i";
    const actual = c.toString();

    strictEqual(actual, expected);
  });

  it("should display a complex number having negative imaginary part", function () {
    const two = new RealNumber(2);

    const four = new RealNumber(-4);
    const fouri = new ImaginaryNumber(four);

    const c = new ComplexNumber(two, fouri);

    const actual = c.toString();
    const expected = "2-4i";

    strictEqual(actual, expected);
  });
});

describe("Testing areEqual() ", function () {
  it("should state true if both numbers are same", function () {
    const two = new RealNumber(2);

    const three = new RealNumber(3);
    const threei = new ImaginaryNumber(three);

    const c = new ComplexNumber(two, threei);

    const result = c.areEqual(c);

    ok(result);
  });

  it("should state false if both numbers are different", function () {
    const two = new RealNumber(2);
    const twoi = new ImaginaryNumber(two);

    const three = new RealNumber(3);
    const threei = new ImaginaryNumber(three);

    const c1 = new ComplexNumber(two, threei);
    const c2 = new ComplexNumber(three, twoi);

    const result = c1.areEqual(c2);

    strictEqual(result, false);
  });

  it("should state false if only the imaginary parts are different", function () {
    const two = new RealNumber(2);
    const twoi = new ImaginaryNumber(two);

    const three = new RealNumber(3);
    const threei = new ImaginaryNumber(three);

    const c1 = new ComplexNumber(two, threei);
    const c2 = new ComplexNumber(two, twoi);

    const result = c1.areEqual(c2);

    strictEqual(result, false);
  });

  it("should state false if only the real parts are different", function () {
    const two = new RealNumber(2);

    const three = new RealNumber(3);
    const threei = new ImaginaryNumber(three);

    const c1 = new ComplexNumber(two, threei);
    const c2 = new ComplexNumber(three, threei);

    const result = c1.areEqual(c2);

    strictEqual(result, false);
  });
});

describe("Testing add() ", function () {
  it("should add two complex number", function () {
    const two = new RealNumber(2);
    const twoi = new ImaginaryNumber(two);

    const three = new RealNumber(3);
    const threei = new ImaginaryNumber(three);

    const c1 = new ComplexNumber(two, threei);
    const c2 = new ComplexNumber(two, twoi);

    const four = new RealNumber(4);
    const five = new RealNumber(5);
    const fivei = new ImaginaryNumber(five);

    const expected = new ComplexNumber(four, fivei);
    const actual = c1.add(c2);

    const result = actual.areEqual(expected);
    ok(result);
  });

  it("should add two complex number having negative real part", function () {
    const minusTwo = new RealNumber(-2);

    const two = new RealNumber(2);
    const twoi = new ImaginaryNumber(two);

    const three = new RealNumber(3);
    const threei = new ImaginaryNumber(three);

    const c1 = new ComplexNumber(minusTwo, threei);
    const c2 = new ComplexNumber(minusTwo, twoi);

    const minusFour = new RealNumber(-4);
    const five = new RealNumber(5);
    const fivei = new ImaginaryNumber(five);

    const expected = new ComplexNumber(minusFour, fivei);
    const actual = c1.add(c2);

    const result = actual.areEqual(expected);
    ok(result);
  });

  it("should add two complex number having negative imaginary part", function () {
    const two = new RealNumber(2);
    const twoi = new ImaginaryNumber(two);

    const minusThree = new RealNumber(-3);
    const minusThreei = new ImaginaryNumber(minusThree);

    const c1 = new ComplexNumber(two, minusThreei);
    const c2 = new ComplexNumber(two, twoi);

    const four = new RealNumber(4);
    const minusOne = new RealNumber(-1);
    const minusOnei = new ImaginaryNumber(minusOne);

    const expected = new ComplexNumber(four, minusOnei);
    const actual = c1.add(c2);

    const result = actual.areEqual(expected);
    ok(result);
  });
});

describe("Testing multiply()", function () {
  it("should multiply two complex numbers", function () {
    const two = new RealNumber(2);
    const twoi = new ImaginaryNumber(two);

    const three = new RealNumber(3);
    const threei = new ImaginaryNumber(three);

    const c1 = new ComplexNumber(two, threei);
    const c2 = new ComplexNumber(two, twoi);

    const minusTwo = new RealNumber(-2);
    const ten = new RealNumber(10);
    const teni = new ImaginaryNumber(ten);

    const expected = new ComplexNumber(minusTwo, teni);
    const actual = c1.multiply(c2);

    const result = actual.areEqual(expected);
    ok(result);
  });

  it(" multiply two complex number having real part of opposite sign", function () {
    const minusTwo = new RealNumber(-2);

    const two = new RealNumber(2);
    const twoi = new ImaginaryNumber(two);

    const three = new RealNumber(3);
    const threei = new ImaginaryNumber(three);

    const c1 = new ComplexNumber(minusTwo, threei);
    const c2 = new ComplexNumber(two, twoi);

    const minusTen = new RealNumber(-10);

    const expected = new ComplexNumber(minusTen, twoi);
    const actual = c1.multiply(c2);

    const result = actual.areEqual(expected);
    ok(result);
  });

  it(" multiply two complex number having imaginary part of opposite sign", function () {
    const two = new RealNumber(2);

    const minusTwo = new RealNumber(-2);
    const minusTwoi = new ImaginaryNumber(minusTwo);

    const three = new RealNumber(3);
    const threei = new ImaginaryNumber(three);

    const c1 = new ComplexNumber(three, threei);
    const c2 = new ComplexNumber(two, minusTwoi);

    const twelve = new RealNumber(12);

    const zero = new RealNumber(0);
    const zeroi = new ImaginaryNumber(zero);

    console.log(twelve.toString(), zeroi.toString());
    const expected = new ComplexNumber(twelve, zeroi);
    console.log(expected.toString());
    const actual = c1.multiply(c2);

    const result = actual.areEqual(expected);
    ok(result);
  });
});