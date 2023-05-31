let firstNumber;
let secondNumber;
let operator;

const display = document.getElementById('display');
const btn = document.querySelectorAll('.cell');

btn.forEach((i) => i.addEventListener('click', show));

function show() {
  console.log('clicked');
  display.innerHTML = this.id;
}

function operate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case 'add':
      add(firstNumber, secondNumber);
      break;
    case 'subtract':
      subtract(firstNumber, secondNumber);
      break;
    case 'multiply':
      multiply(firstNumber, secondNumber);
      break;
    case 'divide':
      divide(firstNumber, secondNumber);
      break;
  }
}

function add(a, b) {
  return a + b;
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
