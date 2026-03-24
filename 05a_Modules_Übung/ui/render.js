import { getFromLocalStorage, LOCALSTORAGE_KEY } from "../utils/index.js";

const ulEl = document.querySelector("ul");

function renderTodo(text) {
  const newLi = document.createElement("li");
  newLi.textContent = text;
  ulEl.appendChild(newLi);
}

function renderStorage() {
  const tasks = getFromLocalStorage(LOCALSTORAGE_KEY);
  tasks.forEach((t) => renderTodo(t));
}

export { renderTodo, renderStorage };
