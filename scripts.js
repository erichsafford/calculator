let firstNum = "";
let secondNum = "";
let holder = ""
let chosenOperator = ""
let displayNow = ""
let result = ""


// Add //
function add(x, y) {
    return x + y;
};

// Subtract //
function subtract(x, y) {
    return x - y;
}

// Multiply //
function multiply(x, y) {
    return x * y;
};

// Divide //
function divide(x, y) {
    return x / y;
};

// Operate //
function operate(op, x, y) {
    let cleanX
    let cleanY
    if (x.indexOf(".") === -1 && y.indexOf(".") === -1) {
        cleanX = parseInt(x);
        cleanY = parseInt(y);
    } else {
        cleanX = parseFloat(x);
        cleanY = parseFloat(y);
    };

    if (op === "+") {
        return add(cleanX, cleanY);
    } else if (op === "-") {
        return subtract(cleanX, cleanY);
    } else if (op === "*") {
        return multiply(cleanX, cleanY);
    } else if (op === "/") {
        return divide(cleanX, cleanY);
    };
};

// Display numbers when clicked //

const numberButton = document.querySelectorAll('.number');
numberButton.forEach(function (i) {
    i.addEventListener('click', function() {
        displayNumber(this);
    });
});

function displayNumber(number) {
    const num = number.textContent;
    const display = document.querySelector('.numberDisplay');
    currentDisplay = display.textContent;
    display.textContent = currentDisplay + num;
    displayNow = display.textContent;
};

// Enable clear button
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', function() {
    const display = document.querySelector('.numberDisplay');
    display.textContent = "";
    firstNum = "";
    secondNum = "";
    chosenOperator = "";
    displayNow = display.textContent;
});

// Enable equals button
const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', function() {
    const display = document.querySelector('.numberDisplay');
    secondNum = display.textContent;
    result = operate(chosenOperator, firstNum, secondNum);
    display.textContent = result;
})

// Enable +/- button
const posNegButton = document.querySelector('.posNeg');
posNegButton.addEventListener('click', function() {
    const display = document.querySelector('.numberDisplay');
    currentDisplay = display.textContent;
    display.textContent = currentDisplay * -1;
    displayNow = display.textContent;
})

// Store current displayed number and operator when operator is clicked
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(function (i) {
    i.addEventListener('click', function() {
        updateState(this);
    })
});

function updateState(operator) {
    const display = document.querySelector('.numberDisplay')
    if (chosenOperator === "") {
        firstNum = displayNow;
        chosenOperator = operator.textContent;
        display.textContent = "";
        displayNow = "";
    } else {
        secondNum = displayNow;
        let result = operate(chosenOperator, firstNum, secondNum);
        display.textContent = result;
        firstNum = result;
    }

}

