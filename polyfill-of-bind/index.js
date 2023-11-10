function printName(city, state) {
  console.log(
    this.firstName + " " + this.lastName + ", " + city + ", " + state
  );
}
const person = {
  firstName: "John",
  lastName: "Doe",
};

let printMyName = printName.bind(person, "Pune");
printMyName("Maharastra");

// Function.prototype - if we bind a function with this then each and every method have access to this method
Function.prototype.myBind = function (...args) {
  // Here this will point to printName
  const that = this,
    params = args.slice(1);
  return function (...args2) {
    that.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.myBind(person, "Pune");
printMyName2("Maharastra");
