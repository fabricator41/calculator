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
  upDisplay.innerHTML = downDisplay.innerHTML + `${operatorSymbol}`;
}

function downShow() {
  downDisplay.innerHTML = downDisplay.innerHTML + `${this.innerHTML}`;
  firstNumber = parseFloat(firstNumber + `${this.id}`);
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

const equalBtn = document.getElementById('equal');
equalBtn.addEventListener('click', operate);

function operate() {
  let result = 0;
  console.log(firstNumber);
  secondNumber = parseFloat(downDisplay.innerHTML);
  console.log(secondNumber);
  if (operator === 'add') {
    result = add(firstNumber, secondNumber);
  } else if (operator === 'subtract') {
    result = subtract(firstNumber, secondNumber);
  } else if (operator === 'divide') {
    result = divide(firstNumber, secondNumber);
  } else if (operator === 'multiply') {
    result = multiply(firstNumber, secondNumber);
  }
  upDisplay.innerHTML = upDisplay.innerHTML + secondNumber;
  clearFunc2();
  downDisplay.innerHTML = parseFloat(result);
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
