class SmartCalculator {
  constructor(initialValue) {
    this.initialValue = initialValue;
    this.array = [ initialValue ];
  };

  add(number) {
    this.array.push('+');
    this.array.push(number);
    return this.calculateArray();
  };
  
  subtract(number) {
    this.array.push('-');
    this.array.push(number);
    return this.calculateArray();
  };

  multiply(number) {
    this.array.push('*');
    this.array.push(number);
    return this.calculateArray();
  };

  devide(number) {
    this.array.push('/');
    this.array.push(number);
    return this.calculateArray();
  };

  pow(number) {
    this.array.push('**');
    this.array.push(number);
    return this.calculateArray();
  };

  valueOf() {
    return this.result
  };
  
  calculateArray(){
    this.result = eval(this.array.join(' '));
    return this;
  }
}

module.exports = SmartCalculator;
