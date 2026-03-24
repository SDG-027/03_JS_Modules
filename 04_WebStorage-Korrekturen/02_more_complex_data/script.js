//
const formEl = document.querySelector("form");
const userInput = document.querySelector("#userInput");
const ulEl = document.querySelector("ul");
const LS_KEY = "tasks";

const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];
const writeToLocalStorage = (key, val) => localStorage.setItem(key, JSON.stringify(val));

// LI render
function createLI(task) {
  const newLi = document.createElement("li");
  const newP = document.createElement("p");
  const deleteBtn = document.createElement("button");

  newLi.setAttribute("id", task.id);
  newLi.classList.add("flex", "gap-4", "items-baseline", "px-4", "justify-between");
  newP.textContent = task.content;

  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add(
    "mt-5",
    "px-4",
    "py-2",
    "bg-red-500",
    "hover:bg-red-400",
    "text-white",
    "rounded",
  );

  deleteBtn.addEventListener("click", () => {
    const tasks = getFromLocalStorage(LS_KEY);
    const updatedTasks = tasks.filter((singleTask) => singleTask.id !== task.id);
    writeToLocalStorage(LS_KEY, updatedTasks);
    newLi.remove();
  });

  newLi.appendChild(newP);
  newLi.appendChild(deleteBtn);
  ulEl.prepend(newLi);
}

// handler Submit Event
function handleSubmit(e) {
  e.preventDefault();
  const inputVal = userInput.value.trim();

  if (!inputVal) {
    alert("Task must not be empty");
    return;
  }

  const newTask = {
    content: inputVal,
    id: Date.now(),
    // id: crypto.randomUUID(),
  };

  // tasks aus lS -> []
  const tasks = getFromLocalStorage(LS_KEY);
  console.log(tasks);
  const updatedArray = [...tasks, newTask];

  writeToLocalStorage(LS_KEY, updatedArray);

  createLI(newTask);
}

// Initial Render Local Storage
function renderFromLocalStorage() {
  const tasks = getFromLocalStorage(LS_KEY);
  tasks.forEach((t) => createLI(t));
}

// Main

formEl.addEventListener("submit", handleSubmit);
renderFromLocalStorage(9);
