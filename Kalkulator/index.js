class Calculator {
  constructor() {
    this.numberOne = null;
    this.numberTwo = null;
    this.action = null;
    this.actionTwo = null;
    this.equal = null;
    this.outcome = 0;
    this.memory = 0;

    this.UiSelectors = {
      memoryClear: "[data-memoryClear]",
      memorySave: "[data-memorySave]",
      memoryFrom: "[data-memoryFrom]",
      memoryAdd: "[data-memoryAdd]",
      memoryMinus: "[data-memoryMinus]",
      one: "[data-one]",
      two: "[data-two]",
      three: "[data-three]",
      four: "[data-four]",
      five: "[data-five]",
      six: "[data-six]",
      seven: "[data-seven]",
      eight: "[data-eight]",
      nine: "[data-nine]",
      zero: "[data-zero]",
      dot: "[data-dot]",
      plus: "[data-plus]",
      reverse: "[data-reverse]",
      minus: "[data-minus]",
      multi: "[data-multi]",
      divide: "[data-divide]",
      equalTo: "[data-equal]",
      display: "[data-display]",
      percent: "[data-percent]",
      deleteLast: "[data-deleteLast]",
      deleteAll: "[data-deleteAll]",
      clearLast: "[data-clearLast]",
      elementOf: "[data-element]",
      squared: "[data-squared]",
      sqrt: "[data-sqrt]",
    };
  }

  initializeCatalog() {
    this.memoryClear = document.querySelector(this.UiSelectors.memoryClear);
    this.memoryFrom = document.querySelector(this.UiSelectors.memoryFrom);
    this.memoryAdd = document.querySelector(this.UiSelectors.memoryAdd);
    this.memoryMinus = document.querySelector(this.UiSelectors.memoryMinus);
    this.memorySave = document.querySelector(this.UiSelectors.memorySave);

    this.percent = document.querySelector(this.UiSelectors.percent);
    this.deleteLast = document.querySelector(this.UiSelectors.deleteLast);
    this.deleteAll = document.querySelector(this.UiSelectors.deleteAll);
    this.clearLast = document.querySelector(this.UiSelectors.clearLast);
    this.elementOf = document.querySelector(this.UiSelectors.elementOf);
    this.squared = document.querySelector(this.UiSelectors.squared);
    this.sqrt = document.querySelector(this.UiSelectors.sqrt);
    this.one = document.querySelector(this.UiSelectors.one);
    this.two = document.querySelector(this.UiSelectors.two);
    this.three = document.querySelector(this.UiSelectors.three);
    this.four = document.querySelector(this.UiSelectors.four);
    this.five = document.querySelector(this.UiSelectors.five);
    this.six = document.querySelector(this.UiSelectors.six);
    this.seven = document.querySelector(this.UiSelectors.seven);
    this.eight = document.querySelector(this.UiSelectors.eight);
    this.nine = document.querySelector(this.UiSelectors.nine);
    this.reverse = document.querySelector(this.UiSelectors.reverse);
    this.zero = document.querySelector(this.UiSelectors.zero);
    this.dot = document.querySelector(this.UiSelectors.dot);
    this.plus = document.querySelector(this.UiSelectors.plus);
    this.minus = document.querySelector(this.UiSelectors.minus);
    this.multi = document.querySelector(this.UiSelectors.multi);
    this.divide = document.querySelector(this.UiSelectors.divide);
    this.equal = document.querySelector(this.UiSelectors.equalTo);
    this.display = document.querySelector(this.UiSelectors.display);
    // this.info = document.querySelector(this.UiSelectors.info);
    this.addEventListeners();
    // this.pullCards();
  }

  addEventListeners() {
    this.memoryClear.addEventListener("click", () =>
      this.functionMemoryClear()
    );
    this.memoryFrom.addEventListener("click", () => this.functionMemoryFrom());
    this.memoryAdd.addEventListener("click", () => this.functionMemoryAdd());
    this.memoryMinus.addEventListener("click", () =>
      this.functionMemoryMinus()
    );

    this.memorySave.addEventListener("click", () => this.functionMemorySave());

    this.percent.addEventListener("click", () =>
      this.functionPercent(this.numberOne, this.numberTwo)
    );
    this.deleteLast.addEventListener("click", () => this.functionDeleteLast());
    this.deleteAll.addEventListener("click", () => this.functionDeleteAll());
    this.clearLast.addEventListener("click", () => this.functionClearLast());
    this.elementOf.addEventListener("click", () => this.functionElement());
    this.squared.addEventListener("click", () => this.functionSquared());
    this.sqrt.addEventListener("click", () => this.funcSqrt());
    this.one.addEventListener("click", () => this.functionIsNumberOneString(1));
    this.two.addEventListener("click", () => this.functionIsNumberOneString(2));
    this.three.addEventListener("click", () =>
      this.functionIsNumberOneString(3)
    );
    this.four.addEventListener("click", () =>
      this.functionIsNumberOneString(4)
    );
    this.five.addEventListener("click", () =>
      this.functionIsNumberOneString(5)
    );
    this.six.addEventListener("click", () => this.functionIsNumberOneString(6));
    this.seven.addEventListener("click", () =>
      this.functionIsNumberOneString(7)
    );
    this.eight.addEventListener("click", () =>
      this.functionIsNumberOneString(8)
    );
    this.nine.addEventListener("click", () =>
      this.functionIsNumberOneString(9)
    );
    this.zero.addEventListener("click", () =>
      this.functionIsNumberOneString(0)
    );
    this.reverse.addEventListener("click", () => this.functionReverse());
    this.dot.addEventListener("click", () => this.functionAddDot());
    this.plus.addEventListener("click", () =>
      this.functionCheckIfExist("plus")
    );
    this.minus.addEventListener("click", () =>
      this.functionCheckIfExist("minus")
    );
    this.multi.addEventListener("click", () =>
      this.functionCheckIfExist("multi")
    );
    this.divide.addEventListener("click", () =>
      this.functionCheckIfExist("divide")
    );
    this.equal.addEventListener("click", () => this.whichAction(this.action));
  }

  functionMemoryClear() {
    this.memory = 0;
  }

  functionMemoryFrom() {
    this.numberOne = this.memory;
    this.functionDisplay(this.numberOne);
    this.numberOne = 0;
  }

  functionMemoryAdd() {
    this.memory = this.memory + this.numberOne;
    this.numberOne = 0;
  }

  functionMemoryMinus() {
    this.memory = this.memory - this.numberOne;
    this.numberOne = 0;
  }

  functionMemorySave() {
    this.memory = this.numberOne;
    this.numberOne = 0;
  }

  functionPercent(a, b) {
    if (a && b === null) {
      this.outcome = 0;
      this.functionDisplay(this.outcome);
    } else if (a && b) {
      this.numberTwo = (a * b) / 100;
      this.outcome = (a * b) / 100;
      this.functionDisplay(this.outcome);
    }
  }

  functionDeleteLast() {
    if (this.numberOne && this.numberTwo === null) {
      this.numberOne = 0;
      this.functionDisplay(this.numberOne);
    } else if (this.numberOne && this.numberTwo) {
      this.numberTwo = 0;
      this.functionDisplay(this.numberTwo);
    }
    return;
  }

  functionDeleteAll() {
    this.numberOne = null;
    this.numberTwo = null;
    this.action = null;
    this.equal = null;
    this.outcome = 0;
    this.functionDisplay(this.outcome);
  }

  functionClearLast() {
    if (this.numberOne && this.numberTwo === null) {
      this.numberOne = Math.floor(this.numberOne / 10);
      this.functionDisplay(this.numberOne);
    } else if (this.numberOne && this.numberTwo) {
      this.numberTwo = Math.floor(this.numberTwo / 10);
      this.functionDisplay(this.numberTwo);
    }
  }

  functionElement() {
    if (this.numberOne && this.numberTwo === null) {
      this.numberOne = 1 / this.numberOne;
      this.functionDisplay(this.numberOne);
    } else if (this.numberOne && this.numberTwo) {
      this.numberTwo = 1 / this.numberTwo;
      this.functionDisplay(this.numberTwo);
    }
    return;
  }

  functionSquared() {
    if (this.numberOne && this.numberTwo === null) {
      this.numberOne = this.numberOne * this.numberOne;
      this.functionDisplay(this.numberOne);
    } else if (this.numberOne && this.numberTwo) {
      this.numberTwo = this.numberTwo * this.numberTwo;
      this.functionDisplay(this.numberTwo);
    }
    return;
  }

  funcSqrt() {
    if (this.numberOne && this.numberTwo === null) {
      this.numberOne = Math.sqrt(this.numberOne);
      this.functionDisplay(this.numberOne);
    } else if (this.numberOne && this.numberTwo) {
      this.numberTwo = Math.sqrt(this.numberTwo);
      this.functionDisplay(this.numberTwo);
    }
    return;
  }

  functionDisplay(a) {
    this.display.innerHTML = a;
  }

  functionIsNumberOneString(a) {
    if (typeof this.numberOne === "string" && this.action === null) {
      this.numberOne = this.numberOne + a;
      this.outcome = this.numberOne;
      this.functionDisplay(this.numberOne);
    } else if (typeof this.numberTwo === "string" && this.action) {
      this.numberTwo = this.numberTwo + a;
      this.outcome = this.numberTwo;
      this.functionDisplay(this.numberTwo);
    } else {
      this.functionPush(a);
    }
  }

  functionPush(a) {
    if (this.numberOne === null) {
      this.numberOne = a;
      this.outcome = this.numberOne;

      this.functionDisplay(this.numberOne);
    } else if (this.numberOne !== null && this.action === null) {
      if (!isNaN(this.numberOne)) {
        this.numberOne = parseInt(`${this.numberOne}${a}`);
        this.outcome = this.numberOne;
        this.functionDisplay(this.numberOne);
      } else {
        this.numberOne = parseInt(this.numberOne + a);
        this.outcome = this.numberOne;
        this.functionDisplay(this.numberOne);
      }
    } else if (this.numberOne && this.numberTwo) {
      if (!isNaN(this.numberTwo)) {
        this.numberTwo = parseInt(`${this.numberTwo}${a}`);
        this.functionDisplay(this.numberTwo);
        this.outcome = this.numberTwo;
      } else {
        this.numberTwo = parseInt(this.numberTwo + a);
        this.outcome = this.numberTwo;
        this.functionDisplay(this.numberTwo);
      }
    } else {
      this.numberTwo = a;
      this.functionDisplay(this.numberTwo);
      this.outcome = this.numberTwo;
    }
  }

  functionCheckIfExist(a) {
    if (this.action === null) {
      this.action = a;
    } else if (this.action && this.action === a && this.numberTwo) {
      this.whichAction(this.action);
    } else if (this.action && this.action !== a && this.numberTwo) {
      this.whichAction(this.action);
      this.action = a;
    } else if (this.action && this.action !== a && this.numberTwo === null) {
      this.action = a;
    }
    return;
  }

  whichAction(action) {
    if (action === "plus") {
      this.functionStringToNumber();

      this.functionPlus(this.numberOne, this.numberTwo);
      this.functionSecure();
    } else if (action === "minus") {
      this.functionMinus(this.numberOne, this.numberTwo);
      this.functionSecure();
    } else if (action === "multi") {
      this.functionMulti(this.numberOne, this.numberTwo);
      this.functionSecure();
    } else if (action === "divide") {
      this.functionDivide(this.numberOne, this.numberTwo);
      this.functionSecure();
    }
    return;
  }

  functionStringToNumber() {
    if (
      typeof this.numberOne === "string" &&
      typeof this.numberTwo === "number"
    ) {
      return (this.numberOne = parseFloat(this.numberOne));
    } else if (
      typeof this.numberOne === "number" &&
      typeof this.numberTwo === "string"
    ) {
      return (this.numberTwo = parseFloat(this.numberTwo));
    } else {
      this.numberTwo = parseFloat(this.numberTwo);
      this.numberOne = parseFloat(this.numberOne);
    }
  }

  functionPlus(a, b) {
    this.outcome = a + b;
    this.functionDisplay(this.outcome);
  }

  functionMinus(a, b) {
    this.outcome = a - b;
    this.functionDisplay(this.outcome);
  }

  functionMulti(a, b) {
    this.outcome = a * b;
    this.functionDisplay(this.outcome);
  }
  functionDivide(a, b) {
    this.outcome = a / b;
    this.functionDisplay(this.outcome);
  }

  // Funkcja która po naciśnięciu " = " zapamiętuje wynik
  functionSecure() {
    this.numberOne = this.outcome;
    this.numberTwo = null;
  }

  functionReverse() {
    if (this.numberOne && this.numberTwo === null) {
      this.numberOne = this.numberOne * -1;
      this.outcome = this.numberOne;
      this.functionDisplay(this.outcome);
    } else {
      this.numberTwo = this.numberTwo * -1;
      this.outcome = this.numberTwo;
      this.functionDisplay(this.outcome);
    }
  }

  functionAddDot() {
    if (this.numberOne && this.numberTwo === null) {
      this.numberOne = this.numberOne + ".";
      this.outcome = this.numberOne;
      this.functionDisplay(this.outcome);
    } else if (this.numberOne && this.numberTwo) {
      this.numberTwo = this.numberTwo + ".";
      this.outcome = this.numberTwo;
      this.functionDisplay(this.numberTwo);
    }
  }
}
