"use strict";
// In non-strict mode (default), trying to assign to a non-writable property fails silently — no TypeError, the assignment is simply ignored, and the temporary wrapper object is immediately discarded.

let str = "sanket";
str[0] = "b";
console.log(str) // strings are immutable, hence don't update

// Arrays are objects, not primitives. Their indexed properties are writable, so the assignment succeeds and mutates the array in place:
let arr = [1,2,3,4];
arr[3] = 999;
console.log(arr) // arrays are mutable, hence update