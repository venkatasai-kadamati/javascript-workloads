// reduce function (HOF)
// it also takes a function f as an argument
// what reduce does is, it one by one goes to every element of the array.
// say the current element is arr[i]
// reduce will pass this element to the function f and accumalate the result of further function with this particular result.

const arr = [1, 2, 3, 4, 5, 6];

function sum(prevRes, currVal) {
    return prevRes + currVal
}

const result = arr.reduce(sum);
console.log(result)

// realistic example of reduce function used in Ecommerce
let cart = [
    {price: 10000, name: "pixel"},
    {price: 500, name: "back cover"},
    {price: 300, name: "charger"}
]

// easy way to find the total price of cart
let totalPrice = 0;
for (const item of cart) {
    totalPrice += item.price;
}

console.log("total price of card", totalPrice);

// using reduce function
function cartTotal(prev, curr) {
    let v = prev.price + curr.price
    return {price: v};
}

const reducerResult = cart.reduce(cartTotal);
console.log(reducerResult)