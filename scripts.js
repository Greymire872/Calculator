// Enter a description of this program here.
const calculator = {
add(a, b) {
  return Number(a) + Number(b);
}

subtract(a, b) {
  return a - b;
}

multiply(a, b) {
  return a * b;
}

divide(a, b) {
  return a / b;
}

remainder(a, b) {
  return a % b;
}
}
const form = document.querySelector("form");
const num1 = document.querySelector("#num-1");
const num2 = document.querySelector("#num-2");
const select = document.querySelector("select");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log(num1.value, num2.value, select.value);
});
