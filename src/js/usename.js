const username = document.getElementById("username");
const inputValue = document.querySelector("#username input");
const span = document.querySelector("#login span");
const todobox = document.getElementById("todos");

const deleteUser = () => {
  localStorage.removeItem("userName");
  username.style.display = "block";
  span.style.display = "none";
  todobox.style.display = "none";
};

const checkLogin = () => {
  const loggedinUser = localStorage.getItem("userName");
  if (loggedinUser) {
    username.style.display = "none";
    span.style.display = "block";
    todobox.style.display = "flex";
    span.innerText = `${loggedinUser}`;
    const button = document.createElement("button");
    button.innerText = "log out";
    button.style.marginLeft = "5px";
    button.addEventListener("click", deleteUser);
    span.appendChild(button);
  } else {
    return;
  }
};
checkLogin();
const submitUsername = (event) => {
  event.preventDefault();
  localStorage.setItem("userName", inputValue.value);
  inputValue.value = "";
  checkLogin();
};

username.addEventListener("submit", submitUsername);
