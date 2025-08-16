/*
    if (false) {
        var x = 10
    }
    // since var doesn't consider block scoped, it always opts global scope.
*/


{
    let x = 10;
}

console.log(x)