console.log(name)
let name = "sai" // globally scoped

function fun() {
    console.log(name) // tries to find name locally, but doesn't find any. So ends up using the global name with value "sai"
}

fun()
console.log(name) // uses the global name with value "sai"