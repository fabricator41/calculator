let firstNumber;
let secondNumber;
let operator;
let displayValue;

const display = document.getElementById('display');
const btn = document.querySelectorAll('.cell');
btn.forEach((i) => i.addEventListener('click', show));

function show() {
  display.innerHTML = this.id;
}

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
  display.textContent = '0';
});

const deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener('click', () => {
  display.textContent = '0';
});

const equalBtn = document.querySelector('.equal');

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
