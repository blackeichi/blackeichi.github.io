const todoForm = document.getElementById("todo");
const todoInput = document.querySelector("#todo input");
const ul = document.querySelector("#todos ul");

const TODO = "todolist";
let todos = [];

const savedTodos = localStorage.getItem(TODO);

const deleteTodo = () => {
  console.log("delete");
};

const paintTodo = (newTodo) => {
  const li = document.createElement("li");
  const button = document.createElement("button");
  const span = document.createElement("span");
  span.innerText = `◽ ${newTodo}`;
  button.innerText = "x";
  button.style.marginLeft = "10px";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  ul.appendChild(li);
};

if (savedTodos) {
  const parsedTodo = JSON.parse(savedTodos);
  parsedTodo.forEach(paintTodo);
}

const submitTodo = (event) => {
  event.preventDefault();
  const newTodo = todoInput.value;
  todos.push(newTodo);
  todoInput.value = "";
  localStorage.setItem(TODO, JSON.stringify(todos));
  paintTodo(newTodo);
};

todoForm.addEventListener("submit", submitTodo);

//delete 마무리
