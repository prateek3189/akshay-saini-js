function printName(city, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + city + ", " + state
  );
}
const person = {
  firstName: "John",
  lastName: "Doe",
};

printName.call(person, "New York", "New York");

const person2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

// Function Borrowing
// Call - will call a function and you can pass the this parameter to the function
printName.call(person2, "Mumbai", "Maharastra");

// apply - similar to call but the arguments should passed in an array
printName.apply(person2, ["Mumbai", "Maharastra"]);

// bind method is similar to call but it create a copy and returns a new function
const printMyName = printName.bind(person, "New York", "New York");
printMyName();
