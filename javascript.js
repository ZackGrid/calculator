let tempNumber = 0;

function Add(a, b) {
    tempNumber = a + b;
}

function Subtract(a, b) {
    tempNumber = a - b;
}

function Multiply(a, b) {
    tempNumber =  a * b;
}

function Divide(a, b) {
    tempNumber = a / b;
}

function Operate(operator, n1, n2) {
    if (operator == "Add") {
        Add(n1, n2)
    }
    if (operator == "Subtract") {
        Subtract(n1, n2)
    }
    if (operator == "Multiply") {
        Multiply(n1, n2)
    }
    if (operator == "Divide") {
        Divide(n1, n2)
    }
    return tempNumber;
}