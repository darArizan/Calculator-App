let nums = document.getElementsByClassName('calc__num')
let display = document.querySelector('.calc__display');
let deleteBtn = document.querySelector('.calc__delete');
let operators = document.querySelectorAll('.operators');
let equal = document.querySelector('.calc__equal');

operators = Array.from(operators);
nums = Array.from(nums);

let result;
let num1 = '';
let numArr = [];
let operatArr = [];

nums.forEach(num => {
    num.addEventListener('click', () => printNum(num))
});

function printNum(num) {

    num1 += num.innerHTML;
    num1 = parseInt(num1);
    display.value += num.innerHTML;

}

operators.forEach(operator => {

    operator.addEventListener('click', () => printOperators(operator))
});

function printOperators(operator) {
    numArr.push(num1);
    display.value += operator.innerHTML;
    operatArr.push(operator.innerHTML);
    num1 = '';

}
deleteBtn.addEventListener('click', deleteAll)

function deleteAll() {
    numArr = [];
    operatArr = [];
    display.value = ''
    num1 = '';
    result = 0;
}

equal.addEventListener('click', subNum)

function subNum() {

    numArr.push(num1);
    result = numArr[0];
    // display.value = '';
    for (let i = 0; i < numArr.length - 1; i++) {
        switch (operatArr[i]) {
            case "+": result += numArr[i + 1];
                break;
            case "-": result -= numArr[i + 1]
                break;
            case "*": result *= numArr[i + 1]
                break;
            case "/": result /= numArr[i + 1]
                break;

        }
    }
    display.value = result;
    numArr = [];
    operatArr = [];

}



