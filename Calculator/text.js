let display = document.getElementById("current-display");
let previousDisplay = document.getElementById("previous-display");

let numberButtons = document.querySelectorAll(".number");
let operatorButtons = document.querySelectorAll(".operator");

let clearButton = document.getElementById("clear");
let deleteButton = document.getElementById("delete");
let equalsButton = document.getElementById("equals");

numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (display.innerHTML === "0") {
      display.innerHTML = button.innerHTML;
    } else {
      display.innerHTML += button.innerHTML;
    }
  });
});

clearButton.addEventListener("click", function () {
  display.innerHTML = "0";
  previousDisplay.innerHTML = "0";
});

deleteButton.addEventListener("click", function () {
  display.innerHTML = display.innerHTML.slice(0, -1);

  if (display.innerHTML === "") {
    display.innerHTML = "0";
  }
});

let firstNumber = 0;

let operator = "";

operatorButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    firstNumber = Number(display.innerHTML);
    operator = button.innerHTML;

    previousDisplay.innerHTML = firstNumber + "" + operator;
    display.innerHTML = "0";
  });
});

let secondNumber = 0;
let result = 0;

function calculate() {
  secondNumber = Number(display.innerHTML);

  if (display.innerText === "Error") {
    return;
  }

  if (operator === "+") {
    result = firstNumber + secondNumber;
  } else if (operator === "−") {
    result = firstNumber - secondNumber;
  } else if (operator === "×") {
    result = firstNumber * secondNumber;
  } else if (operator === "÷") {
    if (secondNumber === 0) {
      result = "Error";
    } else {
      result = firstNumber / secondNumber;
    }
  }

  display.innerHTML = result;
  operator = "";
}

equalsButton.addEventListener("click", function () {
  calculate();
});
