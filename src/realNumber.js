class RealNumber {
  #number;  

  constructor(number) {
    this.#number = number; 
  }

  add(other) {
    const sum = this.#number + other.#number; 
    return new RealNumber(sum); 
  }

  multiply(other) {
    const product = this.#number * other.#number; 
    return new RealNumber(product);
  }

  areEqual(other) {
    return this.#number === other.#number; 
  }

  toString() {
    return this.#number.toString(); 
  }
}

exports.RealNumber = RealNumber; 