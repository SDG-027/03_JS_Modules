const LOCALSTORAGE_KEY = "tasks";

const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];

export { getFromLocalStorage, LOCALSTORAGE_KEY };
