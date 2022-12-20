
//functions for operations

function Add(a, b) {
    tempNumber = a + b;
    display.textContent = Math.round(tempNumber * 100) / 100 ;
    displayValue = tempNumber;
    Errors(tempNumber); 
}

function Subtract(a, b) {
    tempNumber = a - b;
    display.textContent = Math.round(tempNumber * 100) / 100 ;
    displayValue = tempNumber;
    Errors(tempNumber); 
}

function Multiply(a, b) {
    tempNumber = a * b;
    display.textContent = Math.round(tempNumber * 100) / 100 ;
    displayValue = tempNumber;
    Errors(tempNumber);
}

function Divide(a, b) {
    tempNumber = a / b;
    display.textContent = Math.round(tempNumber * 100) / 100 ;
    displayValue = tempNumber;
    Errors(tempNumber);
}
//Operate will call the operator according to
//what was chosen 
function Operate(operator, n1, n2) {
    if (operator == "+") {
        Add(n1, n2)
    }
    if (operator == "-") {
        Subtract(n1, n2)
    }
    if (operator == "*") {
        Multiply(n1, n2)
    }
    if (operator == "/") {
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
    marker = 1;
}

//set variables
let tempNumber = 0.0;
let value1 = 0.0;
let value2 = 0.0;
let displayValue = "";
let tempOperator = "";
let marker = 1;


const display = document.querySelector('.screen');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const ac = document.querySelector('.ac');
const ce = document.querySelector('.ce');
const comma = document.querySelector('.comma');

//show the numbers you click in the display, and
//store them in a variable displayValue
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        NumberFunction(number.textContent)
    })
})

comma.addEventListener('click', () => {
    if (displayValue.includes('.')) {
        return
    } else {
        displayValue += comma.textContent;
        display.textContent = displayValue;
    }
})

// window.addEventListener('keydown', (k) => {
//     const array = [];
//     numbers.forEach((number) => {
//         array.push(number.textContent);
//     })
//     if (array.includes(k.key)) {
//         NumberFunction(k.key)
//     }
// })

//when click on an operator, store the first value
//in a variable and then clear the display, if 
//you continue to click on an operator, operate
//and give result for each new operation 
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        OperatorFunction(operator.textContent)
    })
})

// window.addEventListener('keydown', (k) => {
//     const array = [];
//     operators.forEach((operator) => {
//         array.push(operator.textContent);
//     })
//     if (array.includes(k.key)) {
//         OperatorFunction(k.key)
//     }
// })

//clicking on equals will call the Operate() using the 
//values and returning the result on display

equals.addEventListener('click', () => {
    value2 = displayValue;
    Operate(tempOperator, parseFloat(value1), parseFloat(value2));
    marker = 1;
})

// window.addEventListener('keydown', (k) => {    
//     if (k.key === "Enter") {
//         value2 = displayValue;
//         Operate(tempOperator, parseFloat(value1), parseFloat(value2));
//         marker = 1;
//     }
// })

//clear buttons
ac.addEventListener('click', () => {
    allClear();
})
ce.addEventListener('click', () => {
    clearDisplay();
})

function Errors(result) {
    if (result == Infinity) {
        allClear();
        display.textContent = "Division by zero is undefined";
    }
}

function OperatorFunction(value) {
    if (marker == 1) {
        value1 = displayValue;
        clearDisplay();
        marker = 2;
        tempOperator = value;
    } else if (marker == 2) {
        value2 = displayValue;
        Operate(tempOperator, parseFloat(value1), parseFloat(value2));
        marker = 3;
        tempOperator = value;
    }
}

function NumberFunction(value) {
    if (marker == 3) {
        clearDisplay();
        marker = 2;
        value1 = tempNumber;
    } 
    if (marker != 3) {
        displayValue += value;
        display.textContent = displayValue;
    }
}

// operators.forEach((operator) => {
//     operator.addEventListener('click',
//         () => {
        
//         if (marker == 1) {
//             value1 = displayValue;
//             clearDisplay();
//             marker = 2;
//             tempOperator = operator;
//         } else if (marker == 2) {
//             value2 = displayValue;
//             Operate(tempOperator, parseFloat(value1), parseFloat(value2));
//             marker = 3;
//             tempOperator = operator;
//         }
//         // value1 = displayValue;
//         // tempOperator = operator;
//         // clearDisplay();    
//     })
// });

// numbers.forEach((number) => {
//     number.addEventListener('click', () => {
//         if (marker == 3) {
//             clearDisplay();
//             marker = 2;
//             value1 = tempNumber;
//         } 
//         if (marker != 3) {
//             displayValue += number.textContent;
//             display.textContent = displayValue;
//         }    
//         // displayValue += number.textContent;
//         // display.textContent = displayValue;
//     })
// });