const TestInterface = require('./TestInterface.js');
class TestClass extends TestInterface {

  nonArgument() {
    console.log('Hello World!!');
  }

  onArgumnet(test) {
    console.log(test);
  }

}
