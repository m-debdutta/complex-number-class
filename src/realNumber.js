class RealNumber {
  #value;  

  constructor(number) {
    this.#value = number; 
  };

  add(other) {
    const sum = this.#value + other.#value; 
    return new RealNumber(sum); 
  };

  multiply(other) {
    const product = this.#value * other.#value; 
    return new RealNumber(product);
  };

  areEqual(other) {
    return this.#value === other.#value; 
  };

  isNegative() {
    return this.#value < 0;
  };

  toString() {
    return this.#value.toString(); 
  };
};

exports.RealNumber = RealNumber; 