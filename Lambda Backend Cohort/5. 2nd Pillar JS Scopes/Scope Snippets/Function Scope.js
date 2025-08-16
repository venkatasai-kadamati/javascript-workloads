/**
 * Function Scope vs Block Scope in JavaScript
 *
 * This file demonstrates important differences between variable declarations using:
 * - var (function-scoped)
 * - let (block-scoped)
 *
 * Key concepts illustrated:
 * 1. Variable accessibility outside functions
 * 2. Variable hoisting behavior
 * 3. Temporal Dead Zone (TDZ) with block-scoped variables
 */

// Example 1: Function-Scoped Variables with 'var'
function func() {
    var y = 10;   // Function-scoped: not accessible outside this function
}

// console.log(y);  // Error: y is not defined
// Variables declared with 'var' are contained within their function

// Example 2: Block-Scoped Variables with 'let'
function gun() {
    // console.log(z);  // Error: Cannot access 'z' before initialization
    // This is the Temporal Dead Zone (TDZ) - z exists but can't be used yet

    let z = 10;        // Block-scoped: not accessible outside this function
}

// console.log(z);     // Error: z is not defined
// Variables declared with 'let' are contained within their block
gun();

/**
 * Important Differences:
 *
 * 1. Hoisting Behavior:
 *    - var: Variable declarations are hoisted to the top of their function scope
 *      with an initial value of 'undefined'
 *    - let: Declarations are hoisted but remain in the TDZ until the declaration line
 *
 * 2. Scope Boundaries:
 *    - var: Function-scoped (ignores blocks like if/for/while)
 *    - let: Block-scoped (respects any pair of curly braces)
 *
 * 3. Access Order:
 *    - var: Can be accessed before declaration (will be undefined)
 *    - let: Must be accessed after declaration (TDZ prevents earlier access)
 *
 * These differences make 'let' more predictable and help prevent certain types of bugs
 * that commonly occur with 'var' declarations.
 */