import { bla } from "../third_file.js";

function add(a, b) {
  return a + b;
}

const LOCALSTORAGE_KEY = "tasks";

export default function multiply(a, b) {
  return a * b;
}

console.log(document.body);
console.log(bla);

export { add, LOCALSTORAGE_KEY };
