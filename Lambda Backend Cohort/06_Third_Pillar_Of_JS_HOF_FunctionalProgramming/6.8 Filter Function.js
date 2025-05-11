/**
 * Array.filter() - Higher Order Function
 *
 * The filter() method creates a new array containing only elements that pass a test
 * (provided as a function).
 *
 * Key Characteristics:
 *
 * 1. Purpose: Selectively include elements based on condition
 * 2. Return Value: A new array with only the passing elements
 * 3. Original Array: Remains unchanged
 * 4. Callback Requirement: Must return a boolean (or value coerced to boolean)
 *
 * Filter Callback Function:
 * - Receives: the current element, index, and original array
 * - Must return: true to keep the element, false to exclude it
 * - Any non-boolean return gets converted to boolean using Boolean()
 *   (e.g., 0, null, undefined, "" become false; others become true)
 *
 * Example Usage:
 *
 * // Get only even numbers
 * const numbers = [1, 2, 3, 4, 5, 6];
 * const evenNumbers = numbers.filter(num => num % 2 === 0);
 * // Result: [2, 4, 6]
 *
 * // Filter objects based on a property
 * const products = [
 *   { name: "Phone", price: 500, inStock: true },
 *   { name: "Laptop", price: 1200, inStock: true },
 *   { name: "Tablet", price: 300, inStock: false }
 * ];
 *
 * const availableProducts = products.filter(product => product.inStock);
 * // Result: [{ name: "Phone", price: 500, inStock: true }, { name: "Laptop", price: 1200, inStock: true }]
 *
 * // Be careful with non-boolean returns
 * const weirdFilter = [0, 1, "", "hello", null, undefined].filter(item => item);
 * // Result: [1, "hello"] (only truthy values remain)
 */


function oddOrEven(element) {
    return element % 2 == 0;    // returns boolean
}


let arr = [1, 2, 3, 4, 5]

let filteredEvenArr = arr.filter(oddOrEven)

console.log("Filtered list of even elements : ", filteredEvenArr)
