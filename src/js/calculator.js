const number = document.querySelectorAll("[data-number]");
const operation = document.querySelectorAll("[data-operation]");
const deleteNumber = document.querySelector("[data-delete]");
const clear = document.querySelector("[data-clear]");
const calculationDisplay = document.getElementById("calculationDisplay");
const resultDisplay = document.querySelector("[data-resultDisplay]");
const equal = document.getElementById("=");

class Calculator {
  constructor(calculationDisplay, resultDisplay) {
    this.calculationDisplay = calculationDisplay;
    this.resultDisplay = resultDisplay;
    this.clear();
  }

  clear() {
    console.log("hello");
    this.calculationDisplay.innerText = "";
    this.resultDisplay.innerText = "";
    this.operation = null;
  }

  delete() {
    const text = this.calculationDisplay.innerText;
    this.calculationDisplay.innerText = text.slice(0, text.length - 1);
  }

  addNumber(number) {
    this.calculationDisplay.innerText += number;
  }

  operation(operation) {
    console.log("pressed");

    this.calculationDisplay.innerText += operation;
  }

  calculat() {
    this.calculationDisplay.innerText;
  }

  display() {
    // this.calculationDisplay.innerText = do wtf you want;
    this.resultDisplay = this.calculat;
  }
}

const calculator = new Calculator(calculationDisplay, resultDisplay);

number.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.addNumber(button.id);
  });
});

operation.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.operation(button.id);
  });
});

clear.addEventListener("click", () => {
  calculator.clear();
});

deleteNumber.addEventListener("click", () => {
  calculator.delete();
});

equal.addEventListener("click", () => {
  calculator.calculat();
});
