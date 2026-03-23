//
const LOCALSTORAGE_KEY = "tasks";
const formEl = document.querySelector("form");
const ulEl = document.querySelector("ul");

// getFromLocalStorage holt den gespeicherten Wert aus dem Local Storage und wandelt
// den JSON-String zurück in ein JavaScript-Array um (JSON.parse).
// Falls noch nichts gespeichert ist, gibt localStorage.getItem() null zurück —
// der || [] sorgt dafür, dass wir in diesem Fall einfach mit einem leeren Array starten.
const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];

function renderTodo(text) {
  const newLi = document.createElement("li");
  newLi.textContent = text;
  ulEl.appendChild(newLi);
}

function handleSubmit(event) {
  event.preventDefault();

  const userInput = event.target.elements.userInput.value.trim();

  if (!userInput) {
    alert("Cannot submit empty note");
    return;
  }

  // in den Local Storage

  // Ohne getFromLocalStorage müssten wir das manuell in mehreren Schritten machen:
  // let tasks = localStorage.getItem("tasks");
  // if (tasks === null) {
  //   tasks = [];                  // Schritt 1: null-Fall abfangen → leeres Array
  // } else {
  //   tasks = JSON.parse(tasks);   // Schritt 2: JSON-String → JavaScript-Array
  // }

  // getFromLocalStorage kapselt genau diese drei Schritte in einen Einzeiler:
  // holen → parsen → Fallback auf [] — alles auf einmal.
  const tasks = getFromLocalStorage(LOCALSTORAGE_KEY);
  tasks.push(userInput);
  // tasks.unshift(userInput);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(tasks));

  // rendern
  renderTodo(userInput);

  formEl.reset();
}

function renderStorage() {
  const tasks = getFromLocalStorage(LOCALSTORAGE_KEY);
  tasks.forEach((t) => renderTodo(t));
}

formEl.addEventListener("submit", handleSubmit);

renderStorage();
