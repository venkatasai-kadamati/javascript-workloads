/**
 * JavaScript Variable Scopes
 *
 * JavaScript has four main types of scopes:
 * 1. Global Scope - Variables accessible throughout the entire program
 * 2. Function Scope - Variables accessible only within the function they're declared in
 * 3. Block Scope - Variables accessible only within the block ({}) they're declared in
 * 4. Module Scope - Variables accessible only within the module they're declared in
 *
 * Scope represents the context of current execution - it defines where
 * variables are "visible" and can be accessed.
 *
 * A function always creates its own scope.
 * A block scope is created with a pair of curly braces {}.
 */

// Global Scope Example
// This variable is accessible everywhere in the program
const x = "declared in global scope";

function exampleFunction() {
    console.log("inside function");
    // x is accessible here because it's in global scope
    console.log(x);
}

exampleFunction();
console.log("outside function");
console.log(x);


console.log("-------- separator --------");


// Block Scope Example
{
    // u is only accessible within this block
    const u = 1;
}
// console.log(u); // Error: u is not defined outside the block


console.log("-------- separator --------");


// var Variables and Scope
// var declares function-scoped or globally-scoped variables
// Important: var does NOT respect block scope
var i = 1;

if (i === 1) {
    // This modifies the same 'i' variable from the outer scope
    var i = 2;
    console.log(i); // 2
}

// The outer 'i' was modified because var ignores the block scope
console.log(i); // 2

// var declarations are hoisted - processed before any code is executed
console.log("-------- separator --------");

// let Variables and Scope
// let declares block-scoped variables
let val = 1;

if (val === 1) {
    // This creates a new 'val' variable scoped to this block
    let val = 2;
    console.log(val); // 2
}

// The outer 'val' remains unchanged
console.log(val); // 1