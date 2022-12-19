
//functions for operations

function Add(a, b) {
    tempNumber = a + b;
    display.textContent = tempNumber;
    displayValue = tempNumber;
    
}

function Subtract(a, b) {
    tempNumber = a - b;
    display.textContent = tempNumber;
}

function Multiply(a, b) {
    tempNumber = a * b;
    display.textContent = tempNumber;
}

function Divide(a, b) {
    tempNumber = a / b;
    display.textContent = tempNumber;
}
//Operate will call the operator according to
//what was chosen 
function Operate(operator, n1, n2) {
    if (operator.textContent == "+") {
        Add(n1, n2)
    }
    if (operator.textContent == "-") {
        Subtract(n1, n2)
    }
    if (operator.textContent == "x") {
        Multiply(n1, n2)
    }
    if (operator.textContent == "÷") {
        Divide(n1, n2)
    }
    
}

//CE button
function clearDisplay() {
    displayValue = "";
    display.textContent = "";
}

//AC button
function allClear() {
    displayValue = "";
    display.textContent = "";
    value1 = 0;
    value2 = 0;
    tempNumber = 0;
}

//set variables
let tempNumber = 0;
let value1 = 0;
let value2 = 0;
let displayValue = "";
let tempOperator = "";

const display = document.querySelector('.screen');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const ac = document.querySelector('.ac');
const ce = document.querySelector('.ce');

//show the numbers you click in the display, and
//store them in a variable displayValue
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        displayValue += number.textContent;
        display.textContent = displayValue;
    })
});

//when click on an operator, store the first value
//in a variable and them clear the display
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        value1 = displayValue;
        tempOperator = operator;
        clearDisplay();
    })
});

//clicking on equals will call the Operate using the 
//values and returning the result on display
equals.addEventListener('click', () => {
    value2 = displayValue;
    Operate(tempOperator, parseInt(value1), parseInt(value2))
})

//clear buttons
ac.addEventListener('click', () => {
    allClear();
})
ce.addEventListener('click', () => {
    clearDisplay();
})