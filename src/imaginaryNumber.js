const { RealNumber } = require("./realNumber");

class ImaginaryNumber {
  #value; 

  constructor(number) {
    this.#value = number; 
  };

  toString() {
    return this.#value.toString() + 'i'; 
  };

  add(other) {
    const sum = this.#value.add(other.#value); 
    return new ImaginaryNumber(sum);
  };

  multiplyImaginary(other) {
    return this.#value.multiply(other.#value).multiply(new RealNumber(-1));
  };

  multiplyReal(other) {
    const product = other.multiply(this.#value);
    return new ImaginaryNumber(product);
  };
  
  isNegative() {
    return this.#value.isNegative(); 
  };
  
  areEqual(other) {
    return this.#value.areEqual(other.#value); 
  };
};

exports.ImaginaryNumber = ImaginaryNumber; 