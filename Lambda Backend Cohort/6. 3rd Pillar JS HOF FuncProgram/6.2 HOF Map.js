/**
 * JavaScript Arrays as Objects
 *
 * Arrays in JavaScript are specialized objects where:
 * - typeof [1, 2, 3] evaluates to 'object'
 * - Array indices serve as object keys
 * - Array elements become object values
 *
 * Example:
 * ['abc', 'def', 'ghi'] internally represents as:
 * { 0: "abc", 1: "def", 2: "ghi" }
 */

/**
 * Array.map() - Higher Order Function
 *
 * A common example of Higher Order Functions (HOFs) that:
 * - Takes a function as an argument
 * - Returns a new array where each element is transformed
 *   by applying the provided function
 *
 * HOFs are functions that either:
 * - Accept other functions as arguments
 * - Return functions as their output
 *
 * Map internally iterates over each element and passes it to the function.
 */

const arr = [1, 2, 3, 4]

function square(element) {
    return element * element
}

function cube(element) {
    return element * element * element
}

function isEvenOrOdd(element) {
    return element % 2 == 0 ? "Even" : "Odd"
}

const transformed_output_squared = arr.map(square)
const transformed_output_cubed = arr.map(cube)
const transformed_output_evenodd = arr.map(isEvenOrOdd)

console.log(transformed_output_squared)
console.log(transformed_output_cubed)
console.log(transformed_output_evenodd)

/**
 * Function References in Higher Order Functions
 *
 * When passing functions to HOFs like map():
 * - CORRECT: array.map(functionName)     // Passes function reference
 * - INCORRECT: array.map(functionName()) // Immediately executes the function
 *
 * Explanation:
 * - functionName → Passes the function itself (as a reference)
 * - functionName() → Calls the function immediately and passes its return value
 *
 * The HOF needs the function definition to apply it later, not the result of
 * executing that function prematurely.
 */
