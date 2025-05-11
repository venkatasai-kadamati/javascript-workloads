// common use case of map function is to generate indexing for array elements

const newArr = [9, 8, 7, 6, 5]

/**
 * If the function that we are passing in the map takes two arguments,
 * then the first argument will be accessing the actual value
 * second argument will be accessing the index of that value
 */

// func: printing element and its index
function print(element, idx) {
    return `Element at index ${idx} is ${element}`
}

/**
 * Here the map is looping over every element
 * and then passing element, index to the print function
 */
let result = newArr.map(print)
console.log(result)