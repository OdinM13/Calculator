// 3 variables for each: Number, Operator, another Number
let firstNumber = null;
let secondNumber = null;
let helpingNumber = "";
let firstOperator = "";
let secondOperator = "";

const display = document.querySelector("#display > p");
let numbers = document.querySelectorAll("#numbers > button");
console.log(numbers);
let operators = document.querySelectorAll("#operators > button");
console.log(operators);


numbers.forEach(number => {
    number.addEventListener("click", () => {
        const selectedId = number.id 
        numberClick(selectedId);
        console.log(helpingNumber);
    });
});

operators.forEach(opera => {
    opera.addEventListener("click", () => {
        const selectedId = opera.id 
        operatorClick(selectedId);
        console.log(firstNumber);
        console.log(secondNumber);
        console.log(firstOperator);
        console.log(secondOperator);
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
    if (firstNumber === null) {
        firstNumber = Number(helpingNumber); 
        helpingNumber = "";
        // return firstNumber;
    } else if (secondNumber === null) {
        secondNumber = Number(helpingNumber);
        helpingNumber = "";
        operate(firstNumber, secondNumber, firstOperator);
        // return secondNumber;
    } 
    // else {
    //     operate(firstNumber, secondNumber, firstOperator);
    // }
}

// add function
function add (a, b) {
    return a + b;
}

// substract function
function substract (a, b) {
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
    let result = 0;
    if (operat === "add") {
        result = add(numb1, numb2);
    }
    if (operat === "substract") {
        result = substract(numb1, numb2);
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
    console.log(result);
    display.innerText = result;
};

// Function for display KeyStrokes
