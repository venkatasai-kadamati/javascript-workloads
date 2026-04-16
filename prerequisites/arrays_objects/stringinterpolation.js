// template string (or) string interpolation
let name = "Venkat";
let company = "Amazon";

// print like the following: ___ works in ___
console.log(name, "works in", company); // printing

// storing the above into a new string
let str = name + " works in " + company;
console.log(str)

// ! better way instead of using concatenation
// to create an interpolated string we use back ticks `$... $`
// interpolated strings mean that we can embed expressions directly inside the string which will be evaluated during runtime.
// ${__} represents a valid JavaScript expression that can be evaluated.
interpolatedStr = `$name works in $company`