import { renderTodo } from "../ui/render.js";
import { getFromLocalStorage, LOCALSTORAGE_KEY } from "../utils/index.js";

export default function handleSubmit(event) {
  event.preventDefault();

  const userInput = event.target.elements.userInput.value.trim();

  if (!userInput) {
    alert("Cannot submit empty note");
    return;
  }

  const tasks = getFromLocalStorage(LOCALSTORAGE_KEY);
  tasks.push(userInput);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(tasks));

  renderTodo(userInput);

  event.target.reset();
}
