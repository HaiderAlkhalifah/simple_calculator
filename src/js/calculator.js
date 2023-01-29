const number = document.querySelectorAll("[data-number]");
const operations = document.querySelectorAll("[data-operation]");
const deleteNumber = document.querySelector("[data-delete]");
const clear = document.querySelector("[data-clear]");
const calculationDisplay = document.getElementById("calculationDisplay");
const resultDisplay = document.querySelector("[data-resultDisplay]");
const equal = document.getElementById("=");

let opIsClicked = false;

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
  }

  delete() {
    const text = this.calculationDisplay.innerText;
    this.calculationDisplay.innerText = text.slice(0, text.length - 1);
  }

  addNumber(txt) {
    if (this.resultDisplay.innerText != "") {
      this.clear();
      this.calculationDisplay.innerText += txt;
    } else {
      this.calculationDisplay.innerText += txt;
    }
  }

  oper(op) {
    if(opIsClicked){
    return;
    }
    if (this.resultDisplay.innerText != "") {
      this.calculationDisplay.innerText = this.resultDisplay.innerText;
      this.resultDisplay.innerText = "";
      this.calculationDisplay.innerText += op;
      opIsClicked = true;
    } else if(opIsClicked)
      return;
    else {
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

    for (let i = 0; i <= text.length - 1; i++) {
      if (text.charAt(i) == "×") {
        text = text.replace(text.charAt(i), "*");
        console.log(text);
      } else if (text.charAt(i) == "÷") {
        text = text.replace(text.charAt(i), "/");
      }

      if (this.isDigit(text.charAt(i)) && firstNum) {
        num1 += text.charAt(i);
      } else if (this.isDigit(text.charAt(i))) {
        num2 += text.charAt(i);
      } else {
        op = text.charAt(i);
        firstNum = false;
      }
    }
    console.log(op);
    x = parseInt(num1);
    y = parseInt(num2);
    let result = new Calc().calculat(x, y, op);

    this.display(result);
    opIsClicked = false;
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
