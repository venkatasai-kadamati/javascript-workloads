// a is globally scoped (in non-module JS files, global means window in browsers)
var a = 10;

// b() is globally available
function b() {
    // x is function-scoped, not globally scoped
    var x = 20;
}

// Accessing 'a'
console.log(window.a); // works, because 'a' is a var in global scope
console.log(a);        // works, directly references the global variable
console.log(this.a);   // in non-strict mode at global level, 'this' === window
