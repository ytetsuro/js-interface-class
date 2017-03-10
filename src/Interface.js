class Interface {

  constructor() {
    // Interface
    if (this.constructor === Interface || Object.getPrototypeOf(this.constructor) === Interface) {
      throw new Error('Not create Instance');
    }

    // Check methods
    const myInterface = Object.getPrototypeOf(this.constructor);
    const overrideMethods = Object.getOwnPropertyNames(this.constructor.prototype);
    for (let method of Object.getOwnPropertyNames(myInterface.prototype)) {
      if (! myInterface[method] instanceof Function
        || method === 'constructor') {
        continue;
      }
      if (overrideMethods.indexOf(method) === -1
        || this.constructor.prototype[method].length !== myInterface.prototype[method].length) {
        throw new Error(`Unhandled method ${method}`);
      }
    }
  }

}
module.exports = Interface;
