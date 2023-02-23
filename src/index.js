/* eslint-disable quotes */
import "./style.css";
import display from "./todo.js";

const editTodoForm = document.querySelector("#todo-form");
const enterBtn = document.querySelector(".enter-btn");
const editTodoFormInput = document.querySelector(".todo-edit input");

window.addEventListener("DOMContentLoaded", () => {
  const task = display.getTodo();
  display.loadTodo(task);
});

enterBtn.addEventListener("click", () => {
  display.addTodo();
});

editTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = Number(editTodoFormInput.getAttribute("id"));
  display.updateTaskInput(editTodoFormInput.value, id);
  editTodoFormInput.value = "";
  document.querySelector(".type-task").style.display = "block";
  editTodoForm.style.display = "none";
});
