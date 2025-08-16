// JavaScript is not purely interpreted. so in short javascript is naturally a   interpeter language, but modern js is hybrid.

// JS undergoes in 2 phase (parsing and then execution)

var teacher = "Sanket";

function fun() {
    var teacher = "Pulkit"
    console.log(teacher)
}

function gun() {
    var student = "Sarthak"
    console.log(student)
}

fun();
gun();
console.log(teacher);

//1. parsing  - scope resolution - reads the whole code, it goes thorugh the code and assigns scopes to all the variables nad function. we have 3 scopes - global, function, block

//global -
let name = "Venkatasai"

function func() {
    console.log(name)
}

func();
console.log(name)
//function -
//block -