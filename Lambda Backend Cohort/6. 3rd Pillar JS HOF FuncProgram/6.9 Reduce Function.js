/**
 * Array.reduce() - The Ultimate Array Transformer
 *
 * The reduce() method executes a reducer function on each element of the array,
 * resulting in a single output value. It's like a powerful accumulator.
 *
 * Key Concepts:
 *
 * 1. Reducer Function: Takes two primary parameters
 *    - accumulator: The accumulated result from previous iterations
 *    - currentValue: The current element being processed
 *
 * 2. Initial Value (optional):
 *    - Provides the starting value for the accumulator
 *    - If omitted, the first array element becomes the initial accumulator value,
 *      and reduction starts from the second element
 *
 * Syntax:
 * array.reduce(function (accumulator, currentValue, currentIndex, array) {
 *   // return updated accumulator
 * }, initialValue);
 *
 * How reduce() works:
 *
 * 1. On the first iteration:
 *    - If initialValue provided: accumulator = initialValue, currentValue = array[0]
 *    - If no initialValue: accumulator = array[0], currentValue = array[1]
 *
 * 2. For each element:
 *    - Execute reducer function with the current accumulator and element
 *    - Return value becomes the new accumulator for the next iteration
 *
 * 3. After processing all elements:
 *    - Final accumulator value is returned
 *
 * Example - Sum of numbers:
 * const sum = [1, 2, 3, 4].reduce((accumulator, number) => accumulator + number, 0);
 * // Result: 10
 *
 * // First: acc=0, num=1 → return 0+1=1
 * // Second: acc=1, num=2 → return 1+2=3
 * // Third: acc=3, num=3 → return 3+3=6
 * // Fourth: acc=6, num=4 → return 6+4=10
 *
 * Common use cases:
 * - Summing values
 * - Flattening arrays
 * - Grouping objects
 * - Counting occurrences
 * - Building complex data structures
 */

const arr = [1, 2, 3, 4]

function sum(accumulator, currentValue, currentIndex, array) {
    console.log(accumulator, currentValue)
    return accumulator + currentValue
}

let result = arr.reduce(sum)

console.log("The input array is reduced to :", result)


console.log("------------------- separator ------------------")


let productCart = [{"price": 1000, "name": "iphone"}, {"price": 900, "name": "dumbbell"}]

function cartPriceSum(accum, current) {
    return accum.price + current.price
}

const totalCartValue = productCart.reduce(cartPriceSum)
console.log("The total cart value is : ", totalCartValue)