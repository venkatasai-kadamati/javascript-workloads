function addTodo() {
  // write the code that reads the contents of the input box
  // creates a new todo on the html dom
  // clears the input box after creation of new item
  const element = document.getElementById("todoInput");
  const todo = element.value;

  console.log("user todo item entry: ", todo);

  // element creation through DOM
  // step 1: create the element
  const newDiv = document.createElement("div");
  newDiv.innerHTML = todo;

  // step 2: render the new element on DOM
  const parentDiv = document.getElementById("todoContainer");
  parentDiv.appendChild(newDiv);
}
