// 3 variables for each: Number, Operator, another Number
let firstNumber = null;
let secondNumber = null;
let helpingNumber = "";
let firstOperator = "";
let secondOperator = "";
let result = 0;

const display = document.querySelector("#display > p");
let numbers = document.querySelectorAll("#numbers > button");
let operators = document.querySelectorAll("#operators > button");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");

clear.addEventListener("click", () => clearAC());

equal.addEventListener("click", () => {
    checkNumbers();
    operate(firstNumber, secondNumber, firstOperator);
});

numbers.forEach(number => {
    number.addEventListener("click", () => {
        const selectedId = number.id 
        numberClick(selectedId);
        keystrokes(helpingNumber);
        // console.log("Helping Number: ", helpingNumber);
    });
});

operators.forEach(opera => {
    opera.addEventListener("click", () => {
        const selectedId = opera.id 
        operatorClick(selectedId);
        // console.log("FirstNumber: ", firstNumber);
        // console.log("SecondNumber: ", secondNumber);
        // console.log("FirstOperator: ", firstOperator);
        // console.log("SecondOperator: ", secondOperator);
    });
});

function numberClick(id) {
    return helpingNumber += id;
}

function operatorClick (id) {
    if (firstOperator === "") {
        firstOperator = id;
    } else {
        secondOperator = id;
    }
    checkNumbers();
    if (firstNumber !== null && secondNumber !== null) {
        operate(firstNumber, secondNumber, firstOperator);
    }
}

function checkNumbers() {
    if (helpingNumber !== ""){
        if (firstNumber === null) {
            firstNumber = Number(helpingNumber); 
            helpingNumber = "";
            // return firstNumber;
        } else if (secondNumber === null) {
            secondNumber = Number(helpingNumber);
            helpingNumber = "";
        }
    }
}

function clearAC() {
    firstNumber = null;
    secondNumber = null;
    helpingNumber = "";
    firstOperator = "";
    secondOperator = "";
    display.innerText = "";
}

// add function
function add (a, b) {
    return a + b;
}

// subtract function
function subtract (a, b) {
    return a - b;
}

// multiply function
function multiply (a, b) {
    return a * b;
}
// divide function
function divide (a, b) {
    return a / b;
}

// operate function
function operate(numb1, numb2, operat) {
    // console.log("FirstOperator before Operate: ", firstOperator);
    // console.log("SecondOperator before Operate: ", secondOperator);
    // console.log("FirstNumber before Operate: ", firstNumber);
    // console.log("SecondNumber before Operate: ", secondNumber);
    if (firstOperator === "") {
        return result;
    }
    if (operat === "add") {
        result = add(numb1, numb2);
    }
    if (operat === "subtract") {
        result = subtract(numb1, numb2);
    }
    if (operat === "multiply") {
        result = multiply(numb1, numb2);
    }
    if (operat === "divide") {
        result = divide(numb1, numb2);
    }
    firstNumber = result;
    firstOperator = secondOperator;
    secondOperator = "";
    secondNumber = null;
    // console.log("result: ", result);
    // console.log("FirstOperator after Operate: ", firstOperator);
    // console.log("SecondOperator after Operate: ", secondOperator);
    // console.log("FirstNumber after Operate: ", firstNumber);
    // console.log("SecondNumber after Operate: ", secondNumber);
    display.innerText = result;
};

// Function for display KeyStrokes
function keystrokes(input){
    display.innerText = input;
}
