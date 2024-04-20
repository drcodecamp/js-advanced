// Pure functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Impure functions (modify external state)
let result = 0;

const addImpure = (a, b) => {
    result = a + b;
    return result;
};

const subtractImpure = (a, b) => {
    result = a - b;
    return result;
};

const multiplyImpure = (a, b) => {
    result = a * b;
    return result;
};

const divideImpure = (a, b) => {
    result = a / b;
    return result;
};

function performOperation(operation, isImpure) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers');
        return;
    }

    let operationResult;

    if (isImpure) {
        switch (operation) {
            case 'add':
                operationResult = addImpure(num1, num2);
                break;
            case 'subtract':
                operationResult = subtractImpure(num1, num2);
                break;
            case 'multiply':
                operationResult = multiplyImpure(num1, num2);
                break;
            case 'divide':
                operationResult = divideImpure(num1, num2);
                break;
            default:
                alert('Invalid operation');
                return;
        }
    } else {
        switch (operation) {
            case 'add':
                operationResult = add(num1, num2);
                break;
            case 'subtract':
                operationResult = subtract(num1, num2);
                break;
            case 'multiply':
                operationResult = multiply(num1, num2);
                break;
            case 'divide':
                operationResult = divide(num1, num2);
                break;
            default:
                alert('Invalid operation');
                return;
        }
    }

    document.getElementById('result').textContent = operationResult;
}