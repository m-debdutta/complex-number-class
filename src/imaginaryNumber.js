class ImaginaryNumber {
  #imaginary; 

  constructor(imaginary) {
    this.#imaginary = imaginary; 
  }

  toString() {
    return this.#imaginary.toString() + 'i'
  }
}

exports.ImaginaryNumber = ImaginaryNumber; 
