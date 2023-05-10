class ComplexNumber {
  #real; 
  #imaginary; 

  constructor(real, imaginary) {
    this.#real = real; 
    this.#imaginary = imaginary; 
  };

  add(other) {
    const realPart = this.#real.add(other.#real); 
    const imaginaryPart = this.#imaginary.add(other.#imaginary); 

    return new ComplexNumber(realPart, imaginaryPart); 
  };

  multiply(other) {
    const r1Xr2 = this.#real.multiply(other.#real); 
    const i1Xi2 = this.#imaginary.multiplyImaginary(other.#imaginary); 
    const i1Xr2 = this.#imaginary.multiplyReal(other.#real); 
    const r1Xi2 = other.#imaginary.multiplyReal(this.#real); 

    const realPart =  r1Xr2.add(i1Xi2);
    const imaginaryPart = i1Xr2.add(r1Xi2);

    return new ComplexNumber(realPart, imaginaryPart); 
  };

  toString() {
    const realPart = this.#real.toString();  
    const imaginaryPart = this.#imaginary.toString(); 
    const sign = this.#imaginary.isNegative() ? '' : '+'; 

    return realPart + sign + imaginaryPart;  
  };

  areEqual(other) {
    const isRealPartEqual = this.#real.areEqual(other.#real);
    const isImaginaryPartEqual = this.#imaginary.areEqual(other.#imaginary);

    return isRealPartEqual && isImaginaryPartEqual;
  };
};

exports.ComplexNumber = ComplexNumber;