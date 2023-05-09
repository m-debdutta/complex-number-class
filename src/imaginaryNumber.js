const { RealNumber } = require("./realNumber");

class ImaginaryNumber {
  #number; 

  constructor(number) {
    this.#number = number; 
  }

  toString() {
    return this.#number.toString() + 'i'; 
  }

  add(other) {
    const sum = this.#number.add(other.#number); 
    return new ImaginaryNumber(sum);
  }

  multiplyImaginary(other) {
    return this.#number.multiply(other.#number).multiply(new RealNumber(-1));
  }

  multiplyReal(other) {
    const product = other.multiply(this.#number);
    return new ImaginaryNumber(product);
  }
  
  areEqual(other) {
    return this.#number.areEqual(other.#number); 
  }
}

exports.ImaginaryNumber = ImaginaryNumber; 
