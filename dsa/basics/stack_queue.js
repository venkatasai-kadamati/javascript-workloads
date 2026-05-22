// stack operations with arrays
// stack -> LIFO
const stack = []
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(100)
console.log(stack)

let top = stack.pop();
console.log("top value is :", top)
console.log(stack)

// isEmpty check
console.log("is stack empty:", stack.length === 0)