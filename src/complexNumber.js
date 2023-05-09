class ComplexNumber {
  #real; 
  #imaginary; 

  constructor(real, imaginary) {
    this.#real = real; 
    this.#imaginary = imaginary; 
  }

  getRealPart() {
    return this.#real; 
  }

  getImaginaryPart() {
    return this.#imaginary; 
  }

  #sign() {
    return this.#imaginary > 0 ? ' + ' : ' - '; 
  }

  add(otherNumber) {
    const realPart = this.#real + otherNumber.#real; 
    const imaginaryPart = this.#imaginary + otherNumber.#imaginary; 

    return new ComplexNumber(realPart, imaginaryPart); 
  }

  multiply(otherNumber) {
    const a = this.#real; 
    const b = this.#imaginary; 
    const c = otherNumber.#real; 
    const d = otherNumber.#imaginary; 

    const realPart = a * c - b * d; 
    const imaginaryPart = a * d + b * c; 

    return new ComplexNumber(realPart, imaginaryPart); 
  }

  toString() {
    const realPart = this.#real.toString(); 
    const sign = this.#sign(); 
    const imaginaryPart = Math.abs(this.#imaginary).toString() + 'i'; 

    return realPart + sign + imaginaryPart;  
  }
}

exports.ComplexNumber = ComplexNumber; 
