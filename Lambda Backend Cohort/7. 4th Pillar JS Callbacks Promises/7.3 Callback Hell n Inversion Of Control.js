/**
 * Problems with Callbacks in JavaScript
 *
 * This file examines two major issues with callback-based programming:
 * 1. Callback Hell (Pyramid of Doom)
 * 2. Inversion of Control
 */

// Example 1: Array sorting with a callback function
let arr = [1, 10, 10000, 9, 2, 3, 11];

// The sort method takes a comparator function as a callback
// This is a controlled use of callbacks where inversion of control is not problematic
arr.sort(function cmp(a, b) {
    // Return negative when a < b (a comes before b)
    // Return positive when a > b (a comes after b)
    // Returns 0 when equal (order doesn't matter)
    return a - b;
});

// Output the sorted array in ascending numerical order
console.log(arr); // [1, 2, 3, 9, 10, 11, 10000]

/**
 * Example 2: Demonstration of Inversion of Control
 *
 * Here we have a function implemented by "Team A" that we need to use
 * but we don't control its internal implementation
 */
function doTask(fn, x) {
    // We don't control what happens inside this function
    // It's a "black box" implemented by Team A

    // The implementation might:
    // - Call our callback multiple times (when we expect once)
    // - Call it with unexpected parameters
    // - Never call it at all (in case of errors)
    // - Call it synchronously when we expect async (or vice versa)

    fn(x ** x); // Calls our callback with x raised to power of x
}

// We're passing our code (the callback) to be executed by code we don't control
doTask(function (num) {
    console.log("Woh num is:", num);
}, 9);

/**
 * Key Problems Explained:
 *
 * 1. Callback Hell (not shown directly in this example)
 *    - Deeply nested callbacks create unreadable "pyramid" code
 *    - Makes error handling, parallel execution, and sequential execution difficult
 *    - Example: callback inside callback inside callback...
 *
 * 2. Inversion of Control (shown in doTask example)
 *    - We give control over our program flow to another function
 *    - We must trust that the function will:
 *      a. Call our callback the correct number of times
 *      b. Call it with the expected parameters
 *      c. Call it at all (not silently fail)
 *      d. Handle errors properly
 *    - This loss of control creates unpredictability in our code
 *
 * Modern JavaScript addresses these issues with:
 * - Promises (for handling asynchronous operations with better control)
 * - Async/await (for writing asynchronous code in a synchronous style)
 */