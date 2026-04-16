/*
 arrays are just custom objects
 the index of the element is the key and the element itself is the value.
 let arr = [1, 2, 3]
 const arrType = typeof (arr)
 console.log(arrType) -> returns object
 ["abc", "def", "ghi"] -> {0: "abc", 1: "def", 2: "ghi"}
*/

// Higher Order Functions -> these are functions that depend and operate on other function. They take another function as an argument and then execute the logic (or) return a function.
// we have many HOF's available inbuilt for arrays

// map function
// it takes as an argument -> f
// it returns a new array, in which every is actually populated by calling
// function f with original array elements argument.
// Every element of the original arr is passed one by one in the argument function f.
// Whatever is the output for each element, we populate that output in an array
// ! In simple words -> Map applies the function to each array elem.
function square(elem) {
    return elem * elem; // return squared value
}

function cube(elem) {
    return elem * elem * elem; // return squared value
}

function isEven(elem) {
    return (elem % 2 === 0)
}

const arr = [1, 2, 3, 4, 5]
// calling map function
const result = arr.map(square); // square is function passed as an argument.
console.log(result)

const cubedResult = arr.map(cube); // square is function passed as an argument.
console.log(cubedResult)

const isEvenResult = arr.map(isEven);
console.log(isEvenResult)

// ! note - if the function that we are passing in map takes two arguments
// then first argument will be accessing the actual value
// second argument will be accessing index of that value

const secondArr = ["abc", "def", "ghi"];

function print(val, idx) {
    return `Element at index ${idx} is ${val}`;
}

// calling map with a function that has 2 args
// here map is looping every element
// and then passing element, index in the function print.
let output = secondArr.map(print);
console.log(output)

function customMapper(arr, func) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i]));
    }

    return result;
}

const value = customMapper(secondArr, print);
console.log(value)