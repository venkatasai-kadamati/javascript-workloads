/**
 * Introduction to Callbacks and Higher-Order Functions
 *
 * Callbacks are a fundamental concept in JavaScript programming:
 * - They enable asynchronous behavior
 * - They facilitate functional programming patterns
 * - They're used extensively throughout JavaScript and its ecosystem
 *
 * A Higher-Order Function (HOF) is a function that either:
 * 1. Takes one or more functions as arguments
 * 2. Returns a function as its result
 *
 * A callback function is simply a function that is passed as an argument
 * to another function and is executed within that function.
 */

/**
 * Example 1: Basic Callback Implementation
 *
 * @param {number} x - Number of iterations to perform
 * @param {function} fn - Callback function to execute after iterations
 */
function func(x, fn) {
    // First, we execute a loop x times
    for (let i = 0; i < x; i++) {
        console.log(i);
    }

    // After the loop completes, execute the callback function
    fn();
}

// Calling our HOF with a callback function
func(10, function exec() {
    console.log("I am also executing after the loop");
});

console.log("------ separator ------");

/**
 * Example 2: setTimeout as a Higher-Order Function
 *
 * setTimeout is a built-in JavaScript HOF that:
 * - Takes a callback function as its first argument
 * - Takes a delay time (in milliseconds) as its second argument
 * - Executes the callback after the specified delay
 */

function execute_action() {
    console.log("This is a callback function executed by setTimeout after 4 seconds");
}

setTimeout(execute_action, 4000);

/**
 * Key Takeaways:
 *
 * 1. Higher-Order Functions like 'func' and 'setTimeout' take other functions as arguments
 *
 * 2. The functions passed as arguments (like 'execute_action') are callbacks
 *
 * 3. Callbacks allow for:
 *    - Asynchronous programming (do something after some time/event)
 *    - Code reusability (same HOF with different behavior via callbacks)
 *    - Modular code design (separation of concerns)
 *
 * 4. Many JavaScript built-in methods use callbacks:
 *    - Array methods (forEach, map, filter, reduce)
 *    - DOM event listeners
 *    - Asynchronous operations (fetch, setTimeout)
 */