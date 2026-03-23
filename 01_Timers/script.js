// ─── setTimeout ───────────────────────────────────────────────────────────────

// setTimeout führt eine Funktion *einmalig* nach einer bestimmten Verzögerung aus.
// Hier ist die Verzögerung 0ms — aber die Funktion läuft trotzdem nicht sofort.
// JavaScript legt sie zuerst in den sogenannte "Macrotask Queue" des Browsers und führt sie erst
// aus, wenn der aktuelle Code vollständig abgearbeitet ist (-> Event Loop).
setTimeout(() => {
  console.log("Sollte sofort passieren!");
}, 0);

// Dieser console.log läuft sofort — noch bevor der Timeout oben ausgeführt wird.
// Das zeigt: setTimeout ist immer asynchron, egal ob 0ms oder länger.
console.log("Direkt nach dem ersten Timeout");

// Dieser Timeout wartet 1000ms (= 1 Sekunde), bevor er ausgeführt wird.
// Der Macrotask Queue hat eine geringere proirität, als z.B. fetch,
// daher kann sich die tatsächliche Ausführung noch um ein paar Millisekunden verzögern.
setTimeout(() => {
  console.log("Nach einer sek -> 1000ms");
}, 1000);

function doSomething() {
  console.log("DONE");
}

// Hier speichern wir die ID des Timeouts in einer Variablen.
// Jeder Aufruf von setTimeout gibt eine eindeutige ID zurück —
// damit können wir den Timer später gezielt stoppen.
const timerID = setTimeout(doSomething, 3000);

// clearTimeout() bricht den Timeout ab, bevor er ausgeführt wird.
// Da wir die timerID hier direkt danach löschen, wird "DONE" niemals geloggt.
clearTimeout(timerID);

// ─── setInterval ──────────────────────────────────────────────────────────────

let counter = 0;

// setInterval führt eine Funktion *immer wieder* in einem festen Zeitabstand aus.
// Hier wird alle 1234ms eine Nachricht geloggt.
// Genau wie setTimeout gibt setInterval eine ID zurück, um den Timer stoppen zu können.
const intervalID = setInterval(() => {
  console.log("Grüße aus dem Interval");

  // Sobald counter größer als 5 ist (also beim 7. Durchlauf), stoppen wir das Interval.
  // clearInterval() mit der gespeicherten ID beendet die Wiederholung dauerhaft.
  if (counter > 5) {
    clearInterval(intervalID);
  }

  // counter wird bei jedem Durchlauf um 1 erhöht, damit wir die Anzahl im Blick behalten.
  counter++;
}, 1234);

// Diese Zeile würde das Interval *sofort* stoppen —
// noch bevor es auch nur einmal läuft. Zum Testen einfach einkommentieren.
// clearInterval(intervalID);
