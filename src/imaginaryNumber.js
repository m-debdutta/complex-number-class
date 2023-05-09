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

  areEqual(other) {
    return this.#number == other.#number; 
  }
}

exports.ImaginaryNumber = ImaginaryNumber; 
