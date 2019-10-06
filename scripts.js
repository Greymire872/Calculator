// Enter a description of this program here.
function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function remainder(a, b) {
  return a % b;
}

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("submitted");
});
