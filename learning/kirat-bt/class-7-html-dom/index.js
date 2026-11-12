function addTodo() {
  // write the code that reads the contents of the input box
  // creates a new todo on the html dom
  // clears the input box after creation of new item
  const input = document.getElementById("todoInput");
  const todo = input.value;
  if (todo === "") {
    return;
  }
  input.value = "";

  console.log("user todo item entry: ", todo);

  // element creation through DOM
  const item = document.createElement("div");
  const span = document.createElement("span");
  span.textContent = todo;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  // the handler closes over `item`, the element itself, so no id lookup is needed
  deleteBtn.addEventListener("click", () => item.remove());

  item.append(span, deleteBtn);
  document.getElementById("todoContainer").append(item);
}
