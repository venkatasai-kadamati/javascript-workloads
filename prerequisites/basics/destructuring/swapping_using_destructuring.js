// swapping variables with a third variable
// we use array destructuring for this.

// old way
let a = 1, b = 2;
let temp = a;
a = b;
b = temp;

// with destructuring, the right hand side is evaluated first as a whole before any assignment happens. So both values are captured in a temporary array internally, and then assigned out.
let first = 1, second = 2;

[first, second] = [second, first];
console.log(first)
console.log(second)

// reasoning:
// first the right side [second, first] is evaluated which ends up as [2,1]
// then we destructure by index (array) into 2 variables first = 2, second = 1
// thus now we have the same variables updated with swapped values