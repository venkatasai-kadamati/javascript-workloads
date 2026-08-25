// for null -> gets converted as 0
// for undefined -> gets converted as NaN

// ! for substraction operator
// any leftRef | rightRef is forced as Number
console.log(10 - 7) // basic substraction
console.log(10 - null); // 10 - 0
console.log(10 - undefined); // anything - NaN (invalid) ends up as invalid.