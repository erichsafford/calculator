let firstNum
let secondNum
let operator 

// Add //
function add(firstNum, secondNum) {
    return firstNum + secondNum;    
};

// Subtract //
function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

// Multiply //
function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
};

// Divide //
function divide(firstNum, secondNum) {
    return firstNum / secondNum;
};

// Operate //
function operate(op, x, y) {
    firstNum = x;
    secondNum = y;
    operator = op
    if (op === "+") {   
        return add(firstNum, secondNum);
    } else if (op === "-") {
        return subtract(x, y);
    } else if (op === "*") {
        return multiply(x, y);
    } else if (op === "/") {
        return divide(x, y);
    };
};

let plus = operate("+", 3, 5);
console.log(plus);
let minus = operate("-", 5, 3);
console.log(minus);
let times = operate('*', 12, 12);
console.log(times)
let erich = operate("/", 15, 3)
console.log(erich)