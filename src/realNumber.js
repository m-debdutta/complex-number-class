class RealNumber {
  #real; 

  constructor(real) {
    this.#real = real; 
  }

  getReal() {
    return new RealNumber(this.#real); 
  }

  toString() {
    return this.#real.toString(); 
  }

  add(otherNumber) {
    return this.#real + otherNumber.#real; 
  }

  multiply(otherNumber) {
    return this.#real * otherNumber.#real; 
  }
}

exports.RealNumber = RealNumber; 
