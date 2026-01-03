// 3 variables for each: Number, Operator, another Number
let firstNumber = null;
let secondNumber = null;
// let operator = "";

let numbers = document.querySelectorAll("#numbers > button");
console.log(numbers);

numbers.forEach(number => {
    number.addEventListener("click", () => {
        const selectedId = number.id 
        numberClick(selectedId);
        console.log(firstNumber);
        console.log(secondNumber);
    });
});

function numberClick(id) {
    if (firstNumber === null) {
        firstNumber = id; 
        return firstNumber;
    } else if (secondNumber === null) {
        secondNumber = id;
        return secondNumber;
    }
    // } else {
    //     operate(firstNumber, secondNumber, operator);
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
// function operate(numb1, numb2, operat) {
//     if (operat === ) {
//         add(numb1, numb2);
//     }
//     if (operat === ) {
//         substract(numb1, numb2);
//     }
//     if (operat === ) {
//         multiply(numb1, numb2);
//     }
//     if (operat === ) {
//         divide(numb1, numb2);
//     }
//
// }

// Function for display KeyStrokes
