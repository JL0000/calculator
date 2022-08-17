let displayValue = ""

const idToChar = {
    "add": "+",
    "subsctract": "-",
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
    if (c !== "equals" && c !== "clear") {   
        displayValue += e.target.innerHTML
        updateDisplay(displayValue);
    }
    else updateDisplay();
}

function updateDisplay(displayValue = "") {
    document.getElementById("display-output").innerHTML = displayValue;
}