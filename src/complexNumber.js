class ComplexNumber {
  #real; 
  #imaginary; 

  constructor(real, imaginary) {
    this.#real = real; 
    this.#imaginary = imaginary; 
  }

  #sign() {
    return this.#imaginary > 0 ? ' + ' : ' - '; 
  }

  add(other) {
    const realPart = this.#real.add(other.#real); 
    const imaginaryPart = this.#imaginary.add(other.#imaginary); 

    return new ComplexNumber(realPart, imaginaryPart); 
  }

  multiply(other) {
    const r1Xr2 = this.#real.multiply(other.#real); 
    const i1Xi2 = this.#imaginary.multiplyImaginary(other.#imaginary); 
    const i1Xr2 = this.#imaginary.multiplyReal(other.#real); 
    const r1Xi2 = other.#imaginary.multiplyReal(this.#real); 

    const realPart =  r1Xr2 + i1Xi2;
    const imaginaryPart = i1Xr2 + r1Xi2;

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