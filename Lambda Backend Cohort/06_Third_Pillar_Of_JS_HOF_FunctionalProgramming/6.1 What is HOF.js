// Higher Order Functions

// In simple words - these functions take another function as argument (input) and call from their body.
/*
* function f(x,fn){
*       // here x is number
*       // here fn is another function
* }
* */

// simple example to understand how it looks in action
function f(x, fn) {
    console.log(x)
    console.log(fn)
    fn()
}

f(6, function another_function() {
    console.log("I am an expression passed to a HOF")
})


console.log("-------------- separator --------------")


// great example for HOF Implementations - Custom map function. applies transformation to each of the item in an iterator
function custom_mapper(input_list, transformation_logic) {
    console.log("current list: ", input_list)

    for (let i = 0; i < input_list.length; i++) {
        input_list[i] = transformation_logic(input_list[i])
    }

    console.log("post transformation ", input_list)
}

custom_mapper([1, 2, 3, 4], function transformation_logic(input_element) {
    return 2 * input_element;
})
