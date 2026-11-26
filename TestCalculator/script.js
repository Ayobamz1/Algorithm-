// SELECT HTML ELEMENTS

let display = document.getElementById("current-display");
let previousDisplay = document.getElementById("previous-display");

let numberButtons = document.querySelectorAll(".number");
let clearAll = document.getElementById("clear");
let deleteLast = document.getElementById("delete");
let operators = document.querySelectorAll(".operator");
let equalsButton = document.getElementById("equals");

// CALCULATOR VARIABLES

let firstNumber = null;
let secondNumber = null;
let operator = null;
let result = null;
let shouldResetDisplay = false;

// NUMBER BUTTONS

numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let value = button.innerText;

    if (value === ".") {
      if (shouldResetDisplay) {
        display.innerText = "0";
        shouldResetDisplay = false;
      }

      if (!display.innerText.includes(".")) {
        display.innerText = display.innerText + ".";
      }

      return;
    }

    if (display.innerText === "0" || shouldResetDisplay) {
      display.innerText = value;
      shouldResetDisplay = false;
    } else {
      display.innerText = display.innerText + value;
    }
  });
});

// CLEAR ALL BUTTON

clearAll.addEventListener("click", function () {
  display.innerText = "0";
  previousDisplay.innerText = "";

  firstNumber = null;
  secondNumber = null;
  operator = null;
  result = null;

  shouldResetDisplay = false;
});

// DELETE BUTTON

deleteLast.addEventListener("click", function () {
  if (shouldResetDisplay) {
    return;
  }

  display.innerText = display.innerText.slice(0, -1) || "0";
});

// CALCULATION FUNCTION

function calculate(a, b, op) {
  if (op === "+") {
    return a + b;
  }

  if (op === "-" || op === "−") {
    return a - b;
  }

  if (op === "×") {
    return a * b;
  }

  if (op === "÷") {
    if (b === 0) {
      return "Cannot divide by 0";
    }

    return a / b;
  }
}

// OPERATOR BUTTONS

operators.forEach(function (button) {
  button.addEventListener("click", function () {
    if (operator !== null && !shouldResetDisplay) {
      secondNumber = Number(display.innerText);

      result = calculate(firstNumber, secondNumber, operator);

      if (typeof result === "string") {
        display.innerText = result;
        previousDisplay.innerText = "";
        firstNumber = null;
        secondNumber = null;
        operator = null;
        shouldResetDisplay = true;
        return;
      }

      firstNumber = result;
      display.innerText = result;
    } else if (firstNumber === null) {
      firstNumber = Number(display.innerText);
    }

    operator = button.innerText;

    previousDisplay.innerText = firstNumber + " " + operator;

    shouldResetDisplay = true;
  });
});

// EQUALS BUTTON

equalsButton.addEventListener("click", function () {
  if (firstNumber === null || operator === null || shouldResetDisplay) {
    return;
  }

  secondNumber = Number(display.innerText);

  result = calculate(firstNumber, secondNumber, operator);

  previousDisplay.innerText = firstNumber + " " + operator + " " + secondNumber;

  if (typeof result === "string") {
    display.innerText = result;
    firstNumber = null;
    secondNumber = null;
    operator = null;
    shouldResetDisplay = true;
    return;
  }

  display.innerText = result;

  firstNumber = result;
  secondNumber = null;
  operator = null;

  shouldResetDisplay = true;
});
