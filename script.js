let displayValue = ""
let inputArr = []

const idToChar = {
    "add": "+",
    "subtract": "-",
    "multiply": "*",
    "divide": "/", 
    "period": ".",
    "zero": "0",
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9",
}

const buttons = document.querySelectorAll("button")

buttons.forEach(button => button.addEventListener("click", input));

function input(e) {
    const c = e.target.id
    if (c === "clear") {
        updateDisplay();
        clearValues();
    }
    else if (c === "equals") {
        const result = getResult(inputArr);
        updateDisplay(result)
        clearValues();
    }
    else {   
        displayValue += e.target.innerHTML;
        inputArr.push(idToChar[e.target.id]);
        updateDisplay(displayValue);
    }
}

function getResult(arr) {
    try{
        const lastEle = arr.length - 1;
        let total = 0;
        let operand = "";
        return arr.reduce((prevValue, curr, i) => {
            if (i === lastEle) {
                prevValue += curr;
                return getOperation(operand, total, Number(prevValue));
            }
            else if (isNaN(curr)) {
                if (!operand) {
                    total = Number(prevValue);
                }
                else { 
                    total = getOperation(operand, total, Number(prevValue));
                }
                operand = curr;
                return ""
            }
            else {
                return prevValue += curr;
            }
        })
    }
    catch(err) {
        return err;
    }

}

function getOperation(operand, a, b) {
    if (operand === "+") {    
        return operate(add, a, b)
    }
    else if (operand === "-") {    
        return operate(subtract, a, b)
    }
    else if (operand === "*") {    
        return operate(multiply, a, b)
    }
    else {
        if (b === 0) {
            throw "Undefined :("
        }    
        return operate(divide, a, b)
    }
}

function updateDisplay(displayValue = "") {
    document.getElementById("display-output").innerHTML = displayValue;
}

function clearValues() {
    displayValue = ""
    inputArr = []
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operation, a, b) {
    return operation(a, b);
}
