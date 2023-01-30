const number = document.querySelectorAll("[data-number]");
const operations = document.querySelectorAll("[data-operation]");
const deleteNumber = document.querySelector("[data-delete]");
const clear = document.querySelector("[data-clear]");
const calculationDisplay = document.getElementById("calculationDisplay");
const resultDisplay = document.querySelector("[data-resultDisplay]");
const equal = document.getElementById("=");

let opIsClicked = false;
let minusisNotCliked = true;
let dotisNotCliked = true;

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
    opIsClicked = false;
    dotisNotCliked = true;
    minusisNotCliked = true;
  }

  delete() {
    const text = this.calculationDisplay.innerText;
    let deleted = text[text.length - 1];
    this.calculationDisplay.innerText = text.slice(0, text.length - 1);
    if (deleted == "-") {
      minusisNotCliked = true;
    } else if (deleted == ".") {
      dotisNotCliked = true;
    } else if (
      deleted == "x" ||
      deleted == "÷" ||
      deleted == "+" ||
      deleted == "-"
    ) {
      console.log(deleted);
      opIsClicked = false;
    }
  }

  addNumber(txt) {
    let text = this.calculationDisplay.innerText;
    if (this.resultDisplay.innerText != "") {
      this.clear();
      this.calculationDisplay.innerText += txt;
    } else if (text.length >= 23) {
      return;
    } else {
      this.calculationDisplay.innerText += txt;
    }
  }

  oper(op) {
    let text = this.calculationDisplay.innerText;
    if (opIsClicked || text == "") {
      return;
    }
    if (this.resultDisplay.innerText != "") {
      this.calculationDisplay.innerText = this.resultDisplay.innerText;
      this.resultDisplay.innerText = "";
      this.calculationDisplay.innerText += op;
      opIsClicked = true;
    } else if (opIsClicked) {
      return;
    } else {
      this.calculationDisplay.innerText += op;
      opIsClicked = true;
    }
  }

  calculat() {
    let text = this.calculationDisplay.innerText;
    let x;
    let y;
    let op = "1";
    let num1 = "";
    let num2 = "";
    let firstNum = true;
    let Minusisthere = false;

    for (let i = 0; i <= text.length - 1; i++) {
      if (text.charAt(i) == "×") {
        text = text.replace(text.charAt(i), "*");
        console.log(text);
      } else if (text.charAt(i) == "÷") {
        text = text.replace(text.charAt(i), "/");
      }

      if (
        (this.isDigit(text.charAt(i)) && firstNum) ||
        (text.charAt(i) == "." && firstNum) ||
        (text.charAt(i) == "-" && firstNum && !Minusisthere)
      ) {
        num1 += text.charAt(i);
        Minusisthere = true;
      } else if (this.isDigit(text.charAt(i)) || text.charAt(i) == ".") {
        num2 += text.charAt(i);
      } else {
        op = text.charAt(i);
        firstNum = false;
      }
    }
    console.log(op);
    x = parseFloat(num1);
    y = parseFloat(num2);
    let result = new Calc().calculat(x, y, op);
    result = Math.round(result * 1000) / 1000;
    this.display(result);
    opIsClicked = false;
    minusisNotCliked = true;
    dotisNotCliked = true;
  }

  display(result) {
    // this.calculationDisplay.innerText = do wtf you want;
    this.resultDisplay.innerText = String(result);
  }

  isDigit = (function () {
    let re = /^\d$/;
    return function (c) {
      return re.test(c);
    };
  })();
}

class Calc {
  calculat(x, y, op) {
    if (op == "+") {
      return String(this.Add(x, y));
    } else if (op == "-") {
      return String(this.Minus(x, y));
    } else if (op == "*") {
      return String(this.Multi(x, y));
    } else if (op == "/") {
      return String(this.Div(x, y));
    } else {
      return "op is not valid";
    }
  }

  Div(x, y) {
    return x / y;
  }

  Multi(x, y) {
    return x * y;
  }

  Minus(x, y) {
    return x - y;
  }

  Add(x, y) {
    return x + y;
  }
}

const calculator = new Calculator(calculationDisplay, resultDisplay);

number.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id == "-" && minusisNotCliked) {
      calculator.addNumber(button.id);
      minusisNotCliked = false;
    } else if (button.id == "." && dotisNotCliked) {
      calculator.addNumber(button.id);
      dotisNotCliked = false;
    } else if (button.id != "-" && button.id != ".") {
      calculator.addNumber(button.id);
    }
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
