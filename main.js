/* User input initialized */
let firstNumber = 0;
let secondNumber = 0;
let operator = '';
let operatorSymbol = '';

const upDisplay = document.getElementById('up-display');
const btn = document.querySelectorAll('.cell');
btn.forEach((i) => i.addEventListener('click', downShow));

const downDisplay = document.getElementById('down-display');
function upShow() {
  upDisplay.textContent = downDisplay.textContent + `${operatorSymbol}`;
}

function downShow() {
  downDisplay.textContent = downDisplay.textContent + `${this.textContent}`;
  firstNumber = parseInt(downDisplay.textContent);
}

const operatorBtn = document.querySelectorAll('.operator');
operatorBtn.forEach((i) => i.addEventListener('click', operatorChoice));

function operatorChoice() {
  operator = this.id;
  operatorSymbol = this.textContent;
  upShow();
  clearFunc2();
}

function clearFunc() {
  upDisplay.textContent = '';
}

function clearFunc2() {
  downDisplay.textContent = '';
}

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
  clearFunc();
  clearFunc2();
});

const deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener('click', () => {
  clearFunc();
  clearFunc2();
});

const equalBtn = document.querySelector('.equal');

function operate() {
  let result = 0;
  secondNumber = parseInt(downDisplay.textContent);
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
  upShow();
  clearFunc2();
  downDisplay.textContent = result;
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
