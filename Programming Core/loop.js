let arr = [1, 2, 3, 4, 5]

// for (leti = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i] + " is even");
//     }
// }

while (arr.length > 0) {
    let i = arr.shift();
    console.log(i, arr);

}

console.log(arr);
