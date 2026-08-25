// data types are split into 2 -> primitive & non-primitive

// JS has total 8 types -> primitive (8) + non-primitive (1)

// primitives are immutable values stored directly on the stack. when we assign or pass them, we get a copy of the value.

// 7 primitives
let str = "Venkat" // string
let num = 42 // number (64-bit float, both decimal and integers included)
let bool = false // boolean
let undef = undefined // undefined - variable declared but not assigned/initialized
let n = null // null - intentional blank value
let big = 930230488083423043n // for integers beyond Number.MAX_SAFE_INTEGER

// primitives copy by value
let a = 1;
let b = a;
b = 300;
console.log(a) // "a" is unaffected

// non-primitives (reference types) are stored on the heap.
// objects - hold all including arrays, functions ...
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1) // arr1 is affected as the address is shared by arr2

// to get independent copies
let arr3 = [...arr1] // creates shallow copy
let arr4 = arr1.slice(); // another way to create shallow copy

// note: be careful with nested objects, as they don't get true shallow copies. The inner objects are still mutable and referenced.