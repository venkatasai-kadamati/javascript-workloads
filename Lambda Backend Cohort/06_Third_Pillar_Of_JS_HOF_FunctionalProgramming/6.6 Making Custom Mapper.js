// We can always try to come up with a custom map function instead of using the inbuilt map()
// Internally, map() holds a customMapper()

function customMapper(arr, func) {
    let doubledArr = []
    for (i = 0; i < arr.length; i++) {
        doubledArr[i] = func(arr[i])
    }
    return doubledArr
}

const value = customMapper([1, 2, 3], function doubleValue(element) {
    let result = element * 2
    return result
})

console.log("final doubled array: ", value)