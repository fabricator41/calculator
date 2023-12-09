let firstNumber = 0;
let secondNumber = 0;
let operator = "";

let displayValue = "";

const currentOperationScreen = document.querySelector(
  "#currentOperationScreen"
);
const lastOperationScreen = document.querySelector("#lastOperationScreen");

const btn = document.querySelectorAll("button[class='btn']");
const screen = document.querySelectorAll(".screen div");
const clearBtn = document.querySelector("#clearBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const equalsBtn = document.querySelector("#equalsBtn");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const multiplierBtn = document.querySelector("#multiplier");
const dividerBtn = document.querySelector("#divider");

deleteBtn.addEventListener("click", deleteScreen);

plusBtn.addEventListener("click", (e) => {
  firstNumber = +currentOperationScreen.textContent;
  moveScreen(e);
  currentOperationScreen.textContent = "";
  operator = "+";
});
minusBtn.addEventListener("click", (e) => {
  firstNumber = +currentOperationScreen.textContent;
  moveScreen(e);
  currentOperationScreen.textContent = "";
  operator = "-";
});
multiplierBtn.addEventListener("click", (e) => {
  firstNumber = +currentOperationScreen.textContent;
  moveScreen(e);
  currentOperationScreen.textContent = "";
  operator = "*";
});
dividerBtn.addEventListener("click", (e) => {
  firstNumber = +currentOperationScreen.textContent;
  moveScreen(e);
  currentOperationScreen.textContent = "";
  operator = "/";
});

clearBtn.addEventListener("click", clearScreen);

equalsBtn.addEventListener("click", (num1, num2, ope) => {
  secondNumber = +currentOperationScreen.textContent;
  lastOperationScreen.textContent += currentOperationScreen.textContent + "=";
  currentOperationScreen.textContent = "";
  operate(num1, num2, ope);
});

btn.forEach((item) =>
  item.addEventListener("click", () => {
    appendScreen(item);
  })
);

function moveScreen(e) {
  lastOperationScreen.textContent =
    currentOperationScreen.textContent + `${e.target.textContent}`;
  operator = e.target.textContent;
}

function appendScreen(button) {
  if (currentOperationScreen.textContent === "0") {
    currentOperationScreen.textContent = "";
  }
  currentOperationScreen.textContent += button.textContent;
}

function clearScreen() {
  firstNumber = 0;
  secondNumber = 0;
  operator = "";
  lastOperationScreen.textContent = "";
  currentOperationScreen.textContent = "";
}

function deleteScreen() {
  let str = currentOperationScreen.textContent;
  currentOperationScreen.textContent = str.slice(0, str.length - 1);
}

function operate(num1, num2, ope = operator) {
  if (ope === "+")
    currentOperationScreen.textContent = add(firstNumber, secondNumber);
  if (ope === "-")
    currentOperationScreen.textContent = subtract(firstNumber, secondNumber);
  if (ope === "*")
    currentOperationScreen.textContent = multiply(firstNumber, secondNumber);
  if (ope === "/") {
    let result = divide(firstNumber, secondNumber);
    result.toString();
    if (result.length > 11) {
      result.toFixed(11);
    }
    currentOperationScreen.textContent = result;
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
