// name is a global variable - exists outside functions
console.log(name)
var name = "Venkat"
// let name = "Venkat"

// since the variable is globally defined, we don't need to pass as parameter to the function
function callMyName() {
    console.log("calling from inside the function: ", name)
}

callMyName()
console.log("calling from outside the function: ", name)