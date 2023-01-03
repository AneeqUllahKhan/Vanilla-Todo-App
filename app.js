const todoinput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");

// Event Listener
todobutton.addEventListener("click", addTodo);
todolist.addEventListener("click", deleteCheck);

//function

function addTodo(event) {
  event.preventDefault();

  const TodoDiv = document.createElement("div");
  TodoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoinput.value;
  newTodo.classList.add("todo-item");
  TodoDiv.appendChild(newTodo);

  const completeButton = document.createElement("button");
  completeButton.innerText = "complete";
  completeButton.classList.add("complete-btn");
  TodoDiv.appendChild(completeButton);

  const trashButton = document.createElement("button");
  trashButton.innerText = "delete";
  trashButton.classList.add("trash-btn");
  TodoDiv.appendChild(trashButton);

  todolist.appendChild(TodoDiv);
}

function deleteCheck(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
