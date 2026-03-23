// localStorage speichert Daten dauerhaft im Browser (bleibt auch nach dem Schließen erhalten).
// Wichtig: localStorage kann nur *Strings* speichern — keine Zahlen, Objekte, etc.

const favNum = 42;

// .setItem(key, value) speichert einen Wert unter einem bestimmten Key.
// Die Zahl 42 wird dabei automatisch in den String "42" umgewandelt.
localStorage.setItem("favNum", favNum);

// .getItem(key) liest den gespeicherten Wert — gibt immer einen String zurück
const data = localStorage.getItem("favNum");

console.log(typeof data); // Gibt "string" aus — nicht "number" - localStorage wandelt alles um.
console.log(data); // "42" (als String)
console.log(favNum); // 42  (als Number — der Original-Wert ist unverändert)

const myObj = {
  hello: "world",
  num: 123,
  isGreat: true,
  myArr: ["Hello"],
  myMethod() {
    return this.hello;
  },
};

// JSON.stringify() wandelt ein Objekt in einen JSON-String um ("Serialisierung").
// Nur so kann es in localStorage gespeichert werden.
// Achtung: Methoden (wie myMethod) gehen dabei verloren — JSON kennt keine Funktionen
const serialized = JSON.stringify(myObj);

localStorage.setItem("myObj", serialized);

// Aus localStorage kommt wieder ein roher String zurück — kein Objekt.
const objectFromLocalStorage = localStorage.getItem("myObj");
console.log("Objekt vom localStorage", objectFromLocalStorage);

// JSON.parse() wandelt den JSON-String zurück in ein JavaScript-Objekt ("Deserialisierung").
// Jetzt können wir wieder auf die Eigenschaften zugreifen — aber myMethod fehlt
const objectAgain = JSON.parse(objectFromLocalStorage);
console.log("wiederhergestellt:", objectAgain.isGreat); // true
