{
    // block scope is ignored by var, as it doesn't know that it is encompassed within a block. thus, var considers itself as global/function scope.
    var x = 10;
}

console.log(x)