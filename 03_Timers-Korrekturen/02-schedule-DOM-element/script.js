const messageBody = document.querySelector("#message-container");
const delay = 3000;

function addMessage() {
  const fullMsg = document.createElement("div");
  fullMsg.classList.add("bg-yellow-300", "p-4", "rounded-lg", "text-center");
  fullMsg.innerText = "Special Offer: Get 20% off your next purchase!";

  messageBody.appendChild(fullMsg);

  messageBody.showModal();
}

setTimeout(addMessage, delay);

setTimeout(() => {
  messageBody.close();
}, delay + 4000);
