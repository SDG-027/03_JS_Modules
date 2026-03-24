import "./style.css";

import { renderStorage } from "./ui/render.js";
import handleSubmit from "./handlers/formSubmit.js";

const formEl = document.querySelector("form");

formEl.addEventListener("submit", handleSubmit);
renderStorage();
