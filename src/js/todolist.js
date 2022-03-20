const todoForm = document.getElementById("todo");
const todoInput = document.querySelector("#todo input");
const ul = document.querySelector("#todos ul");

const TODO = "todolist";
let todos = [];

const savedTodos = localStorage.getItem(TODO);

const setTodos = () => {
  localStorage.removeItem(TODO);
  localStorage.setItem(TODO, JSON.stringify(todos));
};

const deleteTodo = (event) => {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  setTodos();
};

const paintTodo = (newTodo) => {
  const li = document.createElement("li");
  li.id = newTodo.id;
  console.log(li.id);
  const button = document.createElement("button");
  const span = document.createElement("span");
  span.innerText = `◽ ${newTodo.text}`;
  button.innerText = "x";
  button.style.marginLeft = "10px";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  ul.appendChild(li);
};

if (savedTodos) {
  const parsedTodo = JSON.parse(savedTodos);
  console.log("parse :", parsedTodo);
  parsedTodo.forEach(paintTodo);
}

const submitTodo = (event) => {
  event.preventDefault();
  const newTodo = {
    text: todoInput.value,
    id: Date.now(),
  };
  todos.push(newTodo);
  todoInput.value = "";
  setTodos();
  paintTodo(newTodo);
};

todoForm.addEventListener("submit", submitTodo);
