import * as _ from 'lodash'

class Greeter {
  greeting: string;
  constructor(message: string) {
      this.greeting = message;
  }
  greet() {
      //return "Hello, " + this.greeting;
      //return _.join(["Hello,", ' ', this.greeting], '');
      return _.join(["hello,", ' ', this.greeting], '')  
  }
}

let greeter = new Greeter('qiao');

console.log(greeter)