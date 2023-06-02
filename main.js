/* User input initialized */
let firstNumber = 0;
let secondNumber = 0;
let operator = '';
let displayValue;

const display = document.getElementById('display');
const btn = document.querySelectorAll('.cell');
btn.forEach((i) => i.addEventListener('click', show));

const display2 = document.getElementById('display2');

function show() {
  display.textContent = display.textContent + `${this.textContent}`;
  firstNumber = display.innerHTML;
}

const operatorBtn = document.querySelectorAll('.operator');
operatorBtn.forEach((i) => i.addEventListener('click', operatorChoice));

function operatorChoice() {
  operator = this.id;
}

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
  display.textContent = '';
});

const deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener('click', () => {
  display.textContent = '';
});

const equalBtn = document.querySelector('.equal');

function operate(fNumber, sNumber, ope) {
  firstNumber = fNumber;
  secondNumber = sNumber;
  operator = ope;
  let result = 0;
  switch (operator) {
    case 'add':
      result = add(firstNumber, secondNumber);
      break;
    case 'subtract':
      result = subtract(firstNumber, secondNumber);
      break;
    case 'multiply':
      result = multiply(firstNumber, secondNumber);
      break;
    case 'divide':
      result = divide(firstNumber, secondNumber);
      break;
  }
  display2.textContent = result;
}

equalBtn.addEventListener('click', operate);

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
