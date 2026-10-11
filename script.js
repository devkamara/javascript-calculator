const display = document.getElementById('result');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
const historyList = document.getElementById('history-list');
const clearHistoryButton = document.getElementById('clear-history');

let currentInput = '';

numbers.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.value;
        display.value = currentInput;
    })
})

display.addEventListener('input', () => {
    currentInput = display.value;
})

clearButton.addEventListener('click', () => {
    currentInput = '';
    display.value = '';
})

equalsButton.addEventListener('click', () => {
    try {
        const result = eval(currentInput);
        display.value = result;
        addToHistory(currentInput, result);
        currentInput = '';
    } catch (error) {
        display.value = 'Error';
    }
})

operators.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.value;
        display.value = currentInput;
    })
});

clearHistoryButton.addEventListener('click', clearHistory);

function addToHistory(expression, result) {
    const historyItem = document.createElement('li');
    historyItem.textContent = `${expression} = ${result}`;
    historyList.appendChild(historyItem);
}

function clearHistory() {
    historyList.innerHTML = '';
}

