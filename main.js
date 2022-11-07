let min = 10000;
let max = 90000;
let num = Math.floor(Math.random() * min) + max;

document.getElementById("ticketNum").innerText = num;

function maybeAlert() {
  alert("Amazing! ❤️");
}

function signUpPrompt() {
  let name = prompt("Great! Please provide your name: ");
  prompt("Please provide your email: ");

  document.getElementById("userMsg").innerText = `See you then, ${name}!`;
}
