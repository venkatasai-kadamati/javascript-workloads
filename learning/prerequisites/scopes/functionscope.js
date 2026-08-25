function fun() {
    // within a function var, let, const behave the same
    console.log(y) // available due to hoisting
    var y = 10; // var creates a function scope, thus we can access y anywhere within the function
    let z = 90; // let "is" block scoped and is only available below the declaration
}

// console.log(z) // not able to access, as z is present only within the function "fun()".