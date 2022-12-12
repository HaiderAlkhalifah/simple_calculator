const number = document.querySelectorAll("[data-number]");
const operations = document.querySelectorAll("[data-operation]");
const deleteNumber = document.querySelector("[data-delete]");
const clear = document.querySelector("[data-clear]");
const calculationDisplay = document.getElementById("calculationDisplay");
const resultDisplay = document.querySelector("[data-resultDisplay]");
const equal = document.getElementById("=");

class Calculator {
  constructor(calculationDisplay, resultDisplay, operations) {
    this.calculationDisplay = calculationDisplay;
    this.resultDisplay = resultDisplay;
    this.operation = operations;
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

  addNumber(txt) {
    this.calculationDisplay.innerText += txt;
  }

  oper(op) {
    const text = this.calculationDisplay.innerText;
    const lastText = text[text.length - 1];
    for (var i = 0; i < operations.length; i++) {
      if (operations[i].id == lastText) {
        return
      };
    }

    this.calculationDisplay.innerText += op;
  }
  //TODO fix calculat "import parse"
  calculat() {
    const text = this.calculationDisplay.innerText;
    const lastText = text[text.length - 1];

    for (var i = 0; i < operations.length; i++) {
      if (operations[i].id == lastText) return;
    }

    var inner = this.calculationDisplay.innerText;
    var expression = Parser.parse(inner);
    for (var i = 0; i <= expression.length; i++) {
      expression[i] = expression[i].replace("×", "*");
      expression[i] = expression[i].replace("÷", "/");
    }

    result = math.eval(expression);
    this.display(result);
  }

  display(result) {
    // this.calculationDisplay.innerText = do wtf you want;
    this.resultDisplay.innerText = String(result);
  }
}

const calculator = new Calculator(calculationDisplay, resultDisplay);

number.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.addNumber(button.id);
  });
});

operations.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.oper(button.id);
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
