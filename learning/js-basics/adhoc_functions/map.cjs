// PROBLEM STATEMENT: given an array, give me back a new array in which every value is multiplied by 2
// [1,2,3,4,5,6]
// [2,4,6,8,10,12]

// SOLUTION - 1: using arrow function
arr = [1, 2, 3, 4, 5];
const output = arr.map((e) => e * 2);
console.log(output);

// SOLUTION - 2: using normal funtional argument
function transform(element) {
  return element * 2;
}

const result = arr.map(transform);
console.log("result: " + result);
