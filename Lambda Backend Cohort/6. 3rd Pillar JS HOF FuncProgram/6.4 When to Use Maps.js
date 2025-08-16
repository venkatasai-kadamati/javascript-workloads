/**
 * When to Use Array.map()
 *
 * Use map() when you need to:
 * 1. Transform every element in an array uniformly
 * 2. Create a new array based on an existing one
 * 3. Extract specific properties from an array of objects
 * 4. Maintain the same array length with modified values
 *
 */

// Real-world Example:
// In an e-commerce platform like Flipkart:

const products = [
    {id: 101, name: "Smartphone", price: 12999, inStock: true},
    {id: 102, name: "Laptop", price: 49999, inStock: false},
    {id: 103, name: "Headphones", price: 1999, inStock: true}
];

// Extract just product names for UI display
const productNames = products.map(product => product.name);
// Result: ["Smartphone", "Laptop", "Headphones"]


// Format prices for display
const formattedPrices = products.map(product => `₹${product.price}`);
// Result: ["₹12999", "₹49999", "₹1999"]

console.log(productNames)
console.log(formattedPrices)
