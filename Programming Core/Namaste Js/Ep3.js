// In simple terms, hoisting fills all the variables and functions to the top of their scope, this is under the hood done by execution context : memory creation phase

getName(); // outputs Namaste JS as the function is globally scoped
// getName2();
// console.log(x);

var x = 7;
console.log(getName); // [Function: getName]
console.log(getName2); // error - getName2 is not defined, as it is considered as a variable and isn't initialized yet.

// getName - function declaration
function getName() {
  console.log("Namaste JS");
}

// getName2 - arrow function
var getName2 = () => {
  console.log("Namaste JS 2");
};
