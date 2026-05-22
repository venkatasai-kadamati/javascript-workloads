### Introduction

Scopes tell us where we can use a variable, function, or object in our code.
There are three types of scopes in JavaScript: global scope, function scope, and block scope.
---

### Foundations

Everything inside our code, will be used in one of the following 2 ways

1. Either it will be getting some values assigned to it, or
2. (Or) some value will be retrieved from it.

> Is JS compiled or interpreted?
> Compiled language means they scan the whole program
> Interpreted language means they read the code line by line and execute it immediately

> Thus JS, is not purely interpreted, but it is also not purely compiled. It is a mix of both.

> JS Uses 2 phases - Parsing & Execution


> It is often referred to as a "just-in-time" (JIT) compiled language. This means that JavaScript code is first parsed
> and compiled into an
> intermediate representation, and then executed by the JavaScript engine. The engine can optimize the code during
> execution, which allows for faster performance.

### Parsing in JS

Does scope resolution.
> Types of scopes in JS:
> 1. Global Scope -> throughout the application
> 2. Function Scope
> 3. Block Scope -> {}

### Auto-Global Variables

If we assign a value to a variable that has not been declared, it will automatically become a global variable. This can
lead to unintended consequences and is generally considered bad practice. Always declare your variables using `var`,
`let`, or `const` to avoid creating auto-global variables.

```javascript
function myFunction() {
    autoGlobalVariable = "I am an auto-global variable!";
}

myFunction();
console.log(autoGlobalVariable); // Output: I am an auto-global variable!
```