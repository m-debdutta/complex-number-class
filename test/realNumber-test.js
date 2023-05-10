const { describe, it } = require("node:test");
const { ok, strictEqual } = require("assert");
const { RealNumber } = require("../src/realNumber.js");

describe("Testing toString() ", function () {
  it("should display the real number", function () {
    const five = new RealNumber(5);

    const actual = five.toString();
    const expected = "5";

    strictEqual(actual, expected);
  });

  it("should display a negative real number", function () {
    const minusFive = new RealNumber(-5);

    const actual = minusFive.toString();
    const expected = "-5";

    strictEqual(actual, expected);
  });
});

describe("Testing areEqual() ", function () {
  it("should state the given numbers are equal", function () {
    const three = new RealNumber(3);
    const result = three.areEqual(three);

    strictEqual(result, true);
  });

  it("should state the given numbers are not equal", function () {
    const three = new RealNumber(3);
    const four = new RealNumber(4);

    const result = three.areEqual(four);
    strictEqual(result, false);
  });
});

describe("Testing add() ", function () {
  it("should add two real number", function () {
    const four = new RealNumber(4);
    const five = new RealNumber(3);

    const actual = four.add(five);
    const expected = new RealNumber(7);

    const result = actual.areEqual(expected);
    ok(result);
  });

  it("should add two real number of opposite sign", function () {
    const four = new RealNumber(4);
    const minusThree = new RealNumber(-3);

    const actual = four.add(minusThree);
    const expected = new RealNumber(1);

    const result = actual.areEqual(expected);
    ok(result);
  });
});

describe("Testing multiply()", function () {
  it("should multiply two real numbers", function () {
    const four = new RealNumber(4);
    const three = new RealNumber(3);

    const expected = new RealNumber(12);
    const actual = four.multiply(three);

    const result = actual.areEqual(expected);
    ok(result);
  });

  it("should multiply two real numbers of opposite sign", function () {
    const minusFour = new RealNumber(-4);
    const three = new RealNumber(3);

    const expected = new RealNumber(-12);
    const actual = minusFour.multiply(three);

    const result = actual.areEqual(expected);
    ok(result);
  });
});

describe("Testing isNegative() ", function () {
  it("minus-four is a negative", function () {
    const minusFour = new RealNumber(-4);

    const actual = minusFour.isNegative();

    strictEqual(actual, true);
  });

  it("four is not a negative number", function () {
    const four = new RealNumber(4);

    const actual = four.isNegative();

    strictEqual(actual, false);
  });

  it("zero is not a negative number", function () {
    const zero = new RealNumber(0);

    const actual = zero.isNegative();

    strictEqual(actual, false);
  });
});
